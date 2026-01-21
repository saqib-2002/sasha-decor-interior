"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function ContactHeader(): JSX.Element {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="mb-14 text-center"
    >
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Contact Us
      </h1>
      <p className="mt-3 text-sm text-neutral-600">
        Let’s discuss your interior or contracting requirements
      </p>
    </motion.div>
  );
}
