import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahsan Ejaz | Senior Android Developer",
  description:
    "Senior Android Developer with 5+ years of experience crafting high-performance mobile apps. Specialized in Kotlin, Jetpack Compose, and scalable MVVM architectures. Built apps with 1M+ downloads.",
  keywords: [
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Mobile Developer",
    "Ahsan Ejaz",
  ],
  authors: [{ name: "Ahsan Ejaz" }],
  openGraph: {
    title: "Ahsan Ejaz | Senior Android Developer",
    description:
      "Senior Android Developer with 5+ years of experience. Kotlin, Jetpack Compose, MVVM specialist.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Ejaz | Senior Android Developer",
    description:
      "Senior Android Developer with 5+ years of experience. Kotlin, Jetpack Compose, MVVM specialist.",
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
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased bg-[#0A0A0F] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
