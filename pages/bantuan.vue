<template>
  <div class="min-h-screen bg-white flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>Pusat Bantuan - PHRI Shop</Title>
      <Meta name="description" content="Pusat Bantuan PHRI Shop. Cari informasi mengenai pengiriman, pelacakan, dan layanan kami dengan cepat." />
    </Head>

    <!-- Header / Navbar (Cart Icon hidden on Bantuan page) -->
    <AppHeader active-menu="bantuan" :show-cart="false" />

    <main class="flex-grow w-full">
      <!-- Hero / Heading Section (Further down from navbar) -->
      <section class="text-center pt-16 sm:pt-20 md:pt-16 pb-4 px-4 max-w-4xl mx-auto">
        <h1 class="text-[32px] font-semibold text-slate-900 font-syne tracking-tight mb-4 leading-tight">
          Pusat Bantuan
        </h1>
        <p class="text-[#757575] text-sm sm:text-[20px] md:text-[20px] leading-relaxed max-w-2xl mx-auto font-urbanist">
          Cari informasi yang Anda butuhkan dengan cepat. Gunakan kolom<br class="hidden sm:inline" />
          kategori populer untuk menemukan solusi terkait layanan kami.
        </p>
      </section>

      <!-- Info Box Section (Container aligned with FAQ sections below: max-w-[1240px] px-4 sm:px-8 lg:px-12) -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 sm:mt-16 mb-8 sm:mb-20">
        <div class="bg-[#FEFDE8] border border-[#EABB08] rounded-xl sm:rounded-2xl p-5 sm:p-6 text-left flex flex-col gap-3 shadow-xs">
          <div class="flex items-center gap-2.5">
            <!-- Pin Icon from /images/icon/icon-pin.svg -->
            <img
              src="/images/icon/icon-pin.svg"
              alt="Pin Icon"
              class="w-6 h-6 sm:w-[26px] sm:h-[26px] object-contain shrink-0"
            />
            <h2 class="text-base sm:text-[20px] font-semibold text-slate-900 font-urbanist">
              Temukan Jawabanmu!
            </h2>
          </div>
          <p class="text-xs sm:text-[16px] text-[#757575] font-urbanist leading-relaxed">
            Temukan pekerjaan impian Anda dengan mudah di PHRI Karir! Cukup masukkan kata kunci seperti posisi atau lokasi di kolom pencarian, lalu manfaatkan filter untuk menyempurnakan hasil sesuai kebutuhan. Aktifkan notifikasi lowongan agar tidak ketinggalan peluang terbaru, dan simpan pekerjaan favorit untuk diakses nanti. Jangan lupa lengkapi profil dan unggah CV terbaru agar recruiter dapat menemukan Anda lebih mudah.
          </p>
        </div>
      </section>

      <!-- Multiple FAQ Sections -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16 lg:space-y-18 mb-8 sm:mb-20">
        <div
          v-for="section in faqSections"
          :key="section.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          <!-- Left Side: Section Title & Description -->
          <div class="lg:col-span-5 space-y-3">
            <h2 class="text-[24px] font-semibold text-slate-900 font-syne leading-tight">
              {{ section.title }}
            </h2>
            <p class="text-sm sm:text-base text-[#757575] font-urbanist leading-relaxed max-w-lg">
              {{ section.description }}
            </p>
          </div>

          <!-- Right Side: Accordion -->
          <div class="lg:col-span-7">
            <FaqAccordion
              :items="section.items"
              :default-open-indexes="section.defaultOpenIndexes"
            />
          </div>
        </div>
      </section>

      <!-- Section "Masih ada pertanyaan lain?" -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-20">
        <div class="border border-gray-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 bg-white shadow-xs">
          <div class="space-y-1 sm:space-y-1.5 max-w-2xl">
            <h3 class="text-[20px] sm:text-[24px] font-semibold text-slate-900 font-syne leading-tight">
              Masih ada pertanyaan lain?
            </h3>
            <p class="text-xs sm:text-base text-[#757575] font-urbanist leading-relaxed">
              Hubungi tim kami melalui live chat atau email, dan kami akan dengan senang hati membantu.
            </p>
          </div>
          <NuxtLink
            to="#"
            class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#EAB308] hover:bg-amber-500 text-white font-medium font-urbanist text-sm sm:text-base rounded-xl transition-all shadow-xs text-center whitespace-nowrap cursor-pointer shrink-0"
          >
            Hubungi Kami
          </NuxtLink>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import FaqAccordion from '~/components/common/FaqAccordion.vue'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSection {
  id: string
  title: string
  description: string
  defaultOpenIndexes?: number[]
  items: FaqItem[]
}

const faqSections: FaqSection[] = [
  {
    id: 'pengiriman-1',
    title: 'Informasi Pengiriman',
    description: 'Informasi mengenai proses pengiriman produk PHRI Shop, termasuk estimasi waktu, jasa ekspedisi yang digunakan, serta status pelacakan pesanan.',
    defaultOpenIndexes: [0, 4],
    items: [
      {
        question: 'Berapa lama estimasi pengiriman produk di PHRI Shop?',
        answer: 'Estimasi waktu pengiriman berbeda-beda tergantung alamat tujuan, biasanya antara 2–7 hari kerja.'
      },
      {
        question: 'Apakah PHRI Shop menyediakan layanan pelacakan pengiriman?',
        answer: 'Ya, Anda dapat melacak status pengiriman melalui nomor resi yang kami kirimkan via email atau melalui detail pesanan di akun Anda.'
      },
      {
        question: 'Ekspedisi apa saja yang digunakan PHRI Shop?',
        answer: 'PHRI Shop menggunakan berbagai layanan kurir terpercaya seperti JNE, J&T Express, SiCepat, dan POS Indonesia.'
      },
      {
        question: 'Apakah bisa mengirim ke seluruh Indonesia?',
        answer: 'Ya, kami melayani pengiriman ke seluruh kota dan kabupaten di Indonesia.'
      },
      {
        question: 'Bagaimana jika pesanan saya terlambat atau tidak sampai?',
        answer: 'Silakan hubungi layanan pelanggan PHRI Shop dengan menyertakan nomor pesanan dan resi agar dapat segera ditindaklanjuti.'
      }
    ]
  },
  {
    id: 'pengiriman-2',
    title: 'Informasi Pengiriman',
    description: 'Informasi mengenai proses pengiriman produk PHRI Shop, termasuk estimasi waktu, jasa ekspedisi yang digunakan, serta status pelacakan pesanan.',
    defaultOpenIndexes: [0, 4],
    items: [
      {
        question: 'Berapa lama estimasi pengiriman produk di PHRI Shop?',
        answer: 'Estimasi waktu pengiriman berbeda-beda tergantung alamat tujuan, biasanya antara 2–7 hari kerja.'
      },
      {
        question: 'Apakah PHRI Shop menyediakan layanan pelacakan pengiriman?',
        answer: 'Ya, Anda dapat melacak status pengiriman melalui nomor resi yang kami kirimkan via email atau melalui detail pesanan di akun Anda.'
      },
      {
        question: 'Ekspedisi apa saja yang digunakan PHRI Shop?',
        answer: 'PHRI Shop menggunakan berbagai layanan kurir terpercaya seperti JNE, J&T Express, SiCepat, dan POS Indonesia.'
      },
      {
        question: 'Apakah bisa mengirim ke seluruh Indonesia?',
        answer: 'Ya, kami melayani pengiriman ke seluruh kota dan kabupaten di Indonesia.'
      },
      {
        question: 'Bagaimana jika pesanan saya terlambat atau tidak sampai?',
        answer: 'Silakan hubungi layanan pelanggan PHRI Shop dengan menyertakan nomor pesanan dan resi agar dapat segera ditindaklanjuti.'
      }
    ]
  }
]
</script>
