/// <reference types="cypress" />
import GeneralPage from "C:/CypressDemo/cypress/support/pages/GeneralPage"
import ProductPageSelectors from "C:/CypressDemo/cypress/support/selectors/ProductPageSelectors"
var generalPage = new GeneralPage

class ProductPage {
    addToWishList() {
        cy.get(ProductPageSelectors.addToWishListButton).click()
    }

    verifySuccessMessageIsVisible() {
        generalPage.verifyElementIsVisible(ProductPageSelectors.successMessageTextbox)
    }

    verifySuccessMessageHasText(elementText) {
        generalPage.verifyElementContainText(ProductPageSelectors.successMessageTextbox, elementText)
    }
}

export default ProductPage;