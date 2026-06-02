// Shared services data used across the website

export interface ServiceItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  path?: string; // Route path for the service; optional for dummy items
}

export interface ServiceIncluded {
  id: string;
  title: string;
  imageUrl: string;
}

// All available services
export const SERVICES: ServiceItem[] = [
  {
    id: "birthday-celebration",
    title: "Birthday Celebration",
    imageUrl:
      "https://borntoparty.in/img/what-we-do/birthday-event-planner.jpg",
    description:
      "Create unforgettable birthday moments with our premium celebration packages.",
    path: "/services/birthday-celebration",
  },
  {
    id: "wedding",
    title: "Wedding Events",
    imageUrl:
      "https://cdn0.weddingwire.in/article/1934/original/1280/jpg/14391-wedding-party-mahima-bhatia-photography-sparkle-up-the-world.jpeg",
    description: "Your dream wedding deserves premium planning and execution.",
    path: "/services/wedding",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    imageUrl:
      "https://belvederebanquets.com/wp-content/uploads/2021/11/business-conference.jpg",
    description: "Professional events that leave lasting impressions.",
    path: "/services/corporate-events",
  },
  {
    id: "anniversary",
    title: "Anniversary Celebrations",
    imageUrl:
      "https://maisondecinq.com/wp-content/uploads/2021/01/ValentineTableforTwo7-768x1024.jpg",
    description: "Celebrate your milestones in style.",
    path: "/services/anniversary",
  },
  {
    id: "graduation",
    title: "Graduation Parties",
    imageUrl:
      "https://balloonsbytommy.com/menus/graduation/metallicbackdrop.webp",
    description: "Mark this achievement with an unforgettable celebration.",
    path: "/services/college-events",
  },
  {
    id: "engagement",
    title: "Engagement Parties",
    imageUrl:
      "https://weddingservices.co.in/wsimages/1672469272_3e5194f69af7d2de508c76771f5a7959.jpg",
    description: "Start your journey with a magical engagement celebration.",
    path: "/services/engagement",
  },
];

// Services included data (used in service detail pages)
export const SERVICES_INCLUDED: ServiceIncluded[] = [
  {
    id: "decoration",
    title: "Decoration",
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "catering",
    title: "Catering",
    imageUrl:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "photography",
    title: "Photography",
    imageUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "videography",
    title: "Videography",
    imageUrl:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lighting",
    title: "Lighting Design",
    imageUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "videography",
    title: "Videography",
    imageUrl:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&q=80",
  },
];
