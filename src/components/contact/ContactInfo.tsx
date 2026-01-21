"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { fadeUp } from "./motion";

export default function ContactInfo(): JSX.Element {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
    >
      <h2 className="mb-6 text-lg font-semibold text-neutral-900">
        Contact Information
      </h2>

      <ul className="space-y-6 text-sm text-neutral-600">
        <li className="flex items-start gap-4">
          <MapPin size={20} className="mt-1 text-neutral-500" />
          <span>
            Your City, State <br />
            India
          </span>
        </li>

        <li className="flex items-center gap-4">
          <Phone size={20} className="text-neutral-500" />
          <span>+91 XXXXX XXXXX</span>
        </li>

        <li className="flex items-center gap-4">
          <Mail size={20} className="text-neutral-500" />
          <span>contact@sashadecor.com</span>
        </li>
      </ul>
    </motion.div>
  );
}
