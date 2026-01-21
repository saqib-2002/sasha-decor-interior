"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { GALLERY_ITEMS } from "@/src/constant/gallery.constant";
import GalleryCard from "./GalleryCard";

const SCROLL_AMOUNT = 360;

export default function GalleryCarousel(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = (): void => {
    scrollRef.current?.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const scrollRight = (): void => {
    scrollRef.current?.scrollBy({
      left: SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-neutral-100 md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-neutral-100 md:flex"
      >
        <ChevronRight size={20} />
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth pb-4 no-scrollbar"
      >
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <GalleryCard item={item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
