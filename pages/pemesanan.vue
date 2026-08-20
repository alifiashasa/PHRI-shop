<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>Pemesanan - PHRI Shop</Title>
    </Head>

    <!-- App Header -->
    <AppHeader active-menu="beranda" variant="shop" />

    <!-- Main Container -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <!-- Main Layout Grid (2 Columns Desktop: Left Form / Right Summary) -->
      <ClientOnly>
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(340px,1fr)] gap-6 lg:gap-8 items-start mb-16">

          <!-- Left Column: Shipping & Contact Form -->
          <div class="space-y-6 sm:space-y-8">

            <!-- Breadcrumb -->
            <nav class="flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-gray-500" aria-label="Breadcrumb">
              <NuxtLink :to="localePath('/')" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
                Beranda
              </NuxtLink>
              <span class="text-gray-400 font-medium">&gt;</span>

              <!-- Conditional Detail Produk link if coming with product context -->
              <template v-if="breadcrumbProduct">
                <NuxtLink :to="localePath(`/product/${breadcrumbProductId}`)" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
                  Detail Produk
                </NuxtLink>
                <span class="text-gray-400 font-medium">&gt;</span>
                <NuxtLink :to="localePath(`/product/${breadcrumbProductId}`)" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
                  {{ breadcrumbProduct }}
                </NuxtLink>
                <span class="text-gray-400 font-medium">&gt;</span>
              </template>

              <NuxtLink :to="localePath({ path: '/keranjang', query: route.query })" class="hover:text-yellow-600 transition-colors text-gray-500 font-medium">
                Keranjang
              </NuxtLink>
              <span class="text-gray-400 font-medium">&gt;</span>

              <span class="font-bold text-gray-900">Pemesanan</span>
            </nav>

            <!-- Section 1: Dikirim Ke -->
            <div>
              <div class="mb-5">
                <h1 class="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                  Dikirim Ke
                </h1>
                <p class="text-xs sm:text-sm text-gray-500 mt-1">
                  Baca dulu <a href="#info-pengiriman" class="text-sky-500 hover:text-sky-600 underline font-medium">informasi pengirimannya yuk!</a>
                </p>
              </div>

              <form @submit.prevent="handleSubmitOrder" class="space-y-4 sm:space-y-5">
                <!-- Nama Lengkap -->
                <div>
                  <label for="fullName" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    v-model="form.fullName"
                    placeholder="Joen"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#757575] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <!-- Alamat -->
                <div>
                  <label for="address" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                    Alamat
                  </label>
                  <input
                    id="address"
                    type="text"
                    v-model="form.address"
                    placeholder="Masukkan alamat tujuan di sini"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#757575] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <!-- Detail Alamat (Optional) -->
                <div>
                  <label for="addressDetail" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                    Detail Alamat <span class="text-[#757575] font-normal text-xs ml-1">Optional</span>
                  </label>
                  <input
                    id="addressDetail"
                    type="text"
                    v-model="form.addressDetail"
                    placeholder="Rumah, Apartement, dll"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#757575] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <!-- Provinsi & Kota Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <!-- Provinsi -->
                  <div>
                    <label for="province" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                      Provinsi
                    </label>
                    <div class="relative">
                      <select
                        id="province"
                        v-model="form.province"
                        class="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm appearance-none focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all cursor-pointer"
                        :class="form.province ? 'text-[#0A0A0A]' : 'text-[#757575]'"
                      >
                        <option value="" disabled selected class="text-[#757575]">Pilih provinsi</option>
                        <option v-for="prov in provinceOptions" :key="prov" :value="prov" class="text-[#0A0A0A]">
                          {{ prov }}
                        </option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Kota -->
                  <div>
                    <label for="city" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                      Kota
                    </label>
                    <div class="relative">
                      <select
                        id="city"
                        v-model="form.city"
                        class="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm appearance-none focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all cursor-pointer"
                        :class="form.city ? 'text-[#0A0A0A]' : 'text-[#757575]'"
                      >
                        <option value="" disabled selected class="text-[#757575]">Pilih kota</option>
                        <option v-for="c in availableCities" :key="c" :value="c" class="text-[#0A0A0A]">
                          {{ c }}
                        </option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Kode Pos -->
                <div>
                  <label for="postalCode" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                    Kode Pos
                  </label>
                  <div class="relative">
                    <select
                      id="postalCode"
                      v-model="form.postalCode"
                      class="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm appearance-none focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all cursor-pointer"
                      :class="form.postalCode ? 'text-[#0A0A0A]' : 'text-[#757575]'"
                    >
                      <option value="" disabled selected class="text-[#757575]">Masukan kode pos Anda</option>
                      <option v-for="code in postalCodeOptions" :key="code" :value="code" class="text-[#0A0A0A]">
                        {{ code }}
                      </option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <!-- Section 2: Informasi Kontak -->
            <div class="pt-4 border-t border-gray-100">
              <div class="mb-5">
                <h2 class="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
                  Informasi Kontak
                </h2>
                <p class="text-xs sm:text-sm text-[#757575] mt-1">
                  Mengisi informasi kontak membantu pengiriman dengan cepat
                </p>
              </div>

              <div class="space-y-4 sm:space-y-5">
                <!-- Email -->
                <div>
                  <label for="email" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    v-model="form.email"
                    placeholder="joendoe@gmail.com"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#757575] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <!-- Nomor Telepon -->
                <div>
                  <label for="phone" class="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
                    Nomor Telepon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    v-model="form.phone"
                    placeholder="08200000000"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#757575] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <!-- Terms & Conditions Checkbox -->
                <label class="flex items-start gap-3 cursor-pointer select-none pt-2">
                  <div class="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      v-model="form.agreeTerms"
                      class="sr-only"
                    />
                    <div
                      class="w-5 h-5 rounded-md border-2 transition-all duration-150 flex items-center justify-center shrink-0"
                      :class="[
                        form.agreeTerms
                          ? 'bg-[#EABB08] border-[#EABB08]'
                          : 'bg-white border-gray-300 hover:border-amber-400'
                      ]"
                    >
                      <svg
                        v-if="form.agreeTerms"
                        class="w-3.5 h-3.5 text-white stroke-[3.5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    Dengan memesan, saya menyetujui syarat & ketentuan yang telah ditentukan oleh PHRI Shop
                  </span>
                </label>
              </div>
            </div>

            <!-- Section 3: Informasi Pengiriman Box -->
            <div id="info-pengiriman" class="relative overflow-hidden bg-[#F0FAFF] border border-[#B5F5F0] rounded-2xl p-4 sm:p-5 flex items-center gap-3">
              <!-- Info Circle Icon -->
              <div class="w-4 h-4 rounded-full bg-[#1CA0D6] text-white flex items-center justify-center font-bold text-xs shrink-0">
                i
              </div>

              <!-- Message Text -->
              <div class="flex-1 pr-20 sm:pr-24 text-xs sm:text-[15px] text-[#1CA0D6] font-medium leading-relaxed">
                Pesanan dilakukan sebelum jam 15:00 sore hari Senin-Jum'at.
                Biasanya diproses di hari yang sama.
                Harga pengiriman mungkin dapat diperbarui sewaktu-waktu setelah alamat dimasukkan.
              </div>

              <!-- Package Illustration Graphic -->
              <img
                src="/images/icon/icon-box.svg"
                alt="Package Box"
                class="absolute right-0 bottom-0 pointer-events-none h-[85%] max-h-[85px] w-auto object-contain object-right-bottom opacity-50"
              />
            </div>

            <!-- Section 4: Submit Button (Lanjutkan ke Pembayaran) -->
            <div>
              <button
                type="button"
                :disabled="!isFormValid"
                @click="handleSubmitOrder"
                class="w-full py-3.5 sm:py-4 px-6 rounded-2xl text-center font-semibold text-sm sm:text-base transition-all duration-200 shadow-xs"
                :class="[
                  !isFormValid
                    ? 'bg-[#E5E5E5] text-gray-400 cursor-not-allowed shadow-none'
                    : 'bg-[#EABB08] hover:bg-yellow-600 active:scale-[0.99] text-white cursor-pointer shadow-yellow-500/20'
                ]"
              >
                Lanjutkan ke Pembayaran
              </button>
            </div>

          </div>

          <!-- Right Column: Summary Card -->
          <div class="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 space-y-4 shadow-xs">
            <!-- Card Header -->
            <div class="flex items-center justify-between pb-3 border-b border-gray-100">
              <h2 class="text-base sm:text-[18px] font-semibold text-gray-900">
                Ringkasan Pembelian
              </h2>
              <span class="text-xs sm:text-sm font-semibold text-gray-900">
                {{ selectedTotalQuantity }} Item
              </span>
            </div>

            <!-- Selected Items Breakdown -->
            <div v-if="selectedItems.length > 0" class="space-y-2.5 max-h-[220px] overflow-y-auto pr-1 text-xs sm:text-sm">
              <div
                v-for="item in selectedItems"
                :key="item.id"
                class="flex items-center justify-between gap-3 text-gray-700"
              >
                <span class="truncate flex-1 font-normal">
                  {{ item.quantity }}× {{ item.name }}
                </span>
                <span class="font-bold text-gray-900 shrink-0">
                  {{ formatCurrency(item.price * item.quantity) }}
                </span>
              </div>

              <!-- Payment Fee -->
              <div class="flex items-center justify-between gap-3 text-gray-700">
                <span class="truncate flex-1 font-normal">
                  Biaya Pembayaran
                </span>
                <span class="font-bold text-gray-900 shrink-0">
                  {{ formatCurrency(paymentFee) }}
                </span>
              </div>
            </div>
            <div v-else class="text-xs sm:text-sm text-gray-400 py-1">
              Belum ada item yang dipilih
            </div>

            <hr class="border-gray-100 my-3" />

            <!-- Payment Total -->
            <div class="flex items-center justify-between pt-1">
              <span class="text-xs sm:text-sm font-bold text-gray-900">
                Total Pembayaran
              </span>
              <span class="text-base sm:text-lg font-bold text-gray-900">
                {{ formatCurrency(totalPayment) }}
              </span>
            </div>

            <!-- "Di Keranjang" Preview Section -->
            <div class="pt-4 border-t border-gray-100">
              <h3 class="text-xs sm:text-sm font-bold text-gray-900 mb-3">
                Di Keranjang
              </h3>

              <div v-if="selectedItems.length > 0" class="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                <div
                  v-for="item in selectedItems"
                  :key="item.id"
                  class="flex items-center gap-3 p-2 rounded-xl bg-gray-50/70 border border-gray-100"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-gray-100 shrink-0"
                  />
                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-xs sm:text-sm text-gray-900 truncate">
                      {{ item.name }}
                    </h4>
                    <p class="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                      Warna: <span class="font-medium text-gray-700">{{ item.color }}</span>
                      <span class="mx-1">•</span>
                      Ukuran: <span class="font-medium text-gray-700">{{ item.size }}</span>
                      <span class="mx-1">•</span>
                      Qty: <span class="font-medium text-gray-700">{{ item.quantity }}</span>
                    </p>
                    <p class="font-bold text-xs sm:text-sm text-gray-900 mt-1">
                      {{ formatCurrency(item.price) }}
                    </p>
                  </div>
                </div>
              </div>

              <div v-else class="text-xs text-gray-400 text-center py-4 bg-gray-50 rounded-xl">
                Tidak ada produk di keranjang yang dipesan.
              </div>
            </div>

            <!-- Help Section -->
            <div class="pt-3 border-t border-gray-100 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 flex-wrap font-medium">
              <span>Butuh Bantuan?</span>
              <a href="#" class="text-gray-700 hover:text-amber-600 underline transition-colors">Hubungi Kami</a>
              <span class="text-gray-300">|</span>
              <a href="#" class="text-gray-700 hover:text-amber-600 underline transition-colors">Informasi Pengiriman</a>
            </div>
          </div>

        </div>
      </ClientOnly>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const localePath = useLocalePath()

const {
  selectedItems,
  selectedTotalQuantity,
  cartTotal
} = useCart()

// Breadcrumb parameters
const breadcrumbProduct = computed(() => {
  if (route.query.product) return route.query.product as string
  if (route.query.from === 'detail') return 'Pajamas Unisex'
  return null
})
const breadcrumbProductId = computed(() => (route.query.id as string) || 'featured-1')

// Form State
const form = reactive({
  fullName: 'Joen',
  address: '',
  addressDetail: '',
  province: '',
  city: '',
  postalCode: '',
  email: 'joendoe@gmail.com',
  phone: '08200000000',
  agreeTerms: false
})

// Options
const provinceOptions = [
  'DKI Jakarta',
  'Jawa Barat',
  'Jawa Tengah',
  'Jawa Timur',
  'Banten',
  'DI Yogyakarta',
  'Bali'
]

const cityOptionsMap: Record<string, string[]> = {
  'DKI Jakarta': ['Jakarta Selatan', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara'],
  'Jawa Barat': ['Bandung', 'Bogor', 'Depok', 'Bekasi', 'Cimahi'],
  'Jawa Tengah': ['Semarang', 'Surakarta', 'Magelang', 'Tegal'],
  'Jawa Timur': ['Surabaya', 'Malang', 'Kediri', 'Batu'],
  'Banten': ['Tangerang', 'Tangerang Selatan', 'Serang', 'Cilegon'],
  'DI Yogyakarta': ['Yogyakarta', 'Sleman', 'Bantul'],
  'Bali': ['Denpasar', 'Badung', 'Gianyar']
}

const availableCities = computed(() => {
  if (!form.province) return ['Jakarta Selatan', 'Jakarta Pusat', 'Bandung', 'Semarang', 'Surabaya']
  return cityOptionsMap[form.province] || ['Kota Utama']
})

const postalCodeOptions = [
  '10110',
  '12190',
  '40115',
  '50134',
  '60271',
  '80111'
]

// Payment Fee
const paymentFee = 5000

const totalPayment = computed(() => {
  if (selectedItems.value.length === 0) return 0
  return cartTotal.value + paymentFee
})

// Form Validation logic
const isFormValid = computed(() => {
  return (
    form.fullName.trim() !== '' &&
    form.address.trim() !== '' &&
    form.province !== '' &&
    form.city !== '' &&
    form.postalCode !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.agreeTerms === true &&
    selectedItems.value.length > 0
  )
})

const handleSubmitOrder = () => {
  if (!isFormValid.value) return
  alert(`Pesanan atas nama ${form.fullName} dengan total ${formatCurrency(totalPayment.value)} berhasil dikirim!`)
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val).replace(/\s/g, '').replace('IDR', 'Rp')
}
</script>
