import { useState, useEffect, useCallback } from "react";
import { Gallery_Data as DEMO_ITEMS } from "../../../data/GalleryData";
import type { GalleryData as GalleryItem } from "../../../data/GalleryData";

// Slot layout config 
// Each slot is described as a CSS grid area name.
// Normal flex-grow weights + hovered weights are defined per slot.
const SLOTS = [
  { id: "a", normalFlex: 1.4, hoveredFlex: 2.2 }, // tall left
  { id: "b", normalFlex: 1.2, hoveredFlex: 2.0 }, // tall center
  { id: "c", normalFlex: 0.85, hoveredFlex: 1.8 }, // top-right small
  { id: "d", normalFlex: 0.85, hoveredFlex: 1.8 }, // mid-right
  { id: "e", normalFlex: 0.85, hoveredFlex: 1.8 }, // bottom-right
];

//  Single bento cell
interface BentoCellProps {
  item: GalleryItem;
  flexGrow: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function BentoCell({ item, flexGrow, isHovered, onHover, onLeave }: BentoCellProps) {
  const [currentImg, setCurrentImg] = useState<string | undefined>(item.imageUrl);
  const [nextImg, setNextImg] = useState<string | undefined>(item.imageUrl);
  const [fading, setFading] = useState<boolean>(false);
  const isVideo = Boolean(item.videoUrl);

  // When item changes (cycling), trigger cross-fade
  useEffect(() => {
    if (item.imageUrl === currentImg) return;
    setNextImg(item.imageUrl);
    setFading(true);
    const t = setTimeout(() => {
      setCurrentImg(item.imageUrl);
      setFading(false);
    }, 700);
    return () => clearTimeout(t);
  }, [item.imageUrl]);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        flexGrow,
        flexShrink: 1,
        flexBasis: 0,
        minWidth: 0,
        minHeight: 0,
        transition: "flex-grow 0.55s cubic-bezier(0.34, 1.2, 0.64, 1)",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* Media — video or image */}
      {isVideo ? (
        <video
          src={item.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.55s ease",
            transform: isHovered ? "scale(1.06)" : "scale(1)",
          }}
        />
      ) : (
        <>
          {/* Base image */}
          <img
            src={currentImg}
            alt={item.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.55s ease",
              transform: isHovered ? "scale(1.06)" : "scale(1)",
            }}
          />

          {/* Cross-fade overlay for cycling transition */}
          <img
            src={nextImg}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: fading ? 1 : 0,
              transition: fading ? "opacity 0.7s ease" : "none",
              pointerEvents: "none",
            }}
          />
        </>
      )}

      {/* Dark gradient at bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)",
          transition: "opacity 0.4s ease",
          opacity: isHovered ? 1 : 0.7,
        }}
      />

      {/* Text overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 18px 18px",
          transform: isHovered ? "translateY(0)" : "translateY(4px)",
          transition: "transform 0.4s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(14px, 1.8vw, 20px)",
            fontWeight: 400,
            color: "#D4AF37",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </p>
        <p
          style={{
            margin: "4px 0 0",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(10px, 1.1vw, 13px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.5,
            maxWidth: "28ch",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
          }}
        >
          {item.description}
        </p>
      </div>

      {/* Subtle border ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          border: isHovered
            ? "1.5px solid rgba(255,255,255,0.28)"
            : "1.5px solid rgba(255,255,255,0.10)",
          transition: "border-color 0.4s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

//  Main BentoGallery component 
export default function BentoGallery({
  items = DEMO_ITEMS as GalleryItem[],
  cycleInterval = 4000,
  className = "",
}: {
  items?: GalleryItem[];
  cycleInterval?: number;
  className?: string;
}) {
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  // Each slot tracks which "page" of items it's showing
  const [slotOffsets, setSlotOffsets] = useState([0, 1, 2, 3, 4]);

  // We need at least 5 items — pad by repeating if needed
  // ensure we have a non-empty source array
  const source = (items && items.length > 0) ? items : (DEMO_ITEMS as GalleryItem[]);
  const pool = source.length < 5
    ? [...Array(Math.ceil(5 / source.length))].flatMap(() => source).slice(0, 8)
    : source;

  // Auto-cycle: advance one random slot's offset each interval
  const advance = useCallback(() => {
    setSlotOffsets((prev) => {
      const next = [...prev];
      // pick the slot whose image hasn't been seen most recently
      const slotIdx = Math.floor(Math.random() * 5);
      next[slotIdx] = (next[slotIdx] + 5) % pool.length;
      return next;
    });
  }, [pool.length]);

  useEffect(() => {
    const id = setInterval(advance, cycleInterval);
    return () => clearInterval(id);
  }, [advance, cycleInterval]);

  // Compute flex-grow for each slot
  const getFlexGrow = (slotIdx: number) => {
    const slot = SLOTS[slotIdx];
    if (hoveredSlot === null) return slot.normalFlex;
    if (hoveredSlot === slotIdx) return slot.hoveredFlex;
    // shrink non-hovered slots
    return slot.normalFlex * 0.7;
  };

  // Layout: left column (slots 0,1 stacked vertically) + right column (2,3,4)
  return (
    <>
      {/* Google Fonts preload */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <section
        className={className}
        style={{
          width: "100%",
          height: "80svh",
          minHeight: "400px",
          padding: "clamp(12px, 2vw, 24px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(8px, 1.2vw, 14px)",
        }}
      >
        {/* Row */}
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "clamp(8px, 1.2vw, 14px)",
            minHeight: 0,
          }}
        >
          {/* Left column — two tall slots */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 1.2vw, 14px)",
              flexGrow: getFlexGrow(0) + getFlexGrow(1),
              flexShrink: 1,
              flexBasis: 0,
              minWidth: 0,
              transition: "flex-grow 0.55s cubic-bezier(0.34, 1.2, 0.64, 1)",
            }}
          >
            {[0, 1].map((slotIdx) => (
              <BentoCell
                key={slotIdx}
                item={pool[slotOffsets[slotIdx] % pool.length]}
                flexGrow={getFlexGrow(slotIdx)}
                isHovered={hoveredSlot === slotIdx}
                onHover={() => setHoveredSlot(slotIdx)}
                onLeave={() => setHoveredSlot(null)}
              />
            ))}
          </div>

          {/* Right column — three smaller slots */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 1.2vw, 14px)",
              flexGrow: getFlexGrow(2) + getFlexGrow(3) + getFlexGrow(4),
              flexShrink: 1,
              flexBasis: 0,
              minWidth: 0,
              transition: "flex-grow 0.55s cubic-bezier(0.34, 1.2, 0.64, 1)",
            }}
          >
            {[2, 3, 4].map((slotIdx) => (
              <BentoCell
                key={slotIdx}
                item={pool[slotOffsets[slotIdx] % pool.length]}
                flexGrow={getFlexGrow(slotIdx)}
                isHovered={hoveredSlot === slotIdx}
                onHover={() => setHoveredSlot(slotIdx)}
                onLeave={() => setHoveredSlot(null)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/*
 * ─────────────────────────────────────────────────────────────────
 * QUICK USAGE EXAMPLE
 * ─────────────────────────────────────────────────────────────────
 *
 * Option A — use built-in demo data:
 *   <BentoGallery />
 *
 * Option B — pass your own items:
 *   import BentoGallery from "./BentoGallery";
 *
 *   const MY_SERVICES = [
 *     { id: "s1", title: "My Service", description: "Short tagline.", imageUrl: "https://..." },
 *     ...
 *   ];
 *
 *   export default function FeaturesSection() {
 *     return (
 *       <BentoGallery
 *         items={MY_SERVICES}
 *         cycleInterval={5000}   // swap images every 5 seconds
 *       />
 *     );
 *   }
 *
 * ─────────────────────────────────────────────────────────────────
 * COMPATIBLE WITH ServiceIncluded[] from your data.ts:
 *
 *   import { SERVICES_INCLUDED } from "./data";
 *   // SERVICES_INCLUDED items don't have `description`, so add a fallback:
 *   const adapted = SERVICES_INCLUDED.map(s => ({
 *     ...s,
 *     description: s.description ?? "",
 *   }));
 *   <BentoGallery items={adapted} />
 * ─────────────────────────────────────────────────────────────────
 */
