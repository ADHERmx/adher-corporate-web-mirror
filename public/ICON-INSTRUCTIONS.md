# Instrucciones para Iconos PWA y Apple Touch

## Iconos Requeridos

### 1. Apple Touch Icon
**Archivo:** `apple-touch-icon.png`
**Dimensiones:** 180 × 180 píxeles
**Formato:** PNG con fondo sólido (no transparente)
**Propósito:** Icono que aparece cuando se agrega el sitio al home screen en iOS

**Diseño:**
- Usar logo de Adher
- Fondo naranja (#ea580c) o blanco
- El logo debe ocupar ~70% del espacio
- Dejar margen de seguridad de 10px

### 2. Safari Mask Icon
**Archivo:** `mask-icon.svg`
**Formato:** SVG monocromo (solo negro)
**Propósito:** Icono para Safari pinned tabs

**Diseño:**
- Versión simplificada del logo
- Solo silueta en negro
- Sin colores (será recoloreado por Safari)
- Trazo limpio y claro

### 3. Favicons Adicionales (Opcional)
Para mejor compatibilidad:

- **favicon-16x16.png** (16×16)
- **favicon-32x32.png** (32×32)
- **favicon-192x192.png** (192×192) - Android
- **favicon-512x512.png** (512×512) - Android

## Cómo Generar

### Opción 1: Desde Logo Existente

Usar `/src/assets/adher-logo.png`:

1. Abrir en editor de imágenes (Photoshop, GIMP, etc.)
2. Crear canvas 180×180px
3. Agregar fondo naranja o blanco
4. Centrar logo (dejar margen)
5. Exportar como PNG

### Opción 2: Herramienta Online

Usar **RealFaviconGenerator** (https://realfavicongenerator.net/):

1. Subir logo de Adher
2. Configurar para iOS (apple-touch-icon)
3. Configurar para Safari (mask-icon)
4. Descargar paquete de iconos
5. Copiar archivos a `/public/`

### Opción 3: Favicon.io

Usar **favicon.io** (https://favicon.io/):

1. Subir logo
2. Seleccionar configuración iOS/Android
3. Descargar todos los tamaños
4. Extraer a `/public/`

## Ubicación Final

Todos los iconos deben estar en `/public/`:

```
/public/
├── favicon.ico (existente)
├── apple-touch-icon.png (180×180)
├── mask-icon.svg (monocromo)
├── favicon-16x16.png (opcional)
├── favicon-32x32.png (opcional)
├── favicon-192x192.png (opcional)
└── favicon-512x512.png (opcional)
```

## Código HTML

Ya está configurado en `SEOHead.tsx`:

```html
<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Safari Mask Icon -->
<link rel="mask-icon" href="/mask-icon.svg" color="#ea580c" />

<!-- Favicons adicionales -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
```

## Validación

### iOS Safari
1. Abrir sitio en iPhone/iPad
2. Tocar botón "Compartir"
3. Seleccionar "Agregar a pantalla de inicio"
4. Verificar que aparece el icono correcto

### Safari Desktop
1. Abrir sitio en Safari Mac
2. Pin tab (botón + en la barra de tabs)
3. Verificar que aparece el mask icon

### Android Chrome
1. Abrir sitio en Android
2. Menú > "Agregar a pantalla de inicio"
3. Verificar icono

## Especificaciones de Diseño

### Apple Touch Icon
- **Tamaño:** 180×180px
- **Formato:** PNG
- **Color de fondo:** Sólido (no transparente)
- **Esquinas:** No redondear (iOS lo hace automáticamente)
- **Resolución:** @2x (retina)

### Safari Mask Icon
- **Formato:** SVG
- **Color:** Negro puro (#000000)
- **Simplificación:** Eliminar detalles pequeños
- **viewBox:** Preferiblemente 0 0 100 100

### Theme Color
Ya configurado en `SEOHead.tsx`:
```html
<meta name="theme-color" content="#ea580c" />
```

## Ejemplo de Mask Icon SVG

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50 10 L90 90 H10 Z" fill="#000"/>
  <!-- Reemplazar con path del logo de Adher -->
</svg>
```

## Notas Importantes

1. **Apple Touch Icon:**
   - NO usar transparencia
   - Agregar padding/margen interno
   - Evitar texto muy pequeño

2. **Mask Icon:**
   - Debe ser SVG válido
   - Solo un color (negro)
   - Silueta clara y reconocible

3. **Optimización:**
   - Comprimir PNG con TinyPNG
   - Optimizar SVG con SVGO
   - Mantener archivos < 100KB

## Checklist

Antes de considerar completo:
- [ ] apple-touch-icon.png creado (180×180)
- [ ] mask-icon.svg creado (monocromo)
- [ ] Archivos en `/public/`
- [ ] Probado en iOS Safari
- [ ] Probado en Safari Desktop
- [ ] Iconos optimizados (< 100KB)

---

**Última actualización:** Noviembre 2025
