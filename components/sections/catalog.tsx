'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import CtaButton from '@/components/shared/cta-button'

const catalogItems = [
  {
    id: 'a1',
    title: 'The Backyard Office (A1)',
    description: 'High-Focus Workspace | $185k',
    image: '/images/The Backyard Office (A1).png',
    alt: 'Backyard office module with glass sliding doors',
    fullDescription:
      'Transform your backyard into a sanctuary of productivity with the A1. Featuring floor-to-ceiling glass panels, built-in climate control, and acoustic insulation rated at 45 STC, this 160 sq ft workspace delivers the perfect environment for focused work. Pre-wired for high-speed internet, with optional solar integration for complete energy independence.',
  },
  {
    id: 'm4',
    title: 'The Alpine Retreat (M4)',
    description: 'Snow-Load Rated | $320k',
    image: '/images/The Alpine Retreat (M4).png',
    alt: 'Modern cabin in snowy landscape',
    fullDescription:
      'Engineered for extreme conditions, the M4 handles snow loads up to 120 PSF and temperatures down to -40°F. The triple-pane glazing and R-49 insulation create a warm haven in the harshest winters. With 480 sq ft of living space, radiant floor heating, and a reinforced steel chassis, this is mountain living redefined.',
  },
  {
    id: 'x7',
    title: 'The Desert Sanctuary (X7)',
    description: 'Net-Zero Ready | $450k',
    image: '/images/The Desert Sanctuary (X7) .png',
    alt: 'Desert home with solar panels',
    fullDescription:
      'The X7 is our flagship net-zero model, optimized for hot, arid climates. Featuring passive cooling design, integrated 12kW solar array, and Tesla Powerwall compatibility, this 720 sq ft dwelling produces more energy than it consumes. Automated shading systems and smart water recycling make sustainable desert living effortless.',
  },
  {
    id: 'multi',
    title: 'Multi-Family Stacks',
    description: 'Developer Solutions | Custom Quote',
    image: '/images/Multi-Family Stacks.png',
    alt: 'Multi-story modular apartment complex',
    fullDescription:
      'Scale your vision with our stackable modular system. Each unit is precision-manufactured for perfect alignment, supporting configurations up to 6 stories. Ideal for urban infill, affordable housing developments, and hospitality projects. 50% faster construction timelines, with the same architectural-grade finish as our residential line.',
  },
]

export function Catalog() {
  const [expandedIds, setExpandedIds] = useState<string[]>([])

  const toggleCard = (id: string) => {
    setExpandedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

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
          {catalogItems.map((item, index) => {
            const isExpanded = expandedIds.includes(item.id)

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.1 },
                }}
                style={{ borderRadius: 24 }}
                className="group bg-card flex flex-col p-6 transition-shadow hover:shadow-sm"
              >
                {/* Card Header */}
                <motion.div
                  layout="position"
                  className="mb-6 flex items-start justify-between"
                >
                  <div className="space-y-1">
                    <h3 className="text-foreground text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCard(item.id)}
                    className="border-border group-hover:bg-accent flex size-10 cursor-pointer items-center justify-center rounded-full border transition-colors"
                  >
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="text-foreground size-4" />
                    </motion.div>
                    <span className="sr-only">View {item.title}</span>
                  </button>
                </motion.div>

                {/* Card Image */}
                {/* Content Container - Fixed Height */}
                <div className="relative h-[320px] w-full md:h-[360px]">
                  <div className="flex h-full w-full flex-col">
                    {/* Image */}
                    <motion.div
                      layout
                      style={{
                        borderRadius: 16,
                        width: isExpanded ? '50%' : '100%',
                        height: '100%',
                      }}
                      className={`relative overflow-hidden ${
                        isExpanded ? 'shadow-sm' : ''
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className={`object-cover transition-transform duration-500 ${
                          !isExpanded && 'group-hover:scale-105'
                        }`}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </motion.div>

                    {/* Text Content */}
                    <AnimatePresence mode="popLayout">
                      {isExpanded && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                delayChildren: 0.1,
                                staggerChildren: 0.1,
                              },
                            },
                            exit: {
                              opacity: 0,
                              transition: {
                                staggerChildren: 0.05,
                                staggerDirection: -1,
                              },
                            },
                          }}
                          className="flex flex-1 flex-col justify-end pt-4"
                        >
                          <div className="flex flex-col items-start space-y-3">
                            <motion.p
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 20 },
                              }}
                              className="text-muted-foreground line-clamp-4 text-xs leading-relaxed md:text-sm"
                            >
                              {item.fullDescription}
                            </motion.p>
                            <motion.div
                              variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                              }}
                              className="w-full"
                            >
                              <CtaButton
                                className="w-full"
                                text="Get This Model"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
