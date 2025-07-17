"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const amenitiesData = [
  {
    category: "General Amenities",
    items: [
      { name: "Grand Entrance Boulevard", image: "/images/grand-entrance-boulevard.jpg" },
      { name: "Tranquil Pavilion" },
      { name: "Visitor Car Parking" },
      { name: "Security Cabins" },
      { name: "Aroma Haven Gardens" },
      { name: "The Prestige Gallery" },
      { name: "Celestial Amphitheatre" },
      { name: "Serenity Court for Senior Citizens" },
      { name: "Enchanted Swing Park" },
      { name: "Regal Chess Arena" },
      { name: "Velocity Digital Screen" },
      { name: "Champions’ Box Cricket Arena" },
      { name: "The Grand Volleyball" },
    ],
  },
  {
    category: "Sports & Recreation Facilities",
    items: [
      { name: "Tree Park" },
      { name: "Elite Futsal Turf" },
      { name: "Vitality Jogging Trail" },
      { name: "Summit Wall Climb" },
      { name: "Golden Dunes Play Zone" },
      { name: "Opulent Waiting Lounge" },
      { name: "Basketball" },
      { name: "Badminton Court" },
      { name: "Skating Rink" },
      { name: "Children’s Play Area" },
      { name: "Pet Park & pet-friendly amenities" },
      { name: "Reflexology" },
      { name: "Walking / Jogging Track" },
      { name: "Multipurpose Court" },
      { name: "Swimming Pool / Pool Deck" },
      { name: "Outdoor Gym" },
      { name: "Yoga Lawn" },
      { name: "Volleyball Court" },
    ],
  },
  {
    category: "Terrace Amenities",
    items: [
      { name: "Sky Library" },
      { name: "Infinity View Deck" },
      { name: "Star Gazing" },
      { name: "Serenity Lounge" },
      { name: "Elevate Fitness Club" },
      { name: "Yoga Zone" },
      { name: "Sky Work Hub" },
      { name: "Barbeque Area" },
      { name: "Family Celebration Area" },
      { name: "Terrace Garden" },
      { name: "Screening Area" },
      { name: "Sculpture Areas" },
    ],
  },
  {
    category: "Sustainable Amenities",
    items: [
      { name: "EV Charging Station" },
      { name: "Solar Panels" },
      { name: "STP" },
      { name: "Differently abled-friendly washrooms" },
      { name: "Organic waste converter" },
      { name: "Landfills" },
      { name: "Water Drain" },
      { name: "Bicycle facility" },
      { name: "Ponds" },
      { name: "Water Meter" },
      { name: "Grass Pavers" },
      { name: "Efficient Irrigation System" },
      { name: "AQI Monitoring" },
      { name: "Integrated Energy Monitoring System" },
    ],
  },
  {
    category: "Oxy Club House Amenities",
    items: [
      { name: "Grand Party Hall" },
      {
        name: "World-class Fitness Centre"
      },
      { name: "Lounge Area and Café" },
      { name: "Swimming Pool for Adults & Kids" },
      { name: "Pool deck view" },
      { name: "Landscaped Gardens" },
      { name: "Meeting space" },
      { name: "Social spaces" },
      { name: "Spa" },
      { name: "Snooker" },
      { name: "Board Games" },
      { name: "Indoor Games" },
      { name: "Waiting Lounge" },
      { name: "Yoga and Meditation area" },
    ],
  },
]

export function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-earthy-beige" id="amenities">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-deep-forest-green text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Comprehensive Amenities
        </motion.h2>
        {amenitiesData.map((category, catIndex) => (
          <div key={catIndex} className="mb-16 last:mb-0">
            <motion.h3
              className="text-3xl font-heading text-deep-forest-green mb-8 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  className="flex flex-col items-center text-center p-4 bg-classic-white rounded-none shadow-sm border border-soft-sand-grey"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  {item.image ? (
                    <div className="relative w-full h-24 mb-3 overflow-hidden rounded-none">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        objectFit="cover"
                        className="rounded-none"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-24 mb-3 overflow-hidden rounded-none flex items-center justify-center">
                      <Image
                        src={`/placeholder.svg?text=${encodeURIComponent(item.name)}`}
                        alt={item.name}
                        fill
                        objectFit="cover"
                        className="rounded-none"
                      />
                    </div>
                  )}
                  <p className="text-sm font-body text-elegant-charcoal">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
