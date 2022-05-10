/// <reference types="Cypress" />

context("basic test",()=>{
    beforeEach("navigate to the main page",()=>{
        cy.visit("/")
        cy.get(".menu-left a:visible").as("nav-link")
    })
    it("check the left menue",()=>{
        cy.get("@nav-link").first().should("have.text","Top rated movies")
        cy.get(".menu-left").within( () =>{
            cy.get("a:visible").first().should("have.text","Top rated movies")
            cy.get("a:visible").last().should("have.text","Celebrities")
        })
    })
    it("navigate to top rated movies",()=>{
        cy.contains("Top rated movies").click()
        cy.title().should("equal","Top rated movies")
    })
    it("navigate to popular movies",()=>{
        cy.contains(/^Popular movies$/i).click()
        cy.title().should("equal","Popular movies")
    })
    it("open pul fiction",()=>{
        cy.contains("Top rated movies").click()
        cy.get("#movie-680 .hvr-inner > a").click(50,50,{force: true})
    })
})