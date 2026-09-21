# AAL Travel

Sitio web de AAL Travel — experiencias de viaje en Dubái, paquetes a la medida y destinos de Fin de Año. Construido con React, Vite y Tailwind CSS.

## Características

- Multilenguaje (ES / EN / FR)
- Totalmente responsivo (móvil, tablet, escritorio)
- Modal de contacto por WhatsApp o llamada, con mensaje pre-rellenado y localizado según el idioma y la experiencia consultada
- Animaciones de scroll-reveal y microinteracciones

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/`, listo para subir a cualquier hosting estático (Hostinger, Netlify, Vercel, GitHub Pages, etc.).

## Configuración pendiente antes de publicar

- Actualizar el número de teléfono de contacto (`PHONE_NUMBER`) en [`src/i18n/dict.js`](src/i18n/dict.js) con el número real del negocio.
