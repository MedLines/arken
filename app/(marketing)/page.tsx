import { Catalog } from '@/components/sections/catalog'
import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'
import { Process } from '@/components/sections/process'
import { Testimonial } from '@/components/sections/testimonial'

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Catalog />
      <Testimonial />
    </>
  )
}
