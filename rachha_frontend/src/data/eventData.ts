export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  servicesIncluded: string[];
}

export const EVENTS: EventData[] = [
  {
    id: "birthday-celebration",
    slug: "birthday-celebration",
    title: "Birthday Celebrations",
    subtitle: "Create unforgettable moments with our premium celebration services",
    description: "Celebrate life's special moments with thoughtfully curated birthday experiences that blend creativity, elegance, and seamless execution. From vibrant kids' parties to sophisticated milestone celebrations, every detail—from décor to entertainment—is designed to create a joyful and unforgettable atmosphere.",
    servicesIncluded: [
      "Photography", "Decorators", "Cake", "DJ", "Entertainment",
      "Artist", "Sound & Lights", "Invites", "Fun entertainers",
      "Live cartoon character", "Game stalls", "Fun party artist",
    ],
  },
  {
    id: "kitty-party",
    slug: "kitty-party",
    title: "Kitty Party",
    subtitle: "Elevate your kitty gatherings into stylish and memorable experiences",
    description: "Elevate your kitty gatherings into stylish and memorable experiences with elegant décor, engaging setups, and a perfectly balanced ambiance. Whether intimate or lively, each event is designed to feel relaxed, refined, and effortlessly enjoyable for every guest.",
    servicesIncluded: [
      "Decorators", "Catering", "Artist", "Entertainment", "Invites", "Sound & Lights",
    ],
  },
  {
    id: "bridal-shower",
    slug: "bridal-shower",
    title: "Bridal Shower",
    subtitle: "Celebrate the bride-to-be with a beautifully styled bridal shower",
    description: "Celebrate the bride-to-be with a beautifully styled bridal shower that captures elegance, warmth, and joy. From curated themes and aesthetic décor to interactive moments and seamless coordination, every detail is designed to create a meaningful and memorable pre-wedding celebration.",
    servicesIncluded: [
      "Makeup Artist", "Mehendi", "Decorators", "Photographer", "Cake", "Entertainment", "Artist", "Invites",
    ],
  },
  {
    id: "naming-ceremony",
    slug: "naming-ceremony",
    title: "Naming Ceremony",
    subtitle: "Mark your child's special milestone with a serene celebration",
    description: "Mark your child's special milestone with a serene and thoughtfully planned naming ceremony that blends tradition with modern elegance. We create a welcoming and graceful environment where every detail reflects warmth, purity, and celebration.",
    servicesIncluded: [
      "Pandit", "Decorators", "Catering", "Photography", "Sound & Lights", "Invites",
    ],
  },
  {
    id: "house-warming",
    slug: "house-warming",
    title: "House Warming",
    subtitle: "Welcome new beginnings with an inviting celebration",
    description: "Welcome new beginnings with a house warming celebration that is both inviting and elegantly organized. From tasteful décor to smooth event flow, we ensure a warm, festive atmosphere where you can celebrate your new space with comfort and joy.",
    servicesIncluded: [
      "Decorators", "Catering", "Pandit", "Sound & Lights", "Invites",
    ],
  },
  {
    id: "wedding",
    slug: "wedding",
    title: "Wedding",
    subtitle: "Experience a wedding crafted with precision, luxury, and timeless elegance",
    description: "Experience a wedding crafted with precision, luxury, and timeless elegance. From conceptual design and grand décor to flawless coordination and guest experience, we manage every element to create a celebration that reflects your story beautifully and unfolds seamlessly.",
    servicesIncluded: [
      "Event Planner", "Decorators", "Caterers", "Photographer", "Makeup Artist",
      "Mehendi", "DJ", "Sound & Lights", "Pandit", "Choreographer",
      "Vehicles", "Invites", "Entertainment", "Artist",
    ],
  },
  {
    id: "engagement",
    slug: "engagement",
    title: "Engagement / Ring Ceremony",
    subtitle: "Celebrate your new beginning with an elegant engagement ceremony",
    description: "Celebrate your new beginning with an engagement ceremony designed to feel intimate, stylish, and effortlessly elegant. Every detail—from ambiance to coordination—is thoughtfully planned to ensure a smooth and memorable celebration.",
    servicesIncluded: [
      "Decorators", "Photographer", "Makeup Artist", "DJ", "Sound & Lights", "Cake", "Invites", "Choreographer",
    ],
  },
  {
    id: "college-events",
    slug: "college-events",
    title: "College Events",
    subtitle: "Bring energy and creativity to your college events",
    description: "Bring energy and creativity to your college events with professionally managed experiences that are vibrant and engaging. From cultural fests to formal gatherings, we ensure smooth execution, dynamic setups, and an atmosphere that resonates with the audience.",
    servicesIncluded: [
      "DJ", "Sound & Lights", "Artist", "Anchor", "Entertainment", "Event Planner",
    ],
  },
  {
    id: "anniversary",
    slug: "anniversary",
    title: "Anniversary",
    subtitle: "Celebrate your journey with an elegant anniversary event",
    description: "Celebrate your journey with an anniversary event designed to be elegant, personal, and meaningful. Whether intimate or grand, we create an ambiance that reflects your story while ensuring every moment feels special and beautifully curated.",
    servicesIncluded: [
      "Decorators", "Cake", "Photographer", "DJ", "Sound & Lights", "Entertainment", "Invites",
    ],
  },
  {
    id: "theme-parties",
    slug: "theme-parties",
    title: "Theme Parties",
    subtitle: "Step into a world of creativity with immersive theme parties",
    description: "Step into a world of creativity with immersive theme parties crafted to deliver a visually stunning and engaging experience. From concept to execution, every element is designed to bring your chosen theme to life with precision and flair.",
    servicesIncluded: [
      "Decorators", "Artist", "Entertainment", "DJ", "Sound & Lights", "Photography", "Invites",
    ],
  },
  {
    id: "surprise-events",
    slug: "surprise-events",
    title: "Surprise Events",
    subtitle: "Create unforgettable moments with expertly planned surprise events",
    description: "Create unforgettable moments with expertly planned surprise events where every detail is handled with discretion and precision. From planning to execution, we ensure a seamless reveal that feels magical, emotional, and perfectly timed.",
    servicesIncluded: [
      "Decorators", "Photography", "Cake", "Entertainment", "Artist", "Sound & Lights",
    ],
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    subtitle: "Deliver impactful corporate events with refined execution",
    description: "Deliver impactful corporate events that combine professionalism with refined execution. From conferences to celebrations, we ensure every detail aligns with your brand while creating a polished, seamless, and engaging experience.",
    servicesIncluded: [
      "Event Planner", "Sound & Lights", "Anchor", "Artist", "Catering", "Decorators",
    ],
  },
  {
    id: "festive-events",
    slug: "festive-events",
    title: "Festive Events",
    subtitle: "Celebrate festivals with vibrant, culturally rich experiences",
    description: "Celebrate festivals with vibrant, culturally rich experiences designed to bring people together. With thoughtfully curated décor, lighting, and entertainment, we create festive environments that feel joyful, immersive, and memorable.",
    servicesIncluded: [
      "Decorators", "Lighting", "Sound", "Artist", "Catering", "Entertainment", "Pandit",
    ],
  },
];

const SERVICE_IMAGE_MAP: Record<string, string> = {
  "Photography": "https://images.unsplash.com/photo-1502764613149-7f3d7be0766d?w=300&q=80",
  "Decorators": "https://images.unsplash.com/photo-1519167758481-dc53e14e1dda?w=300&q=80",
  "Cake": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80",
  "DJ": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
  "Entertainment": "https://images.unsplash.com/photo-1516924962622-92b6c5a2b908?w=300&q=80",
  "Artist": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&q=80",
  "Sound & Lights": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
  "Invites": "https://images.unsplash.com/photo-1607344645866-009c320c0631?w=300&q=80",
  "Fun entertainers": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=600",
  "Live cartoon character": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=80",
  "Game stalls": "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=300&q=80",
  "Fun party artist": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600",
  "Catering": "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=300&q=80",
  "Makeup Artist": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80",
  "Mehendi": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=300&q=80",
  "Photographer": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80",
  "Pandit": "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=300&q=80",
  "Event Planner": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
  "Caterers": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80",
  "Choreographer": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
  "Vehicles": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
  "Anchor": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600",
  "Lighting": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600",
  "Sound": "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=600",
};

export function getServiceImageUrl(serviceName: string): string {
  return SERVICE_IMAGE_MAP[serviceName] ||
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80";
}

const HERO_IMAGES: Record<string, string[]> = {
  "birthday-celebration": [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80",
  ],
  "wedding": [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
  ],
  "corporate-events": [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
  ],
  "anniversary": [
    "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200",
  ],
  "college-events": [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  "engagement": [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
  ],
  "baby-shower": [
    "https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&q=80&w=1200",
  ],
  "gala-dinners": [
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
  ],
  "festive-events": [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  "destination-weddings": [
    "https://images.unsplash.com/photo-1544592732-83bbbfc46783?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1507504038482-7621c27be636?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200",
  ],
  "social-cultural-gatherings": [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  "luxury-celebrations": [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200",
  ],
  "event-planning-consultancy": [
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  ],
};

const BENTO_IMAGES: Record<string, string[]> = {
  "birthday-celebration": [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
  ],
  "wedding": [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
  ],
  "corporate-events": [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
  ],
  "anniversary": [
    "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
  ],
  "college-events": [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
  ],
  "engagement": [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  ],
  "baby-shower": [
    "https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&q=80&w=800",
  ],
  "gala-dinners": [
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  ],
  "festive-events": [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
  ],
  "destination-weddings": [
    "https://images.unsplash.com/photo-1544592732-83bbbfc46783?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507504038482-7621c27be636?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800",
  ],
  "social-cultural-gatherings": [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
  ],
  "luxury-celebrations": [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
  ],
  "event-planning-consultancy": [
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  ],
};

const FALLBACK_HERO = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
];

const FALLBACK_BENTO = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
];

export function getHeroMediaItems(slug: string): string[] {
  return HERO_IMAGES[slug] || FALLBACK_HERO;
}

export function getBentoMediaItems(slug: string): string[] {
  return BENTO_IMAGES[slug] || FALLBACK_BENTO;
}

export function getEventBySlug(slug: string): EventData | undefined {
  return EVENTS.find((e) => e.slug === slug);
}
