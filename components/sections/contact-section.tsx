"use client"

import type React from "react"

import { MapPin, Phone, Mail, Loader2 } from "lucide-react" // Import Loader2
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef, useState } from "react" // Import useState
import Image from "next/image" // Import Image component
import { toast } from "@/hooks/use-toast" // Import toast

// Define types for form data and errors
interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

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

  // Form state and handlers
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (result.success) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for contacting Elegant Atmos. We'll get back to you soon!",
          variant: "default", // Changed from "success" to "default"
          duration: 4000,
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        toast({
          title: "Something went wrong",
          description: result.message || "Please try again or contact us directly.",
          variant: "destructive",
          duration: 4000,
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "Unable to submit form. Please check your internet connection.",
        variant: "destructive",
        duration: 4000,
      })
    } finally {
      setIsSubmitting(false)
    }
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-warm-charcoal text-lg font-medium mb-2">
                    Name <span className="text-elegant-charcoal">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className={`bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4 rounded ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-elegant-charcoal text-lg font-medium mb-2">
                      Email (Optional)
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                      className={`bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4 rounded ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-elegant-charcoal text-lg font-medium mb-2">
                      Phone <span className="text-elegant-charcoal">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className={`bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4 rounded ${errors.phone ? "border-red-500" : ""}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-elegant-charcoal text-lg font-medium mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={6}
                    className="bg-white border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold text-lg p-4 rounded"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-deep-forest-green text-classic-white hover:bg-deep-forest-green/90 py-4 text-xl rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
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
