import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FivePositivesSection } from "@/components/sections/five-positives-section"
import { GreenerTomorrowSection } from "@/components/sections/greener-tomorrow-section"
import { LocationSection } from "@/components/sections/location-section"
import { DeveloperProfileSection } from "@/components/sections/developer-profile-section"
import { AmenitiesSection } from "@/components/sections/amenities-section"
import { MasterPlanLayoutsSection } from "@/components/sections/master-plan-layouts-section"
import { SpecificationsSection } from "@/components/sections/specifications-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function ElegantAtmosMicrosite() {
  return (
    <div className="min-h-screen bg-cream-ivory text-elegant-charcoal font-body">
      <Header />
      <main className="">
        {" "}
        {/* Removed pt-20 here */}
        <HeroSection />
        <FivePositivesSection />
        <GreenerTomorrowSection />
        <LocationSection />
        <DeveloperProfileSection />
        <AmenitiesSection />
        <MasterPlanLayoutsSection />
        <SpecificationsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
