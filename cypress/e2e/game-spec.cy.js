describe('Basic game functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  }) 

  it('should allow the player to select a single card', () => {
    cy.clickCard()
  });

  it('should allow matching pairs to remain face-up', () => {
    cy.clickSameCards('?')
  });

  it('should flip non-matching pairs face-down', () => {
    cy.clickDifferentCards()
  });
});

describe('Countdown functionality', () => {
    beforeEach(() => {
    cy.visit('http://localhost:8080')
  }) 
  it('should start the countdown when the user selects the first card', () => {
    cy.clickCard()
    cy.get('.timer')
      .should('not.have.text','?')
    cy.wait(3000)
    cy.get('.timer')
    .should('have.text','?')  
  });

  it('should flip the cards face-down when the countdown runs out', () => {
    cy.clickCard()
    cy.get('.timer')
      .should('not.have.text','?')
    cy.wait(3000)
    cy.get('.timer')
    .should('have.text','?')  
    cy.get('.card is-selected')
      .should('have.length',0)
  });

  it('should reset the countdown when it runs out', () => {
    cy.clickCard()
    cy.wait(3000)
    cy.get('.timer')
    .should('have.text','?')  
  });

  it('should reset the countdown when the user selects a second card', () => {
    cy.clickDifferentCards()
    cy.get('.timer')
    .should('have.text','?')  
  });
});

describe('Endgame functionality', () => {
    beforeEach(() => {
    cy.visit('http://localhost:8080')
  }) 
  it('should display a congratulatory message when the player successfully matches all of the cards', () => {
    cy.fixture('elements').then((elements) => {
      elements.elements.forEach((element) => {
        cy.clickSameCards(element)
      })
    })
    cy.get('.endgame > div > h1')
    .should('have.text','Great job!')
  });
});
