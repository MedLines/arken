import { Container } from '@/components/global/container'

export function Hero() {
  return (
    <section className="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32">
      <Container className="flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Arken Portfolio
        </h1>
        <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          Showcasing the future of design and engineering.
        </p>
      </Container>
    </section>
  )
}
