import Link from "next/link"
import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-deep-forest-green text-classic-white py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3 font-heading text-2xl">
          <Mountain className="h-8 w-8 text-warm-gold" />
          Elegant Atmos
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base font-medium">
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
        <p className="text-base text-classic-white/80">
          &copy; {new Date().getFullYear()} Elegant Atmos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
