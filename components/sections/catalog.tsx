import { SectionHeading } from '@/components/shared/section-heading'

export function Catalog() {
  return (
    <section id="models" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <SectionHeading>Model Catalog</SectionHeading>
        <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          Browse our collection.
        </p>
      </div>
    </section>
  )
}
