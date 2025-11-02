# Instrucciones para Imagen OG (Open Graph)

## Especificaciones Técnicas
- **Dimensiones:** 1200 × 630 píxeles
- **Formato:** JPG o PNG
- **Nombre del archivo:** `og-image.jpg`
- **Peso máximo recomendado:** < 300 KB

## Diseño Recomendado

Se ha creado un archivo SVG (`og-image.svg`) como plantilla base. Para crear la versión JPG final:

### Opción 1: Usar un editor de imágenes
1. Abrir `og-image.svg` en Adobe Illustrator, Figma, o similar
2. Exportar como JPG a 1200×630px
3. Guardar como `og-image.jpg` en la carpeta `/public/`

### Opción 2: Usar el logo existente
1. Abrir `/src/assets/adher-logo.png` en un editor de imágenes
2. Crear un canvas de 1200×630px con el fondo naranja (#ea580c)
3. Centrar el logo
4. Agregar texto: "Acabados Adher - Pintura Electrostática desde 1978"
5. Agregar badge de ISO 9001:2008
6. Exportar como `og-image.jpg`

### Opción 3: Usar una herramienta online
1. Ir a [Canva](https://www.canva.com/) o similar
2. Seleccionar plantilla "Facebook Post" (1200×630)
3. Usar los siguientes elementos:
   - **Fondo:** Gradiente naranja (#ea580c → #fb923c)
   - **Logo:** Importar de `/src/assets/adher-logo.png`
   - **Texto principal:** "Acabados Adher"
   - **Subtítulo:** "Pioneros en Pintura Electrostática"
   - **Año:** "desde 1978"
   - **Badge:** "ISO 9001:2008"
   - **Footer:** "Monterrey, Nuevo León | www.adher.com.mx"
4. Exportar como JPG

## Colores de Marca
- **Naranja principal:** #ea580c (orange-600)
- **Naranja claro:** #fb923c (orange-400)
- **Texto oscuro:** #1a1a1a
- **Texto gris:** #666666
- **Blanco:** #ffffff

## Verificación
Después de crear la imagen, verificar en:
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

## Ubicación Final
Colocar el archivo `og-image.jpg` en la carpeta `/public/` del proyecto.
