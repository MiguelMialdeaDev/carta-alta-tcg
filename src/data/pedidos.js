// Por dónde sale un pedido cuando alguien pulsa "Confirmar pedido".
//
// La web es estática: no hay servidor propio que reciba el formulario. El pedido
// se manda a un servicio que lo reenvía por correo a la tienda. El elegido es
// Web3Forms porque no pide tarjeta, no guarda los datos y solo hace de cartero.
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
