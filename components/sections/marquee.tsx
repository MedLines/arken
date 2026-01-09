'use client'

import { motion } from 'framer-motion'

export function Marquee() {
  const marqueeText =
    'ARCHITECTURAL GRADE • 16-WEEK DELIVERY • SWISS PRECISION • NET-ZERO READY • STEEL CORE CHASSIS • ARCHITECTURAL GRADE • 16-WEEK DELIVERY • SWISS PRECISION • NET-ZERO READY • STEEL CORE CHASSIS • '

  return (
    <div className="bg-secondary z-30 flex overflow-hidden py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        <div className="flex items-center px-4">
          <span className="text-foreground/80 text-xl font-medium tracking-widest uppercase">
            {marqueeText}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-foreground/80 text-xl font-medium tracking-widest uppercase">
            {marqueeText}
          </span>
        </div>
      </motion.div>
    </div>
  )
}
