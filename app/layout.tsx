import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-body",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Notive — Digital Marketing & Social Media Agency",
  description:
    "Notive membantu merek tumbuh lewat manajemen media sosial, produksi konten Instagram & TikTok, dan Boost Ads. Kreatif dan terukur.",
  openGraph: {
    title: "Notive — More than just social media.",
    description: "Manajemen media sosial, produksi konten, dan Boost Ads untuk merek kamu.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
