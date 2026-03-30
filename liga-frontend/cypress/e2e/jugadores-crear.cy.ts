describe('Crear jugador', () => {
  it('crea un jugador correctamente', () => {

    // 🔥 1. Interceptar GET ANTES de visitar la página
    cy.intercept('GET', '**/api/jugadores', {
      fixture: 'jugadores.json'
    }).as('getJugadores');

    // 🔥 2. Interceptar POST
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

    // 3. Visitar la página
    cy.visit('/jugadores/crear');

    // 4. Rellenar formulario
    cy.get('input[name="nombre"]').type('Luis');
    cy.get('input[name="posicion"]').type('Defensa');
    cy.get('input[name="numero"]').type('4');
    cy.get('input[name="equipo"]').type('Caserio');
    cy.get('input[name="competicion"]').type('Liga Nacional');
    cy.get('input[name="edad"]').type('28');
    cy.get('input[name="partidosJugados"]').type('15');
    cy.get('input[name="email"]').type('luis@example.com');

    // 5. Enviar formulario
    cy.get('button[type="submit"]').click();

    // 6. Esperar POST
    cy.wait('@crearJugador');

    // 7. Comprobar navegación
    cy.url().should('include', '/jugadores');

    // 8. Esperar GET mockeado
    cy.wait('@getJugadores');

    // 9. Comprobar que aparece Luis
    cy.get('#filtroCompeticion').select('');
    cy.get('#filtroEquipo').clear();
    cy.get('#buscarJugador').clear();

    cy.contains('Luis');
  });
});
