import ER from "./ER_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(ER);
    cy.viewport("macbook-16");
  });
  it("Login with valid credentials", () => {
    cy.ER_Triage_Login("17378", 123);
    

    //Visit_no
    cy.get('#visit_no').type("04");
    cy.wait(2000);
    //Presenting Complains
    cy.get('div.ant-select-selection-overflow').click({force: true});
    cy.get('div[title="Shortness of breath"] div').click({force: true});
    //Bind
    cy.get('button[type="submit"] span').click({force: true});

});
});