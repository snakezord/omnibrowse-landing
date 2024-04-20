import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omnibrowse - Navigate the Web with personal AI by your side",
  description: `The #1 browser extension with ChatGPT, Gemini, Claude, and more. Pay once. Use forever !`,
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
          "flex h-full min-h-screen flex-col bg-black font-sans antialiased",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
