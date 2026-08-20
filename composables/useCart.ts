import { computed, watch } from 'vue'

export interface CartItemData {
  id: number | string
  productId: number | string
  name: string
  image: string
  color: string
  size: string
  price: number
  quantity: number
  selected: boolean
}

export const useCart = () => {
  const cartItems = useState<CartItemData[]>('phri-cart-items', () => [])
  const isInitialized = useState<boolean>('phri-cart-initialized', () => false)

  const saveToLocalStorage = () => {
    if (import.meta.client && isInitialized.value) {
      try {
        localStorage.setItem('phri-cart', JSON.stringify(cartItems.value))
      } catch (e) {
        console.error('Error saving cart to localStorage:', e)
      }
    }
  }

  const initCart = () => {
    if (import.meta.client && !isInitialized.value) {
      try {
        const stored = localStorage.getItem('phri-cart')
        if (stored !== null) {
          const parsed = JSON.parse(stored)
          cartItems.value = Array.isArray(parsed) ? parsed : []
        } else {
          // Seed default mock cart data only if localStorage has never been set
          const defaultItems: CartItemData[] = [
            {
              id: 1,
              productId: 1,
              name: 'PUMA Travel Backpack',
              image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
              color: 'Oranye',
              size: 'XL',
              price: 290000,
              quantity: 2,
              selected: true,
            },
            {
              id: 2,
              productId: 1,
              name: 'PUMA Travel Backpack',
              image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
              color: 'Oranye',
              size: 'XL',
              price: 290000,
              quantity: 1,
              selected: true,
            },
            {
              id: 3,
              productId: 'featured-1',
              name: 'Pajamas Unisex',
              image: '/images/products/pajamas-unisex.webp',
              color: 'Oranye',
              size: 'XL',
              price: 290000,
              quantity: 1,
              selected: true,
            }
          ]
          cartItems.value = defaultItems
          localStorage.setItem('phri-cart', JSON.stringify(defaultItems))
        }
      } catch (e) {
        console.error('Error reading cart from localStorage:', e)
      } finally {
        isInitialized.value = true
      }
    }
  }

  if (import.meta.client) {
    initCart()
  }

  // Watch for deep state changes to keep localStorage in sync
  watch(
    cartItems,
    () => {
      saveToLocalStorage()
    },
    { deep: true }
  )

  const addToCart = (newItem: {
    productId: number | string
    name: string
    image: string
    color: string
    size: string
    price: number
    quantity?: number
  }) => {
    initCart()
    const qty = newItem.quantity && newItem.quantity > 0 ? newItem.quantity : 1

    // Match product + size + color combination
    const existingIndex = cartItems.value.findIndex(
      item =>
        String(item.productId) === String(newItem.productId) &&
        item.size === newItem.size &&
        item.color === newItem.color
    )

    if (existingIndex !== -1) {
      cartItems.value[existingIndex].quantity += qty
    } else {
      const newCartItem: CartItemData = {
        id: `${newItem.productId}-${newItem.color}-${newItem.size}-${Date.now()}`,
        productId: newItem.productId,
        name: newItem.name,
        image: newItem.image,
        color: newItem.color,
        size: newItem.size,
        price: newItem.price,
        quantity: qty,
        selected: true,
      }
      cartItems.value.push(newCartItem)
    }
    saveToLocalStorage()

    const { showToast } = useToast()
    showToast('Berhasil ditambahkan', 'success', 2000)
  }

  const removeFromCart = (id: number | string) => {
    initCart()
    cartItems.value = cartItems.value.filter(item => String(item.id) !== String(id))
    saveToLocalStorage()
  }

  const updateQuantity = (id: number | string, quantity: number) => {
    initCart()
    if (quantity < 1) return
    const item = cartItems.value.find(i => String(i.id) === String(id))
    if (item) {
      item.quantity = quantity
      saveToLocalStorage()
    }
  }

  const updateSelected = (id: number | string, selected: boolean) => {
    initCart()
    const item = cartItems.value.find(i => String(i.id) === String(id))
    if (item) {
      item.selected = selected
      saveToLocalStorage()
    }
  }

  const toggleSelectAll = (selected: boolean) => {
    initCart()
    cartItems.value.forEach(item => {
      item.selected = selected
    })
    saveToLocalStorage()
  }

  const clearCart = () => {
    initCart()
    cartItems.value = []
    saveToLocalStorage()
  }

  const cartCount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const selectedItems = computed(() => {
    return cartItems.value.filter(item => item.selected)
  })

  const selectedTotalQuantity = computed(() => {
    return selectedItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return selectedItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const isAllSelected = computed(() => {
    return cartItems.value.length > 0 && cartItems.value.every(item => item.selected)
  })

  return {
    cartItems,
    cartCount,
    selectedItems,
    selectedTotalQuantity,
    cartTotal,
    isAllSelected,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateSelected,
    toggleSelectAll,
    clearCart,
  }
}
