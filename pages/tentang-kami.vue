<template>
  <div class="min-h-screen bg-white flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200 overflow-x-hidden">
    <Head>
      <Title>Tentang Kami - PHRI Shop</Title>
      <Meta
        name="description"
        content="PHRI Shop - Ciptakan ekosistem yang positif dan bermanfaat. Pelajari mengenai kami, visi & misi, serta core values PHRI Shop."
      />
    </Head>

    <!-- Navbar Existing -->
    <AppHeader active-menu="tentang-kami" />

    <main class="flex-grow w-full">
      <!-- 1. Hero Section (Split 50% Yellow Content | 50% Image) -->
      <section class="w-full h-[700px] grid grid-cols-1 md:grid-cols-2 relative bg-[#EABB08] overflow-hidden items-stretch">
        <!-- Left Column: Yellow Content (50%) -->
        <div class="relative flex flex-col justify-center items-end text-white min-h-[400px] lg:min-h-[540px] overflow-hidden bg-[#EABB08] w-full">
          <!-- Decorative Background Ornament from Figma -->
          <img
            src="/images/home/ornamen-aboutus.svg"
            alt="Hero Background Ornament"
            class="absolute inset-0 w-full h-full object-cover object-bottom translate-y-12 sm:translate-y-20 pointer-events-none z-0"
          />

          <!-- Hero Content (Aligned with 1240px container below) -->
          <div class="relative z-10 w-full max-w-[620px] ml-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
            <!-- Small Subtitle -->
            <span class="text-xs sm:text-[14px] tracking-widest text-white/90 uppercase mb-3 font-urbanist block">
              TENTANG KAMI
            </span>

            <!-- Title with Underline -->
            <h1 class="text-4xl sm:text-3xl lg:text-6xl font-syne tracking-tight mb-2 text-white">
              PHRI Shop
            </h1>
            <div class="w-20 sm:w-20 h-1 bg-white/90 rounded-full mb-6 sm:mb-8"></div>

            <!-- Main Tagline -->
            <p class="text-2xl sm:text-xl lg:text-[48px] font-urbanist leading-snug sm:leading-tight text-white max-w-lg">
              Ciptakan ekosistem yang positif dan bermanfaat
            </p>
          </div>
        </div>

        <!-- Right Column: Hero Image (50%) -->
        <div class="w-full h-[350px] md:h-full relative min-h-[350px] md:min-h-[450px]">
          <img
            src="/images/home/hero-section-aboutus.svg"
            alt="PHRI Shop Hero"
            class="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>
      </section>

      <!-- 2. Section "Apa itu PHRI Shop?" -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="md:col-span-7 lg:col-span-6 space-y-6 max-w-[520px]">
            <h2 class="text-2xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 font-syne tracking-tight">
              Apa itu PHRI Shop?
            </h2>

            <div class="space-y-4 text-[#757575] font-urbanist text-sm sm:text-base leading-relaxed">
              <p>
                Kami bukan sekadar marketplace — ini adalah platform berbasis komunitas yang dirancang untuk memberikan manfaat bersama bagi seluruh anggotanya. Kami menghubungkan pembeli dan penjual dalam ekosistem terpercaya yang mengutamakan transparansi, keadilan, dan kesejahteraan bersama.
              </p>
              <p>
                Melalui fitur-fitur inovatif dan kebijakan yang berfokus pada anggota, kami membangun platform ekonomi berkelanjutan di mana setiap transaksi berkontribusi pada pertumbuhan dan kesejahteraan komunitas secara kolektif.
              </p>
            </div>

            <!-- 3 Benefit Items (Data-driven rendering) -->
            <div class="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <div
                v-for="(benefit, idx) in benefits"
                :key="idx"
                class="flex flex-col items-center text-center group p-2 sm:p-3 bg-gray-50/60 sm:bg-transparent rounded-xl"
              >
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F3F4F6] text-gray-700 flex items-center justify-center mb-3 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors duration-200 shrink-0">
                  <component :is="benefit.icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span class="text-xs sm:text-sm font-semibold text-gray-800 font-urbanist leading-snug">
                  {{ benefit.title }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right Image -->
          <div class="md:col-span-5 lg:col-span-6 flex justify-center md:justify-end w-full items-center self-center">
            <img
              src="/images/about/about-community.svg"
              alt="PHRI Shop Komunitas"
              class="w-full max-w-lg md:max-w-[480px] lg:max-w-[520px] ml-auto md:translate-x-12 lg:translate-x-16 h-auto object-cover rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100"
            />
          </div>
        </div>
      </section>

      <!-- 3. Section "Visi & Misi Kami" -->
      <section class="bg-[#F5F5F5] py-16 sm:py-20">
        <div class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
          <!-- Section Header -->
          <div class="mb-8 sm:mb-10 text-left">
            <h2 class="text-[22px] font-medium leading-[30px] tracking-[-0.45px] text-[#0A0A0A] font-inter mb-2">
              Visi & Misi Kami
            </h2>
            <p class="text-sm sm:text-base text-[#717182] font-inter font-regular">
              Prinsip yang menuntun komitmen kami untuk menciptakan nilai berkelanjutan bagi komunitas kami.
            </p>
          </div>

          <!-- Visi & Misi Cards (2 Columns side-by-side on md+) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <VisionMissionCard
              title="Visi"
              description="Menjadi platform ekonomi mandiri yang meningkatkan kesejahteraan anggotanya melalui pertumbuhan berkelanjutan, inovasi, dan pemberdayaan komunitas."
            >
              <template #icon>
                <img src="/images/icon/icon-visi.svg" alt="Visi Icon" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              </template>
            </VisionMissionCard>

            <VisionMissionCard
              title="Misi"
              description="Menyediakan marketplace transparan, mudah diakses, dan berfokus pada anggota, membuka peluang partisipasi ekonomi, menumbuhkan kepercayaan, serta menghadirkan kesejahteraan bersama bagi seluruh pemangku kepentingan."
            >
              <template #icon>
                <img src="/images/icon/icon-misi.svg" alt="Misi Icon" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              </template>
            </VisionMissionCard>
          </div>
        </div>
      </section>

      <!-- 4. Section "Our Core Values" -->
      <section class="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-6 sm:py-24">
        <!-- Section Header (Centered) -->
        <div class="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 class="text-2xl sm:text-3xl lg:text-[22px] font-medium text-gray-900 font-inter tracking-tight mb-1">
            Our Core Values
          </h2>
          <p class="text-sm sm:text-base text-[#717182] font-inter leading-relaxed">
            Prinsip dasar yang membentuk budaya kami dan menjadi panduan dalam setiap tindakan kami.
          </p>
        </div>

        <!-- 6 Core Value Cards Grid (Desktop 3 Cols x 2 Rows) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <CoreValueCard
            v-for="(val, index) in coreValues"
            :key="index"
            :title="val.title"
            :description="val.description"
          >
            <template #icon>
              <img :src="val.icon" :alt="val.title" class="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            </template>
          </CoreValueCard>
        </div>
      </section>
    </main>

    <!-- Footer Existing -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import VisionMissionCard from '~/components/about/VisionMissionCard.vue'
import CoreValueCard from '~/components/about/CoreValueCard.vue'

// 3 Benefits SVG Icons
const StorefrontIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.8',
      d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    })
  ])

const CommunityIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.8',
      d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    })
  ])

const GrowthIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.8',
      d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    })
  ])

const benefits = [
  {
    title: 'Marketplace Terpercaya',
    icon: StorefrontIcon
  },
  {
    title: 'Berfokus pada Komunitas',
    icon: CommunityIcon
  },
  {
    title: 'Tumbuh Bersama',
    icon: GrowthIcon
  }
]

const coreValues = [
  {
    title: 'Integrity',
    description: 'Kami menjalankan setiap transaksi dan interaksi dengan transparansi dan kejujuran.',
    icon: '/images/icon/icon-integrity.svg'
  },
  {
    title: 'Community First',
    description: 'Anggota kami adalah inti dari setiap langkah dan inovasi yang kami lakukan.',
    icon: '/images/icon/icon-heart.svg'
  },
  {
    title: 'Innovation',
    description: 'Kami terus berkembang dan beradaptasi untuk memenuhi kebutuhan pasar.',
    icon: '/images/icon/icon-Lightbulb.svg'
  },
  {
    title: 'Trust',
    description: 'Kami membangun hubungan yang melalui layanan yang andal dan kualitas yang konsisten.',
    icon: '/images/icon/icon-Handshake.svg'
  },
  {
    title: 'Excellence',
    description: 'Kami berupaya mencapai standar tertinggi dalam setiap aspek platform dan layanan kami.',
    icon: '/images/icon/icon-Medal.svg'
  },
  {
    title: 'Shared Prosperity',
    description: 'Kami menciptakan nilai yang memberikan manfaat bagi seluruh anggota kami secara merata.',
    icon: '/images/icon/icon-StarFour.svg'
  }
]
</script>
