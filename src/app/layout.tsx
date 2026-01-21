import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Sasha Decor",
  description: "Interior Work with Precision and Quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main content grows to push footer down */}
        <main className="flex-1">{children}</main>

        <Footer />

        {/* Floating WhatsApp button visible on all pages */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
