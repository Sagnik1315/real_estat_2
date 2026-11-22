import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/properties'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Varenya, I'd like help finding a home.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid size-14 place-items-center rounded-full bg-[#1f7a4d] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  )
}
