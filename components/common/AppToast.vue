<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="fixed top-24 right-4 sm:right-8 lg:right-12 z-[99999] flex flex-col items-end gap-2 pointer-events-none font-urbanist">
        <TransitionGroup
          enter-active-class="transform transition duration-200 ease-out"
          enter-from-class="translate-y-[-8px] opacity-0 scale-95"
          enter-to-class="translate-y-0 opacity-100 scale-100"
          leave-active-class="transform transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-for="toast in toasts"
            :key="toast.id"
            class="pointer-events-auto bg-white border border-gray-100 shadow-md shadow-gray-200/50 rounded-xl px-3.5 py-2.5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800"
          >
            <!-- Check Icon -->
            <div class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <svg class="w-2.5 h-2.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <!-- Message Text -->
            <span>{{ toast.message }}</span>
          </div>
        </TransitionGroup>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { toasts } = useToast()
</script>
