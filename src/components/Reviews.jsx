const reviews = [
  {
    quote:
      'The Midnight Truffle Collection is unlike anything I have tasted. Rich, complex, and impossibly smooth.',
    name: 'Sarah Mitchell',
    role: 'Food Editor, Tasteful Magazine',
    rating: 5,
  },
  {
    quote:
      'I ordered the praline gift box for my mother\'s birthday. She called me crying — happy tears, of course.',
    name: 'James Okonkwo',
    role: 'Verified Customer',
    rating: 5,
  },
  {
    quote:
      'As a pastry chef, I am picky about chocolate. The Chocolate Factory earns my highest recommendation.',
    name: 'Elena Vasquez',
    role: 'Executive Pastry Chef',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-500">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa-900 sm:text-5xl">
            Loved by chocolate connoisseurs
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cocoa-900/5"
            >
              <Stars count={review.rating} />
              <p className="mt-5 flex-1 text-lg leading-relaxed text-cocoa-800/90">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-cocoa-900/5 pt-6">
                <p className="font-semibold text-cocoa-900">{review.name}</p>
                <p className="mt-0.5 text-sm text-cocoa-700/60">{review.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
