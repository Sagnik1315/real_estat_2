import { cn } from '@/lib/utils'

export function BrandLogo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#home" className={cn('group flex items-center gap-3', className)} aria-label="Varenya Estates — home">
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-sm bg-crimson font-serif text-lg text-white transition-colors group-hover:bg-burgundy"
      >
        V
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-serif text-xl tracking-wide', light ? 'text-white' : 'text-ink')}>Varenya</span>
        <span className={cn('mt-1 text-[10px] uppercase tracking-[0.35em]', light ? 'text-white/60' : 'text-stone')}>
          Estates
        </span>
      </span>
    </a>
  )
}
