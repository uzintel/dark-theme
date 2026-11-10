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

/** JSON for a <script type="application/ld+json">, safe against "</script>" in config strings. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
