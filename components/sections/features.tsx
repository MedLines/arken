import { SectionHeading } from '@/components/shared/section-heading'

export function Features() {
  return (
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 md:py-12 lg:py-24 dark:bg-transparent"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <SectionHeading>Features</SectionHeading>
        <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          Explore what makes us unique.
        </p>
      </div>
    </section>
  )
}
