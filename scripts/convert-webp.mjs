/**
 * convert-webp.mjs
 * Converts hero JPG images to WebP format using sharp.
 * Run: bun scripts/convert-webp.mjs
 */

import sharp from 'sharp'
import { readdir } from 'fs/promises'
import path from 'path'

const heroDir = path.resolve('public/images/home/hero')

const files = [
  'tumbler.jpg',
  'backpack.jpg',
  'glass.jpg',
  'shoes.jpg',
  'perfum.jpg',
  'bottle.jpg',
  'headphone.jpg',
]

console.log('Converting hero images to WebP...\n')

for (const file of files) {
  const input  = path.join(heroDir, file)
  const output = path.join(heroDir, file.replace(/\.jpg$/i, '.webp'))

  try {
    const info = await sharp(input)
      .webp({ quality: 88, effort: 4 })
      .toFile(output)

    console.log(`✓  ${file}  →  ${path.basename(output)}  (${(info.size / 1024).toFixed(1)} KB)`)
  } catch (err) {
    console.error(`✗  ${file}:`, err.message)
  }
}

console.log('\nDone.')
