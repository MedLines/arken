import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

import CtaButton from '../shared/cta-button'
import { MobileNav } from './mobile-nav'

export function Navbar() {
  return (
    <header className="bg-background/90 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 flex w-full items-center justify-center border-b backdrop-blur">
      <div className="container flex min-h-14 w-11/12 max-w-[1280px] items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            className="text-primary"
            src="/images/logo/logo.svg"
            alt="Logo"
            width={19}
            height={19}
          />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <CtaButton text="Check Eligibility" />
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
