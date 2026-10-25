import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data";

export const metadata: Metadata = {
  icons: {
    icon: siteData.navbar.logo.imgSrc,
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
