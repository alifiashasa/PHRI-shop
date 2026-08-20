<template>
  <div class="w-full font-urbanist">
    <!-- Breadcrumb Skeleton -->
    <div class="flex items-center space-x-2 mb-6 sm:mb-8">
      <div class="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
      <span class="text-gray-300 font-medium">&gt;</span>
      <div class="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
    </div>

    <!-- 2-Column Product Detail Layout Skeleton -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-16">
      <!-- Left Column: Product Gallery Skeleton -->
      <div class="lg:col-span-5 flex items-start justify-center lg:justify-start w-full">
        <div class="relative w-full max-w-[495px] h-[495px] aspect-square rounded-[12px] animate-pulse bg-gray-200 overflow-hidden">
          <!-- Bottom-Right Carousel Controls Placeholder -->
          <div class="absolute bottom-4 right-4 flex items-center gap-2">
            <div class="w-[42px] h-[42px] rounded-[8px] bg-gray-300/60"></div>
            <div class="w-[42px] h-[42px] rounded-[8px] bg-gray-300/60"></div>
          </div>
        </div>
      </div>

      <!-- Right Column: Product Info Skeleton (Aligned Top & Bottom with 495px Image) -->
      <div class="lg:col-span-7 flex flex-col justify-between lg:h-[495px] gap-3.5 lg:gap-0">
        <!-- 1. Title Group Skeleton -->
        <div class="space-y-2">
          <div class="h-7 w-48 animate-pulse rounded-md bg-gray-200"></div>
          <div class="h-4 w-16 animate-pulse rounded-md bg-gray-200"></div>
        </div>

        <!-- 2. Price Group Skeleton -->
        <div class="space-y-1.5">
          <div class="h-8 w-44 animate-pulse rounded-md bg-gray-200"></div>
          <div class="h-4 w-28 animate-pulse rounded-md bg-gray-200"></div>
        </div>

        <!-- 3. Size Selector Group Skeleton -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
            <div class="h-3.5 w-16 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div class="grid grid-cols-3 gap-2.5 sm:gap-3">
            <div v-for="i in 6" :key="i" class="h-11 rounded-[10px] animate-pulse bg-gray-200"></div>
          </div>
        </div>

        <!-- 4. Color Selector Group Skeleton -->
        <div>
          <div class="h-4 w-20 animate-pulse rounded bg-gray-200 mb-2"></div>
          <div class="grid grid-cols-3 gap-2.5 sm:gap-3">
            <div v-for="i in 6" :key="i" class="h-11 rounded-[10px] animate-pulse bg-gray-200"></div>
          </div>
        </div>

        <!-- 5. Stock Count Group Skeleton -->
        <div>
          <div class="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>

        <!-- 6. Add to Cart Button Skeleton -->
        <div>
          <div class="w-full h-12 rounded-[10px] animate-pulse bg-gray-200"></div>
        </div>
      </div>
    </div>

    <!-- Product Description & Shipping Info Section Skeleton -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-gray-200 mb-16">
      <!-- Left: Description Skeleton -->
      <div class="lg:col-span-6 space-y-3">
        <div class="h-5 w-24 animate-pulse rounded bg-gray-200"></div>
        <div class="space-y-2 pt-1">
          <div class="h-3.5 w-full animate-pulse rounded bg-gray-200"></div>
          <div class="h-3.5 w-full animate-pulse rounded bg-gray-200"></div>
          <div class="h-3.5 w-4/5 animate-pulse rounded bg-gray-200"></div>
          <div class="h-3.5 w-3/5 animate-pulse rounded bg-gray-200"></div>
        </div>
        <div class="h-3.5 w-20 animate-pulse rounded bg-gray-200 mt-2"></div>
      </div>

      <!-- Right: Shipping Info Skeleton -->
      <div class="lg:col-span-6 space-y-4">
        <div class="h-5 w-44 animate-pulse rounded bg-gray-200"></div>
        <div class="space-y-4 pt-1">
          <div v-for="i in 3" :key="i" class="flex items-center gap-3">
            <div class="w-[46px] h-[46px] rounded-xl animate-pulse bg-gray-200 shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-3.5 w-full animate-pulse rounded bg-gray-200"></div>
              <div class="h-3.5 w-3/4 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rekomendasi Untuk di Beli Section Skeleton -->
    <section class="pt-8 border-t border-gray-200">
      <div class="flex items-center justify-between mb-8">
        <div class="h-7 w-56 animate-pulse rounded-md bg-gray-200"></div>
        <div class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-[8px] animate-pulse bg-gray-200"></div>
          <div class="w-9 h-9 rounded-[8px] animate-pulse bg-gray-200"></div>
        </div>
      </div>

      <!-- Recommendations Grid (4 Cards Skeleton) -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div v-for="i in 4" :key="i" class="flex flex-col bg-white rounded-[16px] p-3 border border-gray-100/80 w-full space-y-3">
          <div class="w-full aspect-square rounded-xl animate-pulse bg-gray-200"></div>
          <div class="h-4 w-3/4 animate-pulse rounded bg-gray-200 mt-1"></div>
          <div class="flex items-center gap-1.5 my-1">
            <div v-for="c in 3" :key="c" class="h-5 w-10 animate-pulse rounded-[6px] bg-gray-200"></div>
          </div>
          <div class="h-4 w-1/2 animate-pulse rounded bg-gray-200 mt-auto"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Skeleton Loading component for Product Detail page
</script>
