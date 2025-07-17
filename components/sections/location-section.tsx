"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function LocationSection() {
  // Ref and inView for the main section (image and strategic highlights)
  const mainSectionRef = useRef<HTMLElement>(null)
  const [mainSectionInViewRef, mainSectionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Ref and inView for the Nearby Landmarks sub-section
  const landmarksSectionRef = useRef<HTMLDivElement>(null)
  const [landmarksInViewRef, landmarksInView] = useInView({
    threshold: 0.2, // Adjust threshold as needed for when you want it to trigger
    triggerOnce: true,
  })

  const { scrollYProgress } = useScroll({
    target: mainSectionRef, // Still target the main section for the image parallax
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  // Combine refs for the main section
  const setMainSectionCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      mainSectionRef.current = el
      mainSectionInViewRef(el)
    }
  }

  // Variants for the staggered animation of landmark items
  const landmarkContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly reduced stagger for faster overall reveal
        delayChildren: 0.1, // Slightly reduced delay
      },
    },
  }

  const landmarkItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 }, // Animate from top
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10, // Reduced damping for a quicker stop
        stiffness: 150, // Increased stiffness for faster movement
      },
    },
  }

  return (
    <section id="location" className="py-24 md:py-24 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        {/* First Row: Image and Main Text with Greener Tomorrow style */}
        <div ref={setMainSectionCombinedRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image Content - lg:col-span-7 (left side) */}
          <div className="lg:col-span-7">
            <motion.div style={{ y, opacity }} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
              <Image
                src="/placeholder.svg?text=Landscaping+-+Vertical+Gardens+and+Jogging+Trails"
                alt="Lush green landscaping with vertical gardens and jogging trails"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-deep-forest-green/20" />
            </motion.div>
          </div>

          {/* Text Content - lg:col-span-5 (right side) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="text-warm-gold text-base font-medium tracking-wider font-bold"
            >
              LOCATION HIGHLIGHTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[1.879rem] lg:text-[2.695rem] font-heading text-deep-forest-green leading-tight"
            >
              Prime Location. Unmatched Connectivity.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-elegant-charcoal leading-relaxed"
            >
              Located in Yelahanka, North Bengaluru, Elegant Atmos provides quick access to business hubs, schools,
              shopping, and sports. Bordering the GKVK campus, it offers green tranquility, city convenience, and strong
              investment value.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-heading text-deep-forest-green"
            >
              Strategic Highlights:
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="list-disc list-outside space-y-3 text-elegant-charcoal text-lg ml-4"
            >
              <li>Beside GKVK College — Yelahanka’s green lungs with 100,000+ trees.</li>
              <li>Sustainable living with natural materials and zero-waste systems.</li>
              <li>Close to Manyata Tech Park and key employment zones.</li>
              <li>Linked to new infrastructure and arterial roads of North Bengaluru.</li>
            </motion.ul>
          </div>
        </div>

        {/* New Row: Nearby Landmarks */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading text-deep-forest-green mb-8">Nearby Landmarks:</h3>
          <motion.div
            ref={landmarksInViewRef} // Attach the new ref here
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={landmarkContainerVariants}
            initial="hidden"
            animate={landmarksInView ? "visible" : "hidden"} // Trigger animation based on THIS section's inView
          >
            <motion.div variants={landmarkItemVariants}>
              <div>
                <h4 className="font-bold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">Schools</h4>
                <ul className="list-disc list-outside ml-4 text-elegant-charcoal text-lg">
                  <li>Mallya Aditi International School</li>
                  <li>Cambridge Public School</li>
                  <li>Trio World School</li>
                </ul>
              </div>
            </motion.div>
            <motion.div variants={landmarkItemVariants}>
              <div>
                <h4 className="font-bold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">Colleges</h4>
                <ul className="list-disc list-outside ml-4 text-elegant-charcoal text-lg">
                  <li>BMS Institute of Technology and Management</li>
                  <li>Nitte Meenakshi Institute of Technology</li>
                  <li>Manipal Academy of Higher Education</li>
                </ul>
              </div>
            </motion.div>
            <motion.div variants={landmarkItemVariants}>
              <div>
                <h4 className="font-bold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">IT Parks</h4>
                <ul className="list-disc list-outside ml-4 text-elegant-charcoal text-lg">
                  <li>Manyata Tech Park</li>
                  <li>L&T Technology Park</li>
                  <li>Satra Horizon (Amazon Headquarters)</li>
                </ul>
              </div>
            </motion.div>
            <motion.div variants={landmarkItemVariants}>
              <div>
                <h4 className="font-bold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                  Shopping Malls
                </h4>
                <ul className="list-disc list-outside ml-4 text-elegant-charcoal text-lg">
                  <li>Phoenix Mall of Asia</li>
                  <li>The Galleria Mall</li>
                  <li>Esteem Mall</li>
                </ul>
              </div>
            </motion.div>
            <motion.div variants={landmarkItemVariants}>
              <div>
                <h4 className="font-bold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                  Sports & Recreation
                </h4>
                <ul className="list-disc list-outside ml-4 text-elegant-charcoal text-lg">
                  <li>Padukone–Dravid Centre of Sports Excellence</li>
                  <li>First Steps – Horse Riding School</li>
                  <li>Tee Golf Academy</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
