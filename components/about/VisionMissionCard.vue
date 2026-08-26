<template>
  <div class="bg-white border-2 border-black/10 rounded-[14px] p-6 sm:p-8 shadow-none transition-all duration-200 flex items-start gap-4 sm:gap-5 h-full">
    <!-- Icon Container -->
    <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#9E9E9E33] text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
      <slot name="icon">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" stroke-width="1.8"/>
          <circle cx="12" cy="12" r="3" stroke-width="1.8"/>
        </svg>
      </slot>
    </div>

    <!-- Content -->
    <div class="flex-1 font-inter">
      <h3 class="text-lg sm:text-xl font-medium text-gray-900 font-inter mb-2">
        {{ title }}
      </h3>
      <p class="text-sm sm:text-base text-[#717182] font-inter leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
