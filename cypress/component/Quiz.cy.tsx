import Quiz from '../../client/src/components/Quiz';
import questions from '../fixtures/questions.json';

describe('<Quiz />', () => {
  
  it('Loads quiz page on app start', () => {
    cy.intercept('GET', '/api/questions/random', {
      body: questions,
    });
    cy.mount(<Quiz />);
    cy.get('.p-4.text-center').should('exist');
    cy.get('button').should('exist');
    cy.log('Quiz page loaded');
  });
  
  it ('Render start quiz button', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('exist');
    cy.log('Start quiz button rendered');
  });
  // it('playground', () => {
  //   // cy.mount()
  // })
});