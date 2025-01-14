/// <reference types="cypress" />

describe("Mob", () => {
    it("Mob", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.viewport('iphone-se2')
        cy.wait(3000)
        cy.get("span.action.nav-toggle").trigger("click")
        cy.get("#ui-id-7").trigger("click")
        cy.get("a[href*='training'][class='ui-state-focus']").trigger("click")
        cy.url().should("include", "/training")
    })
    it("viewPort 12 pro - hover", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.viewport(390, 844)
        cy.wait(3000)
        cy.get("div.blocks-promo").trigger('touchstart', { force: true })
    })
})