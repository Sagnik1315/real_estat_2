import { ArrowUpRight, MapPin, Maximize2, BedDouble } from 'lucide-react'
import Image from 'next/image'
import { formatINR, type Property } from '@/lib/properties'

export function PropertyCard({ property: p, onView }: { property: Property; onView: () => void }) {
  const bhkLabel = `${p.bhk.join(' & ')} BHK`
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[5/4]">
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-sm bg-crimson px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
          {p.status}
        </span>
        <span className="absolute top-4 right-4 rounded-sm bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur">
          Sample
        </span>
        <p className="absolute bottom-5 left-5 font-serif text-3xl text-white md:text-4xl">
          {formatINR(p.priceFrom)}
          <span className="ml-2 font-sans text-sm text-white/75">onwards</span>
        </p>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl uppercase tracking-[0.08em] text-ink">{p.name}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4 text-crimson" aria-hidden />
            {p.locality}, {p.city}
          </p>
        </div>
        <button
          type="button"
          onClick={onView}
          aria-label={`View details of ${p.name}`}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:border-crimson hover:bg-crimson hover:text-white group-hover:border-crimson"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
        </button>
      </div>

      <dl className="mt-5 grid grid-cols-3 border-t border-border pt-5 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-stone">Type</dt>
          <dd className="mt-1 font-medium text-ink">{p.type}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-stone">
            <BedDouble className="size-3.5" aria-hidden />
            Config
          </dt>
          <dd className="mt-1 font-medium text-ink">{bhkLabel}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-stone">
            <Maximize2 className="size-3.5" aria-hidden />
            Carpet
          </dt>
          <dd className="mt-1 font-medium text-ink">{p.carpetArea}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onView}
        className="mt-6 text-sm font-semibold text-crimson underline decoration-crimson/30 underline-offset-[6px] transition-colors hover:decoration-crimson"
      >
        View Details
      </button>
    </article>
  )
}
