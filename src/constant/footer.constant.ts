import { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContactItem {
  icon: LucideIcon;
  content: string | JSX.Element;
}

export interface FooterSocial {
  icon: LucideIcon;
  href: string;
}

export const FOOTER_SERVICES: readonly string[] = [
  "Interior Design",
  "Turnkey Projects",
  "Residential Contracting",
  "Commercial Fit-Outs",
  "Renovation & Remodeling",
  "Custom Furniture",
];

export const FOOTER_LINKS: readonly FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_CONTACT: readonly FooterContactItem[] = [
  {
    icon: (await import("lucide-react")).MapPin,
    content: "Your City, State, India",
  },
  {
    icon: (await import("lucide-react")).Phone,
    content: "+91 XXXXX XXXXX",
  },
  {
    icon: (await import("lucide-react")).Mail,
    content: "contact@yourbusiness.com",
  },
];

export const FOOTER_SOCIALS: readonly FooterSocial[] = [
  {
    icon: (await import("lucide-react")).Facebook,
    href: "#",
  },
  {
    icon: (await import("lucide-react")).Instagram,
    href: "#",
  },
  {
    icon: (await import("lucide-react")).Linkedin,
    href: "#",
  },
];
