import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Necesitarás un token de escritura
})

// Datos de ejemplo para poblar Sanity
const categories = [
  { _type: 'category', name: 'Hoodies', description: 'Hoodies urbanos de alta calidad' },
  { _type: 'category', name: 'Camisetas', description: 'Camisetas de estilo urbano' },
  { _type: 'category', name: 'Pantalones', description: 'Pantalones urbanos y cómodos' },
  { _type: 'category', name: 'Accesorios', description: 'Accesorios para completar tu look urbano' }
]

const colors = [
  { _type: 'color', name: 'Negro', hex: '#000000' },
  { _type: 'color', name: 'Blanco', hex: '#FFFFFF' },
  { _type: 'color', name: 'Rojo', hex: '#FF0000' },
  { _type: 'color', name: 'Azul', hex: '#0000FF' },
  { _type: 'color', name: 'Verde', hex: '#00FF00' },
  { _type: 'color', name: 'Gris', hex: '#808080' }
]

const sizes = [
  { _type: 'size', name: 'XS' },
  { _type: 'size', name: 'S' },
  { _type: 'size', name: 'M' },
  { _type: 'size', name: 'L' },
  { _type: 'size', name: 'XL' },
  { _type: 'size', name: 'XXL' }
]

const products = [
  {
    _type: 'product',
    name: 'Hoodie Urban Black',
    description: 'Hoodie urbano de alta calidad con diseño moderno y cómodo.',
    price: 89.99,
    category: { _type: 'reference', _ref: 'category-hoodies' },
    color: { _type: 'reference', _ref: 'color-negro' },
    size: { _type: 'reference', _ref: 'size-m' },
    inStock: true
  },
  {
    _type: 'product',
    name: 'Tee Underground',
    description: 'Camiseta básica con estilo urbano y diseño minimalista.',
    price: 39.99,
    category: { _type: 'reference', _ref: 'category-camisetas' },
    color: { _type: 'reference', _ref: 'color-blanco' },
    size: { _type: 'reference', _ref: 'size-l' },
    inStock: true
  },
  {
    _type: 'product',
    name: 'Cargo Urban',
    description: 'Pantalones cargo con múltiples bolsillos y estilo urbano.',
    price: 129.99,
    category: { _type: 'reference', _ref: 'category-pantalones' },
    color: { _type: 'reference', _ref: 'color-negro' },
    size: { _type: 'reference', _ref: 'size-m' },
    inStock: true
  },
  {
    _type: 'product',
    name: 'Cap Urban',
    description: 'Gorra urbana con diseño moderno y ajuste perfecto.',
    price: 39.99,
    category: { _type: 'reference', _ref: 'category-accesorios' },
    color: { _type: 'reference', _ref: 'color-negro' },
    inStock: true
  }
]

async function populateSanity() {
  try {
    console.log('🚀 Iniciando población de datos en Sanity...')
    
    // Crear categorías
    console.log('📁 Creando categorías...')
    for (const category of categories) {
      const result = await client.create(category)
      console.log(`✅ Categoría creada: ${category.name} (${result._id})`)
    }
    
    // Crear colores
    console.log('🎨 Creando colores...')
    for (const color of colors) {
      const result = await client.create(color)
      console.log(`✅ Color creado: ${color.name} (${result._id})`)
    }
    
    // Crear tallas
    console.log('📏 Creando tallas...')
    for (const size of sizes) {
      const result = await client.create(size)
      console.log(`✅ Talla creada: ${size.name} (${result._id})`)
    }
    
    // Crear productos
    console.log('👕 Creando productos...')
    for (const product of products) {
      const result = await client.create(product)
      console.log(`✅ Producto creado: ${product.name} (${result._id})`)
    }
    
    console.log('🎉 ¡Población de datos completada exitosamente!')
    
  } catch (error) {
    console.error('❌ Error al poblar datos:', error)
  }
}

// Ejecutar solo si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  populateSanity()
}

export { populateSanity }
