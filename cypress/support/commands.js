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

//-------------------CBD lOGIN-----------------------------------
Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginForm_email").type(email);
  cy.get("#loginForm_password").type(password);
  cy.get(".ant-btn").click();
  // cy.get(".ant-notification-notice").should("exist");
});

//---------------------------------------------------------------

//--------------------------OPD lOGIN-----------------------------
Cypress.Commands.add("OPD_login", (email, password) => {
  cy.get("#loginForm_username").type(email);
  cy.get("#loginForm_password").type(password);
  cy.get(".ant-btn").click();
});

// IPD lOGIN
Cypress.Commands.add("IPD_login", (email, password) => {
  cy.get('input[type="text"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// ----------------------------Career Portal Login------------------------------------
Cypress.Commands.add("CareerPortal_login", (email, password) => {
  cy.get('input[name="user_name"]').type(email);
  cy.get('input[name="user_password"]').type(password);
  cy.get('button[type="submit"]').click();
});
// -----------------------------Corporate Patient Portal------------------------------
Cypress.Commands.add("CorporatePortal_login", (user_name, password) => {
  cy.get('#loginForm_username').type(user_name);
  cy.get('#loginForm_password').type(password);
  cy.get('.ant-btn').click();
});



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
