"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef, useEffect, useState } from "react"

export function DeveloperProfileSection() {
  const mainSectionRef = useRef<HTMLElement>(null)
  const [mainSectionInViewRef, mainSectionInView] = useInView({
    threshold: 0.1, // Lowered threshold for more consistent triggering on mobile
    triggerOnce: true,
  })

  const { scrollYProgress } = useScroll({
    target: mainSectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  const setMainSectionCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      mainSectionRef.current = el
      mainSectionInViewRef(el)
    }
  }

  const milestones = [
    { metric: "Years of real estate development", value: "20+" },
    { metric: "Projects delivered", value: "50+" },
    { metric: "Happy customers", value: "16k" },
    { metric: "Sq ft delivered", value: "3 million" },
    { metric: "Amenities created", value: "2540" },
    { metric: "Sq ft upcoming launches in Bengaluru", value: "3 million" },
  ]

  const milestoneCardVariants: Variants = {
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

  // Refs for milestone divs
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])
  // State to track which milestones are in view
  const [milestoneInViews, setMilestoneInViews] = useState<boolean[]>(new Array(milestones.length).fill(false))

  // IntersectionObservers to set inView states
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    milestoneRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setMilestoneInViews((prev) => {
                if (prev[index]) return prev // already true
                const updated = [...prev]
                updated[index] = true
                return updated
              })
            }
          },
          { threshold: 0.5 },
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Ref callback for milestones
  const handleMilestoneRef = (index: number) => (el: HTMLDivElement | null) => {
    milestoneRefs.current[index] = el
  }

  return (
    <section ref={setMainSectionCombinedRef} className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="text-warm-gold text-base font-bold tracking-wider"
            >
              ABOUT US
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.68rem] lg:text-[3.85rem] font-heading text-deep-forest-green leading-tight"
            >
              Developer Profile
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[1.79rem] font-heading text-deep-forest-green"
            >
              About Elegant Builders & Developers
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-elegant-charcoal leading-relaxed"
            >
              Since 2004, Elegant has built eco-conscious homes and commercial spaces, blending design, reliability, and
              sustainability. With a focus on timely delivery, ethics, and transparency, they’re ISO 9001:2024
              certified.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[1.79rem] font-heading text-deep-forest-green mt-10"
            >
              Awards & Recognitions
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={mainSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 gap-y-3"
            >
              {[
                "GREBA 2024 – “Most Admired Luxury” (Elegant Terraces)",
                "Realty+ 2024 – Best Residential Project",
                "Realty+ 2024 – Best CXO",
              ].map((award, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-gold mt-2 rounded-full flex-shrink-0" />
                  <span className="text-elegant-charcoal font-medium">{award}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div style={{ y, opacity }} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/placeholder.svg?text=Elegant+Group+Office+Building"
                alt="Elegant Group Office Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-deep-forest-green/20" />
            </motion.div>
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={mainSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mb-8"
          >
            Key Milestones
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                ref={handleMilestoneRef(index)}
                className="bg-classic-white p-6 text-center rounded-none shadow-sm border-b-4 border-warm-gold"
                initial="hidden"
                animate={milestoneInViews[index] ? "visible" : "hidden"}
                variants={milestoneCardVariants}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <motion.h3
                  className="text-5xl font-heading text-warm-gold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {item.value}
                </motion.h3>
                <p className="text-lg font-body text-deep-forest-green">{item.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
