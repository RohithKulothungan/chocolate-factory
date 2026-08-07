export default function Story() {
  return (
    <section id="story" className="bg-cocoa-900 py-24 text-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/story-1.jpg"
                alt="Chocolatier tempering chocolate"
                className="rounded-2xl object-cover shadow-2xl"
              />
              <img
                src="/images/story-2.jpg"
                alt="Cacao beans being sorted"
                className="mt-8 rounded-2xl object-cover shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-gold-400/30 bg-cocoa-800 p-6 shadow-xl sm:right-8">
              <p className="font-display text-4xl font-semibold text-gold-400">1987</p>
              <p className="mt-1 text-sm text-cream-200/70">Founded in Brussels</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-400">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Three generations of chocolate obsession
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream-200/80">
              What began as a small workshop in Brussels has grown into a beloved
              chocolate house — but our philosophy remains unchanged: source the finest
              cacao, respect the craft, and never compromise on quality.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream-200/80">
              Today, our master chocolatiers work directly with farming cooperatives
              across four continents, ensuring fair wages and sustainable practices at
              every step of the journey from bean to bar.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                'Direct-trade relationships with 12 origin farms',
                'Small-batch production — never mass manufactured',
                'Zero artificial flavors, colors, or preservatives',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                    ✓
                  </span>
                  <span className="text-cream-100/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
