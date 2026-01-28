'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'motion/react'

import { cn } from '@/lib/utils'

import CtaButton from '../shared/cta-button'
import { ImageViewer } from './image-viewer'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.8])

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
    },
  }

  return (
    <section
      id="home"
      className="flex w-full flex-col items-center justify-center space-y-6 pt-24 pb-12 md:pb-16"
    >
      {/* Text content uses CSS animations */}
      <div
        className={cn(
          'container mx-auto px-4 md:px-6',
          'flex max-w-3xl flex-col items-center gap-6 py-12 text-center md:gap-8 md:py-16'
        )}
      >
        <h1 className="text-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-center text-4xl leading-tight font-bold duration-500 sm:text-5xl md:text-6xl md:leading-[86.40px]">
          The Future of Living is Precision-Engineered.
        </h1>
        <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-base leading-normal delay-150 duration-500 md:text-lg">
          Sustainable, architectural-grade modular homes delivered to your site
          in weeks, not months.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both flex flex-col gap-4 delay-300 duration-500 sm:flex-row">
          <CtaButton text="Configure Your Model" variant="outline" />
          <CtaButton text="Download Floor Plans" />
        </div>
      </div>

      {/* ImageViewer uses motion.js for interactive animations */}
      <motion.div
        ref={ref}
        style={{ scale }}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <ImageViewer />
      </motion.div>
    </section>
  )
}
