import Image from "next/image"
import { Building2, Award, CalendarDays } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function DeveloperProfileSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <FadeInSection className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green leading-tight">Developer Profile</h2>
          <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3">
            <Building2 className="h-8 w-8 text-warm-gold" /> About Elegant Builders & Developers
          </h3>
          <p className="text-xl text-elegant-charcoal leading-relaxed">
            Established in 2004, Elegant Builders & Developers has earned a reputation for crafting spaces that blend
            reliability with elegance. Driven by a passion for sustainability, they design eco-friendly, thoughtfully
            crafted homes and commercial spaces, always using natural resources wisely.
          </p>
          <p className="text-xl text-elegant-charcoal leading-relaxed">
            Their vision is to set the standard for quality, innovation, and timely delivery — transforming each project
            into a testament to their commitment to excellence. With unwavering ethics and transparency, they build
            trust and enduring relationships. Elegant is ISO 9001:2024 certified, ensuring projects reflect precision
            and integrity at every level.
          </p>
          <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mt-10">
            <Award className="h-8 w-8 text-warm-gold" /> Awards & Recognitions
          </h3>
          <p className="text-xl text-elegant-charcoal leading-relaxed">
            Celebrated for unmatched innovation, transformative designs, unparalleled customer satisfaction, and strong
            ethics — Elegant Builders & Developers have earned numerous industry accolades, including:
          </p>
          <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-lg">
            <li>Global Real Estate Brand Awards 2024 (GREBA) – "Most Admired Luxury" (for Elegant Terraces)</li>
            <li>16th Realty+ Conclave Excellence Awards 2024 – Best Residential Project of the Year</li>
            <li>16th Realty+ Conclave Excellence Awards 2024 – Best CXO of the Year</li>
          </ul>
          <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mt-10">
            <CalendarDays className="h-8 w-8 text-warm-gold" /> Key Milestones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-elegant-charcoal text-lg">
            <div>
              <span className="font-semibold">Years of Development:</span> 20+ years
            </div>
            <div>
              <span className="font-semibold">Projects Delivered:</span> 50+ projects
            </div>
            <div>
              <span className="font-semibold">Happy Customers:</span> 16,000+ residents
            </div>
            <div>
              <span className="font-semibold">Total Area Delivered:</span> 3 million sq. ft.
            </div>
            <div>
              <span className="font-semibold">Upcoming Launches (B'luru):</span> 3 million sq. ft.
            </div>
            <div>
              <span className="font-semibold">Amenities Created:</span> 2,540 amenities
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
          <Image
            src="/placeholder.svg?text=Elegant+Group+Office+Building"
            alt="Elegant Group Office Building"
            width={900}
            height={700}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </FadeInSection>
      </div>
    </section>
  )
}
