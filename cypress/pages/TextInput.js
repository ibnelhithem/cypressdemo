class TextInput{
    initPage() {
        // the static data for button name should be move to external files but this is a simple scenario so I keep it her
        cy.get('#newButtonName').as('newButtonName')
        cy.get('#updatingButton').as('updatingButton')
       return this
   }
   verifyPage(){
       cy.url().should('contain','textinput')
       return this;
   }
   changeButtonName(){
       cy.get('@newButtonName').clear().type('buttonname')
       cy.get('#updatingButton').click()
       cy.contains('button','buttonname').should('be.visible')
   }
}export default TextInput