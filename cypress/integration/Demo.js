/// <reference types="Cypress" />

import OverlapPage from '../pages/OverlapPage'
import AJAXData from '../pages/AJAXData'
import Visibility from '../pages/Visibility'
import DynamicTable from '../pages/DynamicTable'
import SampleApp from '../pages/SampleApp'
import TextInput from '../pages/TextInput'
import ProgressBar from '../pages/ProgressBar'

context('Demo test for Automation Playground', ()=>{
    let overlapPage;
    let ajaxData;
    let visibility;
    let dynamicTable;
    let sampleApp;
    let textInput;
    let progressBar;
    beforeEach("navigate to the main page",()=>{
        overlapPage = new OverlapPage();
        ajaxData = new AJAXData();
        visibility = new Visibility();
        dynamicTable = new DynamicTable();
        sampleApp = new SampleApp();
        textInput = new TextInput();
        progressBar = new ProgressBar()
        cy.visit("/")
        cy.contains('a','Overlapped Element').as('nav-overlapPage-link')
        cy.contains('a','AJAX Data').as('nav-ajaxData-link')
        cy.contains('a','Visibility').as('nav-visibility-link')
        cy.contains('a','Dynamic Table').as('nav-Dynamic-Table-link')
        cy.contains('a','Sample App').as('nav-Sample-App-link')
        cy.contains('a','Text Input').as('nav-Text-Input-link')
        cy.contains('a','Progress Bar').as('nav-Progress-Bar-link')
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
    it('chech sampleApp login',()=>{
        //cy.get('nav-Sample-App-link').click();
        cy.visit('http://uitestingplayground.com/sampleapp')
        sampleApp.initPage().verifyPage().submitLoginForm()
    })
    it('chech Input text Field',()=>{
        cy.get('@nav-Text-Input-link').click();
        textInput.initPage().verifyPage().changeButtonName();
    })
    it('chech progress bar',()=>{
        cy.get('@nav-Progress-Bar-link').click();
        progressBar.initPage().verifyPage().checkProgressBar();
    })
})
