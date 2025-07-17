"use client"

import Image from "next/image"
import { FadeInSection } from "@/components/utils/fade-in-section"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

export function GallerySection() {
  const galleryImages = [
    { src: "/placeholder.svg?text=Yoga+lawn", alt: "Yoga lawn", description: "Yoga lawn" },
    { src: "/placeholder.svg?text=Badminton+court", alt: "Badminton court", description: "Badminton court" },
    { src: "/placeholder.svg?text=Screening+area", alt: "Screening area", description: "Screening area" },
    { src: "/placeholder.svg?text=Volleyball+court", alt: "Volleyball court", description: "Volleyball court" },
    { src: "/placeholder.svg?text=Sky+work+hub", alt: "Sky work hub", description: "Sky work hub" },
    {
      src: "/placeholder.svg?text=EV+charging+station",
      alt: "EV charging station",
      description: "EV charging station",
    },
    { src: "/placeholder.svg?text=Multipurpose+court", alt: "Multipurpose court", description: "Multipurpose court" },
    { src: "/placeholder.svg?text=Swimming+pool", alt: "Swimming pool", description: "Swimming pool" },
    { src: "/placeholder.svg?text=Pet+park", alt: "Pet park", description: "Pet park" },
    { src: "/placeholder.svg?text=Outdoor+party+area", alt: "Outdoor party area", description: "Outdoor party area" },
    { src: "/placeholder.svg?text=Serenity+lounge", alt: "Serenity lounge", description: "Serenity lounge" },
    { src: "/placeholder.svg?text=Sky+library", alt: "Sky library", description: "Sky library" },
    { src: "/placeholder.svg?text=Club+house", alt: "Club house", description: "Club house" },
    { src: "/placeholder.svg?text=Reflexology+path", alt: "Reflexology path", description: "Reflexology path" },
    { src: "/placeholder.svg?text=Indoor+gym", alt: "Indoor gym", description: "Indoor gym" },
    {
      src: "/placeholder.svg?text=Children's+play+area",
      alt: "Children's play area",
      description: "Children's play area",
    },
    { src: "/placeholder.svg?text=Cafe", alt: "Cafe", description: "Cafe" },
    { src: "/placeholder.svg?text=Box+cricket+arena", alt: "Box cricket arena", description: "Box cricket arena" },
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const [inViewRef, inView] = useInView({
    threshold: 0.01, 
    triggerOnce: true, // Only animate once when it enters the viewport
  })

  const setCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      sectionRef.current = el
      inViewRef(el)
    }
  }

  // Variants for the staggered animation of gallery items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger the animation of children
        delayChildren: 0.2, // Delay the start of children animations
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="gallery" ref={setCombinedRef} className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">Image Gallery</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            A visual journey through Elegant Atmos’s architecture and refined living.
          </p>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
              />
             <p className="mt-3 text-lg text-elegant-charcoal text-center">{image.description}</p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
