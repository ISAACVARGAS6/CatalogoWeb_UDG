# 🦴 Back Bone - Script Interactivo del Catálogo

Un script de Node.js interactivo para explorar el catálogo de **Back Bone** desde la terminal.

## 🚀 Cómo usar el script

### Ejecutar el script:
```bash
node script-catalogo.js
```

O si quieres ejecutarlo como un ejecutable:
```bash
./script-catalogo.js
```

## 📋 Opciones disponibles:

### **1. Ver todos los productos**
Muestra todos los productos del catálogo con información detallada:
- Nombre del producto
- Precio
- Categoría
- Archivo de imagen
- Descuentos (si aplica)

### **2. Filtrar por categoría**
Permite filtrar productos por categoría:
- **Hoodies** (Ropa con capucha)
- **Camisetas** (Tops casuales)
- **Pantalones** (Cargos, joggers, etc.)
- **Accesorios** (Gorras, mochilas, etc.)

### **3. Ordenar por precio**
Opciones de ordenamiento:
- **Menor a mayor precio**: Del más barato al más caro
- **Mayor a menor precio**: Del más caro al más barato
- **Orden original**: Volver al orden predeterminado

### **4. Mostrar solo productos nuevos**
Filtra únicamente productos marcados como nuevos (badge azul [NUEVO])

### **5. Mostrar solo productos con descuento**
Muestra únicamente productos que tienen descuentos especiales

### **6. Buscar producto por nombre**
Búsqueda inteligente en tiempo real por nombre del producto

### **7. Estadísticas del catálogo**
Muestra estadísticas completas:
- Total de productos
- Productos por categoría
- Contador de productos nuevos
- Productos en oferta
- Rango de precios (mínimo, máximo, promedio)

### **8. Resetear filtros**
Vuelve a mostrar todos los productos (elimina todos los filtros aplicados)

### **0. Salir**
Cierra el script de forma elegante

## 🎨 Características del script:

### **Interfaz colorida**
- Cada opción tiene su color distintivo
- Badges para productos nuevos y descuentos
- Logo ASCII personalizado de Back Bone

### **Experiencia interactiva**
- Menú navegable con números
- Respuesta inmediata a tus acciones
- Confirmaciones visuales

### **Información detallada**
Para cada producto muestra:
- Nombre y descripción
- Precio actual y precio original (si hay descuento)
- Categorías
- Estado (nuevo, en oferta, etc.)
- Archivo de imagen asociado

### **Control total**
- Aplica múltiples filtros
- Combina ordenamiento con filtros
- Búsqueda por texto libre
- Reset completo cuando necesites empezar de nuevo

## 💡 Ejemplos de uso:

### Ejemplo 1: Explorar hoodies ordenados por precio
```
1. Seleccionar opción "2" (Filtrar por categoría)
2. Seleccionar "1" (Hoodies)
3. Seleccionar opción "3" (Ordenar por precio)
4. Seleccionar "1" (Menor a mayor precio)
```

### Ejemplo 2: Encontrar productos con ofertas especiales
```
1. Seleccionar opción "5" (Mostrar solo productos con descuento)
2. Ver lista de productos en oferta con descuentos mostrados
```

### Ejemplo 3: Buscar productos específicos
```
1. Seleccionar opción "6" (Buscar por nombre)
2. Escribir "black" para encontrar todos los productos que contengan esa palabra
```

## 🔧 Requisitos técnicos:

- **Node.js** instalado en tu sistema
- Terminal que soporte colores ANSI
- Permisos de ejecución (ya incluidos en el script)

## 🦴 Sobre Back Bone:

Este script es parte del ecosistema **Back Bone**, un catálogo moderno de ropa urbana diseñado para la generación actual. El script te permite explorar nuestros productos directamente desde la terminal con una experiencia interactiva y colorida.

¡Disfruta explorando el catálogo de Back Bone! 💀🔥


