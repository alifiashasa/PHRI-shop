<template>
  <div class="min-h-screen bg-[#F8F9FA] flex flex-col items-center py-6 sm:py-12 px-4 sm:px-6 font-urbanist antialiased text-gray-900 selection:bg-yellow-200">
    <Head>
      <Title>{{ pageTitle }} - PHRI Shop</Title>
    </Head>

    <ClientOnly>
      <!-- Invoice Container Paper -->
      <div class="w-full max-w-[976px] bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/70 overflow-hidden my-auto">
        <!-- Main Invoice Content -->
        <div class="p-4 sm:p-12 space-y-6 sm:space-y-8">
          
          <!-- 1. Header Invoice (Logo PHRI Left | PHRI SHOP Right) -->
          <div class="flex items-center justify-between pb-6 border-b border-gray-100">
            <NuxtLink :to="localePath('/')" class="shrink-0">
              <img
                src="/images/logo/Rectangle.svg"
                alt="PHRI Logo"
                class="h-10 sm:h-14 w-auto object-contain"
              />
            </NuxtLink>
            <span class="font-bold text-base sm:text-xl tracking-wider text-gray-900 font-syne">
              PHRI SHOP
            </span>
          </div>

          <!-- 2. Greeting & Title / Header Content -->
          <div class="text-center space-y-3 pt-2">
            <h1 class="text-xl sm:text-[24px] font-medium text-gray-900 font-syne">
              Hi {{ order.customer.name }},
            </h1>

            <!-- Dynamic Header Subtitle based on status -->
            <h2 v-if="currentStatus === 'pending'" class="text-lg sm:text-[24px] font-medium text-gray-900 font-syne w-full max-w-none mx-auto leading-snug">
              Selamat Pesanan Anda Berhasil Dibuat, Mohon Segera Selesaikan Pembayaran!
            </h2>
            <h2 v-else-if="currentStatus === 'expired'" class="text-lg sm:text-[24px] font-medium text-gray-900 font-syne w-full max-w-none mx-auto leading-snug">
              Pembayaran Anda Telah Kadaluwarsa
            </h2>
            <h2 v-else-if="currentStatus === 'success'" class="text-lg sm:text-[24px] font-medium text-gray-900 font-syne w-full max-w-none mx-auto leading-snug">
              Pembayaran Telah Berhasil
            </h2>

            <!-- Dynamic Description Paragraph based on status -->
            <p v-if="currentStatus === 'pending'" class="text-xs sm:text-[14px] text-[#757575] font-urbanist w-full max-w-none mx-auto leading-relaxed pt-2 sm:pt-4">
              Hai, tagihan atas pesanan barang Anda di PHRI Shop telah dibuat ({{ order.createdAt }}). Pembayaran wajib diselesaikan untuk mengonfirmasi kepemilikan barang yang telah Anda buat.
            </p>
            <p v-else-if="currentStatus === 'expired'" class="text-xs sm:text-[14px] text-[#757575] font-urbanist w-full max-w-[720px] mx-auto leading-relaxed pt-2 sm:pt-3">
              Invoice untuk pesanan Anda telah kedaluwarsa karena belum dilakukan pembayaran hingga batas waktu yang ditetapkan. Anda dapat dengan mudah melakukan pemesanan ulang dengan klik tombol di bawah ini.
            </p>
            <p v-else-if="currentStatus === 'success'" class="text-xs sm:text-[14px] text-[#757575] font-urbanist w-full max-w-[720px] mx-auto leading-relaxed pt-2 sm:pt-4">
              Pembayaran Anda untuk pesanan telah berhasil kami terima pada ({{ paidAtDisplay }}). Terima kasih telah mempercayai kami. Pesanan Anda sekarang telah dikonfirmasi dan sedang diproses.
            </p>

            <!-- 3. Action Buttons / Amount Section (Conditional) -->
            <!-- Status Pending: Amount + Bayar Sekarang -->
            <div v-if="currentStatus === 'pending'" class="text-center pt-2 space-y-2">
              <span class="text-xs sm:text-sm text-[#757575] font-medium block">
                Jumlah yang Harus Dibayarkan
              </span>
              <div class="text-2xl sm:text-4xl font-medium text-gray-900 font-urbanist tracking-tight">
                {{ formatCurrency(order.total) }}
              </div>
              <p class="text-xs sm:text-sm text-danger font-medium pt-1">
                Jatuh tempo pada {{ order.dueAt }}
              </p>
              
              <div class="pt-4 flex justify-center">
                <button
                  type="button"
                  @click="handlePay"
                  class="w-[170px] bg-[#FF4545] hover:bg-red-600 active:scale-95 text-white font-medium text-sm sm:text-base px-7 py-2.5 sm:py-3 rounded-[14px] shadow-md shadow-red-500/20 transition-all duration-200 cursor-pointer"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>

            <!-- Status Expired: Pesan Kembali Button -->
            <div v-else-if="currentStatus === 'expired'" class="pt-4 flex justify-center">
              <button
                type="button"
                @click="handleReorder"
                class="bg-[#EABB08] hover:bg-yellow-600 active:scale-95 text-white font-medium text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-[14px] shadow-sm transition-all duration-200 cursor-pointer"
              >
                Pesan Kembali
              </button>
            </div>

            <!-- Status Success: No buttons / amount in middle -->
          </div>

          <!-- 4. Detail Transaksi Header -->
          <div class="pt-4 space-y-1.5 text-left text-xs sm:text-sm text-[#757575]">
            <h3 class="text-[#111827] text-xs sm:text-sm mb-2 font-medium sm:font-normal">
              Detail Transaksi:
            </h3>
            <p>
              Nomor Invoice: <span class="font-urbanist text-[#757575]">{{ order.invoiceNumber }}</span>
            </p>
            
            <template v-if="currentStatus === 'success'">
              <p>
                Referensi Transaksi: <span>{{ order.transactionRef || '20251056524547050021' }}</span>
              </p>
              <p>
                Waktu Pembayaran : <span>{{ order.paidAt || '03-Sep-2025 07:17:16' }}</span>
              </p>
              <p>
                Metode Pembayaran: <span>{{ order.paymentMethod || 'NOBU QRIS' }}</span>
              </p>
            </template>
            <template v-else>
              <p>
                Waktu Pemesanan : <span>{{ order.createdAt }}</span>
              </p>
            </template>
          </div>

          <!-- 5. Informasi Pengiriman (Only on status success) -->
          <div v-if="currentStatus === 'success'" class="pt-2 space-y-1.5 text-left text-xs sm:text-sm text-[#757575]">
            <h3 class="text-[#111827] text-xs sm:text-sm mb-2 font-medium sm:font-normal">
              Informasi Pengiriman
            </h3>
            <p>
              Jasa Pengiriman: <span>{{ order.courier || 'Kurir Internal' }}</span>
            </p>
            <p>
              Nomor Resi: <span>{{ order.trackingNumber || order.transactionRef || '20251056524547050021' }}</span>
            </p>
          </div>

          <!-- 6. Product Breakdown List -->
          <div class="space-y-4 pt-2">
            <div
              v-for="item in order.items"
              :key="item.id"
              class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-12 text-xs sm:text-sm text-gray-800 font-urbanist pb-3 sm:pb-0 border-b sm:border-b-0 border-gray-100 last:border-b-0"
            >
              <!-- Product Name -->
              <span class="font-medium text-gray-900 flex-1 sm:truncate sm:pr-2">
                {{ item.name }}
              </span>

              <!-- Quantity, Unit Price, Total -->
              <div class="flex items-center justify-between sm:justify-end gap-2 sm:gap-12 shrink-0 text-[#757575]">
                <div class="flex items-center gap-3 sm:gap-0">
                  <span class="sm:w-24 sm:text-center shrink-0">
                    {{ item.quantity }}
                  </span>
                  <span class="sm:w-36 sm:text-right shrink-0">
                    {{ formatCurrency(item.price) }}
                  </span>
                </div>
                <span class="font-medium sm:font-normal text-gray-900 sm:text-[#757575] sm:w-40 text-right shrink-0">
                  {{ formatCurrency(item.price * item.quantity) }}
                </span>
              </div>
            </div>

            <hr class="border-gray-200/80 my-4" />

            <!-- Subtotal / Payment Fee & Total -->
            <div class="space-y-3 pt-2 font-urbanist">
              <!-- Biaya Pembayaran -->
              <div class="flex items-center justify-between gap-4 sm:gap-12 text-[#111827]">
                <span class="flex-1 text-left sm:text-right font-medium text-xs sm:text-base pr-0 sm:pr-[195px]">
                  Biaya Pembayaran
                </span>
                <span class="sm:w-40 text-right font-semibold text-xs sm:text-lg shrink-0">
                  {{ formatCurrency(order.paymentFee) }}
                </span>
              </div>

              <!-- Total -->
              <div class="flex items-center justify-between gap-4 sm:gap-12 text-[#111827]">
                <span class="flex-1 text-left sm:text-right font-medium text-sm sm:text-base pr-0 sm:pr-[195px]">
                  Total
                </span>
                <span class="sm:w-40 text-right font-semibold text-base sm:text-2xl shrink-0">
                  {{ formatCurrency(order.total) }}
                </span>
              </div>
            </div>
          </div>

          <!-- 7. Deskripsi Box -->
          <div class="space-y-2 pt-2">
            <h3 class="text-xs sm:text-sm text-gray-900">
              Deskripsi
            </h3>
            <div class="border border-[#F3F4F6] p-4 bg-gray-50/50 text-xs sm:text-sm text-[#757575] leading-relaxed">
              <template v-if="currentStatus === 'pending'">
                Pembayaran {{ firstItemSummary }} sudah diterbitkan- Invoice untuk {{ order.customer.name }}
              </template>
              <template v-else-if="currentStatus === 'expired'">
                Pembayaran {{ firstItemSummary }} sudah kadaluwarsa - Invoice untuk {{ order.customer.name }}
              </template>
              <template v-else-if="currentStatus === 'success'">
                Pembayaran {{ firstItemSummary }} sudah berhasil - Invoice untuk {{ order.customer.name }}
              </template>
            </div>
          </div>

          <!-- 8. Deskripsi Penerima Box -->
          <div class="space-y-2 pt-2">
            <h3 class="font-medium text-xs sm:text-sm text-gray-900">
              Deskripsi Penerima
            </h3>
            <div class="border border-[#F3F4F6] p-4 bg-gray-50/50 text-xs sm:text-sm text-[#757575] space-y-2 leading-relaxed">
              <p>
                <span>Nama:</span> {{ order.customer.name }}
              </p>
              <p>
                <span>Nomor Handphone:</span> {{ order.customer.phone }}
              </p>
              <p>
                <span>Alamat:</span> {{ order.customer.address }}
              </p>
            </div>
          </div>

        </div>

        <!-- 9. Footer Invoice (Light Blue Bottom Banner) -->
        <div class="bg-[#F0FAFF] px-6 sm:px-12 py-8 space-y-6">
          <p class="text-xs sm:text-sm text-[#4B5563] font-urbanist">
            Stripe, 510 Townsend Street, San Francisco CA 94103
          </p>

          <div class="flex items-center justify-between">
            <img
              src="/images/logo/Rectangle.svg"
              alt="PHRI Logo"
              class="h-8 sm:h-9 w-auto object-contain"
            />

            <!-- Social Icons (Twitter/X, Facebook, LinkedIn) -->
            <div class="flex items-center space-x-4 text-[#4B5563]">
              <!-- Twitter/X -->
              <a href="#" class="hover:text-gray-900 transition-colors" aria-label="Twitter">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <!-- Facebook -->
              <a href="#" class="hover:text-gray-900 transition-colors" aria-label="Facebook">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <!-- LinkedIn -->
              <a href="#" class="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.6 1.6 0 0 0-1.6 1.6c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6c0-.88-.72-1.6-1.6-1.6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCheckout } from '~/composables/useCheckout'
import { useToast } from '~/composables/useToast'

export type PaymentInvoiceStatus = 'pending' | 'expired' | 'success'

const props = withDefaults(
  defineProps<{
    status?: PaymentInvoiceStatus
  }>(),
  {
    status: 'pending'
  }
)

const route = useRoute()
const localePath = useLocalePath()
const { order } = useCheckout()
const { showToast } = useToast()

const currentStatus = computed<PaymentInvoiceStatus>(() => {
  const queryStatus = route.query.status as PaymentInvoiceStatus
  if (queryStatus && ['pending', 'expired', 'success'].includes(queryStatus)) {
    return queryStatus
  }
  return props.status
})

const pageTitle = computed(() => {
  switch (currentStatus.value) {
    case 'success':
      return 'Pembayaran Berhasil'
    case 'expired':
      return 'Pembayaran Kedaluwarsa'
    case 'pending':
    default:
      return 'Pembayaran / Invoice Pending'
  }
})

const paidAtDisplay = computed(() => {
  return order.value.paidAt || '03 September 2025, 23:59'
})

const firstItemSummary = computed(() => {
  if (!order.value.items || order.value.items.length === 0) return 'pesanan'
  const first = order.value.items[0]
  return `${first.quantity} ${first.name}`
})

const handlePay = () => {
  showToast('Fitur pembayaran belum tersedia dalam mode demo.', 'info', 3000)
}

const handleReorder = () => {
  navigateTo(localePath('/keranjang'))
}

const formatCurrency = (val: number) => {
  const formatted = new Intl.NumberFormat('id-ID').format(val || 0)
  return `Rp ${formatted}`
}
</script>
