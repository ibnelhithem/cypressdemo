/// <reference types="Cypress" />

import OverlapPage from '../pages/OverlapPage'
import AJAXData from '../pages/AJAXData'
import Visibility from '../pages/Visibility'
import DynamicTable from '../pages/DynamicTable'
import SampleApp from '../pages/SampleApp'


context('Demo test for Automation Playground', ()=>{
    let overlapPage;
    let ajaxData;
    let visibility;
    let dynamicTable;
    let sampleApp;
    beforeEach("navigate to the main page",()=>{
        overlapPage = new OverlapPage();
        ajaxData = new AJAXData();
        visibility = new Visibility();
        dynamicTable = new DynamicTable();
        sampleApp = new SampleApp();
        cy.visit("/")
        cy.contains('a','Overlapped Element').as('nav-overlapPage-link')
        cy.contains('a','AJAX Data').as('nav-ajaxData-link')
        cy.contains('a','Visibility').as('nav-visibility-link')
        cy.contains('a','Dynamic Table').as('nav-Dynamic-Table-link')
        cy.contains('a','Sample App').as('nav-Sample-App-link')
    })
    
    it('chech Overlapped element',()=>{
        cy.get('@nav-overlapPage-link').click();
        overlapPage.initPage().verifyPage().addTextToName()
    })
    it('chech ajax request',()=>{
        cy.get('@nav-ajaxData-link').click();
        ajaxData.initPage().verifyPage().chechAjaxText()
    })
    it('chech elements visibility',()=>{
        cy.get('@nav-visibility-link').click();
        visibility.initPage().verifyPage().checkButtonIsVisable().checkButtonsHidden()
    })
    it('chech Dynamic-Table',()=>{
        cy.get('@nav-Dynamic-Table-link').click();
       dynamicTable.initPage().verifyPage().copareCPUValue();
    })
    it.skip('chech sampleApp login',()=>{
        //cy.get('nav-Sample-App-link').click();
        cy.visit('http://uitestingplayground.com/sampleapp')
        //sampleApp.initPage().verifyPage().submitLoginForm()
    })
})
