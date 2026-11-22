import { BadgeCheck, Building2, GraduationCap, Hospital, TrainFront } from 'lucide-react'
import Image from 'next/image'
import { Reveal, SectionEyebrow } from '@/components/reveal'

const HIGHLIGHTS = [
  { icon: TrainFront, label: 'Metro', detail: 'City Centre II — 1.2 km' },
  { icon: GraduationCap, label: 'Schools', detail: '3 CBSE / ICSE within 3 km' },
  { icon: Hospital, label: 'Hospitals', detail: 'Tata Medical Center — 3 km' },
  { icon: Building2, label: 'Business hubs', detail: 'Sector V IT Hub — 6 km' },
]

const PLANS = [
  { name: '3 BHK Classic', carpet: '1,450 sq. ft.', price: '₹85 Lakh' },
  { name: '3 BHK Grande', carpet: '1,680 sq. ft.', price: '₹98 Lakh' },
  { name: '4 BHK Penthouse', carpet: '2,400 sq. ft.', price: '₹1.65 Cr' },
]

export function ProjectSpotlight() {
  return (
    <section id="projects" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionEyebrow light>Signature Project</SectionEyebrow>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight md:text-6xl">
              The Residence, <em className="text-[#e0a8ae]">New Town.</em>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-white/70">
              Light-filled 3 & 4 BHK homes arranged around a two-acre landscaped podium. Every residence is
              cross-ventilated, Vastu-considered and finished with natural stone and teak.
            </p>

            <ul className="mt-10 grid grid-cols-2 gap-6">
              {HIGHLIGHTS.map(({ icon: Icon, label, detail }) => (
                <li key={label} className="border-t border-white/15 pt-4">
                  <Icon className="size-5 text-[#e0a8ae]" aria-hidden />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
                  <p className="mt-1 text-sm">{detail}</p>
                </li>
              ))}
            </ul>

            <p className="mt-10 flex items-center gap-2 text-xs text-white/50">
              <BadgeCheck className="size-4 text-crimson" aria-hidden />
              RERA: WBRERA/P/NOR/2025/00XXXX (sample)
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md sm:aspect-[4/3]">
                <Image
                  src="/images/interior.png"
                  alt="Living room with ivory walls, teak furniture, brass accents and a burgundy sofa"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-20 ml-auto w-[88%] rounded-md bg-charcoal p-6 shadow-2xl shadow-black/40 md:-mt-28 md:w-[70%] md:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0a8ae]">Floor plans & pricing</h3>
                <ul className="mt-5 divide-y divide-white/10">
                  {PLANS.map((plan) => (
                    <li key={plan.name} className="flex items-baseline justify-between gap-4 py-3">
                      <div>
                        <p className="font-medium">{plan.name}</p>
                        <p className="text-sm text-white/50">{plan.carpet} carpet</p>
                      </div>
                      <p className="font-serif text-xl">{plan.price}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 flex w-full items-center justify-center rounded-sm bg-crimson py-3.5 text-sm font-semibold transition-colors hover:bg-burgundy"
                >
                  Schedule a Site Visit
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
