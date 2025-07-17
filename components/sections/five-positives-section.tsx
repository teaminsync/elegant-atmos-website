import { Droplet, Wind, Zap, Leaf, Heart } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function FivePositivesSection() {
  return (
    <section id="five-positives" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">The Five Positives</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            Elegant Atmos is defined by its commitment to sustainability, rare exclusivity, and quiet luxury, embodied
            in our "Five Positives" philosophy.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Water Positive */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Droplet className="h-10 w-10 text-warm-gold" />
                <h3 className="text-3xl font-heading text-deep-forest-green">Water Positive</h3>
              </div>
              <p className="text-elegant-charcoal mb-6 italic text-lg">
                "Building a better tomorrow, one drop at a time"
              </p>
              <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-base flex-1">
                <li>
                  <span className="font-semibold">Rainwater Harvesting:</span> Comprehensive systems leveraging 970 mm
                  of annual rainfall for groundwater recharge, sustaining local populations for years.
                </li>
                <li>
                  <span className="font-semibold">Smart Water Management:</span> Smart meters and low-flow fixtures
                  reduce water usage by 60%.
                </li>
                <li>
                  <span className="font-semibold">Efficient Irrigation:</span> Drip irrigation and mulch usage for
                  landscaping cut water consumption while maintaining soil health.
                </li>
                <li>
                  <span className="font-semibold">Drainable Pavers:</span> Promotes groundwater recharge and reduces
                  water runoff.
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* Air Positive */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Wind className="h-10 w-10 text-warm-gold" />
                <h3 className="text-3xl font-heading text-deep-forest-green">Air Positive</h3>
              </div>
              <p className="text-elegant-charcoal mb-6 italic text-lg">"Breathing life into every moment"</p>
              <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-base flex-1">
                <li>
                  <span className="font-semibold">Proximity to GKVK Campus:</span> Surrounded by over 100,000 trees and
                  additional planned greenery, ensuring a supply of oxygen for nearby residents.
                </li>
                <li>
                  <span className="font-semibold">Oxygenated Clubhouse:</span> Integration of oxygen-enriching plants
                  and Siemens air purification systems.
                </li>
                <li>
                  <span className="font-semibold">Environmental Benefits:</span> Natural tree canopy improves air
                  quality, reduces dust, and supports healthy living conditions.
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* Electricity Positive */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="h-10 w-10 text-warm-gold" />
                <h3 className="text-3xl font-heading text-deep-forest-green">Electricity Positive</h3>
              </div>
              <p className="text-elegant-charcoal mb-6 italic text-lg">"Empowering a greener future"</p>
              <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-base flex-1">
                <li>
                  <span className="font-semibold">Renewable Energy:</span> Solar panels generating 25 kW of power;
                  Motion sensor lights in common areas to reduce electricity consumption.
                </li>
                <li>
                  <span className="font-semibold">Efficient Appliances:</span> Use of BEE 4-star and 5-star rated motors
                  and high-performance lifts to minimize energy use.
                </li>
                <li>
                  <span className="font-semibold">Smart Power Management:</span> Centralized systems and timers optimize
                  electricity usage across common areas.
                </li>
                <li>
                  <span className="font-semibold">EV Infrastructure:</span> 20% of parking equipped with EV charging
                  points to promote sustainable transportation.
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* Environment Positive */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="h-10 w-10 text-warm-gold" />
                <h3 className="text-3xl font-heading text-deep-forest-green">Environment Positive</h3>
              </div>
              <p className="text-elegant-charcoal mb-6 italic text-lg">"Living in harmony with the earth"</p>
              <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-base flex-1">
                <li>
                  <span className="font-semibold">Sustainability Initiatives:</span> IGBC certification ensures
                  eco-friendly practices, including soil conservation, organic waste management, and heat-reflective
                  paints.
                </li>
                <li>
                  <span className="font-semibold">Green Spaces:</span> 30% of the site is covered with greenery,
                  including terrace gardens and vertical gardens.
                </li>
                <li>
                  <span className="font-semibold">Carbon Healing:</span> EV charging stations, bicycle parking, and
                  locally sourced building materials reduce carbon emissions.
                </li>
                <li>
                  <span className="font-semibold">Zero Waste:</span> Onsite organic waste converter for composting and
                  efficient waste recycling practices.
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* Health Positive */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="h-10 w-10 text-warm-gold" />
                <h3 className="text-3xl font-heading text-deep-forest-green">Health Positive</h3>
              </div>
              <p className="text-elegant-charcoal mb-6 italic text-lg">"A community that cares for all"</p>
              <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-base flex-1">
                <li>
                  <span className="font-semibold">Inclusive Design:</span> Dedicated spaces for seniors, children, and
                  differently-abled residents with wheelchair-friendly ramps, accessible parking and
                  stretcher-compatible lifts.
                </li>
                <li>
                  <span className="font-semibold">Wellness Amenities:</span> Yoga lawns, meditation zones, outdoor gyms
                  and pranayama spaces promote physical and mental health.
                </li>
                <li>
                  <span className="font-semibold">Healthy Living Spaces:</span> Use of low-VOC paints,
                  cross-ventilation, and ample natural light to reduce exposure to harmful substances and ensure fresh
                  air circulation.
                </li>
                <li>
                  <span className="font-semibold">Child-Centric Areas:</span> Safe play zones and activity areas
                  tailored for children.
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
