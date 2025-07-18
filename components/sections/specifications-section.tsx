"use client"

import {
  Building2,
  DoorOpen,
  Wind,
  Paintbrush,
  Plug,
  FireExtinguisher,
  Table,
  Users,
  BathIcon,
  Fence,
  LampCeilingIcon,
  CookingPotIcon,
  SquareIcon as SquareWindow,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

export function SpecificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inViewRef, inView] = useInView({
    threshold: 0.01, 
    triggerOnce: true, 
  })

  const setCombinedRef = (el: HTMLElement | null) => {
    if (el) {
      sectionRef.current = el
      inViewRef(el)
    }
  }

  const specificationCategories = [
    {
      title: "Structure",
      icon: Building2,
      items: ["RCC framed structure (seismic zone 2)", "Vitrified tiles (AGL or equivalent)", "Ceramic tiles"],
    },
    {
      title: "Toilets",
      icon: BathIcon,
      items: [
        "Wall-mounted EWC (Grohe or equivalent)",
        "Geyser point provision with piping and wiring",
        "CP fittings (reputed make)",
        "Hot & cold mixer for washbasin",
        "Hot & cold shower with concealed diverter",
        "Health faucet in all toilets",
        "Toilet paper holder in all toilets",
      ],
    },
    {
      title: "Doors",
      icon: DoorOpen,
      items: ["Pre-hung door with shutter (Sumai)", "PVC door"],
    },
    {
      title: "Painting",
      icon: Paintbrush,
      items: [
        "Emulsion for walls, distemper for ceiling",
        "Exterior texture paint",
        "Enamel paint",
        "Whitewash for ceilings/columns",
        "Distemper",
      ],
    },
    {
      title: "Electrical",
      icon: Plug,
      items: [
        "1 kW/unit (light, fan, 5A sockets)",
        "Common areas: lifts, pump, lighting",
        "Modular switches (Schneider or equivalent)",
        "Power point provisions",
        "Wiring & outlets (excludes main cable)",
        "Exhaust fan provision (toilets & kitchen)",
        "Water purifier, washing machine & heater provisions",
      ],
    },
    {
      title: "Kitchen",
      icon: CookingPotIcon,
      items: [
        "Granite counter with SS sink (single bowl & drain board)",
        "Hot & cold CP mixer provision (Grohe or equivalent)",
        "Washing machine provision in utility",
      ],
    },
    {
      title: "Fire safety",
      icon: FireExtinguisher,
      items: ["Smoke detector (common areas only)"],
    },
    {
      title: "Flooring - common area",
      icon: Table,
      items: ["Vitrified tiles", "Granite/tiles", "Kota stone/tiles"],
    },
    {
      title: "Windows",
      icon: SquareWindow,
      items: ["PVC windows (Eureka or equivalent)"],
    },
    {
      title: "Railing",
      icon: Fence,
      items: ["MS railing", "Glass railing"],
    },
    {
      title: "Ventilators",
      icon: Wind,
      items: ["PVC ventilators with exhaust fan provision"],
    },
    {
      title: "False ceiling",
      icon: LampCeilingIcon,
      items: ["False ceiling", "Grid ceiling"],
    },
    {
      title: "Wall finishes",
      icon: Paintbrush,
      items: [
        "Walls with emulsion/distemper; lift architrave with granite",
        "Ceramic tiles up to false ceiling height",
        "Ceramic tiles 2' above platform",
      ],
    },
    {
      title: "Common area",
      icon: Users,
      items: ["Smoke detector (all indoor common areas)", "Emergency lights in all common areas"],
    },
  ]

  // Variants for the main section header (title and description)
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

  // Variants for each specification category card
  const categoryCardVariants: Variants = {
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

  // Variants for the title within each category card
  const categoryTitleVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.1, // Slight delay after card appears
      },
    },
  }

  // Base variant for individual list items
  const listItemBaseVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
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

  return (
    <section id="specifications" ref={setCombinedRef} className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Title and Description */}
        <motion.div
          className="text-center mb-20"
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6"
            variants={headerItemVariants}
          >
            Premium Specifications
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed"
            variants={headerItemVariants}
          >
            Every detail at Elegant Atmos is crafted with premium materials for unmatched quality.
          </motion.p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {specificationCategories.map((category, index) => {
            return (
              <motion.div
                key={index}
                className="p-6 inline-block w-full"
                variants={categoryCardVariants} // Use categoryCardVariants for the card itself
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.05 }} // Staggered delay for cards
              >
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-deep-forest-green flex items-center gap-3 mb-6"
                  variants={categoryTitleVariants} // Animate title within card
                >
                  {category.title}
                </motion.h3>

                <ul className="list-disc list-outside ml-2 space-y-2 text-lg sm:text-lg md:text-xl text-elegant-charcoal">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"} // Trigger based on main section inView
                      variants={listItemBaseVariants} // Use the base variant
                      transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        delay: index * 0.05 + itemIndex * 0.03 + 0.3,
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
