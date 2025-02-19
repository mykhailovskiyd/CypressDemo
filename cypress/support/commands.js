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

import LogInPage from "C:/CypressDemo/cypress/support/pages/LoginPage"
var logInPage = new LogInPage

Cypress.Commands.add('initFixtures', () => {
    cy.fixture("links").then((links) => {
        globalThis.links = links;
    })
    cy.fixture("credentials").then((credentials) => {
        globalThis.credentials = credentials;
    })
})

Cypress.Commands.add('signIn', () => {
    logInPage.openLogInPage()
    cy.wait(3000)
    logInPage.authorize(credentials.email, credentials.password)
})