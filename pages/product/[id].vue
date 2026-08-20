<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>{{ product ? `${product.name} - PHRI Shop` : 'Detail Produk - PHRI Shop' }}</Title>
    </Head>

    <!-- App Header -->
    <AppHeader active-menu="beranda" variant="shop" />

    <!-- Main Container -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <!-- Loading Skeleton State -->
      <ProductDetailSkeleton v-if="pending" />

      <!-- Loaded Product Detail -->
      <div v-else-if="product">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-gray-500 mb-6 sm:mb-8" aria-label="Breadcrumb">
          <NuxtLink :to="localePath('/')" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
            Beranda
          </NuxtLink>
          <span class="text-gray-400 font-medium">&gt;</span>
          <span class="font-bold text-gray-900">Detail Produk</span>
        </nav>
        <!-- 2-Column Product Detail Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-16">
          <!-- Left Column: Product Gallery -->
          <div class="lg:col-span-5 flex items-start justify-center lg:justify-start w-full">
            <ProductGallery
              :main-image="product.image"
              :images="product.images"
              :title="product.name"
              :show-badge="true"
              :is-highly-recommended="product?.isHighlyRecommended"
              rounded-class="rounded-[12px]"
              class="w-full max-w-[495px] h-[495px] aspect-square"
            />
          </div>

          <!-- Right Column: Product Info & Selection (Aligned Top & Bottom with 495px Image) -->
          <div class="lg:col-span-7 flex flex-col justify-between lg:h-[495px] gap-3.5 lg:gap-0">
            <!-- 1. Title Group -->
            <div>
              <h1 class="text-[20px] sm:text-3xl font-semibold text-gray-900 tracking-tight">
                {{ formatTitle(product.name) }}
              </h1>
              <p class="text-[14px] font-medium text-[#757575] mt-1">
                {{ product.category }}
              </p>
            </div>

            <!-- 2. Price Group -->
            <div>
              <div class="text-[20px] sm:text-3xl font-bold text-[#0A0A0A]">
                {{ formatCurrency(product.price) }}
              </div>
              <div class="text-[14px] text-[#0A0A0A] mt-1 font-bold">
                Termasuk pajak.
              </div>
            </div>

            <!-- 3. Size Selector Group -->
            <div>
              <ProductVariantSelector
                :sizes="product.sizes && product.sizes.length ? product.sizes : defaultSizes"
                :colors="[]"
                v-model:model-value-size="selectedSize"
              />
            </div>

            <!-- 4. Color Selector Group -->
            <div>
              <ProductVariantSelector
                :sizes="[]"
                :colors="product.colors && product.colors.length ? product.colors : defaultColors"
                v-model:model-value-color="selectedColor"
              />
            </div>

            <!-- 5. Stock Count Group -->
            <div class="text-[14px] font-medium text-[#0A0A0A]">
              Stok: {{ product.stock }}
            </div>

            <!-- 6. Add to Cart Button (Aligned with bottom of image) -->
            <button
              type="button"
              :disabled="product.stock === 0"
              @click="addToCart"
              class="w-full py-3.5 px-6 rounded-[10px] font-medium text-[16px] transition-all duration-200 shadow-sm flex items-center justify-center text-center"
              :class="[
                product.stock === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                  : 'bg-[#EABB08] text-white hover:bg-yellow-600 active:scale-[0.99] cursor-pointer shadow-yellow-500/20 shadow-sm'
              ]"
            >
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>

        <!-- Product Description & Shipping Info Section -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-gray-200 mb-16">
          <!-- Left: Description -->
          <div class="lg:col-span-6 space-y-3">
            <h3 class="text-base sm:text-lg font-semibold text-[#0A0A0A]">
              Deskripsi
            </h3>
            <p
              class="text-xs sm:text-[14px] text-[#0A0A0A] leading-relaxed transition-all"
              :class="{ 'line-clamp-3': !isExpanded }"
            >
              {{ product.description || defaultDescription }}
            </p>
            <button
              @click="isExpanded = !isExpanded"
              class="inline-flex items-center gap-1 text-[13px] font-medium text-[#EABB08] hover:text-yellow-700 transition-colors"
            >
              <span>{{ isExpanded ? 'Sembunyikan' : 'Baca semua' }}</span>
              <svg class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': isExpanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <!-- Right: Shipping Info -->
          <div class="lg:col-span-6 space-y-4">
            <h3 class="text-base sm:text-lg font-semibold text-gray-900">
              Informasi Pengiriman
            </h3>
            <div class="space-y-3">
                <div
                  v-for="info in shippingInfoList"
                  :key="info.id"
                  class="flex items-center gap-3 text-xs sm:text-sm text-[#0A0A0A] leading-relaxed"
                >
                  <!-- Truck Icon -->
                  <img
                    v-if="info.icon === 'truck'"
                    src="/images/icon/icon-truk.svg"
                    alt="Ikon Truk"
                    class="w-[46px] h-[46px] shrink-0 object-contain"
                  />
                  <!-- Package Icon -->
                  <img
                    v-else-if="info.icon === 'package'"
                    src="/images/icon/icon-package.svg"
                    alt="Ikon Paket"
                    class="w-[46px] h-[46px] shrink-0 object-contain"
                  />
                  <!-- Warning Icon -->
                  <img
                    v-else
                    src="/images/icon/icon-warning.svg"
                    alt="Ikon Peringatan"
                    class="w-[46px] h-[46px] shrink-0 object-contain"
                  />
                  <span>{{ info.text }}</span>
                </div>
            </div>
          </div>
        </div>

        <!-- Rekomendasi Untuk di Beli Section -->
        <section class="pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between mb-8">
            <h2 class="font-syne text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Rekomendasi Untuk di Beli
            </h2>

            <!-- Carousel Navigation Arrows -->
            <div class="flex items-center gap-2">
              <button
                @click="prevRecommendation"
                class="w-9 h-9 rounded-[8px] bg-[#EABB08] hover:bg-yellow-600 text-white flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                aria-label="Previous recommendation"
              >
                <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextRecommendation"
                class="w-9 h-9 rounded-[8px] bg-[#EABB08] hover:bg-yellow-600 text-white flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                aria-label="Next recommendation"
              >
                <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Recommendations Grid reusing ProductCard -->
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <ProductCard
              v-for="recProduct in recommendations"
              :key="recProduct.id"
              :product="recProduct"
            />
          </div>
        </section>
      </div>

      <!-- Not Found State -->
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-800">Produk tidak ditemukan</h2>
        <p class="text-gray-500 mt-2">Maaf, produk yang Anda cari tidak tersedia.</p>
        <NuxtLink :to="localePath('/')" class="inline-block mt-4 px-6 py-2.5 bg-yellow-500 text-white rounded-full font-medium hover:bg-yellow-600">
          Kembali ke Beranda
        </NuxtLink>
      </div>
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
import ProductGallery from '~/components/product/ProductGallery.vue'
import ProductVariantSelector from '~/components/product/ProductVariantSelector.vue'
import ProductDetailSkeleton from '~/components/skeleton/ProductDetailSkeleton.vue'
import { featuredProduct, mockProducts, shippingInfoData, type Product } from '~/core/data/products'
import { useCart } from '~/composables/useCart'
import { useToast } from '~/composables/useToast'

const { addToCart: cartAddToCart } = useCart()
const { showToast } = useToast()

// Loading state for product detail (ready for useAsyncData / API fetch)
const pending = ref(false)

const route = useRoute()
const localePath = useLocalePath()
const productId = computed(() => route.params.id)

// Find product by route parameter ID
const product = computed<Product | undefined>(() => {
  if (String(productId.value) === 'featured-1') {
    return featuredProduct
  }
  const found = mockProducts.find(p => String(p.id) === String(productId.value))
  if (found) return found
  return undefined
})

const defaultSizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const defaultColors = ['Putih', 'Krem', 'Cokelat', 'Abu-abu', 'Dongker', 'Khaki']
const defaultDescription = 'Tunjukkan kebanggaanmu sebagai bagian dari industri perhotelan dan restoran Indonesia dengan Kaos Official PHRI edisi reguler. Didesain minimalis namun elegan, kaos ini menampilkan logo resmi PHRI yang dicetak menggunakan teknik sablon berkualitas tinggi.'

const selectedSize = ref<string | null>(null)
const selectedColor = ref<string | null>(null)
const isExpanded = ref(false)

const shippingInfoList = ref(shippingInfoData)

// Recommendations dataset (reusing mockProducts)
const recommendations = computed(() => {
  return mockProducts.slice(0, 4)
})

const prevRecommendation = () => {
  // Recommendation carousel prev logic
}

const nextRecommendation = () => {
  // Recommendation carousel next logic
}

const addToCart = () => {
  if (!product.value || product.value.stock === 0) return
  if (!selectedSize.value || !selectedColor.value) {
    alert('Harap pilih ukuran dan warna terlebih dahulu!')
    return
  }
  cartAddToCart({
    productId: product.value.id,
    name: product.value.name,
    image: product.value.image,
    color: selectedColor.value,
    size: selectedSize.value,
    price: product.value.price,
    quantity: 1
  })
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val).replace(/\s/g, '').replace('IDR', 'Rp')
}

const formatTitle = (name?: string) => {
  if (!name) return ''
  if (name === 'PAJAMAS UNISEX') return 'Pajamas Unisex'
  return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
}
</script>
