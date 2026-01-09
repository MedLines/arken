'use client'

import { useRef } from 'react'
import { ArrowRight, Factory, PencilRuler, PenTool, Truck } from 'lucide-react'
import { motion, useInView } from 'motion/react'

import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'Feasibility Study',
    description:
      "We analyze your land's topography, soil, and zoning laws to confirm site access and build eligibility.",
    icon: PencilRuler,
    image: '/images/process/study.png',
  },
  {
    number: '02',
    title: 'Design & Engineering',
    description:
      'Select your model and finishes. We generate final blueprints and submit for local city approval.',
    icon: PenTool,
    image: '/images/process/eng.png',
  },
  {
    number: '03',
    title: 'Factory Production',
    description:
      'Your home is fabricated, assembled, and finished in our facility while your site foundation is being poured.',
    icon: Factory,
    image: '/images/process/Factory.png',
  },
  {
    number: '04',
    title: 'Delivery & Install',
    description:
      'The unit is trucked to the site and craned onto the foundation. Utilities are connected in 24-48 hours.',
    icon: Truck,
    image: '/images/process/delivery.png',
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section className="dark bg-background text-foreground py-24" ref={ref}>
      <div className="mx-auto w-11/12 max-w-[1280px] px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground mb-4 text-sm font-medium tracking-widest uppercase"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            The Delivery Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px] md:text-lg"
          >
            We have standardized the construction process to move you from
            deposit to move-in day in as little as 16 weeks.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-5 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className={cn(
                'group border-border/40 relative flex flex-col items-center overflow-hidden rounded-3xl border bg-black/70 p-8 text-center md:items-start md:text-left',
                index === 1 || index === 2 ? 'md:col-span-2' : 'md:col-span-3'
              )}
            >
              {/* Background Image & Overlay */}
              {/* Background Image & Overlay Container */}
              <div className="absolute inset-0 z-0">
                {/* Dark Gradient Background - Edit from/via/to colors to change contrast */}
                <div className="from-background/80 via-background/50 to-background/30 absolute inset-0 bg-linear-to-t" />

                {/* Process Step Image - Rendered on top of gradient */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover opacity-100! transition-transform duration-500 group-hover:scale-115"
                />
              </div>

              <span className="text-foreground/50 group-hover:text-foreground absolute top-8 right-8 z-10 text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors">
                {step.number}
              </span>
              <div className="text-foreground ring-primary relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-full ring backdrop-blur-sm">
                <step.icon className="h-7 w-7" />
              </div>

              <h3 className="text-primary relative z-10 mb-3 text-2xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {step.title}
              </h3>
              <p
                className={cn(
                  'text-muted-foreground relative z-10 mb-8 flex-grow text-base leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',
                  index === 0 || index === 3 ? 'md:max-w-[70%]' : ''
                )}
              >
                {step.description}
              </p>

              <div className="relative z-10 mt-auto flex w-full justify-center md:justify-start">
                <button className="bg-foreground text-background flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
