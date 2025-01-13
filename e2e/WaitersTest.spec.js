/// <reference types="cypress" />

describe("Waiters test suite", () =>{
    it("first test", () => {
       cy.visit("https://magento.softwaretestingboard.com/")
      // cy.wait(3000)
      // cy.get("div[class='panel header'] li[data-label='or'] a").should("be.visible")
       cy.get("div[class='panel header'] li[data-label='or'] a").then(($element) => {
         var elementText = $element.text()
         expect(elementText).to.contain("Sign In")
       })
       cy.get("img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg']", { timeout: 5000}).click()

    })
    it("waiter test", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
      cy.get("div[id='start'] button").click()
      cy.get("div[id='finish'] h4", {timeout: 5000}).should("be.visible")
     })
}
)