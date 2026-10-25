import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data";

export const metadata: Metadata = {
  title: "Interview Kickstart | Build AI Skills & Land Top-Tech Roles",
  description:
    "Turbocharge your tech career with real-world GenAI, Agentic AI, and interview prep taught by 700+ active hiring managers from FAANG & tier-1 companies.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
