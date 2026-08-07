import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-cocoa-950 py-24">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-400">
          Stay Connected
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
          Join the Chocolate Factory family
        </h2>
        <p className="mt-4 text-lg text-cream-200/70">
          Be the first to know about new collections, seasonal releases, and
          exclusive offers for subscribers.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-gold-400/30 bg-gold-400/10 px-6 py-8">
            <p className="font-display text-2xl text-gold-400">Welcome aboard!</p>
            <p className="mt-2 text-cream-200/80">
              Thank you for subscribing. Your first treat is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-cream-100/20 bg-cocoa-900/50 px-6 py-4 text-cream-50 placeholder:text-cream-200/40 focus:border-gold-400 focus:outline-none sm:rounded-r-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold-400 px-8 py-4 font-semibold text-cocoa-900 transition hover:bg-gold-500 sm:rounded-l-none"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-cream-200/40">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
