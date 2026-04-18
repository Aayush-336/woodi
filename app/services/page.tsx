'use client'
import { useScrollReveal } from '@/components/useScrollReveal'

export default function ServicesPage() {
  useScrollReveal()

  const marketingPdfs = [
    { name: 'Kitchens Catalogue', href: '/marketing/kitchens.pdf' },
    { name: 'Wardrobe Catalogue', href: '/marketing/wardrobe.pdf' },
    { name: 'Wardrobe Slider Catalogue', href: '/marketing/wardrobe-slider.pdf' },
    { name: 'Dressing Unit Catalogue', href: '/marketing/dressing-unit.pdf' },
    { name: 'Study Table Catalogue', href: '/marketing/study-table.pdf' },
    { name: 'Double Bed & Side Table Catalogue', href: '/marketing/double-bed-side-table.pdf' },
    { name: 'Sofa Catalogue', href: '/marketing/sofa.pdf' },
    { name: 'Misc. Items Catalogue', href: '/marketing/misc-items.pdf' },
  ]

  const kitchenTypes = [
    { name: 'L-Shaped Kitchen', desc: 'Perfect for corner spaces. Maximises storage and workflow efficiency for medium to large kitchens.' },
    { name: 'U-Shaped Kitchen', desc: 'Three walls of storage and counter space — ideal for serious home cooks who need every inch.' },
    { name: 'Straight / Parallel', desc: 'Sleek, efficient layouts for compact apartments and open-plan living spaces.' },
    { name: 'Island Kitchen', desc: 'A central island adds prep space, seating, and stunning visual appeal for spacious homes.' },
  ]

  const wardrobeTypes = [
    { name: 'Sliding Door Wardrobes', desc: 'Space-saving sliding doors with a clean, modern look. Custom internal fittings — shelves, drawers, hanging rails.' },
    { name: 'Hinged Wardrobes', desc: 'Classic hinged doors with full interior customisation. Great for bedrooms with ample floor space.' },
    { name: 'Walk-In Wardrobes', desc: 'A dedicated dressing room experience — designed around your wardrobe, jewellery, accessories, and shoes.' },
    { name: 'Loft & Utility Storage', desc: 'High-capacity overhead storage and utility wardrobes for balconies, study rooms, and laundry areas.' },
  ]

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 60%, var(--sienna), transparent 55%)' }} />
        <div className="absolute left-[-10%] bottom-[-20%] w-[500px] h-[500px] rounded-full border border-[var(--bark)] opacity-15" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <p className="section-label mb-4">What We Make</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight" style={{ color: 'var(--cream)' }}>
            Kitchens, Wardrobes<br />
            <em style={{ color: 'var(--terracotta)' }}>& Turnkey Projects.</em>
          </h1>
          <p className="font-body text-lg mt-6 max-w-xl" style={{ color: 'var(--warm)' }}>
            We create kitchens, wardrobes, and turnkey projects built for your specific space, your style, and your life.
          </p>
        </div>
      </section>

      {/* KITCHENS SECTION */}
      <section id="kitchens" className="py-20 md:py-28 scroll-mt-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-14 reveal">
            <p className="section-label mb-3">Our Specialty</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Modular Kitchens
            </h2>
            <div className="wood-divider mt-5 w-20" />
          </div>

          {/* Gallery placeholders */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14 reveal">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-1' : ''}`}
                style={{
                  aspectRatio: i === 0 ? '2/1' : '1/1',
                  background: `linear-gradient(${135 + i * 20}deg, var(--sand), var(--warm), var(--terracotta))`,
                  position: 'relative',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Kitchen Photo {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Kitchen types */}
          <div className="grid md:grid-cols-2 gap-6">
            {kitchenTypes.map((k, i) => (
              <div
                key={i}
                className={`reveal delay-${i+1} flex gap-5 p-6 rounded-2xl transition-all hover:shadow-md`}
                style={{ background: 'var(--sand)' }}
              >
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-lg mt-0.5"
                  style={{ background: 'var(--terracotta)', color: 'white' }}>
                  {['🍳','🥘','🍽️','🏝️'][i]}
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold mb-1.5" style={{ color: 'var(--charcoal)' }}>{k.name}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ash)' }}>{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARDROBES SECTION */}
      <section id="wardrobes" className="py-20 md:py-28 scroll-mt-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="mb-14 reveal">
            <p className="section-label mb-3">Storage Solutions</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Wardrobes
            </h2>
            <div className="wood-divider mt-5 w-20" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Wardrobe photo placeholders */}
            <div className="reveal-left grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{
                    aspectRatio: '1/1',
                    background: `linear-gradient(${100 + i * 30}deg, var(--warm), var(--bark))`,
                    position: 'relative',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-sans text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Wardrobe {i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Types */}
            <div className="space-y-5 reveal-right">
              {wardrobeTypes.map((w, i) => (
                <div key={i} className={`delay-${i+1} p-5 rounded-xl`} style={{ background: 'var(--cream)' }}>
                  <h3 className="font-sans text-sm font-semibold mb-1.5" style={{ color: 'var(--charcoal)' }}>{w.name}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ash)' }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM FURNITURE */}
      <section id="furniture" className="py-20 md:py-28 scroll-mt-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Highlighted Service</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Turnkey Projects
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl mx-auto" style={{ color: 'var(--ash)' }}>
              Beyond kitchens and wardrobes, we also take up Turnkey projects for coordinated home interiors and built-in furniture.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '📺', name: 'TV Units & Entertainment Walls' },
              { icon: '🍽️', name: 'Crockery & Display Units' },
              { icon: '📚', name: 'Study Tables & Shelves' },
              { icon: '🛁', name: 'Bathroom Vanity Units' },
            ].map((f, i) => (
              <div
                key={i}
                className={`reveal delay-${i+1} p-6 rounded-2xl text-center transition-all hover:shadow-md hover:-translate-y-1`}
                style={{ background: 'var(--sand)' }}
              >
                <span className="text-3xl block mb-3">{f.icon}</span>
                <p className="font-sans text-xs font-medium leading-snug" style={{ color: 'var(--charcoal)' }}>{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 reveal">
            <p className="section-label mb-3">Service Catalogues</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Download Our PDFs
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl mx-auto" style={{ color: 'var(--ash)' }}>
              Browse all available brochures for kitchens, wardrobes, and furniture categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {marketingPdfs.map((pdf, i) => (
              <a
                key={pdf.href}
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal delay-${(i % 4) + 1} flex items-center justify-between rounded-2xl px-6 py-5 transition-all hover:-translate-y-1 hover:shadow-md`}
                style={{ background: 'var(--cream)' }}
              >
                <div>
                  <p className="font-sans text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>{pdf.name}</p>
                  <p className="font-body text-sm mt-1" style={{ color: 'var(--ash)' }}>Open PDF</p>
                </div>
                <span className="font-sans text-xl" style={{ color: 'var(--terracotta)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-16 md:py-20" style={{ background: 'var(--bark)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <p className="section-label mb-4" style={{ color: 'var(--terracotta)' }}>Our Materials</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ color: 'var(--cream)' }}>
                Quality you can feel.
              </h2>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'var(--warm)' }}>
                We use BWP (Boiling Waterproof) plywood, HDHMR boards, and branded hardware/accessories from <b>Hettich</b>, <b>Cassetto</b>, <b>Ozone</b>, <b>Olive</b>, and <b>Ebco</b>. Shutters are available in lacquer, acrylic, membrane PVC, laminate, and veneer finishes.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ash)' }}>
                Come to our showroom and touch the materials yourself before you decide.
              </p>
            </div>
            <div className="reveal-right grid grid-cols-3 gap-3">
              {['BWP Plywood', 'HDHMR Boards', 'Branded Hardware', 'Branded Fittings', 'Soft-close Hinges', 'Modular Baskets'].map((m, i) => (
                <div key={i} className="p-4 rounded-xl text-center" style={{ background: 'rgba(245,240,232,0.08)', border: '1px solid rgba(245,240,232,0.1)' }}>
                  <p className="font-sans text-xs leading-snug" style={{ color: 'var(--warm)' }}>{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center" style={{ background: 'var(--terracotta)' }}>
        <div className="max-w-2xl mx-auto px-5 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: 'var(--cream)' }}>
            See how your kitchen could look.
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(245,240,232,0.85)' }}>
            We offer a free home visit and show you a 3D design before any commitment.
          </p>
          <a
            href="https://wa.me/919824064960?text=Hi%20Ketan%2C%20I%27d%20like%20to%20discuss%20my%20kitchen%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium px-8 py-4 rounded-full inline-block transition-all hover:shadow-xl hover:-translate-y-0.5"
            style={{ background: 'var(--charcoal)', color: 'var(--cream)' }}
          >
            WhatsApp for a Free Visit →
          </a>
        </div>
      </section>
    </>
  )
}
