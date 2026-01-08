export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
      {children}
    </h2>
  )
}
