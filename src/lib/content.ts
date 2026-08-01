// content.ts — single source of truth for all portfolio copy, data, and assets.
// Import individual exports in components to keep content changes centralised here.

// ─────────────────────────────────────────────────────────────────────────────
// Profile — personal info, social links, and sidebar copy
// ─────────────────────────────────────────────────────────────────────────────
export const profile = {
  name: "Pratham",
  greeting: "Hi 👋, I'm Pratham",
  avatar: "/assets/avatar.webp",
  twitter: "https://x.com/prathamdesigns",
  email: "jindalpratham07@gmail.com",
  // Cal.com booking link slug (used in CTASection)
  calLink: "pratham-jindal-2026/website",
  // Cal.com embed namespace — must match the namespace passed to getCalApi()
  calNamespace: "website",
  // Availability badge shown beneath the pulsing dot in the Sidebar
  spots: "3 Spots Available",
  // Headline rendered as separate spans so each segment can be dimmed independently
  headline: [
    { text: "Design for products ", dim: false },
    { text: "that don't have time to ", dim: true },
    { text: "look ", dim: true },
    { text: "average.", dim: false },
  ],
  // One-liner tagline shown beneath the headline and used in page metadata
  tagline:
    "Helping SaaS and AI startups turn complex products into websites people understand and remember.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Client logos — displayed in the 2-column grid at the bottom of the Sidebar.
// w/h are the intrinsic pixel dimensions of each image file.
// ─────────────────────────────────────────────────────────────────────────────
export const clientLogos = [
  { src: "/assets/client1.webp", alt: "Client logo", w: 141, h: 29 },
  { src: "/assets/client2.webp", alt: "Client logo", w: 102, h: 24 },
  { src: "/assets/client4.webp", alt: "Client logo", w:  58, h: 26 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Work rows — the portfolio gallery in WorkSection.
//
// Two row types:
//   "pair" — two tiles side-by-side, sharing an averaged aspect ratio so they
//            render at the same height regardless of their original dimensions.
//   "full" — one tile spanning the full width, displayed on a custom bg colour
//            with generous padding to give it a framed, presentational look.
// ─────────────────────────────────────────────────────────────────────────────
type WorkTile = { src: string; alt: string; w: number; h: number };
type WorkRow =
  | { type: "pair"; tiles: [WorkTile, WorkTile] }
  | { type: "full"; tile: WorkTile; bg: string }; // bg is a CSS color string

export const workRows: WorkRow[] = [
  // ── Featured — Speed SaaS ────────────────────────────────────────────────
  {
    "type": "full",
    "tile": {
      "src": "/assets/speed-hero.webp",
      "alt": "Premium Speed Optimization Hero Design",
      "w": 3120,
      "h": 2542
    },
    "bg": "#0b0f19"
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/speed-integrations.webp",
        "alt": "WordPress Integrations Section",
        "w": 3120,
        "h": 1880
      },
      {
        "src": "/assets/speed-social-proof.webp",
        "alt": "Client Social Proof Section",
        "w": 2880,
        "h": 1568
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/speed-concept-section.webp",
        "alt": "Concept Section Exploration",
        "w": 2880,
        "h": 2078
      },
      {
        "src": "/assets/speed-pricing.webp",
        "alt": "High Conversion Pricing Structure",
        "w": 2880,
        "h": 2088
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/speed-cta-footer.webp",
        "alt": "CTA Section & Clean Footer",
        "w": 2880,
        "h": 2444
      },
      {
        "src": "/assets/speed-benefits.webp",
        "alt": "Performance Benefits & Advantages",
        "w": 2928,
        "h": 2662
      }
    ]
  },
  // ── Sternify ─────────────────────────────────────────────────────────────
  {
    "type": "full",
    "tile": {
      "src": "/assets/sternify-hero.webp",
      "alt": "Sternify — Main Hero Section Design",
      "w": 2880,
      "h": 2118
    },
    "bg": "#0d0e12"
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/sternify-hero-v2.webp",
        "alt": "Sternify — Alternative Hero Option v2",
        "w": 2880,
        "h": 1826
      },
      {
        "src": "/assets/sternify-affilaite-hero.webp",
        "alt": "Sternify — Affiliate Program Hero Page",
        "w": 2880,
        "h": 1834
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/sternify-footer.webp",
        "alt": "Sternify — Interactive Modern Footer",
        "w": 2880,
        "h": 2306
      },
      {
        "src": "/assets/multi-tool-system-sternify.webp",
        "alt": "Sternify — Multi-Tool System Architecture",
        "w": 2880,
        "h": 2326
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/sternify-illustrations.webp",
        "alt": "Sternify — Custom Illustration Set",
        "w": 3488,
        "h": 2784
      },
      {
        "src": "/assets/hero-option.webp",
        "alt": "SaaS — Alternative Hero Layout",
        "w": 2880,
        "h": 2450
      }
    ]
  },
  // ── FlyingHost ───────────────────────────────────────────────────────────
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/flyinghost-footer.webp",
        "alt": "FlyingHost — Footer Interface Design",
        "w": 3280,
        "h": 2400
      },
      {
        "src": "/assets/comparison-section-sternify-option-1.webp",
        "alt": "Sternify — Competitor Comparison Options",
        "w": 2880,
        "h": 2206
      }
    ]
  },
  {
    "type": "full",
    "tile": {
      "src": "/assets/hero-flyinghost.webp",
      "alt": "FlyingHost — Hosting Service Hero Showcase",
      "w": 3280,
      "h": 2422
    },
    "bg": "#0d0e12"
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/flyinghost-bento.webp",
        "alt": "FlyingHost — Bento Design Layout",
        "w": 2880,
        "h": 2806
      },
      {
        "src": "/assets/final-bento-pink-13-march.webp",
        "alt": "Bento — Pink Accent Interactive Dashboard Section",
        "w": 2880,
        "h": 2958
      }
    ]
  },
  // ── Misc SaaS work ────────────────────────────────────────────────────────
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/problem-section.webp",
        "alt": "Problem — Pain Point Highlight Section Design",
        "w": 2880,
        "h": 1534
      },
      {
        "src": "/assets/system-explanation-section-1.webp",
        "alt": "Explanatory — System Core Value UI",
        "w": 2880,
        "h": 1628
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/illustrations-july-19.webp",
        "alt": "SaaS — Product Illustration Collection",
        "w": 3268,
        "h": 2572
      },
      {
        "src": "/assets/illustrations-july-20.webp",
        "alt": "SaaS — Feature Illustration Set",
        "w": 3268,
        "h": 2572
      }
    ]
  },
  {
    "type": "full",
    "tile": {
      "src": "/assets/finalised-dashboard-5-june-9.webp",
      "alt": "Dashboard — June Finalised SaaS UI",
      "w": 3024,
      "h": 1958
    },
    "bg": "#090d16"
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/template-2-step-2.webp",
        "alt": "Step-by-step — Interactive Setup Step 2",
        "w": 2880,
        "h": 1784
      },
      {
        "src": "/assets/hero-20.webp",
        "alt": "SaaS — High-Converting Product Landing Hero",
        "w": 2884,
        "h": 1806
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/screen-6-sidepanel.webp",
        "alt": "Interface — Collapsible Sidebar Panel Feature",
        "w": 3036,
        "h": 1970
      },
      {
        "src": "/assets/integration-section-socify.webp",
        "alt": "Socify — API Integrations Section",
        "w": 2880,
        "h": 1874
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/system-explanation-section.webp",
        "alt": "Explanatory — System Workflow Diagram UI",
        "w": 2880,
        "h": 1944
      },
      {
        "src": "/assets/how-it-works-step-1.webp",
        "alt": "Step-by-step — How It Works Onboarding Layout",
        "w": 2876,
        "h": 1962
      }
    ]
  },
  {
    "type": "full",
    "tile": {
      "src": "/assets/ecomelixir-comparison.webp",
      "alt": "EcomElixir — Competitor Comparison Section",
      "w": 4320,
      "h": 2901
    },
    "bg": "#0d0e12"
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/comparison-concept.webp",
        "alt": "Comparison — Comparison Grid Feature Design",
        "w": 2880,
        "h": 2018
      },
      {
        "src": "/assets/footer-socify.webp",
        "alt": "Socify — Bottom Navigation and Footer",
        "w": 3184,
        "h": 2288
      }
    ]
  },
  // ── Socify / SageBio ─────────────────────────────────────────────────────
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/hero-1-sagebio.webp",
        "alt": "SageBio — Biotech SaaS Landing Hero",
        "w": 2880,
        "h": 2244
      },
      {
        "src": "/assets/simplicity-section.webp",
        "alt": "SaaS — Simplicity & Clarity Section Design",
        "w": 2880,
        "h": 2282
      }
    ]
  },
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/hero-section-socify.webp",
        "alt": "Socify — Social SaaS Hero UI",
        "w": 3184,
        "h": 2588
      },
      {
        "src": "/assets/footer-13.webp",
        "alt": "SaaS — Footer and Links Option 13",
        "w": 2880,
        "h": 2380
      }
    ]
  },
  // ── Bento grids ──────────────────────────────────────────────────────────
  {
    "type": "pair",
    "tiles": [
      {
        "src": "/assets/speed-bento.webp",
        "alt": "Bento Grid Features Showcase",
        "w": 2880,
        "h": 3626
      },
      {
        "src": "/assets/klink-bento.webp",
        "alt": "Klink — Multi-purpose Bento Grid Features",
        "w": 2880,
        "h": 3844
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// Nav items — links rendered in the Navbar; hrefs are in-page anchors.
// ─────────────────────────────────────────────────────────────────────────────
export const navItems = [
  { label: "Work", href: "#work" },
];
