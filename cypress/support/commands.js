// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// cypress/support/commands.js

Cypress.Commands.add('login', (email, password) => {
    cy.get("#loginForm_email").type(email);
    cy.get("#loginForm_password").type(password);
    cy.get(".ant-btn").click();
    cy.get(".ant-notification-notice").should("exist");
  });
  

// Custom command to check if dropdown is disabled


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
