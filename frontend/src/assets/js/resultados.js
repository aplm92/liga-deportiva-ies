/**
 * JavaScript para la página de Resultados
 */

/**
 * Filtra los resultados por competición y jornada
 */
function filtrarResultados() {
    const competicion = document.getElementById('filtroCompeticion').value.toLowerCase();
    const jornada = document.getElementById('filtroJornada').value;
    const secciones = document.querySelectorAll('.resultado-section');
    
    secciones.forEach(seccion => {
        const seccionCompeticion = seccion.getAttribute('data-competicion');
        const seccionJornada = seccion.getAttribute('data-jornada');
        
        const coincideCompeticion = !competicion || seccionCompeticion === competicion;
        const coincideJornada = !jornada || seccionJornada === jornada;
        
        if (coincideCompeticion && coincideJornada) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
    
    console.log(`Filtrado - Competición: ${competicion || 'Todas'}, Jornada: ${jornada || 'Todas'}`);
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de resultados cargada');
});


