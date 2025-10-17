# 🔗 Conexión Sanity + Astro - Back Bone Urban Wear

## 📋 Resumen del Proyecto

Este proyecto conecta **Sanity CMS** (backend) con **Astro** (frontend) para crear un catálogo de ropa urbana dinámico y moderno.

## 🏗️ Arquitectura

```
Proyecto_VIII/
├── BackBoneBackEnd/          # Sanity CMS (Backend)
│   ├── schemaTypes/          # Esquemas de datos
│   │   ├── product.ts        # Esquema de productos
│   │   ├── category.ts       # Esquema de categorías
│   │   ├── color.ts          # Esquema de colores
│   │   └── size.ts           # Esquema de tallas
│   └── sanity.config.ts      # Configuración de Sanity
├── src/                      # Astro Frontend
│   ├── lib/
│   │   ├── sanityClient.ts   # Cliente de Sanity
│   │   └── queries.ts        # Queries de Sanity
│   ├── components/
│   │   ├── ProductCard.astro # Tarjeta de producto
│   │   └── FilterSection.astro # Filtros
│   ├── pages/
│   │   ├── index.astro       # Página principal
│   │   ├── producto/[id].astro # Página de producto
│   │   └── categoria/[id].astro # Página de categoría
│   └── types/
│       └── sanity.ts         # Tipos TypeScript
└── scripts/
    └── populate-sanity.js    # Script para poblar datos
```

## ⚙️ Configuración

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Sanity Configuration
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_USE_CDN=true

# Token de escritura (opcional, para scripts)
SANITY_API_TOKEN=tu_token_aqui
```

### 2. Configuración de Sanity

**BackBoneBackEnd/sanity.config.ts:**
```typescript
export default defineConfig({
  name: 'default',
  title: 'BackBone_BackEnd',
  projectId: process.env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

### 3. Configuración de Astro

**astro.config.mjs:**
```javascript
export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      projectId: import.meta.env.SANITY_PROJECT_ID || 'your-project-id',
      dataset: 'production',
      apiVersion: '2025-01-01',
      useCdn: true,
    })
  ],
  // ... otras configuraciones
});
```

## 🚀 Instalación y Uso

### 1. Instalar Dependencias

```bash
# Instalar dependencias del frontend
npm install

# Instalar dependencias del backend
cd BackBoneBackEnd
npm install
```

### 2. Ejecutar Sanity Studio

```bash
cd BackBoneBackEnd
npm run dev
```

Accede a `http://localhost:3333` para gestionar el contenido.

### 3. Ejecutar Frontend Astro

```bash
npm run dev
```

Accede a `http://localhost:4321` para ver el sitio web.

## 📊 Esquemas de Datos

### Producto
- `name`: Nombre del producto
- `description`: Descripción general
- `details`: Detalles en formato Portable Text
- `price`: Precio (número)
- `images`: Array de imágenes
- `category`: Referencia a categoría
- `color`: Referencia a color
- `size`: Referencia a talla
- `inStock`: Disponibilidad (boolean)

### Categoría
- `name`: Nombre de la categoría
- `description`: Descripción opcional

### Color
- `name`: Nombre del color
- `hex`: Código hexadecimal

### Talla
- `name`: Talla (XS, S, M, L, XL, XXL)

## 🔍 Queries Disponibles

### Obtener Todos los Productos
```typescript
const products = await getProducts()
```

### Obtener Productos por Categoría
```typescript
const products = await getProductsByCategory('Hoodies')
```

### Obtener Categorías
```typescript
const categories = await getCategories()
```

### Obtener Producto por ID
```typescript
const product = await getProductById('product-id')
```

### Obtener Productos Destacados
```typescript
const featured = await getFeaturedProducts(8)
```

## 🎨 Características del Frontend

### Página Principal (`/`)
- Hero section con información de la marca
- Categorías destacadas
- Grid de productos con filtros
- Newsletter signup

### Página de Producto (`/producto/[id]`)
- Vista detallada del producto
- Galería de imágenes
- Información de color, talla y stock
- Botones de acción (carrito, favoritos)

### Página de Categoría (`/categoria/[id]`)
- Productos filtrados por categoría
- Información de la categoría
- Grid responsive de productos

## 🛠️ Scripts Útiles

### Poblar Datos de Ejemplo
```bash
node scripts/populate-sanity.js
```

### Build del Proyecto
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

## 🔧 Solución de Problemas

### Error de Conexión a Sanity
1. Verifica que el `projectId` sea correcto
2. Confirma que el dataset sea `production`
3. Revisa las variables de entorno

### Productos No Aparecen
1. Verifica que hay productos creados en Sanity Studio
2. Revisa la consola del navegador para errores
3. Confirma que las queries están correctas

### Errores de Tipos TypeScript
1. Verifica que los tipos en `src/types/sanity.ts` coincidan
2. Revisa las interfaces de los componentes
3. Actualiza los tipos si cambias los esquemas

## 📱 Responsive Design

El proyecto está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Próximos Pasos

1. **Autenticación**: Implementar sistema de usuarios
2. **Carrito de Compras**: Funcionalidad de e-commerce
3. **Pagos**: Integración con Stripe/PayPal
4. **SEO**: Optimización para motores de búsqueda
5. **PWA**: Convertir en Progressive Web App

## 📞 Soporte

Para problemas o preguntas:
1. Revisa la documentación de [Sanity](https://www.sanity.io/docs)
2. Consulta la documentación de [Astro](https://docs.astro.build)
3. Verifica los logs de la consola del navegador

---

**¡El proyecto está listo para usar! 🎉**
