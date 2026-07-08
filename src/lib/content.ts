export const profile = {
  name: "Pratham",
  greeting: "Hi 👋, I’m Pratham",
  avatar: "/assets/avatar.png",
  twitter: "https://twitter.com",
  email: "jindalpratham07@gmail.com",
  calLink: "pratham-jindal-2026/website",
  calNamespace: "website",
  spots: "3 Spots Available",
  headline: [
    { text: "Design for products ", dim: false },
    { text: "that don’t have time to ", dim: true },
    { text: "look ", dim: true },
    { text: "average.", dim: false },
  ],
  tagline:
    "Helping SaaS and AI startups turn complex products into websites people understand and remember.",
};

export const clientLogos = [
  { src: "/assets/client1.png", alt: "Client logo", w: 141, h: 29 },
  { src: "/assets/client2.png", alt: "Client logo", w: 102, h: 24 },
  { src: "/assets/client3.png", alt: "Client logo", w: 155, h: 28 },
  { src: "/assets/client4.png", alt: "Client logo", w: 58, h: 26 },
];

type WorkTile = { src: string; alt: string };
type WorkRow =
  | { type: "pair"; tiles: [WorkTile, WorkTile] }
  | { type: "full"; tile: WorkTile; bg: string };

export const workRows: WorkRow[] = [
  {
    type: "pair",
    tiles: [
      { src: "/assets/img18929.png", alt: "Project — analytics dashboard" },
      { src: "/assets/img18931.png", alt: "Project — onboarding flow" },
    ],
  },
  {
    type: "pair",
    tiles: [
      { src: "/assets/img18932.png", alt: "Project — conversion system" },
      { src: "/assets/img18930.png", alt: "Project — revenue report" },
    ],
  },
  {
    type: "full",
    tile: { src: "/assets/img18930.png", alt: "Project — revenue showcase" },
    bg: "#f7f7f7",
  },
  {
    type: "pair",
    tiles: [
      { src: "/assets/img18932.png", alt: "Project — Shopify apps" },
      { src: "/assets/img18930.png", alt: "Project — revenue detail" },
    ],
  },
  {
    type: "pair",
    tiles: [
      { src: "/assets/img18930.png", alt: "Project — data insight" },
      { src: "/assets/img18932.png", alt: "Project — app consolidation" },
    ],
  },
  {
    type: "full",
    tile: { src: "/assets/img18932.png", alt: "Project — full showcase" },
    bg: "#ffffff",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    client: "Client 1",
    avatar: "/assets/avatar.png",
    logo: { src: "/assets/logo_image2.png", alt: "Company", w: 97, h: 23, blend: true },
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    client: "Client 1",
    avatar: "/assets/avatar.png",
    logo: { src: "/assets/logo_image1.png", alt: "Company", w: 114, h: 23 },
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    client: "Client 1",
    avatar: "/assets/avatar.png",
    logo: { src: "/assets/logo_group4.svg", alt: "Company", w: 49, h: 22 },
  },
];

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
];
