 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic, Almarai } from "next/font/google";
import localFont from 'next/font/local';
import { RootLayoutClient } from "@/components/root-layout-client";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-ibm-plex-sans-arabic',
});

const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
});

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-almarai",
});

const nrt = localFont({
  src: './fonts/NRT-Reg.ttf',
  variable: '--font-nrt',
});

export const metadata: Metadata = {
  title: "ConnectGate",
  description: "Research Management Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${ibmPlexSansArabic.variable} ${notoKufiArabic.variable} ${almarai.variable} ${nrt.variable} min-h-screen bg-background font-sans antialiased`}>
        <RootLayoutClient className="min-h-screen bg-background font-sans antialiased">
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}