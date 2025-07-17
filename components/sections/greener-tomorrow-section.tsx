import Image from "next/image"
import { CheckCircle, Factory } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function GreenerTomorrowSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <FadeInSection className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green leading-tight">A Greener Tomorrow</h2>
          <p className="text-xl text-elegant-charcoal leading-relaxed">
            Elegant Atmos sets a new benchmark for sustainable luxury living, integrating advanced eco-friendly
            practices and certifications into its core design.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mb-3">
                <CheckCircle className="h-8 w-8 text-warm-gold" /> IGBC Silver Certification
              </h3>
              <p className="text-lg text-elegant-charcoal leading-relaxed">
                Elegant Atmos has been awarded a Silver rating by the Indian Green Building Council (IGBC), earning
                60–69 points. This reflects the project’s commitment to responsible, sustainable development. Key
                sustainability features include:
              </p>
              <ul className="list-disc list-inside ml-6 mt-4 text-elegant-charcoal text-base">
                <li>Solar water heating</li>
                <li>Rainwater harvesting</li>
                <li>Waste recycling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mb-3">
                <Factory className="h-8 w-8 text-warm-gold" /> Smart Sewage Management
              </h3>
              <p className="text-lg text-elegant-charcoal leading-relaxed">
                With its on-site Sewage Treatment Plant (STP), Elegant Atmos sets a sustainability benchmark aligned
                with Bengaluru’s shift toward decentralized wastewater systems. Treated water is reused for landscaping
                and toilet flushing — easing municipal load, conserving groundwater, and enabling sustainable living in
                a water-stressed city.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
          <Image
            src="/placeholder.svg?text=Rooftops+-+Sky+Work+Hubs+and+Solar+Panels"
            alt="Sustainable Rooftops with Sky work hubs and solar panels"
            width={900}
            height={700}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </FadeInSection>
      </div>
    </section>
  )
}
