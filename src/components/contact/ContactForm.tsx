"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function ContactForm(): JSX.Element {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
    >
      <h2 className="mb-6 text-lg font-semibold text-neutral-900">
        Send Us a Message
      </h2>

      <form className="grid gap-6 sm:grid-cols-2">
        <Input label="Name" placeholder="Your full name" />
        <Input label="Phone" placeholder="+91 XXXXX XXXXX" type="tel" />

        <div className="sm:col-span-2">
          <Input label="Email" placeholder="your@email.com" type="email" />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-neutral-900 focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-full bg-neutral-900 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
}

interface InputProps {
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

function Input({
  label,
  placeholder,
  type = "text",
}: InputProps): JSX.Element {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-neutral-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-neutral-900 focus:outline-none"
      />
    </div>
  );
}
