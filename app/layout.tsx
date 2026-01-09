import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const regrade = localFont({
  src: [
    {
      path: '../public/fonts/Neue Regrade Variable.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neue Regrade Light Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue Regrade Regular Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue Regrade Medium Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue Regrade SemiBold Italic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue Regrade Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neue Regrade ExtraBold Italic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-regrade',
})

export const metadata: Metadata = {
  title: 'Arken',
  description: 'Precision-engineered habitats for the modern era.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${regrade.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
