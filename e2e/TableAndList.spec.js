/// <reference types="cypress" />

describe("table and list", () => {
    it("list", () => {
        var expectedJacketNames = ["Proteus Fitness Jackshirt", "Montana Wind Jacket", "Jupiter All-Weather Trainer", "Typhon Performance Fleece-lined Jacket",
            "Mars HeatTech™ Pullover", "Taurus Elements Shell", "Lando Gym Jacket", "Orion Two-Tone Fitted Jacket", "Kenobi Trail Jacket", "Hyperion Elements Jacket",
            "Beaumont Summit Kit"]
        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html")
        cy.wait(1000)
        let jacketNames
        cy.get("a.product-item-link").then(($elements) => {
            jacketNames = $elements.toArray().map(element => element.innerText)
            expect(jacketNames).to.deep.eq(expectedJacketNames)
            expect(jacketNames).to.include("Kenobi Trail Jacket")
        })
    })

    it("tables", () => {
        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get("table#table1 tr td:nth-child(3)").each(($element, index, $list) => {
            var userEmail = $element.text()
            if (userEmail == "jdoe@hotmail.com") {
                cy.get("table#table1 tr td:nth-child(6) a[href='#edit']").eq(index).click()

            }
        })
        cy.url().should("include", "tables#edit")

    })






}
)