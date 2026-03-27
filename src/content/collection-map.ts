export interface CollectionCardItem {
  eyebrow?: string;
  title: string;
  href: string;
  description: string;
  image: string;
  items?: string[];
  ctaLabel?: string;
}

export const collectionTicker = [
  "Newvion Collection",
  "Newvion Companies",
  "NewvionConnect.com",
  "Digital Platform Supports Entire Business",
  "Newvion Story",
  "Team",
  "Newvion Studios",
  "Newvion Capital",
  "Newvion AI",
  "Allegan, MI",
  "Moore Haven, FL",
  "XYZ Town",
  "RHTPConnect.com",
  "RuralOZ.com",
  "OZ-Zero",
  "Newvion Boat Company",
  "OZ-Boats",
];

export const collectionRootCards: CollectionCardItem[] = [
  {
    eyebrow: "Branch 01",
    title: "Newvion Companies",
    href: "/companies",
    description:
      "Development, rural connectivity, resort hospitality, and marine ventures organized into one operating portfolio.",
    image: "/images/retreats/river.png",
    items: [
      "Newvion Development",
      "NewvionRuralConnect.com",
      "RuralOZ.com",
      "Newvion Resorts",
      "Newvion Boat Company",
    ],
    ctaLabel: "Explore companies",
  },
  {
    eyebrow: "Branch 02",
    title: "NewvionConnect.com",
    href: "/connect",
    description:
      "The current Newvion experience becomes the digital platform layer supporting the entire business.",
    image: "/images/exp-yoga.png",
    items: [
      "Current homepage",
      "About",
      "Experience Hub",
      "Platform",
      "Programming",
      "Retreats",
    ],
    ctaLabel: "Enter connect",
  },
  {
    eyebrow: "Branch 03",
    title: "Newvion Story",
    href: "/story",
    description:
      "The narrative, people, studios, capital, and AI initiatives that explain where the collection is heading.",
    image: "/images/community_team.png",
    items: [
      "Team",
      "Newvion Studios",
      "Newvion Development",
      "Newvion Capital",
      "Newvion AI",
    ],
    ctaLabel: "Open story",
  },
];

export const companiesCards: CollectionCardItem[] = [
  {
    eyebrow: "Company 01",
    title: "Newvion Development",
    href: "/companies/development",
    description:
      "Community-focused development work with specific place pages ready for Allegan, Moore Haven, and future sites.",
    image: "/images/retreats/river.png",
    items: ["Allegan, MI", "Moore Haven, FL", "XYZ Town"],
  },
  {
    eyebrow: "Company 02",
    title: "NewvionRuralConnect.com",
    href: "/companies/rural-connect",
    description:
      "Rural connectivity initiatives with a dedicated RHTPConnect grant-site branch.",
    image: "/images/exp-pottery.png",
    items: ["RHTPConnect.com - Grant Site"],
  },
  {
    eyebrow: "Company 03",
    title: "RuralOZ.com",
    href: "/companies/rural-oz",
    description:
      "Opportunity-zone aligned storytelling and investment-ready positioning, anchored by OZ-Zero.",
    image: "/images/exp-yoga.png",
    items: ["OZ-Zero"],
  },
  {
    eyebrow: "Company 04",
    title: "Newvion Resorts",
    href: "/companies/resorts",
    description:
      "A hospitality branch ready for retreat, resort, and destination-specific programming narratives.",
    image: "/images/exp-pottery.png",
  },
  {
    eyebrow: "Company 05",
    title: "Newvion Boat Company",
    href: "/companies/boat-company",
    description:
      "Marine and floating-stay concepts, including a dedicated OZ-Boats child page.",
    image: "/images/community_team.png",
    items: ["OZ-Boats"],
  },
];

export const storyCards: CollectionCardItem[] = [
  {
    eyebrow: "Story Arc",
    title: "Team",
    href: "/story/team",
    description:
      "The umbrella team page that introduces the internal ventures and capability stories behind the collection.",
    image: "/images/community_team.png",
    items: [
      "Newvion Studios",
      "Newvion Development",
      "Newvion Capital",
      "Newvion AI",
    ],
    ctaLabel: "Meet the team",
  },
];
