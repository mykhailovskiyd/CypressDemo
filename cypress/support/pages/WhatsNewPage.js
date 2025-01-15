/// <reference types="cypress" />
import ActionsFragments from "C:/CypressDemo/cypress/support/fragments/ActionsFragments"
var actionFragments = new ActionsFragments

class WhatsNewPage {
    openProductDetails(productName) {
        actionFragments.openProductDetails(productName)
    }
}

export default WhatsNewPage;