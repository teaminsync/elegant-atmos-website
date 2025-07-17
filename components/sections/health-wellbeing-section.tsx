import Image from "next/image"
import { Wind, Sun, MessageCircle, Ban } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function HealthWellbeingSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <FadeInSection className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green leading-tight">
            Health and Wellbeing Features
          </h2>
          <p className="text-xl text-elegant-charcoal italic leading-relaxed">
            "Health and wellbeing at the core" - Every element is thoughtfully crafted to enrich your life with the five
            positives: Water, Air, Electricity, Environment, and Health.
          </p>
          <h3 className="text-3xl font-heading text-deep-forest-green mt-10">Detailed Health Features:</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <Wind className="h-6 w-6 text-warm-gold" /> Fresh Air and Maximizing Air Circulation
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Building orientation according to wind alignment of Bangalore.</li>
                <li>All dwelling units can take advantage of the natural ventilation.</li>
                <li>Designed for fresh air to flow through passageways and common area on every floor.</li>
                <li>All units have cross-ventilation for more than 50% of regularly occupied spaces.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <Sun className="h-6 w-6 text-warm-gold" /> Maximum Daylight
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Building design provides 3 open sides for all apartments.</li>
                <li>All units and common areas receive daylight for more than 50% of the area.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <MessageCircle className="h-6 w-6 text-warm-gold" /> Exterior Views
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>All dwelling units have connectivity to the exterior for more than 50% of the area.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-deep-forest-green flex items-center gap-3 mb-3 text-xl">
                <Ban className="h-6 w-6 text-warm-gold" /> Smoking Prohibition
              </h4>
              <ul className="list-disc list-inside ml-6 text-elegant-charcoal text-base">
                <li>Smoking is strictly prohibited within the common areas of campus.</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
          <Image
            src="/placeholder.svg?text=Wellness+Area+with+Natural+Light"
            alt="Wellness Area with natural light and ventilation"
            width={900}
            height={700}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </FadeInSection>
      </div>
    </section>
  )
}
