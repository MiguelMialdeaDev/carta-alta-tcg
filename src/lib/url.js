// GitHub Pages sirve el sitio bajo /carta-alta-tcg/, así que ningún enlace
// puede escribirse absoluto a la raíz. Todo pasa por aquí.

export const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';

export function u(ruta = '') {
  return BASE + String(ruta).replace(/^\/+/, '');
}
