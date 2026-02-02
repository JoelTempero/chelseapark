import type { ContactInfo, Award, Feature } from '../types'

export const contactInfo: ContactInfo = {
  address: '214 Rutherford Street, Nelson 7010, New Zealand',
  phone: '+64 3 546 6494',
  freephone: '0800 66 00 65',
  email: 'stay@chelseapark.co.nz',
  facebook: 'https://www.facebook.com/chelseaparkNZ',
  instagram: 'https://www.instagram.com/chelseaparknelson/',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5!2d173.284!3d-41.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38980a79cdd799%3A0x9d52b5e6d1b1f8e0!2s214%20Rutherford%20St%2C%20Nelson%207010%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz'
}

export const awards: Award[] = [
  {
    id: '1',
    title: 'Sustainable Tourism',
    image: 'https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2024/01/TIA_TSC_Lockup_with_Year-1013x1024.png'
  },
  {
    id: '2',
    title: 'Booking.com Rating',
    image: 'https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2024/01/Digital-Award-TRA-2024.png'
  },
  {
    id: '3',
    title: 'Top 1% Worldwide',
    image: 'https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2025/05/TC_BotB_thank-you-social_LL_1080-x-1350_2025.png'
  }
]

export const features: Feature[] = [
  { icon: 'wifi', text: 'Free Unlimited Wi-Fi' },
  { icon: 'tv', text: 'Sky TV in All Rooms' },
  { icon: 'utensils', text: 'Full Kitchenettes' },
  { icon: 'car', text: 'Free Car Parking' },
  { icon: 'zap', text: 'EV Charging Available' },
  { icon: 'accessibility', text: 'Wheelchair Accessible' }
]

export const bookingUrl = 'https://book-directonline.com/properties/ChelseaParkMotorLodge'
