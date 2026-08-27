// ─────────────────────────────────────────────────────────────────────────────
//  PER-PROJECT BRANDING  ·  the ONLY file that changes between blog repos.
//  Owner-locked via CODEOWNERS — the SEO team does not edit this (see CONTRIBUTING.md).
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  brand: 'OllaGraph',
  title: 'OllaGraph Blog',
  description: 'Guides, tips, and product updates from the OllaGraph team.',
  url: 'https://blogs.ollagraph.com',
  marketingUrl: 'https://ollagraph.com',
  marketingLabel: 'ollagraph.com',
  author: 'OllaGraph Team',
  accent: '#0ea5e9',
  tagline: 'See how it all connects.',
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'Tags', href: '/tags/' },
  { label: 'About', href: '/about/' },
];
