import { useState } from 'react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Craft', href: '#craft' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400 text-cocoa-900 font-display text-lg font-bold">
            CF
          </span>
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold tracking-wide text-cream-50">
              The Chocolate Factory
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-cream-200/70">
              Est. 1987
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-cream-100/90 transition hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-cocoa-900 transition hover:bg-gold-500"
          >
            Shop Now
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-cream-50 transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-cream-50 transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-cream-50 transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-100/10 bg-cocoa-950/95 px-6 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-gold-400 px-5 py-3 text-center font-semibold text-cocoa-900"
              onClick={() => setOpen(false)}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
