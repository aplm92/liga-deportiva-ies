/**
 * JavaScript Principal para la Liga Deportiva del Instituto
 * Incluye eventos y funcionalidades de Bootstrap 5
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventos();
    inicializarCarrusel();
    inicializarModales();
    inicializarCollapse();
});

/**
 * Inicializa todos los eventos de la página
 */
function inicializarEventos() {
    console.log('Inicializando eventos de la Liga Deportiva...');
}

/**
 * Inicializa el carrusel de noticias con contador
 */
function inicializarCarrusel() {
    const carousel = document.getElementById('noticiasCarousel');
    const contador = document.getElementById('contadorCarousel');
    
    if (carousel && contador) {
        // Evento cuando el carrusel se desliza
        carousel.addEventListener('slid.bs.carousel', function(event) {
            const activeIndex = event.to;
            contador.textContent = activeIndex + 1;
            console.log(`Carrusel deslizado a la diapositiva ${activeIndex + 1}`);
        });
        
        // Evento cuando el carrusel comienza a deslizarse
        carousel.addEventListener('slide.bs.carousel', function(event) {
            console.log(`Carrusel comenzando a deslizarse desde ${event.from} hacia ${event.to}`);
        });
    }
}

/**
 * Inicializa los modales con eventos personalizados
 */
function inicializarModales() {
    // Modal de Inscripción
    const modalInscripcion = document.getElementById('modalInscripcion');
    if (modalInscripcion) {
        // Cuando el modal se muestra completamente
        modalInscripcion.addEventListener('shown.bs.modal', function() {
            const primerCampo = document.getElementById('nombreEquipo');
            if (primerCampo) {
                primerCampo.focus();
                console.log('Modal de inscripción abierto - Primer campo enfocado');
            }
        });
        
        // Cuando el modal se oculta completamente
        modalInscripcion.addEventListener('hidden.bs.modal', function() {
            const formulario = document.getElementById('formInscripcion');
            if (formulario) {
                formulario.reset();
                console.log('Modal de inscripción cerrado - Formulario reseteado');
            }
        });
    }
    
    // Modales de Noticias
    const modalesNoticias = document.querySelectorAll('[id^="modalNoticia"]');
    modalesNoticias.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function() {
            console.log(`Modal ${modal.id} abierto`);
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            console.log(`Modal ${modal.id} cerrado`);
        });
    });
}

/**
 * Inicializa los elementos collapse (textos legales)
 */
function inicializarCollapse() {
    const collapseElements = document.querySelectorAll('.collapse');
    
    collapseElements.forEach(element => {
        element.addEventListener('show.bs.collapse', function() {
            console.log(`Collapse ${element.id} comenzando a abrirse`);
        });
        
        element.addEventListener('shown.bs.collapse', function() {
            console.log(`Collapse ${element.id} completamente abierto`);
        });
        
        element.addEventListener('hide.bs.collapse', function() {
            console.log(`Collapse ${element.id} comenzando a cerrarse`);
        });
        
        element.addEventListener('hidden.bs.collapse', function() {
            console.log(`Collapse ${element.id} completamente cerrado`);
        });
    });
}

/**
 * Envía el formulario de inscripción y muestra un toast
 */
function enviarInscripcion() {
    const formulario = document.getElementById('formInscripcion');
    
    if (formulario && formulario.checkValidity()) {
        // Obtener datos del formulario
        const datos = {
            equipo: document.getElementById('nombreEquipo').value,
            deporte: document.getElementById('deporte').value,
            capitan: document.getElementById('capitan').value,
            email: document.getElementById('emailInscripcion').value,
            telefono: document.getElementById('telefono').value
        };
        
        console.log('Datos de inscripción:', datos);
        
        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalInscripcion'));
        if (modal) {
            modal.hide();
        }
        
        // Mostrar toast de confirmación
        mostrarToast('toastInscripcion');
        
        // Aquí se podría enviar los datos a un servidor
        // fetch('/api/inscripcion', { method: 'POST', body: JSON.stringify(datos) })
    } else {
        // Si el formulario no es válido, mostrar validación
        formulario.reportValidity();
    }
}

/**
 * Muestra un toast de Bootstrap
 * @param {string} toastId - ID del elemento toast
 */
function mostrarToast(toastId) {
    const toastElement = document.getElementById(toastId);
    if (toastElement) {
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
        
        toastElement.addEventListener('shown.bs.toast', function() {
            console.log(`Toast ${toastId} mostrado`);
        });
        
        toastElement.addEventListener('hidden.bs.toast', function() {
            console.log(`Toast ${toastId} ocultado`);
        });
    }
}

/**
 * Filtra equipos por competición
 * @param {string} competicion - Nombre de la competición
 */
function filtrarPorCompeticion(competicion) {
    console.log(`Filtrando por competición: ${competicion}`);
    // Esta función se implementará en las páginas específicas
}

/**
 * Busca jugadores por nombre
 * @param {string} nombre - Nombre del jugador a buscar
 */
function buscarJugador(nombre) {
    console.log(`Buscando jugador: ${nombre}`);
    // Esta función se implementará en la página de jugadores
}

/**
 * Muestra información detallada de un jugador en un modal
 * @param {object} jugador - Objeto con los datos del jugador
 */
function mostrarDetalleJugador(jugador) {
    console.log('Mostrando detalle del jugador:', jugador);
    // Esta función se implementará en la página de jugadores
}

/**
 * Muestra información detallada de un equipo en un modal
 * @param {object} equipo - Objeto con los datos del equipo
 */
function mostrarDetalleEquipo(equipo) {
    console.log('Mostrando detalle del equipo:', equipo);
    // Esta función se implementará en la página de equipos
}

/**
 * Obtiene los parámetros de la URL
 * @returns {object} Objeto con los parámetros de la URL
 */
function obtenerParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    const parametros = {};
    for (const [key, value] of params.entries()) {
        parametros[key] = value;
    }
    return parametros;
}

/**
 * Formatea una fecha a formato español
 * @param {Date} fecha - Fecha a formatear
 * @returns {string} Fecha formateada
 */
function formatearFecha(fecha) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
}

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} true si el email es válido
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Exportar funciones para uso en otras páginas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filtrarPorCompeticion,
        buscarJugador,
        mostrarDetalleJugador,
        mostrarDetalleEquipo,
        obtenerParametrosURL,
        formatearFecha,
        validarEmail,
        mostrarToast
    };
}


