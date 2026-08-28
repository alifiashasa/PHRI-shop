<template>
  <div class="min-h-screen bg-white flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>Privacy & Policy - PHRI Shop</Title>
      <Meta name="description" content="Kebijakan Privasi PHRI Shop. Informasi lengkap mengenai pengumpulan, penggunaan, dan perlindungan data pribadi Anda." />
    </Head>

    <!-- Header / Navbar -->
    <AppHeader />

    <main class="flex-grow w-full">
      <div class="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-24">
        <!-- Title: Privacy & Policy (Centered) -->
        <h1 class="text-2xl sm:text-[32px] md:text-[36px] font-semibold text-slate-900 font-syne text-center mb-8 sm:mb-10 tracking-tight leading-tight">
          Privacy & Policy
        </h1>

        <!-- Card Intro Text (Figma: bg #FFFFFF, shadow 0 4 15 #101828 @ 12%, padding space-500) -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_4px_15px_0px_rgba(16,24,40,0.12)] mb-8 sm:mb-10 text-[#0A0A0A] text-[16px] font-normal leading-relaxed">
          <p>
            Kami menyadari bahwa Anda peduli dengan data pribadi Anda dan cara penggunaannya, dan kami ingin Anda percaya bahwa PHRI Shop menjaga serta melindungi data pribadi Anda dengan sebaik-baiknya. Pernyataan Privasi ini membantu Anda memahami data pribadi apa yang kami kumpulkan, mengapa kami mengumpulkannya, dan bagaimana kami menggunakannya.
            Saat membaca Pernyataan ini, harap diingat bahwa pernyataan ini berlaku untuk seluruh layanan belanja online melalui PHRI Shop. Silakan kapan saja hubungi kami melalui menu “Hubungi Kami” di situs atau aplikasi PHRI Shop apabila Anda memiliki pertanyaan mengenai perlindungan data pribadi.
            Kami berkomitmen untuk menyediakan informasi sejelas mungkin agar Anda merasa aman saat berbelanja di PHRI Shop.
            Anda memiliki hak untuk mengakses, memperbarui, atau menghapus data pribadi Anda kapan pun. Lihat juga hak-hak Anda dan bagaimana cara menggunakannya di sini.
          </p>
        </div>

        <!-- Privacy FAQ Accordion (Reusable FaqAccordion component) -->
        <div>
          <FaqAccordion
            :items="privacyFaqItems"
            :default-open-indexes="[0]"
            item-padding-class="px-6 sm:px-8"
          />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import FaqAccordion, { type FaqItem } from '~/components/common/FaqAccordion.vue'

const privacyFaqItems: FaqItem[] = [
  {
    question: 'Siapa yang menggunakan atau mengelola data saya?',
    answer: 'Data Anda hanya digunakan oleh PHRI Shop untuk keperluan transaksi, pengiriman, dan peningkatan layanan.'
  },
  {
    question: 'Data pribadi apa saja yang dikumpulkan?',
    answer: 'Data pribadi yang kami kumpulkan meliputi nama lengkap, alamat pengiriman, nomor telepon, alamat email, serta rincian pesanan dan informasi pembayaran yang diperlukan untuk memproses transaksi Anda.'
  },
  {
    question: 'Apa Tujuan Data Dikumpulkan?',
    answer: 'Data dikumpulkan untuk memproses pesanan, memverifikasi transaksi, mengelola pengiriman produk, memberikan layanan pelanggan, serta meningkatkan kualitas dan pengalaman berbelanja di PHRI Shop.'
  },
  {
    question: 'Bagaimana cara PHRI Shop melindungi data pribadi saya?',
    answer: 'PHRI Shop melindungi data pribadi Anda dengan menerapkan enkripsi data, protokol keamanan terkini, serta akses terbatas untuk mencegah penggunaan, perubahan, atau kebocoran data yang tidak sah.'
  },
  {
    question: 'Berapa lama data saya disimpan?',
    answer: 'Data pribadi Anda disimpan selama akun Anda aktif atau selama diperlukan untuk menyediakan layanan, serta mematuhi kewajiban hukum, perpajakan, dan ketentuan perundang-undangan yang berlaku.'
  }
]
</script>
