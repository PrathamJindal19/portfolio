// WorkSection — renders the portfolio image gallery.
// Images are organised in "rows" from content.ts; each row is either:
//   • "full"  — a single full-width image, edge-to-edge with no padding
//   • "pair"  — two images side-by-side that share a unified aspect ratio

import Image from "next/image";
import { workRows } from "@/lib/content";

/**
 * Tile — a single portfolio image.
 *
 * When `aspectRatio` is supplied (pair rows), the image is rendered inside a
 * fixed-ratio container so both tiles in a row share the same height regardless
 * of their original dimensions.
 *
 * Without `aspectRatio` (full rows), the image renders at its natural width/height
 * ratio, filling the available container width.
 */
function Tile({
  src,
  alt,
  w,
  h,
  aspectRatio,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  aspectRatio?: number; // width ÷ height ratio; supplied only for "pair" rows
}) {
  if (aspectRatio) {
    // Fixed-ratio container → next/image fills it with object-cover + object-top
    // so the top of each screenshot is always visible even when cropped
    return (
      <div
        className="relative w-full overflow-hidden rounded-[4px] bg-[#0d0d0d]"
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
          className="object-cover"
        />
      </div>
    );
  }

  // No fixed ratio — image determines its own height via natural intrinsic dimensions
  return (
    <div className="w-full overflow-hidden rounded-[4px]">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        draggable={false}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
        className="w-full h-auto object-contain block"
      />
    </div>
  );
}

export default function WorkSection() {
  return (
    // Section id enables in-page anchor navigation from the Navbar
    <section id="work" className="scroll-mt-24">
      {/* Outer panel provides a dark background and consistent 2 px gaps between rows */}
      <div className="flex flex-col gap-2 overflow-hidden rounded-[4px] bg-panel p-2">
        {workRows.map((row, i) => {
          if (row.type === "pair") {
            // Average the two tiles' aspect ratios so they render at the same height.
            // This prevents jarring height mismatches when the original images differ.
            const ratio1 = row.tiles[0].w / row.tiles[0].h;
            const ratio2 = row.tiles[1].w / row.tiles[1].h;
            const avgRatio = (ratio1 + ratio2) / 2;

            return (
              // 1-column on mobile, 2-column on sm+ so tiles wrap on small screens
              <div key={i} className="grid grid-cols-1 gap-2 sm:grid-cols-2 items-start">
                <Tile
                  src={row.tiles[0].src}
                  alt={row.tiles[0].alt}
                  w={row.tiles[0].w}
                  h={row.tiles[0].h}
                  aspectRatio={row.tiles[0].w / row.tiles[0].h}
                />
                <Tile
                  src={row.tiles[1].src}
                  alt={row.tiles[1].alt}
                  w={row.tiles[1].w}
                  h={row.tiles[1].h}
                  aspectRatio={row.tiles[1].w / row.tiles[1].h}
                />
              </div>
            );
          } else {
            return (
              <Tile
                key={i}
                src={row.tile.src}
                alt={row.tile.alt}
                w={row.tile.w}
                h={row.tile.h}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
