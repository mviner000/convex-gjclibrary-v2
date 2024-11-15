import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Script from 'next/script'
import GJCLeftSideBar from "@/components/gjc/gjcLeftSideBar";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/authProviders";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <Suspense fallback={
          <>
            {/* null muna dito for smooth fidgetspinner loading */}
          </>
        }>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <ConvexClientProvider>
          <div className="relative min-h-screen">
          <NavbarWrapper />
              {children}
          </div>
          <Toaster />
        </ConvexClientProvider>
        </AuthProvider>
      </body>
      </Suspense>
    </html>
  );
}