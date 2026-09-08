const pageModules = import.meta.glob('./pages/*.md', { eager: true })

export const pageEntries = Object.values(pageModules)
  .map((module) => ({
    ...module.frontmatter,
    Content: module.Content,
  }))
  .sort((left, right) => left.order - right.order)

export const pages = pageEntries
  .filter((page) => !['home', 'about'].includes(page.slug))
  .map(({ Content, ...frontmatter }) => frontmatter)

export function getPageEntry(slug) {
  return pageEntries.find((page) => page.slug === slug)
}
