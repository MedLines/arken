import React from 'react'
import { MoveRight } from 'lucide-react'

import { cn } from '@/lib/utils' // Standard shadcn utility

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: 'primary' | 'outline'
  showIcon?: boolean
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (
    { className, text, variant = 'primary', showIcon = true, ...props },
    ref
  ) => {
    const variants = {
      primary:
        'bg-primary text-primary-foreground shadow-[1px_1px_4px_0px_rgba(0,0,0,0.08)] hover:bg-primary/90 hover:ring-primary/10 hover:shadow-md hover:ring-4',
      outline:
        'bg-background border border-muted-foreground text-foreground hover:bg-muted hover:text-foreground hover:ring-foreground/5 hover:ring-4',
    }

    return (
      <button
        ref={ref}
        // 1. Explicit type prevents accidental form submissions inside <form> tags
        type="button"
        className={cn(
          // Layout & Sizing
          'group inline-flex cursor-pointer items-center justify-center gap-2',
          'rounded-full px-5 py-2.5', // Slightly larger hit area for accessibility

          // Typography
          'text-xs leading-5 font-medium tracking-wide', //  tracking looks cleaner for "Architecture"

          // 2. Interaction States (Hover & Active)
          'transition-all duration-300 ease-out',
          'active:scale-95', // Adds a tactile "click" feel

          // 3. Accessibility Focus States (Keyboard navigation)
          'focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

          // Disabled State
          'disabled:pointer-events-none disabled:opacity-50',
          'whitespace-nowrap',

          // Variant Styles
          variants[variant],

          className
        )}
        {...props}
      >
        <span>{text}</span>

        {/* 4. Animated Icon */}
        {showIcon && (
          <MoveRight
            size={16}
            // Icon slides right on hover
            className="transition-transform duration-300 group-hover:translate-x-1"
            // 5. Hide decorative icon from screen readers
            aria-hidden="true"
          />
        )}
      </button>
    )
  }
)

CtaButton.displayName = 'CtaButton'

export default CtaButton
