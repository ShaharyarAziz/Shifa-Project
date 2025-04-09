import ER from "./ER_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(ER);
    cy.viewport("macbook-16");
  });
  it("Login with valid credentials", () => {
    cy.ER_Triage_Login("17378", 123);

    //Patient Triage in
    cy.get(
      '[data-row-key="09042504"] > :nth-child(4) > .enable-link > .ant-flex > .patient-name'
    ).click({ force: true });
    cy.wait(2000);

    //Vitals
    cy.get('a[href="/er/vitals"]').click({ force: true });
    cy.wait(2000);

    // Temperature
    cy.get(
      ':nth-child(1) > .ant-card > .ant-card-body > [style="row-gap: 3px;"] > :nth-child(1) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input'
    ).type("100");
    // PulsePer Min
    cy.get('input[type="NUMBER"]').eq(1).type("80");
    // SpO2%
    cy.get('input[autocomplete="off"]').eq(2).type("98");

    // RRPer Min
    cy.get(
      ':nth-child(1) > .ant-card > .ant-card-body > [style="row-gap: 3px;"] > :nth-child(4) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input'
    ).type("20");
    // BP Smm/Hg
    cy.get(
      ":nth-child(5) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number"
    ).type("120");

    // BP Dmm/Hg
    cy.get(
      ":nth-child(6) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number"
    ).type("80");
    //  BSR
    cy.get(
      ':nth-child(2) > .ant-card > .ant-card-body > [style="row-gap: 3px;"] > :nth-child(1) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input'
    ).type("100");
    // Pain Scale
    cy.get(".anticon-plus").click({ force: true });
    //06
    cy.get("div.num_checkbox_row input").eq(6).click({ force: true });
    //Submit
    cy.get("button.ant-btn-primary span").click({ force: true });
    // HeightCm
    cy.get(
      ':nth-child(2) > .ant-card > .ant-card-body > [style="row-gap: 3px;"] > :nth-child(3) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number'
    ).type("180");
    // WeightKg
    cy.get(
      ':nth-child(2) > .ant-card > .ant-card-body > [style="row-gap: 3px;"] > :nth-child(4) > :nth-child(1) > .ant-col-sm-6 > .ant-form-item-has-success > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input'
    ).type("80");
    // Conscious Level
    cy.get(".ant-select-selector").click({ force: true });
    cy.get("div.ant-select-item-option-active div").click({ force: true });

    // Supplemental Oxygen

    // No
    cy.get(".radio-no > .ant-radio > .ant-radio-input").click({ force: true });
    cy.wait(1000);
    // Yes

    // Falls Risk Screening
    //Save
    cy.get(
      ".shifa-vitals-card > :nth-child(1) > .ant-card-head-wrapper > .ant-card-extra > .ant-btn"
    ).click({
      force: true,
    });
    //Toast
    cy.get(".ant-notification-notice").should("be.visible");
    // cy.get('.ant-typography').should("have.text', 'Vitals successfully saved') // Check for success message")

  });
});
