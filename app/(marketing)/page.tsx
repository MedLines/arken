import dynamic from 'next/dynamic'

import { Hero } from '@/components/sections/hero'

const Features = dynamic(() =>
  import('@/components/sections/features').then((mod) => mod.Features)
)
const Approach = dynamic(() =>
  import('@/components/sections/approach').then((mod) => mod.Approach)
)
const Process = dynamic(() =>
  import('@/components/sections/process').then((mod) => mod.Process)
)
const Catalog = dynamic(() =>
  import('@/components/sections/catalog').then((mod) => mod.Catalog)
)
const Testimonial = dynamic(() =>
  import('@/components/sections/testimonial').then((mod) => mod.Testimonial)
)
const Contact = dynamic(() =>
  import('@/components/sections/contact').then((mod) => mod.Contact)
)

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
