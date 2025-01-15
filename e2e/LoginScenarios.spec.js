/// <reference types="cypress" />
import LogInPage from "C:/CypressDemo/cypress/support/pages/LoginPage"
import WhatsNewPage from "C:/CypressDemo/cypress/support/pages/WhatsNewPage"
import ProductPage from "C:/CypressDemo/cypress/support/pages/ProductPage"

describe("Login scenarios", () => {

    var logInPage = new LogInPage
    var whatsNewPage = new WhatsNewPage
    var productPage = new ProductPage


    it("wishlist", () => {
        logInPage.openLogInPage()
        cy.wait(3000)
        logInPage.authorize("delmoruch77@gmail.com", "kvartirmeisteR322")
        logInPage.chooseWhatsNew()
        whatsNewPage.openProductDetails("Summit Watch")
        cy.wait(3000)
        productPage.addToWishList()
        cy.wait(3000)
        productPage.verifySuccessMessageIsVisible()
        productPage.verifySuccessMessageHasText("Summit Watch")

    })
    it("cart", () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/")
        cy.wait(3000)
        cy.get("#email").type("delmoruch77@gmail.com")
        cy.get("#pass").type("kvartirmeisteR322")
        cy.get("button.action.login.primary").click()
        cy.wait(2000)
        cy.get('a#ui-id-3', { timeout: 2000 }).click()
        cy.get("body > div:nth-child(5) > main:nth-child(4) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
        cy.get(".product-item-name a").each(($element, index, $list) => {
            var productName = $element.text()
            if (productName.includes("Olivia 1/4 Zip Light Jacket")) {
                cy.get(".product-item-name a").eq(index).click()
            }
        })
        cy.get("#option-label-size-143-item-168").click()
        cy.get("#option-label-color-93-item-57").click()
        cy.get("#product-addtocart-button").click()
        cy.get(".message-success.success.message").should('be.visible')
        cy.get(".message-success.success.message").should("contain", "Olivia 1/4 Zip Light Jacket")
    })

})