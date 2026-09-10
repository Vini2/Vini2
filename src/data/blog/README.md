# Blog Posts

Each blog post lives in its own folder:

```text
src/data/blog/my-new-post/index.md
```

Use Markdown for the body. The page template renders headings, links, lists, images, blockquotes, tables, and code blocks automatically.

````md
---
title: "My New Post"
slug: "my-new-post"
date: "2026-09-10"
updated: "2026-09-10"
sourceUrl: ""
featuredImage: "/blog-images/my-new-post/cover.png"
categories: ["Bioinformatics"]
tags: ["Markdown", "Research"]
---

Start the post with a short opening paragraph.

## A Section Heading

Write normal Markdown here with **bold text**, _italic text_, and [links](https://example.com).

![Useful alt text](/blog-images/my-new-post/figure.png)

> Use blockquotes for notes or quoted material.

```python
print("Code blocks work too")
```
````

Article styling is centralized in `src/styles.css` under `.blog-prose`. The fastest way to change the look is to adjust the `--blog-*` variables there.
