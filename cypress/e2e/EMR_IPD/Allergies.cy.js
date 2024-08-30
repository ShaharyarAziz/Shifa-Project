import IPD from "./IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-11");
  });
  it("Login", () => {
    cy.IPD_login("17378", "123");

    cy.get(".ant-select-selector").click();
    cy.contains("D-2").click({ force: true });
    // cy.contains('span', 'Location change successfully')
    //lOGIN Password
    // cy.get("#loginForm_password").type(123);
    // cy.get(".ant-btn").click();
    //Patient Select
    cy.wait(3000);
    cy.get("body").then(($body) => {
      // If the patient list is visible, click on the patient
      if (
        $body.find(
          '[data-row-key="20274077"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).length > 0
      ) {
        cy.get(
          '[data-row-key="20274077"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).click({ force: true });
      } else {
        // If patient list is not visible or the element doesn't exist, throw an error
        cy.log("Patient list not found or the patient does not exist.");
        throw new Error(
          "Patient list not found or the patient does not exist."
        );
      }
    });
    //Nurses
    cy.get('div[role="menuitem"]').eq(1).click();
    //Initial Nursing Assessment form Page
    cy.get('a[href="/shifa/allergies"]').click();

    //Generic
    // cy.get(
    //   ".ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    // ).click();
    //NKDA
    cy.get(
      ".ant-col-4 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //No
    cy.get(".ant-popover-buttons > :nth-child(1)").click();
    //Yes
    // cy.get("button.ant-btn-primary span").eq(1).click();
    // //Brand
    cy.get(
      ".ant-radio-group > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Allergy Description
    // cy.get(
    //   ":nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    // ).click();
  });
});
