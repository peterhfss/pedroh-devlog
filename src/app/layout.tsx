import type { Metadata } from "next";
import {
  DM_Sans,
  JetBrains_Mono
} from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: "%s | PedroH's DevLog",
    default: "PedroH's DevLog",
  },
  description:
    "My developer journey blog. I share real-world coding tutorials and insights on building a software developer career",
  alternates: {
    types: {
      "application/rss+xml": `${getSiteUrl()}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetBrainsMono.variable}  h-full antialiased scroll-smooth`}
    >
      <body className="bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  );
}
