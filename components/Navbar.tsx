'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === ''
    return pathname === href || pathname === href + '/' || pathname.startsWith(href + '/')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F5F0E8]/95 backdrop-blur-sm shadow-sm border-b border-[#E8DCC8]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="group">
          <Image
            src="/branding/woodi-complete-logo.png"
            alt="Woodi"
            width={190}
            height={60}
            priority
            className={`h-11 md:h-14 w-auto transition-all duration-300 ${scrolled ? 'opacity-100' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
                isActive(l.href)
                  ? 'text-[var(--terracotta)] font-semibold underline underline-offset-4 decoration-[var(--terracotta)] decoration-2'
                  : scrolled
                  ? 'text-[var(--charcoal)] hover:text-[var(--terracotta)]'
                  : 'text-[var(--cream)] hover:text-[var(--terracotta)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919824064960"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
            style={{
              background: 'var(--terracotta)',
              color: 'var(--cream)',
            }}
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
            style={{ background: 'var(--bark)' }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${open ? 'opacity-0' : ''}`}
            style={{ background: 'var(--bark)' }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ background: 'var(--bark)' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'var(--cream)', borderTop: '1px solid var(--sand)' }}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-sans text-base tracking-wide ${
                isActive(l.href) ? 'text-[var(--terracotta)] font-semibold' : 'text-[var(--charcoal)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919824064960"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm px-5 py-3 rounded-full text-center mt-2"
            style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
