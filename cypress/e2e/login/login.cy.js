/// <reference types="cypress" />

// Seletores
const inputUsername = () => cy.get('[data-test="username"]');
// const inputUsername = function () { return cy.get('[data-test="username"]'); }
const inputPassword = () => cy.get('#password');
const buttonLogin = () => cy.get('[type=submit][name=login-button]');
const spanTitle = () => cy.get('#header_container').find('span[class=title]');

// Data
const usernameValid = 'standard_user';
const passwordValid = 'secret_sauce';
const passwordInvalid = 'secret_sauce_invalid';

describe('Funcionalidade de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('/')

    inputUsername().should('be.visible').clear().type(usernameValid)
    inputPassword().should('be.visible').clear().type(passwordValid)

    buttonLogin().click()

    spanTitle().should('be.visible').and('have.text', 'Products')
    cy.location('href').should('contain', `${Cypress.config('baseUrl')}/inventory.html`)
  });
});
