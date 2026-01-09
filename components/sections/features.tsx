'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

import { Separator } from '@/components/ui/separator'

import { Marquee } from './marquee'

const features = [
  {
    title: '16 Weeks',
    subtitle: 'Production to Delivery',
  },
  {
    title: 'Fixed Price',
    subtitle: 'Guaranteed Cost',
  },
  {
    title: 'Net-Zero',
    subtitle: 'Energy Efficiency Standard',
  },
  {
    title: '50 Year',
    subtitle: 'Structural Warranty',
  },
]

export function Features() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Start with a safe default, will update on mount
  const [targetScale, setTargetScale] = useState(0.92)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth
      setIsMobile(vw < 1024)

      // Navbar inner container is w-11/12 max-w-[1280px]
      const navbarWidth = Math.min(vw * (11 / 12), 1280)
      // We want to scale the w-full container to match navbarWidth
      const newScale = navbarWidth / vw
      setTargetScale(newScale)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  // 1. Container Scales Down first (0 to 0.35)
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, targetScale])
  const borderRadius = useTransform(scrollYProgress, [0, 0.35], [0, 48])
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 20])

  // 2. Main Content Fades In (0.35 to 0.5)
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.35, 0.5], [20, 0])

  return (
    <section ref={containerRef} className="relative h-auto lg:h-[250vh]">
      <div className="flex flex-col gap-8 lg:sticky lg:top-14 lg:z-20 lg:h-[calc(100vh-3.5rem)] lg:gap-0 lg:overflow-hidden">
        <Marquee />
        <motion.div
          style={
            isMobile
              ? { scale: 1, borderRadius: '24px', y: 0 }
              : { scale, borderRadius, y }
          }
          className="bg-secondary relative mx-auto flex w-11/12 max-w-[1280px] flex-1 flex-col justify-start overflow-hidden px-4 py-8 md:px-8 md:py-12 lg:mx-0 lg:w-full lg:max-w-none lg:p-16"
        >
          <motion.div
            style={
              isMobile
                ? { opacity: 1, y: 0 }
                : { opacity: contentOpacity, y: contentY }
            }
            className="container mx-auto mt-8 space-y-12 md:mt-12 md:space-y-16 lg:mt-16 lg:space-y-24"
          >
            <div className="flex flex-col justify-between gap-8 md:gap-12 lg:flex-row lg:gap-24">
              <div className="space-y-4 lg:w-[45%] lg:space-y-6">
                <span className="text-muted-foreground block text-sm font-medium tracking-widest uppercase">
                  The Philosophy
                </span>
                <h2 className="text-foreground text-3xl leading-tight font-semibold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.1]">
                  Construction, productized.
                </h2>
              </div>
              <div className="text-muted-foreground space-y-4 text-base leading-relaxed md:space-y-6 md:text-lg lg:w-[55%] lg:text-xl">
                <p>
                  Traditional building is broken. Weather delays, budget creep,
                  and material waste are the industry standard. We believe your
                  home should be built with the same precision as your car: in a
                  controlled environment.
                </p>
                <p>
                  Arken homes are engineered to tolerances of less than 1mm. By
                  centralizing construction in our facility, we eliminate 90% of
                  site waste and guarantee your move-in date before we even
                  break ground.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  total={features.length}
                  scrollYProgress={scrollYProgress}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  feature: {
    title: string
    subtitle: string
  }
  index: number
  total: number
  scrollYProgress: any // Using any for MotionValue to avoid complex type import for now, or use MotionValue<number>
}

function FeatureItem({
  feature,
  index,
  total,
  scrollYProgress,
  isMobile,
}: any) {
  // 3. Features Stagger In (starting from 0.5)
  const start = 0.5 + index * 0.1
  const end = start + 0.15
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y = useTransform(scrollYProgress, [start, end], [20, 0])

  return (
    <motion.div
      style={isMobile ? { opacity: 1, y: 0 } : { opacity, y }}
      className="group relative flex flex-col items-center justify-between px-0 text-center lg:items-start lg:px-8 lg:text-left"
    >
      <h3 className="text-primary mb-3 text-3xl font-semibold md:text-4xl">
        {feature.title}
      </h3>
      <p className="text-muted-foreground text-lg font-medium">
        {feature.subtitle}
      </p>

      {/* Vertical Separator for Desktop (between items) */}
      {index < total - 1 && (
        <Separator
          orientation="vertical"
          className="bg-foreground absolute top-0 right-0 hidden h-full lg:block"
        />
      )}

      {/* Horizontal Separator for Mobile (between items) */}
      {index < total - 1 && (
        <Separator
          orientation="horizontal"
          className="bg-foreground absolute right-0 -bottom-4 left-0 mx-auto block w-1/2! lg:hidden"
        />
      )}
    </motion.div>
  )
}
