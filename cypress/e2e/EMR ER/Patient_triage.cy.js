import ER from "./ER_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(ER);
    cy.viewport("macbook-16");
  });
  it("Login with valid credentials", () => {
    cy.ER_Triage_Login("17378", 123);
    

  //Patient Triage in
  cy.get('[data-row-key="09042504"] > :nth-child(4) > .enable-link > .ant-flex > .disable-patient-name').click({force: true});
    cy.wait(2000);

    //Mode of Arrival
    //Walking
    cy.get(':nth-child(1) > .ant-radio > .ant-radio-inner').click({ force: true });
    //Received from
    cy.get('input#layout-multiple-vertical_received_from').click({ force: true });
    cy.get('div[title="Home"] div').click({ force: true });
    //Bed Type
    cy.get('input#layout-multiple-vertical_bed_type').click({ force: true });
    cy.get('div[title="Peads Unit ER"] div').click({ force: true });
    //Bed$#
    cy.get('#layout-multiple-vertical_bed_id').click({ force: true });
    cy.get('div.ant-select-item-option-active div').eq(2).click({ force: true });
    //Complaints
    cy.get('input#layout-multiple-vertical_presenting_complaint').type("Fever");
    //Save
    cy.get('button[type="button"] span').click({ force: true });

});
});