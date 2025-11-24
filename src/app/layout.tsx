import type { Metadata } from "next";
import { Sora } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import Layout from "@/components/Layout";
import metadataJson from "@/metadata.json";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: metadataJson.name,
  description: metadataJson.description,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-dark font-display text-text-light antialiased selection:bg-primary selection:text-white">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
