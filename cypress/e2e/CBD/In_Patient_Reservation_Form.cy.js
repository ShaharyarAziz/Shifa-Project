import CBD from "./CBD_url.cy";
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(CBD);
    cy.viewport("macbook-16");
  });
  it("Upload", () => {
    cy.get("#loginForm_email").type("25403");
    cy.get("#loginForm_password").type("Shifa@1234");
    cy.get(".ant-btn").click();
    cy.get(".ant-notification-notice").should("exist");
    cy.wait(4000);
    //Inpatient Reservation
    //Dropdown
    cy.get('a[href="/form"]').eq(0).click();
    cy.get(".ant-select-selector").click();
    cy.contains("Qamar Hafeez Kiani (General Surgeon)").click();

    //MRNO
    cy.get(".ant-input").type("202016");
    //New Form
    cy.get(":nth-child(1) > .ant-btn").click();

    //----------------In Patient Reservation Form------------

    //Admittin Physcian and Speciality
    cy.get(
      ":nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.contains("Shazia Fakhar (OB/Gyne)").click();

    //Refering Physcian
    cy.get(
      ":nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.contains("Osama Ishtiaq (Endocrinologist)").click({ force: true });

    //Diagnosis
    cy.get(
      ":nth-child(2) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.contains("Tuberculosis of eye (A185)").click();

    //Diagnosis Related remarks
    cy.get("#diagnosis_remarks").type("Diagnosis Remarks");

    //Type of bed required

    cy.get(
      ".ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });

    //Isolation Advice
    cy.get(
      ".ant-col-13 > :nth-child(2) > .ant-checkbox > .ant-checkbox-input"
    ).click();

    //Covid Test Required
    cy.get(
      "#covid_test > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    //Anethesia Consult
    cy.get(
      "#anesthesia > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    //Any Other Important Remarks
    cy.get("#proc_remarks").type("Important Remarks");

    //Proposed Date of admission
    cy.get(".ant-picker-input").click();
    cy.contains("td", "16").closest("tr").find("td").find("div").eq(3).click();

    //Estimated Length of stay
    cy.get("#els").type(4);

    //Medical/Surgical Procedure Planned
    // cy.get(
    //   ":nth-child(6) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    // ).click();
    // cy.contains("Stapedectomy WO RX & SS (Pvt 1D) ( EN32 )").click();

    //Proposed Date of Surgery
    // cy.get(':nth-child(2) > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > .ant-col-16 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click();
    // cy.contains("td", "16").closest("tr").find("td").find("div").eq(3).click();

    //Attendant Name
    cy.get("#attnd_name").type("Shaharyar");

    //Attendant Contact
    cy.get(".form-control").type("3061661947");

    //Save Button
    cy.get("button.ant-btn span").click();
  });
});
