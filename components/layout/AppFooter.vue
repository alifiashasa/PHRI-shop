<template>
  <footer class="w-full font-sans mt-16">
    <!-- Top Yellow Banner with Social Links & Back To Top -->
    <div class="relative overflow-hidden bg-[#E5AD00] py-6 px-4 sm:px-8 lg:px-12">
      <!-- Low-Poly Geometric Background Pattern -->
      <svg
        class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 select-none"
        viewBox="0 0 1400 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 350,0 200,120 0,120" fill="#FFFFFF" opacity="0.15" />
        <polygon points="350,0 750,0 550,120 200,120" fill="#FACC15" opacity="0.25" />
        <polygon points="750,0 1050,0 850,120 550,120" fill="#B45309" opacity="0.15" />
        <polygon points="1050,0 1400,0 1400,120 850,120" fill="#FFFFFF" opacity="0.12" />
        <polygon points="200,120 550,120 380,50" fill="#FDE047" opacity="0.2" />
        <polygon points="550,120 850,120 700,40" fill="#FFFFFF" opacity="0.2" />
        <polygon points="850,120 1400,120 1100,55" fill="#FACC15" opacity="0.25" />
      </svg>

      <div class="relative max-w-7xl mx-auto flex flex-row items-center justify-between gap-4">
        <!-- Left: Social Media Section -->
        <div class="flex flex-col gap-2 text-white">
          <span class="font-normal text-sm sm:text-base tracking-wide">Temukan Kami di:</span>
          <div class="flex items-center gap-4 pt-0.5">
            <!-- Facebook -->
            <a
              href="#"
              class="text-white hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <!-- X / Twitter -->
            <a
              href="#"
              class="text-white hover:opacity-80 transition-opacity"
              aria-label="X"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <!-- Instagram -->
            <a
              href="#"
              class="text-white hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <!-- YouTube -->
            <a
              href="#"
              class="text-white hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: Back To Top Button -->
        <button
          @click="scrollToTop"
          class="w-[158px] h-[40px] bg-[#FEFDE8] text-[#EABB08] font-urbanist font-medium text-[16px] rounded-[10px] shadow-sm hover:shadow hover:bg-[#fef9c3] transition-all flex items-center justify-center gap-[4px] cursor-pointer border border-transparent shrink-0"
        >
          <svg class="w-4 h-4 stroke-[#EABB08] stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>Kembali ke atas</span>
        </button>
      </div>
    </div>

    <!-- Bottom Light Bar -->
    <div class="bg-[#F8F9FA] border-t border-gray-100 py-4 px-4 sm:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto flex flex-row items-center justify-between text-xs sm:text-sm">
        <!-- Copyright Text -->
        <div class="flex flex-col text-gray-400 font-normal leading-snug">
          <span>© 2021 — Copyright</span>
          <span>All Rights reserved</span>
        </div>

        <!-- Privacy Policy Link -->
        <a href="#" class="text-[#EABB08] hover:opacity-80 font-urbanist font-medium text-[16px] transition-colors shrink-0 text-right">
          Kebijakan Privasi
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
