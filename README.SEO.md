# 📊 Documentación SEO - Acabados Adher

Esta documentación explica cómo funciona el sistema de SEO implementado en el sitio web corporativo de Acabados Adher y cómo extenderlo para nuevas páginas.

## 📋 Tabla de Contenidos

1. [Resumen General](#resumen-general)
2. [Componentes SEO](#componentes-seo)
3. [Structured Data (JSON-LD)](#structured-data-json-ld)
4. [Cómo Agregar SEO a Nuevas Páginas](#cómo-agregar-seo-a-nuevas-páginas)
5. [Sitemap XML](#sitemap-xml)
6. [Imágenes Open Graph](#imágenes-open-graph)
7. [Validación y Depuración](#validación-y-depuración)
8. [Mejores Prácticas](#mejores-prácticas)

---

## Resumen General

El sitio web de Acabados Adher cuenta con una implementación SEO completa que incluye:

- ✅ Meta tags dinámicos (title, description, keywords)
- ✅ Open Graph para Facebook y redes sociales
- ✅ Twitter Cards para compartir en Twitter
- ✅ Structured Data (JSON-LD) para Google Rich Results
- ✅ Hreflang para indicar idioma español mexicano (es-MX)
- ✅ Tags geográficos (Monterrey, Nuevo León)
- ✅ Sitemap XML generado automáticamente
- ✅ Robots.txt configurado
- ✅ Canonical URLs para evitar contenido duplicado

### Tecnologías Utilizadas

- **react-helmet-async**: Gestión del `<head>` de la página
- **schema-dts**: TypeScript types para Schema.org
- **Custom utilities**: Funciones helper en `/src/lib/seo.ts`

---

## Componentes SEO

### 1. SEOHead Component

**Ubicación:** `/src/components/seo/SEOHead.tsx`

Este es el componente principal para gestionar todas las meta tags de una página.

#### Props

```typescript
interface SEOProps {
  title?: string;           // Título de la página (se agregará " | Acabados Adher" automáticamente)
  description?: string;     // Descripción meta (máx 160 caracteres recomendado)
  canonical?: string;       // Path relativo para canonical URL (ej: "/servicios")
  image?: string;          // Path relativo de imagen OG (ej: "/og-servicios.jpg")
  imageAlt?: string;       // Texto alternativo para imagen OG
  type?: string;           // Tipo OG: "website" | "article" | "profile"
  locale?: string;         // Locale (default: "es_MX")
  noindex?: boolean;       // Bloquear indexación (usar en dev/staging)
  nofollow?: boolean;      // Bloquear seguimiento de links
  keywords?: string[];     // Array de palabras clave
}
```

#### Ejemplo de Uso

```tsx
import { SEOHead } from "@/components/seo";

const MiPagina = () => {
  return (
    <>
      <SEOHead
        title="Nuestros Servicios de Pintura Electrostática"
        description="Conoce nuestros servicios de pintura en polvo, granallado, empaque especializado y más. Calidad certificada ISO 9001:2008."
        canonical="/servicios"
        keywords={["pintura electrostática", "powder coating", "servicios industriales"]}
      />

      {/* Resto del contenido */}
    </>
  );
};
```

### 2. JsonLd Component

**Ubicación:** `/src/components/seo/JsonLd.tsx`

Componente para inyectar datos estructurados JSON-LD en la página.

#### Ejemplo de Uso

```tsx
import { JsonLd } from "@/components/seo";
import { organizationSchema } from "@/data/schemas/organization";

const MiPagina = () => {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      {/* Resto del contenido */}
    </>
  );
};
```

---

## Structured Data (JSON-LD)

### Schemas Disponibles

#### 1. Organization Schema

**Ubicación:** `/src/data/schemas/organization.ts`

Información sobre la organización (nombre, logo, contacto, servicios).

```tsx
import { organizationSchema } from "@/data/schemas/organization";
import { JsonLd } from "@/components/seo";

<JsonLd data={organizationSchema()} />
```

#### 2. LocalBusiness Schema

**Ubicación:** `/src/data/schemas/local-business.ts`

Información de negocio local (dirección física, horarios, coordenadas geográficas).

```tsx
import { localBusinessSchema } from "@/data/schemas/local-business";
import { JsonLd } from "@/components/seo";

<JsonLd data={localBusinessSchema()} />
```

#### 3. BreadcrumbList Schema

**Ubicación:** `/src/data/schemas/breadcrumbs.ts`

Rastro de navegación para Google Search.

```tsx
import { breadcrumbSchema, generateBreadcrumbs } from "@/data/schemas/breadcrumbs";
import { JsonLd } from "@/components/seo";

// Para una página con jerarquía
const breadcrumbs = generateBreadcrumbs(
  "Servicios de Pintura",  // Nombre de página actual
  "/servicios",            // URL de página actual
  []                       // Array de páginas padre (si las hay)
);

<JsonLd data={breadcrumbSchema(breadcrumbs)} />
```

### Crear Nuevos Schemas

Para agregar nuevos tipos de structured data (ej: FAQPage, Service, Product):

1. Crear archivo en `/src/data/schemas/`
2. Usar tipos de `schema-dts`
3. Exportar función que retorne `WithContext<TipoSchema>`

**Ejemplo: FAQ Schema**

```typescript
// /src/data/schemas/faq.ts
import type { WithContext, FAQPage } from "schema-dts";

export const faqSchema = (questions: Array<{ question: string; answer: string }>): WithContext<FAQPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
};
```

---

## Cómo Agregar SEO a Nuevas Páginas

### Paso 1: Importar Componentes

```tsx
import { SEOHead, JsonLd } from "@/components/seo";
import { DEFAULT_KEYWORDS } from "@/lib/constants";
```

### Paso 2: Definir Metadata

```tsx
const MiNuevaPagina = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title="Título de Mi Nueva Página"
        description="Descripción breve y atractiva de máximo 160 caracteres."
        canonical="/ruta-de-mi-pagina"
        keywords={[...DEFAULT_KEYWORDS, "palabra clave específica"]}
      />

      {/* JSON-LD si aplica */}
      <JsonLd data={miSchema()} />

      {/* Contenido de la página */}
      <div>
        <h1>Título de Mi Nueva Página</h1>
        {/* ... */}
      </div>
    </>
  );
};
```

### Paso 3: Actualizar Sitemap

Editar `/scripts/generate-sitemap.ts` y agregar la nueva ruta:

```typescript
const routes: RouteConfig[] = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/mi-nueva-pagina",  // ← Nueva ruta
    priority: 0.8,              // ← Prioridad (0.0 - 1.0)
    changefreq: "monthly",      // ← Frecuencia de cambio
  },
];
```

### Paso 4: Regenerar Sitemap

```bash
npm run generate:sitemap
```

---

## Sitemap XML

### Ubicación

- **Script:** `/scripts/generate-sitemap.ts`
- **Output:** `/public/sitemap.xml`

### Generar Manualmente

```bash
npm run generate:sitemap
```

### Generación Automática

El sitemap se genera automáticamente al ejecutar:

```bash
npm run build       # Producción
npm run build:dev   # Desarrollo
```

### Configuración de Rutas

Cada ruta en el sitemap tiene estas propiedades:

- **path**: Ruta relativa (ej: `/servicios`)
- **priority**: Importancia (0.0 - 1.0). Homepage = 1.0
- **changefreq**: Frecuencia de actualización
  - `always` - Cambia cada vez que se accede
  - `hourly` - Cambia cada hora
  - `daily` - Cambia diariamente
  - `weekly` - Cambia semanalmente
  - `monthly` - Cambia mensualmente
  - `yearly` - Cambia anualmente
  - `never` - Nunca cambia (archivado)
- **lastmod**: Fecha de última modificación (opcional)

---

## Imágenes Open Graph

### Especificaciones

Las imágenes para compartir en redes sociales deben cumplir:

- **Dimensiones:** 1200 × 630 píxeles
- **Formato:** JPG o PNG
- **Peso:** < 300 KB (recomendado)
- **Aspect Ratio:** 1.91:1

### Imagen por Defecto

**Ubicación:** `/public/og-image.jpg`

Esta imagen se usa cuando no se especifica una imagen personalizada.

### Crear Imagen Personalizada

1. Diseñar en Canva, Figma, o editor de imágenes
2. Usar colores de marca:
   - Naranja principal: `#ea580c`
   - Naranja claro: `#fb923c`
3. Incluir logo y texto descriptivo
4. Exportar a 1200×630px
5. Guardar en `/public/` con nombre descriptivo
6. Referenciar en SEOHead:

```tsx
<SEOHead
  title="Mi Página"
  image="/mi-imagen-og.jpg"
  imageAlt="Descripción de la imagen"
/>
```

### Plantilla SVG

Existe una plantilla SVG en `/public/og-image.svg` que puede usarse como base. Ver `/public/OG-IMAGE-INSTRUCTIONS.md` para más detalles.

---

## Validación y Depuración

### Herramientas de Validación

#### 1. Google Rich Results Test

**URL:** https://search.google.com/test/rich-results

- Valida JSON-LD structured data
- Muestra errores y advertencias
- Preview de cómo se verá en Google Search

**Cómo usar:**
1. Ingresar URL del sitio o pegar código HTML
2. Ejecutar prueba
3. Corregir errores mostrados

#### 2. Facebook Sharing Debugger

**URL:** https://developers.facebook.com/tools/debug/

- Valida Open Graph tags
- Muestra preview de cómo se verá al compartir
- Limpia caché de Facebook

**Cómo usar:**
1. Ingresar URL de la página
2. Click en "Debug"
3. Ver preview y errores
4. Click en "Scrape Again" para actualizar caché

#### 3. Twitter Card Validator

**URL:** https://cards-dev.twitter.com/validator

- Valida Twitter Card tags
- Preview de tweet con card

**Cómo usar:**
1. Ingresar URL de la página
2. Click en "Preview card"
3. Verificar que se muestra correctamente

#### 4. LinkedIn Post Inspector

**URL:** https://www.linkedin.com/post-inspector/

- Valida cómo se verá al compartir en LinkedIn
- Limpia caché de LinkedIn

#### 5. Schema Markup Validator

**URL:** https://validator.schema.org/

- Valida sintaxis de JSON-LD
- Más estricto que Google Rich Results Test

### Checklist de Validación

Antes de lanzar una nueva página, verificar:

- [ ] Title tag único y descriptivo (< 60 caracteres)
- [ ] Meta description atractiva (< 160 caracteres)
- [ ] Canonical URL correcta
- [ ] Open Graph tags completos (title, description, image, url)
- [ ] Twitter Card tags completos
- [ ] Hreflang correcto (es-MX)
- [ ] Tags geográficos (MX-NLE, Monterrey)
- [ ] JSON-LD sin errores en Rich Results Test
- [ ] Imagen OG 1200×630px y < 300KB
- [ ] H1 único en la página
- [ ] Imágenes con alt text descriptivo
- [ ] Ruta agregada al sitemap
- [ ] Robots meta apropiado (index/noindex)

---

## Mejores Prácticas

### Títulos de Página

**✅ Hacer:**
- Ser descriptivo y específico
- Incluir palabra clave principal
- Mantener < 60 caracteres
- Usar formato: "Palabra Clave | Acabados Adher"

**❌ Evitar:**
- Títulos genéricos ("Inicio", "Página")
- Keyword stuffing
- Títulos duplicados
- Más de 60 caracteres (se cortará en resultados)

**Ejemplos:**

```tsx
// ✅ Bueno
<SEOHead title="Servicios de Pintura Electrostática" />
// Resultado: "Servicios de Pintura Electrostática | Acabados Adher"

// ❌ Malo
<SEOHead title="Servicios" />
// Resultado: "Servicios | Acabados Adher" (muy genérico)
```

### Descripciones Meta

**✅ Hacer:**
- Resumir el contenido de la página
- Incluir call-to-action
- Mantener 120-160 caracteres
- Ser único para cada página
- Incluir beneficio principal

**❌ Evitar:**
- Copiar descripción de otras páginas
- Más de 160 caracteres
- Keyword stuffing
- Descripción no relacionada con contenido

**Ejemplo:**

```tsx
// ✅ Bueno
<SEOHead
  description="Servicios profesionales de pintura electrostática en Monterrey. Certificación ISO 9001:2008. Solicita una cotización gratuita."
/>

// ❌ Malo
<SEOHead
  description="pintura electrostática powder coating pintura en polvo monterrey servicios industriales acabados"
/>
```

### Palabras Clave

**✅ Hacer:**
- Combinar keywords generales y específicas
- Incluir variaciones locales ("Monterrey", "Nuevo León")
- Usar términos que los usuarios buscarían
- Máximo 10-15 keywords por página

**❌ Evitar:**
- Keyword stuffing
- Keywords no relacionadas con el contenido
- Keywords en otros idiomas (a menos que sea bilingüe)

### Imágenes

**✅ Hacer:**
- Usar alt text descriptivo en español
- Incluir palabras clave naturalmente
- Optimizar tamaño de archivo
- Usar formatos modernos (WebP, AVIF)

**❌ Evitar:**
- Alt text genérico ("imagen1", "foto")
- Alt text en inglés
- Imágenes sin optimizar (> 500KB)
- Missing alt attributes

**Ejemplo:**

```tsx
// ✅ Bueno
<img
  src="/horno-curado.jpg"
  alt="Horno de curado industrial para pintura electrostática en Acabados Adher"
/>

// ❌ Malo
<img
  src="/horno-curado.jpg"
  alt="imagen"
/>
```

### Estructura de Headings

**✅ Hacer:**
- Un solo H1 por página
- Jerarquía lógica (H1 > H2 > H3)
- Headings descriptivos
- Usar headings para estructura, no para estilo

**❌ Evitar:**
- Múltiples H1
- Saltar niveles (H1 > H3)
- Headings vacíos
- Usar headings solo para tamaño de fuente

### URLs Canónicas

**✅ Hacer:**
- Siempre incluir canonical URL
- Usar URL absoluta
- Apuntar a la versión preferida
- Ser consistente

**❌ Evitar:**
- Canonical URL relativa
- Cambiar canonical URL sin razón
- Canonical apuntando a página diferente
- Missing canonical

### Robots Meta

**En Producción:**
```tsx
// ✅ Permitir indexación
<SEOHead />  // Por defecto: index, follow

// ✅ Bloquear página específica
<SEOHead noindex nofollow />
```

**En Desarrollo/Staging:**
```tsx
// ✅ Automático basado en entorno
// El sistema detecta si es producción o desarrollo
```

---

## Datos de Negocio Centralizados

### Ubicación

**Archivo:** `/src/data/business-info.ts`

Este archivo contiene TODA la información del negocio en un solo lugar:

- Nombre legal y comercial
- Teléfonos y WhatsApp
- Emails
- Direcciones (oficinas y planta)
- Horarios de atención
- Servicios
- Misión y visión
- Certificaciones

### Actualizar Información de Contacto

Para cambiar teléfonos, emails, dirección, etc.:

1. Editar `/src/data/business-info.ts`
2. Los cambios se reflejarán automáticamente en:
   - Structured data (JSON-LD)
   - Footer
   - Contact page
   - Schema Organization/LocalBusiness

**Ejemplo:**

```typescript
// /src/data/business-info.ts
export const BUSINESS_INFO = {
  contact: {
    phones: {
      main: "(81) 8351 0648",        // ← Actualizar aquí
      secondary: "(81) 8351 4881",
    },
    emails: {
      sales: "ventas@adher.com.mx",  // ← Actualizar aquí
    },
  },
  // ...
};
```

---

## Consideraciones para SPA (Single Page Application)

Este sitio es una SPA de React. Consideraciones importantes:

### 1. Canonical URLs Absolutas

Siempre usar URLs absolutas, no relativas:

```tsx
// ✅ Correcto
<SEOHead canonical="/servicios" />
// Genera: https://www.adher.com.mx/servicios

// ❌ Incorrecto
<link rel="canonical" href="servicios" />
```

### 2. Actualización en Navegación Cliente

`react-helmet-async` actualiza el `<head>` automáticamente cuando cambia de ruta dentro de la app.

### 3. Server-Side Rendering (SSR)

Actualmente el sitio NO tiene SSR. Si en el futuro se migra a Next.js o similar:

- Actualizar imports de `react-helmet-async`
- Configurar `HelmetProvider` en `_app.tsx`
- Verificar que structured data se renderiza en HTML inicial

### 4. Prerendering

Para mejor SEO en SPA, considerar:

- **Prerender.io** - Servicio de prerendering
- **react-snap** - Prerendering estático
- **Vite Plugin SSG** - Static Site Generation

---

## Recursos Adicionales

### Documentación Oficial

- **Schema.org**: https://schema.org/
- **Open Graph Protocol**: https://ogp.me/
- **Twitter Cards**: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- **Google Search Central**: https://developers.google.com/search

### Herramientas

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com/
- **Screaming Frog SEO Spider**: https://www.screamingfrogseoseo.com/
- **Ahrefs**: https://ahrefs.com/
- **SEMrush**: https://www.semrush.com/

### Extensiones Chrome

- **SEO Meta in 1 Click**
- **Detailed SEO Extension**
- **Lighthouse** (integrado en DevTools)
- **META SEO Inspector**

---

## Preguntas Frecuentes

### ¿Cómo cambio el título del sitio?

Editar `/src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Acabados Adher",
  defaultTitle: "...",  // ← Actualizar aquí
  // ...
};
```

### ¿Cómo agrego una nueva red social?

1. Editar `/src/data/business-info.ts`:
```typescript
social: {
  facebook: "https://facebook.com/...",
  instagram: "https://instagram.com/...",  // ← Agregar
}
```

2. Opcional: Agregar al schema en `/src/data/schemas/organization.ts`

### ¿Cómo bloqueo indexación en staging?

El sistema detecta automáticamente el entorno. En desarrollo, `noindex, nofollow` se aplica automáticamente.

Para forzar en producción:

```tsx
<SEOHead noindex nofollow />
```

### ¿Cómo optimizo las imágenes?

Usar herramientas como:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/

O instalar `vite-plugin-imagemin` para optimización automática.

### ¿Lighthouse muestra score bajo de SEO?

Verificar:
1. Todos los `<img>` tienen `alt` attribute
2. Existe un solo `<h1>` por página
3. Meta description está presente
4. Links tienen texto descriptivo
5. Canonical URL es correcta
6. HTML lang attribute es correcto

---

## Soporte

Para preguntas o problemas con la implementación SEO, contactar al equipo de desarrollo o consultar la documentación de las librerías utilizadas.

**Última actualización:** Noviembre 2025

---

**Acabados Adher S.A. de C.V.**
Pintura Electrostática desde 1978
www.adher.com.mx
