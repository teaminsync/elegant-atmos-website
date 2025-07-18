"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function GreenerTomorrowSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, // Changed to true for one-time animation
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  const setCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      containerRef.current = el
      inViewRef(el)
    }
  }

  const features = [
    "IGBC Silver Certified (60-69 points)",
    "Solar water heating",
    "Rainwater harvesting",
    "Waste recycling",
    "On-site Sewage Treatment Plant (STP)",
    "Treated water reused for landscaping & flushing",
    "Conserves groundwater",
  ]

  return (
    <section ref={setCombinedRef} className="py-24 md:py-24">
      {" "}
      {/* Reduced py-24 md:py-40 to py-16 md:py-24 */}
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text Content - lg:col-span-5 */}
          <div className="lg:col-span-5 space-y-6">
            {" "}
            {/* Reverted space-y from 4 to 6 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="text-warm-gold text-base font-medium tracking-wider font-bold" // Added font-bold
            >
              PROJECT HIGHLIGHTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.21rem] lg:text-[3.17rem] font-heading text-deep-forest-green leading-tight"
            >
              A Greener Tomorrow
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-elegant-charcoal leading-relaxed"
            >
              Elegant Atmos sets a new benchmark for sustainable luxury living, integrating advanced eco-friendly
              practices and certifications into its core design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-gold mt-2 rounded-full flex-shrink-0" />
                  <span className="text-elegant-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Content - lg:col-span-7 */}
          <div className="lg:col-span-7">
            <motion.div style={{ y, opacity }} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/placeholder.svg?text=Rooftops+-+Sky+Work+Hubs+and+Solar+Panels"
                alt="Sustainable Rooftops with Sky work hubs and solar panels"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-deep-forest-green/20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
