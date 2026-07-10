import Image from "next/image";
import { workRows } from "@/lib/content";

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
  aspectRatio?: number;
}) {
  if (aspectRatio) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-[4px]"
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

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
    <section id="work" className="scroll-mt-24">
      <div className="flex flex-col gap-2 overflow-hidden rounded-[4px] bg-panel p-2">
        {workRows.map((row, i) => {
          if (row.type === "pair") {
            const ratio1 = row.tiles[0].w / row.tiles[0].h;
            const ratio2 = row.tiles[1].w / row.tiles[1].h;
            const avgRatio = (ratio1 + ratio2) / 2;

            return (
              <div key={i} className="grid grid-cols-1 gap-2 sm:grid-cols-2 items-start">
                <Tile
                  src={row.tiles[0].src}
                  alt={row.tiles[0].alt}
                  w={row.tiles[0].w}
                  h={row.tiles[0].h}
                  aspectRatio={avgRatio}
                />
                <Tile
                  src={row.tiles[1].src}
                  alt={row.tiles[1].alt}
                  w={row.tiles[1].w}
                  h={row.tiles[1].h}
                  aspectRatio={avgRatio}
                />
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="flex w-full items-center overflow-hidden rounded-[4px]"
                style={{ background: row.bg }}
              >
                <div className="w-full px-[8%] py-[6%]">
                  <Tile
                    src={row.tile.src}
                    alt={row.tile.alt}
                    w={row.tile.w}
                    h={row.tile.h}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
