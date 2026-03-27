export interface RetreatHost {
    id: string;
    name: string;
    title: string;
    location: string;
    quote: string;
    retreats: number;
    rating: number;
    image: string;
    specialties: string[];
}

export const retreatHosts: RetreatHost[] = [
    {
        id: "rh1",
        name: "Sarah Jenkins",
        title: "Yoga & Meditation Guide",
        location: "Naples, Florida",
        quote: "Newvion transformed my weekend classes into sold-out retreats. The venues they curated were beyond anything I could have arranged on my own.",
        retreats: 24,
        rating: 4.9,
        image: "/images/sarah_jenkins.webp",
        specialties: ["Vinyasa", "Hatha", "Meditation"]
    },
    {
        id: "rh2",
        name: "Marina Castellano",
        title: "Wellness Retreat Director",
        location: "Amalfi Coast, Italy",
        quote: "The level of guest curation is impeccable. Every participant arrives prepared, present, and ready to transform. That's rare in this industry.",
        retreats: 18,
        rating: 5.0,
        image: "/images/hero-home.png",
        specialties: ["Restorative", "Pranayama", "Sound Healing"]
    },
    {
        id: "rh3",
        name: "Jake Morrison",
        title: "Adventure Yoga Instructor",
        location: "Costa Rica",
        quote: "From booking to departure, Newvion handles every detail. I focus on teaching; they handle everything else. That's how it should be.",
        retreats: 31,
        rating: 4.8,
        image: "/images/community_team.png",
        specialties: ["Power Yoga", "SUP Yoga", "Adventure"]
    }
];

export const retreatFeatures = [
    {
        id: "f1",
        title: "Venue Concierge",
        description: "Access to hand-picked luxury properties from beachfront villas to mountain sanctuaries.",
        icon: "MapPin"
    },
    {
        id: "f2",
        title: "Marketing Engine",
        description: "Professional photography, targeted campaigns, and listing optimization.",
        icon: "Megaphone"
    },
    {
        id: "f3",
        title: "Guest Curation",
        description: "Pre-qualified wellness seekers matched to your teaching style and retreat vibe.",
        icon: "Users"
    },
    {
        id: "f4",
        title: "Booking System",
        description: "Seamless reservations, payments, and attendance tracking in one dashboard.",
        icon: "Calendar"
    }
];

export const valueProps = [
    {
        id: "vp1",
        title: "Curated Venues",
        description: "Exclusive properties selected for beauty, comfort, and spiritual energy. From coastal sanctuaries to mountain hideaways.",
        icon: "Home"
    },
    {
        id: "vp2",
        title: "Premium Guests",
        description: "Discerning wellness seekers who value quality over cost. Your audience, elevated.",
        icon: "Star"
    },
    {
        id: "vp3",
        title: "Full Support",
        description: "End-to-end retreat management so you can focus on what matters: your teaching.",
        icon: "Heart"
    }
];
