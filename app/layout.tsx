import type React from "react"
import type { Metadata } from "next"
// Removed Inter font import as custom fonts are now used
import "./globals.css"
import SmoothScroll from "@/components/smooth-scroll"
import ScrollRestoration from "@/components/scroll-restoration"

export const metadata: Metadata = {
  title: "Elegant Atmos - Luxury Living",
  description:
    "Luxury, consciously crafted - Welcome to Elegant Atmos, where luxury meets conscious living in the heart of Yelahanka, North Bengaluru.",
  generator: "InSync Solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload custom fonts for better performance */}
        <link rel="preload" href="/fonts/Butler_Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/times.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <ScrollRestoration />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
