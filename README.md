# 📱 Página Web Dinámica - Inteligencia Artificial Educación 2A

Página web moderna y completamente funcional que muestra información dinámicamente sobre el repositorio de la materia Inteligencia Artificial 2A.

## 🌟 Características Principales

### Secciones de la Página

1. **Navegación Sticky**
   - Barra de navegación fija en la parte superior
   - Enlaces rápidos a todas las secciones
   - Diseño responsive

2. **Hero Section**
   - Encabezado atractivo con gradiente
   - Botones de acción principales
   - Animaciones fluidas
   - Icono flotante

3. **Información del Repositorio**
   - Descripción del proyecto
   - Detalles del propietario con avatar
   - Rama principal
   - Estado de licencia
   - Visibilidad (Público/Privado)
   - Fecha de creación

4. **Estadísticas Dinámicas**
   - Número de estrellas
   - Forks
   - Issues abiertos
   - Observadores
   - Animaciones de conteo

5. **Características del Repositorio**
   - Estado de descargas
   - Issues habilitados
   - Proyectos
   - Wiki
   - Discussions
   - GitHub Pages

6. **Acciones Rápidas**
   - Clonar repositorio
   - Abrir en GitHub
   - Descargar ZIP
   - Copiar enlace

7. **Footer**
   - Información de copyright
   - Enlace al repositorio
   - Información de contacto

## 🎨 Diseño y Estilo

### Paleta de Colores
```css
Primary: #6366f1 (Índigo)
Secondary: #8b5cf6 (Púrpura)
Accent: #ec4899 (Rosa)
Success: #10b981 (Verde)
Dark: #0f172a (Azul Oscuro)
Light: #f8fafc (Gris Claro)
```

### Características de Diseño
- ✅ Completamente responsivo (Mobile, Tablet, Desktop)
- ✅ Animaciones suaves y modernas
- ✅ Transiciones CSS personalizadas
- ✅ Sombras y efectos de profundidad
- ✅ Gradientes dinámicos
- ✅ Iconos Font Awesome

## 🚀 Funcionalidades JavaScript

### Funciones Dinámicas

#### 1. **Carga de Datos del Repositorio**
```javascript
cargarInformacionRepositorio()
```
- Llena automáticamente toda la información del repositorio
- Obtiene datos en tiempo real de la API de GitHub

#### 2. **Animación de Números**
```javascript
animarNumero(elementId, numeroFinal)
```
- Anima el conteo de estadísticas
- Incremento suave en 1 segundo

#### 3. **Acciones de Repositorio**
- `irAlRepositorio()` - Abre el repositorio en GitHub
- `clonarRepositorio()` - Copia comando git clone al portapapeles
- `descargarZip()` - Descarga ZIP del repositorio
- `copiarEnlace()` - Copia URL al portapapeles

#### 4. **Sistema de Notificaciones**
```javascript
mostrarNotificacion(mensaje, tipo)
```
- Notificaciones flotantes en la esquina superior derecha
- Tipos: success, error, info, warning
- Auto-desaparición en 3 segundos

#### 5. **Intersection Observer**
```javascript
animarElementos()
```
- Anima elementos cuando entran en viewport
- Efecto de aparición suave

#### 6. **Atajos de Teclado**
- `Ctrl + L` - Copiar enlace rápidamente

## 📦 Archivos Incluidos

### `index.html`
- Estructura HTML semántica
- Elementos interactivos
- Integración con Font Awesome

### `styles.css`
- Estilos globales y variables CSS
- Media queries para responsive design
- Animaciones CSS keyframes
- 1000+ líneas de CSS profesional

### `script.js`
- Lógica JavaScript pura (sin librerías)
- Inicialización al cargar la página
- Manejo de eventos
- Integración con GitHub API

## 🔧 Instalación y Uso

### Forma 1: Clonar el Repositorio
```bash
git clone https://github.com/mvalencia-maker/IA-2A-inteligencia-aplicada-a-la-educaci-n-.git
cd IA-2A-inteligencia-aplicada-a-la-educaci-n-
```

### Forma 2: Descargar como ZIP
- Botón "Descargar ZIP" en la página web
- O descarga directamente desde GitHub

### Forma 3: Abrir Directamente
Simplemente abre `index.html` en tu navegador favorito (Chrome, Firefox, Safari, Edge)

## 🌐 Compatibilidad

- ✅ Chrome (Versión 90+)
- ✅ Firefox (Versión 88+)
- ✅ Safari (Versión 14+)
- ✅ Edge (Versión 90+)
- ✅ Mobile browsers

## 📱 Características Responsivas

La página se adapta automáticamente a:
- 📱 Teléfonos (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktops (1024px+)

## 🎯 Optimizaciones

- ✨ Animaciones suaves sin lag
- ⚡ Carga rápida (recursos externos mínimos)
- 🎨 CSS Grid y Flexbox modernos
- 📦 JavaScript vanilla (sin dependencias)
- 🔍 SEO friendly

## 🤝 Integración con GitHub API

La página obtiene automáticamente información en tiempo real:
```javascript
const REPO_API = 'https://api.github.com/repos/mvalencia-maker/IA-2A-inteligencia-aplicada-a-la-educaci-n-';

// Obtiene datos actualizados
obtenerDatosRepositorio()
```

## 🎓 Uso Educativo

Esta página web es perfecta para:
- 📚 Proyectos educativos
- 🏆 Portafolios estudiantiles
- 📊 Presentación de repositorios
- 🎨 Aprendizaje de web design
- 💡 Referencia de mejores prácticas

## 📄 Licencia

Sin licencia especificada - Uso libre

## 👤 Autor

**mvalencia-maker**
- GitHub: [@mvalencia-maker](https://github.com/mvalencia-maker)
- Email: mvalencia@eightacademy.edu.ec

## 📞 Soporte

Para reportar bugs o sugerencias, abre un issue en el repositorio:
[Crear Issue](https://github.com/mvalencia-maker/IA-2A-inteligencia-aplicada-a-la-educaci-n-/issues)

## 🚀 Mejoras Futuras

- [ ] Agregar más secciones dinámicas
- [ ] Integración con badges
- [ ] Modo oscuro
- [ ] Múltiples idiomas
- [ ] Generador de páginas para otros repos
- [ ] PWA (Progressive Web App)

---

**¡Gracias por visitar esta página!** 🎉

Desarrollado con ❤️ usando HTML, CSS y JavaScript vanilla.
