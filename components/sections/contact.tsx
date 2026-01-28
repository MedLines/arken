'use client'

import { motion } from 'motion/react'

import CtaButton from '@/components/shared/cta-button'

export function Contact() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-11/12 max-w-[1280px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="dark border-border bg-background relative overflow-hidden rounded-[24px] border px-6 py-12 md:p-14"
        >
          {/* Decorative background element mimicking the geometric shape */}
          {/* Background Logo */}
          <div className="pointer-events-none absolute -right-16 -bottom-16 w-[500px] opacity-[0.03] md:-right-32 md:-bottom-32 md:w-[700px]">
            <img
              src="/images/logo/logo.svg"
              alt=""
              className="h-full w-full grayscale invert"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex max-w-3xl flex-col items-start gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                Contact Us
              </span>
              <h2 className="text-foreground text-4xl leading-tight font-semibold tracking-tight md:text-[56px] md:leading-[1.1]">
                Is your land ready for Arken?
              </h2>
            </div>

            <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
              We offer a free remote site assessment to check if your property
              qualifies for modular delivery.
            </p>

            <CtaButton
              text="Start Free Assessment"
              className="bg-primary text-primary-foreground hover:bg-primary/90 border-none px-8 py-4 text-base"
              showIcon={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
