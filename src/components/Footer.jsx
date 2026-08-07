export default function Footer() {
  return (
    <footer className="bg-cocoa-900 py-16 text-cream-200/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400 font-display text-lg font-bold text-cocoa-900">
                CF
              </span>
              <p className="font-display text-xl font-semibold text-cream-50">
                The Chocolate Factory
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Artisan Belgian chocolates crafted with passion since 1987.
              Ethically sourced, hand-finished, and made to be shared.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-cream-50">
              Shop
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#products" className="transition hover:text-gold-400">Truffles</a></li>
              <li><a href="#products" className="transition hover:text-gold-400">Chocolate Bars</a></li>
              <li><a href="#products" className="transition hover:text-gold-400">Gift Boxes</a></li>
              <li><a href="#products" className="transition hover:text-gold-400">Seasonal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-cream-50">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#story" className="transition hover:text-gold-400">Our Story</a></li>
              <li><a href="#craft" className="transition hover:text-gold-400">The Craft</a></li>
              <li><a href="#reviews" className="transition hover:text-gold-400">Reviews</a></li>
              <li><a href="#contact" className="transition hover:text-gold-400">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 sm:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} The Chocolate Factory. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="transition hover:text-gold-400">Privacy</a>
            <a href="#" className="transition hover:text-gold-400">Terms</a>
            <a href="#" className="transition hover:text-gold-400">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
