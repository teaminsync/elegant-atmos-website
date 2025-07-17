"use client" // This component needs to be a client component to use hooks like useRef, useEffect, useState, useScroll, useTransform, useInView

import Image from "next/image"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

export function MasterPlanLayoutsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inViewRef, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Only animate once when it enters the viewport
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Start animation when target enters, end when target leaves
  })

  // Parallax effect for the main image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]) // Moves image up/down
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]) // Fades in/out slightly

  // Variants for staggered text and detail animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of children
        delayChildren: 0.2, // Delay the start of children animations
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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

  // Combine refs for the main section
  const setCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      sectionRef.current = el
      inViewRef(el)
    }
  }

  return (
    <section ref={setCombinedRef} className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Title and Description */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6" variants={itemVariants}>
            Master Plan & Unit Layouts
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Explore the thoughtful design and spacious layouts that define Elegant Atmos.
          </motion.p>
        </motion.div>

        {/* Project Details Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 className="text-4xl font-heading text-deep-forest-green mb-8 text-center" variants={itemVariants}>
            Project Details
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-elegant-charcoal text-xl">
            {/* Each detail item will animate individually */}
            <motion.div className="text-center" variants={itemVariants}>
              <span className="text-warm-gold font-bold text-3xl block">136</span>
              <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Total units</span>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <span className="text-warm-gold font-bold text-3xl block">G+14</span>
              <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Floors per wing</span>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <span className="text-warm-gold font-bold text-3xl block">68</span>
              <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Units per wing</span>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <span className="text-warm-gold font-bold text-3xl block">5</span>
              <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Units per floor</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Master Plan Section - Full Width, Landscape Image (16:9 aspect ratio) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }} // Delay to animate after text
        >
          <h3 className="text-4xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">Master Plan</h3>
          <motion.div
            style={{ y: imageY, opacity: imageOpacity }}
            className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src="/placeholder.svg?text=Elegant+Atmos+Master+Plan&width=1600&height=900" // Placeholder URL with landscape dimensions
              alt="Elegant Atmos Master Plan: Ground-level layout showcasing block positioning, amenity zoning, driveway routes, and landscaped buffers."
              fill // Use fill to cover the parent div's aspect ratio
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Unit Layouts Section - 3 Rows, 2 Columns */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h3
            className="text-4xl font-heading text-deep-forest-green flex items-center gap-3 mb-6"
            variants={itemVariants}
          >
            Unit Layouts
          </motion.h3>

          {/* First Row: Two Layout Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* 3 BHK Layout */}
            <motion.div variants={itemVariants}>
              <Image
                src="/placeholder.svg?text=3+BHK+Layout"
                alt="3 BHK Layout"
                width={600}
                height={600}
                className="rounded-lg shadow-md object-cover w-full h-auto aspect-[1/1]"
              />
              <p className="mt-3 text-warm-gold font-bold text-3xl text-center">3 BHK Layout</p>
            </motion.div>

            {/* 3.5 BHK Layout */}
            <motion.div variants={itemVariants}>
              <Image
                src="/placeholder.svg?text=3.5+BHK+Layout"
                alt="3.5 BHK Layout"
                width={600}
                height={600}
                className="rounded-lg shadow-md object-cover w-full h-auto aspect-[1/1]"
              />
              <p className="mt-3 text-warm-gold font-bold text-3xl text-center">3.5 BHK Layout</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
