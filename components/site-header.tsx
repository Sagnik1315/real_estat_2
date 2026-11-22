'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BrandLogo } from '@/components/brand-logo'
import { CONTACT } from '@/lib/properties'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#properties', label: 'Properties' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const item of NAV) {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        solid ? 'bg-ink/95 py-3 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <BrandLogo light />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? 'true' : undefined}
                  className={cn(
                    'relative py-2 text-sm tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-crimson after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100',
                    active === item.href ? 'text-white after:scale-x-100' : 'text-white/70',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 text-sm text-white/80 transition-colors hover:text-white xl:flex"
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="hidden rounded-sm bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy sm:inline-flex"
          >
            Enquire Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-sm text-white lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4.25rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between border-b border-white/10 py-5 font-serif text-3xl',
                      active === item.href ? 'text-white' : 'text-white/70',
                    )}
                  >
                    {item.label}
                    {active === item.href && <span aria-hidden className="size-2 rounded-full bg-crimson" />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-5 pt-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-sm bg-crimson py-4 text-center font-semibold text-white"
              >
                Enquire Now
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-sm border border-white/20 py-4 text-center font-semibold text-white"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
