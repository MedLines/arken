import { Footer } from '@/components/global/footer'
import { MotionProvider } from '@/components/global/motion-provider'
import { Navbar } from '@/components/global/navbar'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col items-center">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </MotionProvider>
  )
}
