<template>
  <div class="bg-white border-2 border-black/10 rounded-[14px] p-6 sm:p-7 shadow-none transition-all duration-200 flex flex-col justify-start items-start text-left h-full">
    <!-- Icon Container -->
    <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#9E9E9E33] text-gray-800 flex items-center justify-center mb-5 shrink-0">
      <slot name="icon">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </slot>
    </div>

    <!-- Title & Description -->
    <h3 class="text-base sm:text-lg font-bold text-gray-900 font-inter mb-2">
      {{ title }}
    </h3>
    <p class="text-sm sm:text-base text-[#717182] font-inter leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
