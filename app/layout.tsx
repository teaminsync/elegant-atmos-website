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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollRestoration />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
