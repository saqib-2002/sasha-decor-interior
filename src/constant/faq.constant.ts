export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: readonly FAQItem[] = [
  {
    question: "What interior services do you provide?",
    answer:
      "We provide complete interior design solutions including space planning, custom furniture, modular kitchens, wardrobes, false ceilings, lighting, and turnkey execution.",
  },
  {
    question: "Do you handle turnkey interior projects?",
    answer:
      "Yes, we specialize in turnkey interior and contracting projects, managing everything from design to execution, ensuring quality, timelines, and transparency.",
  },
  {
    question: "How long does a typical interior project take?",
    answer:
      "Project timelines vary based on scope and size. Residential interiors typically take 6–10 weeks, while larger commercial projects may take longer.",
  },
  {
    question: "Can you work within a fixed budget?",
    answer:
      "Absolutely. We carefully plan designs and materials to match your budget without compromising on quality or aesthetics.",
  },
  {
    question: "Do you provide after-completion support?",
    answer:
      "Yes, we offer post-completion support and warranty on select materials and workmanship, ensuring peace of mind.",
  },
];
