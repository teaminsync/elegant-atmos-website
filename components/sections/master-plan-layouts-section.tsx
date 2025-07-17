import Image from "next/image"
import { LayoutGrid, Ruler } from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function MasterPlanLayoutsSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">Master Plan & Unit Layouts</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            Explore the thoughtful design and spacious layouts that define Elegant Atmos.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <LayoutGrid className="h-8 w-8 text-warm-gold" /> Master Plan
              </h3>
              {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
              <Image
                src="/placeholder.svg?text=Master+Plan+Layout"
                alt="Elegant Atmos Master Plan: Ground-level layout"
                width={800}
                height={600}
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
              <p className="mt-6 text-lg text-elegant-charcoal">
                Ground-level layout showcasing block positioning, amenity zoning, driveway routes, and landscaped
                buffers.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-3xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Ruler className="h-8 w-8 text-warm-gold" /> Unit Layouts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
                  <Image
                    src="/placeholder.svg?text=3+BHK+Layout"
                    alt="3 BHK Layout"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md object-cover w-full h-auto aspect-[1/1]"
                  />
                  <p className="mt-3 text-base text-elegant-charcoal text-center">3 BHK Layout</p>
                </div>
                <div>
                  {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP image */}
                  <Image
                    src="/placeholder.svg?text=3.5+BHK+Layout"
                    alt="3.5 BHK Layout"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md object-cover w-full h-auto aspect-[1/1]"
                  />
                  <p className="mt-3 text-base text-elegant-charcoal text-center">3.5 BHK Layout</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
