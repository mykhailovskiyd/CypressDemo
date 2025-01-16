/// <reference types="cypress" />

describe("Assertion test suite", () => {
    it("checkbox", () => {
       cy.visit("https://the-internet.herokuapp.com/dynamic_controls")
       cy.get("input[type='checkbox']").should("not.be.checked")
       cy.get("input[type='checkbox']").check()
       cy.get("input[type='checkbox']").should("be.checked")
       cy.get("input[type='checkbox']").uncheck()
       cy.get("input[type='checkbox']").should("not.be.checked")
      }  )

      it("dropdown", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get("select#dropdown").select(1)
        cy.get("select#dropdown" + " option:selected").should("have.text", "Option 1")
       }  )

    it("Hover on dd test", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("a#ui-id-6").trigger('mouseover')
        cy.get("a#ui-id-25").click()
        cy.url().should("include", "bags")
        cy.get("input#search").type("Fusion")
        cy.get("div#search_autocomplete li span.qs-option-name").each(($element) => {
            if ($element.text() == " Fusion Backpack") {
                cy.wrap($element).click({ force: true })
            }
        })
        cy.get("div.breadcrumbs strong").should("contain", "Search results for: 'Fusion Backpack'")

    })


}
)