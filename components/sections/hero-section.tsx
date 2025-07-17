import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-20 flex items-center justify-center text-classic-white overflow-hidden" // Added pt-20 and changed to min-h-screen
    >
      {/* REPLACE THIS PLACEHOLDER IMAGE with your actual high-resolution WebP hero image */}
      <Image
        src="/images/hero-image.jpg"
        alt="Elegant Atmos Hero - Spacious rooms, open kitchens, luxury bathrooms"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-deep-forest-green/60 z-10" />
      <FadeInSection className="relative z-20 text-center max-w-5xl px-6 space-y-8">
        <h1 className="text-6xl md:text-8xl font-heading leading-tight drop-shadow-lg">Elegant Atmos</h1>
        <p className="text-xl md:text-3xl font-body italic drop-shadow-md">"Live better, every day"</p>
        <p className="text-lg md:text-xl font-body max-w-3xl mx-auto leading-relaxed">
          Luxury, consciously crafted - Welcome to Elegant Atmos, where luxury meets conscious living in the heart of
          Yelahanka, North Bengaluru. Developed by the Elegant Group, this exclusive enclave redefines fine living.
          Corner residences with no common walls and no units facing each other promise rare privacy, while 54 curated
          amenities serve just 136 exclusive homes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <Button
            className="bg-deep-forest-green text-cream-ivory border border-deep-forest-green hover:bg-deep-forest-green/90 px-10 py-4 text-xl rounded"
            asChild
          >
            <Link href="#contact">Explore Homes</Link>
          </Button>
        </div>
      </FadeInSection>
    </section>
  )
}
