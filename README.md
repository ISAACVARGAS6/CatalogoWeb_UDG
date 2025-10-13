# 🦴 Back Bone Urban Wear

![Back Bone Logo](https://via.placeholder.com/200x80/FF6B35/000000?text=BACK+BONE)

Un catálogo de ropa urbana moderno construido con **Astro** y **Sanity CMS**, desplegado dinámicamente en **Vercel**.

## 🚀 Demo en Vivo

🌐 **Sitio Web**: [https://back-bone-urban-wear.vercel.app](https://back-bone-urban-wear.vercel.app)  
📊 **Sanity Studio**: [https://back-bone-urban-wear.sanity.studio](https://back-bone-urban-wear.sanity.studio)

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX optimizada con Tailwind CSS
- 📱 **Responsive**: Perfecto en móviles, tablets y desktop
- ⚡ **Rendimiento**: Construido con Astro para máxima velocidad
- 🗄️ **CMS Dinámico**: Sanity para gestión de contenido
- 🔍 **SEO Optimizado**: Meta tags y estructura semántica
- 🚀 **Despliegue Automático**: CI/CD con Vercel
- 🛡️ **Tipado Seguro**: TypeScript en todo el proyecto

## 🏗️ Arquitectura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Astro Frontend │    │  Sanity CMS     │    │   Vercel Host   │
│                 │    │                 │    │                 │
│ • Páginas       │◄──►│ • Productos     │    │ • Despliegue    │
│ • Componentes   │    │ • Categorías    │    │ • CDN Global    │
│ • Estilos       │    │ • Colores       │    │ • SSL Automático│
│ • Queries       │    │ • Tallas        │    │ • Analytics     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Tecnologías

### Frontend
- **Astro** - Framework web moderno
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **React** - Componentes interactivos

### Backend
- **Sanity CMS** - Headless CMS
- **GROQ** - Query language para Sanity
- **Sanity Vision** - Editor de queries

### Despliegue
- **Vercel** - Plataforma de despliegue
- **GitHub Actions** - CI/CD automático
- **Edge Functions** - Funciones serverless

## 🚀 Instalación Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de Sanity

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/back-bone-urban-wear.git
cd back-bone-urban-wear
```

### 2. Instalar Dependencias
```bash
# Frontend
npm install

# Backend (Sanity)
cd BackBoneBackEnd
npm install
cd ..
```

### 3. Configurar Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp env.example .env.local

# Editar con tus valores
nano .env.local
```

Variables necesarias:
```env
SANITY_PROJECT_ID=tu_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_USE_CDN=true
```

### 4. Ejecutar en Desarrollo
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Sanity Studio
npm run sanity:dev
```

Accede a:
- Frontend: http://localhost:4321
- Sanity Studio: http://localhost:3333

## 📊 Estructura del Proyecto

```
back-bone-urban-wear/
├── 📁 src/
│   ├── 📁 components/          # Componentes Astro
│   │   ├── ProductCard.astro
│   │   └── FilterSection.astro
│   ├── 📁 layouts/             # Layouts base
│   │   └── Layout.astro
│   ├── 📁 lib/                 # Utilidades
│   │   ├── sanityClient.ts
│   │   └── queries.ts
│   ├── 📁 pages/               # Páginas del sitio
│   │   ├── index.astro
│   │   ├── producto/[id].astro
│   │   └── categoria/[id].astro
│   └── 📁 types/               # Tipos TypeScript
│       └── sanity.ts
├── 📁 BackBoneBackEnd/         # Sanity CMS
│   ├── 📁 schemaTypes/         # Esquemas de datos
│   ├── sanity.config.ts
│   └── package.json
├── 📁 scripts/                 # Scripts de utilidad
│   └── populate-sanity.js
├── 📁 assets/                  # Imágenes estáticas
├── astro.config.mjs
├── vercel.json
└── package.json
```

## 🎨 Esquemas de Datos

### Producto
```typescript
{
  name: string;           // Nombre del producto
  description: string;    // Descripción general
  price: number;          // Precio
  images: string[];       // Array de URLs de imágenes
  category: Category;     // Referencia a categoría
  color: Color;          // Referencia a color
  size: Size;            // Referencia a talla
  inStock: boolean;      // Disponibilidad
}
```

### Categoría
```typescript
{
  name: string;          // Nombre de la categoría
  description: string;   // Descripción opcional
}
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run sanity:dev       # Sanity Studio

# Build
npm run build            # Build de producción
npm run preview          # Preview del build

# Sanity
npm run sanity:build     # Build de Sanity
npm run sanity:deploy    # Desplegar Sanity

# Utilidades
npm run populate         # Poblar datos de ejemplo
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar con GitHub**
   ```bash
   # Push a GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configurar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Configura las variables de entorno
   - ¡Despliegue automático!

3. **Variables de Entorno en Vercel**
   ```
   SANITY_PROJECT_ID=tu_project_id
   SANITY_DATASET=production
   SANITY_API_VERSION=2025-01-01
   SANITY_USE_CDN=true
   ```

### Sanity Studio

```bash
cd BackBoneBackEnd
npm run deploy
```

## 📱 Responsive Design

- 📱 **Mobile First**: 320px+
- 📱 **Tablet**: 768px+
- 💻 **Desktop**: 1024px+
- 🖥️ **Large**: 1440px+

## 🎯 Próximas Características

- [ ] 🛒 **Carrito de Compras**
- [ ] 💳 **Sistema de Pagos**
- [ ] 👤 **Autenticación de Usuarios**
- [ ] 🔍 **Búsqueda Avanzada**
- [ ] 📊 **Analytics Integrado**
- [ ] 🌐 **PWA Support**
- [ ] 🎨 **Tema Oscuro/Claro**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Astro](https://astro.build/) - Framework web moderno
- [Sanity](https://www.sanity.io/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vercel](https://vercel.com/) - Plataforma de despliegue

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐