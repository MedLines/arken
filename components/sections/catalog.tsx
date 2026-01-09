'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const catalogItems = [
  {
    title: 'The Backyard Office (A1)',
    description: 'High-Focus Workspace | $185k',
    image: '/images/The Backyard Office (A1).png',
    alt: 'Backyard office module with glass sliding doors',
  },
  {
    title: 'The Alpine Retreat (M4)',
    description: 'Snow-Load Rated | $320k',
    image: '/images/The Alpine Retreat (M4).png',
    alt: 'Modern cabin in snowy landscape',
  },
  {
    title: 'The Desert Sanctuary (X7)',
    description: 'Net-Zero Ready | $450k',
    image: '/images/The Desert Sanctuary (X7) .png',
    alt: 'Desert home with solar panels',
  },
  {
    title: 'Multi-Family Stacks',
    description: 'Developer Solutions | Custom Quote',
    image: '/images/Multi-Family Stacks.png',
    alt: 'Multi-story modular apartment complex',
  },
]

export function Catalog() {
  return (
    <section id="models" className="bg-muted flex flex-col items-center py-24">
      <div className="container w-11/12 max-w-[1280px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <p className="text-muted-foreground mb-4 text-sm font-medium tracking-widest uppercase">
            The Use Cases
          </p>
          <h2 className="text-foreground mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            One System. Infinite Applications.
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse configurations designed for specific lifestyles and terrains.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {catalogItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="group bg-card flex flex-col rounded-[24px] p-6 transition-shadow hover:shadow-sm"
            >
              {/* Card Header */}
              <div className="mb-6 flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-foreground text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                <button className="border-border group-hover:bg-accent flex size-10 items-center justify-center rounded-full border transition-colors">
                  <ArrowRight className="text-foreground size-4" />
                  <span className="sr-only">View {item.title}</span>
                </button>
              </div>

              {/* Card Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:aspect-3/2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
