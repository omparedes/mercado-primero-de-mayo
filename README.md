# Mercado Cooperativo Primero de Mayo

Sitio institucional estático construido con Angular. No usa base de datos: el contenido se administra desde archivos del proyecto y se genera como archivos estáticos optimizados.

## Desarrollo local

```bash
pnpm install
pnpm start
```

Abre `http://localhost:4200`.

## Administrar la galería

1. Copia las nuevas imágenes a `public/assets/galeria/`.
2. Agrega cada imagen al arreglo `GALLERY_ITEMS` en `src/app/site-content.ts`.
3. Incluye un texto alternativo (`alt`) descriptivo para accesibilidad.

Para una galería extensa conviene almacenar los originales en Cloudflare Images o R2 y reemplazar `src` por la URL pública optimizada. La estructura del sitio no necesita cambiar.

## Compilar

```bash
pnpm build
```

Los archivos finales quedan en `dist/mercado-primero-de-mayo/browser`.

## Publicar en Cloudflare Pages

- Comando de compilación: `pnpm build`
- Directorio de salida: `dist/mercado-primero-de-mayo/browser`
- Versión de Node recomendada: 22 o superior

Los archivos `public/_headers` y `public/_redirects` se copian automáticamente al resultado para aplicar caché a los recursos estáticos y resolver rutas desde `index.html`.
