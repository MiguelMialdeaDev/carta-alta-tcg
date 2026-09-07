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
    slug: 'pokemon',
    nombre: 'Pokémon',
    mark: 'var(--game-pokemon)',
    aviso: false,
    entradilla: 'Elite Trainer Box, displays, booster box y blísters de Pokémon. Sellado, sin abrir ni reempaquetar.',
  },
  {
    slug: 'naruto',
    nombre: 'Naruto',
    mark: 'var(--game-naruto)',
    // Oculto hasta que haya producto. Se recupera quitando la línea de abajo.
    oculto: true,
    entradilla: 'Producto sellado de Naruto.',
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios',
    mark: 'var(--game-accesorios)',
    entradilla: 'Protege de la mejor manera tu colección.',
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
    slug: 'caja-op17-time-of-battle',
    nombre: "Caja OP-17 The World's Strongest Warriors",
    juego: 'one-piece',
    tipo: 'Display',
    forma: 'display',
    idioma: 'Inglés',
    precio: 345,
    stock: null,
    destacado: true,
    resumen: "Display precintado de 24 sobres. Para abrir en directo o para guardar sin tocar. El bloque completo tiene 128+1 tipos de carta.",
    contenido: '24 sobres de 12 cartas',
    expansion: "OP-17 · The World's Strongest Warriors",
    fotos: [
      {
        src: 'productos/caja-op17.webp',
        mini: 'productos/caja-op17-mini.webp',
        ancho: 1000,
        alto: 1000,
        etiqueta: 'El producto',
        alt: 'Caja expositora abierta de One Piece OP-17 con los sobres dentro y dos sueltos delante',
      },
    ],
  },
  {
    slug: 'case-op17-time-of-battle',
    nombre: "Case OP-17 The World's Strongest Warriors",
    juego: 'one-piece',
    tipo: 'Case de 12 cajas',
    forma: 'case',
    idioma: 'Inglés',
    precio: 4150,
    stock: null,
    destacado: false,
    resumen: "El formato de tienda y de quien abre en cantidad. Sale en su caja de transporte original, sin abrir, y va reforzado en el envío.",
    contenido: '12 cajas, 288 sobres en total',
    expansion: "OP-17 · The World's Strongest Warriors",
    fotos: [
      {
        src: 'productos/case-op17.webp',
        mini: 'productos/case-op17-mini.webp',
        ancho: 1000,
        alto: 1000,
        etiqueta: 'El producto',
        alt: 'Caja de transporte precintada de doce cajas de One Piece OP-17, junto a una caja expositora abierta',
      },
    ],
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
    resumen: "No lleva sobres: son doce cartas concretas con arte alternativo, pensadas para coleccionar.",
    contenido: '12 cartas con arte alternativo',
    expansion: null,
    fotos: [
      {
        src: 'productos/premium-vol6.webp',
        mini: 'productos/premium-vol6-mini.webp',
        ancho: 1000,
        alto: 1000,
        etiqueta: 'El producto',
        alt: 'Caja de la Premium Card Collection Best Selection Vol.6 de One Piece, apoyada de frente',
      },
    ],
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
    resumen: "La entrada más barata al bloque OP-17. La carta DON!! promocional viene en dos diseños posibles.",
    contenido: '2 sobres y 1 carta DON!! promocional',
    expansion: "OP-17 · The World's Strongest Warriors",
    // La primera manda: es la que sale en la rejilla y en el carrito.
    // La infografía de contenido se retiró el 2026-09-05 a petición de la tienda.
    // Para recuperarla: git checkout c0ff2cb -- public/productos/
    fotos: [
      {
        src: 'productos/double-pack-set-dp12-caja.webp',
        mini: 'productos/double-pack-set-dp12-caja-mini.webp',
        ancho: 1000,
        alto: 920,
        etiqueta: 'La caja',
        alt: 'Caja del Double Pack Set 12 de One Piece junto a las cartas que incluye',
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
    resumen: "Lo que se busca aquí son las promocionales. Los cuatro sobres son dos de OP-15-EB04 y dos de OP-16.",
    contenido: '4 sobres y 2 cartas promocionales',
    expansion: 'OP-15-EB04 y OP-16',
    fotos: [
      {
        src: 'productos/illustration-box-7.webp',
        mini: 'productos/illustration-box-7-mini.webp',
        ancho: 1000,
        alto: 1000,
        etiqueta: 'El producto',
        alt: 'Caja de la Illustration Box Vol.7 de One Piece vista de tres cuartos',
      },
    ],
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
    resumen: "Lo que se busca aquí son las promocionales, en este caso de Kid y Killer. Los cuatro sobres son dos de OP-15-EB04 y dos de OP-16.",
    contenido: '4 sobres y 2 cartas promocionales',
    expansion: 'OP-15-EB04 y OP-16',
    fotos: [
      {
        src: 'productos/illustration-box-8.webp',
        mini: 'productos/illustration-box-8-mini.webp',
        ancho: 1000,
        alto: 1000,
        etiqueta: 'El producto',
        alt: 'Caja de la Illustration Box Vol.8 de One Piece vista de tres cuartos',
      },
    ],
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
  coste: 5.95,
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

// Categorías que se enseñan. Una con oculto: true conserva su página pero
// desaparece del menú, de la portada y del listado de todo.
export const juegosVisibles = juegos.filter((j) => !j.oculto);

export function productosVisibles() {
  const ocultos = new Set(juegos.filter((j) => j.oculto).map((j) => j.slug));
  return productos.filter((p) => !ocultos.has(p.juego));
}

// Portada de una categoría. Misma regla que en la ficha de producto: si hay foto
// real de algo de esa categoría, manda la foto; si no, el packshot dibujado, que
// ya lleva el color del juego. Así ninguna categoría se queda sin imagen y no se
// usa arte de Bandai, Nintendo ni Wizards como decoración.
export function portadaDe(slug) {
  const lista = productosDe(slug);
  const conFoto = lista.find((p) => p.fotos);
  if (conFoto) return { tipo: 'foto', foto: conFoto.fotos[0] };
  return { tipo: 'dibujo', escena: slug === 'accesorios' ? 'accesorios' : 'cajas' };
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
