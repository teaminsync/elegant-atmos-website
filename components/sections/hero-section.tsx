"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion, type Variants } from "framer-motion" // Import 'Variants' type

export function HeroSection() {
  // Define animation variants
  const containerVariants: Variants = {
    // Explicitly type with Variants
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children by 0.2 seconds
        delayChildren: 0.3, // Delay the start of children animations
      },
    },
  }

  const itemVariants: Variants = {
    // Explicitly type with Variants
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-20 flex items-center justify-center text-classic-white overflow-hidden"
    >
      {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP hero image */}
      <Image
        src="/images/hero-image-min.jpg"
        alt="Elegant Atmos Hero - Spacious rooms, open kitchens, luxury bathrooms"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-deep-forest-green/50 z-10" />
      {/* Apply motion.div with container variants */}
      <motion.div
        className="relative z-20 text-center max-w-5xl px-6 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Apply motion.h1 with item variants */}
        <motion.h1
          className="text-4xl md:text-7xl font-heading leading-tight drop-shadow-lg text-warm-gold" // Set to 25px for mobile
          variants={itemVariants}
        >
          Inspired by nature.
          <br />
          Designed for timeless luxury.
        </motion.h1>
        {/* Apply motion.p with item variants */}
        <motion.p
          className="text-base md:text-xl font-body max-w-3xl mx-auto leading-relaxed" // Set to 13px for mobile
          variants={itemVariants}
        >
          Elegant Atmos offers luxury, consciously crafted living in Yelahanka, North Bengaluru with 136 exclusive
          homes, no common walls, rare privacy, and 54 curated amenities.
        </motion.p>
        {/* Apply motion.div with item variants for the button group */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-6 mt-10" variants={itemVariants}>
          <Button
            className="bg-deep-forest-green text-cream-ivory border border-deep-forest-green hover:bg-deep-forest-green/90 px-10 py-4 text-lg rounded max-w-xs mx-auto sm:w-auto" // Set to text-lg for mobile
            asChild
          >
            <Link href="#contact">Explore Homes</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 w-full z-30 flex justify-center text-cream-ivory"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center">
          <ChevronDown className="h-10 w-10" />
          <span className="sr-only">Scroll Down</span>
        </div>
      </motion.div>
    </section>
  )
}
