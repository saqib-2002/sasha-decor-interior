"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BRAND } from "@/src/constant/navbar.constant";
import {
  FOOTER_SERVICES,
  FOOTER_LINKS,
  FOOTER_CONTACT,
  FOOTER_SOCIALS,
} from "@/src/constant/footer.constant";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{BRAND.name}</h3>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              Premium interior decoration and reliable contracting services. We
              design and build elegant residential and commercial spaces with
              uncompromising quality and craftsmanship.
            </p>
          </section>

          {/* Services */}
          <section>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li
                  key={service}
                  className="text-neutral-400 transition hover:text-white"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Links */}
          <section>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              {FOOTER_CONTACT.map(({ icon: Icon, content }, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon size={18} className="mt-1 text-neutral-500" />
                  <span className="text-neutral-400">{content}</span>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {FOOTER_SOCIALS.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.15 }}
                  className="rounded-full bg-neutral-800 p-2.5 text-neutral-300 transition hover:bg-neutral-700 hover:text-white"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
