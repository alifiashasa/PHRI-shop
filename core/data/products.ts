export interface Product {
  id: number | string
  name: string
  category: string
  price: number
  image: string
  images: string[]
  colors: string[]
  sizes: string[]
  stock: number
  description?: string
  isHighlyRecommended?: boolean
}

export interface ShippingInfo {
  id: number
  icon: string
  text: string
}

export const featuredProduct: Product = {
  id: 'featured-1',
  name: 'PAJAMAS UNISEX',
  category: 'Cloths',
  price: 290000,
  image: '/images/products/pajamas-unisex.webp',
  images: [
    '/images/products/pajamas-unisex.webp'
  ],
  colors: ['Putih', 'Krem', 'Cokelat', 'Abu-abu', 'Dongker', 'Khaki'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  stock: 12,
  description: 'Tunjukkan kebanggaanmu sebagai bagian dari industri perhotelan dan restoran Indonesia dengan Kaos Official PHRI edisi reguler. Didesain minimalis namun elegan, kaos ini menampilkan logo resmi PHRI yang dicetak menggunakan teknik sablon berkualitas tinggi.',
  isHighlyRecommended: true
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 12,
    description: 'Ransel perjalanan PUMA yang stylish dan tahan lama, cocok untuk kebutuhan travel dan aktivitas sehari-hari insan hospitality.'
  },
  {
    id: 2,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 8,
    description: 'Ransel perjalanan PUMA yang stylish dan tahan lama.'
  },
  {
    id: 3,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 5,
    description: 'Ransel perjalanan PUMA yang berkualitas tinggi.'
  },
  {
    id: 4,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 15,
    description: 'Ransel edisi terbatas PHRI.'
  },
  {
    id: 5,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 0,
    description: 'Ransel perjalanan PUMA (Stok saat ini habis).'
  },
  {
    id: 6,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 20,
    description: 'Ransel perjalanan ergonomis dan modern.'
  },
  {
    id: 7,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 7,
    description: 'Ransel serbaguna untuk kebutuhan event PHRI.'
  },
  {
    id: 8,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 3,
    description: 'Ransel casual dengan material tahan air.'
  },
  {
    id: 9,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 10,
    description: 'Desain elegan cocok untuk profesional hospitality.'
  },
  {
    id: 10,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    ],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih', 'Krem', 'Hitam', 'Abu-abu'],
    sizes: ['M', 'L'],
    stock: 0,
    description: 'Ransel perjalanan PUMA (Stok saat ini habis).'
  }
]

export const shippingInfoData: ShippingInfo[] = [
  {
    id: 1,
    icon: 'truck',
    text: 'Diperkirakan tiba dalam 12–15 hari (Pulau Jawa), 20–22 hari (Luar Pulau Jawa) setelah pemesanan.'
  },
  {
    id: 2,
    icon: 'package',
    text: 'Kami menggunakan pengemasan yang aman. Apabila terdapat penambahan pengemasan, harap menghubungi kontak layanan kami.'
  },
  {
    id: 3,
    icon: 'x-circle',
    text: 'Kerusakan dalam pengantaran diluar dari tanggung jawab kami.'
  }
]
