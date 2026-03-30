/**
 * JavaScript para la página de Jugadores
 */

// Datos de ejemplo de jugadores
const jugadores = {
    'marta-mangue': {
        nombre: 'Marta Mangué',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Lateral',
        numero: 10,
        edad: 22,
        partidosJugados: 8,
        goles: 45,
        asistencias: 18,
        email: 'marta.mangue@instituto.edu'
    },
    'eli-pinedo': {
        nombre: 'Eli Pinedo',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Extremo',
        numero: 7,
        edad: 21,
        partidosJugados: 8,
        goles: 38,
        asistencias: 12,
        email: 'elisabeth.pinedo@instituto.edu'
    },
    'nerea-pena': {
        nombre: 'Nerea Pena',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Lateral',
        numero: 8,
        edad: 20,
        partidosJugados: 8,
        goles: 42,
        asistencias: 15,
        email: 'nerea.pena@instituto.edu'
    },
    'silvia-navarro': {
        nombre: 'Silvia Navarro',
        equipo: 'Las Guerreras',
        competicion: 'Balonmano',
        posicion: 'Portero',
        numero: 1,
        edad: 23,
        partidosJugados: 8,
        paradas: 68,
        golesRecibidos: 45,
        email: 'silvia.navarro@instituto.edu'
    },
    'julen-aguinagalde': {
        nombre: 'Julen Aguinagalde',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Pívot',
        numero: 9,
        edad: 24,
        partidosJugados: 8,
        goles: 52,
        asistencias: 8,
        email: 'julen.aguinagalde@instituto.edu'
    },
    'raul-entrerrios': {
        nombre: 'Raúl Entrerríos',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Central',
        numero: 10,
        edad: 25,
        partidosJugados: 8,
        goles: 38,
        asistencias: 42,
        email: 'raul.entrerrios@instituto.edu'
    },
    'daniel-sarmiento': {
        nombre: 'Daniel Sarmiento',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Lateral',
        numero: 11,
        edad: 23,
        partidosJugados: 8,
        goles: 48,
        asistencias: 15,
        email: 'daniel.sarmiento@instituto.edu'
    },
    'victor-tomas': {
        nombre: 'Víctor Tomás',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Extremo',
        numero: 7,
        edad: 22,
        partidosJugados: 8,
        goles: 35,
        asistencias: 10,
        email: 'victor.tomas@instituto.edu'
    },
    'arpad-sterbik': {
        nombre: 'Arpad Sterbik',
        equipo: 'Los Hispanos',
        competicion: 'Balonmano',
        posicion: 'Portero',
        numero: 1,
        edad: 26,
        partidosJugados: 8,
        paradas: 72,
        golesRecibidos: 48,
        email: 'arpad.sterbik@instituto.edu'
    },
    'juan-perez': {
        nombre: 'Juan Pérez',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Portero',
        numero: 1,
        edad: 20,
        partidosJugados: 8,
        goles: 0,
        asistencias: 0,
        tarjetasAmarillas: 1,
        tarjetasRojas: 0,
        email: 'juan.perez@instituto.edu'
    },
    'miguel-torres': {
        nombre: 'Miguel Torres',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Defensa',
        numero: 2,
        edad: 19,
        partidosJugados: 8,
        goles: 2,
        asistencias: 3,
        tarjetasAmarillas: 2,
        tarjetasRojas: 0,
        email: 'miguel.torres@instituto.edu'
    },
    'carlos-garcia': {
        nombre: 'Carlos García',
        equipo: 'Los Leones',
        competicion: 'Fútbol',
        posicion: 'Portero',
        numero: 1,
        edad: 21,
        partidosJugados: 8,
        goles: 0,
        asistencias: 0,
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        email: 'carlos.garcia@instituto.edu'
    },
    'ana-martinez': {
        nombre: 'Ana Martínez',
        equipo: 'Thunder',
        competicion: 'Baloncesto',
        posicion: 'Base',
        numero: 5,
        edad: 19,
        partidosJugados: 10,
        puntos: 156,
        rebotes: 45,
        asistencias: 78,
        email: 'ana.martinez@instituto.edu'
    },
    'luis-rodriguez': {
        nombre: 'Luis Rodríguez',
        equipo: 'Aguilas',
        competicion: 'Baloncesto',
        posicion: 'Base',
        numero: 4,
        edad: 20,
        partidosJugados: 10,
        puntos: 182,
        rebotes: 52,
        asistencias: 95,
        email: 'luis.rodriguez@instituto.edu'
    },
    'maria-lopez': {
        nombre: 'María López',
        equipo: 'Los Lobos',
        competicion: 'Balonmano',
        posicion: 'Portero',
        numero: 1,
        edad: 20,
        partidosJugados: 6,
        paradas: 45,
        golesRecibidos: 28,
        email: 'maria.lopez@instituto.edu'
    },
    'pedro-sanchez': {
        nombre: 'Pedro Sánchez',
        equipo: 'Titans',
        competicion: 'Voleibol',
        posicion: 'Colocador',
        numero: 1,
        edad: 21,
        partidosJugados: 5,
        sets: 15,
        puntos: 42,
        asistencias: 38,
        email: 'pedro.sanchez@instituto.edu'
    },
    'carlos-nadal': {
        nombre: 'Carlos Nadal',
        equipo: 'Raquetas Elite',
        competicion: 'Tenis',
        posicion: 'Individual',
        numero: 1,
        edad: 20,
        partidosJugados: 12,
        victorias: 9,
        derrotas: 3,
        setsGanados: 27,
        setsPerdidos: 12,
        email: 'carlos.nadal@instituto.edu'
    },
    'miguel-bolt': {
        nombre: 'Miguel Bolt',
        equipo: 'Los Veloces',
        competicion: 'Atletismo',
        posicion: 'Velocista',
        numero: 1,
        edad: 19,
        partidosJugados: 15,
        medallasOro: 5,
        medallasPlata: 3,
        medallasBronce: 2,
        mejorTiempo: '10.45s',
        email: 'miguel.bolt@instituto.edu'
    },
    'laura-phelps': {
        nombre: 'Laura Phelps',
        equipo: 'Los Delfines',
        competicion: 'Natación',
        posicion: 'Estilo Libre',
        numero: 1,
        edad: 20,
        partidosJugados: 8,
        victorias: 6,
        mejorTiempo: '52.30s',
        medallasOro: 4,
        medallasPlata: 2,
        email: 'laura.phelps@instituto.edu'
    },
    'pablo-pareja': {
        nombre: 'Pablo Pareja',
        equipo: 'Palas Pro',
        competicion: 'Pádel',
        posicion: 'Pareja A',
        numero: 1,
        edad: 21,
        partidosJugados: 10,
        victorias: 7,
        derrotas: 3,
        setsGanados: 21,
        setsPerdidos: 12,
        email: 'pablo.pareja@instituto.edu'
    },
    'sergio-ramos': {
        nombre: 'Sergio Ramos',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Defensa',
        numero: 3,
        edad: 20,
        partidosJugados: 8,
        goles: 1,
        asistencias: 2,
        tarjetasAmarillas: 1,
        tarjetasRojas: 0,
        email: 'sergio.ramos@instituto.edu'
    },
    'david-silva': {
        nombre: 'David Silva',
        equipo: 'Los Halcones',
        competicion: 'Fútbol',
        posicion: 'Centrocampista',
        numero: 8,
        edad: 19,
        partidosJugados: 8,
        goles: 4,
        asistencias: 6,
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        email: 'david.silva@instituto.edu'
    },
    'laura-fernandez': {
        nombre: 'Laura Fernández',
        equipo: 'Thunder',
        competicion: 'Baloncesto',
        posicion: 'Alero',
        numero: 7,
        edad: 18,
        partidosJugados: 10,
        puntos: 142,
        rebotes: 38,
        asistencias: 45,
        email: 'laura.fernandez@instituto.edu'
    },
    'carmen-sanchez': {
        nombre: 'Carmen Sánchez',
        equipo: 'Thunder',
        competicion: 'Baloncesto',
        posicion: 'Pívot',
        numero: 15,
        edad: 20,
        partidosJugados: 10,
        puntos: 178,
        rebotes: 95,
        asistencias: 12,
        email: 'carmen.sanchez@instituto.edu'
    },
    'elena-garcia': {
        nombre: 'Elena García',
        equipo: 'Los Lobos',
        competicion: 'Balonmano',
        posicion: 'Extremo',
        numero: 7,
        edad: 19,
        partidosJugados: 6,
        goles: 18,
        asistencias: 8,
        email: 'elena.garcia@instituto.edu'
    },
    'jorge-martin': {
        nombre: 'Jorge Martín',
        equipo: 'Titans',
        competicion: 'Voleibol',
        posicion: 'Rematador',
        numero: 5,
        edad: 20,
        partidosJugados: 5,
        sets: 15,
        puntos: 58,
        asistencias: 12,
        email: 'jorge.martin@instituto.edu'
    }    
};

/**
 * Filtra los jugadores por competición, equipo y nombre
 */
function filtrarJugadores() {
    const competicion = document.getElementById('filtroCompeticion').value.toLowerCase();
    const equipo = document.getElementById('filtroEquipo').value.toLowerCase();
    const nombre = document.getElementById('buscarJugador').value.toLowerCase();
    
    const jugadoresCards = document.querySelectorAll('.jugador-card');
    
    jugadoresCards.forEach(card => {
        const cardCompeticion = card.getAttribute('data-competicion');
        const cardEquipo = card.getAttribute('data-equipo');
        const cardNombre = card.querySelector('.card-title').textContent.toLowerCase();
        
        const coincideCompeticion = !competicion || cardCompeticion === competicion;
        const coincideEquipo = !equipo || cardEquipo === equipo;
        const coincideNombre = !nombre || cardNombre.includes(nombre);
        
        if (coincideCompeticion && coincideEquipo && coincideNombre) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Filtrado - Competición: ${competicion || 'Todas'}, Equipo: ${equipo || 'Todos'}, Nombre: ${nombre || 'Todos'}`);
}

/**
 * Muestra el detalle de un jugador en un modal
 * @param {string} jugadorId - ID del jugador
 */
function mostrarDetalleJugadorModal(jugadorId) {
    const jugador = jugadores[jugadorId];
    if (!jugador) {
        console.error('Jugador no encontrado:', jugadorId);
        return;
    }
    
    const modalTitulo = document.getElementById('modalJugadorTitulo');
    const modalCuerpo = document.getElementById('modalJugadorCuerpo');
    
    modalTitulo.textContent = jugador.nombre;
    
    let html = `
        <div class="row">
            <div class="col-md-6">
                <h6>Información Personal</h6>
                <p><strong>Equipo:</strong> ${jugador.equipo}</p>
                <p><strong>Competición:</strong> ${jugador.competicion}</p>
                <p><strong>Posición:</strong> ${jugador.posicion}</p>
                <p><strong>Número:</strong> ${jugador.numero}</p>
                <p><strong>Edad:</strong> ${jugador.edad} años</p>
                <p><strong>Email:</strong> ${jugador.email}</p>
            </div>
            <div class="col-md-6">
                <h6>Estadísticas</h6>
    `;
    
    // Estadísticas según el deporte
    if (jugador.competicion === 'Fútbol') {
        html += `
            <p><strong>Partidos Jugados:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Goles:</strong> ${jugador.goles || 0}</p>
            <p><strong>Asistencias:</strong> ${jugador.asistencias || 0}</p>
            <p><strong>Tarjetas Amarillas:</strong> ${jugador.tarjetasAmarillas || 0}</p>
            <p><strong>Tarjetas Rojas:</strong> ${jugador.tarjetasRojas || 0}</p>
        `;
    } else if (jugador.competicion === 'Baloncesto') {
        html += `
            <p><strong>Partidos Jugados:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Puntos:</strong> ${jugador.puntos}</p>
            <p><strong>Rebotes:</strong> ${jugador.rebotes}</p>
            <p><strong>Asistencias:</strong> ${jugador.asistencias}</p>
            <p><strong>Puntos por Partido:</strong> ${(jugador.puntos / jugador.partidosJugados).toFixed(1)}</p>
        `;
    } else if (jugador.competicion === 'Balonmano') {
        html += `
            <p><strong>Partidos Jugados:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Paradas:</strong> ${jugador.paradas || 0}</p>
            <p><strong>Goles:</strong> ${jugador.goles || 0}</p>
            <p><strong>Asistencias:</strong> ${jugador.asistencias || 0}</p>
            <p><strong>Goles Recibidos:</strong> ${jugador.golesRecibidos || 0}</p>
        `;
    } else if (jugador.competicion === 'Voleibol') {
        html += `
            <p><strong>Partidos Jugados:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Sets:</strong> ${jugador.sets}</p>
            <p><strong>Puntos:</strong> ${jugador.puntos}</p>
            <p><strong>Asistencias:</strong> ${jugador.asistencias}</p>
        `;
    } else if (jugador.competicion === 'Tenis') {
        html += `
            <p><strong>Partidos Jugados:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Victorias:</strong> ${jugador.victorias}</p>
            <p><strong>Derrotas:</strong> ${jugador.derrotas}</p>
            <p><strong>Sets Ganados:</strong> ${jugador.setsGanados}</p>
            <p><strong>Sets Perdidos:</strong> ${jugador.setsPerdidos}</p>
        `;
    } else if (jugador.competicion === 'Atletismo') {
        html += `
            <p><strong>Competiciones:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Medallas Oro:</strong> ${jugador.medallasOro}</p>
            <p><strong>Medallas Plata:</strong> ${jugador.medallasPlata}</p>
            <p><strong>Medallas Bronce:</strong> ${jugador.medallasBronce}</p>
            <p><strong>Mejor Tiempo:</strong> ${jugador.mejorTiempo}</p>
        `;
    } else if (jugador.competicion === 'Natación') {
        html += `
            <p><strong>Competiciones:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Victorias:</strong> ${jugador.victorias}</p>
            <p><strong>Medallas Oro:</strong> ${jugador.medallasOro}</p>
            <p><strong>Medallas Plata:</strong> ${jugador.medallasPlata}</p>
            <p><strong>Mejor Tiempo:</strong> ${jugador.mejorTiempo}</p>
        `;
    } else if (jugador.competicion === 'Pádel') {
        html += `
            <p><strong>Partidos Jugados:</strong> ${jugador.partidosJugados}</p>
            <p><strong>Victorias:</strong> ${jugador.victorias}</p>
            <p><strong>Derrotas:</strong> ${jugador.derrotas}</p>
            <p><strong>Sets Ganados:</strong> ${jugador.setsGanados}</p>
            <p><strong>Sets Perdidos:</strong> ${jugador.setsPerdidos}</p>
        `;
    }
    
    html += `
            </div>
        </div>
        <hr>
        <div class="alert alert-info">
            <i class="bi bi-info-circle me-2"></i>
            <strong>Nota:</strong> En un futuro se añadirán funcionalidades analíticas y estadísticas más avanzadas.
        </div>
    `;
    
    modalCuerpo.innerHTML = html;
    
    const modal = new bootstrap.Modal(document.getElementById('modalDetalleJugador'));
    modal.show();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de jugadores cargada');
});

