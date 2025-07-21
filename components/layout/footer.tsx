"use client"

import { motion } from "framer-motion"
import { ArrowUp, Linkedin, Instagram, X } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "The Five Positives", href: "#five-positives" },
    { name: "Location", href: "#location" },
    { name: "Amenities", href: "#amenities" },
    { name: "Specifications", href: "#specifications" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#", // Placeholder
      icon: Linkedin,
      color: "hover:text-warm-gold",
    },
    {
      name: "Instagram",
      href: "#", // Placeholder
      icon: Instagram,
      color: "hover:text-warm-gold",
    },
    {
      name: "X", // For Twitter/X
      href: "#", // Placeholder
      icon: X,
      color: "hover:text-warm-gold",
    },
  ]

  return (
    <footer
      className="relative bg-deep-forest-green text-classic-white"
      style={{
        borderTopLeftRadius: "60px 24px",
        borderTopRightRadius: "60px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 mx-2"
          >
            <motion.div className="flex items-center gap-3 font-heading text-3xl mb-4">
              <Image
                src="/images/elegant-atmos-logo.png"
                alt="Elegant Atmos Logo"
                width={114} // Optimized width
                height={64} // Optimized height
                className="h-16 w-auto"
                priority
              />
            </motion.div>
            <p className="text-soft-sand-grey text-base leading-relaxed max-w-md font-body">
              Elegant Atmos offers luxury, consciously crafted living in Yelahanka, North Bengaluru with 136 exclusive
              homes, no common walls, rare privacy, and 54 curated amenities.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-classic-white/5 rounded-xl border border-classic-white/10 transition-all duration-300 ${social.color} hover:border-classic-white/20`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading text-warm-gold mb-6 ml-2">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-soft-sand-grey hover:text-classic-white transition-colors duration-300 flex items-center gap-2 group font-body"
                  >
                    <span className="w-0 h-px bg-warm-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading text-warm-gold mb-6 ml-2">Get in Touch</h3>
            <div className="space-y-4 text-soft-sand-grey ml-2 font-body">
              <motion.a
                href="mailto:contact@elegantatmos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-classic-white transition-colors duration-300"
              >
                Email: contact@elegantatmos.com
              </motion.a>
              <motion.a
                href="tel:+919606865959"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-classic-white transition-colors duration-300"
              >
                Phone: +91 96068 65959
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-classic-white transition-colors duration-300"
              >
                Yelahanka, North Bengaluru
              </motion.a>
            </div>
          </motion.div>
        </div>
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-classic-white/10"
        >
          <p className="text-soft-sand-grey text-sm font-body">
            © {new Date().getFullYear()} Elegant Atmos. All rights reserved.
          </p>
          <p className="text-soft-sand-grey text-xs font-body mt-1">
            Designed & Developed by{" "}
            <a
              href="https://www.instagram.com/insync.solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-gold hover:text-classic-white transition-colors font-medium"
            >
              InSync Solutions
            </a>
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 p-3 bg-warm-gold rounded-full text-deep-forest-green transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
