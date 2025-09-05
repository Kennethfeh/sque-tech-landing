import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GradientBg } from "@/components/gradient-bg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sque - Build exceptional digital experiences",
  description: "Sque empowers teams to create, deploy, and scale modern applications with unprecedented speed and reliability. Join thousands of developers building the future.",
  keywords: ["development platform", "deployment", "developer tools", "cloud platform", "application hosting"],
  authors: [{ name: "Sque Team" }],
  openGraph: {
    title: "Sque - Build exceptional digital experiences",
    description: "Sque empowers teams to create, deploy, and scale modern applications with unprecedented speed and reliability.",
    url: "https://sque.com",
    siteName: "Sque",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sque - Build exceptional digital experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sque - Build exceptional digital experiences",
    description: "Sque empowers teams to create, deploy, and scale modern applications with unprecedented speed and reliability.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <GradientBg />
        {children}
      </body>
    </html>
  );
}
