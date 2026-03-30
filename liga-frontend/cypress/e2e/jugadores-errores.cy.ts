describe('Errores al crear jugador', () => {
  beforeEach(() => {
    cy.visit('/jugadores/crear');
  });

  it('muestra un error si el servidor falla', () => {
    cy.intercept('POST', 'http://localhost:3000/api/jugadores', {
      statusCode: 500,
      body: { message: 'Error interno del servidor' }
    }).as('crearJugadorError');

    cy.get('button[type="submit"]').click();

    cy.wait('@crearJugadorError');

    cy.contains('Error interno del servidor');
  });
});
