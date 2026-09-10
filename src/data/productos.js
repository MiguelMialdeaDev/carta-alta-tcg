// El catálogo YA NO VIVE AQUÍ. Cada producto y cada categoría es una ficha suelta
// en src/content/, y este fichero solo las recoge, las ordena y las valida.
//
// Se hizo así para que la tienda pueda editar el catálogo desde el panel sin
// tocar código: el panel escribe esas fichas, la web se reconstruye sola y listo.
//
//   src/content/juegos/<slug>.json      una categoría
//   src/content/productos/<slug>.json   un producto
//   src/content/ajustes/envio.json      coste y umbral de envío gratis
//
// El slug de una ficha es el nombre de su fichero, sin más. Es la única fuente:
// así no puede haber dos productos con el mismo slug ni un slug que no cuadre
// con su fichero, porque de eso ya se encarga el sistema de ficheros.
//
// import.meta.glob con eager lee los ficheros al construir, no en el navegador.
// El visitante recibe la web ya montada, igual que antes.

const fichasJuegos = import.meta.glob('../content/juegos/*.json', { eager: true });
const fichasProductos = import.meta.glob('../content/productos/*.json', { eager: true });
const fichaEnvio = import.meta.glob('../content/ajustes/envio.json', { eager: true });

function slugDe(ruta) {
  return ruta.split('/').pop().replace(/\.json$/, '');
}

// Si una ficha viene mal, la construcción se para aquí con un mensaje claro.
// Vale más un fallo al publicar que una tienda con un precio en blanco.
function exigir(condicion, ficha, queja) {
  if (!condicion) throw new Error(`[catálogo] ${ficha}: ${queja}`);
}

function leer(fichas, revisar) {
  return Object.entries(fichas)
    .map(([ruta, modulo]) => {
      const slug = slugDe(ruta);
      const datos = modulo.default ?? modulo;
      exigir(/^[a-z0-9-]+$/.test(slug), slug, 'el nombre del fichero solo admite minúsculas, números y guiones');
      return revisar({ ...datos, slug });
    })
    .sort((a, b) => a.orden - b.orden || a.slug.localeCompare(b.slug, 'es'));
}

export const juegos = leer(fichasJuegos, (j) => {
  exigir(typeof j.nombre === 'string' && j.nombre.trim(), j.slug, 'falta el nombre');
  return {
    ...j,
    orden: Number(j.orden) || 0,
    oculto: j.oculto === true,
    // Sin decir nada, una categoría enseña el aviso de "solo producto sellado".
    aviso: j.aviso !== false,
  };
});

const slugsDeJuego = new Set(juegos.map((j) => j.slug));

export const productos = leer(fichasProductos, (p) => {
  exigir(typeof p.nombre === 'string' && p.nombre.trim(), p.slug, 'falta el nombre');
  exigir(Number.isFinite(p.precio) && p.precio >= 0, p.slug, `precio no válido (${p.precio})`);
  exigir(slugsDeJuego.has(p.juego), p.slug, `la categoría "${p.juego}" no existe en src/content/juegos/`);
  exigir(
    p.stock === null || p.stock === undefined || (Number.isInteger(p.stock) && p.stock >= 0),
    p.slug,
    `stock no válido (${p.stock}). Déjalo vacío si no lo tienes contado`,
  );
  const fotos = Array.isArray(p.fotos) ? p.fotos.filter((f) => f && f.src) : [];
  return {
    ...p,
    orden: Number(p.orden) || 0,
    destacado: p.destacado === true,
    stock: p.stock === undefined ? null : p.stock,
    // Sin fotos se devuelve null y no una lista vacía: media web pregunta
    // "if (producto.fotos)" y una lista vacía es verdadera. Ese sí sería el fallo.
    fotos: fotos.length ? fotos : null,
    contenido: p.contenido || null,
    expansion: p.expansion || null,
    idioma: p.idioma || null,
  };
});

// Solo se envía a península. Para abrir Baleares o Canarias, quita el prefijo de
// FUERA_DE_COBERTURA y añade su tarifa: el checkout deja de bloquear ese código postal.
export const ENVIO = Object.values(fichaEnvio)[0].default ?? Object.values(fichaEnvio)[0];

exigir(Number.isFinite(ENVIO.coste), 'ajustes/envio', 'el coste de envío no es un número');
exigir(Number.isFinite(ENVIO.gratisDesde), 'ajustes/envio', 'el umbral de envío gratis no es un número');

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
