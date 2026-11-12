import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const postPath = (post: Post) => `/blog/${post.id}/`;

/** "12 November 2026", always in Tokyo time so the date does not shift with the visitor's zone. */
export function formatDate(date: Date, lang: "en" | "ja" = "en"): string {
  return new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "en-GB", {
    dateStyle: "long",
    timeZone: "Asia/Tokyo",
  }).format(date);
}
