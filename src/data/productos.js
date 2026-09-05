// Catálogo de muestra para la demo. Los datos reales los sustituye la tienda.
// Fase 3: esta lista pasa a ser una tabla de Supabase editable desde el panel.

export const juegos = [
  {
    slug: 'one-piece',
    nombre: 'One Piece',
    mark: 'var(--game-onepiece)',
    entradilla: 'Sobres, cajas y mazos de inicio del juego de cartas de One Piece. Todo precintado de fábrica.',
  },
  {
    slug: 'magic',
    nombre: 'Magic',
    mark: 'var(--game-magic)',
    entradilla: 'Displays, mazos y sobres de Magic. El idioma de cada producto está en su ficha.',
  },
  {
    slug: 'pokemon',
    nombre: 'Pokémon',
    mark: 'var(--game-pokemon)',
    entradilla: 'Elite Trainer Box, displays y sobres de Pokémon. Sellado, sin abrir ni reempaquetar.',
  },
  {
    slug: 'naruto',
    nombre: 'Naruto',
    mark: 'var(--game-naruto)',
    entradilla: 'Producto sellado de Naruto. Catálogo corto: lo que está aquí es lo que hay en almacén.',
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios',
    mark: 'var(--game-accesorios)',
    entradilla: 'Fundas, cajas y tapetes para guardar y jugar sin que las cartas se estropeen.',
  },
];

export const productos = [
  {
    slug: 'elite-trainer-box-pokemon',
    nombre: 'Elite Trainer Box',
    juego: 'pokemon',
    tipo: 'Caja',
    forma: 'etb',
    idioma: 'Español',
    precio: 49.95,
    stock: 6,
    destacado: true,
    resumen: 'Nueve sobres, dados, fundas y separadores. La entrada más cómoda a una expansión.',
  },
  {
    slug: 'caja-36-sobres-pokemon',
    nombre: 'Caja de 36 sobres',
    juego: 'pokemon',
    tipo: 'Display',
    forma: 'display',
    idioma: 'Español',
    precio: 149.95,
    stock: 2,
    destacado: true,
    resumen: 'Display completo precintado. Lo que se abre en directo y lo que se guarda para coleccionar.',
  },
  {
    slug: 'sobre-suelto-pokemon',
    nombre: 'Sobre suelto',
    juego: 'pokemon',
    tipo: 'Sobre',
    forma: 'sobre',
    idioma: 'Español',
    precio: 4.95,
    stock: 40,
    destacado: false,
    resumen: 'Sobre individual sacado de display precintado. Para probar suerte sin gastar de más.',
  },
  {
    slug: 'play-booster-box-magic',
    nombre: 'Play Booster Box',
    juego: 'magic',
    tipo: 'Display',
    forma: 'display',
    idioma: 'Inglés',
    precio: 119.95,
    stock: 4,
    destacado: true,
    resumen: 'Treinta sobres de juego. El formato pensado para draft en mesa con amigos.',
  },
  {
    slug: 'collector-booster-box-magic',
    nombre: 'Collector Booster Box',
    juego: 'magic',
    tipo: 'Display',
    forma: 'display',
    idioma: 'Inglés',
    precio: 249.95,
    stock: 1,
    destacado: false,
    resumen: 'Doce sobres de coleccionista, con las versiones especiales de la expansión.',
  },
  {
    slug: 'mazo-commander-magic',
    nombre: 'Mazo Commander',
    juego: 'magic',
    tipo: 'Mazo',
    forma: 'mazo',
    idioma: 'Inglés',
    precio: 44.95,
    stock: 8,
    destacado: false,
    resumen: 'Cien cartas listas para jugar la misma tarde. No hace falta construir nada.',
  },
  {
    slug: 'bundle-magic',
    nombre: 'Bundle de expansión',
    juego: 'magic',
    tipo: 'Pack',
    forma: 'pack',
    idioma: 'Inglés',
    precio: 54.95,
    stock: 5,
    destacado: false,
    resumen: 'Nueve sobres, tierras básicas y caja de almacenaje con el arte de la expansión.',
  },
  {
    slug: 'caja-op17-time-of-battle',
    nombre: 'Caja OP-17 The Time of Battle',
    juego: 'one-piece',
    tipo: 'Display',
    forma: 'display',
    idioma: 'Inglés',
    precio: 345,
    stock: null,
    destacado: true,
    resumen: 'Display precintado del bloque OP-17, The Time of Battle.',
  },
  {
    slug: 'case-op17-time-of-battle',
    nombre: 'Case OP-17 The Time of Battle',
    juego: 'one-piece',
    tipo: 'Case de 12 cajas',
    forma: 'case',
    idioma: 'Inglés',
    precio: 4150,
    stock: null,
    destacado: false,
    resumen: 'Case completo de doce cajas del bloque OP-17, sin abrir.',
  },
  {
    slug: 'premium-card-collection-vol6',
    nombre: 'Premium Card Collection Best Selection Vol.6',
    juego: 'one-piece',
    tipo: 'Colección',
    forma: 'etb',
    idioma: null,
    precio: 59.9,
    stock: null,
    destacado: true,
    resumen: 'Premium Card Collection, Best Selection volumen 6.',
  },
  {
    slug: 'double-pack-set-dp12',
    nombre: 'Double Pack Set vol.12 [DP-12]',
    juego: 'one-piece',
    tipo: 'Double Pack',
    forma: 'pack',
    idioma: null,
    precio: 36.9,
    stock: null,
    destacado: false,
    resumen: "Double Pack Set del bloque OP-17, The World's Strongest Warriors.",
    // La primera manda: es la que sale en la rejilla y en el carrito.
    fotos: [
      {
        src: 'productos/double-pack-set-dp12-caja.webp',
        mini: 'productos/double-pack-set-dp12-caja-mini.webp',
        ancho: 1000,
        alto: 920,
        etiqueta: 'La caja',
        alt: 'Caja del Double Pack Set 12 de One Piece junto a las cartas que incluye',
      },
      {
        src: 'productos/double-pack-set-dp12-contenido.webp',
        mini: 'productos/double-pack-set-dp12-contenido-mini.webp',
        ancho: 1078,
        alto: 992,
        etiqueta: 'Qué incluye',
        alt: 'Resumen del contenido del Double Pack Set 12: dos sobres OP-17 y una carta DON!! promocional, con un total estimado de 12 a 14 cartas',
      },
    ],
  },
  {
    slug: 'illustration-box-vol7',
    nombre: 'Illustration Box Vol.7',
    juego: 'one-piece',
    tipo: 'Illustration Box',
    forma: 'etb',
    idioma: 'Inglés',
    precio: 32.5,
    stock: null,
    destacado: false,
    resumen: 'Illustration Box volumen 7, edición 2026.',
  },
  {
    slug: 'illustration-box-vol8',
    nombre: 'Illustration Box Vol.8',
    juego: 'one-piece',
    tipo: 'Illustration Box',
    forma: 'etb',
    idioma: 'Inglés',
    precio: 32.5,
    stock: null,
    destacado: false,
    resumen: 'Illustration Box volumen 8, edición 2026.',
  },
  {
    slug: 'caja-kayou-naruto',
    nombre: 'Caja Kayou',
    juego: 'naruto',
    tipo: 'Caja',
    forma: 'display',
    idioma: 'Chino',
    precio: 29.95,
    stock: 7,
    destacado: false,
    resumen: 'Caja precintada con dieciocho sobres. La serie que más está subiendo entre coleccionistas.',
  },
  {
    slug: 'sobre-kayou-naruto',
    nombre: 'Sobre Kayou',
    juego: 'naruto',
    tipo: 'Sobre',
    forma: 'sobre',
    idioma: 'Chino',
    precio: 3.95,
    stock: 30,
    destacado: false,
    resumen: 'Sobre suelto de caja precintada. Ideal para completar colección sin comprar la caja.',
  },
  {
    slug: 'fundas-mate-100',
    nombre: 'Fundas mate, 100 unidades',
    juego: 'accesorios',
    tipo: 'Fundas',
    forma: 'accesorio',
    idioma: 'Estándar',
    precio: 9.95,
    stock: 25,
    destacado: false,
    resumen: 'Acabado mate que no resbala al barajar. Tamaño estándar para cualquier juego.',
  },
  {
    slug: 'tapete-de-juego',
    nombre: 'Tapete de juego',
    juego: 'accesorios',
    tipo: 'Tapete',
    forma: 'accesorio',
    idioma: 'Estándar',
    precio: 19.95,
    stock: 9,
    destacado: false,
    resumen: 'Base antideslizante y superficie de tela. Protege las cartas y la mesa.',
  },
  {
    slug: 'carpeta-360-cartas',
    nombre: 'Carpeta de 360 cartas',
    juego: 'accesorios',
    tipo: 'Carpeta',
    forma: 'accesorio',
    idioma: 'Estándar',
    precio: 24.95,
    stock: 4,
    destacado: false,
    resumen: 'Cierre de cremallera y hojas fijas. Para llevar la colección sin que se mueva.',
  },
];

// Solo se envía a península. Para abrir Baleares o Canarias, quita el prefijo de
// FUERA_DE_COBERTURA y añade su tarifa: el checkout deja de bloquear ese código postal.
export const ENVIO = {
  coste: 4.95,
  gratisDesde: 200,
  zona: 'península',
};

export const FUERA_DE_COBERTURA = {
  '07': 'Baleares',
  '35': 'Las Palmas',
  '38': 'Santa Cruz de Tenerife',
  '51': 'Ceuta',
  '52': 'Melilla',
};

// Devuelve el nombre de la zona si el código postal cae fuera de península, o null.
export function zonaFuera(cp) {
  const limpio = String(cp).trim();
  if (!/^\d{5}$/.test(limpio)) return null;
  return FUERA_DE_COBERTURA[limpio.slice(0, 2)] || null;
}

export function juegoDe(slug) {
  return juegos.find((j) => j.slug === slug);
}

export function productosDe(slug) {
  return productos.filter((p) => p.juego === slug);
}

export function porSlug(slug) {
  return productos.find((p) => p.slug === slug);
}

export function eur(n) {
  const decimales = Number.isInteger(n) ? 0 : 2;
  return n.toLocaleString('es-ES', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: 2,
    useGrouping: 'always',
  }) + ' €';
}

// stock null quiere decir "hay, pero la tienda no ha confirmado cuántas". Es el
// estado normal de una referencia recién dada de alta. No se inventa un número:
// se dice que hay stock y se pone un tope de carrito prudente.
export const TOPE_SIN_CONFIRMAR = 6;

export function hayStock(p) {
  return p.stock === null || p.stock > 0;
}

export function quedanPocas(p) {
  return p.stock !== null && p.stock > 0 && p.stock <= 3;
}

export function disponibles(p) {
  return p.stock === null ? TOPE_SIN_CONFIRMAR : p.stock;
}
