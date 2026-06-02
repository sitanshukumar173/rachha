export interface GalleryData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

export const Gallery_Data: GalleryData[] = [
  {
    id: "birthday",
    title: "Birthday Celebration",
    description: "Create unforgettable birthday moments with premium packages.",
    imageUrl:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "wedding",
    title: "Wedding Events",
    description: "Your dream wedding deserves flawless planning and execution.",
    imageUrl:
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional gatherings that leave lasting impressions.",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "anniversary",
    title: "Anniversaries",
    description: "Celebrate life's milestones in unmatched style.",
    imageUrl:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "graduation",
    title: "Graduation Parties",
    description: "Mark every achievement with an unforgettable celebration.",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
  },
  // extras below cycle into the 5 slots automatically
  {
    id: "engagement",
    title: "Engagements",
    description: "Start your forever with a magical, intimate celebration.",
    imageUrl:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "decoration",
    title: "Decoration",
    description: "World-class décor that transforms any venue into magic.",
    imageUrl:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "catering",
    title: "Catering",
    description: "Culinary experiences crafted for every palate.",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "lighting",
    title: "Lighting & Sound",
    description: "Immersive audiovisual setups that captivate every guest.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Professional captures that tell your story beautifully.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "venue",
    title: "Venue Styling",
    description: "Bespoke venue transformations tailored to your vision.",
    imageUrl:
      "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "concert",
    title: "Live Concerts",
    description: "Electrifying live music events tailored for any crowd.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "gala",
    title: "Gala Dinners",
    description: "Sophisticated gala evenings designed to impress.",
    imageUrl:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "babyshower",
    title: "Baby Showers",
    description: "Sweet celebrations welcoming the newest arrival.",
    imageUrl:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "fashion",
    title: "Fashion Shows",
    description: "Runway-ready productions from concept to curtain call.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];
