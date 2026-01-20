"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, NAV_LINKS, CTA } from "@/src/constant/constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          {BRAND.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 transition"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={CTA.href}
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            {CTA.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-800"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white z-50"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="text-lg font-semibold">{BRAND.name}</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>

            <div className="flex flex-col px-6 py-8 gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-gray-800"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href={CTA.href}
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-black text-white text-center py-3 rounded-full"
              >
                {CTA.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
