# ✅ SEO Validation Checklist - Acabados Adher

Use este checklist para validar la implementación SEO antes y después del lanzamiento.

## 🔍 Pre-Launch Validation

### 1. Meta Tags Básicos
- [ ] **Title tag** presente y único
  - Máximo 60 caracteres
  - Incluye "| Acabados Adher"
  - Descriptivo y con keyword
- [ ] **Meta description** presente
  - Entre 120-160 caracteres
  - Describe el contenido
  - Incluye call-to-action
- [ ] **Canonical URL** correcta
  - URL absoluta (https://www.adher.com.mx/...)
  - Apunta a versión preferida
- [ ] **Lang attribute** en HTML
  - `<html lang="es-MX">`

### 2. Open Graph Tags
- [ ] `og:title` presente
- [ ] `og:description` presente
- [ ] `og:type` = "website"
- [ ] `og:url` es URL absoluta
- [ ] `og:image` presente (1200×630)
- [ ] `og:image:alt` descriptivo
- [ ] `og:locale` = "es_MX"
- [ ] `og:site_name` = "Acabados Adher"

**Validar en:** https://developers.facebook.com/tools/debug/

### 3. Twitter Card Tags
- [ ] `twitter:card` = "summary_large_image"
- [ ] `twitter:title` presente
- [ ] `twitter:description` presente
- [ ] `twitter:image` presente
- [ ] `twitter:image:alt` presente

**Validar en:** https://cards-dev.twitter.com/validator

### 4. Hreflang
- [ ] `<link rel="alternate" hreflang="es-MX">` presente
- [ ] `<link rel="alternate" hreflang="x-default">` presente
- [ ] Ambos apuntan a URL correcta

### 5. Geo Tags
- [ ] `<meta name="geo.region" content="MX-NLE">`
- [ ] `<meta name="geo.placename" content="Monterrey">`

### 6. Robots Meta
En **producción:**
- [ ] `<meta name="robots" content="index, follow">`
- [ ] `<meta name="googlebot" content="index, follow, ...">`

En **desarrollo:**
- [ ] `<meta name="robots" content="noindex, nofollow">`

### 7. Structured Data (JSON-LD)

#### Organization Schema
- [ ] Schema presente en página
- [ ] `@type` = "Organization"
- [ ] `name` correcto
- [ ] `url` presente
- [ ] `logo` presente
- [ ] `address` completa
- [ ] `telephone` correcto
- [ ] `email` correcto

#### LocalBusiness Schema
- [ ] Schema presente en página
- [ ] `@type` = "LocalBusiness"
- [ ] `address` con todos los campos
- [ ] `geo` coordinates presentes
- [ ] `openingHoursSpecification` correcto
- [ ] `telephone` en formato internacional

#### BreadcrumbList Schema
- [ ] Schema presente
- [ ] `itemListElement` con position
- [ ] URLs absolutas

**Validar en:** https://search.google.com/test/rich-results

### 8. Semántica HTML
- [ ] **Un solo H1** por página
- [ ] H1 es descriptivo y único
- [ ] Jerarquía de headings lógica (H1 > H2 > H3...)
- [ ] `<main>` landmark presente
- [ ] `<header>` y `<footer>` presentes
- [ ] `<nav>` para navegación

### 9. Imágenes
- [ ] Todas las `<img>` tienen `alt` attribute
- [ ] Alt texts descriptivos en español
- [ ] Alt texts incluyen keywords naturalmente
- [ ] Sin "imagen", "foto", etc. genéricos

### 10. Sitemap
- [ ] `sitemap.xml` accesible en `/sitemap.xml`
- [ ] Incluye todas las rutas públicas
- [ ] URLs son absolutas
- [ ] `lastmod` presente
- [ ] `priority` y `changefreq` configurados
- [ ] Formato XML válido

**Validar en:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

### 11. Robots.txt
- [ ] `robots.txt` accesible en `/robots.txt`
- [ ] Permite crawling (`Allow: /`)
- [ ] Incluye `Sitemap: https://www.adher.com.mx/sitemap.xml`
- [ ] Sin sintaxis errónea

### 12. Lighthouse SEO
- [ ] Score SEO ≥ 95
- [ ] Sin errores críticos
- [ ] Meta description presente
- [ ] Links tienen texto descriptivo
- [ ] Documento tiene título válido

**Ejecutar:** Chrome DevTools > Lighthouse > SEO category

---

## 🚀 Post-Launch Validation

### 1. Google Search Console
- [ ] Propiedad verificada
- [ ] Sitemap enviado
- [ ] Sin errores de indexación
- [ ] Coverage report revisado
- [ ] Core Web Vitals aceptables

### 2. Indexación Google
- [ ] Página aparece en `site:adher.com.mx`
- [ ] Rich snippets visibles
- [ ] Sitelinks generados (puede tomar semanas)

### 3. Social Sharing
#### Facebook
- [ ] Preview correcto al compartir
- [ ] Imagen OG se muestra
- [ ] Título y descripción correctos

#### Twitter
- [ ] Card se muestra correctamente
- [ ] Imagen visible
- [ ] Texto descriptivo

#### LinkedIn
- [ ] Preview correcto
- [ ] Imagen y texto visibles

### 4. Rich Results
- [ ] Organization aparece en Knowledge Graph
- [ ] LocalBusiness info visible
- [ ] Horarios de atención mostrados
- [ ] Teléfono clickeable en móvil

---

## 🔧 Tools & URLs

### Validation Tools
| Tool | URL | Purpose |
|------|-----|---------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Validate JSON-LD |
| Facebook Debugger | https://developers.facebook.com/tools/debug/ | OG tags |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Twitter Cards |
| Schema Validator | https://validator.schema.org/ | JSON-LD syntax |
| W3C HTML Validator | https://validator.w3.org/ | HTML validity |
| Sitemap Validator | https://www.xml-sitemaps.com/validate-xml-sitemap.html | XML sitemap |
| PageSpeed Insights | https://pagespeed.web.dev/ | Performance + SEO |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Mobile usability |

### Browser Extensions
- **SEO Meta in 1 Click** (Chrome/Firefox)
- **Detailed SEO Extension** (Chrome)
- **META SEO Inspector** (Chrome)
- **Lighthouse** (Built into Chrome DevTools)

---

## 📊 Testing Commands

```bash
# Build production
npm run build

# Preview build
npm run preview

# Generate sitemap
npm run generate:sitemap

# Check build output
ls -lh dist/

# Test locally
# 1. npm run preview
# 2. Open http://localhost:4173
# 3. View source (Ctrl+U)
# 4. Verify meta tags
```

---

## 🐛 Common Issues & Fixes

### Issue: Meta tags no aparecen
**Causa:** react-helmet-async no configurado
**Fix:** Verificar que `HelmetProvider` envuelve la app en `main.tsx`

### Issue: Imagen OG no se muestra
**Causa:** URL relativa o imagen muy grande
**Fix:**
- Usar URL absoluta
- Optimizar imagen a < 300KB
- Limpiar caché en Facebook Debugger

### Issue: JSON-LD con errores
**Causa:** Sintaxis incorrecta o campos faltantes
**Fix:** Validar en https://validator.schema.org/

### Issue: Sitemap no se genera
**Causa:** Script no ejecutado
**Fix:**
```bash
npm run generate:sitemap
# O incluido automáticamente en build:
npm run build
```

### Issue: Múltiples H1
**Causa:** Header tenía H1 + Hero tiene H1
**Fix:** ✅ Ya corregido - Header usa `<div>`

### Issue: Canonical apunta a URL incorrecta
**Causa:** Path relativo mal configurado
**Fix:** Verificar prop `canonical` en `<SEOHead>`

---

## 📝 Quick Test Script

Copiar y pegar en consola del navegador:

```javascript
// Quick SEO Check
console.group('🔍 SEO Quick Check');

// Title
const title = document.title;
console.log('✅ Title:', title, `(${title.length} chars)`);

// Description
const desc = document.querySelector('meta[name="description"]')?.content;
console.log('✅ Description:', desc, `(${desc?.length} chars)`);

// Canonical
const canonical = document.querySelector('link[rel="canonical"]')?.href;
console.log('✅ Canonical:', canonical);

// OG Image
const ogImage = document.querySelector('meta[property="og:image"]')?.content;
console.log('✅ OG Image:', ogImage);

// H1 Count
const h1Count = document.querySelectorAll('h1').length;
console.log(h1Count === 1 ? '✅' : '❌', `H1 Count: ${h1Count}`, h1Count === 1 ? '(Correct)' : '(Should be 1)');

// Alt texts
const imgsWithoutAlt = Array.from(document.querySelectorAll('img')).filter(img => !img.alt);
console.log(imgsWithoutAlt.length === 0 ? '✅' : '⚠️', `Images without alt: ${imgsWithoutAlt.length}`);

// JSON-LD
const jsonLd = document.querySelectorAll('script[type="application/ld+json"]').length;
console.log('✅ JSON-LD scripts:', jsonLd);

console.groupEnd();
```

---

## ✅ Final Checklist

Antes de marcar como "Listo para Producción":

- [ ] Todos los items de **Pre-Launch Validation** completados
- [ ] Build de producción exitoso (`npm run build`)
- [ ] Lighthouse SEO score ≥ 95
- [ ] No errores en Google Rich Results Test
- [ ] Facebook Debugger muestra preview correcto
- [ ] Sitemap generado y accesible
- [ ] Robots.txt correcto
- [ ] Documentación revisada
- [ ] Equipo informado sobre Google Search Console setup

---

**Última actualización:** Noviembre 2025
**Versión:** 1.0

**Nota:** Guardar resultados de validación y capturas de pantalla para referencia futura.
