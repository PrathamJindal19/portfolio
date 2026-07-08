import Image from "next/image";
import { workRows } from "@/lib/content";

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4096/3368] w-full overflow-hidden rounded-[4px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 480px"
        className="object-cover"
      />
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex flex-col gap-2 overflow-hidden rounded-[4px] bg-panel p-2">
        {workRows.map((row, i) =>
          row.type === "pair" ? (
            <div key={i} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Tile src={row.tiles[0].src} alt={row.tiles[0].alt} />
              <Tile src={row.tiles[1].src} alt={row.tiles[1].alt} />
            </div>
          ) : (
            <div
              key={i}
              className="flex w-full items-center overflow-hidden rounded-[4px]"
              style={{ background: row.bg }}
            >
              <div className="w-full px-6 py-8 sm:px-16 lg:px-[100px]">
                <Tile src={row.tile.src} alt={row.tile.alt} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
