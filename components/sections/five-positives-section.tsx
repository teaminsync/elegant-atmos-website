"use client"

import { Droplet, Wind, Zap, Leaf, Heart } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FadeInSection } from "@/components/utils/fade-in-section"
import React, { useRef, createRef } from "react" // 👈 Add this if not already present

export function FivePositivesSection() {
  const positivesData = [
    {
      id: "water-positive",
      title: "Water Positive",
      subtitle: "Building a better tomorrow, one drop at a time",
      features: [
        "Rainwater Harvesting",
        "Smart Water Management",
        "Efficient Irrigation",
        "Drainable Pavers",
      ],
      cta: "Discover Water Solutions",
      icon: Droplet,
      imageSrc: "/placeholder.svg?height=800&width=1200&text=Water+Positive+Image",
      imageAlt: "Rainwater harvesting system and lush green landscape",
    },
    {
      id: "air-positive",
      title: "Air Positive",
      subtitle: "Breathing life into every moment",
      features: [
        "Proximity to GKVK Campus",
        "Oxygenated Clubhouse",
        "Siemens Air Purification",
        "Natural Tree Canopy Benefits",
      ],
      cta: "Explore Air Quality",
      icon: Wind,
      imageSrc: "/placeholder.svg?height=800&width=1200&text=Air+Positive+Image",
      imageAlt: "Clean air with lush trees and clear sky",
    },
    {
      id: "electricity-positive",
      title: "Electricity Positive",
      subtitle: "Empowering a greener future",
      features: [
        "25 kW Solar Power Generation",
        "Motion Sensor Lighting",
        "BEE 4/5-Star Rated Appliances",
        "20% EV Charging Infrastructure",
      ],
      cta: "Learn About Energy",
      icon: Zap,
      imageSrc: "/placeholder.svg?height=800&width=1200&text=Electricity+Positive+Image",
      imageAlt: "Solar panels on a rooftop generating clean energy",
    },
    {
      id: "environment-positive",
      title: "Environment Positive",
      subtitle: "Living in harmony with the earth",
      features: [
        "IGBC Silver Certified",
        "30% Green Site Coverage",
        "Carbon Emission Reduction",
        "Onsite Organic Waste Converter",
      ],
      cta: "Discover Eco-Living",
      icon: Leaf,
      imageSrc: "/placeholder.svg?height=800&width=1200&text=Environment+Positive+Image",
      imageAlt: "Lush green environment with sustainable practices",
    },
    {
      id: "health-positive",
      subtitle: "A community that cares for all",
      title: "Health Positive",
      features: [
        "Inclusive Design",
        "Yoga Lawns & Meditation Zones",
        "Low-VOC & Ventilation",
        "Safe Child Play Areas",
      ],
      cta: "Promote Wellbeing",
      icon: Heart,
      imageSrc: "/placeholder.svg?height=800&width=1200&text=Health+Positive+Image",
      imageAlt: "People engaging in wellness activities in a green space",
    },
  ]

  const refs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])

  if (refs.current.length !== positivesData.length) {
    refs.current = positivesData.map(() => createRef<HTMLDivElement>())
  }

  const inViewStates = positivesData.map(() =>
    useInView({
      threshold: 0.3,
      triggerOnce: true,
    }),
  )

  return (
    <section id="five-positives" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">
            The Five Positives
          </h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            Elegant Atmos blends sustainability, exclusivity, and quiet luxury in its "Five Positives."
          </p>
        </FadeInSection>

        <div className="space-y-16 md:space-y-24">
          {positivesData.map((content, index) => {
            const isImageLeft = index % 2 === 0
            const sectionRef = refs.current[index]
            const [inViewRef, inView] = inViewStates[index]

            const { scrollYProgress } = useScroll({
              target: sectionRef,
              offset: ["start end", "end start"],
            })

            const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05])
            const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

            const setCombinedRef = (el: HTMLDivElement | null) => {
              if (el) {
                refs.current[index].current = el
                inViewRef(el)
              }
            }

            return (
              <div key={content.id} ref={setCombinedRef} className="flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
                  {/* Text Content */}
                  <div
                    className={`
                      ${isImageLeft ? "lg:order-2" : "lg:order-1"}
                      bg-warm-gold text-classic-white p-8 lg:pt-16 flex items-center relative
                    `}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.05 }}
                      className="absolute -top-2 left-4 bg-deep-forest-green text-cream-ivory px-4 py-2 text-lg font-heading z-10"
                    >
                      {`0${index + 1}`}
                    </motion.div>

                    <div className="max-w-xl">
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-heading mb-2 mt-4 lg:mt-0 text-cream-ivory"
                      >
                        {content.title}
                      </motion.h2>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base lg:text-lg italic mb-12 lg:mb-16 text-cream-ivory"
                      >
                        {`"${content.subtitle}"`}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
                      >
                        {content.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-deep-forest-green rounded-full flex-shrink-0 mt-2" />
                            <span className="text-cream-ivory">{feature}</span>
                          </div>

                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Content */}
                  <motion.div
                    style={{ scale, opacity }}
                    className={`
                      ${isImageLeft ? "lg:order-1" : "lg:order-2"}
                      relative min-h-[50vh] md:min-h-[60vh] lg:min-h-full
                    `}
                    ref={inViewRef}
                  >
                    <Image
                      src={content.imageSrc || "/placeholder.svg"}
                      alt={content.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
