import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { URL } from 'node:url'

const root = process.cwd()
const postsDir = join(root, 'src/data/blog')
const imagesDir = join(root, 'public/blog-images')
const postFiles = Array.from({ length: 20 }, (_, index) =>
  `/tmp/vini-post-${String(index + 1).padStart(2, '0')}.html`,
)

mkdirSync(postsDir, { recursive: true })
mkdirSync(imagesDir, { recursive: true })

function decodeHtml(value = '') {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function textFromHtml(value = '') {
  return decodeHtml(value.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim()
}

function slugFromUrl(sourceUrl) {
  const parts = new URL(sourceUrl).pathname.split('/').filter(Boolean)
  return decodeURIComponent(parts.at(-1)).replace(/[^\w-]+/g, '-').replace(/-+/g, '-')
}

function escapeFrontmatter(value = '') {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function frontmatterArray(values) {
  if (!values.length) return '[]'
  return `[${values.map((value) => `"${escapeFrontmatter(value)}"`).join(', ')}]`
}

function extractMeta(html, property) {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(
    `<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`,
    'i',
  )
  return decodeHtml(html.match(pattern)?.[1] ?? '')
}

function extractArticleContent(html) {
  const startMatch = html.match(/<div class="entry-content">/)
  if (!startMatch?.index) throw new Error('Could not find entry-content')

  const start = startMatch.index + startMatch[0].length
  const tagPattern = /<\/?div\b[^>]*>/gi
  tagPattern.lastIndex = start
  let depth = 1
  let match

  while ((match = tagPattern.exec(html))) {
    depth += match[0].startsWith('</') ? -1 : 1
    if (depth === 0) return html.slice(start, match.index)
  }

  throw new Error('Could not close entry-content')
}

function extractLinks(html, className, label) {
  const pattern = new RegExp(`<span class="${className}">${label}\\s*([\\s\\S]*?)<\\/span>`, 'i')
  const inner = html.match(pattern)?.[1] ?? ''
  return [...inner.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((match) => textFromHtml(match[1]))
}

function cleanContent(html) {
  return html
    .replace(/<span id="more-[^"]+"><\/span>/g, '')
    .replace(/<h2>\s*Comments\s*<\/h2>[\s\S]*?(?=<h2>|$)/i, '')
    .replace(/<div id=["']jp-post-flair["'][\s\S]*$/i, '')
    .replace(/<div id=["']jp-relatedposts["'][\s\S]*?<\/div>\s*<\/div>/gi, '')
    .replace(/<div class="sharedaddy[\s\S]*?<\/div>\s*<\/div>/g, '')
    .replace(/<div class='sharedaddy[\s\S]*?<\/div>\s*<\/div>/g, '')
    .replace(/<div class="wpa[\s\S]*?<\/div>/g, '')
    .replace(/\sclass=(["'])[^"']*\1/g, '')
    .replace(/\sstyle=(["'])[^"']*\1/g, '')
    .replace(/\sdecoding=(["'])[^"']*\1/g, '')
    .replace(/\sloading=(["'])[^"']*\1/g, '')
    .replace(/\ssrcset=(["'])[^"']*\1/g, '')
    .replace(/\ssizes=(["'])[^"']*\1/g, '')
    .replace(/\sdata-[a-z0-9-]+=(["'])[^"']*\1/gi, '')
    .replace(/\srel="noreferrer noopener"/g, ' rel="noreferrer"')
    .replace(/<h1/g, '<h2')
    .replace(/<\/h1>/g, '</h2>')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function getImageExtension(url) {
  const original = new URL(url)
  const cleanExt = extname(original.pathname).toLowerCase()
  return cleanExt || '.jpg'
}

function localImageName(url, usedNames) {
  const original = new URL(url)
  const rawName = basename(original.pathname).replace(/[^\w.-]+/g, '-').toLowerCase()
  const ext = getImageExtension(url)
  const stem = rawName.replace(/\.[^.]+$/, '') || 'image'
  let name = `${stem}${ext}`
  let counter = 2
  while (usedNames.has(name)) {
    name = `${stem}-${counter}${ext}`
    counter += 1
  }
  usedNames.add(name)
  return name
}

function downloadImage(url, destination) {
  if (existsSync(destination)) return
  execFileSync('curl', ['-L', '-sS', url, '-o', destination], { stdio: 'inherit' })
}

function migratePost(file) {
  const html = readFileSync(file, 'utf8')
  const sourceUrl = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!sourceUrl) throw new Error(`Could not find canonical URL in ${file}`)

  const slug = slugFromUrl(sourceUrl)
  const title = textFromHtml(html.match(/<h1 class="entry-title">([\s\S]*?)<\/h1>/)?.[1] ?? '')
  const dateTime = html.match(/<time class="entry-date published" datetime="([^"]+)"/)?.[1] ?? ''
  const updatedTime = html.match(/<time class="updated" datetime="([^"]+)"/)?.[1] ?? dateTime
  const categories = extractLinks(html, 'cat-links', 'Posted in')
  const tags = extractLinks(html, 'tags-links', 'Tagged')
  const postImageDir = join(imagesDir, slug)
  const usedImageNames = new Set()

  mkdirSync(postImageDir, { recursive: true })

  const featuredUrl =
    html.match(/<a class="post-thumbnail"[\s\S]*?<img[^>]+(?:data-orig-file|src)="([^"]+)"/)?.[1] ??
    extractMeta(html, 'og:image')
  let featuredImage = ''

  if (featuredUrl) {
    const url = decodeHtml(featuredUrl)
    const name = localImageName(url, usedImageNames)
    downloadImage(url, join(postImageDir, name))
    featuredImage = `/blog-images/${slug}/${name}`
  }

  let content = cleanContent(extractArticleContent(html))
  content = content.replace(/<img([^>]+)src="([^"]+)"([^>]*)>/g, (match, before, src, after) => {
    const imageUrl = decodeHtml(src)
    if (!/^https?:\/\//.test(imageUrl)) return match

    const name = localImageName(imageUrl, usedImageNames)
    downloadImage(imageUrl, join(postImageDir, name))
    return `<img${before}src="../../blog-images/${slug}/${name}"${after}>`
  })

  const frontmatter = [
    '---',
    `title: "${escapeFrontmatter(title)}"`,
    `slug: "${slug}"`,
    `date: "${dateTime.slice(0, 10)}"`,
    `updated: "${updatedTime.slice(0, 10)}"`,
    `sourceUrl: "${sourceUrl}"`,
    `featuredImage: "${featuredImage}"`,
    `categories: ${frontmatterArray(categories)}`,
    `tags: ${frontmatterArray(tags)}`,
    '---',
    '',
  ].join('\n')

  const postDir = join(postsDir, slug)
  mkdirSync(postDir, { recursive: true })
  writeFileSync(join(postDir, 'index.md'), `${frontmatter}${content}\n`)
  return { title, slug }
}

const migrated = postFiles.map(migratePost)
console.log(`Migrated ${migrated.length} posts:`)
for (const post of migrated) console.log(`- ${post.slug}: ${post.title}`)
