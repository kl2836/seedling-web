import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seedling — Invest Early. Grow Together.",
  description: "Discover and endorse early startups, connect with your community, and invest when the time is right. Seedling is a social investing and endorsement platform.",
  keywords: ["investing", "startups", "endorsements", "social investing", "early stage", "founders", "investors"],
  authors: [{ name: "Seedling" }],
  openGraph: {
    title: "Seedling — Invest Early. Grow Together.",
    description: "Discover and endorse early startups, connect with your community, and invest when the time is right.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seedling — Invest Early. Grow Together.",
    description: "Discover and endorse early startups, connect with your community, and invest when the time is right.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
