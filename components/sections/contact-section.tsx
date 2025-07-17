import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeInSection } from "@/components/utils/fade-in-section"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-earthy-beige">
      <div className="container max-w-5xl mx-auto px-6 md:px-8 text-center">
        <FadeInSection className="mb-20">
          <h2 className="text-5xl md:text-6xl font-heading text-deep-forest-green mb-6">Contact Us</h2>
          <p className="text-xl md:text-2xl text-elegant-charcoal max-w-3xl mx-auto leading-relaxed">
            Connect with us to learn more about Elegant Atmos and experience sustainable luxury living.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <FadeInSection className="space-y-8">
            <div className="flex items-center gap-5">
              <Phone className="h-10 w-10 text-warm-gold" />
              <div>
                <h3 className="text-2xl font-heading text-deep-forest-green">Phone</h3>
                <p className="text-xl text-elegant-charcoal">+91 96068 65959</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Mail className="h-10 w-10 text-warm-gold" />
              <div>
                <h3 className="text-2xl font-heading text-deep-forest-green">Email</h3>
                <p className="text-xl text-elegant-charcoal">contact@elegantatmos.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <MapPin className="h-10 w-10 text-warm-gold" />
              <div>
                <h3 className="text-2xl font-heading text-deep-forest-green">Location</h3>
                <p className="text-xl text-elegant-charcoal">Yelahanka, North Bengaluru</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-heading text-deep-forest-green">Certifications & Partnerships</h3>
              <ul className="list-disc list-inside text-elegant-charcoal text-lg">
                <li>CREDAI (Confederation of Real Estate Developers' Associations of India)</li>
                <li>NET ZERO certification</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-classic-white p-8 border border-soft-sand-grey shadow-lg">
              <h3 className="text-3xl font-heading text-deep-forest-green mb-8 text-center">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold h-12 text-lg px-4"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={6}
                    className="border-soft-sand-grey focus:border-warm-gold focus-visible:ring-warm-gold text-lg p-4"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-deep-forest-green text-classic-white hover:bg-deep-forest-green/90 py-4 text-xl font-semibold"
                >
                  Submit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
