# Carol Painting - Guía de Despliegue

## 🌐 Sitios Web Activos

El sitio web de Carol Painting está desplegado en Azure Static Web Apps con dos URLs disponibles:

### URL Principal
**https://ambitious-mud-094c3fd1e.azurestaticapps.net**

### URL Alternativa
**https://jolly-smoke-02f167e1e.azurestaticapps.net**

## 📋 Páginas del Sitio

1. **Inicio** - Página principal con servicios destacados
2. **Servicios** - Listado completo de servicios
3. **Galería** - Trabajos realizados con slider interactivo
4. **Contacto** - Información de contacto y WhatsApp
5. **Sobre Nosotros** - Información de la empresa

## 🚀 Proceso de Despliegue Automático

El sitio se despliega automáticamente cuando hay cambios en la rama `main`:

1. Los cambios se suben a GitHub (push a `main`)
2. GitHub Actions detecta los cambios
3. Los workflows en `.github/workflows/` se ejecutan
4. Azure Static Web Apps recibe y despliega los archivos
5. El sitio se actualiza en ambas URLs en minutos

## 📁 Estructura del Proyecto

```
carolpainting-web/
├── index.html              # Página principal
├── servicios.html          # Página de servicios
├── galeria.html            # Galería de trabajos
├── contacto.html           # Página de contacto
├── sobre.html              # Sobre nosotros
├── style.css               # Estilos principales
├── img/                    # Directorio de imágenes
├── staticwebapp.config.json # Configuración de Azure
├── README.md               # Documentación principal
├── DEPLOYMENT.md           # Esta guía de despliegue
└── .github/
    └── workflows/          # GitHub Actions para CI/CD
        ├── azure-static-web-apps-ambitious-mud-094c3fd1e.yml
        ├── azure-static-web-apps-jolly-smoke-02f167e1e.yml
        └── azure-webapps-node.yml  # Workflow alternativo (no usado actualmente)
```

## ✅ Características Implementadas

- ✅ HTML5 semántico y bien estructurado
- ✅ Diseño responsivo (mobile-first)
- ✅ Navegación consistente en todas las páginas
- ✅ Animaciones con Animate.css y AOS.js
- ✅ Galería interactiva con slider
- ✅ Integración con Tawk.to para chat en vivo
- ✅ Enlace directo a WhatsApp
- ✅ Optimizado para SEO
- ✅ Compatible con todos los navegadores modernos
- ✅ Despliegue automático con CI/CD

## 🔧 Configuración Técnica

### Azure Static Web Apps
- **App Location**: `/` (raíz del repositorio)
- **Output Location**: `.` (sin proceso de build)
- **API Location**: No hay API backend

### Archivos de Configuración
- `staticwebapp.config.json`: Configuración de rutas, MIME types y caché
- Workflows de GitHub Actions: Automatizan el despliegue

## 📞 Información de Contacto

- **Email**: henryhernan1992@gmail.com
- **Teléfono**: +1 786-334-8969
- **WhatsApp**: +1 786-334-8969

## 🎨 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Animate.css
- AOS.js (Animate On Scroll)
- Google Fonts (Montserrat, Oswald)
- Tawk.to Live Chat

## 📝 Notas Importantes

1. El sitio es completamente estático (no requiere servidor backend)
2. Las imágenes están optimizadas para web
3. El chat de Tawk.to requiere configuración del widget ID
4. El sitio está listo para producción

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

1. Edita los archivos HTML, CSS o JS según sea necesario
2. Haz commit de los cambios
3. Push a la rama `main`
4. El despliegue se ejecutará automáticamente
5. Verifica los cambios en las URLs en unos minutos

---

**Última actualización**: Enero 2025
**Estado**: ✅ Producción - Completamente Funcional
