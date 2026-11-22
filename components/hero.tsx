'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  })

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src="/images/hero.png"
          alt="Contemporary Indian villa with teak louvers and a reflecting pool at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24">
        <motion.p
          {...rise(0.2)}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80"
        >
          <span aria-hidden className="h-px w-10 bg-crimson" />
          Premium Residences · Across India
        </motion.p>

        <motion.h1
          {...rise(0.35)}
          className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-8xl"
        >
          Find a Home That Feels Like <em className="text-[#e0a8ae]">Yours.</em>
        </motion.h1>

        <motion.p {...rise(0.5)} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
          Discover thoughtfully designed homes, exceptional spaces, and meaningful investments across India.
        </motion.p>

        <motion.div {...rise(0.65)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#properties"
            className="group inline-flex items-center justify-center gap-3 rounded-sm bg-crimson px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-burgundy"
          >
            Explore Properties
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-ink"
          >
            Enquire Now
          </a>
        </motion.div>

        <motion.dl
          {...rise(0.85)}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 text-white sm:grid-cols-4"
        >
          {[
            ['4', 'Cities'],
            ['100%', 'RERA-registered*'],
            ['₹85 L+', 'Starting price'],
            ['2–4', 'BHK homes'],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-serif text-3xl">{value}</dd>
              <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">{label}</dd>
            </div>
          ))}
        </motion.dl>
        <p className="mt-4 flex items-center gap-2 text-xs text-white/50">
          <ShieldCheck className="size-3.5" aria-hidden />
          *Sample content for presentation. Verify RERA details on the respective state portal.
        </p>
      </div>
    </section>
  )
}
