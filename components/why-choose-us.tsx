import { Gem, FileSearch, Handshake, MapPinned, HardHat, Headset } from 'lucide-react'
import { Reveal, SectionEyebrow } from '@/components/reveal'

const FEATURES = [
  { icon: Gem, title: 'Carefully Selected Properties', body: 'A curated portfolio — not an endless list. Each home is vetted for approvals and build quality.' },
  { icon: FileSearch, title: 'Transparent Information', body: 'Carpet area, all-inclusive price, possession dates and RERA numbers, shared before you ask.' },
  { icon: Handshake, title: 'Personalized Assistance', body: 'Advisors who understand your family, your commute and your budget — in your language.' },
  { icon: MapPinned, title: 'Prime Locations', body: 'Close to metro lines, reputed schools and hospitals, with long-term appreciation in mind.' },
  { icon: HardHat, title: 'Quality-Focused Development', body: 'Independent site inspections and regular construction updates for under-construction homes.' },
  { icon: Headset, title: 'Dedicated Customer Support', body: 'Help with home loans, documentation, registration and handover — all in one place.' },
]

export function WhyChooseUs() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-ink md:text-5xl">
              Confidence at every step of your purchase.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:justify-self-end">
            Buying a home in India involves many details. We make each one clear, so you can focus on the part that
            matters — imagining life in your new home.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="bg-ivory">
              <Reveal delay={0.06 * i} className="group h-full p-8 transition-colors duration-500 hover:bg-white md:p-10">
                <span className="grid size-12 place-items-center rounded-full border border-crimson/25 text-crimson transition-colors duration-500 group-hover:bg-crimson group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-serif text-xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
