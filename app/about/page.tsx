'use client'
import { useScrollReveal } from '@/components/useScrollReveal'
import Link from 'next/link'

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 70% 50%, var(--terracotta), transparent 60%)' }} />
        {/* decorative rings */}
        <div className="absolute right-[-15%] top-[-20%] w-[500px] h-[500px] rounded-full border border-[var(--bark)] opacity-20" />
        <div className="absolute right-[-8%] top-[-10%] w-[350px] h-[350px] rounded-full border border-[var(--sienna)] opacity-15" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight" style={{ color: 'var(--cream)' }}>
            The vision behind<br />
            <em style={{ color: 'var(--terracotta)' }}>every project.</em>
          </h1>
        </div>
      </section>

      {/* ── KETAN STORY ───────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Photo */}
            <div className="reveal-left sticky top-28">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <div style={{ background: 'linear-gradient(150deg, var(--sand), var(--warm), var(--sienna))', position: 'absolute', inset: 0 }} />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full rounded-xl p-4" style={{ background: 'rgba(44,36,22,0.75)', backdropFilter: 'blur(8px)' }}>
                    <p className="font-display text-lg font-semibold" style={{ color: 'var(--cream)' }}>Het Shah</p>
                    <p className="font-sans text-xs tracking-wide" style={{ color: 'var(--warm)' }}>Founder · Civil Engineer · IITRAM Ahmedabad</p>
                    <p className="font-sans text-xs mt-1" style={{ color: 'var(--ash)' }}>4+ years in this field</p>
                  </div>
                </div>
              </div>
              <p className="font-sans text-xs text-center mt-3 italic" style={{ color: 'var(--ash)' }}>
                [ Replace with your photo ]
              </p>
            </div>

            {/* Story */}
            <div className="reveal-right">
              <p className="section-label mb-4">The Beginning</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'var(--charcoal)' }}>
                Established in 2022, building trust project by project.
              </h2>
              <div className="wood-divider mb-7 w-16" />

              <div className="space-y-5 font-body text-base leading-relaxed" style={{ color: 'var(--ash)' }}>
                <p>
                  Woodi was established in 2022 with a simple belief — every family deserves spaces designed specifically for them. Not a template, not a showroom display, but solutions crafted around how <em>you</em> actually cook, store, and live.
                </p>
                <p>
                  Led by founder Het Shah, a civil engineer from IITRAM Ahmedabad, Woodi brings 4+ years of hands-on experience to kitchens, wardrobes, and Turnkey projects across Ahmedabad. Every project — from the first measurement to the final touch-up — is handled with close personal attention.
                </p>
                <p>
                  That personal commitment is what sets Woodi apart. You speak directly with our team, get practical guidance, and stay updated throughout the process. No confusion, no unnecessary layers. Just honest work, done right.
                </p>
                <p>
                  The Woodi showroom in Paldi is open for visits — come see the materials, feel the finishes, and talk through your ideas for kitchens, wardrobes, and Turnkey projects over a cup of chai.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { num: '20+', label: 'Projects delivered' },
                  { num: '4+', label: 'Years of experience' },
                  { num: '4.7★', label: 'Google rating' },
                  { num: '100%', label: 'Personal service' },
                ].map((s, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--sand)' }}>
                    <p className="font-display text-3xl font-semibold" style={{ color: 'var(--sienna)' }}>{s.num}</p>
                    <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--ash)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">What Drives Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--charcoal)' }}>
              Our values
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Honesty First', desc: 'We tell you exactly what is possible within your budget — no hidden charges, no surprise bills.' },
              { icon: '🔨', title: 'True Craftsmanship', desc: 'We use quality materials and proper fittings. A Woodi kitchen is built to last a decade, not just a year.' },
              { icon: '👨‍👩‍👧', title: 'Family Focus', desc: 'We design for how your family actually lives — your habits, your height, your storage needs.' },
              { icon: '📐', title: 'Precision Detail', desc: 'Every millimetre matters. A kitchen that looks right and works right every single day.' },
            ].map((v, i) => (
              <div key={i} className={`reveal delay-${i+1} p-6 rounded-2xl`} style={{ background: 'var(--cream)' }}>
                <span className="text-3xl block mb-4">{v.icon}</span>
                <h3 className="font-sans text-sm font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>{v.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ash)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWROOM ──────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <p className="section-label mb-4">Visit Us</p>
              <h2 className="font-display text-4xl font-semibold mb-5" style={{ color: 'var(--charcoal)' }}>
                Come see the showroom.
              </h2>
              <div className="wood-divider mb-6 w-16" />
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'var(--ash)' }}>
                Our Paldi showroom has working kitchen displays — you can see the finish quality, open the drawers, feel the soft-close mechanisms, and understand exactly what you&apos;re investing in.
              </p>
              <address className="not-italic font-body text-sm leading-loose mb-6" style={{ color: 'var(--ash)' }}>
                Upper Shop 4, Chandanbala Complex,<br />
                Near Paldi Post Office Fatehpura,<br />
                Bhattha, Paldi, Ahmedabad – 380007
              </address>
              <p className="font-sans text-sm mb-6" style={{ color: 'var(--ash)' }}>
                🕐 Mon–Sat · 10:00 AM – 7:00 PM
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://maps.app.goo.gl/53VZJug1hfkkESYS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm px-6 py-3 rounded-full transition-all hover:shadow-md"
                  style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
                >
                  Get Directions
                </a>
                <a
                  href="tel:+919824064960"
                  className="font-sans text-sm px-6 py-3 rounded-full transition-all border hover:bg-[var(--sand)]"
                  style={{ borderColor: 'var(--warm)', color: 'var(--charcoal)' }}
                >
                  Call Before Visiting
                </a>
              </div>
            </div>
            <div className="reveal-right rounded-2xl overflow-hidden shadow-xl" style={{ height: '380px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.05765425721404!2d72.55639851093294!3d23.006831190244185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8506afe3a465%3A0xb7320afb3020a356!2sWoodi%20Modular%20furnitures!5e0!3m2!1sen!2sin!4v1776497186224!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 text-center" style={{ background: 'var(--terracotta)' }}>
        <div className="max-w-2xl mx-auto px-5 reveal">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: 'var(--cream)' }}>
            Let&apos;s design your project together.
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Start with a free home visit — no commitment needed.
          </p>
          <Link
            href="/contact"
            className="font-sans text-sm font-medium px-8 py-4 rounded-full inline-block transition-all hover:shadow-xl hover:-translate-y-0.5"
            style={{ background: 'var(--charcoal)', color: 'var(--cream)' }}
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  )
}
