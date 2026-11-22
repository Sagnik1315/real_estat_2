import { BrandLogo } from '@/components/brand-logo'
import { CONTACT } from '@/lib/properties'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Properties', href: '#properties' },
      { label: 'Projects', href: '#projects' },
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'Apartments', href: '#properties' },
      { label: 'Villas', href: '#properties' },
      { label: 'Residential Plots', href: '#properties' },
      { label: 'Commercial Properties', href: '#properties' },
    ],
  },
]

const SOCIAL = ['Instagram', 'Facebook', 'LinkedIn', 'YouTube']

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandLogo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Carefully selected homes and honest guidance for families and investors across India.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a href="#" className="text-white/70 transition-colors hover:text-[#e0a8ae]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0a8ae]">{col.title}</h2>
              <ul className="mt-6 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/70 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0a8ae]">Get in touch</h2>
            <address className="mt-6 space-y-3 text-sm not-italic text-white/70">
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </p>
              <p>Mon – Sun · 10:00 AM – 7:00 PM IST</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Varenya Estates. All rights reserved. Listings shown are sample content.</p>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">RERA Disclaimer</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
