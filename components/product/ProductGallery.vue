<template>
  <div :class="['relative w-full aspect-square overflow-hidden bg-gray-100 shadow-sm group', roundedClass || 'rounded-2xl']">
    <!-- Main Image -->
    <img
      :src="currentImage"
      :alt="title || 'Product Gallery Image'"
      class="w-full h-full object-cover transition-all duration-300"
    />

    <!-- Badge: Highly Recommend -->
    <div v-if="showBadge && isHighlyRecommended" class="absolute top-4 left-4 z-10">
      <span class="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFCEB] text-[#DBAD1B] text-[12px] font-medium rounded-full shadow-xs border-none leading-none">
        <svg class="w-[18px] h-[18px] fill-none stroke-[#DBAD1B]" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        Highly Recommend
      </span>
    </div>

    <!-- Image Counter (Bottom Left inside image) -->
    <div v-if="showCounter" class="absolute bottom-4 left-4 z-10">
      <span class="text-gray-900 font-bold text-sm sm:text-base tracking-tight">
        {{ currentIndex + 1 }}/10
      </span>
    </div>

    <!-- Carousel Controls (Bottom Right inside image) -->
    <div v-if="showControls" class="absolute bottom-4 right-4 z-10 flex items-center gap-2">
      <button
        @click="prevImage"
        class="w-[42px] h-[42px] rounded-[8px] bg-black/20 backdrop-blur-sm border border-white hover:bg-black/30 text-gray-900 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        aria-label="Previous image"
      >
        <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextImage"
        class="w-[42px] h-[42px] rounded-[8px] bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
        aria-label="Next image"
      >
        <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    images?: string[]
    mainImage?: string
    title?: string
    showBadge?: boolean
    isHighlyRecommended?: boolean
    roundedClass?: string
    showControls?: boolean
    showCounter?: boolean
  }>(),
  {
    images: () => [],
    mainImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    title: '',
    showBadge: true,
    isHighlyRecommended: false,
    roundedClass: 'rounded-2xl',
    showControls: true,
    showCounter: true
  }
)

const currentIndex = ref(0)

const imageList = computed(() => {
  if (props.images && props.images.length > 0) {
    return props.images
  }
  return [props.mainImage]
})

const currentImage = computed(() => {
  return imageList.value[currentIndex.value] || props.mainImage
})

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = imageList.value.length - 1
  }
}

const nextImage = () => {
  if (currentIndex.value < imageList.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}
</script>
