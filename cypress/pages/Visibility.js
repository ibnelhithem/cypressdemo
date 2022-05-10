class Visibility{
    initPage() {
        cy.get('#hideButton').as('hideButton')
        cy.get('#removedButton').as('removedButton')
        cy.get('#zeroWidthButton').as('zeroWidthButton')
        cy.get('#overlappedButton').as('overlappedButton')
        cy.get('#transparentButton').as('transparentButton')
        cy.get('#invisibleButton').as('invisibleButton')
        cy.get('#notdisplayedButton').as('notdisplayedButton')
        cy.get('#offscreenButton').as('offscreenButton')
       return this
   }
   verifyPage(){
       cy.url().should('contain','visibility')
       return this;
   }
   checkButtonIsVisable(){
       cy.get('@hideButton').should('be.visible')
       cy.get('@removedButton').should('be.visible')
       cy.get('@zeroWidthButton').should('be.visible')
       cy.get('@overlappedButton').should('be.visible')
       cy.get('@transparentButton').should('be.visible')
       cy.get('@invisibleButton').should('be.visible')
       cy.get('@notdisplayedButton').should('be.visible')
       cy.get('@offscreenButton').should('be.visible')
       return this;
   }
   checkButtonsHidden(){
    cy.get('@hideButton').click()
    cy.get('@hideButton').should('be.visible')
    cy.get('@removedButton').should('not.exist')
    cy.get('@zeroWidthButton').should('not.be.visible')
    //cy.get('@overlappedButton').should('be.')
    cy.get('@transparentButton').should('not.be.visible')
    cy.get('@invisibleButton').should('not.be.visible')
    cy.get('@notdisplayedButton').should('not.be.visible')
    //cy.get('@offscreenButton').should('not.be.visible')
    return this;
   }
}export default Visibility