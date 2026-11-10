# TPMC Website Migration — GitHub Copilot Implementation Specification

> **Purpose:** Replace all Quillmoor Analytics demo content in the existing Astro dark-theme website with Tokyo Project Management Community (TPMC) content. Preserve the existing dark visual theme and reusable components. This file is both the content source of truth and the implementation brief for GitHub Copilot.
>
> **Target site:** https://dark-theme.jr-ergashov.workers.dev/
>
> **Status:** Draft — confirm external links, membership policy, meeting format, and contact details before publishing.

## 0. Instructions for GitHub Copilot

1. Inspect the existing Astro project structure, routes, shared layouts, components, metadata, and form handler before editing.
2. Replace **all** fictional Quillmoor Analytics branding, copy, statistics, staff, pricing, address, telephone, and placeholder contact information across all pages, including mobile menus, footers, SEO metadata, and social previews.
3. Preserve the site's dark aesthetic, typography, spacing, responsiveness, accessibility, and existing reusable components. Adapt component labels and data structures as necessary.
4. Change the `/services/` page to `/activities/`; update internal links and create a permanent redirect from `/services/` where supported by the deployment platform.
5. Use the copy below verbatim unless small edits are necessary for layout or grammar. Do not fabricate member counts, testimonials, sponsors, event histories, named organizers, or external URLs.
6. Centralize editable values and external links in a shared config or content file (e.g., `src/data/site.ts`), rather than hard-coding them repeatedly.
7. For missing URLs, do not create broken `href="#"` links. Hide the corresponding action, or render a disabled/non-clickable state with a clear development TODO.
8. Ensure the contact form actually submits successfully; do not imply success if the backend is unconfigured. Keep or replace the existing provider only after checking configuration and privacy implications.
9. Update document titles, meta descriptions, Open Graph/Twitter metadata, canonical URLs, favicon/brand assets, sitemap, and navigation as supported by the existing project.
10. Run the project's existing lint/build checks and verify all four pages at desktop and mobile widths. Report any unresolved placeholders.

## 1. Editable Configuration

Create or update a shared configuration object using these values. `null` means **not yet confirmed**; do not invent a value.

```yaml
brand:
  shortName: "TPMC"
  displayLogo: "TPMC."
  fullName: "Tokyo Project Management Community"
  tagline: "Connecting professionals. Sharing knowledge. Growing together."
  location: "Tokyo, Japan"
  foundedYear: null
  copyrightYear: 2026
site:
  baseUrl: "https://dark-theme.jr-ergashov.workers.dev"
  language: "en"
  primaryCtaLabel: "Join TPMC"
community:
  regularDay: "Saturday" # Confirm before launch
  regularTime: "09:00–11:00 JST" # Confirm before launch
  meetingFormat: null # online | in-person | hybrid
  membershipFree: null # confirm before making a public claim
  bilingualParticipation: "English and Japanese participation welcome"
links:
  join: null
  linkedinCommunity: null
  linkedinFounder: null
  communityGroup: null
  contactEmail: null
  eventRegistration: null
forms:
  provider: null # inspect existing Formgong integration
  endpoint: null # verify before enabling
```

**Routing**

| Label | Path | Notes |
|---|---|---|
| Home | `/` | Existing |
| Activities | `/activities/` | Replaces `/services/` |
| About | `/about/` | Existing |
| Contact | `/contact/` | Existing |
| Join TPMC | `links.join` | External URL; hide until configured |
| LinkedIn | `links.linkedinCommunity` | External URL; hide until configured |

## 2. Global Header, Navigation and Footer

**Logo:** `TPMC.` (accessible label: `Tokyo Project Management Community — Home`).

**Desktop/mobile nav:** Home · Activities · About · Contact · Join TPMC (CTA; only if URL configured).

**Remove:** demo email/phone in headers, `Book a call`, Quillmoor branding, fictional US address.

**Footer:**

- **Heading:** Let's connect.
- **Brand:** TPMC.
- **Description:** Tokyo Project Management Community — Connecting professionals. Sharing knowledge. Growing together.
- **Location:** Tokyo, Japan
- **Explore:** Home · Activities · About · Contact
- **Connect:** LinkedIn · Community Group · Email (show only configured destinations)
- **Copyright:** © 2026 Tokyo Project Management Community. All rights reserved.
- **Footer closing line:** Built for a community that never stops learning.
- Preserve Astro theme attribution if required by the theme license; remove `A made-up business`.

## 3. Homepage `/`

### 3.1 Hero

**Eyebrow:** Tokyo Project Management Community

**H1:** Where Project Minds Connect.

**Body:** A community for project managers, product professionals, and aspiring leaders to connect, exchange knowledge, and grow together. Through interactive discussions, practical learning, and networking opportunities, TPMC brings together professionals from different industries and backgrounds.

**Primary CTA:** Join the Community → `links.join` (only if configured)

**Secondary CTA:** Explore Our Activities → `/activities/`

### 3.2 Four Highlights

Replace numerical demo statistics with qualitative facts (do not display fake counts):

1. **Tokyo-Based Community**
2. **Cross-Industry Network**
3. **Practical Knowledge Sharing**
4. **Open to All Experience Levels**

### 3.3 Introduction

**H2:** Learn. Connect. Grow.

**Body:** Project management is more than frameworks and methodologies. It's about people, collaboration, decision-making, and delivering meaningful outcomes. TPMC creates a space where professionals can exchange experiences, discuss real-world challenges, and learn from one another. Whether you're an experienced project manager or just beginning your journey, there's a place for you in our community.

**Pull quote:** Great projects are built by people who never stop learning.

### 3.4 What We Do — Six Cards

| ID | Title | Description | Link |
|---|---|---|---|
| 01 | Knowledge Sharing | Exchange practical insights, methodologies, and lessons learned from real projects. | `/activities/#knowledge-sharing` |
| 02 | Community Meetups | Connect with fellow professionals through interactive discussions and networking sessions. | `/activities/#community-meetups` |
| 03 | Career Development | Explore career paths, professional certifications, and leadership opportunities. | `/activities/#career-development` |
| 04 | Industry Insights | Discuss emerging technologies, AI, Agile, and evolving project management practices. | `/activities/#industry-insights` |
| 05 | Collaborative Learning | Learn from peers through case studies, workshops, and problem-solving discussions. | `/activities/#collaborative-learning` |
| 06 | Professional Networking | Build meaningful relationships with professionals across industries and organizations. | `/activities/#professional-networking` |

### 3.5 Four-Step Journey

**H2:** Your Community Journey

1. **Join the Community:** Become part of a network of professionals passionate about project management and continuous learning.
2. **Participate in Discussions:** Join our regular sessions to exchange ideas, share experiences, and explore practical challenges.
3. **Learn and Contribute:** Gain insights from others while contributing your own knowledge, perspectives, and expertise.
4. **Grow Your Network:** Build lasting professional relationships and discover opportunities for collaboration and career growth.

### 3.6 Final CTA

**H2:** Better Projects Start With Better Connections.

**Body:** Join a community of professionals who believe in learning together, sharing openly, and helping each other succeed.

**Primary CTA:** Join TPMC → `links.join` (only if configured)

**Secondary CTA:** Get in Touch → `/contact/`

## 4. Activities `/activities/`

**Replace existing Services page, including pricing, deliverables, and project duration blocks.** The six categories below are community activity themes, not a claim that six independently operated programs already exist.

**H1:** Learn Together. Grow Together.

**Intro:** Discover how TPMC brings professionals together through practical learning, meaningful conversations, and collaborative experiences. Our activities are designed to encourage knowledge exchange, professional development, and stronger connections within the project management community.

### 4.1 Knowledge Sharing Sessions {#knowledge-sharing}

**Subtitle:** Learn from real experiences.

Project management challenges rarely have one perfect solution. Our knowledge-sharing sessions provide opportunities to exchange perspectives, discuss practical approaches, and learn from experiences across different organizations.

**Topics We Explore:** Project planning and execution; stakeholder management and communication; risk management and decision-making; Agile, Scrum, and hybrid methodologies; lessons learned from successful and challenging projects.

**What You'll Gain:** Practical insights, fresh perspectives, and approaches you can apply to your own projects.

### 4.2 Community Meetups {#community-meetups}

**Subtitle:** Connect beyond your workplace.

TPMC brings together professionals from different companies, industries, and backgrounds to build meaningful relationships through open conversations and shared interests.

**What to Expect:** Interactive group discussions; professional networking; peer-to-peer knowledge exchange; opportunities to share challenges and ideas; connections with Tokyo's international professional community.

**What You'll Gain:** A broader professional network and meaningful connections with people who share your interests.

### 4.3 Career & Professional Development {#career-development}

**Subtitle:** Take the next step in your career.

Whether you're entering project management, transitioning into leadership, or expanding your expertise, TPMC provides an environment for exchanging career experiences and learning from peers.

**Topics We Explore:** Project management career paths; PMP, PSM, and other certifications; leadership and communication skills; career transitions and professional growth; working in international and Japanese organizations.

**What You'll Gain:** Career insights, practical guidance, and perspectives from professionals at different stages of their careers.

### 4.4 Technology & Industry Insights {#industry-insights}

**Subtitle:** Stay curious. Stay relevant.

The project management profession continues to evolve alongside new technologies, business models, and ways of working. TPMC encourages conversations about the trends shaping how projects and products are delivered.

**Topics We Explore:** Artificial intelligence in project management; automation and productivity tools; digital transformation; product and project management; emerging technologies and industry trends.

**What You'll Gain:** A broader understanding of evolving practices and technologies relevant to modern project delivery.

### 4.5 Collaborative Learning {#collaborative-learning}

**Subtitle:** Turn conversations into practical knowledge.

Learning becomes more valuable when ideas are challenged, tested, and discussed with others. TPMC encourages interactive learning through real-world examples, collaborative problem-solving, and peer discussions.

**Activities May Include:** Case study discussions; project retrospectives; group problem-solving; practical workshops; peer feedback sessions.

**What You'll Gain:** New approaches to complex problems and opportunities to develop your analytical and collaborative skills.

### 4.6 Professional Networking {#professional-networking}

**Subtitle:** Build connections that matter.

Professional growth often happens through conversations, shared experiences, and relationships built over time. TPMC aims to create an inclusive environment where professionals can connect regardless of their industry, organization, or experience level.

**Opportunities Include:** Cross-industry networking; international professional connections; peer learning and mentorship; knowledge exchange; potential collaborations.

**What You'll Gain:** A supportive network of professionals who value continuous learning and mutual growth.

### 4.7 Activities CTA

**H2:** Ready to Get Involved?

**Body:** Whether you want to learn, share your expertise, or simply meet like-minded professionals, TPMC welcomes your participation.

**Primary CTA:** Join the Community → `links.join` (if configured)

**Secondary CTA:** Contact Us → `/contact/`

**Component label mapping:**

| Old label | New label |
|---|---|
| `What we check` | `Topics We Explore` / `What to Expect` |
| `What you keep` | `What You'll Gain` |
| Price | Remove; do not claim membership is free until confirmed |
| Typical length | Remove or replace with verified event format |
| Ask about data audit | Get Involved |

## 5. About `/about/`

**H1:** A Community Built Around Shared Growth.

**Intro:** Tokyo Project Management Community (TPMC) is a professional community based in Tokyo, Japan, bringing together individuals interested in project management, product development, leadership, and professional growth. We believe that some of the most valuable professional insights come from open conversations, shared experiences, and learning from one another. TPMC provides a welcoming environment where professionals can exchange knowledge, explore challenges, and build meaningful connections beyond their organizations.

### 5.1 Mission

**H2:** Our Mission

To connect, empower, and inspire project management professionals through knowledge sharing, collaborative learning, and meaningful professional relationships.

### 5.2 Vision

**H2:** Our Vision

To become a vibrant and inclusive professional community in Tokyo where people from diverse industries and backgrounds learn together, exchange ideas, and contribute to better project management practices.

### 5.3 Core Values — Five Cards

1. **Continuous Learning:** We believe professional development is an ongoing journey. Every experience offers an opportunity to learn and improve.
2. **Knowledge Sharing:** We encourage members to exchange practical insights, experiences, and perspectives openly.
3. **Collaboration:** We believe meaningful progress happens when people work together, support one another, and share ideas.
4. **Inclusivity:** We welcome professionals from different industries, cultures, and experience levels.
5. **Professional Growth:** We support members in developing their knowledge, confidence, leadership capabilities, and professional networks.

### 5.4 Who Can Join?

TPMC welcomes anyone interested in project management and related disciplines.

**Audience:** Project Managers and Program Managers; Product Managers and Product Owners; Scrum Masters and Agile Practitioners; Business Analysts and Consultants; Engineers and Technology Professionals; Students and Aspiring Project Managers; Professionals transitioning into project management.

You don't need a specific certification, job title, or level of experience to participate.

**Emphasis:** What matters most is your willingness to learn, contribute, and connect.

### 5.5 Our Community Approach

- **Learn From Each Other:** We encourage open discussions where members can exchange experiences and explore different perspectives.
- **Focus on Practical Knowledge:** Our conversations emphasize real-world challenges, applicable insights, and lessons learned.
- **Build Meaningful Connections:** We aim to create an environment where professional relationships grow naturally through shared interests and mutual respect.

### 5.6 Tokyo and Language

**H2:** Based in Tokyo. Open to Diverse Perspectives.

TPMC brings together professionals working across different industries and cultural backgrounds. Our community encourages English- and Japanese-language participation, helping connect local and international professionals. We believe diverse experiences and perspectives make our discussions more valuable.

### 5.7 Optional Founder Block

Only show if the founder approves name, bio, and photo.

**Heading:** Meet the Organizer

**Name:** Abdullajon Ergashov

**Role:** Founder, Tokyo Project Management Community

**Bio:** Project management professional with experience in technology, digital platforms, and cross-functional initiatives in Japan. Passionate about bringing professionals together, exchanging practical knowledge, and building an inclusive project management community.

**CTA:** Connect on LinkedIn → `links.linkedinFounder` (if configured)

### 5.8 CTA

**H2:** Become Part of TPMC

**Body:** Connect with fellow professionals, share your knowledge, and grow alongside a community that values learning and collaboration.

**CTA:** Join the Community → `links.join` (if configured)

## 6. Contact `/contact/`

**H1:** Let's Connect.

**Intro:** Have a question, an idea, or an interest in joining TPMC? We'd love to hear from you. Whether you're interested in participating in our community, sharing your expertise, proposing a collaboration, or organizing an event together, feel free to reach out.

### 6.1 Form

**Heading:** Send Us a Message

| Field | Type | Required | Notes |
|---|---|---|---|
| Your Name | text | Yes | Full name |
| Organization | text | No | Company, university, or organization |
| Email Address | email | Yes | Validate email |
| Inquiry Type | select | Yes | See options below |
| Your Message | textarea | Yes | Reasonable max length and spam protection |

**Inquiry options:** Joining TPMC; Community Events; Speaking Opportunities; Partnerships & Collaborations; General Inquiry; Other.

**Submit button:** Send Message

**Helper text:** We will do our best to respond as soon as possible.

**Success heading:** Message Received!

**Success body:** Thank you for reaching out to TPMC. Your message has been submitted successfully. We'll get back to you as soon as possible.

**Success CTA:** Send Another Message

**Implementation:** Provide clear validation, loading, success, and failure states. Do not display success until a real server response confirms receipt. Never expose API keys in client code.

### 6.2 Other Ways to Connect

**LinkedIn:** Connect with TPMC and stay informed about community activities, discussions, and upcoming opportunities. Button: Follow on LinkedIn → `links.linkedinCommunity`.

**Community Group:** Join our community communication channel to connect with fellow professionals and participate in discussions. Button: Join the Community → `links.communityGroup` (or `links.join`).

**Email:** For general inquiries, collaborations, and event proposals, please contact our organizing team. Button: Send an Email → `mailto:` + `links.contactEmail`.

Hide each contact method until its destination is configured.

### 6.3 Community Sessions

**Heading:** Community Sessions

**Regular Session:** Saturday, 09:00–11:00 JST (**show only after schedule confirmation**).

**Location:** Tokyo, Japan.

**Additional copy:** Meeting locations and participation details are shared through our community communication channels.

Do not claim all sessions are in-person or online until confirmed.

### 6.4 What Happens Next?

1. **Reach Out:** Send us a message using the contact form or one of our community channels.
2. **Get Connected:** Our organizing team will review your inquiry and share the relevant information.
3. **Join the Conversation:** Participate in community discussions, meet fellow professionals, and contribute to our growing network.

### 6.5 Closing CTA

**H2:** Let's Build a Stronger Community Together.

**Body:** Great communities grow through people who are willing to connect, contribute, and share. We look forward to hearing from you.

**CTA:** Join TPMC → `links.join` (if configured)

## 7. SEO and Social Metadata

| Route | Title | Meta description |
|---|---|---|
| `/` | TPMC — Tokyo Project Management Community | Discover TPMC, a Tokyo-based project management community connecting professionals through knowledge sharing, networking, and collaborative learning. |
| `/activities/` | Community Activities & Events \| TPMC Tokyo | Explore TPMC activities, including project management discussions, professional networking, career development, and collaborative learning in Tokyo. |
| `/about/` | About TPMC \| Tokyo Project Management Community | Learn about Tokyo Project Management Community (TPMC), our mission, values, and commitment to connecting and empowering professionals in Japan. |
| `/contact/` | Contact & Join TPMC \| Tokyo | Get in touch with TPMC to join our project management community, participate in events, or explore speaking and collaboration opportunities. |

**Technical requirements:**

- Set canonical URLs using the production `site.baseUrl` and correct route.
- Set `og:title`, `og:description`, `og:type=website`, `og:url`, and a TPMC-specific social preview image when available.
- Set appropriate Twitter/X card metadata.
- Ensure exactly one H1 per page and logical H2/H3 hierarchy.
- Update favicon and accessible logo text to TPMC branding.
- Include meaningful link text and accessible labels.
- Update sitemap and robots configuration as applicable.
- Do not rely on the obsolete `meta keywords` tag.
- Do not present TPMC as affiliated with PMI, Scrum.org, or other certification bodies without permission.

## 8. Future Enhancements — Do Not Build Unless Requested

- `/events/`: Upcoming meetups, registration, topics, speakers, and past-session recaps.
- `/resources/`: Articles, presentation materials, case studies, certification resources, and AI-for-PM tools.
- Japanese localization, including language switcher and translated content.
- Verified member/event counters once reliable figures exist.

## 9. Pre-Publish Questions / Blockers

- [ ] Confirm official TPMC LinkedIn URL.
- [ ] Confirm official community-group URL and preferred Join TPMC destination.
- [ ] Confirm public contact email.
- [ ] Confirm whether membership is free and open to everyone.
- [ ] Confirm Saturday 09:00–11:00 JST schedule and online/in-person/hybrid format.
- [ ] Confirm whether the founder bio should be shown and supply approved profile/photo.
- [ ] Confirm working form endpoint, submission recipient, spam protection, and privacy notice.
- [ ] Confirm production domain (replace workers.dev canonical URL if custom domain is used).

## 10. Acceptance Checklist

- [ ] No remaining Quillmoor, fake employee, invented metrics, demo address/phone, analytics consultancy pricing, or `Book a call` copy.
- [ ] Home, Activities, About, Contact pages render with the exact TPMC copy above.
- [ ] Navigation and mobile menu work; active page state is correct.
- [ ] `/services/` redirects to `/activities/` or is handled by an explicit deployment-compatible redirect.
- [ ] Six homepage activity cards deep-link to working section IDs.
- [ ] Every visible CTA has a valid destination; no placeholder `#` links.
- [ ] Footer and SEO metadata consistently use TPMC branding.
- [ ] Contact form tested for validation, success, and failure.
- [ ] Responsive design tested at narrow/mobile and desktop widths.
- [ ] Keyboard navigation, focus states, contrast, and semantic headings remain accessible.
- [ ] Build passes; no broken internal links or missing assets.
- [ ] Unconfirmed claims and external links are not published as facts.

## 11. Suggested Prompt to Paste into GitHub Copilot Chat

> Read `TPMC_Copilot_Website_Update.md` in full and implement the website migration in this Astro repository. Inspect the current routes and shared components first. Use the Markdown document as the source of truth for copy, page sections, navigation, SEO, and acceptance criteria. Preserve the dark design and responsiveness. Centralize site settings and external links in a single editable config. Do not fabricate missing URLs or membership/event details; hide unconfigured CTAs. Replace `/services/` with `/activities/` and add a redirect where supported. Verify the contact form instead of assuming it works. After editing, run the available build/lint checks and provide a concise list of changed files, completed checks, and unresolved configuration placeholders.
