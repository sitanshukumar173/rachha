import { ServiceBentoGrid } from '../../ui/bento/ServiceBentoGrid';
import { ServiceHeroSection } from '../../ui/hero/ServiceHeroSection';
import { getEventBySlug, getHeroMediaItems, getBentoMediaItems, getServiceImageUrl } from '../../../data/eventData';

interface EventPageProps {
  eventSlug: string;
}

export default function EventPage({ eventSlug }: EventPageProps) {
  const event = getEventBySlug(eventSlug);

  if (!event) {
    return (
      <main className="relative bg-roseMist min-h-screen flex items-center justify-center">
        <p className="text-charcoal/60 font-serif text-xl">Event not found</p>
      </main>
    );
  }

  const heroMediaItems = getHeroMediaItems(eventSlug);
  const mediaItems = getBentoMediaItems(eventSlug);

  const servicesIncluded = event.servicesIncluded.map((service) => ({
    title: service,
    url: getServiceImageUrl(service),
  }));

  return (
    <main className="relative bg-roseMist">
      <ServiceHeroSection
        title={event.title}
        subtitle={event.subtitle}
        mediaItems={heroMediaItems}
      />

      <ServiceBentoGrid
        title={event.title}
        description={event.description}
        mediaItems={mediaItems}
        servicesImages={servicesIncluded}
      />
    </main>
  );
}
