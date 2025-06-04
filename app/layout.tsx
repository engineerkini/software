import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import LoadingBar from "./components/LoadingBar";
import { Suspense } from "react";
import Script from "next/script";

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
  title: "Software Site",
  description: "We offer the support and guidance to help you thrive!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1F98T9CZTH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1F98T9CZTH');
          `}
        </Script>
      </head>

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
