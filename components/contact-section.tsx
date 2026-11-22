'use client'

import { CalendarDays, CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useActionState } from 'react'
import { submitEnquiry, type EnquiryState } from '@/app/actions'
import { Reveal, SectionEyebrow } from '@/components/reveal'
import { BUDGETS, CITIES, CONTACT, whatsappLink } from '@/lib/properties'
import { cn } from '@/lib/utils'

const initial: EnquiryState = { status: 'idle' }

export function ContactSection() {
  const [state, action, pending] = useActionState(submitEnquiry, initial)
  const err = state.errors ?? {}

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionEyebrow>Contact & Enquiry</SectionEyebrow>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-ink md:text-6xl">
            Let&apos;s Find Your <em className="text-crimson">Next Home.</em>
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Tell us a little about what you&apos;re looking for. A dedicated advisor will reach out with a personal
            shortlist — no spam, no pressure.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a
              href={whatsappLink("Hello Varenya, I'd like help finding a home.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#1f7a4d] px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp Us
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-6 py-4 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Phone className="size-4" aria-hidden />
              Call Now
            </a>
          </div>

          <ul className="mt-10 space-y-4 border-t border-border pt-8 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-crimson" aria-hidden />
              <a href={CONTACT.phoneHref} className="hover:text-crimson">{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-crimson" aria-hidden />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-crimson">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-crimson" aria-hidden />
              {CONTACT.address}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-md bg-ivory p-6 md:p-10">
            {state.status === 'success' ? (
              <div role="status" className="flex min-h-96 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-12 text-crimson" aria-hidden />
                <p className="mt-6 font-serif text-3xl text-ink">Enquiry received</p>
                <p className="mt-3 max-w-sm text-muted-foreground">{state.message}</p>
              </div>
            ) : (
              <form action={action} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" error={err.name} autoComplete="name" required />
                <Field label="Phone number" name="phone" type="tel" inputMode="tel" error={err.phone} autoComplete="tel" placeholder="98XXX XXXXX" required />
                <Field label="Email (optional)" name="email" type="email" error={err.email} autoComplete="email" className="sm:col-span-2" />
                <SelectField label="Preferred location" name="location" error={err.location} options={[...CITIES, 'Other']} />
                <SelectField
                  label="Property interest"
                  name="interest"
                  error={err.interest}
                  options={['2 BHK Apartment', '3 BHK Apartment', '4 BHK Apartment', 'Villa', 'Residential Plot', 'Commercial Property']}
                />
                <SelectField label="Budget range" name="budget" error={err.budget} options={BUDGETS.map((b) => b.label)} className="sm:col-span-2" />

                <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
                  <input type="checkbox" name="siteVisit" className="mt-0.5 size-4 accent-crimson" />
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-4 text-crimson" aria-hidden />
                    I&apos;d like to schedule a site visit
                  </span>
                </label>

                {state.status === 'error' && (
                  <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2">
                    {state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-sm bg-crimson px-8 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-burgundy disabled:opacity-70 sm:col-span-2"
                >
                  {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
                  {pending ? 'Sending…' : 'Request a Callback'}
                </button>
                <p className="text-xs text-muted-foreground sm:col-span-2">
                  By submitting, you agree to be contacted by Varenya Estates via call, SMS or WhatsApp.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const inputBase =
  'mt-2 w-full rounded-sm border bg-white px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-crimson focus:ring-2 focus:ring-crimson/15'

function Field({
  label,
  name,
  error,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string; error?: string }) {
  const id = `enquiry-${name}`
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, error ? 'border-destructive' : 'border-input')}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

function SelectField({
  label,
  name,
  error,
  options,
  className,
}: {
  label: string
  name: string
  error?: string
  options: string[]
  className?: string
}) {
  const id = `enquiry-${name}`
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, 'cursor-pointer', error ? 'border-destructive' : 'border-input')}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
