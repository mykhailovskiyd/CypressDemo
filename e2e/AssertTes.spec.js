/// <reference types="cypress" />

describe("keyword", () => {
  it("keyword", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get("img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg']").click()
    cy.get("li[class='item category8'] strong").should("contain", "New Luma Yoga Collection")
    cy.get("li[class='item category8'] strong").then(($element) => {
      expect($element.text()).to.contain("New Luma Yoga Collection")
    })
    cy.get("div[data-container='product-grid']").eq(0).within(() => {
      cy.get("strong a").should("contain", "Echo Fit Compression Short ")
    })
  })

  it("Assertions test", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get("strong.subtitle.empty").should("exist")
    cy.get("div.smth").should("not.exist")
    cy.get("img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg']").click()

    cy.url().should("include", "yoga-new")

    cy.get("input#search").type("abc123")
    cy.get("input#search").should("have.value", "abc123")

    cy.get("li.item.product.product-item").its("length").should("be.gte", 10)
    cy.get("div.minicart-wrapper").invoke("attr", "data-block").should("eq", "minicart")
    cy.get("div.minicart-wrapper").invoke("attr", "data-block").should("include", "cart")
  })

  it("Disabled elements test", () => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_controls")
    cy.get("input[type='text']").should("be.disabled")
  })
}
)