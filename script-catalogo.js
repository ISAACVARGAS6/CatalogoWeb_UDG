#!/usr/bin/env node

// 🦴 BACK BONE - Script Interactivo del Catálogo
import readline from 'readline';

// Datos del catálogo Back Bone
const productos = [
  // Hoodies
  { nombre: "Hoodie Urban Black", precio: 89.99, categoria: "Hoodies", imagen: "ima1.webp", nuevo: true, descuento: null },
  { nombre: "Hoodie Street White", precio: 94.99, categoria: "Hoodies", imagen: "ima2.webp", nuevo: false, descuento: 20 },
  { nombre: "Hoodie Graffiti Red", precio: 79.99, categoria: "Hoodies", imagen: "ima3.webp", nuevo: false, descuento: null },
  { nombre: "Hoodie Neon Green", precio: 99.99, categoria: "Hoodies", imagen: "ima4.webp", nuevo: true, descuento: null },
  { nombre: "Hoodie Street Art Blue", precio: 84.99, categoria: "Hoodies", imagen: "ima5.webp", nuevo: false, descuento: null },
  
  // Camisetas
  { nombre: "Tee Underground Black", precio: 39.99, categoria: "Camisetas", imagen: "ima6.webp", nuevo: false, descuento: null },
  { nombre: "Tee Street Art White", precio: 44.99, categoria: "Camisetas", imagen: "ima7.webp", nuevo: false, descuento: 15 },
  { nombre: "Tee Minimalist Gray", precio: 49.99, categoria: "Camisetas", imagen: "ima9.webp", nuevo: true, descuento: null },
  { nombre: "Tee Vintage Logo", precio: 54.99, categoria: "Camisetas", imagen: "ima10.webp", nuevo: false, descuento: 25 },
  { nombre: "Tee Back Bone Brand", precio: 34.99, categoria: "Camisetas", imagen: "ima11.webp", nuevo: false, descuento: null },
  
  // Pantalones
  { nombre: "Cargo Urban Black", precio: 129.99, categoria: "Pantalones", imagen: "ima12.webp", nuevo: true, descuento: null },
  { nombre: "Jogger Street Gray", precio: 119.99, categoria: "Pantalones", imagen: "ima13.webp", nuevo: false, descuento: 30 },
  { nombre: "Sweatpants Comfort", precio: 109.99, categoria: "Pantalones", imagen: "ima14.webp", nuevo: false, descuento: null },
  { nombre: "Biker Shorts Black", precio: 69.99, categoria: "Pantalones", imagen: "ima15.webp", nuevo: true, descuento: null },
  
  // Accesorios
  { nombre: "Cap Urban Logo", precio: 39.99, categoria: "Accesorios", imagen: "ima16.webp", nuevo: false, descuento: 20 },
  { nombre: "Beanie Street Style", precio: 29.99, categoria: "Accesorios", imagen: "ima17.webp", nuevo: true, descuento: null },
  { nombre: "Backpack Urban", precio: 79.99, categoria: "Accesorios", imagen: "ima18.webp", nuevo: false, descuento: null },
  { nombre: "Wallet Minimal Black)", precio: 24.99, categoria: "Accesorios", imagen: "ima19.webp", nuevo: true, descuento: null }
];

let productosFiltrados = [...productos];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Colores para consola
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function mostrarLogo() {
  console.log(colors.cyan + colors.bold);
  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║                           🦴 BACK BONE                          ║');
  console.log('║                    💀 Catálogo Interactivo                      ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝');
  console.log(colors.reset);
}

function mostrarMenu() {
  console.log(colors.yellow + colors.bold + '\n📋 OPCIONES DISPONIBLES:' + colors.reset);
  console.log(`${colors.green}1.${colors.reset} Ver todos los productos`);
  console.log(`${colors.green}2.${colors.reset} Filtrar por categoría`);
  console.log(`${colors.green}3.${colors.reset} Ordenar por precio`);
  console.log(`${colors.green}4.${colors.reset} Mostrar solo productos nuevos`);
  console.log(`${colors.green}5.${colors.reset} Mostrar solo productos con descuento`);
  console.log(`${colors.green}6.${colors.reset} Buscar producto por nombre`);
  console.log(`${colors.green}7.${colors.reset} Estadísticas del catálogo`);
  console.log(`${colors.green}8.${colors.reset} Resetear filtros`);
  console.log(`${colors.red}0.${colors.reset} Salir`);
}

function mostrarProductos(productosArray = productosFiltrados) {
  if (productosArray.length === 0) {
    console.log(colors.red + '❌ No se encontraron productos con los filtros aplicados.' + colors.reset);
    return;
  }

  console.log(colors.cyan + colors.bold + `\n🛍️ Mostrando ${productosArray.length} productos:` + colors.reset);
  console.log(''.repeat(100));
  
  productosArray.forEach((producto, index) => {
    const badges = [];
    
    if (producto.nuevo) badges.push(colors.blue + '[NUEVO]' + colors.reset);
    if (producto.descuento) badges.push(colors.red + `[-${producto.descuento}%]` + colors.reset);
    
    const badgeString = badges.length > 0 ? ' ' + badges.join(' ') : '';
    
    console.log(`${colors.yellow}${index + 1}.${colors.reset} ${colors.bold}${producto.nombre}${colors.reset}${badgeString}`);
    console.log(`   💰 Precio: ${colors.green}$${producto.precio}${colors.reset}`);
    console.log(`   📂 Categoría: ${colors.magenta}${producto.categoria}${colors.reset}`);
    console.log(`   🖼️ Imagen: ${colors.cyan}${producto.imagen}${colors.reset}`);
    
    if (producto.descuento) {
      const precioOriginal = producto.precio / (1 - producto.descuento / 100);
      console.log(`   ✅ Descuento: ${colors.red}$${precioOriginal.toFixed(2)} → $${producto.precio}${colors.reset}`);
    }
    
    console.log('');
  });
}

function filtrarPorCategoria() {
  console.log(colors.yellow + colors.bold + '\n📂 Selecciona una categoría:' + colors.reset);
  
  const categorias = [...new Set(productos.map(p => p.categoria))];
  categorias.forEach((cat, index) => {
    const cantidad = productos.filter(p => p.categoria === cat).length;
    console.log(`${colors.green}${index + 1}.${colors.reset} ${colors.magenta}${cat}${colors.reset} (${cantidad} productos)`);
  });
  
  console.log(`${colors.green}${categorias.length + 1}.${colors.reset} Ver todas las categorías`);
  
  rl.question(colors.cyan + '\nIngresa tu opción: ' + colors.reset, (respuesta) => {
    const opcion = parseInt(respuesta);
    
    if (opcion >= 1 && opcion <= categorias.length) {
      const categoria = categorias[opcion - 1];
      productosFiltrados = productos.filter(p => p.categoria === categoria);
      console.log(colors.green + `✅ Filtrado: ${categoria}${colors.reset}`);
      mostrarProductos();
    } else if (opcion === categorias.length + 1) {
      productosFiltrados = [...productos];
      console.log(colors.green + '✅ Mostrando todas las categorías' + colors.reset);
      mostrarProductos();
    } else {
      console.log(colors.red + '❌ Opción inválida' + colors.reset);
    }
    
    procesarOpcion();
  });
}

function ordenarPorPrecio() {
  console.log(colors.yellow + colors.bold + '\n💰 Opciones de ordenamiento:' + colors.reset);
  console.log(`${colors.green}1.${colors.reset} Menor a mayor precio`);
  console.log(`${colors.green}2.${colors.reset} Mayor a menor precio`);
  console.log(`${colors.green}3.${colors.reset} Volver al orden original`);
  
  rl.question(colors.cyan + '\nIngresa tu opción: ' + colors.reset, (respuesta) => {
    console.log('');
    
    switch (respuesta) {
      case '1':
        productosFiltrados.sort((a, b) => a.precio - b.precio);
        console.log(colors.green + '✅ Ordenado por precio: menor a mayor' + colors.reset);
        break;
      case '2':
        productosFiltrados.sort((a, b) => b.precio - a.precio);
        console.log(colors.green + '✅ Ordenado por precio: mayor a menor' + colors.reset);
        break;
      case '3':
        productosFiltrados = [...productos];
        console.log(colors.green + '✅ Orden original restaurado' + colors.reset);
        break;
      default:
        console.log(colors.red + '❌ Opción inválida' + colors.reset);
        return procesarOpcion();
    }
    
    mostrarProductos();
    procesarOpcion();
  });
}

function mostrarSoloNuevos() {
  productosFiltrados = productos.filter(p => p.nuevo);
  console.log(colors.green + '✅ Filtrado: Solo productos nuevos' + colors.reset);
  mostrarProductos();
}

function mostrarSoloDescuentos() {
  productosFiltrados = productos.filter(p => p.descuento);
  console.log(colors.green + '✅ Filtrado: Solo productos con descuento' + colors.reset);
  mostrarProductos();
}

function buscarProducto() {
  rl.question(colors.cyan + '\n🔍 Ingresa el nombre del producto a buscar: ' + colors.reset, (busqueda) => {
    if (busqueda.trim() === '') {
      console.log(colors.red + '❌ Por favor ingresa un término de búsqueda' + colors.reset);
      return procesarOpcion();
    }
    
    const productosEncontrados = productos.filter(p => 
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    
    if (productosEncontrados.length === 0) {
      console.log(colors.red + `❌ No se encontraron productos con "${busqueda}"` + colors.reset);
    } else {
      productosFiltrados = productosEncontrados;
      console.log(colors.green + `✅ ${productosEncontrados.length} producto(s) encontrado(s) con "${busqueda}"` + colors.reset);
      mostrarProductos();
    }
    
    procesarOpcion();
  });
}

function mostrEstadisticas() {
  console.log(colors.cyan + colors.bold + '\n📊 ESTADÍSTICAS DEL CATÁLOGO BACK BONE' + colors.reset);
  console.log(''.repeat(50));
  
  // Estadísticas generales
  console.log(`${colors.yellow}📈 Total de productos:${colors.reset} ${colors.bold}${productos.length}${colors.reset}`);
  
  // Por categoría
  const categorias = [...new Set(productos.map(p => p.categoria))];
  categorias.forEach(cat => {
    const cantidad = productos.filter(p => p.categoria === cat).length;
    console.log(`${colors.magenta}${cat}:${colors.reset} ${cantidad} productos`);
  });
  
  // Productos nuevos
  const nuevos = productos.filter(p => p.nuevo).length;
  console.log(`${colors.blue}🔥 Productos nuevos:${colors.reset} ${nuevos}`);
  
  // Productos con descuento
  const conDescuento = productos.filter(p => p.descuento).length;
  console.log(`${colors.red}💰 Productos con descuento:${colors.reset} ${conDescuento}`);
  
  // Rango de precios
  const precios = productos.map(p => p.precio);
  const precioMin = Math.min(...precios);
  const precioMax = Math.max(...precios);
  const precioPromedio = precios.reduce((a, b) => a + b, 0) / precios.length;
  
  console.log(`${colors.green}💸 Precio más bajo:${colors.reset }$${precioMin}`);
  console.log(`${colors.green}💸 Precio más alto:${colors.reset} $${precioMax}`);
  console.log(`${colors.green}💸 Precio promedio:${colors.reset} $${precioPromedio.toFixed(2)}`);
  
  console.log('\n' + colors.yellow + 'Presiona Enter para continuar...' + colors.reset);
}

function resetearFiltros() {
  productosFiltrados = [...productos];
  console.log(colors.green + '✅ Todos los filtros han sido reseteados' + colors.reset);
  mostrarProductos();
}

function procesarOpcion() {
  setTimeout(() => {
    mostrarMenu();
    
    rl.question(colors.cyan + '\n🎯 Selecciona una opción: ' + colors.reset, (opcion) => {
      console.log('');
      
      switch (opcion) {
        case '1':
          console.log(colors.green + '✅ Mostrando todos los productos' + colors.reset);
          mostrarProductos();
          break;
        case '2':
          filtrarPorCategoria();
          return;
        case '3':
          ordenarPorPrecio();
          return;
        case '4':
          mostrarSoloNuevos();
          break;
        case '5':
          mostrarSoloDescuentos();
          break;
        case '6':
          buscarProducto();
          return;
        case '7':
          mostrEstadisticas();
          break;
        case '8':
          resetearFiltros();
          break;
        case '0':
          console.log(colors.yellow + colors.bold + '\n🦴 ¡Gracias por usar Back Bone! ¡Hasta la próxima! 💀' + colors.reset);
          rl.close();
          return;
        default:
          console.log(colors.red + '❌ Opción inválida. Por favor selecciona un número del 0-8.' + colors.reset);
      }
      
      if (opcion !== '0') {
        procesarOpcion();
      }
    });
  }, 100);
}

// Función principal
function iniciar() {
  mostrarLogo();
  console.log(colors.white + 'Bienvenido al catálogo interactivo de Back Bone.');
  console.log('Explora nuestros productos urbanos con estilo auténtico 💀' + colors.reset);
  
  setTimeout(() => {
    procesarOpcion();
  }, 1500);
}

// Iniciar el script
iniciar();

// Manejo de interrupciones
process.on('SIGINT', () => {
  console.log(colors.yellow + colors.bold + '\n\n🦴 ¡Gracias por usar Back Bone! ¡Hasta la próxima! 💀' + colors.reset);
  process.exit(0);
});
