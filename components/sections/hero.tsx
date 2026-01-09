'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'

import { cn } from '@/lib/utils'

import CtaButton from '../shared/cta-button'
import { ImageViewer } from './image-viewer'

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

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
      transition: { duration: 0.5, ease: 'easeInOut', delay: 0.9 },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-center justify-center space-y-6 pt-24 pb-12 md:pb-16"
    >
      <motion.div
        variants={containerVariants}
        className={cn(
          'container mx-auto px-4 md:px-6',
          'flex max-w-3xl flex-col items-center gap-6 py-12 text-center md:gap-8 md:py-16'
        )}
      >
        <motion.h1
          variants={itemVariants}
          className="text-foreground text-center text-4xl leading-tight font-bold sm:text-5xl md:text-6xl md:leading-[86.40px]"
        >
          The Future of Living is Precision-Engineered.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-base leading-normal md:text-lg"
        >
          Sustainable, architectural-grade modular homes delivered to your site
          in weeks, not months.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <CtaButton text="Configure Your Model" variant="outline" />
          <CtaButton text="Download Floor Plans" />
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        style={{ scale }}
        variants={imageVariants}
        className="w-full"
      >
        <ImageViewer />
      </motion.div>
    </motion.section>
  )
}
