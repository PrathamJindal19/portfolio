"use client";
import { useState } from "react";
import Link from "next/link";
import realEstate, { RealEstate } from "@/lib/RealEstateContent";

const WebComponent = ({ item }: { item: RealEstate }) => {
    const [activeImage, setActiveImage] = useState(0);

    const images = item.images;
    const total = images.length;

    const prevImage = () => {
        if (!total) return;
        setActiveImage((prev) => (prev - 1 + total) % total);
    };

    const nextImage = () => {
        if (!total) return;
        setActiveImage((prev) => (prev + 1) % total);
    };

    const bg = (source?: string) =>
        source ? { backgroundImage: `url(${source})` } : undefined;

    return (
        <div className="border border-[#2E2E2E] w-full rounded-[4px] flex flex-col">
            <div className="w-full p-[10px] md:p-[28px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[8px]">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="w-full min-w-0 aspect-[4/3] bg-[#2F2F2F] rounded-[4px] bg-cover bg-center bg-no-repeat"
                            style={bg(img.source)}
                        />
                    ))}
                </div>
            </div>

            {/* PROJECT DETAILS */}
            <div className="flex-1 w-full bg-[#1A1A1A] border-t border-[#292929] p-[20px] lg:p-[28px] flex flex-wrap justify-between items-end gap-[16px] lg:gap-[28px]">
                <div className="max-w-[550px] flex flex-col gap-[12px]">
                    <div className="font-serifless font-normal text-[20px] leading-[115%] tracking-[-2%] text-[#FFFFFF]">
                        {item.heading}
                    </div>

                    <div className="font-tight font-medium text-[15px] leading-[150%] tracking-[0%] text-grey-59">
                        {item.desc}
                    </div>
                </div>

                <Link
                    href={item.link} target="_blank"
                    className="transition-transform hover:-translate-y-0.5 w-full font-tight font-medium text-[16px] leading-[115%] tracking-[0%] bg-light-98 text-black border border-light-90 md:w-[188px] h-[38px] flex items-center justify-center gap-[6px] rounded-[8px]"
                >
                    <div>Show Live Preview</div>

                    <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.75 0.75L0.75 9.75M9.75 8.25V0.75H2.25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="black"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default function RealEstateSection() {
    return (
        <section id="real_estate" className={"h-full w-full flex flex-col gap-[28px]"}>
            {realEstate.map((item) => (
                <WebComponent key={item.id} item={item} />
            ))}
        </section>
    );
}