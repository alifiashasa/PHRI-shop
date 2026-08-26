<template>
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)] gap-6 lg:gap-8 items-start mb-16 font-urbanist">

    <!-- Left Column: Shipping & Contact Form Skeleton -->
    <div class="space-y-6 sm:space-y-8">

      <!-- Section 1: Dikirim Ke Skeleton -->
      <div>
        <div class="mb-5 space-y-2">
          <!-- Heading "Dikirim Ke" -->
          <div class="h-6 w-28 animate-pulse rounded bg-gray-200"></div>
          <!-- Helper text -->
          <div class="h-4 w-64 sm:w-72 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div class="space-y-4 sm:space-y-5">
          <!-- Nama Lengkap -->
          <div>
            <div class="h-4 w-24 animate-pulse rounded bg-gray-200 mb-1.5"></div>
            <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
          </div>

          <!-- Alamat -->
          <div>
            <div class="h-4 w-16 animate-pulse rounded bg-gray-200 mb-1.5"></div>
            <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
          </div>

          <!-- Detail Alamat (Optional) -->
          <div>
            <div class="h-4 w-32 animate-pulse rounded bg-gray-200 mb-1.5"></div>
            <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
          </div>

          <!-- Provinsi & Kota Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <!-- Provinsi -->
            <div>
              <div class="h-4 w-16 animate-pulse rounded bg-gray-200 mb-1.5"></div>
              <div class="relative">
                <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Kota -->
            <div>
              <div class="h-4 w-12 animate-pulse rounded bg-gray-200 mb-1.5"></div>
              <div class="relative">
                <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Kode Pos -->
          <div>
            <div class="h-4 w-20 animate-pulse rounded bg-gray-200 mb-1.5"></div>
            <div class="relative">
              <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Informasi Kontak Skeleton -->
      <div class="pt-4 border-t border-gray-100">
        <div class="mb-5 space-y-2">
          <!-- Heading "Informasi Kontak" -->
          <div class="h-6 w-36 animate-pulse rounded bg-gray-200"></div>
          <!-- Helper text -->
          <div class="h-4 w-72 sm:w-80 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div class="space-y-4 sm:space-y-5">
          <!-- Email -->
          <div>
            <div class="h-4 w-12 animate-pulse rounded bg-gray-200 mb-1.5"></div>
            <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
          </div>

          <!-- Nomor Telepon -->
          <div>
            <div class="h-4 w-28 animate-pulse rounded bg-gray-200 mb-1.5"></div>
            <div class="h-11 sm:h-12 w-full animate-pulse rounded-xl bg-gray-200"></div>
          </div>

          <!-- Checkbox / Terms Skeleton -->
          <div class="flex items-start gap-3 pt-2">
            <div class="w-5 h-5 rounded-md animate-pulse bg-gray-200 shrink-0 mt-0.5"></div>
            <div class="h-4 w-full max-w-md animate-pulse rounded bg-gray-200 mt-1"></div>
          </div>
        </div>
      </div>

      <!-- Section 3: Information Box Pengiriman Skeleton -->
      <div class="relative overflow-hidden bg-[#F0FAFF] border border-[#B5F5F0] rounded-2xl p-4 sm:p-5 flex items-center gap-3">
        <!-- Info Circle Icon Skeleton -->
        <div class="w-4 h-4 rounded-full bg-[#1CA0D6]/40 animate-pulse shrink-0 self-start mt-0.5"></div>

        <!-- Text lines skeleton -->
        <div class="flex-1 pr-16 sm:pr-20 space-y-2">
          <div class="h-3.5 w-full animate-pulse rounded bg-[#1CA0D6]/20"></div>
          <div class="h-3.5 w-11/12 animate-pulse rounded bg-[#1CA0D6]/20"></div>
          <div class="h-3.5 w-4/5 animate-pulse rounded bg-[#1CA0D6]/20"></div>
        </div>

        <!-- Package Illustration Graphic -->
        <img
          src="/images/icon/icon-box.svg"
          alt="Package Box"
          class="absolute right-0 bottom-0 pointer-events-none h-[85%] max-h-[85px] w-auto object-contain object-right-bottom opacity-50"
        />
      </div>

      <!-- Section 4: Submit Button Skeleton -->
      <div>
        <div class="h-12 sm:h-14 w-full animate-pulse rounded-2xl bg-gray-200"></div>
      </div>

    </div>

    <!-- Right Column: Summary Card Skeleton -->
    <div class="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 space-y-4 shadow-xs">
      <!-- Card Header -->
      <div class="flex items-center justify-between pb-3 border-b border-gray-100">
        <div class="h-5 w-40 animate-pulse rounded bg-gray-200"></div>
        <div class="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
      </div>

      <!-- Selected Items Breakdown Skeleton -->
      <div class="space-y-3">
        <!-- Line items skeleton (4 rows matching items + payment fee) -->
        <div v-for="i in 4" :key="i" class="flex items-center justify-between gap-3">
          <div class="h-4 animate-pulse rounded bg-gray-200" :class="[i === 1 ? 'w-36' : i === 2 ? 'w-32' : i === 3 ? 'w-28' : 'w-34']"></div>
          <div class="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>

      <hr class="border-gray-100 my-3" />

      <!-- Payment Total -->
      <div class="flex items-center justify-between pt-1">
        <div class="h-5 w-32 animate-pulse rounded bg-gray-200"></div>
        <div class="h-6 w-24 animate-pulse rounded bg-gray-200"></div>
      </div>

      <!-- "Di Keranjang" Preview Section -->
      <div class="pt-4 border-t border-gray-100">
        <div class="h-4 w-24 animate-pulse rounded bg-gray-200 mb-3"></div>

        <!-- 2 Cart Items Skeleton -->
        <div class="space-y-3">
          <div v-for="i in 2" :key="i" class="flex items-center gap-3 p-2 rounded-xl bg-gray-50/70 border border-gray-100">
            <!-- Thumbnail Image Skeleton -->
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-lg animate-pulse bg-gray-200 shrink-0"></div>
            <!-- Item Info Skeleton -->
            <div class="flex-1 space-y-2 min-w-0">
              <div class="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
              <!-- Meta/Variants line -->
              <div class="flex items-center gap-2">
                <div class="h-3 w-14 animate-pulse rounded bg-gray-200"></div>
                <div class="h-3 w-14 animate-pulse rounded bg-gray-200"></div>
                <div class="h-3 w-10 animate-pulse rounded bg-gray-200"></div>
              </div>
              <div class="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Help Section Skeleton -->
      <div class="pt-3 border-t border-gray-100 text-center flex items-center justify-center gap-2 flex-wrap">
        <div class="h-3.5 w-24 animate-pulse rounded bg-gray-200"></div>
        <div class="h-3.5 w-20 animate-pulse rounded bg-gray-200"></div>
        <div class="h-3.5 w-28 animate-pulse rounded bg-gray-200"></div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// Skeleton loading component for Pemesanan page
</script>
