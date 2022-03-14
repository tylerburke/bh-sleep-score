describe('Sleep calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Disables the button', () => {
    cy.get('[data-test=submitButton]').should('be.disabled');

    cy.get('[data-test=inBedSelect]').select('90');
    cy.get('[data-test=submitButton]').should('be.disabled');

    cy.get('[data-test=inBedSelect]').select('0');
    cy.get('[data-test=asleepSelect]').select('30');
    cy.get('[data-test=submitButton]').should('be.disabled');
  });

  it('Calculates the score', () => {
    cy.get('[data-test=submitButton]').should('be.disabled');

    cy.get('[data-test=inBedSelect]').select('450');
    cy.get('[data-test=asleepSelect]').select('390');
    cy.get('[data-test=submitButton]').should('not.be.disabled').click();

    cy.get('[data-test=output]').contains('86.7');
  });
});
