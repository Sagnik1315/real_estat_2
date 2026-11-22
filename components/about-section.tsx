import Image from 'next/image'
import { Reveal, SectionEyebrow } from '@/components/reveal'

const PILLARS = [
  { title: 'Quality, without shortcuts', body: 'Every project is assessed for construction quality, approvals and developer track record before we list it.' },
  { title: 'Customer first', body: 'One dedicated advisor from your first enquiry to possession — and long after the keys are handed over.' },
  { title: 'Nothing hidden', body: 'All-inclusive pricing, carpet area clearly stated and RERA details shared upfront.' },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src="/images/property-2.png"
              alt="Contemporary villa with a manicured lawn and flowering bougainvillea"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-md bg-crimson p-6 text-white shadow-xl md:-right-8 md:p-8">
            <p className="font-serif text-5xl">15+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/80">Years guiding families</p>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <Reveal>
            <SectionEyebrow>About Varenya</SectionEyebrow>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-ink md:text-6xl">
              Built on Trust. <br className="hidden md:block" />
              <em className="text-crimson">Designed for Life.</em>
            </h2>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              A home is the largest decision most families make. We believe it should feel calm, informed and personal.
              Varenya brings together carefully selected residences and honest guidance — so you can choose with
              confidence, not pressure.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * i}>
                <li className="flex gap-5 border-t border-border pt-6">
                  <span className="font-serif text-lg text-crimson">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
