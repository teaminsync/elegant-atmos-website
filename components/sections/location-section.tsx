import Image from "next/image"
import { School, GraduationCap, Factory, ShoppingBag, Trophy } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <FadeInSection>
          {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
          <Image
            src="/placeholder.svg?text=Landscaping+-+Vertical+Gardens+and+Jogging+Trails"
            alt="Lush green landscaping with vertical gardens and jogging trails"
            width={900}
            height={700}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </FadeInSection>
        <FadeInSection className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green leading-tight">
            Prime Location. Unmatched Connectivity.
          </h2>
          <p className="text-xl text-elegant-charcoal leading-relaxed">
            Elegant Atmos enjoys the advantage of being perfectly located in Yelahanka, North Bengaluru — offering
            seamless access to key business hubs, educational institutions, shopping destinations, and sports
            infrastructure. With its strategic location adjacent to the lush GKVK campus, it combines the tranquility of
            green living with urban convenience and high appreciation potential.
          </p>
          <h3 className="text-3xl font-heading text-deep-forest-green">Strategic Highlights:</h3>
          <ul className="list-disc list-inside space-y-3 text-elegant-charcoal text-lg">
            <li>
              Set against the tranquil backdrop of GKVK College — the green lungs of Yelahanka, surrounded by over
              100,000 trees.
            </li>
            <li>
              Every detail is designed to elevate your experience — from natural materials to zero-waste practices.
            </li>
            <li>Proximity to Manyata Tech Park and other employment hubs.</li>
            <li>Well-connected to upcoming infrastructure and arterial roads of North Bangalore.</li>
          </ul>
          <h3 className="text-3xl font-heading text-deep-forest-green mt-10">Nearby Landmarks:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <School className="h-6 w-6 text-warm-gold" /> Schools
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Mallya Aditi International School</li>
                <li>Cambridge Public School</li>
                <li>Trio World School</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <GraduationCap className="h-6 w-6 text-warm-gold" /> Colleges
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>BMS Institute of Technology and Management</li>
                <li>Nitte Meenakshi Institute of Technology</li>
                <li>Manipal Academy of Higher Education</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <Factory className="h-6 w-6 text-warm-gold" /> IT Parks
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Manyata Tech Park</li>
                <li>L&T Technology Park</li>
                <li>Satra Horizon (Amazon Headquarters)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <ShoppingBag className="h-6 w-6 text-warm-gold" /> Shopping Malls
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Phoenix Mall of Asia</li>
                <li>The Galleria Mall</li>
                <li>Esteem Mall</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <Trophy className="h-6 w-6 text-warm-gold" /> Sports & Recreation
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Padukone–Dravid Centre of Sports Excellence</li>
                <li>First Steps – Horse Riding School</li>
                <li>Tee Golf Academy</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
