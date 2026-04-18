'use client'
import { useScrollReveal } from '@/components/useScrollReveal'
import { useState } from 'react'

export default function ContactPage() {
  useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Hi Ketan, I'm ${form.name}. My number is ${form.phone}. ${form.message}`)
    window.open(`https://wa.me/919824064960?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 60% 40%, var(--terracotta), transparent 55%)' }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight" style={{ color: 'var(--cream)' }}>
            Let&apos;s talk about<br />
            <em style={{ color: 'var(--terracotta)' }}>your project.</em>
          </h1>
          <p className="font-body text-lg mt-6 max-w-lg" style={{ color: 'var(--warm)' }}>
            Reach out on WhatsApp, give us a call, or visit the showroom in Paldi. We&apos;ll personally respond.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">

            {/* Left — contact details + form */}
            <div className="reveal-left">
              <h2 className="font-display text-3xl font-semibold mb-8" style={{ color: 'var(--charcoal)' }}>
                Reach Us
              </h2>

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                <a
                  href="https://wa.me/919824064960?text=Hi%20Ketan%2C%20I%27d%20like%20a%20free%20kitchen%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-md group"
                  style={{ background: '#25D366', color: 'white' }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs opacity-80 mb-0.5">Fastest response</p>
                    <p className="font-sans text-sm font-medium">WhatsApp: +91 98240 64960</p>
                  </div>
                  <span className="ml-auto opacity-70 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://wa.me/919998188432?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-md group"
                  style={{ background: '#128C7E', color: 'white' }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs opacity-80 mb-0.5">Secondary WhatsApp</p>
                    <p className="font-sans text-sm font-medium">+91 99981 88432</p>
                  </div>
                  <span className="ml-auto opacity-70 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="tel:+919824064960"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-md group"
                  style={{ background: 'var(--sand)' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: 'var(--terracotta)', color: 'white' }}>
                    📞
                  </div>
                  <div>
                    <p className="font-sans text-xs mb-0.5" style={{ color: 'var(--ash)' }}>Call directly</p>
                    <p className="font-sans text-sm font-medium" style={{ color: 'var(--charcoal)' }}>+91 98240 64960</p>
                  </div>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: 'var(--ash)' }}>→</span>
                </a>

                <a
                  href="tel:+919998188432"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-md group"
                  style={{ background: 'var(--sand)' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: 'var(--terracotta)', color: 'white' }}>
                    📞
                  </div>
                  <div>
                    <p className="font-sans text-xs mb-0.5" style={{ color: 'var(--ash)' }}>Secondary contact</p>
                    <p className="font-sans text-sm font-medium" style={{ color: 'var(--charcoal)' }}>+91 99981 88432</p>
                  </div>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: 'var(--ash)' }}>→</span>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'var(--sand)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: 'var(--forest)', color: 'white' }}>
                    📍
                  </div>
                  <div>
                    <p className="font-sans text-xs mb-0.5" style={{ color: 'var(--ash)' }}>Showroom address</p>
                    <p className="font-sans text-sm" style={{ color: 'var(--charcoal)' }}>
                      Upper Shop 4, Chandanbala Complex, near Paldi Post Office,<br />
                      Fatehpura, Bhattha, Paldi, Ahmedabad – 380007
                    </p>
                    <p className="font-sans text-xs mt-1" style={{ color: 'var(--ash)' }}>Mon–Sat · 10 AM – 7 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick message form → sends to WhatsApp */}
              <div className="p-6 rounded-2xl" style={{ background: 'var(--sand)' }}>
                <h3 className="font-sans text-sm font-semibold mb-5" style={{ color: 'var(--charcoal)' }}>
                  Send a quick message
                </h3>
                {submitted ? (
                  <div className="text-center py-6">
                    <span className="text-4xl block mb-3">🎉</span>
                    <p className="font-sans text-sm" style={{ color: 'var(--charcoal)' }}>Message sent on WhatsApp!</p>
                    <p className="font-sans text-xs mt-1" style={{ color: 'var(--ash)' }}>We&apos;ll reply soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-sans text-xs block mb-1.5" style={{ color: 'var(--ash)' }}>Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none transition-all focus:ring-2"
                        style={{ background: 'var(--cream)', border: '1px solid var(--warm)', color: 'var(--charcoal)' }}
                        placeholder="e.g. Priya Mehta"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs block mb-1.5" style={{ color: 'var(--ash)' }}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none transition-all"
                        style={{ background: 'var(--cream)', border: '1px solid var(--warm)', color: 'var(--charcoal)' }}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs block mb-1.5" style={{ color: 'var(--ash)' }}>Tell us about your project</label>
                      <textarea
                        rows={3}
                        required
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none transition-all resize-none"
                        style={{ background: 'var(--cream)', border: '1px solid var(--warm)', color: 'var(--charcoal)' }}
                        placeholder="e.g. L-shaped kitchen, 10x12 ft room, semi-modular..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-sans text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5"
                      style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
                    >
                      Send via WhatsApp →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right — map + showroom info */}
            <div className="reveal-right space-y-6">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '340px' }}>
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

              <a
                href="https://maps.app.goo.gl/53VZJug1hfkkESYS9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans text-sm font-medium transition-all hover:shadow-md"
                style={{ background: 'var(--forest)', color: 'var(--cream)' }}
              >
                📍 Open in Google Maps
              </a>

              {/* FAQs */}
              <div className="p-6 rounded-2xl" style={{ background: 'var(--sand)' }}>
                <h3 className="font-sans text-sm font-semibold mb-5" style={{ color: 'var(--charcoal)' }}>
                  Before you visit
                </h3>
                <div className="space-y-4">
                  {[
                    { q: 'Is the home visit free?', a: 'Yes, completely free and no-obligation. We\'ll visit, take measurements, and give you a 3D design idea.' },
                    { q: 'How long does installation take?', a: 'A standard kitchen takes 5-7 working days. Larger projects with wardrobes take 10–12 days.' },
                    { q: 'Do you cover all of Ahmedabad?', a: 'Yes, we serve all areas of Ahmedabad and nearby towns. Call us to confirm your area.' },
                    { q: 'What is the starting price?', a: 'A basic modular kitchen starts around ₹75,000, depending on size and finish. Woodi will give you a precise quote after the home visit.' },
                  ].map((f, i) => (
                    <div key={i} style={{ borderBottom: i < 3 ? '1px solid var(--warm)' : 'none', paddingBottom: i < 3 ? '1rem' : '0' }}>
                      <p className="font-sans text-xs font-semibold mb-1" style={{ color: 'var(--charcoal)' }}>{f.q}</p>
                      <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--ash)' }}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
