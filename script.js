// URL del repositorio
const REPO_URL = 'https://github.com/mvalencia-maker/IA-2A-inteligencia-aplicada-a-la-educaci-n-';
const REPO_API = 'https://api.github.com/repos/mvalencia-maker/IA-2A-inteligencia-aplicada-a-la-educaci-n-';

// Información del repositorio (datos ya obtenidos)
const repoData = {
    descripcion: "Apuntes de la materia inteligencia artificial",
    ownerName: "mvalencia-maker",
    ownerAvatar: "https://avatars.githubusercontent.com/u/291816545?v=4",
    defaultBranch: "main",
    license: "Sin licencia especificada",
    visibility: "Público",
    createdAt: "8 minutos",
    stars: 0,
    forks: 0,
    issues: 0,
    watchers: 0,
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    hasDiscussions: false,
    hasPages: false
};

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarInformacionRepositorio();
    configurarEventos();
    animarElementos();
});

// Cargar información del repositorio
function cargarInformacionRepositorio() {
    // Descripción
    document.getElementById('descripcion').textContent = repoData.descripcion;

    // Propietario
    document.getElementById('ownerName').textContent = repoData.ownerName;
    document.getElementById('ownerAvatar').src = repoData.ownerAvatar;
    document.getElementById('ownerAvatar').alt = repoData.ownerName;

    // Rama principal
    document.getElementById('defaultBranch').textContent = repoData.defaultBranch;

    // Licencia
    document.getElementById('license').textContent = repoData.license;

    // Visibilidad
    document.getElementById('visibility').innerHTML = `<span class="badge badge-public">${repoData.visibility}</span>`;

    // Fecha de creación
    document.getElementById('createdAt').textContent = repoData.createdAt;

    // Estadísticas
    animarNumero('starsCount', repoData.stars);
    animarNumero('forksCount', repoData.forks);
    animarNumero('issuesCount', repoData.issues);
    animarNumero('watchersCount', repoData.watchers);

    // Características
    document.getElementById('hasDownloads').textContent = repoData.hasDownloads ? '✓ Sí' : '✗ No';
    document.getElementById('hasIssues').textContent = repoData.hasIssues ? '✓ Sí' : '✗ No';
    document.getElementById('hasProjects').textContent = repoData.hasProjects ? '✓ Sí' : '✗ No';
    document.getElementById('hasWiki').textContent = repoData.hasWiki ? '✓ Sí' : '✗ No';
    document.getElementById('hasDiscussions').textContent = repoData.hasDiscussions ? '✓ Sí' : '✗ No';
    document.getElementById('hasPages').textContent = repoData.hasPages ? '✓ Sí' : '✗ No';
}

// Animar números con incremento
function animarNumero(elementId, numeroFinal) {
    const elemento = document.getElementById(elementId);
    let numeroActual = 0;
    const incremento = numeroFinal / 30; // 30 frames de animación
    const duracion = 1000; // 1 segundo
    const pasoTiempo = duracion / 30;

    const intervalo = setInterval(() => {
        numeroActual += incremento;
        if (numeroActual >= numeroFinal) {
            elemento.textContent = numeroFinal;
            clearInterval(intervalo);
        } else {
            elemento.textContent = Math.floor(numeroActual);
        }
    }, pasoTiempo);
}

// Configurar eventos de botones
function configurarEventos() {
    // Eventos delegados para los botones de acción
    document.querySelectorAll('.action-button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
}

// Ir al repositorio
function irAlRepositorio() {
    window.open(REPO_URL, '_blank');
    mostrarNotificacion('Abriendo repositorio en GitHub...', 'info');
}

// Clonar repositorio
function clonarRepositorio() {
    const codigoClonacion = 'git clone https://github.com/mvalencia-maker/IA-2A-inteligencia-aplicada-a-la-educaci-n-.git';
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(codigoClonacion).then(() => {
        mostrarNotificacion('Comando de clonación copiado al portapapeles', 'success');
    }).catch(err => {
        mostrarNotificacion('Error al copiar: ' + err, 'error');
    });

    console.log('Comando de clonación:', codigoClonacion);
}

// Descargar ZIP
function descargarZip() {
    const urlZip = REPO_URL + '/archive/refs/heads/main.zip';
    window.location.href = urlZip;
    mostrarNotificacion('Iniciando descarga del repositorio...', 'info');
}

// Copiar enlace
function copiarEnlace() {
    navigator.clipboard.writeText(REPO_URL).then(() => {
        mostrarNotificacion('Enlace copiado al portapapeles: ' + REPO_URL, 'success');
    }).catch(err => {
        mostrarNotificacion('Error al copiar: ' + err, 'error');
    });
}

// Mostrar detalles
function mostrarDetalles() {
    const detallesSection = document.getElementById('detalles');
    detallesSection.scrollIntoView({ behavior: 'smooth' });
    mostrarNotificacion('Desplazándote a los detalles del repositorio...', 'info');
}

// Notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;

    // Colores según tipo
    const colores = {
        success: { bg: '#10b981', color: 'white' },
        error: { bg: '#ef4444', color: 'white' },
        info: { bg: '#3b82f6', color: 'white' },
        warning: { bg: '#f59e0b', color: 'white' }
    };

    const color = colores[tipo] || colores.info;
    notificacion.style.backgroundColor = color.bg;
    notificacion.style.color = color.color;
    notificacion.textContent = mensaje;

    document.body.appendChild(notificacion);

    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Animaciones de elementos al cargar
function animarElementos() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar tarjetas de detalles
    document.querySelectorAll('.detalle-card, .stat-card, .feature, .action-button').forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'all 0.6s ease-out';
        observer.observe(elemento);
    });
}

// Agregar estilos de animación dinámicos
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .navbar {
        animation: slideDown 0.5s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Función para obtener datos en tiempo real (opcional)
async function obtenerDatosRepositorio() {
    try {
        const respuesta = await fetch(REPO_API);
        if (respuesta.ok) {
            const datos = await respuesta.json();
            console.log('Datos del repositorio (tiempo real):', datos);
            
            // Actualizar datos si es necesario
            repoData.stars = datos.stargazers_count;
            repoData.forks = datos.forks_count;
            repoData.issues = datos.open_issues_count;
            repoData.watchers = datos.watchers_count;
            
            // Cargar información actualizada
            cargarInformacionRepositorio();
        }
    } catch (error) {
        console.error('Error al obtener datos del repositorio:', error);
    }
}

// Llamar a obtener datos en tiempo real al cargar
obtenerDatosRepositorio();

// Configurar acceso a teclado
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        copiarEnlace();
    }
});

console.log('🚀 Página web dinámica de repositorio cargada correctamente');
console.log('📦 Repositorio:', REPO_URL);
console.log('📊 Datos iniciales cargados');
