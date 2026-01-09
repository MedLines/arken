import { Approach } from '@/components/sections/approach'
import { Catalog } from '@/components/sections/catalog'
import { Contact } from '@/components/sections/contact'
import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'
import { Process } from '@/components/sections/process'
import { Testimonial } from '@/components/sections/testimonial'

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Approach />
      <Process />
      <Catalog />
      <Testimonial />
      <Contact />
    </>
  )
}
