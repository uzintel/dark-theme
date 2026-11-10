/** Editable TPMC site details, links, and page metadata. */
export const SITE = {
  name: "Tokyo Project Management Community",
  shortName: "TPMC",
  displayLogo: "TPMC.",
  tagline: "Connecting professionals. Sharing knowledge. Growing together.",
  primaryCtaLabel: "Join TPMC",
  description:
    "Discover TPMC, a Tokyo-based project management community connecting professionals through knowledge sharing, networking, and collaborative learning.",
  url: "https://dark-theme.jr-ergashov.workers.dev",
  lang: "en",
  locale: "en_JP",
  copyrightYear: 2026,

  community: {
    location: "Tokyo, Japan",
    bilingualParticipation: "English- and Japanese-language participation",
    foundedYear: null,
    regularDay: null,
    regularTime: null,
    meetingFormat: null,
    membershipFree: null,
  },

  links: {
    join: null,
    linkedinCommunity: null,
    linkedinFounder: null,
    communityGroup: null,
    contactEmail: null,
    eventRegistration: null,
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

  formgong: {
    provider: "Formgong",
    accessKey: "fk_your_access_key",
    endpoint: "https://formgong.com/submit",
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
