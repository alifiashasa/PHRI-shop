<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>PHRI Shop - Produk Terbaik Perhimpunan Hotel & Restoran Indonesia</Title>
      <Meta name="description" content="Koleksi produk resmi PHRI yang dirancang untuk merepresentasikan kebanggaan dan profesionalisme insan hospitality Indonesia." />
    </Head>

    <!-- Header / Navbar -->
    <AppHeader active-menu="beranda" variant="default" />

    <!-- Hero Section (#FEFDE8, Full Screen Width, Min-h 913px) -->
    <section class="relative bg-[#FEFDE8] w-full min-h-[913px] pt-16 pb-12 flex flex-col justify-between items-center overflow-hidden font-urbanist">
      <div class="w-full text-center flex flex-col items-center">
        <!-- Headline (Font Urbanist, 48px, #CE9404) -->
        <h2 class="text-2xl sm:text-3xl md:text-[48px] font-medium text-[#CE9404] tracking-tight font-urbanist leading-tight">
          Produk Terbaik Perhimpunan
        </h2>

        <!-- Highlight (Font Syne, 48px) -->
        <h1 class="text-2xl sm:text-3xl md:text-[48px] font-bold text-indigo-950 mt-6 mb-10 tracking-tight font-syne leading-tight">
          Hotel & Restoran Indonesia
        </h1>

        <!-- Description (20px font size, #757575) -->
        <p class="max-w-2xl mx-auto text-base sm:text-[20px] text-[#757575] font-normal leading-relaxed mb-6 px-4 font-urbanist">
          Koleksi produk resmi PHRI yang dirancang untuk merepresentasikan kebanggaan dan profesionalisme insan hospitality Indonesia.
        </p>

        <!-- CTA Button (Hero Section) -->
        <div class="flex justify-center mb-4 relative z-10">
          <a
            href="#produk-kami"
            @click.prevent="scrollToProdukKami"
            class="inline-flex items-center justify-center px-8 py-3.5 bg-[#FEFDE8] hover:bg-white text-[#EABB08] font-medium text-base sm:text-[20px] rounded-2xl border border-amber-100/60 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer font-urbanist"
          >
            Belanja Sekarang
          </a>
        </div>

        <!-- Hero Showcase Marquee (Straight aligned cards, continuous animation) -->
        <div class="w-full mt-4 sm:mt-8">
          <ClientOnly>
            <HeroMarquee />
          </ClientOnly>
        </div>
      </div>
    </section>

    <!-- Featured Product Section (Full Width Golden Yellow Section, Height 644px) -->
    <section class="w-full bg-[#EAB308] min-h-[644px] py-8 lg:py-0 px-4 sm:px-8 lg:px-20 font-urbanist relative overflow-hidden flex items-center justify-center">
      <!-- Left Carousel Navigation Button (<) -->
      <button
        @click="prevFeatured"
        class="hidden lg:flex absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white bg-transparent text-white items-center justify-center transition-all hover:scale-110 hover:bg-white/20 shadow-md cursor-pointer"
        aria-label="Previous Featured Product"
      >
        <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Right Carousel Navigation Button (>) -->
      <button
        @click="nextFeatured"
        class="hidden lg:flex absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white bg-transparent text-white items-center justify-center transition-all hover:scale-110 hover:bg-white/20 shadow-md cursor-pointer"
        aria-label="Next Featured Product"
      >
        <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="max-w-[1240px] w-full mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-4 lg:gap-6 items-start w-full">
          <!-- Left: Product Image & Gallery (522px Size) -->
          <div class="flex items-start justify-center lg:justify-start w-full">
            <ProductGallery
              :main-image="featuredItem.image"
              :images="featuredItem.images"
              :title="featuredItem.name"
              :show-badge="true"
              :is-highly-recommended="featuredItem.isHighlyRecommended"
              :show-controls="false"
              :show-counter="false"
              rounded-class="rounded-xl"
              class="w-full max-w-[522px] h-[522px] aspect-square"
            />
          </div>

          <!-- Right: Product Information & Variant Selector (Aligned Top & Bottom with Image) -->
          <div class="flex flex-col justify-between text-white w-full lg:h-[522px] gap-3.5 lg:gap-0">
            <!-- 1. Title Group -->
            <div>
              <!-- Title: Bebas Neue Regular 48px (2xl) -->
              <h2 class="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-wide uppercase text-white leading-none font-bebas">
                {{ featuredItem.name }}
              </h2>
              <p class="text-white/90 text-sm sm:text-base font-normal mt-1 font-urbanist">
                {{ featuredItem.category }}
              </p>
            </div>

            <!-- 2. Price Group -->
            <div>
              <div class="text-3xl sm:text-4xl lg:text-[48px] font-normal text-white tracking-wide font-bebas leading-none">
                {{ formatCurrency(featuredItem.price) }}
              </div>
              <div class="text-xs sm:text-sm text-white/90 mt-0.5 font-urbanist">
                Termasuk pajak.
              </div>
            </div>

            <!-- 3. Size Selector Group -->
            <div>
              <ProductVariantSelector
                variant="on-yellow"
                :sizes="featuredItem.sizes"
                :colors="[]"
                v-model:model-value-size="selectedFeaturedSize"
              />
            </div>

            <!-- 4. Color Selector Group -->
            <div>
              <ProductVariantSelector
                variant="on-yellow"
                :sizes="[]"
                :colors="featuredItem.colors"
                v-model:model-value-color="selectedFeaturedColor"
              />
            </div>

            <!-- 5. Stock Group -->
            <div class="text-xs sm:text-sm font-medium text-white font-urbanist">
              Stok: {{ featuredItem.stock }}
            </div>

            <!-- 6. CTA Button -->
            <NuxtLink
              :to="localePath(`/product/${featuredItem.id}`)"
              class="w-full h-[40px] px-6 bg-[#FEFDE8] hover:bg-white text-[#EABB08] font-medium text-center text-base rounded-[10px] shadow-md transition-all duration-200 flex items-center justify-center hover:shadow-lg cursor-pointer font-urbanist"
            >
              Belanja Sekarang
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Produk Kami Section -->
    <section id="produk-kami" class="py-12 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto w-full scroll-mt-20">
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-syne text-[32px] font-semibold text-gray-900">
          Produk Kami
        </h2>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
        <ProductCard
          v-for="product in productsList"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import HeroMarquee from '~/components/HeroMarquee.vue'
import ProductCard from '~/components/product/ProductCard.vue'
import ProductGallery from '~/components/product/ProductGallery.vue'
import ProductVariantSelector from '~/components/product/ProductVariantSelector.vue'
import { featuredProduct, mockProducts } from '~/core/data/products'

const localePath = useLocalePath()

const scrollToProdukKami = () => {
  const element = document.getElementById('produk-kami')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const featuredItem = ref(featuredProduct)
const productsList = ref(mockProducts)

const selectedFeaturedSize = ref<string | null>(null)
const selectedFeaturedColor = ref<string | null>(null)

const prevFeatured = () => {
  // Cycle featured product images or dummy logic
}

const nextFeatured = () => {
  // Cycle featured product images or dummy logic
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val).replace('IDR', 'RP.').trim()
}
</script>
