"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryHeader(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h2 className="text-3xl font-bold text-neutral-900">
          Get a glimpse of Sasha Decor homes
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Latest dream home interiors delivered the hassle-free way
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
      >
        Get Free Quote
      </Link>
    </motion.div>
  );
}
