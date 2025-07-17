"use client"

import Link from "next/link"
import { Mountain, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-ivory/90 backdrop-blur-sm px-4 lg:px-8 h-20 flex items-center justify-between border-b border-soft-sand-grey">
      <Link href="#" className="flex items-center gap-2 font-heading text-2xl text-deep-forest-green">
        <Mountain className="h-8 w-8 text-warm-gold" />
        Elegant Atmos
      </Link>
      <nav className="hidden md:flex gap-8 text-base font-medium">
        <Link href="#hero" className="hover:text-warm-gold transition-colors">
          Home
        </Link>
        <Link href="#five-positives" className="hover:text-warm-gold transition-colors">
          The Five Positives
        </Link>
        <Link href="#location" className="hover:text-warm-gold transition-colors">
          Location
        </Link>
        <Link href="#amenities" className="hover:text-warm-gold transition-colors">
          Amenities
        </Link>
        <Link href="#gallery" className="hover:text-warm-gold transition-colors">
          Gallery
        </Link>
        <Link href="#contact" className="hover:text-warm-gold transition-colors">
          Contact
        </Link>
      </nav>
      <Button
        variant="outline"
        className="hidden md:inline-flex border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-classic-white bg-transparent text-base px-6 py-3"
        asChild
      >
        <Link href="#contact">Enquire Now</Link>
      </Button>
      {/* Mobile Menu Toggle - Placeholder for now, can be expanded with a Sheet/Dialog */}
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-7 w-7" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
  )
}
