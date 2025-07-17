"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"
import Image from "next/image" // Import Image component

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      sectionRef.current = el
      inViewRef(el)
    }
  }

  const sectionHeaderVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const headerItemVariants: Variants = {
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

  const contentContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const contactInfoItemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  const formVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  // New variants for certification images
  const certificationImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="contact" ref={setCombinedRef} className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          className="mb-20"
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6"
            variants={headerItemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed"
            variants={headerItemVariants}
          >
            Connect with us to learn more about Elegant Atmos and experience sustainable luxury living.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 text-left"
          variants={contentContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Form Column (now left) */}
          <motion.div variants={formVariants}>
            <div className="py-8">
              <h3 className="text-3xl font-heading text-deep-forest-green mb-8 text-left">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-warm-charcoal text-lg font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder=""
                    className="bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4 rounded"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-elegant-charcoal text-lg font-medium mb-2">
                      Email (Optional)
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=""
                      className="bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4 rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-elegant-charcoal text-lg font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="+91"
                      className="bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4 rounded"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-elegant-charcoal text-lg font-medium mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={6}
                    className="bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold text-lg p-4 rounded"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-deep-forest-green text-classic-white hover:bg-deep-forest-green/90 py-4 text-xl rounded"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information Column (now right) */}
          <motion.div className="py-8" variants={contactInfoItemVariants}>
            <h3 className="text-3xl font-heading text-deep-forest-green mb-8 text-left">Contact Information</h3>
            <motion.div className="flex items-start gap-5 mb-6" variants={contactInfoItemVariants}>
              <Phone className="h-6 w-6 text-warm-gold mt-1" />
              <div>
                <h3 className="text-2xl font-heading text-deep-forest-green">Phone</h3>
                <p className="text-xl text-elegant-charcoal">+91 96068 65959</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start gap-5 mb-6" variants={contactInfoItemVariants}>
              <Mail className="h-6 w-6 text-warm-gold mt-1" />
              <div>
                <h3 className="text-2xl font-heading text-deep-forest-green">Email</h3>
                <p className="text-xl text-elegant-charcoal">contact@elegantatmos.com</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start gap-5 mb-6" variants={contactInfoItemVariants}>
              <MapPin className="h-6 w-6 text-warm-gold mt-1" />
              <div>
                <h3 className="text-2xl font-heading text-deep-forest-green">Location</h3>
                <p className="text-xl text-elegant-charcoal">Yelahanka, North Bengaluru</p>
              </div>
            </motion.div>
            {/* Google Map Placeholder */}
            <motion.div
              className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-md mt-8"
              variants={contactInfoItemVariants}
            >
              Google Map Placeholder
            </motion.div>
          </motion.div>
        </motion.div>

        {/* NEW: Certifications & Partnerships Section */}
{/* NEW: Certifications & Partnerships Section */}
<motion.div
  className="pt-12 text-classic-white"
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={contentContainerVariants}
>
  <motion.h3
    className="text-3xl font-heading text-deep-forest-green mb-8 text-center"
    variants={headerItemVariants}
  >
    Certifications & Partnerships
  </motion.h3>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4">
    <motion.div variants={certificationImageVariants} className="flex flex-col items-center">
      <Image
        src="/placeholder.svg?text=IGBC"
        alt="IGBC Member"
        width={150}
        height={150}
        className="h-24 w-auto object-contain"
      />
      <p className="mt-2 text-sm text-center text-elegant-charcoal">[IGBC Member]</p>
    </motion.div>
    <motion.div variants={certificationImageVariants} className="flex flex-col items-center">
      <Image
        src="/placeholder.svg?text=CREDAI"
        alt="CREDAI Bengaluru"
        width={200}
        height={100}
        className="h-24 w-auto object-contain"
      />
      <p className="mt-2 text-sm text-center text-elegant-charcoal">[CREDAI Bengaluru]</p>
    </motion.div>
    <motion.div variants={certificationImageVariants} className="flex flex-col items-center">
      <Image
        src="/placeholder.svg?text=NET+ZERO"
        alt="Net Zero India Summit"
        width={200}
        height={100}
        className="h-24 w-auto object-contain"
      />
      <p className="mt-2 text-sm text-center text-elegant-charcoal">[Net Zero India Summit]</p>
    </motion.div>
  </div>
</motion.div>


      </div>
    </section>
  )
}
