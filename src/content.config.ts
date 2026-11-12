import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Blog posts are Markdown files in src/content/blog/. The file name becomes the URL:
 * welcome.md -> /blog/welcome/. Files starting with "_" (such as _TEMPLATE.md) are ignored.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    /** Page title and H1. Keep it under about 60 characters. */
    title: z.string().min(5),
    /** One or two sentences (about 120-160 characters): the search result snippet and social preview. */
    description: z.string().min(40).max(200),
    /** YYYY-MM-DD */
    pubDate: z.coerce.date(),
    /** Set when you change a post in a meaningful way. */
    updatedDate: z.coerce.date().optional(),
    /** Person's name. Leave out to credit the community. */
    author: z.string().optional(),
    /** "en" or "ja": sets the language of the article for search engines and screen readers. */
    lang: z.enum(["en", "ja"]).default("en"),
    tags: z.array(z.string()).default([]),
    /** Optional 1200x630 image in /public, e.g. "/blog/my-post.png". Defaults to the site image. */
    image: z.string().optional(),
    /** Draft posts are not built, listed or indexed. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
