import * as cardActions from './cardActions.js';
Cypress.Commands.add('clickSameCards',cardActions.clickSameCards)
Cypress.Commands.add('clickDifferentCards',cardActions.clickDifferentCards)
Cypress.Commands.add('clickCard',cardActions.clickCard)