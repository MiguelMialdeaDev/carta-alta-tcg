# Auditoría de CardZadora

Hecha el 2026-09-09 sobre el despliegue en vivo (commit `2359a5d`) y sobre el código.
Todo lo de aquí está comprobado, no supuesto.

Esta lista es viva: se van marcando los puntos según se cierran, con la fecha y el
commit que los cierra. Lo que depende de Pablo se queda abierto y anotado.

Leyenda: `[ ]` pendiente · `[x]` cerrado · `[~]` en curso · `[P]` esperando a Pablo · `[M]` decisión de Miguel

---

## Bloqueantes (no son de diseño, son de negocio)

- [M] **1. El checkout recoge datos personales y no los manda a ningún sitio.**
  Nombre, email, teléfono, dirección, CP y ciudad. Al confirmar se vacía el carrito,
  aparece "Pedido confirmado" y ahí acaba todo. No hay backend, ni email, ni pasarela.
  Un pedido real se pierde y el cliente cree que ha comprado.

- [P] **2. Sin textos legales.**
  Cuatro huecos `.todo` vivos: datos fiscales y aviso legal en el pie, política de
  devoluciones en la home, texto legal en el checkout. Tampoco hay política de
  privacidad ni casilla de consentimiento en un formulario que pide datos personales.
  Con la barra de demo retirada, la web se lee como tienda operativa.

- [P] **3. Dos preventas anunciadas como "En stock, envío en 24 o 48 horas".**
  El Case OP-17 (4.150 €) y la Illustration Box Vol.8 son preventa en el proveedor.

- [M] **4. El repositorio sigue público.**
  Su descripción dice "Marca ficticia, datos de muestra" y ya no es cierto: está la
  marca real de Pablo y su correo real. Se encuentra buscando "cardzadora" en GitHub.

- [P] **5. Hay producto inventado publicado como real.**
  Los tres de Pokémon y los tres de Accesorios son catálogo de muestra: precios y stocks
  inventados para la maqueta (49,95 / 149,95 / 4,95 / 9,95 / 19,95 / 24,95, con stocks
  6 / 2 / 40 / 25 / 9 / 4). Se pueden añadir al carrito y llegar al checkout.
  Solo los seis de One Piece son datos de verdad.

---

## Fallos reproducibles

- [ ] **6. La cabecera se rompe entre 897px y 939px.**
  Medido: a 900px el carrito cae a una segunda fila pegado a la izquierda, debajo del
  logo, y la barra pasa a tres filas y 108px de alto. El menú de tres líneas se apaga a
  896px (56rem) pero la fila de escritorio no cabe hasta 940px. Quedan 44px de ventana
  muerta, y 900px es un tamaño de ventana muy común.

- [ ] **7. "Escribir a cardzadora@gmail.com" parte en dos líneas** a 320, 375 y 414px.

- [ ] **8. "Confirmar pedido" parte en dos líneas** a 320px.

- [ ] **9. Naruto está oculto del menú pero sus páginas siguen publicadas.**
  `/tienda/naruto/`, `/producto/caja-kayou-naruto/` y `/producto/sobre-kayou-naruto/`
  devuelven 200 y se pueden comprar. Lo mismo con `/producto/sobre-suelto-pokemon/`,
  que además sí aparece en la tienda y en la categoría.

- [ ] **10. La frase que se pidió quitar sigue en la home:**
  "No vendemos cartas sueltas ni producto abierto", dentro de la tarjeta
  "Aquí solo hay producto sellado".

- [ ] **11. El aviso de maqueta sobrevive en la pantalla de pedido confirmado:**
  "Esto es una maqueta, así que aquí no se ha cobrado nada". O se quita, y entonces el
  punto 1 pasa a urgente, o se queda, y entonces la barra de bienvenida miente.

- [ ] **12. Textos que no cuadran con el catálogo.**
  La home dice "Sobres, cajas y mazos" y no hay ni un mazo. One Piece dice "mazos de
  inicio", tampoco. Pokémon dice "blísters" y "booster box", y no hay ninguno.

---

## Cosas por hacer

- [ ] **13. No hay página 404 propia.** Un enlace roto lleva al 404 gris de GitHub.
- [ ] **14. Salto de encabezados** h1 a h3 en tienda y categorías. En la home el orden es h1, tres h3, h2, h2, h3.
- [ ] **15. Las miniaturas declaran 1000x1000 en el HTML** y el fichero mide 600x600.
- [ ] **16. Los errores del checkout no van enlazados al campo** con `aria-describedby`.
- [ ] **17. El carrito de la cabecera anuncia solo "Carrito"**, el número nunca se lee en voz alta.
- [ ] **18. Los enlaces del pie miden 22px de alto**, por debajo del objetivo táctil de 44px.
- [ ] **19. "Vaciar carrito" borra sin confirmación ni deshacer.**
- [ ] **20. Las tipografías se cargan desde Google Fonts.** Conviene servirlas desde el propio dominio.
- [ ] **21. Deuda de código.**
  `juegos` importado y sin usar en `index.astro` y `Base.astro`; `MARCA.claveCarrito`
  declarado y sin usar, porque la clave real está escrita a mano en `Base.astro`;
  `--game-magic` huérfano; `theme-color` con un hex a mano, `#5f19a1`, que además no es
  el morado de marca `#5F18A0`; la clase se sigue llamando `.demo-bar`.
- [ ] **22. Comentarios caducados** en `global.css`: sigue diciendo "Ahora el fondo es claro,
  asi que encima va tinta oscura" cuando la cabecera es morada oscura.
- [M] **23. La guía que tiene Pablo ya no describe esta web.**
  `herramientas/guia.html` dice que la cabecera es gris oscuro, lista Magic entre los
  colores de juego, y menciona la tarjeta del "24 h", el botón "Buscar por juego" y
  "Empezar a comprar", que ya no existen. Se acordó que los cambios fueran solo a la web
  real, así que hay que decidir: o se regenera la guía, o se avisa de que está desfasada.

---

## Lo que está bien (verificado el 2026-09-09, no hace falta tocar)

- **Contraste:** los 17 pares de color que usa la web pasan AA. El peor es 4,18:1 y es
  texto terciario pequeño sobre panel, que casi no aparece.
- **Cero desbordamiento horizontal** en 320, 375, 414 y 768px, en las seis páginas.
- **El menú de tres líneas funciona:** abre, cierra, cambia de icono, se cierra con
  Escape y con clic fuera, y desaparece por encima de 896px.
- **Las cuentas del carrito son correctas:** 4.150 € da envío gratis, 32,50 € cobra
  5,95 € y calcula bien los 167,50 € que faltan. El tope de 6 unidades se respeta desde
  la ficha y desde el carrito.
- **El bloqueo por código postal funciona:** 35001 avisa de Las Palmas, 46470 pasa.
- **El guardia del carrito vacío funciona:** enviar el formulario vacío no confirma nada.
- **Buscadores bloqueados:** `robots.txt` y `meta noindex` siguen puestos.
