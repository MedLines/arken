'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

const items = [
  {
    id: 'A1',
    name: 'Arken A1',
    images: ['/images/Arken-A1-Angle.png', '/images/Arken A1 Front.png'],
  },
  {
    id: 'X7',
    name: 'Arken X7',
    images: ['/images/Arken-X7-Angle.png', '/images/Arken X7 Front.png'],
  },
  {
    id: 'M4',
    name: 'Arken M4',
    images: ['/images/Arken-M4-Angle.png', '/images/Arken M4 Front.jpg'],
  },
]

function SlideTitle({ item }: { item: (typeof items)[0] }) {
  return (
    <motion.h3
      layout
      layoutId={`h3-${item.id}`}
      className="text-4xl font-bold text-white drop-shadow-md"
    >
      <motion.span className="block" layout>
        {item.name}
      </motion.span>
    </motion.h3>
  )
}

function SlideDots({
  item,
  activeIndex,
  itemIndex,
  onDotClick,
}: {
  item: (typeof items)[0]
  activeIndex: number
  itemIndex: number
  onDotClick: (
    itemIndex: number,
    slideIndex: number,
    e: React.MouseEvent
  ) => void
}) {
  return (
    <>
      {item.images.map((_, dotIndex) => (
        <div key={dotIndex} className="block">
          <motion.button
            layout
            onClick={(e) => onDotClick(itemIndex, dotIndex, e)}
            className={`block h-4 w-4 cursor-pointer rounded-full ${
              activeIndex === dotIndex
                ? 'w-8 bg-white'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`View image ${dotIndex + 1}`}
          />
        </div>
      ))}
    </>
  )
}

export function ImageViewer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSlides, setActiveSlides] = useState<number[]>([0, 0, 0])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const prevSelectedId = useRef<string | null>(null)

  const isClosing = prevSelectedId.current !== null && selectedId === null

  useEffect(() => {
    prevSelectedId.current = selectedId
  }, [selectedId])

  // Clear timer when unmounting
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  // Handle Escape key to close selected view
  const handleClose = useCallback(() => {
    setSelectedId(null)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedId) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedId, handleClose])

  const startSlideTimer = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveSlides((prev) => {
        const newSlides = [...prev]
        newSlides[index] = (newSlides[index] + 1) % items[index].images.length
        return newSlides
      })
    }, 2500)
  }

  const handleHoverStart = (index: number) => {
    setHoveredIndex(index)
    startSlideTimer(index)
  }

  const handleHoverEnd = () => {
    setHoveredIndex(null)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const handleDotClick = (
    itemIndex: number,
    slideIndex: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation() // Prevent triggering parent clicks if any

    // Reset timer on manual interaction
    startSlideTimer(itemIndex)

    setActiveSlides((prev) => {
      const newSlides = [...prev]
      newSlides[itemIndex] = slideIndex
      return newSlides
    })
  }

  return (
    <>
      {/* Full-screen backdrop - click to close */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-40 cursor-pointer"
          />
        )}
      </AnimatePresence>

      <div
        className={`relative z-50 container mx-auto flex h-[700px] w-11/12 max-w-[1280px] items-center justify-center transition-all duration-500 ${selectedId ? 'gap-0' : 'gap-4'}`}
      >
        {items.map((item, index) => {
          const isSelected = selectedId === item.id
          const isHovered = hoveredIndex === index
          const isOtherSelected = selectedId && !isSelected

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => {
                if (isSelected) {
                  // Clicking on selected image closes it
                  setSelectedId(null)
                } else if (!selectedId) {
                  // Only select if nothing is currently selected
                  setSelectedId(item.id)
                }
              }}
              className={`relative h-full overflow-hidden rounded-2xl ${isOtherSelected ? 'pointer-events-none' : isSelected ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              initial={{ flex: 2 }}
              animate={{
                flex: isSelected ? 12 : isOtherSelected ? 0 : isHovered ? 4 : 2,
                opacity: isOtherSelected ? 0 : 1,
                width: isOtherSelected ? 0 : 'auto',
              }}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 25,
                mass: 1,
              }}
            >
              <div className="relative h-full w-full">
                {/* Image Carousel */}
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeSlides[index]}
                    layoutId={`image-${item.id}-${activeSlides[index]}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <Image
                      src={item.images[activeSlides[index]]}
                      alt={item.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* HOVER STATE: Centered Text & Dots */}
                <AnimatePresence>
                  {isHovered && !selectedId && (
                    <>
                      {/* Hover Title */}
                      <motion.div
                        layout
                        layoutId={`title-${item.id}`}
                        initial={
                          isClosing
                            ? { y: 0, opacity: 1 }
                            : { y: 20, opacity: 0 }
                        }
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1],
                            delay: 0.2,
                          },
                        }}
                        exit={{ y: 20, opacity: 0 }}
                        className="absolute right-0 bottom-12 left-0 z-20 text-center"
                      >
                        <SlideTitle item={item} />
                      </motion.div>

                      {/* Hover Dots */}
                      <motion.div
                        layoutId={`dots-${item.id}`}
                        layout
                        initial={
                          isClosing
                            ? { y: 0, opacity: 1 }
                            : { y: 20, opacity: 0 }
                        }
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1],
                            delay: 0.4,
                          },
                        }}
                        exit={{ y: 20, opacity: 0 }}
                        className="absolute right-0 bottom-4 left-0 z-30 flex justify-center gap-2"
                      >
                        <SlideDots
                          item={item}
                          activeIndex={activeSlides[index]}
                          itemIndex={index}
                          onDotClick={handleDotClick}
                        />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* SELECTED STATE: Bottom Right Text & Dots, Close Button */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      layout
                      className="absolute inset-0 z-20 cursor-zoom-out"
                    >
                      {/* Close Button */}
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedId(null)
                        }}
                        className="absolute top-6 right-6 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                      >
                        <X size={24} />
                      </motion.button>

                      {/* Selected Title */}
                      <div className="absolute right-12 bottom-12">
                        <motion.div layoutId={`title-${item.id}`}>
                          <SlideTitle item={item} />
                        </motion.div>
                      </div>

                      {/* Selected Dots */}
                      <motion.div
                        layout
                        layoutId={`dots-${item.id}`}
                        className="absolute right-12 bottom-4 z-30 flex justify-end gap-2"
                      >
                        <SlideDots
                          item={item}
                          activeIndex={activeSlides[index]}
                          itemIndex={index}
                          onDotClick={handleDotClick}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
