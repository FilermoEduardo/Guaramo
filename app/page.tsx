import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HowWeHelp } from '@/components/how-we-help'
import { ImpactArt } from '@/components/impact-art'
import { Gallery } from '@/components/gallery'
import { RegistrationPortal } from '@/components/registration-portal'
import { Partners } from '@/components/partners'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowWeHelp />
        <ImpactArt />
        <Gallery />
        <RegistrationPortal />
        <Partners />
      </main>
      <SiteFooter />
    </>
  )
}
