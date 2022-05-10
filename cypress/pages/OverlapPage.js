class OverlapPage{
     initPage() {
         cy.get('#name').as('nameField')
         cy.get('[style="overflow-y: scroll; height:100px;"]').as('scroller')
        return this
    }
    verifyPage(){
        cy.url().should('contain','overlapped')
        return this;
    }
    addTextToName(){
        cy.get('@scroller').scrollTo('bottom')
        cy.get('@nameField').type('playground name')
    }
} export default OverlapPage