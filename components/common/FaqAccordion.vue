<template>
  <div class="w-full divide-y divide-gray-200/80 font-urbanist">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="py-4 sm:py-5 first:pt-0"
    >
      <!-- Question Button -->
      <button
        @click="toggleItem(index)"
        type="button"
        class="w-full flex items-center justify-between gap-4 text-left py-1.5 focus:outline-none cursor-pointer group select-none"
        :aria-expanded="openIndexes.includes(index)"
      >
        <span class="text-base sm:text-[18px] font-medium text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
          {{ item.question }}
        </span>
        <span class="shrink-0 p-1 text-gray-700 transition-transform duration-200" :class="{ 'rotate-180': openIndexes.includes(index) }">
          <svg class="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <!-- Answer Content -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out overflow-hidden"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[500px] opacity-100"
        leave-active-class="transition-all duration-200 ease-in overflow-hidden"
        leave-from-class="max-h-[500px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div v-show="openIndexes.includes(index)" class="pt-2 pb-4 text-sm sm:text-[15px] text-[#757575] font-normal leading-relaxed pr-8">
          {{ item.answer }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

export interface FaqItem {
  question: string
  answer: string
}

const props = withDefaults(
  defineProps<{
    items: FaqItem[]
    defaultOpenIndexes?: number[]
  }>(),
  {
    items: () => [],
    defaultOpenIndexes: () => []
  }
)

const openIndexes = ref<number[]>([])

onMounted(() => {
  if (props.defaultOpenIndexes && props.defaultOpenIndexes.length > 0) {
    openIndexes.value = [...props.defaultOpenIndexes]
  }
})

const toggleItem = (index: number) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter(i => i !== index)
  } else {
    openIndexes.value.push(index)
  }
}
</script>
