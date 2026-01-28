import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react'

import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background w-full">
      {/* Full-width separator */}
      <div className="border-t" />

      <div className="mx-auto mb-16 flex w-11/12 max-w-[1280px] flex-col items-center gap-12 px-4 pt-16 text-left md:px-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Column: Brand & Contact */}
        <div className="flex flex-col items-center gap-6 text-left lg:max-w-md lg:items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="text-primary h-6 w-6"
            />
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>

          <p className="text-muted-foreground text-lg">
            {siteConfig.description}
          </p>

          <div className="text-muted-foreground mt-4 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-foreground h-5 w-5 shrink-0" />
              <span>1024 Blueprint Blvd, Suite 400 Austin, TX 78701</span>
            </div>
            <a
              href="mailto:studio@arken.build"
              className="hover:text-foreground flex items-center gap-3 transition-colors"
            >
              <Mail className="text-foreground h-5 w-5 shrink-0" />
              <span>studio@arken.build</span>
            </a>
            <a
              href="tel:+18552007890"
              className="hover:text-foreground flex items-center gap-3 transition-colors"
            >
              <Phone className="text-foreground h-5 w-5 shrink-0" />
              <span>+1 (855) 200 7890</span>
            </a>
          </div>
        </div>

        {/* Right Column: Links & Social */}
        <div className="flex flex-row justify-center gap-12 sm:gap-24 lg:justify-start">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="#models"
                className="hover:text-primary transition-colors"
              >
                Models
              </Link>
              <Link
                href="#technology"
                className="hover:text-primary transition-colors"
              >
                Technology
              </Link>
              <Link
                href="#process"
                className="hover:text-primary transition-colors"
              >
                Process
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-6">
            <h3 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Social Media
            </h3>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="#"
                aria-label="Follow us on X (Twitter)"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors"
              >
                <X className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Follow us on LinkedIn"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Follow us on Instagram"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t">
        <div className="mx-auto w-11/12 max-w-[1280px] px-4 py-8 md:px-6">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
