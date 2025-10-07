# Instrucciones para Personalizar el Sitio Web de Carol Painting

Este documento proporciona una guía completa para reemplazar el contenido genérico del sitio web con información real de la empresa.

## 1. Reemplazar el Logo

**Archivo actual:** `D348E118-77FA-428C-8BBD-03B735AEFE29.png`

**Pasos:**
1. Crear o obtener el logo oficial de Carol Painting en formato PNG con fondo transparente
2. Tamaño recomendado: 200x200 píxeles o similar (cuadrado)
3. Nombrar el archivo como `logo.png`
4. Actualizar en `index.html` línea 24:
   ```html
   <img src="logo.png" alt="Carol Painting Logo - Empresa profesional de pintura en Homestead FL" class="logo-img">
   ```
5. Actualizar también la meta etiqueta Open Graph en línea 12:
   ```html
   <meta property="og:image" content="logo.png">
   ```

## 2. Reemplazar el Favicon

**Archivo actual:** `favicon.ico` (genérico)

**Pasos:**
1. Crear un favicon personalizado en formato .ico (32x32 o 16x16 píxeles)
2. Utilizar herramientas online como https://www.favicon-generator.org/
3. Reemplazar el archivo `favicon.ico` en la raíz del proyecto

## 3. Actualizar Información de Contacto

**Ubicaciones en `index.html`:**

### Dirección (líneas 180-182):
```html
<p>123 Main Street<br>Homestead, FL 33030</p>
```
Reemplazar con la dirección real de la empresa.

### Teléfono (líneas 187-189):
```html
<p><a href="tel:+13055551234">(305) 555-1234</a></p>
```
Reemplazar `+13055551234` con el número real (formato internacional) y `(305) 555-1234` con el formato de visualización.

### Email (líneas 194-196):
```html
<p><a href="mailto:info@carolpainting.com">info@carolpainting.com</a></p>
```
Reemplazar con el email real de contacto.

### Horario (líneas 201-203):
```html
<p>Lunes - Viernes: 8:00 AM - 6:00 PM<br>Sábado: 9:00 AM - 2:00 PM</p>
```
Ajustar según el horario real de atención.

### Footer (líneas 272-275):
Actualizar también la información de contacto en el footer.

## 4. Actualizar Enlaces de Redes Sociales

**Ubicación:** Líneas 208-220 en `index.html`

Reemplazar las URLs genéricas con las URLs reales:

```html
<a href="https://facebook.com/carolpainting" target="_blank">
<!-- Cambiar a la página real de Facebook -->

<a href="https://instagram.com/carolpainting" target="_blank">
<!-- Cambiar a la cuenta real de Instagram -->

<a href="https://twitter.com/carolpainting" target="_blank">
<!-- Cambiar a la cuenta real de Twitter/X -->
```

## 5. Reemplazar Imágenes de Proyectos

**Ubicación:** Carpeta `img/`

**Imágenes actuales:**
- `IMG_0187.jpeg` - Proyecto 1
- `IMG_0188.jpeg` - Proyecto 2
- `1DE84542-776D-4EAF-8237-A8191769233B.jpeg` - Proyecto 3
- `processed-7807E468-4409-453F-8AAD-E0FF12F24D43.jpeg` - Proyecto 4

**Pasos:**
1. Seleccionar las mejores fotos de proyectos reales completados
2. Optimizar las imágenes antes de subirlas (usar herramientas como TinyPNG.com)
3. Tamaño recomendado: máximo 1500px en el lado más largo, menos de 500KB por imagen
4. Nombrar las imágenes de forma descriptiva (ej: `proyecto-residencial-miami.jpg`)
5. Actualizar las referencias en `index.html` (líneas 104-131)
6. Actualizar los textos alternativos (atributos `alt`) para SEO

## 6. Personalizar Testimonios

**Ubicación:** Líneas 142-179 en `index.html`

**Testimonios actuales:** Genéricos (4 testimonios de ejemplo)

**Para cada testimonio, actualizar:**
- Texto del testimonio (línea con clase `testimonial-text`)
- Nombre del cliente (dentro de `<strong>`)
- Ubicación del cliente (dentro de `<span>`)

**Formato del testimonio:**
```html
<div class="testimonial-card">
    <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">"[Texto real del testimonio aquí]"</p>
    <div class="testimonial-author">
        <strong>[Nombre del Cliente]</strong>
        <span>[Ciudad, Estado]</span>
    </div>
</div>
```

## 7. Actualizar Descripciones de Proyectos

**Ubicación:** Líneas 104-131 en `index.html`

Para cada proyecto, actualizar:
- Título del proyecto (dentro de `<h3>`)
- Descripción breve (dentro de `<p>`)
- Texto alternativo de la imagen

## 8. Ajustar Servicios (Opcional)

**Ubicación:** Líneas 55-88 en `index.html`

Si los servicios listados no corresponden exactamente a lo que ofrece Carol Painting:
1. Modificar el título del servicio
2. Actualizar la descripción
3. Cambiar el emoji del ícono si es necesario

**Servicios actuales:**
- Pintura Residencial
- Pintura Comercial
- Remodelación
- Acabados Especiales
- Consultoría de Color
- Reparaciones

## 9. Configurar el Formulario de Contacto

**Ubicación:** Líneas 224-255 en `index.html`

El formulario actual muestra una alerta de demostración. Para implementar funcionalidad real:

### Opción A: Usar un servicio de formularios (Recomendado)
- Servicios como Formspree, Netlify Forms, o Google Forms
- Ejemplo con Formspree:
  ```html
  <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

### Opción B: Backend personalizado
- Crear un endpoint en el servidor que procese el formulario
- Usar PHP, Node.js, o cualquier tecnología backend disponible

### Opción C: Integración con email
- Configurar un servicio como EmailJS
- Seguir su documentación para integración

## 10. Optimización SEO Adicional

### Actualizar meta descripciones según contenido real:
```html
<meta name="description" content="[Descripción real de la empresa]">
<meta name="keywords" content="[Palabras clave reales separadas por comas]">
```

### Añadir Google Analytics (si se requiere):
Antes del cierre de `</head>`, agregar:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 11. Verificación Final

Antes de publicar el sitio, verificar:
- [ ] Todas las imágenes cargan correctamente
- [ ] Todos los enlaces funcionan
- [ ] El formulario de contacto envía emails
- [ ] El sitio es responsivo en móviles y tablets
- [ ] La información de contacto es correcta
- [ ] Los enlaces de redes sociales apuntan a las páginas correctas
- [ ] El favicon se muestra correctamente
- [ ] No quedan textos genéricos o de ejemplo

## 12. Mantenimiento Continuo

### Agregar nuevos proyectos:
1. Optimizar y guardar imagen en carpeta `img/`
2. Agregar una nueva tarjeta de proyecto en la sección de proyectos
3. Seguir el formato existente

### Agregar nuevos testimonios:
1. Agregar una nueva tarjeta de testimonio en la sección correspondiente
2. Mantener el formato consistente

## Recursos Adicionales

- **Optimización de imágenes:** TinyPNG.com, ImageOptim
- **Generador de favicon:** Favicon-generator.org
- **Validador HTML:** validator.w3.org
- **Test de responsive:** responsivedesignchecker.com
- **Test de velocidad:** PageSpeed Insights de Google

## Soporte

Si necesitas ayuda adicional para personalizar el sitio web, consulta con el desarrollador o equipo técnico encargado del proyecto.

---

**Última actualización:** 2024
