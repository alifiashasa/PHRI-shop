<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>Keranjang Belanja - PHRI Shop</Title>
    </Head>

    <!-- App Header -->
    <AppHeader active-menu="beranda" variant="shop" />

    <!-- Main Container -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <!-- Breadcrumb -->
      <nav class="flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-gray-500 mb-6 sm:mb-8" aria-label="Breadcrumb">
        <NuxtLink :to="localePath('/')" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
          Beranda
        </NuxtLink>
        <span class="text-gray-400 font-medium">&gt;</span>

        <!-- Conditional detail product link if navigating from product page -->
        <template v-if="breadcrumbProduct">
          <NuxtLink :to="localePath(`/product/${breadcrumbProductId}`)" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
            Detail Produk
          </NuxtLink>
          <span class="text-gray-400 font-medium">&gt;</span>
          <NuxtLink :to="localePath(`/product/${breadcrumbProductId}`)" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
            {{ breadcrumbProduct }}
          </NuxtLink>
          <span class="text-gray-400 font-medium">&gt;</span>
        </template>

        <span class="font-bold text-gray-900">Keranjang</span>
      </nav>

      <!-- Main Cart Layout Grid (2 Columns Desktop) -->
      <ClientOnly>
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] gap-6 lg:gap-8 items-start mb-16">
          
          <!-- Left Column: Cart Items Container -->
          <div class="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-6 shadow-xs">
            <!-- Select All Header -->
            <div class="flex items-center justify-between pb-4 border-b border-gray-100">
              <label class="flex items-center gap-3 cursor-pointer select-none">
                <div class="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    :checked="isAllSelected"
                    @change="toggleSelectAll"
                    class="sr-only"
                  />
                  <div
                    class="w-6 h-6 rounded-[8px] border-2 transition-all duration-150 flex items-center justify-center"
                    :class="[
                      isAllSelected
                        ? 'bg-[#EABB08] border-[#EABB08]'
                        : 'bg-white border-[#E2E8F0] hover:border-amber-400'
                    ]"
                  >
                    <svg
                      v-if="isAllSelected"
                      class="w-3.5 h-3.5 text-white stroke-[3.5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span class="font-medium text-gray-900 text-sm sm:text-base">
                  Pilih Semua ({{ selectedItems.length }})
                </span>
              </label>
            </div>

            <!-- Items List -->
            <div v-if="cartItems.length > 0">
              <CartItem
                v-for="item in cartItems"
                :key="item.id"
                :item="item"
                @update:selected="updateItemSelection"
                @update:quantity="updateItemQuantity"
                @delete="deleteItem"
              />
            </div>

            <!-- Empty State -->
            <div v-else class="py-16 text-center">
              <div class="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/images/icon/icon-cart.svg" alt="Empty Cart" class="w-8 h-8 opacity-60" />
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900">Keranjang Belanja Kosong</h3>
              <p class="text-xs sm:text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                Belum ada produk yang ditambahkan ke keranjang Anda.
              </p>
              <NuxtLink
                :to="localePath('/')"
                class="inline-block mt-5 px-6 py-2.5 bg-[#EABB08] hover:bg-yellow-600 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                Mulai Belanja
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Summary Card -->
          <div class="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 space-y-4 shadow-xs">
            <!-- Card Header -->
            <div class="flex items-center justify-between pb-3 border-b border-gray-100">
              <h2 class="text-base sm:text-[18px] font-semibold text-gray-900">
                Ringkasan Pembelian
              </h2>
              <span class="text-xs sm:text-sm font-semibold text-gray-900">
                {{ selectedTotalQuantity }} Item
              </span>
            </div>

            <!-- Selected Items Breakdown -->
            <div v-if="selectedItems.length > 0" class="space-y-2.5 max-h-[220px] overflow-y-auto pr-1 text-xs sm:text-sm">
              <div
                v-for="item in selectedItems"
                :key="item.id"
                class="flex items-center justify-between gap-3 text-gray-700"
              >
                <span class="truncate flex-1 font-normal">
                  {{ item.quantity }}× {{ item.name }}
                </span>
                <span class="font-bold text-gray-900 shrink-0">
                  {{ formatCurrency(item.price * item.quantity) }}
                </span>
              </div>
            </div>
            <div v-else class="text-xs sm:text-sm text-gray-400 py-1">
              Belum ada item yang dipilih
            </div>

            <hr class="border-gray-100 my-3" />

            <!-- Payment Estimation Total -->
            <div class="flex items-center justify-between pt-1">
              <span class="text-xs sm:text-sm font-semibold text-gray-900">
                Estimasi Pembayaran
              </span>
              <span class="text-base sm:text-lg font-semibold text-gray-900">
                {{ formatCurrency(totalPrice) }}
              </span>
            </div>

            <!-- Checkout / Buat Pesanan Button -->
            <button
              type="button"
              :disabled="selectedItems.length === 0"
              @click="handleCreateOrder"
              class="w-full py-3.5 px-4 rounded-xl text-center font-semibold text-sm sm:text-base transition-all duration-200 shadow-xs"
              :class="[
                selectedItems.length === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                  : 'bg-[#EABB08] hover:bg-yellow-600 active:scale-[0.99] text-white cursor-pointer shadow-yellow-500/20'
              ]"
            >
              Buat Pesanan
            </button>

            <!-- Help Section -->
            <div class="pt-2 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 flex-wrap font-medium">
              <span>Butuh Bantuan?</span>
              <a href="#" class="text-gray-700 hover:text-amber-600 underline transition-colors">Hubungi Kami</a>
              <span class="text-gray-300">|</span>
              <a href="#" class="text-gray-700 hover:text-amber-600 underline transition-colors">Informasi Pengiriman</a>
            </div>
          </div>

        </div>
      </ClientOnly>

      <!-- Recommendation Section ("Rekomendasi Untuk di Beli") -->
      <section class="pt-8 border-t border-gray-200 mb-2 sm:mb-12">
        <div class="flex items-center justify-between mb-6 sm:mb-8 gap-2">
          <h2 class="font-syne text-base sm:text-2xl font-bold text-gray-900 tracking-tight">
            Rekomendasi Untuk di Beli
          </h2>

          <!-- Carousel Arrow Controls -->
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              @click="prevRecommendation"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#EABB08] hover:bg-yellow-600 text-white flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
              aria-label="Rekomendasi Sebelumnya"
            >
              <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="nextRecommendation"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#EABB08] hover:bg-yellow-600 text-white flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
              aria-label="Rekomendasi Selanjutnya"
            >
              <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Product Recommendations Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <ProductCard
            v-for="recProduct in recommendationItems"
            :key="recProduct.id"
            :product="recProduct"
          />
        </div>
      </section>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import ProductCard from '~/components/product/ProductCard.vue'
import CartItem, { type CartItemData } from '~/components/cart/CartItem.vue'
import { mockProducts, type Product } from '~/core/data/products'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const localePath = useLocalePath()

const {
  cartItems,
  selectedItems,
  selectedTotalQuantity,
  cartTotal: totalPrice,
  isAllSelected,
  removeFromCart: deleteItem,
  updateQuantity: updateItemQuantity,
  updateSelected: updateItemSelection,
  toggleSelectAll: setAllSelected
} = useCart()

// Breadcrumb parameters
const breadcrumbProduct = computed(() => (route.query.product as string) || (route.query.from === 'detail' ? 'Pajamas Unisex' : null))
const breadcrumbProductId = computed(() => (route.query.id as string) || 'featured-1')

// Checkbox select/unselect all logic
const toggleSelectAll = (event: Event) => {
  const target = event.target as HTMLInputElement
  setAllSelected(target.checked)
}

// Recommendations Carousel Dataset (reusing existing mockProducts + 1 out of stock item)
const recStartIndex = ref(0)
const recommendationList = ref<Product[]>([
  {
    id: 1,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih'],
    sizes: ['M', 'L'],
    stock: 12
  },
  {
    id: 2,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih'],
    sizes: ['M', 'L'],
    stock: 8
  },
  {
    id: 3,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih'],
    sizes: ['M', 'L'],
    stock: 5
  },
  {
    id: 5,
    name: 'PUMA Travel Backpack',
    category: 'Bag',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'],
    colors: ['Oranye', 'Hijau', 'Biru', 'Putih'],
    sizes: ['M', 'L'],
    stock: 0 // Out of Stock as in Figma screenshot!
  },
  {
    id: 'featured-1',
    name: 'Pajamas Unisex',
    category: 'Cloths',
    price: 290000,
    image: '/images/products/pajamas-unisex.webp',
    images: ['/images/products/pajamas-unisex.webp'],
    colors: ['Putih', 'Krem', 'Cokelat'],
    sizes: ['S', 'M', 'L'],
    stock: 10,
    isHighlyRecommended: true
  }
])

const recommendationItems = computed(() => {
  return recommendationList.value.slice(recStartIndex.value, recStartIndex.value + 4)
})

const prevRecommendation = () => {
  if (recStartIndex.value > 0) {
    recStartIndex.value -= 1
  } else {
    recStartIndex.value = Math.max(0, recommendationList.value.length - 4)
  }
}

const nextRecommendation = () => {
  if (recStartIndex.value + 4 < recommendationList.value.length) {
    recStartIndex.value += 1
  } else {
    recStartIndex.value = 0
  }
}

const handleCreateOrder = () => {
  if (selectedItems.value.length === 0) return
  navigateTo(localePath({
    path: '/pemesanan',
    query: route.query
  }))
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val).replace(/\s/g, '').replace('IDR', 'Rp')
}
</script>
