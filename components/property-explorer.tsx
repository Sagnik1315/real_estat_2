'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Search, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PropertyCard } from '@/components/property-card'
import { PropertyDetails } from '@/components/property-details'
import { Reveal, SectionEyebrow } from '@/components/reveal'
import { BHK_OPTIONS, BUDGETS, CITIES, PROPERTIES, PROPERTY_TYPES, type Property } from '@/lib/properties'

type Filters = { city: string; type: string; bhk: string; budget: string }
const EMPTY: Filters = { city: '', type: '', bhk: '', budget: '' }

export function PropertyExplorer() {
  const [draft, setDraft] = useState<Filters>(EMPTY)
  const [filters, setFilters] = useState<Filters>(EMPTY)
  const [selected, setSelected] = useState<Property | null>(null)

  const results = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (filters.city && p.city !== filters.city) return false
      if (filters.type && p.type !== filters.type) return false
      if (filters.bhk && !p.bhk.includes(Number(filters.bhk))) return false
      if (filters.budget) {
        const b = BUDGETS[Number(filters.budget)]
        if (p.priceFrom < b.min || p.priceFrom >= b.max) return false
      }
      return true
    })
  }, [filters])

  const isFiltered = Object.values(filters).some(Boolean)

  return (
    <section id="properties" className="relative bg-ivory pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative z-10 -mt-10 md:-mt-12">
        <Reveal>
          <form
            role="search"
            aria-label="Search properties"
            onSubmit={(e) => {
              e.preventDefault()
              setFilters(draft)
            }}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-md bg-border shadow-2xl shadow-black/10 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto]"
          >
            <FilterSelect
              label="Location"
              value={draft.city}
              onChange={(city) => setDraft({ ...draft, city })}
              placeholder="All cities"
              options={CITIES.map((c) => ({ value: c, label: c }))}
            />
            <FilterSelect
              label="Property type"
              value={draft.type}
              onChange={(type) => setDraft({ ...draft, type })}
              placeholder="Any type"
              options={PROPERTY_TYPES.map((t) => ({ value: t, label: t === 'Apartment' ? 'Apartments' : t === 'Villa' ? 'Villas' : t === 'Commercial' ? 'Commercial Properties' : 'Residential Plots' }))}
            />
            <FilterSelect
              label="Configuration"
              value={draft.bhk}
              onChange={(bhk) => setDraft({ ...draft, bhk })}
              placeholder="Any BHK"
              options={BHK_OPTIONS.map((b) => ({ value: String(b), label: `${b} BHK` }))}
            />
            <FilterSelect
              label="Budget"
              value={draft.budget}
              onChange={(budget) => setDraft({ ...draft, budget })}
              placeholder="Any budget"
              options={BUDGETS.map((b, i) => ({ value: String(i), label: b.label }))}
            />
            <button
              type="submit"
              className="flex min-h-16 items-center justify-center gap-2 bg-crimson px-8 text-sm font-semibold text-white transition-colors hover:bg-burgundy sm:col-span-2 lg:col-span-1"
            >
              <Search className="size-4" aria-hidden />
              Search
            </button>
          </form>
        </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionEyebrow>Featured Properties</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight text-ink md:text-5xl">
              Homes chosen for how you&apos;ll live in them.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <p aria-live="polite">
                <span className="font-semibold text-ink">{results.length}</span>{' '}
                {results.length === 1 ? 'property' : 'properties'} found
              </p>
              {isFiltered && (
                <button
                  type="button"
                  onClick={() => {
                    setDraft(EMPTY)
                    setFilters(EMPTY)
                  }}
                  className="inline-flex items-center gap-1.5 font-medium text-crimson underline-offset-4 hover:underline"
                >
                  <RotateCcw className="size-3.5" aria-hidden />
                  Reset
                </button>
              )}
            </div>
          </Reveal>
        </div>

        <motion.ul layout className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {results.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={i % 2 === 1 ? 'md:mt-20' : undefined}
              >
                <PropertyCard property={p} onView={() => setSelected(p)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {results.length === 0 && (
          <div className="mt-6 rounded-md border border-dashed border-input bg-white p-10 text-center">
            <p className="font-serif text-2xl text-ink">No matching homes yet.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your requirement and our advisors will shortlist options for you.
            </p>
            <a href="#contact" className="mt-6 inline-flex rounded-sm bg-crimson px-6 py-3 text-sm font-semibold text-white hover:bg-burgundy">
              Tell us what you need
            </a>
          </div>
        )}

        <p className="mt-16 text-xs text-muted-foreground">
          Listings shown are illustrative sample content. Prices, areas and RERA numbers are placeholders and do not
          represent verified availability.
        </p>
      </div>

      <PropertyDetails property={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </section>
  )
}

function FilterSelect({
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  options: { value: string; label: string }[]
}) {
  const id = `filter-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div className="relative bg-white px-5 py-3 transition-colors focus-within:bg-ivory">
      <label htmlFor={id} className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-stone">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full cursor-pointer appearance-none bg-transparent py-1 pr-6 text-base font-medium text-ink outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        className="pointer-events-none absolute right-5 bottom-5 size-3 text-crimson"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2 4l4 4 4-4" />
      </svg>
    </div>
  )
}
