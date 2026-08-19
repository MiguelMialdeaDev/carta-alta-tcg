# Carta Alta TCG · demo fase 1

Maqueta de tienda de producto sellado de cartas. Marca ficticia, datos de muestra.

## Qué es y qué no es

**Sí:** escaparate completo, catálogo filtrable, ficha de producto, carrito con persistencia y checkout maquetado.

**No:** no cobra, no hay base de datos, no hay panel. Eso es fase 2 y fase 3.

## Alcance decidido

La web vende **producto sellado y accesorios**. Las cartas sueltas se quedan en CardMarket y desde la web se enlaza al perfil. Así no se vende dos veces la misma carta.

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
src/layouts/Base.astro     nav, pie, aviso de demo y la lógica del carrito
src/components/            Packshot (SVG a mano) y CardProducto
src/pages/                 index, tienda, producto/[slug], carrito, checkout
src/styles/tokens.css      tokens de diseño (tema Midnight)
src/styles/global.css      hoja única, con el sello de Forge arriba
```

## Seguridad legal, no tocar sin pensarlo

- `noindex, nofollow` en el layout y `Disallow: /` en `public/robots.txt`.
- Aviso visible arriba de que es una maqueta sin relación con ninguna tienda real.
- **Sin logos ni arte de cartas de Pokémon, Magic, One Piece o Naruto.** Los packshots son SVG dibujados a mano. Las marcas aparecen solo como texto, que es lo que hace cualquier revendedor.
- Para portfolio: capturas y vídeo, nunca un enlace vivo con marca real.

## Huecos marcados

Todo lo que lleva el estilo `.todo` (recuadro discontinuo) es un dato que tiene que dar la tienda: foto y nombre del dueño, política de devoluciones, expansión de cada producto, datos fiscales y textos legales.

## Siguiente

**Fase 2:** Stripe con tarjeta y Bizum, PayPal, transferencia como pedido pendiente, envíos por tramos, emails y textos legales de venta.

**Fase 3:** login, alta y edición de producto con subida de fotos, control de stock y listado de pedidos.

Nota para fase 3: la línea de pedido guarda el precio congelado en el momento de la compra. Si se lee del producto, cambiar un precio corrompe los pedidos viejos.
