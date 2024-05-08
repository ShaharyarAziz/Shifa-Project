import CBD from "./CBD_url.cy";
import 'cypress-file-upload';

// import "../../support/commands"
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(CBD);
    cy.viewport("macbook-16");
  });
  it("Login", () => {
    // Login
    cy.get("#loginForm_email").type("11116");
    cy.get("#loginForm_password").type("123");
    cy.get(".ant-btn").click();
    cy.get(".ant-notification-notice").should("exist");
    //Patient Select
    // cy.get(".ant-radio-button-wrapper-checked > :nth-child(2)").click();
    // cy.get(
    //   ":nth-child(1) > :nth-child(2) > .mr_div > .mr_no_div > .centered > .mrNo"
    // ).click();
    // Upload Document Page
    cy.get(`a[href="/upload_docs"]`).click();
    cy.get('.ant-input').type("202030{enter}")
    //Admission Type
    cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
    //Document Type
    cy.get('#rc_select_0').click()
    cy.contains("Medical Card").click()
    // Browse Document 
    // cy.get('#attachment').attachFile('CBD-200.doc');
    cy.get('.ant-btn').click()

  });
});
