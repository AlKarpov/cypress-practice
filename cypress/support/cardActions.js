export function clickSameCards(symbol) {
    cy.get('.card')
      .filter(`:contains(${symbol})`)
      .click({multiple:true,timeout:1000})
      .should('have.class',"card is-matched")
}

export function clickDifferentCards(){
    cy.get('.card')
    .filter(':contains(|)')
    .first()
    .click()
    .should('have.class',"card is-selected")
  cy.get('.card')
    .filter(':contains(?)')
    .first()
    .click()
  cy.get('.card')
    .should('have.length',24)
}

export function clickCard() {
    cy.get('.card')
    .should('have.length', 24)
    .first()
    .click()
    .should('have.class',"card is-selected")
}