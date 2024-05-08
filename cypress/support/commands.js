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
// import url from "../e2e/EMR_OPD/url.cy";
// // -- This is a parent command --
// // Define a custom Cypress command for login
// Cypress.Commands.add("login", () => {
//   describe("Login", () => {
//     it("Login", () => {
//       // cy.visit(url);
//       cy.get("#loginForm_username").type(17378);
//       cy.get("#loginForm_password").type(123);
//       cy.get(".ant-btn").click();
//     });
//   });
// });

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
