import { HeroSection } from "@/components/hero-section"
import { PropertyCarousel } from "@/components/property-carousel"
import OurCleaningServices from "@/components/our-cleaning-services"

import TestimonialsSection from "@/components/testimonials-section"
import { ContactFooter } from "@/components/contact-footer"
import CleaningProcess from "@/components/cleaning-process"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PropertyCarousel />
      <OurCleaningServices />
      <CleaningProcess />
      <TestimonialsSection />
      <ContactFooter />
    </main>
  )
}
