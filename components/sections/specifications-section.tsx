import {
  Building2,
  Compass,
  DoorOpen,
  Wind,
  Paintbrush,
  CookingPotIcon as Kitchen,
  Plug,
  FireExtinguisher,
  Table,
  Users,
  BathIcon as Bathtub,
  Fence,
  LampCeilingIcon as Ceiling,
} from "lucide-react"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function SpecificationsSection() {
  return (
    <section id="specifications" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">Premium Specifications</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-4xl mx-auto leading-relaxed">
            Every detail at Elegant Atmos is meticulously crafted with premium materials and finishes for unparalleled
            quality.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Building Details */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Building2 className="h-7 w-7 text-warm-gold" /> Building Details
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Total Units</td>
                    <td className="py-2">136</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Floors per Wing</td>
                    <td className="py-2">G+14</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Units per Wing</td>
                    <td className="py-2">68</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Units per Floor</td>
                    <td className="py-2">5</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Unit Configurations</td>
                    <td className="py-2">3 BHK, 3.5 BHK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Structural Specifications */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Compass className="h-7 w-7 text-warm-gold" /> Structural Specifications
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Structure</td>
                    <td className="py-2">RCC framed structure (designed for seismic zone 2)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Vitrified tiles</td>
                    <td className="py-2">AGL or Equivalent</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Ceramic tiles</td>
                    <td className="py-2">High-quality ceramic flooring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Doors & Windows */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <DoorOpen className="h-7 w-7 text-warm-gold" /> Doors & Windows
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Doors</td>
                    <td className="py-2">Pre-hung door with shutter (Sumai Doors), PVC door</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Windows</td>
                    <td className="py-2">PVC windows (Eureka or Equivalent)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Ventilation & Air Quality */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Wind className="h-7 w-7 text-warm-gold" /> Ventilation & Air Quality
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Ventilators</td>
                    <td className="py-2">PVC ventilators with provision for exhaust fan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Wall Finishes */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Paintbrush className="h-7 w-7 text-warm-gold" /> Wall Finishes
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Walls</td>
                    <td className="py-2">Emulsion paint/distemper and lift architrave with Granite</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Ceramic tiles</td>
                    <td className="py-2">Up to false ceiling height</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Ceramic tiles</td>
                    <td className="py-2">For 2' above platform</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Kitchen Specifications */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Kitchen className="h-7 w-7 text-warm-gold" /> Kitchen Specifications
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Granite Counter</td>
                    <td className="py-2">Stainless steel sink - Single bowl</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Stainless steel drain board</td>
                    <td className="py-2">Integrated drainage solution</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Hot & Cold water CP mixer</td>
                    <td className="py-2">Provision (Grohe or Equivalent)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Provision for washing machine</td>
                    <td className="py-2">In utility area</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Electrical Systems */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Plug className="h-7 w-7 text-warm-gold" /> Electrical Systems
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Within the apartment</td>
                    <td className="py-2">1 kW/unit (Light, Fan and 5amps sockets)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Common areas</td>
                    <td className="py-2">Lifts, pump and common area lighting</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Modular switches</td>
                    <td className="py-2">Schneider or equivalent</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Provision for power points</td>
                    <td className="py-2">Throughout apartment</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Complete with wiring & outlet</td>
                    <td className="py-2">Excludes main cable to apartment</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Provision for exhaust fan</td>
                    <td className="py-2">In all toilets & kitchen</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Provision for water purifier</td>
                    <td className="py-2">Kitchen installation ready</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Provision for washing machine</td>
                    <td className="py-2">Utility area setup</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Provision for water heater</td>
                    <td className="py-2">Bathroom installation ready</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Fire Safety Systems */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <FireExtinguisher className="h-7 w-7 text-warm-gold" /> Fire Safety Systems
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Smoke Detector</td>
                    <td className="py-2">Only in common areas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Flooring Specifications */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Table className="h-7 w-7 text-warm-gold" /> Flooring Specifications
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Common area</td>
                    <td className="py-2">Vitrified Tile flooring</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Common area</td>
                    <td className="py-2">Granite / Tile flooring</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Common area</td>
                    <td className="py-2">Kota stone / Tile flooring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Common Area Features */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Users className="h-7 w-7 text-warm-gold" /> Common Area Features
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Smoke Detector</td>
                    <td className="py-2">In all indoor common areas</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Emergency Lights</td>
                    <td className="py-2">Present in all common areas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Toilet Specifications */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Bathtub className="h-7 w-7 text-warm-gold" /> Toilet Specifications
              </h3>
              <ul className="list-disc list-inside space-y-2 text-elegant-charcoal text-base">
                <li>Wall-mounted EWC’s: Grohe or other reputed equivalent make in all toilets</li>
                <li>Geyser provision: Provision for geyser point with all necessary piping/wiring</li>
                <li>Fittings: Chromium-plated fittings of reputed make</li>
                <li>Washbasin mixer: Hot & Cold-water mixer for washbasin in all toilets</li>
                <li>Shower system: Hot & Cold-water shower with concealed diverter</li>
                <li>Health faucet: Health Faucet in all toilets</li>
                <li>Toilet paper holder: Toilet paper holder in all toilets</li>
              </ul>
            </div>
          </FadeInSection>

          {/* Painting & Finishes */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Paintbrush className="h-7 w-7 text-warm-gold" /> Painting & Finishes
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Interior walls & ceiling</td>
                    <td className="py-2">Emulsion paint for walls, distemper for ceiling</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Exterior walls</td>
                    <td className="py-2">Exterior texture paint</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Metal surfaces</td>
                    <td className="py-2">Enamel paint</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Ceilings & columns</td>
                    <td className="py-2">Whitewash</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Additional coat</td>
                    <td className="py-2">Distemper</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Railing & Safety */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Fence className="h-7 w-7 text-warm-gold" /> Railing & Safety
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">MS Railing</td>
                    <td className="py-2">Metal safety railings</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Glass Railing</td>
                    <td className="py-2">Glass railing system</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Ceiling Systems */}
          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-sm h-full">
              <h3 className="text-2xl font-heading text-deep-forest-green flex items-center gap-3 mb-6">
                <Ceiling className="h-7 w-7 text-warm-gold" /> Ceiling Systems
              </h3>
              <table className="w-full text-left text-elegant-charcoal text-base">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">False ceiling</td>
                    <td className="py-2">Selected areas</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Grid ceiling</td>
                    <td className="py-2">Systematic ceiling installation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
