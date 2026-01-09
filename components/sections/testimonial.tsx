'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

interface Testimonial {
  id: number
  title: string
  quote: string
  rating: number
  author: string
  role: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Arken is a game-changer!',
    quote:
      '"We went from empty land to a fully furnished luxury home in 4 months. The crane installation was incredible to watch—it felt like magic."',
    rating: 5,
    author: 'James Miller',
    role: 'Owner, Arken M4',
    // Using a placeholder that matches the "man with glasses" description from the design
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Exceeded all expectations',
    quote:
      '"The precision and speed were unmatched. Arken delivered exactly what they promised—a beautiful, sustainable home without the usual construction headaches."',
    rating: 5,
    author: 'Sarah Jenkins',
    role: 'Architect, Studio 54',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
  },
]

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handlers for next/prev (placeholder logic for now since we have 1 item)
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  // Animation variants
  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <section className="bg-background text-foreground py-24">
      <div className="mx-auto w-11/12 max-w-[1280px] px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-muted-foreground mb-6 text-sm font-normal tracking-widest uppercase">
            Testimonials
          </span>

          <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            What our homeowners say <br className="hidden md:block" />
            about us
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl">
            We build lasting partnerships by delivering outstanding results.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentTestimonial.id}
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Text Content */}
          <div className="bg-accent flex w-full flex-col justify-between rounded-[2rem] p-8 lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeVariants}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8 pt-8"
              >
                <h3 className="text-2xl font-semibold md:text-3xl">
                  {currentTestimonial.title}
                </h3>

                <blockquote className="text-muted-foreground text-xl leading-relaxed md:text-2xl">
                  {currentTestimonial.quote}
                </blockquote>

                {/* Rating */}
                <div className="text-warning flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={
                        i < currentTestimonial.rating ? 'currentColor' : 'none'
                      }
                      className={
                        i < currentTestimonial.rating
                          ? 'text-warning'
                          : 'text-border'
                      }
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="mt-2">
                  <div className="text-lg font-medium">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-12 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-background group border-border hover:border-foreground hover:bg-foreground hover:text-background flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-colors"
                aria-label="Previous testimonial"
              >
                {/* ArrowLeft with transition */}
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-background group border-border hover:border-foreground hover:bg-foreground hover:text-background flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
