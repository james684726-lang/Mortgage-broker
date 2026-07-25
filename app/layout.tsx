import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import StatusBar from "@/components/StatusBar";
export const metadata: Metadata = {
  title: "LendPro - Mortgage & Home Loans",
  description:
    "Get the best mortgage rates and home loan solutions. Compare loan programs, apply online, and get pre-qualified today.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "../img/logo.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#367ACA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-50">
      <body className="antialiased">
        <StatusBar />
        <Navbar />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Footer />
      </body>
    </html>
  );
}
