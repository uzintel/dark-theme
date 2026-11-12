import { SITE } from "../config";

/**
 * Organization data uses only confirmed community details and configured profile links.
 */
export function communityJsonLd(site: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": new URL("/#organization", site).href,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: new URL("/", site).href,
    image: new URL("/og.png", site).href,
    logo: new URL("/tpmc-logo.png", site).href,
    areaServed: { "@type": "City", name: SITE.community.location },
    sameAs: [SITE.links.linkedinCommunity, SITE.links.linkedinFounder].filter((href) => typeof href === "string"),
  };
}

interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  image: string;
  published: Date;
  modified?: Date;
  author?: string;
  lang: string;
  tags: string[];
}

/** schema.org BlogPosting for one post. Without a named author, the community is the author. */
export function blogPostingJsonLd(site: URL, post: BlogPostingInput) {
  const organization = { "@id": new URL("/#organization", site).href };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": post.url },
    url: post.url,
    image: post.image,
    datePublished: post.published.toISOString(),
    dateModified: (post.modified ?? post.published).toISOString(),
    inLanguage: post.lang,
    ...(post.tags.length > 0 ? { keywords: post.tags.join(", ") } : {}),
    author: post.author ? { "@type": "Person", name: post.author } : organization,
    publisher: organization,
  };
}

/** JSON for a <script type="application/ld+json">, safe against "</script>" in config strings. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
