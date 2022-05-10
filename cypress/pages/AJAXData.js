class AJAXData{
    initPage() {
        cy.get('#ajaxButton').as('triggerButton')
       return this
   }
   verifyPage(){
       cy.url().should('contain','ajax')
       return this;
   }
   chechAjaxText(){
       cy.get('@triggerButton').click()
       cy.contains('Data loaded with AJAX get request.').should('be.visible')
   }
}export default AJAXData