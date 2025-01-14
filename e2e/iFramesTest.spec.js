/// <reference types="cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe("iFrames", () => {
    it("iFrametest", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(1000)
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe().find("p").should("have.text", "Your content goes here.")
    })
})