/// <reference types="cypress" />

class MyAccountPage{
    openMyAccountPage(){
        cy.visit(Cypress.env('domain_baseurl') + links.myAccountPage)
    }
}

export default MyAccountPage;