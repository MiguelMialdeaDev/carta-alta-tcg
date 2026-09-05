# CardZadora · demo fase 1

**En vivo:** https://miguelmialdeadev.github.io/carta-alta-tcg/

Maqueta de tienda de producto sellado de cartas, con la marca real de la tienda.
Datos de catálogo de muestra: los precios y el stock no son reales.

> El repositorio y la URL todavía se llaman `carta-alta-tcg`, que era el nombre
> provisional. Renombrarlos cambia la dirección publicada, así que se hace cuando
> la tienda tenga dominio propio.

## Qué es y qué no es

**Sí:** escaparate completo, catálogo filtrable, ficha de producto, carrito con persistencia y checkout maquetado.

**No:** no cobra, no hay base de datos, no hay panel. Eso es fase 2 y fase 3.

## Alcance decidido

La web vende **producto sellado y accesorios**, y nada más. Las cartas sueltas no se
venden aquí y la web **no menciona dónde se venden**: la tienda usa una cuenta ajena y
ha pedido expresamente que las dos marcas no se relacionen. Quien busque una carta
concreta va al correo.

El motivo de fondo sigue siendo el mismo que el primer día: si el mismo stock se
lista en dos sitios, se vende dos veces.

**Contacto:** `cardzadora@gmail.com`, en `src/data/marca.js`. Es el único canal que
la web ofrece.

## Publicar

Cada push a `main` despliega solo con GitHub Actions. La web vive bajo `/carta-alta-tcg/`, asi que ningun enlace puede escribirse absoluto a la raiz: todos pasan por `u()` en `src/lib/url.js`.

## Arrancar

```
npm install
npm run dev      # desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/data/productos.js      catálogo de muestra (en fase 3 pasa a tabla de Supabase)
src/data/marca.js          nombre y assets de marca, y lo que falta de ellos
src/layouts/Base.astro     nav, pie, aviso de demo y la lógica del carrito
src/components/            Packshot (SVG a mano), CardProducto y Rejilla
src/pages/                 index, tienda, tienda/[juego], producto/[slug], carrito, checkout
src/styles/tokens.css      tokens de diseño (tema CardZadora)
src/styles/global.css      hoja única, con el sello de Forge arriba
public/marca/              isotipo, palabra y logo completo en PNG
```

## Marca

Los colores salen del logo, medidos sobre el fichero, y no se retocan:

| | Hex | OKLCH |
|---|---|---|
| Morado | `#5F18A0` | `oklch(41% 0.196 301)` |
| Oro | `#F4BA01` | `oklch(82% 0.168 86)` |
| Negro | `#080808` | `oklch(13% 0 90)` |

Los dos no caben sobre el mismo fondo: morado sobre negro da 2,03:1 y oro sobre
blanco da 1,77:1. Por eso la web es clara. Y por eso el reparto de papeles:

- **Morado** es la marca: títulos de categoría, enlaces, categoría activa, foco.
- **Oro** es la acción y solo la acción: botón de compra y carrito. Siempre con
  texto negro encima, y con filo negro, porque el oro sobre papel no se recorta.
- Los colores de juego van apagados a propósito. El juego lo dice la etiqueta.

### Assets de marca pendientes

Lo que hay en `public/marca/` sale de un JPEG de WhatsApp al que se le ha quitado
el fondo. Sirve para verlo funcionando, no para producción. Falta pedirle a la
tienda, por orden:

1. **El logo en SVG**, o el AI o el PDF original. En su defecto, PNG a 2000px con
   fondo transparente.
2. **Un lockup horizontal** dibujado para barras estrechas. Mientras tanto la
   cabecera monta el isotipo junto a la palabra escrita en la tipografía de la
   web, con la Z en morado.
3. **Un favicon simplificado.** El emblema completo a 32px se empasta.

## Seguridad legal, no tocar sin pensarlo

- `noindex, nofollow` en el layout y `Disallow: /` en `public/robots.txt`.
- **La marca que lleva esta web es real.** Eso quiere decir que ya no vale el
  paraguas de "tienda ficticia": no se publica indexada ni se enseña como pieza
  de portfolio hasta que sea la tienda de verdad, con sus textos legales.
- Aviso visible arriba de que es una maqueta y de que no se puede comprar.
- **Sin logos ni arte de cartas de Pokémon, Magic, One Piece o Naruto.** Los packshots son SVG dibujados a mano. Las marcas aparecen solo como texto, que es lo que hace cualquier revendedor.
- Para portfolio: capturas y vídeo, nunca un enlace vivo con marca real.

## Huecos marcados

Todo lo que lleva el estilo `.todo` (recuadro discontinuo) es un dato que tiene que dar la tienda: foto y nombre del dueño, política de devoluciones, expansión de cada producto, datos fiscales y textos legales.

### Catálogo

Las seis referencias de One Piece son **reales**: nombre, precio e idioma comprobados
en la ficha de origen. El resto del catálogo sigue siendo de muestra.

De las reales falta lo que solo puede dar la tienda:

- **La cantidad de stock.** `stock: null` significa "hay, pero sin confirmar cuántas":
  la ficha dice "En stock" y el carrito tope en `TOPE_SIN_CONFIRMAR` (6). No se inventa
  un número.
- **La descripción propia.** Los resúmenes de ahora solo repiten lo que dice el título,
  para no afirmar contenidos sin comprobar.
- **El idioma** del Double Pack DP-12 y de la Premium Card Collection Vol.6, que su
  ficha de origen no declara.
- **Las fotos.** No se pueden usar las del proveedor: son de Bandai y del propio
  proveedor, y además la tienda pidió que las dos marcas no se relacionen. Por eso
  los títulos tampoco arrastran la marca del proveedor.

### Fotos de producto

Un producto con el campo `foto` deja de usar el packshot dibujado y muestra la
imagen. Dos ficheros por producto, WebP: uno a 1000px para la ficha y otro a 600px
para la rejilla. De 700 KB de original se baja a unos 100 KB.

```
public/productos/<slug>.webp        1000px, ficha
public/productos/<slug>-mini.webp    600px, rejilla y carrito
```

**Nada de imágenes generadas con IA en una ficha de producto.** Una foto de producto
es una promesa de lo que llega a casa: si la caja no es exactamente esa, es publicidad
engañosa. Y si la imagen añade cifras (probabilidades de rareza, número de cartas),
son promesas sobre el contenido que la tienda tendrá que sostener ante una
reclamación. Solo fotos reales del producto que se envía.

## Siguiente

**Fase 2:** Stripe con tarjeta y Bizum, PayPal, transferencia como pedido pendiente, envíos por tramos, emails y textos legales de venta.

Decisión abierta de fase 2: fuera de península hoy se **bloquea** el pedido (Baleares,
Canarias, Ceuta y Melilla). Si la tienda prefiere cobrar tarifa aparte, se quita el
prefijo de `FUERA_DE_COBERTURA` en `src/data/productos.js` y se le pone precio.

**Fase 3:** login, alta y edición de producto con subida de fotos, control de stock y listado de pedidos.

Nota para fase 3: la línea de pedido guarda el precio congelado en el momento de la compra. Si se lee del producto, cambiar un precio corrompe los pedidos viejos.
