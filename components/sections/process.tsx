import { SectionHeading } from '@/components/shared/section-heading'

export function Process() {
  return (
    <section id="process" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <SectionHeading>Our Process</SectionHeading>
        <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          How we bring ideas to life.
        </p>
      </div>
    </section>
  )
}
