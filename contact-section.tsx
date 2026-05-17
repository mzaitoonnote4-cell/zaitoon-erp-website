import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { PricingSection } from "@/components/landing/pricing-section"
import { VideoSection } from "@/components/landing/video-section"
import { MobileAppSection } from "@/components/landing/mobile-app-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DashboardPreview />
      <PricingSection />
      <VideoSection />
      <MobileAppSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
