import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import LoadingBar from "./components/LoadingBar";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png", // Path to your icon file
  },
  title: "X PORUSE ROOM",
  description: "We offer the support and guidance to help you thrive!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div> </div>}>
          <LoadingBar />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
