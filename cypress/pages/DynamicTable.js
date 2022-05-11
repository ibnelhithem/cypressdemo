class DynamicTable{
    initPage() {
        cy.contains('div','Chrome').as('cpu')
        cy.contains('Chrome CPU:').as('res')
       return this
   }
   verifyPage(){
       cy.url().should('contain','dynamictable')
       return this;
   }
   copareCPUValue(){
       cy.get('@cpu').within(()=>{
        cy.contains('%').invoke('text').as('valuetext')
       })
       cy.get('@valuetext').then((valuetext) => {
        cy.get('@res').should('contain',valuetext)
      })
   }
}export default DynamicTable