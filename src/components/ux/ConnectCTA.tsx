"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CONNECT_CTA } from "@/src/constant/connect.constant";

export default function ConnectCTA(): JSX.Element {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-neutral-900"
        >
          {CONNECT_CTA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mx-auto mt-3 max-w-xl text-sm text-neutral-600"
        >
          {CONNECT_CTA.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Call */}
          <a
            href={`tel:${CONNECT_CTA.phone}`}
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Phone size={16} />
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${CONNECT_CTA.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
