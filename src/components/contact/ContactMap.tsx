"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function ContactMap(): JSX.Element {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="mt-16 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm"
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=India&output=embed"
        className="h-[350px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
