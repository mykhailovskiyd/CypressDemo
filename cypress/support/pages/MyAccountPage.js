/// <reference types="cypress" />

class MyAccountPage{
    openMyAccountPage(){
        cy.visit("https://magento.softwaretestingboard.com/customer/account/")
    }
}

export default MyAccountPage;