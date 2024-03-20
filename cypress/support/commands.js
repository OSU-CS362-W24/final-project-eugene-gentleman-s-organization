// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require("@testing-library/cypress/add-commands")

// adds vals of 3 data points at a time
Cypress.Commands.add('addVals', (cur,x1,x2,x3,y1,y2,y3) => {

    cy.get('[class="x-value-input"]').eq(cur).type(x1)
    cy.get('[class="y-value-input"]').eq(cur).type(y1)

    cy.contains('+').click()

    cur += 1

    cy.get('[class="x-value-input"]').eq(cur).type(x2)
    cy.get('[class="y-value-input"]').eq(cur).type(y2)

    cy.contains('+').click()

    cur += 1

    cy.get('[class="x-value-input"]').eq(cur).type(x3)
    cy.get('[class="y-value-input"]').eq(cur).type(y3)

    cy.contains('+').click()

})

// asserts vals of 3 data points at a time
Cypress.Commands.add('checkVals', (cur,x1,x2,x3,y1,y2,y3) => {

    cy.get('[class="x-value-input"]').eq(cur).should('have.value', x1)
    cy.get('[class="y-value-input"]').eq(cur).should('have.value', y1)

    cur += 1

    cy.get('[class="x-value-input"]').eq(cur).should('have.value', x2)
    cy.get('[class="y-value-input"]').eq(cur).should('have.value', y2)

    cur += 1

    cy.get('[class="x-value-input"]').eq(cur).should('have.value', x3)
    cy.get('[class="y-value-input"]').eq(cur).should('have.value', y3)

})
