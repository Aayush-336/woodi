'use client'
import { useScrollReveal } from '@/components/useScrollReveal'
import Image from 'next/image'

export default function ServicesPage() {
  useScrollReveal()

  const serviceTabs = [
    { label: 'Kitchens', href: '#kitchens' },
    { label: 'Wardrobes', href: '#wardrobes' },
    { label: 'Turnkey Projects', href: '#furniture' },
    { label: 'Catalogues', href: '#catalogues' },
  ]

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

  const kitchenGallery = [
    '/projects/Rehaben Subhashish/project-01.jpeg',
    '/projects/Prafulbhai Ghatlodia/project-01.jpg',
    '/projects/Aniv Jhaveri/project-01.jpg',
    '/projects/Dushyantbhai/project-01.jpg',
    '/projects/Kitchens/kitchen-01.jpeg',
    '/projects/Kitchens/kitchen-02.jpeg',
    '/projects/Nareshbhai Chauhan/project-01.jpg',
    '/projects/kitchen_01.jpeg',
  ]

  const wardrobeGallery = [
    '/projects/Aniv Jhaveri/project-03.jpeg',
    '/projects/Aniv Jhaveri/project-04.jpeg',
    '/projects/Aniv Jhaveri/project-05.jpeg',
    '/projects/wardrobe_01.jpeg',
    '/projects/wardrobe_02.jpeg',
  ]

  const turnkeyProjects = [
    {
      client: 'Aniv Jhaveri',
      images: [
        '/projects/Aniv Jhaveri/project-01.jpg',
        '/projects/Aniv Jhaveri/project-02.jpg',
        '/projects/Aniv Jhaveri/project-03.jpeg',
        '/projects/Aniv Jhaveri/project-04.jpeg',
        '/projects/Aniv Jhaveri/project-05.jpeg',
        '/projects/Aniv Jhaveri/project-06.jpeg',
      ],
    },
    {
      client: 'Nareshbhai Chauhan',
      images: [
        '/projects/Nareshbhai Chauhan/project-01.jpg',
        '/projects/Nareshbhai Chauhan/project-02.jpg',
        '/projects/Nareshbhai Chauhan/project-03.jpg',
        '/projects/Nareshbhai Chauhan/project-04.jpg',
        '/projects/Nareshbhai Chauhan/project-05.jpeg',
      ],
      videos: [
        '/projects/Nareshbhai Chauhan/project-video-01.mp4',
      ],
    },
    {
      client: 'Dushyantbhai',
      images: [
        '/projects/Dushyantbhai/project-01.jpg',
        '/projects/Dushyantbhai/project-02.jpg',
        '/projects/Dushyantbhai/project-03.jpeg',
      ],
    },
    {
      client: 'Rehaben Subhashish',
      images: [
        '/projects/Rehaben Subhashish/project-01.jpeg',
        '/projects/Rehaben Subhashish/project-02.jpeg',
        '/projects/Rehaben Subhashish/project-03.jpeg',
      ],
    },
    {
      client: 'Maa Bhavani Caterers',
      images: [
        '/projects/Maa Bhavani Caterers/project-01.jpg',
        '/projects/Maa Bhavani Caterers/project-02.jpg',
        '/projects/Maa Bhavani Caterers/project-03.jpg',
      ],
    },
    {
      client: 'Himanshubhai Yogeshvar',
      images: [
        '/projects/Himanshubhai Yogeshvar/project-01.jpeg',
        '/projects/Himanshubhai Yogeshvar/project-02.jpeg',
      ],
    },
    {
      client: 'Ketanbhai Santivan',
      images: [
        '/projects/Ketanbhai Santivan/project-01.jpg',
        '/projects/Ketanbhai Santivan/project-02.jpg',
      ],
    },
    {
      client: 'Prafulbhai Ghatlodia',
      images: [
        '/projects/Prafulbhai Ghatlodia/project-01.jpg',
        '/projects/Prafulbhai Ghatlodia/project-02.jpeg',
        '/projects/Prafulbhai Ghatlodia/project-03.jpeg',
        '/projects/Prafulbhai Ghatlodia/project-04.jpeg',
      ],
    },
    {
      client: 'Pravinbhai Ekta',
      images: [
        '/projects/Pravinbhai Ekta/project-01.jpg',
        '/projects/Pravinbhai Ekta/project-02.jpg',
      ],
    },
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

      <section className="py-6 md:py-8" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:flex gap-3">
            {serviceTabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="text-center rounded-full px-5 py-2.5 font-sans text-sm font-medium border transition-colors hover:bg-[var(--sand)] md:whitespace-nowrap"
                style={{ borderColor: 'var(--warm)', color: 'var(--charcoal)' }}
              >
                {tab.label}
              </a>
            ))}
          </div>
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
          <p className="font-sans text-sm tracking-[0.18em] uppercase mb-2 reveal text-right italic" style={{ color: 'var(--terracotta)' }}>
            Actual Site Photos
          </p>
          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14 reveal">
            {kitchenGallery.map((image, i) => (
              <div
                key={image}
                className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-1' : ''}`}
                style={{
                  aspectRatio: i === 0 ? '2/1' : '1/1',
                  position: 'relative',
                }}
              >
                <Image
                  src={encodeURI(image)}
                  alt={`Woodi kitchen project ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
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
          <p className="font-sans text-sm tracking-[0.18em] uppercase mt-1 reveal text-right italic" style={{ color: 'var(--terracotta)' }}>
            Actual Site Photos
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-2">
            {/* Wardrobe gallery */}
            <div className="reveal-left grid grid-cols-2 gap-4">
              {wardrobeGallery.map((image, i) => (
                <div
                  key={image}
                  className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}
                  style={{
                    aspectRatio: i === 0 ? '2/1' : '1/1',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={encodeURI(image)}
                    alt={`Woodi wardrobe project ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
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

      {/* TURNKEY PROJECTS */}
      <section id="furniture" className="py-20 md:py-28 scroll-mt-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Completed Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Turnkey Projects
            </h2>
            <p className="font-body text-base mt-4 max-w-2xl mx-auto mb-6" style={{ color: 'var(--ash)' }}>
              For your 2/3/4 BHK house, we offer a complete range of furniture that includes:
            </p>
            <div
              className="max-w-3xl mx-auto rounded-2xl px-6 py-5"
              style={{ background: 'var(--sand)', border: '1px solid rgba(160,82,45,0.18)' }}
            >
              <p className="font-sans text-sm md:text-base font-semibold leading-relaxed" style={{ color: 'var(--bark)' }}>
                Modular Kitchen, Wardrobes, TV Unit, Sofa Set, Dining Table, Double Bed, Dressing & Side Table, Study Table, Safety Door, Temple, and Shoe Rack.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {turnkeyProjects.map((project, projectIndex) => (
              <div key={project.client} className={`reveal delay-${(projectIndex % 4) + 1}`}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
                  <div>
                    <p className="section-label mb-2">Client Project</p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--charcoal)' }}>
                      {project.client}
                    </h3>
                  </div>
                  <p className="font-sans text-sm" style={{ color: 'var(--ash)' }}>
                    Completed project gallery
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.images.map((image, imageIndex) => (
                    <a
                      key={image}
                      href={encodeURI(image)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden rounded-2xl shadow-sm ${imageIndex === 0 ? 'col-span-2 md:col-span-2' : ''}`}
                      style={{
                        aspectRatio: imageIndex === 0 ? '4/3' : '1/1',
                        background: 'var(--sand)',
                      }}
                    >
                      <Image
                        src={encodeURI(image)}
                        alt={`${project.client} project image`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  ))}
                  {'videos' in project && project.videos
                    ? project.videos.map((video) => (
                        <div
                          key={video}
                          className="relative overflow-hidden rounded-2xl shadow-sm col-span-2 md:col-span-2"
                          style={{
                            aspectRatio: '4/3',
                            background: 'var(--sand)',
                          }}
                        >
                          <video
                            controls
                            preload="metadata"
                            className="h-full w-full object-cover"
                          >
                            <source src={encodeURI(video)} type="video/mp4" />
                          </video>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogues" className="py-16 md:py-20 scroll-mt-20" style={{ background: 'var(--sand)' }}>
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
                We use BWP (Boiling Waterproof) plywood, HDHMR boards, and branded hardware/accessories from <b>Hettich</b>, <b>Cassetto</b>, <b>Ozone</b>, <b>Olive</b>, and <b>Ebco</b> which gives high strength, durability, and a premium finish to our products.
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
