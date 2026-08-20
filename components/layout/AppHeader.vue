<template>
  <header class="w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-200 font-urbanist">
    <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-20">
        <!-- Logo PHRI (using Rectangle.svg) -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group shrink-0">
          <img
            src="/images/logo/Rectangle.svg"
            alt="PHRI Logo"
            class="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Center Nav Links -->
        <nav class="hidden md:flex items-center space-x-2 lg:space-x-6 text-[16px] font-medium font-urbanist">
          <!-- Beranda (Active Pill Button) -->
          <NuxtLink
            :to="localePath('/')"
            class="px-5 py-2 rounded-xl transition-all duration-150 font-urbanist text-[16px]"
            :class="activeMenu === 'beranda' ? 'bg-amber-400 text-white font-medium shadow-sm hover:bg-amber-500' : 'text-gray-700 hover:text-amber-500 hover:bg-amber-50'"
          >
            Beranda
          </NuxtLink>

          <!-- Tentang Kami -->
          <NuxtLink
            to="#"
            class="px-4 py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium font-urbanist text-[16px]"
            :class="{ 'text-amber-500 font-semibold': activeMenu === 'tentang-kami' }"
          >
            Tentang Kami
          </NuxtLink>

          <!-- Kontak -->
          <NuxtLink
            to="#"
            class="px-4 py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium font-urbanist text-[16px]"
            :class="{ 'text-amber-500 font-semibold': activeMenu === 'kontak' }"
          >
            Kontak
          </NuxtLink>

          <!-- Bantuan -->
          <NuxtLink
            to="#"
            class="px-4 py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium font-urbanist text-[16px]"
            :class="{ 'text-amber-500 font-semibold': activeMenu === 'bantuan' }"
          >
            Bantuan
          </NuxtLink>

          <!-- Additional Links for Extended Variant -->
          <template v-if="variant === 'full'">
            <NuxtLink to="#" class="px-3 py-2 text-gray-700 hover:text-amber-500 transition-colors font-medium font-urbanist text-[16px]">
              Layanan
            </NuxtLink>
            <NuxtLink to="#" class="px-3 py-2 text-gray-700 hover:text-amber-500 transition-colors font-medium font-urbanist text-[16px]">
              Organisasi
            </NuxtLink>
            <NuxtLink to="#" class="px-3 py-2 text-gray-700 hover:text-amber-500 transition-colors font-medium font-urbanist text-[16px]">
              Member Area
            </NuxtLink>
          </template>
        </nav>

        <!-- Right Utilities -->
        <div class="flex items-center space-x-4 sm:space-x-6 font-urbanist">
          <!-- Cart Icon with Red Badge (using icon-cart.svg) -->
          <NuxtLink :to="localePath('/keranjang')" class="relative p-1 transition-transform hover:scale-105" aria-label="Cart">
            <img
              src="/images/icon/icon-cart.svg"
              alt="Keranjang"
              class="w-7 h-7 object-contain"
            />
            <ClientOnly>
              <span
                v-if="cartCount > 0"
                class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-extrabold px-1 min-w-4 h-4 rounded-full flex items-center justify-center border border-white"
                :class="{ 'animate-cart-pop': isCartBadgeAnimating }"
              >
                {{ cartCount }}
              </span>
            </ClientOnly>
          </NuxtLink>

          <!-- Language Selector ID (Urbanist 16px medium) -->
          <div class="relative flex items-center gap-1 cursor-pointer font-urbanist text-[16px] font-medium text-amber-500 hover:text-amber-600 transition-colors">
            <span>ID</span>
            <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 text-gray-700 hover:text-amber-500 rounded-lg hover:bg-gray-100"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-2 font-urbanist text-[16px] font-medium">
      <NuxtLink :to="localePath('/')" class="block px-4 py-2.5 rounded-xl bg-amber-400 text-white font-medium">
        Beranda
      </NuxtLink>
      <NuxtLink to="#" class="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-amber-50 font-medium">
        Tentang Kami
      </NuxtLink>
      <NuxtLink to="#" class="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-amber-50 font-medium">
        Kontak
      </NuxtLink>
      <NuxtLink to="#" class="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-amber-50 font-medium">
        Bantuan
      </NuxtLink>
    </div>

    <AppToast />
  </header>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useCart } from '~/composables/useCart'
import AppToast from '~/components/common/AppToast.vue'

const props = withDefaults(
  defineProps<{
    activeMenu?: string
    variant?: 'default' | 'shop' | 'full'
  }>(),
  {
    activeMenu: 'beranda',
    variant: 'default'
  }
)

const localePath = useLocalePath()
const isMobileMenuOpen = ref(false)
const { cartCount } = useCart()

const isCartBadgeAnimating = ref(false)

watch(cartCount, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    isCartBadgeAnimating.value = false
    nextTick(() => {
      isCartBadgeAnimating.value = true
      setTimeout(() => {
        isCartBadgeAnimating.value = false
      }, 300)
    })
  }
})
</script>

<style scoped>
@keyframes cart-pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

.animate-cart-pop {
  animation: cart-pop 300ms ease-in-out;
}
</style>
