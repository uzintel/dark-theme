import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../config";
import { getPosts, postPath } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} blog`,
    description: SITE.seo.blog.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: post.data.tags,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
