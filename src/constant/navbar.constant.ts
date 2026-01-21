export interface NavLink {
  label: string;
  href: string;
}

export interface CTAConfig {
  label: string;
  href: string;
}

export const BRAND = {
  name: "Sasha Decor",
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

export const CTA: CTAConfig = {
  label: "Get a Quote",
  href: "/contact",
};
