# -*- coding: utf-8 -*-
"""
Genera la copia de la web que se abre haciendo doble clic, sin servidor.

    npx astro build --config astro.config.local.mjs
    python herramientas/copia-offline.py

Deja la carpeta dist-local/ lista para comprimir y enviar. La web publicada no
se toca: usa astro.config.mjs y se despliega sola con cada push.
"""
import pathlib, re, sys

RAIZ = pathlib.Path('dist-local')
if not RAIZ.is_dir():
    sys.exit('Falta dist-local. Ejecuta antes:  npx astro build --config astro.config.local.mjs')

# --- 1. Rutas absolutas a relativas, y con index.html explicito -------------
# Al abrir desde el disco no hay servidor que resuelva el indice de una carpeta,
# asi que cada enlace tiene que apuntar al fichero.
htmls = sorted(RAIZ.rglob('*.html'))
for f in htmls:
    profundidad = len(f.relative_to(RAIZ).parts) - 1
    prefijo = '../' * profundidad
    s = f.read_text(encoding='utf-8')

    def arregla(m):
        attr, ruta = m.group(1), m.group(2)
        if ruta == '' or ruta.endswith('/'):
            ruta += 'index.html'
        return '%s="%s%s"' % (attr, prefijo, ruta or 'index.html')

    s = re.sub(r'\b(href|src)="/(?!/)([^"]*)"', arregla, s)
    s = re.sub(r'data-base="[^"]*"', 'data-base="%s"' % prefijo, s)
    if 'ajustes.css' not in s:
        s = s.replace('</head>', '  <link rel="stylesheet" href="%sajustes.css" />\n</head>' % prefijo)
    f.write_text(s, encoding='utf-8')

# --- 2. Hoja de ajustes editable, generada desde los tokens del proyecto ---
tokens = pathlib.Path('src/styles/tokens.css').read_text(encoding='utf-8')
def val(n):
    m = re.search(r'--' + re.escape(n) + r':\s*([^;]+);', tokens)
    if not m:
        sys.exit('No encuentro el token --' + n)
    return m.group(1).strip()

plantilla = pathlib.Path('herramientas/ajustes.plantilla.css').read_text(encoding='utf-8')
for marca, token in re.findall(r'@@([a-z0-9]+)\|([a-z0-9-]+)@@', plantilla):
    plantilla = plantilla.replace('@@%s|%s@@' % (marca, token), val(token))
(RAIZ / 'ajustes.css').write_text(plantilla, encoding='utf-8')

# --- 3. Guia para quien recibe la carpeta ----------------------------------
import shutil
shutil.copy2('herramientas/guia.html', RAIZ / 'GUIA.html')

# --- 4. Comprobaciones -----------------------------------------------------
restos = sum(len(re.findall(r'\b(?:href|src)="/(?!/)', f.read_text(encoding='utf-8'))) for f in htmls)
carpetas = sum(len(re.findall(r'\bhref="(?:\.\./)*"', f.read_text(encoding='utf-8'))) for f in htmls)
print('paginas procesadas :', len(htmls))
print('rutas absolutas    :', restos)
print('enlaces sin fichero:', carpetas)
if restos or carpetas:
    sys.exit('Quedan enlaces que no funcionaran desde el disco.')
print('OK, dist-local lista para comprimir.')
