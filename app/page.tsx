import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PackagesSection } from "@/components/home/packages-section"
import { AboutSection } from "@/components/home/about-section"
import { PortfolioPreview } from "@/components/home/portfolio-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PackagesSection />
      <AboutSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
