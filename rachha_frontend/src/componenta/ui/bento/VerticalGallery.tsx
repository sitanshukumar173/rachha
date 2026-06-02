import { useRef, useEffect } from "react";

interface GalleryItem {
  title: string;
  url: string;
}

interface VerticalGalleryProps {
  items: GalleryItem[];
}

const BASE_H   = 164;
const HOVER_H  = 270;
const SHRINK_H = 113;
const GAP      = 8;
const WRAP_H   = 510;
const SPEED    = 0.55;
const REPS     = 6;

const css = `
.vg-wrap { width:100%; max-width:320px; height:${WRAP_H}px; overflow:hidden;
  position:relative; border-radius:20px; background:#FFF0F3; }
.vg-track { position:absolute; top:0; left:0; right:0;
  display:flex; flex-direction:column; gap:${GAP}px; }
.vg-card { border-radius:14px; overflow:hidden; position:relative;
  flex-shrink:0; cursor:pointer; height:${BASE_H}px;
  transition:height .5s cubic-bezier(.77,0,.18,1); }
.vg-wrap:hover .vg-card          { height:${SHRINK_H}px; }
.vg-wrap:hover .vg-card:hover    { height:${HOVER_H}px;  }
.vg-card img { width:100%; height:100%; object-fit:cover;
  display:block; transition:transform .5s cubic-bezier(.77,0,.18,1); }
.vg-card:hover img { transform:scale(1.04); }
.vg-label { position:absolute; bottom:0; left:0; right:0;
  padding:32px 14px 14px;
  background:linear-gradient(to top,rgba(14,10,6,0.85),transparent);
  font-size:13px; font-weight:700; letter-spacing:.14em;
  color:#D4AF37; text-transform:uppercase; font-family:"Playfair Display",Georgia,serif; }
`;

export default function VerticalGallery({ items }: VerticalGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const hovRef = useRef(false);
  const looped = Array.from({length:REPS}, ()=>items).flat();
  const cycleH = items.length * (BASE_H + GAP);

  useEffect(() => {
    if (!document.getElementById('vg-style')) {
      const s = document.createElement('style');
      s.id = 'vg-style'; s.textContent = css;
      document.head.appendChild(s);
    }
    let raf: number;
    const tick = () => {
      if (!hovRef.current) {
        offsetRef.current += SPEED;
        if (offsetRef.current >= cycleH) offsetRef.current -= cycleH;
        if (trackRef.current)
          trackRef.current.style.transform =
            `translateY(${-offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cycleH]);

  return (
    <div className="vg-wrap"
      onMouseEnter={()=>hovRef.current=true}
      onMouseLeave={()=>hovRef.current=false}>
      <div className="vg-track" ref={trackRef}>
        {looped.map((item,i) => (
          <div key={i} className="vg-card">
            <img src={item.url} alt={item.title} loading="lazy" />
            <div className="vg-label">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
