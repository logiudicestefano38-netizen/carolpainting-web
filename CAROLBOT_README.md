# CarolBot - Asistente Virtual Inteligente

## Descripción
CarolBot es un asistente virtual inteligente integrado en el sitio web de Carol Painting Construction. Proporciona respuestas instantáneas a preguntas comunes sobre servicios, precios y contacto.

## Características

### 🎤 Reconocimiento de Voz
- Usa la API Web Speech Recognition para capturar comandos de voz en español
- Presiona el botón del micrófono (🎤) para activar el reconocimiento de voz
- Soporta navegadores modernos (Chrome, Edge, Safari con soporte limitado)

### 🔊 Síntesis de Voz
- Responde con voz usando la API Web Speech Synthesis
- Las respuestas se leen automáticamente en español
- Animación visual del avatar mientras habla

### 💬 Chat Interactivo
- Interfaz de chat moderna y responsiva
- Mensajes diferenciados para usuario (naranja) y bot (gris)
- Scroll automático al último mensaje

### 🎯 Preguntas Frecuentes
CarolBot puede responder a:
- Saludos ("hola", "buenos días")
- Consultas sobre servicios ("¿qué servicios ofrecen?")
- Preguntas sobre precios ("¿cuánto cuesta?", "presupuesto")
- Información de contacto ("¿cómo los contacto?")
- Marcas de pintura ("¿qué marcas usan?")

## Tecnologías Utilizadas
- HTML5
- CSS3 (con animaciones y diseño responsivo)
- JavaScript vanilla
- Web Speech API (Speech Recognition y Speech Synthesis)
- Poppins font (Google Fonts)

## Compatibilidad
- **Reconocimiento de Voz**: Chrome, Edge (mejor soporte), Safari (limitado), Firefox (limitado)
- **Síntesis de Voz**: Todos los navegadores modernos
- **Responsivo**: Funciona en desktop, tablet y móvil

## Integración
El CarolBot está disponible en:
- Página dedicada: `carolbot.html`
- Enlaces en el menú de navegación de todas las páginas del sitio

## Personalización
Para modificar las respuestas del bot, edita la función `responder()` en `carolbot.html`:
```javascript
function responder(pregunta) {
    const p = pregunta.toLowerCase();
    let respuesta = "Respuesta por defecto...";
    let respuestaVoz = "Versión de voz de la respuesta...";
    
    // Agrega tus condiciones aquí
    if (p.includes("palabra clave")) {
        respuesta = "Respuesta detallada...";
        respuestaVoz = "Versión simplificada para voz...";
    }
    
    // El bot responde después de 500ms
    setTimeout(() => {
        mostrarMensaje(respuesta, 'bot');
        hablar(respuestaVoz);
    }, 500);
}
```

## Diseño Visual
- **Colores principales**: 
  - Azul oscuro (#1E3C57) para header y elementos primarios
  - Naranja (#FF6600) para acentos y botones
  - Blanco y gris claro para fondo
- **Animaciones**: 
  - Bounce y rotación en el avatar cuando habla
  - Transiciones suaves en hover
  - Efectos de escala en botones

## Mejoras Futuras
- Integración con IA/LLM para respuestas más sofisticadas
- Conexión con base de datos de proyectos
- Historial de conversaciones
- Multiidioma (inglés, español)
- Integración con WhatsApp Business API
