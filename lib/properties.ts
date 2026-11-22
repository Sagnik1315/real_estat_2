export type PropertyType = 'Apartment' | 'Villa' | 'Residential Plot' | 'Commercial'
export type PropertyStatus = 'Ready to Move' | 'Under Construction' | 'New Launch'

export type Property = {
  id: string
  name: string
  locality: string
  city: string
  type: PropertyType
  bhk: number[]
  carpetArea: string
  priceFrom: number
  status: PropertyStatus
  possession: string
  image: string
  imageAlt: string
  rera: string
  amenities: string[]
  connectivity: { label: string; detail: string }[]
  floorPlans: { config: string; area: string; price: string }[]
}

export const CONTACT = {
  phoneDisplay: '+91 98300 00000',
  phoneHref: 'tel:+919830000000',
  whatsapp: '919830000000',
  email: 'hello@varenyaestates.in',
  address: 'Action Area I, New Town, Kolkata 700156',
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`

export function formatINR(value: number) {
  if (value >= 1_00_00_000) {
    const cr = value / 1_00_00_000
    return `₹${cr % 1 === 0 ? cr : cr.toFixed(2).replace(/0$/, '')} Cr`
  }
  return `₹${Math.round(value / 1_00_000)} Lakh`
}

export const CITIES = ['Kolkata', 'Mumbai', 'Bengaluru', 'Gurugram'] as const
export const PROPERTY_TYPES: PropertyType[] = ['Apartment', 'Villa', 'Residential Plot', 'Commercial']
export const BHK_OPTIONS = [2, 3, 4] as const
export const BUDGETS = [
  { label: 'Under ₹1 Cr', min: 0, max: 1_00_00_000 },
  { label: '₹1 Cr – ₹3 Cr', min: 1_00_00_000, max: 3_00_00_000 },
  { label: 'Above ₹3 Cr', min: 3_00_00_000, max: Number.POSITIVE_INFINITY },
] as const

export const PROPERTIES: Property[] = [
  {
    id: 'the-residence',
    name: 'The Residence',
    locality: 'New Town',
    city: 'Kolkata',
    type: 'Apartment',
    bhk: [3],
    carpetArea: '1,450 sq. ft.',
    priceFrom: 85_00_000,
    status: 'Under Construction',
    possession: 'Dec 2027',
    image: '/images/property-1.png',
    imageAlt: 'Modern residential tower with landscaped podium garden at dusk',
    rera: 'WBRERA/P/NOR/2025/00XXXX',
    amenities: ['Clubhouse', 'Temperature-controlled pool', 'Gymnasium', 'Kids’ play area', 'Power backup', '24×7 security'],
    connectivity: [
      { label: 'Metro', detail: 'City Centre II Metro — 1.2 km' },
      { label: 'School', detail: 'Delhi Public School, New Town — 2.5 km' },
      { label: 'Hospital', detail: 'Tata Medical Center — 3 km' },
      { label: 'Airport', detail: 'NSCBI Airport — 9 km' },
    ],
    floorPlans: [
      { config: '3 BHK Classic', area: '1,450 sq. ft.', price: '₹85 Lakh' },
      { config: '3 BHK Grande', area: '1,680 sq. ft.', price: '₹98 Lakh' },
    ],
  },
  {
    id: 'aranya-villas',
    name: 'Aranya Villas',
    locality: 'Whitefield',
    city: 'Bengaluru',
    type: 'Villa',
    bhk: [4],
    carpetArea: '3,200 sq. ft.',
    priceFrom: 3_45_00_000,
    status: 'Ready to Move',
    possession: 'Immediate',
    image: '/images/property-2.png',
    imageAlt: 'Contemporary white and wood villa with lush lawn and bougainvillea',
    rera: 'PRM/KA/RERA/1251/446/PR/XXXXXX',
    amenities: ['Private garden', 'Clubhouse', 'Jogging track', 'Rainwater harvesting', 'EV charging', 'Gated security'],
    connectivity: [
      { label: 'Metro', detail: 'Kadugodi Tree Park Metro — 1.8 km' },
      { label: 'School', detail: 'Inventure Academy — 4 km' },
      { label: 'Hospital', detail: 'Manipal Hospital, Whitefield — 3.2 km' },
      { label: 'IT Hub', detail: 'ITPL Tech Park — 2.6 km' },
    ],
    floorPlans: [
      { config: '4 BHK Villa', area: '3,200 sq. ft.', price: '₹3.45 Cr' },
      { config: '4 BHK Corner Villa', area: '3,650 sq. ft.', price: '₹3.9 Cr' },
    ],
  },
  {
    id: 'samudra-heights',
    name: 'Samudra Heights',
    locality: 'Worli',
    city: 'Mumbai',
    type: 'Apartment',
    bhk: [3, 4],
    carpetArea: '1,850 – 2,600 sq. ft.',
    priceFrom: 6_75_00_000,
    status: 'New Launch',
    possession: 'Mar 2029',
    image: '/images/property-3.png',
    imageAlt: 'Sea-facing glass residential tower overlooking the Arabian Sea at sunset',
    rera: 'P5190005XXXX',
    amenities: ['Sea-view deck', 'Infinity pool', 'Spa', 'Concierge', 'Banquet lounge', 'Valet parking'],
    connectivity: [
      { label: 'Metro', detail: 'Worli Metro (Line 3) — 900 m' },
      { label: 'School', detail: 'Podar International — 2 km' },
      { label: 'Hospital', detail: 'Breach Candy Hospital — 5 km' },
      { label: 'Sea Link', detail: 'Bandra–Worli Sea Link — 1.5 km' },
    ],
    floorPlans: [
      { config: '3 BHK Sea View', area: '1,850 sq. ft.', price: '₹6.75 Cr' },
      { config: '4 BHK Sky Residence', area: '2,600 sq. ft.', price: '₹9.4 Cr' },
    ],
  },
  {
    id: 'vatika-courtyard',
    name: 'Vatika Courtyard',
    locality: 'Sector 79',
    city: 'Gurugram',
    type: 'Apartment',
    bhk: [2, 3],
    carpetArea: '1,100 – 1,520 sq. ft.',
    priceFrom: 1_25_00_000,
    status: 'Under Construction',
    possession: 'Jun 2027',
    image: '/images/property-4.png',
    imageAlt: 'Low-rise apartment blocks around a landscaped central courtyard',
    rera: 'RC/REP/HARERA/GGM/XXX/2025',
    amenities: ['Central courtyard', 'Co-working lounge', 'Badminton court', 'Yoga deck', 'Pet park', 'Power backup'],
    connectivity: [
      { label: 'Metro', detail: 'Proposed Sector 77 Metro — 1.5 km' },
      { label: 'School', detail: 'Lotus Valley International — 3 km' },
      { label: 'Hospital', detail: 'Medanta — The Medicity — 11 km' },
      { label: 'Highway', detail: 'Dwarka Expressway — 4 km' },
    ],
    floorPlans: [
      { config: '2 BHK', area: '1,100 sq. ft.', price: '₹1.25 Cr' },
      { config: '3 BHK', area: '1,520 sq. ft.', price: '₹1.72 Cr' },
    ],
  },
]
