export const brandIdentity = {
  name: "Newvion",
  tagline: "Connecting Place, Capital, and Community Through Lifestyle, Wellness, and Experience-Driven Development",
  vision: "The Newvion Experience Hub is envisioned as a national platform for rural development—bringing lifestyle, wellness, and place-based experiences together to improve quality of life, strengthen local economies, and attract aligned investment.",
  mission: "We connect like-minded people through an assortment of shared interests that fuse social wellbeing with an integrated approach to health fostering a lifestyle dedicated to living well.",
  description: "A wellness community that combines healthcare and fitness interests with creative outlets, community interaction and self-improvement assets. A gathering place for physical, mental, social, educational, and creative enrichment.",
};

export const pillars = {
  wellBeing: {
    title: "Well.Being",
    description: "Taking care of our emotional and physical well-being is essential to a life of longevity. Through integrative and proactive methods, we provide premium health wellness programs using an individual approach.",
    components: ["Concierge Lifestyle", "Integrated Health", "Relaxation", "Mindful Movement", "Active Movement Lifestyle"],
  },
  lifestyle: {
    title: "Lifestyle",
    description: "Having abundance is the essence of living a soulful life, establishing new healthy habits, mindsets, and routines help us live a more fulfilled life.",
    components: ["Artisans", "Creative Arts", "Food and Wine", "Travel", "Remote Living"],
  },
  sharedInterests: {
    title: "Shared Interests",
    description: "As humans we yearn for social connection, it is part of a healthy and happy life. Enroll in one of our many workshops, and masterclass events.",
    components: ["Workshops", "Events", "Exhibitions", "Giving Back"],
  },
};

export const studios = {
  fitness: {
    name: "FITNESS | Studio",
    description: "Live and on-demand fitness classes",
    category: "movement",
  },
  culinary: {
    name: "CULINARY | Studio",
    description: "Cooking, nutrition classes and collaboration with culinary experts",
    category: "culinary",
  },
  music: {
    name: "MUSIC | Studio",
    description: "Listening Room: create and perform in music workshops. Plus listen to your favorite music in an intimate setting",
    category: "arts",
  },
  art: {
    name: "ART | Studio",
    description: "Focuses on the creative arts, drawing and painting",
    category: "arts",
  },
  culture: {
    name: "CULTURE | Studio",
    description: "Cultural experiences and travel",
    category: "culture",
  },
  entertainment: {
    name: "ENTERTAINMENT | Studio",
    description: "Entertainment and exhibition experiences",
    category: "entertainment",
  },
  education: {
    name: "EDUCATION | Studio",
    description: "Learning and skill development",
    category: "education",
  },
  med: {
    name: "MED | Studio",
    description: "Health and medical wellness",
    category: "wellness",
  },
};

export interface ExperienceHubComponent {
  name: string;
  description: string;
  capacity?: string;
  features?: string[];
}

export const experienceHub: { location: string, anchorDescription: string, purpose: string, components: ExperienceHubComponent[] } = {
  location: "Moore Haven Marina, Florida",
  anchorDescription: "Anchored at the Moore Haven Marina, the Experience Hub serves as a catalytic headquarters that convenes partners, sponsors, founders, and civic leaders around projects that unlock the unique assets of rural and waterfront communities.",
  purpose: "Through experience-driven programming, executive collaboration, and place-based storytelling, Newvion helps communities translate vision into action.",
  components: [
    {
      name: "Experience Entry",
      description: "A curated arrival and showcase space highlighting upcoming and past events, partner initiatives, and active development projects. Functions as a living exhibition of the platform's work.",
      capacity: "Open",
    },
    {
      name: "Discovery Theater",
      description: "A flexible, media-enabled meeting and presentation room designed for immersive briefings, partner forums, corporate retreats, and select City of Moore Haven meetings.",
      capacity: "40-60 seats",
      features: ["Recording capability", "Livestreaming", "Meeting-first design"],
    },
    {
      name: "Culinary Studio",
      description: "A signature activation space designed for guest chef experiences and culinary-led forums. Programming includes local, regional, and national chefs and partners.",
      capacity: "60-80 seats",
      features: ["Guest chef experiences", "Culinary-led forums", "Shared culinary experiences"],
    },
    {
      name: "Partner Headquarters",
      description: "The second floor serves as the headquarters level for Newvion and its member partners. Supports executive collaboration, partner think tanks, and high-trust strategy sessions.",
      capacity: "Multi-partner",
      features: ["Executive offices", "Think tank space", "Strategy rooms"],
    },
    {
      name: "Discovery Room",
      description: "A dedicated discovery room for high-level forums, leadership roundtables, and partner briefings.",
      capacity: "24 seats",
      features: ["Integrated livestream", "Recording capability"],
    },
    {
      name: "Podcast & Media Room",
      description: "A dedicated podcasting and media room supporting ongoing content production, including partner spotlights, founder stories, and Marina District updates.",
      features: ["Podcasting", "Content production", "Media creation"],
    },
    {
      name: "Breakout Conference Rooms",
      description: "Multiple conference rooms supporting breakout sessions, workshops, and private strategy meetings during retreats, partner gatherings, and working sessions.",
      features: ["Flexible configuration", "Private meetings"],
    },
    {
      name: "Indoor-Outdoor VIP Lounge",
      description: "A distinctive indoor-outdoor lounge overlooking the river, designed for informal VIP engagement, sponsor hosting, and special events.",
      features: ["River views", "VIP hosting", "Special events"],
    },
  ],
};

export const phases = {
  phase1: {
    title: "Phase 1: Digital Platform & Early Activation",
    description: "As an early Phase One activation, Newvion will implement the Newvion Digital Platform as a foundational layer supporting Moore Haven and future rural communities.",
    components: [
      "Digital Platform implementation",
      "Community engagement",
      "Initial Boatel Resort Activation (3 boatels)",
      "Partner collaboration",
      "Investor engagement",
    ],
    boatelActivation: {
      description: "The initial physical activation at Moore Haven Marina includes three boatels serving as the first experience-driven assets within the Marina District.",
      purposes: [
        "Overnight capacity",
        "Hosted partner and investor engagement",
        "Operational headquarters for Newvion's initial Opportunity Zone investment activities",
        "Platform for testing hospitality operations, programming, and market response",
      ],
    },
  },
  phase2: {
    title: "Phase 2: Permanent Experience Hub & National Headquarters",
    description: "Phase 2 transitions operations from the initial floating assets into a permanent, on-land facility within the Moore Haven Marina District.",
    components: [
      "Permanent Experience Hub facility",
      "National platform headquarters",
      "Discovery, convening, culinary programming, media, and executive partner headquarters",
    ],
  },
};

export const digitalPlatform = {
  description: "The Digital Platform is designed to extend the reach of the Newvion Experience Hub beyond a physical location, enabling early engagement, coordination, and access to programming prior to full build-out.",
  capabilities: [
    {
      name: "Community Calendar",
      description: "Shared community calendar for events and programs",
    },
    {
      name: "Registration & Ticketing",
      description: "Registration and ticketing for public and partner programs",
    },
    {
      name: "Livestream",
      description: "Selective livestream access to events and forums",
    },
    {
      name: "On-Demand Library",
      description: "Digital wellness and education content",
    },
    {
      name: "Community Updates",
      description: "Community updates and announcements",
    },
    {
      name: "Partner Storytelling",
      description: "Partner storytelling and content distribution",
    },
  ],
  benefits: {
    forAttendees: [
      "Discover and reserve experiences",
      "Live and on-demand access",
      "Community engagement",
      "Personalized programming",
    ],
    forHosts: [
      "Reach new audiences",
      "Live sessions and on-demand library placement",
      "Professional presentation and scheduling tools",
      "Clear standards and support",
    ],
  },
};

export const partners = {
  categories: [
    {
      name: "Outdoor Recreation & Marine",
      description: "Brands supporting boating, fishing, paddling, eco-tourism, and water-based recreation",
      examples: ["Marine equipment brands", "Outdoor gear companies", "Boat manufacturers"],
    },
    {
      name: "Hospitality & Culinary",
      description: "Hotels, restaurants, chefs, and culinary experiences",
      examples: ["Regional chefs", "Hospitality operators", "Wine and spirits brands"],
    },
    {
      name: "Wellness & Health",
      description: "Wellness operators, healthcare providers, and lifestyle organizations",
      examples: ["Fitness instructors", "Wellness practitioners", "Healthcare systems"],
    },
    {
      name: "Technology & Connectivity",
      description: "Digital health platforms, AI-driven solutions, and technology partners",
      examples: ["Telehealth providers", "Digital wellness platforms", "AI solutions"],
    },
    {
      name: "Workforce & Education",
      description: "Educational institutions, training programs, and certification providers",
      examples: ["iTECH Glades", "Florida Gulf Coast University", "Workforce development programs"],
    },
    {
      name: "Mission-Aligned Investors",
      description: "Investors focused on rural development and community impact",
      examples: ["Opportunity Zone investors", "Impact investors", "Community development funds"],
    },
  ],
  engagementModes: [
    "Co-host experiences",
    "Sponsor series",
    "Provide expert hosts",
    "Enable community access",
    "Hub activation presence",
    "Executive retreats",
    "Content-based storytelling",
  ],
};

export const impactMeasures = {
  wellness: [
    "Participation levels across wellness, education, and community programs",
    "Number of healthcare and wellness partner activations hosted annually",
    "Utilization of technology-enabled health education and connectivity resources",
  ],
  economic: [
    "Jobs created and workforce placements",
    "Visitor nights and economic activity associated with wellness-oriented programming",
    "New small business and operator opportunities",
  ],
  community: [
    "Community participation and program utilization",
    "Workforce training participation and credential completion",
    "Education and credential participation through workforce partners",
  ],
};

export const marketOpportunity = {
  wellnessEconomy: {
    globalSize: "$6.3 trillion",
    wellnessTourism: "$894 billion annually",
    projectedGrowth: "9%+ per year (outpacing overall tourism growth)",
    usSpending: "$500+ billion annually",
  },
  fitnessEconomy: {
    physicalActivityEconomy2018: "$828 billion",
    projected2023: "$1.1 trillion",
    virtualFitnessBy2027: "$60 billion",
    cagr: "30%+",
  },
  eLearning: {
    moocMarket2025: "$25.33 billion",
    currentMarket: "$5.16 billion",
    annualGrowth: "32.09%",
    usMarketGrowth: "$12.81 billion (2020-2024)",
  },
  trends: [
    "Travelers prioritizing meaningful experiences over traditional accommodations",
    "Wellness tourism expanding beyond spa-centric models",
    "Strong demand for active, restorative experiences supporting mental health",
    "Nature-based and rural destinations benefiting from shift to lower-density environments",
    "Experiential hospitality intersecting with education, co-working, and community programming",
  ],
};

export const leadership = [
  {
    name: "Robert Dykstra",
    role: "Founder of Newvion",
    experience: "48+ years",
    expertise: "Wellness-focused development, hospitality, and experience-based real estate. Background includes planning, development, and activation of destination-oriented environments that integrate recreation, wellness, and community-based programming.",
  },
  {
    name: "Greg Thron",
    role: "Founder of Sygnifi",
    experience: "30+ years",
    expertise: "Marketing strategy, data analytics, and AI-driven platforms. Sygnifi supports the Newvion Digital Platform through data-informed engagement, targeted outreach, and scalable content distribution.",
  },
];

export const locationContext = {
  mooreHaven: {
    description: "Moore Haven's location on Lake Okeechobee positions it uniquely within Florida's recreation landscape—serving regional visitors while attracting destination travelers seeking water-based recreation and wellness experiences outside major metropolitan areas.",
    advantages: [
      "Lake Okeechobee access",
      "Water-based recreation (boating, fishing, paddling)",
      "Lower-density, authentic rural environment",
      "Connection to Florida's $500B+ recreation economy",
    ],
  },
  florida: {
    description: "Florida is one of the most recreation- and tourism-driven economies in the United States, with outdoor recreation, boating, fishing, wellness travel, and water-based destinations supporting year-round visitation.",
    context: [
      "Year-round tourism demand",
      "Strong outdoor recreation economy",
      "Growing wellness travel market",
      "Waterfront and water-adjacent communities central to recreation economy",
    ],
  },
};

export const brandValues = {
  peopleFocused: {
    title: "People Focused",
    description: "We understand that our people are our greatest asset, because of this we foster a culture dedicated to enhancing people's lives including our members, guests, colleagues, and the people we collaborate with.",
  },
  connection: {
    title: "Connection",
    description: "The human connection is one of the most vital aspects of our existence. We share connections with our community in meaningful ways through lifestyle offerings that bring us one step closer to living life with intention.",
  },
  discovery: {
    title: "Discovery",
    description: "Discovery is energizing, meeting new people and participating in activities and workshops that enrich and fulfill our lives is enjoyable. We offer programs that are accessible for all.",
  },
};

export const brandVoice = {
  personality: ["Approachable", "Soulful", "Knowledgeable"],
  adjectives: ["Fun", "Sociable", "Innovative", "Open-minded"],
  notAdjectives: ["Discriminative", "Snobby", "Loud", "Obnoxious", "Judgemental", "Arrogant"],
  tone: {
    approachable: "We have created a collective that is exclusive but still approachable, we want people to feel welcome.",
    soulful: "Human connection is at the heart of our concept, we believe in connecting through shared interests.",
    knowledgeable: "We thrive on learning new things and sharing valuable content with you, we never appear to claim the way things need to be.",
  },
};

export const membershipInfo = {
  targetAudience: {
    description: "Adults over the age of 22 who are wellness-conscious",
    traits: ["Explorative", "Active", "Curious", "Adventurous", "Purposeful", "Inclusive", "Thoughtful", "Open"],
    income: "Typically annual household incomes over $75K",
  },
  pricing: {
    developmentPhase: "$5.99/month",
    standardRange: "$10-20/month",
    comparable: "Master Class to Core Power Yoga range ($15-90/month)",
  },
  benefits: [
    "Access to fitness, arts, and culinary studios",
    "Live and on-demand classes",
    "Interactive guided discussion groups",
    "Custom classes for specific groups",
    "Health and wellness tracking",
    "Community interaction and events",
  ],
};

export const hostTypes = [
  { type: "Creator", description: "Independent creators and instructors" },
  { type: "Local Business", description: "Local restaurants, wineries, and venues" },
  { type: "Brand Partner", description: "National and regional brand sponsors" },
  { type: "Educator", description: "Teachers and subject matter experts" },
  { type: "Wellness Pro", description: "Fitness instructors and wellness practitioners" },
  { type: "Chef", description: "Culinary experts and nutritionists" },
  { type: "Trainer", description: "Fitness and movement professionals" },
];

export const experienceTypes = [
  { category: "Cooking", description: "Culinary classes and food experiences" },
  { category: "Movement", description: "Fitness, yoga, and physical wellness" },
  { category: "Wellness", description: "Mental health, mindfulness, and holistic health" },
  { category: "Culture", description: "Cultural experiences and travel" },
  { category: "Education", description: "Learning and skill development" },
  { category: "DFY", description: "Done-For-You experiences and services" },
  { category: "Arts", description: "Creative arts, music, and performance" },
  { category: "Music", description: "Music workshops and listening experiences" },
];

export const communityBenefits = [
  "Increased year-round visitation tied to water-based recreation, wellness programming, and culinary events",
  "Higher visitor spending through premium experiences and guided activities",
  "New small business and operator opportunities in recreation, wellness, food, and events",
  "Workforce pathways in hospitality, guiding, culinary, production, and operations",
  "Attraction of recreation-related manufacturing and service businesses",
  "Alignment with conservation and water-quality priorities",
];

export const healthcarePartnerships = {
  pathways: [
    "Local and regional healthcare providers supporting community education, preventative health programming, and referral pathways",
    "Telehealth and digital health partners enabling improved access to remote care, navigation support, and health education",
    "Wellness and lifestyle operators delivering fitness, recovery, mindfulness, nutrition, and restorative programming",
    "Education and workforce partners supporting training, certification, and workforce development",
  ],
  goals: [
    "Support improved mental and physical health outcomes in rural communities",
    "Link wellness, healthcare access, education, and technology",
    "Emphasize prevention, lifestyle health, and early intervention",
    "Bridge rural communities with evolving models of care",
  ],
};
