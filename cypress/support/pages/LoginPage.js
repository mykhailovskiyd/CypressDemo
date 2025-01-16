/// <reference types="cypress" />
import LogInPageSelectors from "C:/CypressDemo/cypress/support/selectors/LogInPageSelectors"
import HeaderFragments from "C:/CypressDemo/cypress/support/fragments/HeaderFragments"

var headerFragments = new HeaderFragments

class LogInPage {
    openLogInPage() {
        cy.visit(Cypress.env('domain_baseurl') + links.logInPage)

    }
    authorize(email, password) {
        cy.get(LogInPageSelectors.emailTextbox).type(email)
        cy.get(LogInPageSelectors.passTextbox).type(password)
        cy.get(LogInPageSelectors.signInButton).click()

    }

    chooseWhatsNew() {
        headerFragments.goToWhatsNew()
    }
}

export default LogInPage;