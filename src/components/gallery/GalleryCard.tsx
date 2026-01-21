"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "@/src/constant/gallery.constant";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({
  item,
}: GalleryCardProps): JSX.Element {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative min-w-[280px] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm sm:min-w-[320px]"
    >
      <div className="relative h-[360px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-sm font-semibold text-white">
          {item.title}, {item.location}
        </p>
      </div>
    </motion.div>
  );
}
