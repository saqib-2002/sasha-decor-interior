"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS, CTA } from "@/src/constant/navbar.constant";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: -24, transition: { duration: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900"
        >
          {BRAND.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-neutral-700 transition hover:text-neutral-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={CTA.href}
            className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            {CTA.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={openMenu}
          aria-label="Open menu"
          className="md:hidden rounded-md p-2 text-neutral-800 transition hover:bg-neutral-100"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between border-b px-4 py-4">
              <span className="text-lg font-semibold text-neutral-900">
                {BRAND.name}
              </span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="rounded-md p-2 transition hover:bg-neutral-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-7 px-6 py-10">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg font-medium text-neutral-800 transition hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div variants={itemVariants}>
                <Link
                  href={CTA.href}
                  onClick={closeMenu}
                  className="mt-4 block rounded-full bg-neutral-900 py-3 text-center text-base font-semibold text-white transition hover:bg-neutral-800"
                >
                  {CTA.label}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
