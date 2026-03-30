describe('Listado de jugadores', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/jugadores', {
      fixture: 'jugadores.json'
    }).as('getJugadores');

    cy.visit('/jugadores');
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
