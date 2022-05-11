import 'cypress-wait-until';

class ProgressBar{
    initPage() {
        cy.get('#startButton').as('startButton')
        cy.get('#stopButton').as('stopButton')
        cy.get('#progressBar').as('progressBar')
       return this
   }
   verifyPage(){
       cy.url().should('contain','progressbar')
       return this;
   }
   checkProgressBar(){
       cy.get('@startButton').click()
       cy.waitUntil(() => cy.contains('%').invoke('text').as('@valuetext'))
        //.then(valuetext.should('contain','75'));
        .then(cy.get('@valuetext').then((valuetext) => {
            cy.get('@progressBar').should('contain','75')
          }));
        cy.get('@stopButton').click()
   }
}export default ProgressBar