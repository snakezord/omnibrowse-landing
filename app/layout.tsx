import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export const metadata: Metadata = {
  title: "Omnibrowse | Next gen we assistant",
  description: "All-in-One AI Assistant. Personal, Smart.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-black font-sans antialiased",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
