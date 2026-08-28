<template>
  <div class="min-h-screen bg-white flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>Hubungi Kami - PHRI Shop</Title>
      <Meta name="description" content="Hubungi kami untuk pertanyaan, kerja sama, atau informasi lebih lanjut mengenai PHRI Shop." />
    </Head>

    <!-- Header / Navbar (Cart Icon hidden on Kontak page) -->
    <AppHeader active-menu="kontak" :show-cart="false" />

    <main class="flex-grow w-full">
      <!-- Section Atas (3 Columns on Desktop) -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-10 sm:pb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <!-- Column 1: Hubungi Kami Title & Subtitle -->
          <div class="space-y-3">
            <h1 class="text-[32px] font-semibold text-slate-900 font-syne tracking-tight leading-tight">
              Hubungi Kami
            </h1>
            <p class="text-sm sm:text-base text-[#757575] font-urbanist leading-relaxed">
              Kami siap mendengar dan membantu. Silakan hubungi kami untuk pertanyaan, kerja sama, atau informasi lebih lanjut. Tim kami akan merespons dengan cepat dan ramah.
            </p>
          </div>

          <!-- Column 2: Alamat Kami -->
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-full bg-[#FEFDE8] text-[#1F1F1F] flex items-center justify-center mb-3">
              <svg class="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 class="text-base font-bold text-slate-900 font-urbanist">
              Alamat Kami
            </h2>
            <p class="text-xs sm:text-sm text-[#757575] font-urbanist leading-relaxed">
              Hotel Grand Sahid Jaya | Shopping Arcade No. 04-05, Jalan Jend. Sudirman No. 86, Jakarta
            </p>
          </div>

          <!-- Column 3: Kontak Kami -->
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-full bg-[#DFFDDA] text-[#1F1F1F] flex items-center justify-center mb-3">
              <svg class="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 class="text-base font-bold text-slate-900 font-urbanist">
              Kontak Kami
            </h2>
            <div class="space-y-1.5 pt-0.5">
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-medium">
                <svg class="w-4 h-4 text-gray-400 stroke-[2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+6221684118" class="hover:text-amber-600 transition-colors">+62 21684118</a>
              </div>
              <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-medium">
                <svg class="w-4 h-4 text-gray-400 stroke-[2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:bpphri@phri.or.id" class="hover:text-amber-600 transition-colors">bpphri@phri.or.id</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Form & Map (2 Columns on Desktop) -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 mb-16 sm:mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <!-- Form Kontak (Left Column) -->
          <div class="lg:col-span-6 bg-white flex flex-col justify-between order-2 lg:order-1">
            <form @submit.prevent="handleSubmit" class="space-y-4 font-urbanist">
              <!-- Nama Lengkap -->
              <div>
                <label class="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
                  Nama Lengkap
                </label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 pointer-events-none flex items-center justify-center">
                    <img
                      src="/images/icon/icon-user.svg"
                      alt="User Icon"
                      class="w-4 h-4 object-contain"
                    />
                  </span>
                  <input
                    v-model="form.fullName"
                    type="text"
                    placeholder="Nama Lengkap"
                    class="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-slate-900 text-sm placeholder:text-[#757575] focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <!-- Alamat Email -->
              <div>
                <label class="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
                  Alamat Email
                </label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 pointer-events-none flex items-center justify-center">
                    <img
                      src="/images/icon/icon-email.svg"
                      alt="Email Icon"
                      class="w-4 h-4 object-contain"
                    />
                  </span>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Masukkan emailmu"
                    class="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-slate-900 text-sm placeholder:text-[#757575] focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <!-- Nomor Ponsel -->
              <div>
                <label class="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
                  Nomor Ponsel
                </label>
                <div class="flex items-center border border-gray-200 rounded-xl bg-white overflow-hidden focus-within:border-amber-500 transition-colors">
                  <!-- Country Selector Prefix -->
                  <div class="flex items-center gap-2 px-3.5 py-3 bg-white border-r border-gray-200 text-slate-900 text-sm font-medium select-none shrink-0">
                    <!-- Flag Icon -->
                    <img
                      src="/images/icon/icon-flag.svg"
                      alt="Flag Indonesia"
                      class="w-5 h-5 object-contain shrink-0"
                    />
                    <span>+62</span>
                    <svg class="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <!-- Number Input -->
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="853xxxxxx"
                    class="w-full px-3.5 py-3 text-slate-900 text-sm placeholder:text-[#757575] focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <!-- Pesan -->
              <div>
                <label class="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
                  Pesan
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  placeholder="Sampaikan catatan mu untuk kami"
                  class="w-full p-4 bg-white border border-gray-200 rounded-xl text-slate-900 text-sm placeholder:text-[#757575] focus:outline-none focus:border-amber-500 transition-colors min-h-[140px] resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-3.5 bg-[#EABB08] hover:bg-amber-500 text-white font-medium text-base rounded-xl transition-all shadow-xs cursor-pointer text-center"
              >
                Kirim
              </button>
            </form>
          </div>

          <!-- Map Section (Right Column on Desktop, Top on Mobile) -->
          <div class="lg:col-span-6 h-[220px] sm:h-[280px] lg:h-auto lg:min-h-full rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs relative bg-slate-100 flex flex-col justify-between order-1 lg:order-2">
            <!-- Background Map Image (WebP Format) -->
            <img
              src="/images/kontak/maps.webp"
              alt="Peta Lokasi PHRI"
              class="w-full h-full object-cover rounded-2xl"
            />

            <!-- Bottom Floating Badge "Lihat detail peta" -->
            <div class="absolute bottom-4 right-4 z-10">
              <a
                href="https://maps.google.com/?q=Hotel+Grand+Sahid+Jaya+Jakarta"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white/95 hover:bg-white text-[#EABB08] font-urbanist font-medium text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm border border-amber-200/60 flex items-center gap-1.5 transition-all hover:shadow cursor-pointer"
              >
                <span>Lihat detail peta</span>
                <svg class="w-3.5 h-3.5 text-[#EABB08]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

const form = ref({
  fullName: 'Dino',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Local interaction toast / alert without backend
  if (typeof window !== 'undefined') {
    alert('Terima kasih! Pesan Anda telah terkirim.')
  }
}
</script>
