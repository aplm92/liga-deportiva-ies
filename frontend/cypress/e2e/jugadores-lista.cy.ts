describe('Listado de jugadores', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/jugadores', {
    statusCode: 200,
    body: [
      { id: 1, nombre: 'Messi', posicion: 'Delantero' },
      { id: 2, nombre: 'Ramos', posicion: 'Defensa' }
    ]
    }).as('getJugadores');

    cy.visit('/jugadores');

    cy.wait('@getJugadores');

    cy.contains('Messi');
    cy.contains('Ramos');
  });

  it('muestra la lista de jugadores correctamente', () => {
    cy.wait('@getJugadores');
    // Desactivar filtros
    cy.get('#filtroCompeticion').select('');
    cy.get('#filtroEquipo').clear();
    cy.get('#buscarJugador').clear();

    cy.get('.jugador-card').should('have.length', 2);

    cy.contains('Marta');
    cy.contains('Pedro');
  });
});
