export interface Room {
  id: string
  slug: string
  title: string
  description: string
  sleeps: number
  bedType: string
  features: string[]
  highlights: string[]
  amenities: string[]
  images: string[]
  hasSpaBath?: boolean
  hasBalcony?: boolean
  isAccessible?: boolean
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  source: string
  rating: number
}

export interface Award {
  id: string
  title: string
  image: string
}

export interface ContactInfo {
  address: string
  phone: string
  freephone: string
  email: string
  facebook: string
  instagram: string
  mapEmbedUrl: string
}

export interface Feature {
  icon: string
  text: string
}
