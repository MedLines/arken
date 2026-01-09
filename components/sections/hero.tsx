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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-center justify-center space-y-6 pt-6 pb-8"
    >
      <motion.div
        variants={containerVariants}
        className={cn(
          'container mx-auto px-4 md:px-6',
          'flex max-w-3xl flex-col items-center gap-4 py-16 text-center'
        )}
      >
        <motion.h1
          variants={itemVariants}
          className="text-foreground text-center text-6xl leading-[86.40px] font-bold"
        >
          The Future of Living is Precision-Engineered.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-md leading-normal"
        >
          Sustainable, architectural-grade modular homes delivered to your site
          in weeks, not months.
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-4">
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
