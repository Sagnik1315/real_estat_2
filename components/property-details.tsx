'use client'

import { BadgeCheck, CalendarDays, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { formatINR, whatsappLink, type Property } from '@/lib/properties'

export function PropertyDetails({
  property: p,
  onOpenChange,
}: {
  property: Property | null
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={!!p} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] gap-0 overflow-y-auto rounded-md bg-white p-0 text-ink sm:max-w-3xl">
        {p && (
          <>
            <div className="relative aspect-[16/9] w-full">
              <Image src={p.image} alt={p.imageAlt} fill sizes="768px" className="object-cover" />
              <span className="absolute bottom-4 left-4 rounded-sm bg-crimson px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                {p.status}
              </span>
            </div>
            <div className="p-6 md:p-10">
              <DialogTitle className="font-serif text-3xl uppercase tracking-[0.06em]">{p.name}</DialogTitle>
              <DialogDescription className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-4 text-crimson" aria-hidden />
                {p.locality}, {p.city} · {p.type} · {p.bhk.join(' & ')} BHK
              </DialogDescription>

              <dl className="mt-8 grid grid-cols-2 gap-6 rounded-md bg-ivory p-5 md:grid-cols-4">
                {[
                  ['Price', `${formatINR(p.priceFrom)} onwards`],
                  ['Carpet area', p.carpetArea],
                  ['Possession', p.possession],
                  ['Status', p.status],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-stone">{k}</dt>
                    <dd className="mt-1 font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Floor plans</h3>
                  <table className="mt-3 w-full text-sm">
                    <caption className="sr-only">Floor plan configurations and prices</caption>
                    <thead>
                      <tr className="border-b border-border text-left text-xs text-stone">
                        <th scope="col" className="py-2 font-medium">Configuration</th>
                        <th scope="col" className="py-2 font-medium">Carpet</th>
                        <th scope="col" className="py-2 text-right font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.floorPlans.map((f) => (
                        <tr key={f.config} className="border-b border-border/60">
                          <td className="py-3 font-medium">{f.config}</td>
                          <td className="py-3 text-muted-foreground">{f.area}</td>
                          <td className="py-3 text-right font-semibold">{f.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Connectivity</h3>
                  <ul className="mt-3 space-y-3 text-sm">
                    {p.connectivity.map((c) => (
                      <li key={c.label} className="flex gap-3">
                        <span className="w-16 shrink-0 text-stone">{c.label}</span>
                        <span>{c.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Amenities</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.amenities.map((a) => (
                    <li key={a} className="rounded-full border border-border px-3 py-1.5 text-sm">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 flex items-start gap-2 rounded-md border border-border p-4 text-sm text-muted-foreground">
                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-crimson" aria-hidden />
                <span>
                  RERA No.: <span className="font-medium text-ink">{p.rera}</span> (sample placeholder — verify on the
                  state RERA portal before purchase).
                </span>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-crimson px-6 py-4 text-sm font-semibold text-white hover:bg-burgundy"
                >
                  <CalendarDays className="size-4" aria-hidden />
                  Book a Site Visit
                </a>
                <a
                  href={whatsappLink(`Hello, I'd like details on ${p.name}, ${p.locality}, ${p.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-ink px-6 py-4 text-sm font-semibold text-ink hover:bg-ink hover:text-white"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
