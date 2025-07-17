import Image from "next/image"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">Image Gallery</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            A visual journey through the architectural integrity and lifestyle refinement of Elegant Atmos.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* REPLACE THESE PLACEHOLDER IMAGES with your actual high-resolution WebP images */}
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+1+-+Spacious+Rooms"
              alt="Spacious rooms (3D Layouts)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Spacious rooms (3D Layouts)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+2+-+Open+Kitchens"
              alt="Open kitchens (3D Layouts)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Open kitchens (3D Layouts)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+3+-+Luxury+Bathrooms"
              alt="Luxury bathrooms (3D Layouts)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Luxury bathrooms (3D Layouts)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+4+-+Sky+Work+Hubs"
              alt="Sky work hubs (Rooftops)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Sky work hubs (Rooftops)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+5+-+Solar+Panels"
              alt="Solar panels (Rooftops)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Solar panels (Rooftops)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+6+-+Vertical+Gardens"
              alt="Vertical gardens (Landscaping)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Vertical gardens (Landscaping)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+7+-+Jogging+Trails"
              alt="Jogging trails (Landscaping)"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Jogging trails (Landscaping)</p>
          </FadeInSection>
          <FadeInSection>
            <Image
              src="/placeholder.svg?text=Gallery+Image+8+-+Master+Plan+Overview"
              alt="Master Plan Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto aspect-[3/2]"
            />
            <p className="mt-3 text-base text-elegant-charcoal text-center">Master Plan Overview</p>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
