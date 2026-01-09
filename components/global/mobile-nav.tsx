'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { siteConfig } from '@/config/site'

import CtaButton from '../shared/cta-button'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = siteConfig.nav

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
        aria-label="Toggle navigation"
      >
        <motion.span
          className="bg-foreground h-[2px] w-6"
          animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className="bg-foreground h-[2px] w-6"
          animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {
                  x: '-100%',
                  transition: {
                    staggerChildren: 0.08,
                    staggerDirection: -1,
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                  },
                },
                visible: {
                  x: '0%',
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.3, // Wait slightly for drawer to start opening
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                  },
                },
              }}
              // Added pl-8 for extra padding on the left as requested
              className="bg-background fixed top-0 left-0 z-50 h-screen w-[300px] border-r p-6 pl-8 shadow-lg"
            >
              <div className="flex h-full flex-col gap-8">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2"
                  >
                    <Image
                      className="text-primary"
                      src="/images/logo.svg"
                      alt="Logo"
                      width={19}
                      height={19}
                    />
                    <span className="font-bold">{siteConfig.name}</span>
                  </Link>
                </div>

                {/* Staggered Navigation Items */}
                <nav className="flex-1">
                  <ul className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <motion.li
                        key={item.href}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-foreground/60 hover:text-foreground block text-lg font-medium transition-colors"
                        >
                          {item.title}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer / CTA */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="mx-auto mb-8"
                >
                  <CtaButton text="Check Eligibility" className="mx-auto" />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
