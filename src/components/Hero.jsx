export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-burgundy-700 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Single-Origin Cacao
          </p>
          <h1 className="font-display text-5xl leading-[1.1] font-semibold text-cream-50 sm:text-6xl lg:text-7xl">
            Where every bite tells a{' '}
            <span className="italic text-gold-400">story</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-cream-200/80">
            Handcrafted Belgian chocolates made in small batches. From bean to bar,
            we honor tradition while pushing the boundaries of flavor.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-gold-400 px-8 py-4 text-sm font-bold tracking-wide text-cocoa-900 transition hover:bg-gold-500 hover:shadow-lg hover:shadow-gold-400/20"
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="rounded-full border border-cream-100/30 px-8 py-4 text-sm font-semibold tracking-wide text-cream-50 transition hover:border-gold-400/50 hover:text-gold-400"
            >
              Our Story
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-cream-100/10 pt-10">
            <div>
              <dt className="font-display text-3xl font-semibold text-gold-400">37+</dt>
              <dd className="mt-1 text-sm text-cream-200/60">Years of craft</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-gold-400">12</dt>
              <dd className="mt-1 text-sm text-cream-200/60">Origin farms</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-gold-400">50k+</dt>
              <dd className="mt-1 text-sm text-cream-200/60">Happy customers</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="float-animation relative">
            <div className="absolute -inset-4 rounded-[2rem] chocolate-shimmer opacity-40 blur-sm" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold-400/20 shadow-2xl shadow-black/40">
              <img
                src="/images/hero.jpg"
                alt="Assorted artisan chocolate truffles"
                className="h-[420px] w-full max-w-md object-cover sm:h-[500px] lg:max-w-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-cream-100/10 bg-cocoa-950/70 p-5 backdrop-blur-md">
                <p className="font-display text-lg text-cream-50">Signature Truffle Box</p>
                <p className="mt-1 text-sm text-cream-200/70">24 handcrafted pieces · $48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
