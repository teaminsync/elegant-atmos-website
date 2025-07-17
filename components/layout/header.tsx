"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react" // Import X icon for close button
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Effect to prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = "" // Clean up on unmount
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#five-positives", label: "Positives" },
    { href: "#location", label: "Location" },
    { href: "#amenities", label: "Amenities" },
    { href: "#specifications", label: "Specifications" },
    { href: "#gallery", label: "Gallery" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 lg:px-8 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-cream-ivory/90 backdrop-blur-sm shadow-md" // Replaced border with shadow-md
            : "bg-transparent border-b-transparent pt-2",
        )}
      >
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/images/elegant-atmos-logo.png"
            alt="Elegant Atmos Logo"
            width={180}
            height={101}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-warm-gold transition-colors duration-300",
                scrolled ? "text-deep-forest-green" : "text-cream-ivory",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          className={cn(
            "hidden md:inline-flex px-8 py-4 text-lg rounded transition-colors duration-300", // Preserving 'rounded' as per your request
            scrolled
              ? "bg-deep-forest-green text-classic-white border border-deep-forest-green hover:bg-deep-forest-green/90"
              : "bg-warm-gold text-deep-forest-green border border-warm-gold hover:bg-warm-gold/90",
          )}
          asChild
        >
          <Link href="#contact">Enquire Now</Link>
        </Button>
        {/* Hamburger/Close Button for Mobile */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden transition-colors duration-300", // Added transition for color
            scrolled ? "text-deep-forest-green" : "text-cream-ivory", // Conditional color
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
          {/* Increased icon size to h-10 w-10 */}
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-50 bg-cream-ivory/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden", // Added /90 transparency and backdrop-blur-sm
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Logo and Close Button in Mobile Menu Header */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/images/elegant-atmos-logo.png"
              alt="Elegant Atmos Logo"
              width={180}
              height={101}
              className="h-14 w-auto" // Slightly smaller for mobile menu
              priority
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <X className="h-10 w-10 text-deep-forest-green" /> {/* Increased icon size to h-10 w-10 */}
          </Button>
        </div>

        <nav className="flex flex-col gap-6 text-2xl font-heading text-deep-forest-green items-center">
          {" "}
          {/* Removed mt-20 */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              className="hover:text-warm-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          className="px-10 py-5 text-xl rounded shadow-lg bg-deep-forest-green text-classic-white border border-deep-forest-green hover:bg-deep-forest-green/90 transition-colors" // Increased padding and text size
          asChild
        >
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Enquire Now
          </Link>
        </Button>
      </div>
    </>
  )
}
