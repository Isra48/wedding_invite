import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Felix & Celine — Wedding Invite",
  description: "Clone-like wedding invite site built with Next.js, Tailwind, and Atomic Design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} font-body antialiased scroll-smooth`}>{children}</body>
    </html>
  );
}
