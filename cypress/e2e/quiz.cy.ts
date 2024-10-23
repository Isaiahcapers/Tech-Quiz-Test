// Start to Finish User Flow

describe('Quiz User Interaction', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3001/');
    cy.log('App loaded');
    
  });

  it('Loads Quiz Page Not Started', () => {
    cy.get('.p-4.text-center').should('exist');
    cy.get('button').should('exist');
  });

  it('Starts Quiz & See Quiz Answers', () => {
    cy.get('button').click();
    cy.get('h2');
    cy.log('Question loaded');
  });
  it('Selects Random Answer & Proceeds to Next Question', () => {
    for (let i = 0; i < 11; i++) {
      cy.get('button').then(($buttons) => {
        const randomIndex = Math.floor(Math.random() * $buttons.length);
        cy.wrap($buttons[randomIndex]).click();
      });
      cy.get('h2');
      cy.log('Quiz Completed');
    }
    cy.get('h2').contains('Quiz Completed');
  });

  it('Starts Quiz Again', () => {
    cy.get('button').click();
    cy.get('h2');
    cy.log('Question loaded');
  });
});