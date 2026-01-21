"use client";

import { motion } from "framer-motion";

// WhatsApp configuration
const WHATSAPP = {
  number: "1234567890", // replace with your WhatsApp number
  message: "Hello! I found your website and would like to chat.", // default message
  iconSize: 24, // size of the WhatsApp icon
};

export default function FloatingWhatsApp(): JSX.Element {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(
        WHATSAPP.message,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full bg-emerald-500 p-4 shadow-xl transition hover:bg-emerald-600"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }} // ✅ Keep the keyframes
      transition={{ duration: 0.6, type: "tween", ease: "easeOut" }} // ✅ Use tween for multiple keyframes
      whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <WhatsApp size={WHATSAPP.iconSize} color="white" /> */}
    </motion.a>
  );
}
