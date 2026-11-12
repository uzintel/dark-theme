import type { APIRoute } from "astro";
import { SITE } from "../config";
import { getPosts, postPath } from "../lib/blog";

/** /llms.txt: a plain-Markdown map of the site for AI tools (llmstxt.org convention). */
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(SITE.url);
  const abs = (path: string) => new URL(path, base).href;
  const posts = await getPosts();

  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "## Main pages",
    "",
    `- [Home](${abs("/")}): Community introduction and events calendar`,
    `- [Activities](${abs("/activities/")}): The community's activity themes`,
    `- [About](${abs("/about/")}): Mission, vision, values, and leadership`,
    `- [Contact](${abs("/contact/")}): Ways to get in touch and join`,
    "",
    "## Blog",
    "",
    ...posts.map((post) => `- [${post.data.title}](${abs(postPath(post))}): ${post.data.description}`),
    "",
    "## Optional",
    "",
    `- [Blog RSS feed](${abs("/rss.xml")})`,
    ...(SITE.links.eventRegistration ? [`- [Upcoming events (Luma)](${SITE.links.eventRegistration})`] : []),
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
