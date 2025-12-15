/**
 * JavaScript para la página de Equipos
 */

// Datos de ejemplo de equipos con más jugadores
const equipos = {
    guerreras: {
        nombre: 'Las Guerreras',
        competicion: 'Balonmano',
        capitan: 'Macarena Aguilar',
        jugadores: [
            { nombre: 'Marta Mangué', posicion: 'Lateral', numero: 10 },
            { nombre: 'Elisabeth Pinedo', posicion: 'Extremo', numero: 7 },
            { nombre: 'Nerea Pena', posicion: 'Lateral', numero: 8 },
            { nombre: 'Carmen Martín', posicion: 'Extremo', numero: 11 },
            { nombre: 'Silvia Navarro', posicion: 'Portero', numero: 1 },
            { nombre: 'Macarena Aguilar', posicion: 'Central', numero: 4 },
            { nombre: 'Beatriz Fernández', posicion: 'Pívot', numero: 9 },
            { nombre: 'Patricia Elorza', posicion: 'Lateral', numero: 5 },
            { nombre: 'Marta López', posicion: 'Extremo', numero: 6 },
            { nombre: 'Alicia Fernández', posicion: 'Central', numero: 12 },
            { nombre: 'Merche Castellanos', posicion: 'Portero', numero: 16 },
            { nombre: 'Lara González', posicion: 'Pívot', numero: 13 },
            { nombre: 'Soledad López', posicion: 'Lateral', numero: 14 },
            { nombre: 'Jennifer Gutiérrez', posicion: 'Extremo', numero: 15 }
        ],
        totalJugadores: 14,
        partidosJugados: 8,
        partidosGanados: 7,
        partidosEmpatados: 0,
        partidosPerdidos: 1
    },
    hispanos: {
        nombre: 'Los Hispanos',
        competicion: 'Balonmano',
        capitan: 'Raúl Entrerríos',
        jugadores: [
            { nombre: 'Julen Aguinagalde', posicion: 'Pívot', numero: 9 },
            { nombre: 'Raúl Entrerríos', posicion: 'Central', numero: 10 },
            { nombre: 'Daniel Sarmiento', posicion: 'Lateral', numero: 11 },
            { nombre: 'Víctor Tomás', posicion: 'Extremo', numero: 7 },
            { nombre: 'Joan Cañellas', posicion: 'Lateral', numero: 8 },
            { nombre: 'Arpad Sterbik', posicion: 'Portero', numero: 1 },
            { nombre: 'Gonzalo Pérez de Vargas', posicion: 'Portero', numero: 16 },
            { nombre: 'Valero Rivera', posicion: 'Extremo', numero: 6 },
            { nombre: 'Eduardo Gurbindo', posicion: 'Lateral', numero: 5 },
            { nombre: 'Jorge Maqueda', posicion: 'Lateral', numero: 21 },
            { nombre: 'Ángel Fernández', posicion: 'Central', numero: 4 },
            { nombre: 'Antonio García', posicion: 'Pívot', numero: 13 },
            { nombre: 'Iker Romero', posicion: 'Lateral', numero: 3 },
            { nombre: 'Rubén Marchán', posicion: 'Pívot', numero: 15 }
        ],
        totalJugadores: 14,
        partidosJugados: 8,
        partidosGanados: 6,
        partidosEmpatados: 1,
        partidosPerdidos: 1
    },
    lobos: {
        nombre: 'Los Lobos',
        competicion: 'Balonmano',
        capitan: 'María López',
        jugadores: [
            { nombre: 'María López', posicion: 'Portero', numero: 1 },
            { nombre: 'Elena García', posicion: 'Extremo', numero: 7 },
            { nombre: 'Sofía Ruiz', posicion: 'Central', numero: 10 },
            { nombre: 'Carmen Martínez', posicion: 'Lateral', numero: 4 },
            { nombre: 'Laura Fernández', posicion: 'Pívot', numero: 9 },
            { nombre: 'Ana Sánchez', posicion: 'Extremo', numero: 11 },
            { nombre: 'Patricia Torres', posicion: 'Central', numero: 8 },
            { nombre: 'Isabel Díaz', posicion: 'Lateral', numero: 5 },
            { nombre: 'Lucía Jiménez', posicion: 'Portero', numero: 12 },
            { nombre: 'Natalia Castro', posicion: 'Extremo', numero: 6 },
            { nombre: 'Cristina Vega', posicion: 'Pívot', numero: 13 },
            { nombre: 'Andrea Moreno', posicion: 'Lateral', numero: 3 },
            { nombre: 'Marta González', posicion: 'Central', numero: 14 },
            { nombre: 'Rosa Martín', posicion: 'Extremo', numero: 15 }
        ],
        totalJugadores: 14,
        partidosJugados: 6,
        partidosGanados: 4,
        partidosEmpatados: 1,
        partidosPerdidos: 1
    },
    halcones: {
        nombre: 'Los Halcones',
        competicion: 'Fútbol',
        capitan: 'Juan Pérez',
        jugadores: [
            { nombre: 'Juan Pérez', posicion: 'Portero', numero: 1 },
            { nombre: 'Miguel Torres', posicion: 'Defensa', numero: 2 },
            { nombre: 'Sergio Ramos', posicion: 'Defensa', numero: 3 },
            { nombre: 'Carlos Puyol', posicion: 'Defensa', numero: 4 },
            { nombre: 'Andrés Iniesta', posicion: 'Centrocampista', numero: 6 },
            { nombre: 'Xavi Hernández', posicion: 'Centrocampista', numero: 8 },
            { nombre: 'David Silva', posicion: 'Centrocampista', numero: 10 },
            { nombre: 'Fernando Torres', posicion: 'Delantero', numero: 9 },
            { nombre: 'David Villa', posicion: 'Delantero', numero: 7 },
            { nombre: 'Raúl González', posicion: 'Delantero', numero: 11 },
            { nombre: 'Iker Casillas', posicion: 'Portero', numero: 13 },
            { nombre: 'Sergio Busquets', posicion: 'Centrocampista', numero: 5 },
            { nombre: 'Gerard Piqué', posicion: 'Defensa', numero: 15 },
            { nombre: 'Jordi Alba', posicion: 'Defensa', numero: 18 },
            { nombre: 'Cesc Fàbregas', posicion: 'Centrocampista', numero: 14 },
            { nombre: 'Pedro Rodríguez', posicion: 'Delantero', numero: 17 }
        ],
        totalJugadores: 16,
        partidosJugados: 8,
        partidosGanados: 5,
        partidosEmpatados: 2,
        partidosPerdidos: 1
    },
    leones: {
        nombre: 'Los Leones',
        competicion: 'Fútbol',
        capitan: 'Carlos García',
        jugadores: [
            { nombre: 'Carlos García', posicion: 'Portero', numero: 1 },
            { nombre: 'Antonio Ruiz', posicion: 'Defensa', numero: 4 },
            { nombre: 'Javier Hernández', posicion: 'Centrocampista', numero: 6 },
            { nombre: 'Roberto Martínez', posicion: 'Delantero', numero: 10 },
            { nombre: 'Luis Suárez', posicion: 'Delantero', numero: 9 },
            { nombre: 'Diego Forlán', posicion: 'Delantero', numero: 21 },
            { nombre: 'Fernando Morientes', posicion: 'Delantero', numero: 23 },
            { nombre: 'Santiago Cañizares', posicion: 'Portero', numero: 13 },
            { nombre: 'Carles Puyol', posicion: 'Defensa', numero: 5 },
            { nombre: 'Raúl Albiol', posicion: 'Defensa', numero: 2 },
            { nombre: 'Marcos Senna', posicion: 'Centrocampista', numero: 19 },
            { nombre: 'Santi Cazorla', posicion: 'Centrocampista', numero: 8 },
            { nombre: 'Juan Mata', posicion: 'Centrocampista', numero: 11 },
            { nombre: 'Fernando Llorente', posicion: 'Delantero', numero: 20 },
            { nombre: 'Álvaro Negredo', posicion: 'Delantero', numero: 7 },
            { nombre: 'Jesús Navas', posicion: 'Centrocampista', numero: 15 },
            { nombre: 'César Azpilicueta', posicion: 'Defensa', numero: 3 },
            { nombre: 'Nacho Monreal', posicion: 'Defensa', numero: 18 }
        ],
        totalJugadores: 18,
        partidosJugados: 8,
        partidosGanados: 6,
        partidosEmpatados: 1,
        partidosPerdidos: 1
    },
    thunder: {
        nombre: 'Thunder',
        competicion: 'Baloncesto',
        capitan: 'Ana Martínez',
        jugadores: [
            { nombre: 'Ana Martínez', posicion: 'Base', numero: 5 },
            { nombre: 'Laura Fernández', posicion: 'Alero', numero: 7 },
            { nombre: 'Carmen Sánchez', posicion: 'Pívot', numero: 15 },
            { nombre: 'María González', posicion: 'Escolta', numero: 4 },
            { nombre: 'Sofía López', posicion: 'Alero', numero: 8 },
            { nombre: 'Elena Ruiz', posicion: 'Pívot', numero: 12 },
            { nombre: 'Patricia Martín', posicion: 'Base', numero: 6 },
            { nombre: 'Isabel Torres', posicion: 'Escolta', numero: 9 },
            { nombre: 'Lucía Díaz', posicion: 'Alero', numero: 10 },
            { nombre: 'Andrea Jiménez', posicion: 'Pívot', numero: 14 },
            { nombre: 'Natalia Castro', posicion: 'Base', numero: 3 },
            { nombre: 'Cristina Vega', posicion: 'Escolta', numero: 11 }
        ],
        totalJugadores: 12,
        partidosJugados: 10,
        partidosGanados: 7,
        partidosEmpatados: 0,
        partidosPerdidos: 3
    },
    aguilas: {
        nombre: 'Aguilas',
        competicion: 'Baloncesto',
        capitan: 'Luis Rodríguez',
        jugadores: [
            { nombre: 'Luis Rodríguez', posicion: 'Base', numero: 4 },
            { nombre: 'Pablo González', posicion: 'Escolta', numero: 8 },
            { nombre: 'Diego Martín', posicion: 'Alero', numero: 12 },
            { nombre: 'Carlos Méndez', posicion: 'Pívot', numero: 15 },
            { nombre: 'Javier Moreno', posicion: 'Base', numero: 5 },
            { nombre: 'Álvaro Sánchez', posicion: 'Escolta', numero: 7 },
            { nombre: 'Roberto García', posicion: 'Alero', numero: 9 },
            { nombre: 'Miguel Hernández', posicion: 'Pívot', numero: 13 },
            { nombre: 'Daniel Ruiz', posicion: 'Base', numero: 6 },
            { nombre: 'Sergio Torres', posicion: 'Escolta', numero: 10 }
        ],
        totalJugadores: 10,
        partidosJugados: 10,
        partidosGanados: 8,
        partidosEmpatados: 0,
        partidosPerdidos: 2
    },
    titans: {
        nombre: 'Titans',
        competicion: 'Voleibol',
        capitan: 'Pedro Sánchez',
        jugadores: [
            { nombre: 'Pedro Sánchez', posicion: 'Colocador', numero: 1 },
            { nombre: 'Jorge Martín', posicion: 'Rematador', numero: 5 },
            { nombre: 'Álvaro Díaz', posicion: 'Central', numero: 9 },
            { nombre: 'Carlos Ruiz', posicion: 'Opuesto', numero: 10 },
            { nombre: 'Miguel Torres', posicion: 'Libero', numero: 2 },
            { nombre: 'Diego García', posicion: 'Colocador', numero: 3 },
            { nombre: 'Luis Hernández', posicion: 'Rematador', numero: 6 },
            { nombre: 'Pablo López', posicion: 'Central', numero: 7 },
            { nombre: 'Sergio Martínez', posicion: 'Opuesto', numero: 11 },
            { nombre: 'Roberto Fernández', posicion: 'Libero', numero: 4 },
            { nombre: 'Javier Moreno', posicion: 'Rematador', numero: 8 },
            { nombre: 'Daniel Sánchez', posicion: 'Central', numero: 12 }
        ],
        totalJugadores: 12,
        partidosJugados: 5,
        partidosGanados: 3,
        partidosEmpatados: 0,
        partidosPerdidos: 2
    },
    raquetas: {
        nombre: 'Raquetas Elite',
        competicion: 'Tenis',
        capitan: 'Carlos Nadal',
        jugadores: [
            { nombre: 'Carlos Nadal', posicion: 'Individual', numero: 1 },
            { nombre: 'María Sharapova', posicion: 'Individual', numero: 2 },
            { nombre: 'Rafael Federer', posicion: 'Individual', numero: 3 },
            { nombre: 'Ana Djokovic', posicion: 'Individual', numero: 4 },
            { nombre: 'Pablo Murray', posicion: 'Dobles', numero: 5 },
            { nombre: 'Laura Williams', posicion: 'Dobles', numero: 6 },
            { nombre: 'Sergio Wawrinka', posicion: 'Individual', numero: 7 },
            { nombre: 'Elena Azarenka', posicion: 'Individual', numero: 8 }
        ],
        totalJugadores: 8,
        partidosJugados: 12,
        partidosGanados: 9,
        partidosEmpatados: 0,
        partidosPerdidos: 3
    },
    veloces: {
        nombre: 'Los Veloces',
        competicion: 'Atletismo',
        capitan: 'Miguel Bolt',
        jugadores: [
            { nombre: 'Miguel Bolt', posicion: 'Velocista', numero: 1 },
            { nombre: 'Laura Speed', posicion: 'Fondista', numero: 2 },
            { nombre: 'Carlos Saltador', posicion: 'Saltador', numero: 3 },
            { nombre: 'Ana Lanzadora', posicion: 'Lanzadora', numero: 4 },
            { nombre: 'Pablo Corredor', posicion: 'Fondista', numero: 5 },
            { nombre: 'Sofía Veloz', posicion: 'Velocista', numero: 6 },
            { nombre: 'Diego Atleta', posicion: 'Saltador', numero: 7 },
            { nombre: 'Elena Rápida', posicion: 'Velocista', numero: 8 },
            { nombre: 'Luis Fondo', posicion: 'Fondista', numero: 9 },
            { nombre: 'María Lanza', posicion: 'Lanzadora', numero: 10 }
        ],
        totalJugadores: 10,
        partidosJugados: 15,
        partidosGanados: 11,
        partidosEmpatados: 0,
        partidosPerdidos: 4
    },
    delfines: {
        nombre: 'Los Delfines',
        competicion: 'Natación',
        capitan: 'Laura Phelps',
        jugadores: [
            { nombre: 'Laura Phelps', posicion: 'Estilo Libre', numero: 1 },
            { nombre: 'Carlos Spitz', posicion: 'Mariposa', numero: 2 },
            { nombre: 'Ana Espalda', posicion: 'Espalda', numero: 3 },
            { nombre: 'Pablo Pecho', posicion: 'Pecho', numero: 4 },
            { nombre: 'Sofía Agua', posicion: 'Estilo Libre', numero: 5 },
            { nombre: 'Miguel Nado', posicion: 'Mariposa', numero: 6 },
            { nombre: 'Elena Swim', posicion: 'Espalda', numero: 7 },
            { nombre: 'Diego Pool', posicion: 'Pecho', numero: 8 },
            { nombre: 'Luis Agua', posicion: 'Estilo Libre', numero: 9 },
            { nombre: 'María Natación', posicion: 'Combinado', numero: 10 }
        ],
        totalJugadores: 10,
        partidosJugados: 8,
        partidosGanados: 6,
        partidosEmpatados: 0,
        partidosPerdidos: 2
    },
    palas: {
        nombre: 'Palas Pro',
        competicion: 'Pádel',
        capitan: 'Pablo Pareja',
        jugadores: [
            { nombre: 'Pablo Pareja', posicion: 'Pareja A', numero: 1 },
            { nombre: 'Carlos Duo', posicion: 'Pareja A', numero: 2 },
            { nombre: 'Ana Tándem', posicion: 'Pareja B', numero: 3 },
            { nombre: 'Laura Equipo', posicion: 'Pareja B', numero: 4 },
            { nombre: 'Miguel Doble', posicion: 'Pareja C', numero: 5 },
            { nombre: 'Sofía Par', posicion: 'Pareja C', numero: 6 },
            { nombre: 'Diego Pádel', posicion: 'Pareja D', numero: 7 },
            { nombre: 'Elena Raqueta', posicion: 'Pareja D', numero: 8 }
        ],
        totalJugadores: 8,
        partidosJugados: 10,
        partidosGanados: 7,
        partidosEmpatados: 0,
        partidosPerdidos: 3
    }
};

/**
 * Filtra los equipos por competición
 */
function filtrarEquipos() {
    const filtroElement = document.getElementById('filtroCompeticion');
    const buscarElement = document.getElementById('buscarEquipo');
    
    if (!filtroElement) return;
    
    const filtro = filtroElement.value.toLowerCase();
    const equiposCards = document.querySelectorAll('.equipo-card');
    const buscarTexto = buscarElement ? buscarElement.value.toLowerCase() : '';
    
    equiposCards.forEach(card => {
        const competicion = card.getAttribute('data-competicion');
        const nombreEquipo = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        
        const coincideCompeticion = !filtro || competicion === filtro;
        const coincideBusqueda = !buscarTexto || nombreEquipo.includes(buscarTexto);
        
        if (coincideCompeticion && coincideBusqueda) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Filtrado por competición: ${filtro || 'Todas'}`);
}

/**
 * Busca equipos por nombre
 */
function buscarEquipo() {
    filtrarEquipos();
}

/**
 * Muestra el detalle de un equipo en un modal
 * @param {string} equipoId - ID del equipo
 */
function mostrarDetalleEquipoModal(equipoId) {
    const equipo = equipos[equipoId];
    if (!equipo) {
        console.error('Equipo no encontrado:', equipoId);
        return;
    }
    
    // Intentar usar el modal nuevo primero, si no existe usar el antiguo
    let modalTitulo = document.getElementById('equipoModalTitle');
    let modalCuerpo = document.getElementById('equipoJugadores');
    let modalElement = document.getElementById('equipoModal');
    
    if (!modalTitulo) {
        modalTitulo = document.getElementById('modalEquipoTitulo');
        modalCuerpo = document.getElementById('modalEquipoCuerpo');
        modalElement = document.getElementById('modalDetalleEquipo');
    }
    
    if (!modalTitulo || !modalCuerpo || !modalElement) {
        console.error('Elementos del modal no encontrados');
        return;
    }
    
    modalTitulo.textContent = equipo.nombre;
    
    // Actualizar información general si existe
    const equipoCompeticion = document.getElementById('equipoCompeticion');
    const equipoCapitan = document.getElementById('equipoCapitan');
    if (equipoCompeticion) equipoCompeticion.textContent = equipo.competicion;
    if (equipoCapitan) equipoCapitan.textContent = equipo.capitan;
    
    let html = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Número</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    equipo.jugadores.forEach(jugador => {
        html += `
            <tr>
                <td>${jugador.nombre}</td>
                <td>${jugador.posicion}</td>
                <td>${jugador.numero}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    modalCuerpo.innerHTML = html;
    
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}


// Mapeo de imágenes por deporte
const imagenesDeportes = {
    'Fútbol': 'assets/images/logoFutbol.jpg',
    'Baloncesto': 'assets/images/logoBaloncesto.jpg',
    'Balonmano': 'assets/images/logoBalonmano.jpg',
    'Voleibol': 'assets/images/logoVoleibol.jpg',
    'Tenis': 'assets/images/logoTenis.jpg',
    'Atletismo': 'assets/images/logoAtletismo.jpg',
    'Natación': 'assets/images/logoNatacion.jpg',
    'Pádel': 'assets/images/logoPadel.jpg'
};

// Mapeo de competición a valor del filtro
const competicionToFilter = {
    'Fútbol': 'futbol',
    'Baloncesto': 'baloncesto',
    'Balonmano': 'balonmano',
    'Voleibol': 'voleibol',
    'Tenis': 'tenis',
    'Atletismo': 'atletismo',
    'Natación': 'natacion',
    'Pádel': 'padel'
};

/**
 * Carga los equipos en el contenedor
 */
function cargarEquipos() {
    const container = document.getElementById('equiposContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.keys(equipos).forEach(equipoId => {
        const equipo = equipos[equipoId];
        const imagen = imagenesDeportes[equipo.competicion] || 'assets/images/logos.jpg';
        const competicionFilter = competicionToFilter[equipo.competicion] || '';
        
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 equipo-card';
        card.setAttribute('data-competicion', competicionFilter);
        card.innerHTML = `
            <div class="card h-100 card-hover">
                <img src="${imagen}" alt="${equipo.competicion}" class="deporte-imagen">
                <div class="card-body text-center">
                    <h5 class="card-title">${equipo.nombre}</h5>
                    <p class="card-text text-muted">${equipo.competicion}</p>
                    <p class="card-text"><strong>Capitán:</strong> ${equipo.capitan}</p>
                    <p class="card-text"><small class="text-muted">${equipo.totalJugadores} jugadores</small></p>
                    <button class="btn btn-primary btn-animated" onclick="mostrarDetalleEquipoModal('${equipoId}')">
                        Ver Detalles
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Inicializar filtro desde URL si existe y cargar equipos
document.addEventListener('DOMContentLoaded', function() {
    cargarEquipos();
    
    const params = obtenerParametrosURL();
    if (params.deporte) {
        const filtro = document.getElementById('filtroCompeticion');
        if (filtro) {
            filtro.value = params.deporte;
            filtrarEquipos();
        }
    }
    
    // Añadir event listeners
    const filtroCompeticion = document.getElementById('filtroCompeticion');
    const buscarEquipo = document.getElementById('buscarEquipo');
    
    if (filtroCompeticion) {
        filtroCompeticion.addEventListener('change', filtrarEquipos);
    }
    
    if (buscarEquipo) {
        buscarEquipo.addEventListener('keyup', buscarEquipo);
    }
});
