/// <reference types="cypress" />

class GeneralPage {
    verifyElementIsVisible(elementSelector) {
        cy.get(elementSelector).should("be.visible")
    }

    verifyElementContainText(elementSelector, elementText) {
        cy.get(elementSelector).should("contain", elementText)
    }

}

export default GeneralPage;