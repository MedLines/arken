'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

import { CogIcon } from '../ui/cog'
import { FileTextIcon } from '../ui/file-text'
import { FrameIcon } from '../ui/frame'

const features = [
  {
    title: 'Rapid Deployment',
    description:
      'While your foundation is being poured on-site, your home is being built in our factory. Simultaneous production cuts timelines by 50%.',
    icon: CogIcon,
  },
  {
    title: 'Steel Core Frame',
    description:
      'Built to exceed California seismic codes and heavy snow loads. Our rigid steel chassis allows for floor-to-ceiling glass without structural compromise.',
    icon: FrameIcon,
  },
  {
    title: 'The "Permit-Ready" Promise',
    description:
      'We handle the bureaucracy. Arken manages local zoning analysis, engineering stamps, and permit acquisition for your specific lot.',
    icon: FileTextIcon,
  },
]

export function Approach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section id="approach" ref={ref} className="bg-background py-16">
      <div className="mx-auto w-11/12 max-w-[1280px] px-4 md:px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground mb-6 text-sm font-medium tracking-widest uppercase"
          >
            The Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground mb-6 text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            Why build modular?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            A smarter, faster path to modern living.
          </motion.p>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="border-border/40 bg-secondary/10 relative mb-6 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border">
                {/* Center Crosshair Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[25px_25px] bg-center" />

                <feature.icon
                  size={20}
                  className="text-primary relative z-10 h-5 w-5"
                />
              </div>

              <h3 className="text-foreground mb-4 text-xl font-medium">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
