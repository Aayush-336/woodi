'use client'
import { useScrollReveal } from '@/components/useScrollReveal'
import Link from 'next/link'

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        {/* Background image placeholder */}
        <div className="absolute inset-0 img-placeholder opacity-30" style={{ background: 'linear-gradient(135deg, #3d2b1a 0%, #6B3D1E 40%, #A0522D 100%)' }} />

        {/* Decorative wood-ring circles */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--bark)] opacity-20" />
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-[var(--bark)] opacity-15" />
        <div className="absolute right-[0%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[var(--terracotta)] opacity-20" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-2xl">
            <p className="section-label mb-5 animate-fade-in">Paldi, Ahmedabad · Est. 2022</p>
            <h1
              className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6"
              style={{ color: 'var(--cream)' }}
            >
              Furniture built<br />
              <em style={{ color: 'var(--terracotta)' }}>personally,</em><br />
              by Woodi.
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--warm)' }}>
              Ahmedabad&apos;s most personal modular kitchen studio. From L-shaped and U-shaped kitchens to wardrobes and Turnkey projects, we design every space around your life, start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919824064960?text=Hi%20Ketan%2C%20I%27d%20like%20a%20free%20kitchen%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium px-8 py-4 rounded-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
              >
                Book Free Consultation
              </a>
              <Link
                href="/services"
                className="font-sans text-sm font-medium px-8 py-4 rounded-full text-center transition-all duration-300 border hover:bg-white/5"
                style={{ borderColor: 'rgba(245,240,232,0.3)', color: 'var(--cream)' }}
              >
                View Our Work →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, var(--warm))' }} />
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--ash)' }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { num: '4+', label: 'Years of Experience' },
              { num: '20+', label: 'Projects Delivered' },
              { num: '4.7★', label: 'Google Rating' },
              { num: '1', label: 'Founder — Het Shah' },
            ].map((s, i) => (
              <div key={i} className={`reveal delay-${i + 1}`}>
                <p className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--sienna)' }}>{s.num}</p>
                <p className="font-sans text-xs tracking-wide mt-1" style={{ color: 'var(--ash)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="reveal-left">
              {/* Photo placeholder */}
              <div className="aspect-[4/5] rounded-2xl img-placeholder relative overflow-hidden shadow-xl">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--sand), var(--warm), var(--terracotta))' }} />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-white/90 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <p className="font-display text-sm font-semibold" style={{ color: 'var(--bark)' }}>Het Shah</p>
                    <p className="font-sans text-xs" style={{ color: 'var(--ash)' }}>Founder · Civil Engineer · IITRAM Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: 'var(--charcoal)' }}>
                A studio, not<br />a showroom.
              </h2>
              <div className="wood-divider mb-6 w-20" />
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--ash)' }}>
                At Woodi, we believe your home deserves more than a catalogue pick. Founded by Het Shah, a civil engineer from IITRAM Ahmedabad, we bring 4+ years of experience to kitchens, wardrobes, and Turnkey projects designed around your life.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--ash)' }}>
                From the first measurement to the final fitting, you work with a closely involved team that keeps the process personal, clear, and dependable.
              </p>
              <Link
                href="/about"
                className="font-sans text-sm font-medium inline-flex items-center gap-2 group"
                style={{ color: 'var(--terracotta)' }}
              >
                Our Story
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">What We Build</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Our Specialities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🍳',
                title: 'Modular Kitchens',
                desc: 'L-shaped, U-shaped, straight, and parallel kitchen layouts — custom-designed for your exact space, cooking habits, and taste.',
                link: '/services#kitchens',
              },
              {
                icon: '🪵',
                title: 'Wardrobes & Storage',
                desc: 'Sliding, hinged, walk-in wardrobes with internal fittings designed around your wardrobe — not a generic layout.',
                link: '/services#wardrobes',
              },
              {
                icon: '🏠',
                title: 'Turnkey Projects',
                desc: 'TV units, crockery units, study areas, and full home furniture solutions designed to match your kitchen and wardrobe aesthetic.',
                link: '/services#furniture',
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`reveal delay-${i + 1} group rounded-2xl p-7 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                style={{ background: 'var(--cream)' }}
              >
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--charcoal)' }}>{s.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--ash)' }}>{s.desc}</p>
                <Link
                  href={s.link}
                  className="font-sans text-xs font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ color: 'var(--terracotta)' }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS HIGHLIGHT ─────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Simple, personal process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Home Visit', desc: 'We\'ll visit your space, take measurements, and understand your cooking style.' },
              { step: '02', title: 'Design', desc: 'A custom 3D design crafted specifically for your kitchen space and budget.' },
              { step: '03', title: 'Approval', desc: 'We refine until you love it. No pressure, no rush.' },
              { step: '04', title: 'Installation', desc: 'Clean, professional installation with a tidy finish — usually 5–7 days.' },
            ].map((p, i) => (
              <div key={i} className={`reveal delay-${i + 1} text-center`}>
                <p className="font-display text-5xl font-semibold mb-3" style={{ color: 'var(--sand)' }}>{p.step}</p>
                <h4 className="font-sans text-sm font-semibold tracking-wide mb-2" style={{ color: 'var(--charcoal)' }}>{p.title}</h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ash)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--bark)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3" style={{ color: 'var(--terracotta)' }}>Real Customers</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--cream)' }}>
              What Ahmedabad says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Mehta',
                location: 'Paldi, Ahmedabad',
                review: 'Woodi designed our L-shaped kitchen from scratch. He thought of things we never would have — the pull-out pantry unit changed our lives! Quality is outstanding.',
                stars: 5,
              },
              {
                name: 'Rajesh Patel',
                location: 'Satellite, Ahmedabad',
                review: 'Very professional and honest. No upselling, no gimmicks. Woodi gave us exactly what we needed within our budget. The finish is absolutely premium.',
                stars: 5,
              },
              {
                name: 'Hetal Shah',
                location: 'Vastrapur, Ahmedabad',
                review: 'Got our wardrobe and kitchen both done. The coordination between both was seamless — same person, same vision. Highly recommend Woodi.',
                stars: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`reveal delay-${i + 1} rounded-2xl p-7`}
                style={{ background: 'rgba(245,240,232,0.07)', border: '1px solid rgba(245,240,232,0.1)' }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="var(--terracotta)" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--warm)' }}>
                  &ldquo;{t.review}&rdquo;
                </p>
                <div>
                  <p className="font-sans text-sm font-semibold" style={{ color: 'var(--cream)' }}>{t.name}</p>
                  <p className="font-sans text-xs" style={{ color: 'var(--ash)' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="py-20 md:py-24" style={{ background: 'var(--terracotta)' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: 'var(--cream)' }}>
            Ready for a kitchen you&apos;ll love?
          </h2>
          <p className="font-body text-base md:text-lg mb-8" style={{ color: 'rgba(245,240,232,0.85)' }}>
            A free home visit costs nothing. Let&apos;s see what&apos;s possible for your kitchen, wardrobe, or Turnkey project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919824064960?text=Hi%20Ketan%2C%20I%27d%20like%20a%20free%20home%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: 'var(--charcoal)', color: 'var(--cream)' }}
            >
              WhatsApp →
            </a>
            <a
              href="tel:+919824064960"
              className="font-sans text-sm font-medium px-8 py-4 rounded-full transition-all duration-300 border hover:bg-white/10"
              style={{ borderColor: 'rgba(245,240,232,0.5)', color: 'var(--cream)' }}
            >
              Call +91 98240 64960
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
