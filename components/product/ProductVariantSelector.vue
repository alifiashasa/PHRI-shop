<template>
  <div :class="variant === 'on-yellow' ? 'space-y-3.5' : 'space-y-6'">
    <!-- Size Selector -->
    <div v-if="sizes && sizes.length" :class="variant === 'on-yellow' ? 'space-y-1.5' : 'space-y-2.5'">
      <div class="flex items-center justify-between text-sm font-medium">
        <span :class="variant === 'on-yellow' ? 'text-white font-medium' : 'text-[#0A0A0A] text-[14px] font-medium'">Pilih Ukuran</span>
        <button type="button" :class="variant === 'on-yellow' ? 'text-white hover:underline font-normal text-xs' : 'text-[#757575] hover:text-gray-600 font-normal text-[14px] font-urbanist'">
          Size Guide
        </button>
      </div>

      <div :class="variant === 'on-yellow' ? 'grid grid-cols-3 gap-2' : 'grid grid-cols-3 gap-2.5 sm:gap-3'">
        <button
          v-for="size in sizes"
          :key="size"
          type="button"
          :disabled="isSizeDisabled(size)"
          @click="selectSize(size)"
          class="h-[40px] px-3 rounded-[4px] text-[14px] font-normal transition-all flex items-center justify-center font-urbanist w-full"
          :class="[
            isSizeDisabled(size)
              ? 'bg-[#EDEDED] text-[#9E9E9E] border border-transparent cursor-not-allowed font-normal'
              : selectedSize === size
                ? 'bg-white border-2 border-[#EABB08] text-[#EABB08] font-normal shadow-xs'
                : 'bg-white text-[#0A0A0A] border border-gray-200 hover:border-gray-300 font-normal'
          ]"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <!-- Color Selector -->
    <div v-if="colors && colors.length" :class="variant === 'on-yellow' ? 'space-y-1.5' : 'space-y-2.5'">
      <div class="flex items-center justify-between text-sm font-medium">
        <span :class="variant === 'on-yellow' ? 'text-white font-medium' : 'text-[#0A0A0A] text-[14px] font-medium'">Pilih Warna</span>
      </div>

      <div :class="variant === 'on-yellow' ? 'grid grid-cols-3 gap-2' : 'grid grid-cols-3 gap-2.5 sm:gap-3'">
        <button
          v-for="color in colors"
          :key="color"
          type="button"
          :disabled="isColorDisabled(color)"
          @click="selectColor(color)"
          class="h-[40px] px-3 rounded-[4px] text-[14px] font-normal transition-all flex items-center justify-center font-urbanist w-full"
          :class="[
            isColorDisabled(color)
              ? 'bg-[#EDEDED] text-[#9E9E9E] border border-transparent cursor-not-allowed font-normal'
              : selectedColor === color
                ? 'bg-white border-2 border-[#EABB08] text-[#EABB08] font-normal shadow-xs'
                : 'bg-white text-[#0A0A0A] border border-gray-200 hover:border-gray-300 font-normal'
          ]"
        >
          {{ color }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    sizes?: string[]
    colors?: string[]
    disabledSizes?: string[]
    disabledColors?: string[]
    modelValueSize?: string | null
    modelValueColor?: string | null
    variant?: 'default' | 'on-yellow'
  }>(),
  {
    sizes: () => ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: () => ['Putih', 'Krem', 'Cokelat', 'Abu-abu', 'Dongker', 'Khaki'],
    disabledSizes: () => ['S', 'XXXL'],
    disabledColors: () => ['Cokelat', 'Abu-abu'],
    modelValueSize: null,
    modelValueColor: null,
    variant: 'default'
  }
)

const emit = defineEmits(['update:modelValueSize', 'update:modelValueColor', 'change'])

const selectedSize = ref<string | null>(props.modelValueSize ?? null)
const selectedColor = ref<string | null>(props.modelValueColor ?? null)

const isSizeDisabled = (size: string) => {
  return props.disabledSizes ? props.disabledSizes.includes(size) : false
}

const isColorDisabled = (color: string) => {
  return props.disabledColors ? props.disabledColors.includes(color) : false
}

// Auto select option if only 1 available option exists
const checkAutoSelect = () => {
  if (props.sizes && props.sizes.length > 0) {
    const availableSizes = props.sizes.filter(s => !isSizeDisabled(s))
    if (availableSizes.length === 1 && !selectedSize.value) {
      selectedSize.value = availableSizes[0]
      emit('update:modelValueSize', availableSizes[0])
    }
  }

  if (props.colors && props.colors.length > 0) {
    const availableColors = props.colors.filter(c => !isColorDisabled(c))
    if (availableColors.length === 1 && !selectedColor.value) {
      selectedColor.value = availableColors[0]
      emit('update:modelValueColor', availableColors[0])
    }
  }
}

onMounted(() => {
  checkAutoSelect()
})

const selectSize = (size: string) => {
  if (!isSizeDisabled(size)) {
    selectedSize.value = size
    emit('update:modelValueSize', size)
    emit('change', { size: selectedSize.value, color: selectedColor.value })
  }
}

const selectColor = (color: string) => {
  if (!isColorDisabled(color)) {
    selectedColor.value = color
    emit('update:modelValueColor', color)
    emit('change', { size: selectedSize.value, color: selectedColor.value })
  }
}

watch(
  () => props.modelValueSize,
  (newVal) => {
    selectedSize.value = newVal ?? null
  }
)

watch(
  () => props.modelValueColor,
  (newVal) => {
    selectedColor.value = newVal ?? null
  }
)
watch(
  () => [props.sizes, props.colors, props.disabledSizes, props.disabledColors],
  () => {
    checkAutoSelect()
  },
  { deep: true }
)
</script>
