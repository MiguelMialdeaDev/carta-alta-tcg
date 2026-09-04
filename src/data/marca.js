// Un único sitio para el nombre y los assets de marca. Antes "Carta Alta" estaba
// escrito a mano en nueve páginas, el pie, el carrito y el README.
//
// PENDIENTE DE LA TIENDA (ver README):
//   1. El logo en SVG, o el AI/PDF original. Lo que hay ahora sale de un JPEG de
//      WhatsApp al que le he quitado el fondo a mano: sirve para verlo funcionando,
//      no para producción. En pantallas de retina se nota.
//   2. Un lockup horizontal (isotipo + palabra) dibujado para barras estrechas.
//      Mientras no llegue, la cabecera monta el isotipo junto a la palabra escrita
//      en la tipografía de la web, con la Z en morado.
//   3. Un favicon simplificado. El emblema completo a 32px se empasta.
export const MARCA = {
  nombre: 'CardZadora',
  // Para title, alt y sitios donde no cabe formato.
  nombreLlano: 'CardZadora',
  claim: 'Cartas selladas, enviadas en 24 horas',
  // Canal de contacto que dio la tienda. Cuando tengan dominio propio conviene
  // pasar a algo tipo hola@sudominio, que da mejor imagen que un gmail.
  email: 'cardzadora@gmail.com',
  // La palabra se escribe partida para poder teñir la Z como en el logo.
  palabra: { antes: 'Card', letra: 'Z', despues: 'adora' },
  isotipo: 'marca/isotipo.png',
  // Clave del carrito en el navegador. Al cambiarla se vacía el carrito viejo,
  // que en una maqueta no importa.
  claveCarrito: 'cardzadora-carro',
};

export function titulo(seccion) {
  return seccion ? `${seccion} · ${MARCA.nombre}` : MARCA.nombre;
}
