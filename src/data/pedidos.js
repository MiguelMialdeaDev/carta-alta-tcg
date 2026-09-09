// Por dónde sale un pedido cuando alguien pulsa "Confirmar pedido".
//
// La web es estática: no hay servidor propio que reciba el formulario. El pedido
// se manda a un servicio que lo reenvía por correo a la tienda. El elegido es
// Web3Forms porque no pide tarjeta y el plan gratuito da de sobra (250 pedidos al
// mes), pero conviene tener claro qué es y qué no es:
//
//   SÍ guarda los datos. En el plan gratuito el panel enseña 30 días de historial
//   y la retención llega a 3 años. Es decir, es un ENCARGADO DEL TRATAMIENTO:
//   hay que nombrarlo en la política de privacidad y aceptar su DPA.
//   web3forms.com/legal/dpa
//
//   La clave viaja en el JavaScript de la página, a la vista de cualquiera. Está
//   pensado así: solo sirve para mandar correo a la dirección que la dio de alta,
//   no para suplantar a nadie. Lo peor que puede pasar es spam a la propia tienda,
//   y contra eso van la trampa del formulario y su filtro antispam.
//
//   NO es una base de datos de pedidos. No baja stock, no tiene estados de pedido
//   ni panel de tienda. Eso es la fase 3 con Supabase (ver productos.js).
//
// PARA CONECTARLO (5 minutos, lo hace la tienda):
//   1. Entrar en https://web3forms.com
//   2. Escribir cardzadora@gmail.com y pulsar "Create Access Key"
//   3. Llega un correo con una clave larga tipo 1a2b3c4d-5e6f-...
//   4. Pegar esa clave abajo, entre las comillas, en lugar de null
//
// Mientras la clave sea null, la web NO se queda rota: al confirmar, el pedido
// se prepara escrito y se abre el correo del cliente para que lo mande a mano.
// Llega igual, solo que con un paso más. Al pegar la clave, ese paso desaparece.
export const PEDIDOS = {
  clave: null,
  endpoint: 'https://api.web3forms.com/submit',
};

export function pedidosConectados() {
  return typeof PEDIDOS.clave === 'string' && PEDIDOS.clave.length > 10;
}
