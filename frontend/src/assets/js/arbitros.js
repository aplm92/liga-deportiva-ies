/**
 * JavaScript para la página de Árbitros
 */

// Datos de ejemplo de árbitros
const arbitros = {
    'miguel-angel': {
        nombre: 'Miguel Ángel',
        competicion: 'Fútbol',
        experiencia: 8,
        categoria: 'Experto',
        partidosArbitrados: 15,
        tarjetasAmarillas: 23,
        tarjetasRojas: 2,
        email: 'miguel.angel@instituto.edu',
        telefono: '+34 600 111 222',
        certificaciones: ['Árbitro Nacional de Fútbol', 'Curso de Arbitraje Avanzado']
    },
    'carlos-ruiz': {
        nombre: 'Carlos Ruiz',
        competicion: 'Fútbol',
        experiencia: 4,
        categoria: 'Intermedio',
        partidosArbitrados: 12,
        tarjetasAmarillas: 18,
        tarjetasRojas: 1,
        email: 'carlos.ruiz@instituto.edu',
        telefono: '+34 600 222 333',
        certificaciones: ['Árbitro Regional de Fútbol']
    },
    'ana-garcia': {
        nombre: 'Ana García',
        competicion: 'Fútbol',
        experiencia: 1,
        categoria: 'Principiante',
        partidosArbitrados: 8,
        tarjetasAmarillas: 12,
        tarjetasRojas: 0,
        email: 'ana.garcia@instituto.edu',
        telefono: '+34 600 333 444',
        certificaciones: ['Curso Básico de Arbitraje']
    },
    'luis-martinez': {
        nombre: 'Luis Martínez',
        competicion: 'Baloncesto',
        experiencia: 10,
        categoria: 'Experto',
        partidosArbitrados: 20,
        faltas: 45,
        tecnicas: 3,
        email: 'luis.martinez@instituto.edu',
        telefono: '+34 600 444 555',
        certificaciones: ['Árbitro Nacional de Baloncesto', 'Curso de Arbitraje FIBA']
    },
    'maria-lopez-arbitro': {
        nombre: 'María López',
        competicion: 'Baloncesto',
        experiencia: 5,
        categoria: 'Intermedio',
        partidosArbitrados: 18,
        faltas: 38,
        tecnicas: 2,
        email: 'maria.lopez.arbitro@instituto.edu',
        telefono: '+34 600 555 666',
        certificaciones: ['Árbitro Regional de Baloncesto']
    },
    'pedro-sanchez-arbitro': {
        nombre: 'Pedro Sánchez',
        competicion: 'Balonmano',
        experiencia: 4,
        categoria: 'Intermedio',
        partidosArbitrados: 10,
        exclusiones: 8,
        descalificaciones: 1,
        email: 'pedro.sanchez.arbitro@instituto.edu',
        telefono: '+34 600 666 777',
        certificaciones: ['Árbitro Regional de Balonmano']
    },
    'elena-fernandez': {
        nombre: 'Elena Fernández',
        competicion: 'Voleibol',
        experiencia: 7,
        categoria: 'Experto',
        partidosArbitrados: 14,
        sets: 42,
        email: 'elena.fernandez@instituto.edu',
        telefono: '+34 600 777 888',
        certificaciones: ['Árbitro Nacional de Voleibol', 'Curso de Arbitraje FIVB']
    }
};

/**
 * Filtra los árbitros por competición, experiencia y nombre
 */
function filtrarArbitros() {
    const competicion = document.getElementById('filtroCompeticion').value.toLowerCase();
    const experiencia = document.getElementById('filtroExperiencia').value.toLowerCase();
    const nombre = document.getElementById('buscarArbitro').value.toLowerCase();
    
    const arbitrosCards = document.querySelectorAll('.arbitro-card');
    
    arbitrosCards.forEach(card => {
        const cardCompeticion = card.getAttribute('data-competicion');
        const cardExperiencia = card.getAttribute('data-experiencia');
        const cardNombre = card.querySelector('.card-title').textContent.toLowerCase();
        
        const coincideCompeticion = !competicion || cardCompeticion === competicion;
        const coincideExperiencia = !experiencia || cardExperiencia === experiencia;
        const coincideNombre = !nombre || cardNombre.includes(nombre);
        
        if (coincideCompeticion && coincideExperiencia && coincideNombre) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Filtrado - Competición: ${competicion || 'Todas'}, Experiencia: ${experiencia || 'Toda'}, Nombre: ${nombre || 'Todos'}`);
}

/**
 * Determina la categoría de experiencia
 * @param {number} años - Años de experiencia
 * @returns {string} Categoría
 */
function obtenerCategoriaExperiencia(años) {
    if (años >= 6) return 'Experto';
    if (años >= 3) return 'Intermedio';
    return 'Principiante';
}

/**
 * Muestra el detalle de un árbitro en un modal
 * @param {string} arbitroId - ID del árbitro
 */
function mostrarDetalleArbitroModal(arbitroId) {
    const arbitro = arbitros[arbitroId];
    if (!arbitro) {
        console.error('Árbitro no encontrado:', arbitroId);
        return;
    }
    
    const modalTitulo = document.getElementById('modalArbitroTitulo');
    const modalCuerpo = document.getElementById('modalArbitroCuerpo');
    
    modalTitulo.textContent = arbitro.nombre;
    
    let html = `
        <div class="row">
            <div class="col-md-6">
                <h6>Información Personal</h6>
                <p><strong>Competición:</strong> ${arbitro.competicion}</p>
                <p><strong>Experiencia:</strong> ${arbitro.experiencia} años</p>
                <p><strong>Categoría:</strong> ${arbitro.categoria}</p>
                <p><strong>Email:</strong> ${arbitro.email}</p>
                <p><strong>Teléfono:</strong> ${arbitro.telefono}</p>
            </div>
            <div class="col-md-6">
                <h6>Estadísticas Profesionales</h6>
                <p><strong>Partidos Arbitrados:</strong> ${arbitro.partidosArbitrados}</p>
    `;
    
    // Estadísticas según el deporte
    if (arbitro.competicion === 'Fútbol') {
        html += `
            <p><strong>Tarjetas Amarillas:</strong> ${arbitro.tarjetasAmarillas}</p>
            <p><strong>Tarjetas Rojas:</strong> ${arbitro.tarjetasRojas}</p>
            <p><strong>Promedio Tarjetas/Partido:</strong> ${(arbitro.tarjetasAmarillas / arbitro.partidosArbitrados).toFixed(1)}</p>
        `;
    } else if (arbitro.competicion === 'Baloncesto') {
        html += `
            <p><strong>Faltas:</strong> ${arbitro.faltas}</p>
            <p><strong>Técnicas:</strong> ${arbitro.tecnicas}</p>
            <p><strong>Promedio Faltas/Partido:</strong> ${(arbitro.faltas / arbitro.partidosArbitrados).toFixed(1)}</p>
        `;
    } else if (arbitro.competicion === 'Balonmano') {
        html += `
            <p><strong>Exclusiones:</strong> ${arbitro.exclusiones}</p>
            <p><strong>Descalificaciones:</strong> ${arbitro.descalificaciones}</p>
        `;
    } else if (arbitro.competicion === 'Voleibol') {
        html += `
            <p><strong>Sets Arbitrados:</strong> ${arbitro.sets}</p>
            <p><strong>Promedio Sets/Partido:</strong> ${(arbitro.sets / arbitro.partidosArbitrados).toFixed(1)}</p>
        `;
    }
    
    html += `
            </div>
        </div>
        <hr>
        <h6>Certificaciones</h6>
        <ul class="list-group">
    `;
    
    arbitro.certificaciones.forEach(cert => {
        html += `<li class="list-group-item"><i class="bi bi-award me-2 text-primary"></i>${cert}</li>`;
    });
    
    html += `
        </ul>
    `;
    
    modalCuerpo.innerHTML = html;
    
    const modal = new bootstrap.Modal(document.getElementById('modalDetalleArbitro'));
    modal.show();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de árbitros cargada');
});


