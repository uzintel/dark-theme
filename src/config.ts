/** Editable TPMC site details, links, and page metadata. */
export const SITE = {
  name: "Tokyo Project Management Community",
  shortName: "TPMC",
  displayLogo: "TPMC.",
  tagline: "Connecting professionals. Sharing knowledge. Growing together.",
  primaryCtaLabel: "Join TPMC",
  description:
    "Discover TPMC, a Tokyo-based project management community connecting professionals through knowledge sharing, networking, and collaborative learning.",
  // Keep the staging URL canonical until the production domain resolves and is connected.
  url: "https://dark-theme.jr-ergashov.workers.dev",
  productionUrl: "https://tpmc.tokyo",
  lang: "en",
  locale: "en_JP",
  copyrightYear: 2026,

  community: {
    location: "Tokyo, Japan",
    bilingualParticipation: "participation in English and Japanese",
    foundedYear: null,
    regularDay: null,
    regularTime: null,
    meetingFormat: "Event-specific",
    membershipFree: true,
    membershipApprovalRequired: true,
  },

  links: {
    join: "https://www.linkedin.com/groups/9833230/",
    linkedinCommunity: "https://www.linkedin.com/groups/9833230/",
    linkedinFounder: null,
    communityGroup: "https://www.linkedin.com/groups/9833230/",
    contactEmail: "info@tpmc.tokyo",
    eventRegistration: "https://luma.com/pmc",
    eventCalendarEmbed: "https://luma.com/embed/calendar/cal-HcdBfoKcs6OaUAf/events",
  },

  seo: {
    home: {
      title: "TPMC — Tokyo Project Management Community",
      description:
        "Discover TPMC, a Tokyo-based project management community connecting professionals through knowledge sharing, networking, and collaborative learning.",
    },
    activities: {
      title: "Community Activities & Events | TPMC Tokyo",
      description:
        "Explore TPMC activities, including project management discussions, professional networking, career development, and collaborative learning in Tokyo.",
    },
    about: {
      title: "About TPMC | Tokyo Project Management Community",
      description:
        "Learn about Tokyo Project Management Community (TPMC), our mission, values, and commitment to connecting and empowering professionals in Japan.",
    },
    contact: {
      title: "Contact & Join TPMC | Tokyo",
      description:
        "Get in touch with TPMC to join our project management community, participate in events, or explore speaking and collaboration opportunities.",
    },
  },

  theme: { accent: "#3A3AD0", accentText: "#FFFFFF" },

  forms: {
    preferredMode: "website-form",
    fallbackMode: "mailto",
    provider: null,
    endpoint: null,
    recipientEmail: "info@tpmc.tokyo",
    privacyNoticeUrl: null,
    verified: false,
    subject: "New message from the TPMC website",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Activities", href: "/activities/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;

export type SiteConfig = typeof SITE;
