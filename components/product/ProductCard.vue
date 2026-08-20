<template>
  <div
    @click="goToDetail"
    class="group cursor-pointer flex flex-col bg-white rounded-[16px] overflow-hidden transition-all duration-300 hover:shadow-lg p-3 border border-gray-100/80 w-full"
  >
    <!-- Product Image Container -->
    <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
      <img
        :src="product.image"
        :alt="product.name"
        :class="[
          'w-full h-full object-cover transition-transform duration-300 group-hover:scale-105',
          product.stock === 0 ? 'grayscale brightness-90' : ''
        ]"
      />

      <!-- Out of Stock Badge -->
      <div
        v-if="product.stock === 0"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl bg-white/95 px-5 py-3 text-base sm:text-[17px] font-medium text-red-500 shadow-sm select-none pointer-events-none"
      >
        Stok Habis
      </div>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col flex-1 pt-2.5 pb-1 px-0.5">
      <h3 class="font-urbanist text-[15px] sm:text-[16px] font-semibold text-gray-900 line-clamp-1 group-hover:text-yellow-600 transition-colors">
        {{ product.name }}
      </h3>

      <!-- Color Chips -->
      <div v-if="product.colors && product.colors.length" class="my-2 space-y-1">
        <div class="flex flex-wrap items-center gap-1">
          <span
            v-for="(color, index) in product.colors.slice(0, 4)"
            :key="index"
            class="px-2 py-0.5 font-urbanist text-[11px] sm:text-[12px] font-normal select-none rounded-[6px] sm:rounded-[8px] transition-colors"
            :class="product.stock === 0 ? 'bg-[#9E9E9E] text-white' : 'bg-[#F4F4F4] text-[#666666]'"
          >
            {{ color }}
          </span>
        </div>
        <div v-if="product.colors.length >= 4" class="flex items-center">
          <span
            class="px-2 py-0.5 font-urbanist text-[11px] sm:text-[12px] font-normal select-none rounded-[6px] sm:rounded-[8px] transition-colors inline-block"
            :class="product.stock === 0 ? 'bg-[#9E9E9E] text-white' : 'bg-[#F4F4F4] text-[#666666]'"
          >
            +{{ product.colors.length > 4 ? product.colors.length - 4 : 3 }}
          </span>
        </div>
      </div>

      <!-- Price -->
      <div class="mt-auto pt-1 font-urbanist text-[15px] sm:text-[16px] font-bold text-gray-900">
        {{ formatCurrency(product.price) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product } from '~/core/data/products'

const props = defineProps<{
  product: Product
}>()

const localePath = useLocalePath()

const goToDetail = () => {
  navigateTo(localePath(`/product/${props.product.id}`))
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val).replace(/\s/g, '')
}
</script>
