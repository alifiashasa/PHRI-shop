<template>
  <div
    ref="containerRef"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    class="marquee-container w-full overflow-hidden relative h-[240px] sm:h-[300px] md:h-[350px] lg:h-[390px] select-none cursor-pointer"
  >
    <!-- Marquee Animated Track -->
    <div class="marquee-track relative w-full h-full">
      <div
        v-for="(card, index) in displayCards"
        :key="index"
        :ref="(el) => setCardRef(el, index)"
        class="absolute top-1/2 left-0 flex-shrink-0 h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] aspect-[2/3] flex items-center justify-center group will-change-transform"
      >
        <img
          :src="card.image"
          :alt="card.name"
          @load="onImageLoad"
          class="w-full h-full object-cover rounded-2xl sm:rounded-[24px] shadow-sm border border-black/5 select-none pointer-events-none"
          loading="eager"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const heroCards = [
  { name: 'Polo PHRI', image: '/images/home/hero/card-1.webp' },
  { name: 'Banner PHRI', image: '/images/home/hero/card-2.webp' },
  { name: 'T-Shirt PHRI', image: '/images/home/hero/card-3.webp' },
  { name: 'Batik PHRI', image: '/images/home/hero/card-4.webp' },
  { name: 'Bucket Hat PHRI', image: '/images/home/hero/card-5.webp' },
  { name: 'Lanyard PHRI', image: '/images/home/hero/card-6.webp' },
  { name: 'Headphone PHRI', image: '/images/home/hero/card-7.webp' }
]

// Repeat cards 4 times to ensure an expansive track for seamless infinite wrapping
const displayCards = computed(() => [
  ...heroCards,
  ...heroCards,
  ...heroCards,
  ...heroCards
])

const containerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<(HTMLElement | null)[]>([])
const isPaused = ref(false)

const setCardRef = (el: any, index: number) => {
  if (el) {
    cardRefs.value[index] = el as HTMLElement
  }
}

// Animation state variables
let rafId: number | null = null
let lastTime: number | null = null
let globalOffset = 0
const SPEED_PX_PER_SEC = 60 // Constant smooth scrolling speed (pixels per second)

// Scale settings: Center = 0.85 (smallest), Edge = 1.08 (largest)
const MIN_SCALE = 0.85
const MAX_SCALE = 1.08
const SCALE_EXPONENT = 1.2

// Calculated track geometry
let cardWidths: number[] = []
let baseX: number[] = []
let totalTrackWidth = 0
const GAP = 24 // Target visual gap in pixels

const measureTrackGeometry = () => {
  const validEls = cardRefs.value.filter(Boolean) as HTMLElement[]
  if (validEls.length === 0) return

  cardWidths = validEls.map((el) => el.offsetWidth || 260)

  baseX = new Array(cardWidths.length)
  let currentPos = 0
  for (let i = 0; i < cardWidths.length; i++) {
    baseX[i] = currentPos
    currentPos += cardWidths[i] + GAP
  }
  totalTrackWidth = currentPos
}

const onImageLoad = () => {
  measureTrackGeometry()
}

const updateTicker = (timestamp: number) => {
  if (!lastTime) lastTime = timestamp
  const dt = Math.min((timestamp - lastTime) / 1000, 0.1)
  lastTime = timestamp

  if (containerRef.value && cardRefs.value.length > 0) {
    if (totalTrackWidth === 0) {
      measureTrackGeometry()
    }

    if (!isPaused.value && totalTrackWidth > 0) {
      globalOffset += SPEED_PX_PER_SEC * dt
      globalOffset %= totalTrackWidth
    }

    const containerRect = containerRef.value.getBoundingClientRect()
    const containerWidth = containerRect.width || window.innerWidth
    const containerCenter = containerWidth / 2
    const halfWidth = containerWidth / 2

    const validEls = cardRefs.value.filter(Boolean) as HTMLElement[]

    if (validEls.length > 0 && totalTrackWidth > 0) {
      validEls.forEach((cardEl, idx) => {
        const w = cardWidths[idx] || cardEl.offsetWidth || 260
        const bX = baseX[idx] ?? (idx * (260 + GAP))

        // Raw continuous wrapped track position
        let x = (bX - globalOffset) % totalTrackWidth
        if (x < -w - GAP) {
          x += totalTrackWidth
        } else if (x > totalTrackWidth - w - GAP) {
          x -= totalTrackWidth
        }

        // Distance from viewport center
        const cardCenter = x + w / 2
        const distFromCenter = cardCenter - containerCenter
        const normDist = Math.max(-1.5, Math.min(1.5, distFromCenter / halfWidth))

        // Continuous scale based on distance from center
        const absNorm = Math.min(Math.abs(normDist), 1.2)
        const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * Math.pow(absNorm, SCALE_EXPONENT)

        // Mathematical continuous position integral shift:
        // Compensates for visual width expansion/contraction due to scaling
        // ensuring the edge-to-edge gap between adjacent cards remains perfectly uniform.
        const integralTerm = ((MAX_SCALE - MIN_SCALE) / (SCALE_EXPONENT + 1)) * Math.pow(absNorm, SCALE_EXPONENT) * normDist
        const linearTerm = (MIN_SCALE - 1) * normDist
        const shiftX = halfWidth * (linearTerm + integralTerm)

        const finalX = x + shiftX

        // Render card with hardware acceleration
        cardEl.style.transform = `translate3d(${finalX.toFixed(2)}px, -50%, 0) scale(${scale.toFixed(4)})`
      })
    }
  }

  rafId = requestAnimationFrame(updateTicker)
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  measureTrackGeometry()
  rafId = requestAnimationFrame(updateTicker)

  if (containerRef.value && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      measureTrackGeometry()
    })
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<style scoped>
/* Seamless 60fps infinite marquee with continuous position-based dynamic scale and uniform visual spacing */
.marquee-container {
  contain: layout paint;
}
</style>
