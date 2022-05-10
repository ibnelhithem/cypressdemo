context("check to do list",()=>{
    beforeEach("basic config test",()=>{
        cy.visit("https://do-it-with-cypress.azureedge.net/")
        cy.get('[data-testid=new-todo]').as('new-todo')
        cy.get('[data-testid=btn-add-todo]').as('add-todo')

    })
    it("add new todo",()=>{
        cy.get('@new-todo').type('create new elemnet to the list')
        cy.get('@add-todo').click()
        cy.contains('li', 'create new elemnet to the list').should('be.visible')
    })

    it("add new todo with enter",()=>{
        cy.get('@new-todo').type('create new elemnet to the list and add it with enter{enter}')
        cy.contains('li', 'create new elemnet to the list').should('be.visible')
    })
    it("work with setttings",()=>{
        cy.get("#settings").click()
        cy.get('#result').should('contain.value','  "gender": "",')
        cy.get('#female').check()
        cy.get('#result').should('contain.value','  "gender": "female",')

        cy.get('#newsletter').check()
        cy.get('#result').should('contain.value','  "newsletter": true')

        cy.get('#country').select('Egypt')
        cy.get('#result').should('contain.value','  "country": "EG",')

        cy.get('#result').should('contain.value','  "happiness": 80,')
        cy.get('#happiness').invoke('val',95).trigger('input')
        cy.get('#result').should('contain.value','  "happiness": 95,')
    })
})