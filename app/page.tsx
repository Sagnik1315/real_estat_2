import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Hero } from '@/components/hero'
import { ProjectSpotlight } from '@/components/project-spotlight'
import { PropertyExplorer } from '@/components/property-explorer'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { WhyChooseUs } from '@/components/why-choose-us'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PropertyExplorer />
        <ProjectSpotlight />
        <AboutSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
