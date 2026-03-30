describe('Crear jugador', () => {
  beforeEach(() => {
    cy.visit('/jugadores/crear');
  });

  it('crea un jugador correctamente', () => {

    // Interceptar POST de creación
    cy.intercept('POST', '**/api/jugadores', {
      statusCode: 201,
      body: {
        nombre: 'Luis',
        posicion: 'Defensa',
        numero: 4,
        equipo: 'Caserio',
        competicion: 'Liga Nacional',
        edad: 28,
        partidosJugados: 15,
        email: 'luis@example.com'
      }
    }).as('crearJugador');

    // Interceptar GET después de navegar a /jugadores
    cy.intercept('GET', '**/api/jugadores', {
      fixture: 'jugadores.json'
    }).as('getJugadores');

    // Rellenar formulario
    cy.get('input[name="nombre"]').type('Luis');
    cy.get('input[name="posicion"]').type('Defensa');
    cy.get('input[name="numero"]').type('4');
    cy.get('input[name="equipo"]').type('Caserio');
    cy.get('input[name="competicion"]').type('Liga Nacional');
    cy.get('input[name="edad"]').type('28');
    cy.get('input[name="partidosJugados"]').type('15');
    cy.get('input[name="email"]').type('luis@example.com');

    cy.get('button[type="submit"]').click();

    // Esperar POST
    cy.wait('@crearJugador');

    // Comprobar navegación
    cy.url().should('include', '/jugadores');

    // Esperar GET mockeado
    cy.wait('@getJugadores');

    // Comprobación segura
    cy.contains('Luis');
  });
});
