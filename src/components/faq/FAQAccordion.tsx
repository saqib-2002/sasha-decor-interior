"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { FAQS } from "@/src/constant/faq.constant";

export default function FAQAccordion(): JSX.Element {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Everything you need to know about our interior and contracting services
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <FAQItem item={faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
