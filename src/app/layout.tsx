import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Advies Over Cijfers | Financieel advies & boekhouding",
    template: "%s | Advies Over Cijfers",
  },
  description: "Advies Over Cijfers biedt maatwerk financieel advies, boekhouding, jaarrekeningen en fiscale diensten voor ondernemers en particulieren. Persoonlijk, betrouwbaar en ervaren.",
  keywords: [
    "financieel advies",
    "boekhouding",
    "jaarrekening",
    "belastingaangifte",
    "advies over cijfers",
    "ondernemers",
    "particulieren",
    "maatwerk dienstverlening",
    "accountancy",
    "training excel",
    "liquiditeitsprognose",
    "P&C-cyclus"
  ],
  openGraph: {
    title: "Advies Over Cijfers | Financieel advies & boekhouding",
    description: "Advies Over Cijfers biedt maatwerk financieel advies, boekhouding, jaarrekeningen en fiscale diensten voor ondernemers en particulieren.",
    url: "https://www.adviesovercijfers.nl/",
    siteName: "Advies Over Cijfers",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Advies Over Cijfers hero image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advies Over Cijfers | Financieel advies & boekhouding",
    description: "Advies Over Cijfers biedt maatwerk financieel advies, boekhouding, jaarrekeningen en fiscale diensten voor ondernemers en particulieren.",
    images: ["/hero.png"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [{ name: "Advies Over Cijfers" }],
  creator: "Advies Over Cijfers",
  publisher: "Advies Over Cijfers"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-textDark min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
