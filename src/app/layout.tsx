import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Starter Next.js template",
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
