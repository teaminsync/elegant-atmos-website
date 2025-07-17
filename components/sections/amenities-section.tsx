import { Users, Trophy, Sun, Recycle, Home } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">Comprehensive Amenities</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            Elegant Atmos offers a curated selection of 54 amenities designed to enhance every aspect of your luxury
            living experience.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Users className="h-7 w-7 text-warm-gold" /> General Amenities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-elegant-charcoal text-base">
                <li>Grand Entrance Boulevard</li>
                <li>Tranquil Pavilion</li>
                <li>Visitor Car Parking</li>
                <li>Security Cabins</li>
                <li>Aroma Haven Gardens</li>
                <li>The Prestige Gallery</li>
                <li>Celestial Amphitheatre</li>
                <li>Serenity Court for Senior Citizens</li>
                <li>Enchanted Swing Park</li>
                <li>Regal Chess Arena</li>
                <li>Velocity Digital Screen</li>
                <li>Champions’ Box Cricket Arena</li>
                <li>The Grand Volleyball</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Trophy className="h-7 w-7 text-warm-gold" /> Sports & Recreation Facilities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-elegant-charcoal text-base">
                <li>Tree Park</li>
                <li>Elite Futsal Turf</li>
                <li>Vitality Jogging Trail</li>
                <li>Summit Wall Climb</li>
                <li>Golden Dunes Play Zone</li>
                <li>Opulent Waiting Lounge</li>
                <li>Basketball</li>
                <li>Badminton Court</li>
                <li>Skating Rink</li>
                <li>Children’s Play Area</li>
                <li>Pet Park & pet-friendly amenities</li>
                <li>Reflexology</li>
                <li>Walking / Jogging Track</li>
                <li>Multipurpose Court</li>
                <li>Swimming Pool / Pool Deck</li>
                <li>Outdoor Gym</li>
                <li>Yoga Lawn</li>
                <li>Volleyball Court</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Sun className="h-7 w-7 text-warm-gold" /> Terrace Amenities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-elegant-charcoal text-base">
                <li>Sky Library</li>
                <li>Infinity View Deck</li>
                <li>Star Gazing</li>
                <li>Serenity Lounge</li>
                <li>Elevate Fitness Club</li>
                <li>Yoga Zone</li>
                <li>Sky Work Hub</li>
                <li>Barbeque Area</li>
                <li>Family Celebration Area</li>
                <li>Terrace Garden</li>
                <li>Screening Area</li>
                <li>Sculpture Areas</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Recycle className="h-7 w-7 text-warm-gold" /> Sustainable Amenities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-elegant-charcoal text-base">
                <li>EV Charging Station</li>
                <li>Solar Panels</li>
                <li>STP</li>
                <li>Differently abled-friendly washrooms</li>
                <li>Organic waste converter</li>
                <li>Landfills</li>
                <li>Water Drain</li>
                <li>Bicycle facility</li>
                <li>Ponds</li>
                <li>Water Meter</li>
                <li>Grass Pavers</li>
                <li>Efficient Irrigation System</li>
                <li>AQI Monitoring</li>
                <li>Integrated Energy Monitoring System</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Home className="h-7 w-7 text-warm-gold" /> Oxy Club House Amenities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-elegant-charcoal text-base">
                <li>Grand Party Hall</li>
                <li>World-class Fitness Centre</li>
                <li>Lounge Area and Café</li>
                <li>Swimming Pool for Adults & Kids</li>
                <li>Pool deck view</li>
                <li>Landscaped Gardens</li>
                <li>Meeting space</li>
                <li>Social spaces</li>
                <li>Spa</li>
                <li>Snooker</li>
                <li>Board Games</li>
                <li>Indoor Games</li>
                <li>Waiting Lounge</li>
                <li>Yoga and Meditation area</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
