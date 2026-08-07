const steps = [
  {
    number: '01',
    title: 'Source',
    description:
      'We partner with cooperatives in Ecuador, Peru, Ghana, and Madagascar to source premium, ethically grown cacao beans.',
  },
  {
    number: '02',
    title: 'Roast & Grind',
    description:
      'Each origin is roasted to its ideal profile, then stone-ground to preserve the complex flavor notes within.',
  },
  {
    number: '03',
    title: 'Temper',
    description:
      'Our chocolatiers hand-temper every batch for that signature snap, glossy finish, and silky melt.',
  },
  {
    number: '04',
    title: 'Craft',
    description:
      'Filled, molded, and finished by hand — each piece inspected before it earns the Chocolate Factory seal.',
  },
]

export default function Craft() {
  return (
    <section id="craft" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-500">
            The Craft
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa-900 sm:text-5xl">
            From bean to bliss
          </h2>
          <p className="mt-4 text-lg text-cocoa-700/80">
            Every step of our process is designed to honor the cacao and delight
            the palate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl bg-cream-50 p-8 ring-1 ring-cocoa-900/5 transition hover:bg-white hover:shadow-lg"
            >
              <span className="font-display text-5xl font-bold text-gold-400/30 transition group-hover:text-gold-400/50">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cocoa-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa-700/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
