import BentoGallery from "../ui/BentoGallery/Bentogallery";
import type { GalleryData } from "../../data/GalleryData";
import { Gallery_Data } from "../../data/GalleryData";

export default function HomePageGalleryFeature() {
  const galleryItems: GalleryData[] = Gallery_Data;
  return (
    <section className="m-0 w-full overflow-hidden bg-roseMist pt-4 pb-1 md:pt-8 md:pb-2">
      <div className="text-center px-6 pt-2 md:pt-4 pb-2">
        <div className="gold-title-shine font-serif font-thin tracking-[0.1em] text-4xl md:text-5xl uppercase">
          Featured Gallery
        </div>
      </div>
      <BentoGallery items={galleryItems} cycleInterval={5000} />
    </section>
  );
}