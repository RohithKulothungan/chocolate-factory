const products = [
  {
    name: 'Midnight Truffle Collection',
    description: 'Dark chocolate ganache with Madagascan vanilla and a hint of sea salt.',
    price: '$48',
    image: '/images/truffles.jpg',
    tag: 'Bestseller',
  },
  {
    name: 'Single-Origin Bar Set',
    description: 'Four bars from Ecuador, Peru, Ghana, and Venezuela — taste the terroir.',
    price: '$36',
    image: '/images/bars.jpg',
    tag: 'New',
  },
  {
    name: 'Praline Gift Box',
    description: 'Hazelnut, almond, and pistachio pralines in a hand-finished keepsake box.',
    price: '$62',
    image: '/images/pralines.jpg',
    tag: 'Gift',
  },
  {
    name: 'Ruby Berry Bonbons',
    description: 'Ruby chocolate paired with freeze-dried raspberries and white chocolate.',
    price: '$42',
    image: '/images/bonbons.jpg',
    tag: 'Limited',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-500">
            Our Collection
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa-900 sm:text-5xl">
            Chocolates worth savoring
          </h2>
          <p className="mt-4 text-lg text-cocoa-700/80">
            Each piece is tempered by hand, filled with premium ingredients, and finished
            with the care only a true chocolatier can provide.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="product-card group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-cocoa-900/5 transition hover:shadow-xl hover:shadow-cocoa-900/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image h-full w-full object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-cocoa-900/80 px-3 py-1 text-xs font-semibold tracking-wide text-gold-400 backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-cocoa-900">
                    {product.name}
                  </h3>
                  <span className="shrink-0 font-semibold text-gold-500">{product.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-700/70">
                  {product.description}
                </p>
                <button
                  type="button"
                  className="mt-5 w-full rounded-full border border-cocoa-900/10 py-2.5 text-sm font-semibold text-cocoa-900 transition group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-cocoa-900"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
