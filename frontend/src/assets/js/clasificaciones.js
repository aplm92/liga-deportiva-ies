/**
 * JavaScript para la página de Clasificaciones
 */

/**
 * Filtra las clasificaciones por competición
 */
function filtrarClasificaciones() {
    const competicion = document.getElementById('filtroCompeticion').value.toLowerCase();
    const secciones = document.querySelectorAll('.clasificacion-section');
    
    secciones.forEach(seccion => {
        const seccionCompeticion = seccion.getAttribute('data-competicion');
        
        if (!competicion || seccionCompeticion === competicion) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
    
    console.log(`Filtrado por competición: ${competicion || 'Todas'}`);
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de clasificaciones cargada');
});


