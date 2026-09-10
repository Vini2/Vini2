import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const postsDir = join(root, 'src/data/blog')
const shouldUseGitSource = process.argv.includes('--from-git')

function decodeHtml(value = '') {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#10084;/g, 'love')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function stripTags(value = '') {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim(),
  )
}

function stripTagsLoose(value = '') {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n'),
  )
}

function readPostSource(file) {
  if (!shouldUseGitSource) return readFileSync(file, 'utf8')

  const repositoryPath = relative(root, file)
  return execFileSync('git', ['show', `HEAD:${repositoryPath}`], {
    cwd: root,
    encoding: 'utf8',
  })
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']*)["']`, 'i'))
  return decodeHtml(match?.[1] ?? '')
}

function codeLanguage(code = '') {
  if (/^\s*(import\s+java|public\s+class|class\s+\w+\s+extends|private\s+\w+)/m.test(code)) {
    return 'java'
  }

  if (/^\s*(from\s+\w+\s+import|import\s+\w+|def\s+\w+|print\s*\(|print\s+\w+)/m.test(code)) {
    return 'python'
  }

  if (/^\s*[{%][%{]|\b(requirements|package|source|build|test|about|extra):/m.test(code)) {
    return 'yaml'
  }

  if (/^\s*(git|conda|pip|wget|curl|cd|tar|chmod|quast\.py|metaquast\.py|flye|clustalo|\.\/)/m.test(code)) {
    return 'bash'
  }

  return 'text'
}

function codeFence(code = '', language = codeLanguage(code)) {
  const normalized = stripTags(code)
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return normalized ? `\n\n\`\`\`${codeLanguage(normalized)}\n${normalized}\n\`\`\`\n\n` : ''
}

function absolutizeImagePath(src) {
  return src
    .replace(/^\.\.\/\.\.\/blog-images\//, '/blog-images/')
    .replace(/^\/?public\/blog-images\//, '/blog-images/')
}

function inlineMarkdown(value = '') {
  return decodeHtml(
    value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, text) => {
      const code = stripTags(text).replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return `\`${code}\``
    })
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `**${inlineMarkdown(text)}**`)
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `_${inlineMarkdown(text)}_`)
    .replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, text) => {
      const href = attr(attrs, 'href')
      const label = stripTags(text) || href
      return href ? `[${label}](${href})` : label
    })
    .replace(/<img\b([^>]*)\/?>/gi, (_, attrs) => {
      const src = absolutizeImagePath(attr(attrs, 'src'))
      const alt = attr(attrs, 'alt')
      return src ? `![${alt}](${src})` : ''
    })
    .replace(/<\/?(span|div|p|template|svg|path|sub|sup)[^>]*>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim(),
  )
}

function convertGistTables(markdown) {
  return markdown.replace(/<table\b[^>]*data-paste-markdown-skip[^>]*>([\s\S]*?)<\/table>/gi, (_, table) => {
    const lines = [...table.matchAll(/<td[^>]*-LC\d+[^>]*>([\s\S]*?)<\/td>/gi)]
      .map((match) => stripTags(match[1]))
      .join('\n')
      .trimEnd()

    return codeFence(lines)
  })
}

function convertPreBlocks(markdown) {
  return markdown.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_, code) => codeFence(code))
}

function looksLikeCodeQuote(text = '') {
  const lines = stripTags(text)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (!lines.length) return false

  return lines.every((line) =>
    /^(START|STOP|REPEAT|UNTIL\b|Generate\b|Compute\b|Selection\b|Crossover\b|Mutation\b|while\b|if\b|for\b|return\b|pick up\b|study\b|Pop\b|Multipop\b|Find\b|Move\b|Delete\b|Replace\b|Merge\b|Free\b|Recursively\b|\(?m[>=]|[A-Z0-9_ ()*><=.'’+;{}-]+\s*(→|$)|ĉi\b|Score\b)/.test(
      line,
    ),
  )
}

function stripRemainingHtmlOutsideFences(markdown = '') {
  return markdown
    .split(/(```[\s\S]*?```)/g)
    .map((chunk) => {
      if (chunk.startsWith('```')) return `\n\n${chunk.trim()}\n\n`
      return chunk
        .split(/(`[^`\n]*`)/g)
        .map((part) => (part.startsWith('`') ? part : stripTagsLoose(part)))
        .join('')
    })
    .join('')
}

function convertLists(markdown) {
  return markdown
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, list) => {
      const items = [...list.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((match) => `- ${inlineMarkdown(match[1])}`)
        .join('\n')
      return `\n\n${items}\n\n`
    })
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, list) => {
      const items = [...list.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((match, index) => `${index + 1}. ${inlineMarkdown(match[1])}`)
        .join('\n')
      return `\n\n${items}\n\n`
    })
}

function convertBlocks(markdown) {
  return markdown
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<hr\s*\/?>/gi, '\n\n---\n\n')
    .replace(/<h([2-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, text) => {
      return `\n\n${'#'.repeat(Number(level))} ${inlineMarkdown(text)}\n\n`
    })
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, quote) => {
      if (looksLikeCodeQuote(quote)) return codeFence(quote)

      const lines = stripTags(quote)
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => `> ${line}`)
        .join('\n>\n')
      return `\n\n${lines}\n\n`
    })
    .replace(/<p[^>]*>\s*(<img\b[\s\S]*?\/?>)\s*([\s\S]*?)<\/p>/gi, (_, image, caption) => {
      const imageMarkdown = inlineMarkdown(image)
      const captionMarkdown = inlineMarkdown(caption)
      return `\n\n${imageMarkdown}${captionMarkdown ? `\n\n_${captionMarkdown}_` : ''}\n\n`
    })
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, text) => {
      const paragraph = inlineMarkdown(text)
      return paragraph ? `\n\n${paragraph}\n\n` : '\n\n'
    })
}

function tidyMarkdown(markdown) {
  return decodeHtml(markdown)
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/(?:^|\n)\s*This file contains hidden or bidirectional Unicode text[\s\S]*?Show hidden characters\s*(?=\n```)/g, '\n')
    .replace(/\n\s*view raw\s*\n\s*[^\n]+\n\s*hosted with .*? by GitHub\s*/g, '\n')
    .replace(/\n(```[a-z]*\n[\s\S]*?)\n+```\n/g, '\n$1\n```\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\n+```/g, '\n\n```')
    .replace(/```\n+/g, '```\n\n')
    .replace(/^\s+|\s+$/g, '')
}

function htmlBodyToMarkdown(body) {
  return tidyMarkdown(
    stripRemainingHtmlOutsideFences(convertBlocks(convertLists(convertGistTables(convertPreBlocks(body)))))
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n'),
  )
}

function convertPost(file) {
  const source = readPostSource(file)
  const match = source.match(/^(---[\s\S]*?---)\s*([\s\S]*)$/)
  if (!match) return false

  const [, frontmatter, body] = match
  if (!/<[a-z][\s\S]*>/i.test(body)) return false

  const markdown = htmlBodyToMarkdown(body)
  writeFileSync(file, `${frontmatter}\n${markdown}\n`)
  return true
}

let count = 0

for (const slug of readdirSync(postsDir)) {
  const post = join(postsDir, slug, 'index.md')
  if (!existsSync(post)) continue

  try {
    if (convertPost(post)) count += 1
  } catch (error) {
    console.error(`Could not convert ${post}`)
    throw error
  }
}

console.log(`Converted ${count} blog posts to Markdown.`)
