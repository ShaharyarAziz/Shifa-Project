import ER from "./ER_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(ER);
    cy.viewport("macbook-16");
  });
  it("Login with valid credentials", () => {
    cy.ER_Triage_Login("17378", 123);
    

  //Patient Triage in
  cy.get('[data-row-key="09042504"] > :nth-child(4) > .enable-link > .ant-flex > .patient-name').click({force: true});
    cy.wait(2000);

    //Allergies
    cy.get('a[href="/er/patient/allergies"]').click({ force: true });
    //Generic
    cy.get('input[value="Generic"]').click({ force: true });
//Allergy Description
cy.get('#allergies-form_allergies').click({ force: true });
cy.get('div.ant-select-item-option-active div').click({ force: true });
//Severity Level
cy.get('#allergies-form_severity').click({ force: true });
cy.get('div[title="Severe"] div').click({ force: true });
//Submit
cy.get('button[type="submit"] span').click({ force: true });
//Toast
cy.get('.ant-notification-notice').should('be.visible');

});
});