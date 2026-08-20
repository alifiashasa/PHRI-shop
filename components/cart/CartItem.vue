<template>
  <div class="flex flex-col sm:flex-row items-start justify-between gap-4 py-4 sm:py-6 border-b border-gray-100 last:border-b-0 font-urbanist">
    <!-- Left Group: Checkbox + Product Image + Info -->
    <div class="flex items-start gap-3 sm:gap-4 w-full sm:w-auto flex-1">
      <!-- Custom Styled Checkbox -->
      <div class="pt-2 sm:pt-4 shrink-0">
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

      <!-- Product Details & Mobile Delete -->
      <div class="flex-1 flex flex-col justify-between min-h-[80px] sm:min-h-[112px]">
        <div>
          <!-- Desktop Title & Hapus -->
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-sm sm:text-[17px] font-semibold text-gray-900 line-clamp-2 leading-snug">
              {{ item.name }}
            </h3>
            <!-- Mobile Hapus button (visible on mobile only) -->
            <button
              type="button"
              @click="$emit('delete', item.id)"
              class="sm:hidden text-xs text-gray-400 hover:text-red-500 font-medium shrink-0 cursor-pointer"
            >
              Hapus
            </button>
          </div>

          <!-- Color & Size -->
          <p class="text-xs sm:text-[13px] text-[#0A0A0A] font-semibold mt-1 flex flex-wrap items-center gap-1.5">
            <span>Warna: <strong class="font-medium text-[#757575]">{{ item.color }}</strong></span>
            <span class="text-gray-300">•</span>
            <span>Ukuran: <strong class="font-medium text-[#757575]">{{ item.size }}</strong></span>
          </p>
        </div>

        <!-- Price -->
        <div class="text-sm sm:text-[17px] font-bold text-gray-900 mt-2">
          {{ formatCurrency(item.price) }}
        </div>
      </div>
    </div>

    <!-- Right Group: Hapus (Desktop) + Quantity Control -->
    <div class="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-50">
      <!-- Desktop Hapus button -->
      <button
        type="button"
        @click="$emit('delete', item.id)"
        class="hidden sm:block text-xs sm:text-[14px] text-[#0A0A0A] hover:text-red-500 font-medium transition-colors cursor-pointer"
      >
        Hapus
      </button>

      <!-- Quantity Selector (Figma style) -->
      <div class="sm:mt-8 flex items-center justify-between w-[115px] sm:w-[125px] h-[40px] sm:h-[44px] border border-[#E5E7EB] rounded-[14px] bg-white px-3 shadow-2xs">
        <button
          type="button"
          @click="decrease"
          :disabled="item.quantity <= 1"
          class="w-7 h-7 flex items-center justify-center text-gray-800 disabled:text-gray-300 hover:text-amber-500 disabled:hover:text-gray-300 transition-colors cursor-pointer select-none"
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
          class="w-7 h-7 flex items-center justify-center text-gray-800 hover:text-amber-500 transition-colors cursor-pointer select-none"
          aria-label="Tambah kuantitas"
        >
          <svg class="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
