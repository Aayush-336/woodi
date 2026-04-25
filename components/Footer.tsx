import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'var(--sand)' }}>
      <div className="wood-divider" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/branding/Woodi%20full.svg"
              alt="Woodi"
              width={200}
              height={70}
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--warm)' }}>
              Ahmedabad&apos;s modular design studio for Kitchens, Wardrobes, and Turnkey projects tailored to your home.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5" fill={i <= 4 ? 'var(--terracotta)' : 'none'} stroke="var(--terracotta)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
              <span className="font-sans text-xs ml-1" style={{ color: 'var(--ash)' }}>4.7 · 14 Reviews</span>
            </div>
            <Image
              src="/branding/Symbol.svg"
              alt="Woodi symbol"
              width={320}
              height={120}
              className="w-[70%] h-auto mt-5 brightness-0 invert"
            />
          </div>

          {/* Quick Links */}
          <div>
            <p className="section-label mb-5">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Kitchens, Wardrobes & Turnkey Projects' },
                { href: '/contact', label: 'Contact Us' },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-sans text-sm transition-colors duration-200 hover:text-[var(--terracotta)]"
                  style={{ color: 'var(--warm)' }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Find Us</p>
            <address className="not-italic font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--warm)' }}>
              Upper Shop 4, Chandanbala Complex,<br />
              near Paldi Post Office Fatehpura,<br />
              Bhattha, Paldi, Ahmedabad – 380007
            </address>
            <a
              href="tel:+919824064960"
              className="font-sans text-sm block mb-2 hover:text-[var(--terracotta)] transition-colors"
              style={{ color: 'var(--warm)' }}
            >
              📞 +91 98240 64960
            </a>
            <a
              href="tel:+919998188432"
              className="font-sans text-sm block mb-2 hover:text-[var(--terracotta)] transition-colors"
              style={{ color: 'var(--warm)' }}
            >
              📞 +91 99981 88432
            </a>
            <a
              href="https://wa.me/919824064960"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm block hover:text-[var(--terracotta)] transition-colors"
              style={{ color: 'var(--warm)' }}
            >
              💬 WhatsApp: +91 98240 64960
            </a>
            <a
              href="https://wa.me/919998188432"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm block mt-2 hover:text-[var(--terracotta)] transition-colors"
              style={{ color: 'var(--warm)' }}
            >
              💬 WhatsApp: +91 99981 88432
            </a>
            <a
              href="https://maps.app.goo.gl/53VZJug1hfkkESYS9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm block mt-2 hover:text-[var(--terracotta)] transition-colors"
              style={{ color: 'var(--warm)' }}
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-sans text-xs" style={{ color: 'var(--ash)' }}>
            © 2026 Woodi Modular furnitures. All rights reserved.
          </p>
          <p className="font-sans text-xs" style={{ color: 'var(--ash)' }}>
            Paldi, Ahmedabad · Mon–Sat 10am–7pm
          </p>
        </div>
      </div>
    </footer>
  )
}
