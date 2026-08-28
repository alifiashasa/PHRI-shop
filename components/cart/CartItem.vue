<template>
  <div class="py-4 sm:py-6 border-b border-gray-100 last:border-b-0 font-urbanist">
    <!-- Main Item Row -->
    <div class="flex items-start gap-3 sm:gap-4">
      <!-- Custom Styled Checkbox -->
      <div class="pt-1 sm:pt-2 shrink-0">
        <label class="relative flex items-center justify-center cursor-pointer select-none">
          <input
            type="checkbox"
            :checked="item.selected"
            @change="onToggle"
            class="sr-only"
          />
          <div
            class="w-6 h-6 rounded-[8px] border-2 transition-all duration-150 flex items-center justify-center"
            :class="[
              item.selected
                ? 'bg-[#EABB08] border-[#EABB08]'
                : 'bg-white border-[#E2E8F0] hover:border-amber-400'
            ]"
          >
            <svg
              v-if="item.selected"
              class="w-3.5 h-3.5 text-white stroke-[3.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </label>
      </div>

      <!-- Product Image -->
      <div class="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
        <img
          :src="item.image"
          :alt="item.name"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Product Info -->
      <div class="flex-1 min-w-0 flex flex-col justify-between self-stretch">
        <div>
          <h3 class="text-sm sm:text-[17px] font-bold text-gray-900 line-clamp-2 leading-snug">
            {{ item.name }}
          </h3>

          <!-- Color & Size -->
          <p class="text-xs sm:text-[13px] text-gray-900 font-semibold mt-0.5 flex flex-wrap items-center gap-1.5">
            <span>Warna: <strong class="font-normal text-[#757575]">{{ item.color }}</strong></span>
            <span class="text-gray-300">•</span>
            <span>Ukuran: <strong class="font-normal text-[#757575]">{{ item.size }}</strong></span>
          </p>

          <!-- Edit & Hapus links -->
          <div class="flex items-center gap-2.5 text-xs mt-1 font-medium">
            <button type="button" class="text-amber-500 hover:text-amber-600 font-semibold cursor-pointer">Edit</button>
            <button type="button" @click="$emit('delete', item.id)" class="text-gray-700 hover:text-red-500 cursor-pointer">Hapus</button>
          </div>
        </div>

        <!-- Price -->
        <div class="text-sm sm:text-[17px] font-bold text-gray-900 mt-2">
          {{ formatCurrency(item.price) }}
        </div>
      </div>

      <!-- Right Side Column for Desktop -->
      <div class="hidden sm:flex flex-col items-end justify-between self-stretch shrink-0">
        <!-- Desktop Hapus button -->
        <button
          type="button"
          @click="$emit('delete', item.id)"
          class="text-xs sm:text-[14px] text-gray-800 hover:text-red-500 font-medium transition-colors cursor-pointer"
        >
          Hapus
        </button>

        <!-- Desktop Quantity Stepper (Pill style) -->
        <div class="mt-8 flex items-center justify-between w-[115px] sm:w-[125px] h-[40px] sm:h-[44px] border border-gray-200 rounded-full bg-white px-3.5 shadow-2xs">
          <button
            type="button"
            @click="decrease"
            :disabled="item.quantity <= 1"
            class="w-6 h-6 flex items-center justify-center text-gray-700 disabled:text-gray-300 hover:text-amber-500 transition-colors cursor-pointer select-none"
            aria-label="Kurangi kuantitas"
          >
            <svg class="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-base sm:text-[18px] font-bold text-gray-900 select-none">
            {{ item.quantity }}
          </span>
          <button
            type="button"
            @click="increase"
            class="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-amber-500 transition-colors cursor-pointer select-none"
            aria-label="Tambah kuantitas"
          >
            <svg class="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Quantity Stepper Row (Positioned on the Right!) -->
    <div class="flex justify-end sm:hidden mt-2">
      <div class="flex items-center justify-between w-[105px] h-[36px] border border-gray-200/90 rounded-full bg-white px-3 shadow-2xs">
        <button
          type="button"
          @click="decrease"
          :disabled="item.quantity <= 1"
          class="w-6 h-6 flex items-center justify-center text-gray-700 disabled:text-gray-300 hover:text-amber-500 transition-colors cursor-pointer select-none"
          aria-label="Kurangi kuantitas"
        >
          <svg class="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
          </svg>
        </button>
        <span class="text-sm font-bold text-gray-900 select-none">
          {{ item.quantity }}
        </span>
        <button
          type="button"
          @click="increase"
          class="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-amber-500 transition-colors cursor-pointer select-none"
          aria-label="Tambah kuantitas"
        >
          <svg class="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const props = defineProps<{
  item: CartItemData
}>()

const emit = defineEmits<{
  (e: 'update:selected', id: number | string, selected: boolean): void
  (e: 'update:quantity', id: number | string, quantity: number): void
  (e: 'delete', id: number | string): void
}>()

const onToggle = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:selected', props.item.id, target.checked)
}

const increase = () => {
  emit('update:quantity', props.item.id, props.item.quantity + 1)
}

const decrease = () => {
  if (props.item.quantity > 1) {
    emit('update:quantity', props.item.id, props.item.quantity - 1)
  }
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val).replace(/\s/g, '').replace('IDR', 'Rp')
}
</script>
