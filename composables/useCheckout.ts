import { computed, watch } from 'vue'

export interface CheckoutCustomer {
  name: string
  phone: string
  address: string
  addressDetail?: string
  province?: string
  city?: string
  postalCode?: string
  email?: string
}

export interface CheckoutItem {
  id: number | string
  name: string
  price: number
  quantity: number
  color?: string
  size?: string
  image?: string
}

export interface CheckoutOrderState {
  customer: CheckoutCustomer
  items: CheckoutItem[]
  subtotal: number
  paymentFee: number
  total: number
  invoiceNumber: string
  createdAt: string
  dueAt: string
  transactionRef?: string
  paidAt?: string
  paymentMethod?: string
  courier?: string
  trackingNumber?: string
}

const defaultOrder: CheckoutOrderState = {
  customer: {
    name: 'Jhon Doe',
    phone: '+6293366353573',
    address: 'Jl Pandawa 5 No. 24, Jakarta Selatan',
    addressDetail: 'Rumah',
    province: 'DKI Jakarta',
    city: 'Jakarta Selatan',
    postalCode: '12190',
    email: 'jhondoe@gmail.com'
  },
  items: [
    {
      id: 1,
      name: 'PUMA Travel Backpack',
      price: 340000,
      quantity: 2,
      color: 'Oranye',
      size: 'XL',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
    }
  ],
  subtotal: 680000,
  paymentFee: 5000,
  total: 685000,
  invoiceNumber: 'INV-09829379293-JYU',
  createdAt: '03-Sep-2025 07:17:16',
  dueAt: '04 September 2025, 19:00',
  transactionRef: '20251056524547050021',
  paidAt: '03-Sep-2025 07:17:16',
  paymentMethod: 'NOBU QRIS',
  courier: 'Kurir Internal',
  trackingNumber: '20251056524547050021'
}

export const useCheckout = () => {
  const currentOrder = useState<CheckoutOrderState>('phri-checkout-order', () => defaultOrder)
  const isInitialized = useState<boolean>('phri-checkout-initialized', () => false)

  const saveToLocalStorage = () => {
    if (import.meta.client && isInitialized.value) {
      try {
        localStorage.setItem('phri-checkout-order', JSON.stringify(currentOrder.value))
      } catch (e) {
        console.error('Error saving checkout order to localStorage:', e)
      }
    }
  }

  const initCheckout = () => {
    if (import.meta.client && !isInitialized.value) {
      try {
        const stored = localStorage.getItem('phri-checkout-order')
        if (stored !== null) {
          const parsed = JSON.parse(stored)
          if (parsed && typeof parsed === 'object' && parsed.customer) {
            currentOrder.value = parsed
          }
        } else {
          localStorage.setItem('phri-checkout-order', JSON.stringify(defaultOrder))
        }
      } catch (e) {
        console.error('Error reading checkout order from localStorage:', e)
      } finally {
        isInitialized.value = true
      }
    }
  }

  if (import.meta.client) {
    initCheckout()
  }

  watch(
    currentOrder,
    () => {
      saveToLocalStorage()
    },
    { deep: true }
  )

  const saveOrder = (payload: {
    customer: CheckoutCustomer
    items: CheckoutItem[]
    subtotal: number
    paymentFee: number
    total: number
    invoiceNumber?: string
    createdAt?: string
    dueAt?: string
  }) => {
    initCheckout()
    const randomInv = `INV-${Date.now().toString().slice(-10)}-JYU`
    
    const now = new Date()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const fullMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    
    const formatTwoDigits = (num: number) => num.toString().padStart(2, '0')
    const formattedCreated = `${formatTwoDigits(now.getDate())}-${months[now.getMonth()]}-${now.getFullYear()} ${formatTwoDigits(now.getHours())}:${formatTwoDigits(now.getMinutes())}:${formatTwoDigits(now.getSeconds())}`
    
    const dueDate = new Date(now.getTime() + 24 * 60 * 60 * 1000)
    const formattedDue = `${formatTwoDigits(dueDate.getDate())} ${fullMonths[dueDate.getMonth()]} ${dueDate.getFullYear()}, 19:00`

    const newOrder: CheckoutOrderState = {
      customer: payload.customer,
      items: payload.items,
      subtotal: payload.subtotal,
      paymentFee: payload.paymentFee,
      total: payload.total,
      invoiceNumber: payload.invoiceNumber || randomInv,
      createdAt: payload.createdAt || formattedCreated,
      dueAt: payload.dueAt || formattedDue
    }

    currentOrder.value = newOrder
    saveToLocalStorage()
  }

  return {
    order: computed(() => currentOrder.value),
    saveOrder
  }
}
