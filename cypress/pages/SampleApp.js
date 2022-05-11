class SampleApp{
    initPage() {
        // the static data for username and pass should be move to external files but this is a simple scenario so I keep it her
        cy.get('section input[name="UserName"]').as('userNameInput')
        cy.get('section input[name="Password"]').as('passwordInput')
       return this
   }
   verifyPage(){
       cy.url().should('contain','sampleapp')
       return this;
   }
   submitLoginForm(){
       cy.get('@userNameInput').clear().type('username')
       cy.get('@passwordInput').clear().type('pwd')
       cy.get('#login').click()
       cy.get('#loginstatus').should('contain','username')
   }
}export default SampleApp