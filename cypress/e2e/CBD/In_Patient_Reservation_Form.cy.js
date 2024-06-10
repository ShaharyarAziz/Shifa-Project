import CBD from "./CBD_url.cy";
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(CBD);
    cy.viewport("macbook-16");
  });
  it("In-Patient Reservation", () => {
    cy.login("25403", "Shifa@1234");
    cy.get(".ant-notification-notice").should("exist");
    cy.wait(4000);
    //Inpatient Reservation
    //Dropdown
    cy.get('a[href="/form"]').eq(0).click();

    cy.get('input[type="search"]').click();
    cy.contains("Osama Ishtiaq (Endocrinologist)").click();

    //MRNO
    cy.get(".ant-input").type("202030");
    //New Form
    cy.get(":nth-child(1) > .ant-btn").click({ force: true });

    //----------------In Patient Reservation Form------------

    //Admittin Physcian and Speciality
    cy.get(
      ":nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click({ force: true });
    cy.contains("Shazia Fakhar (OB/Gyne)").click({ force: true });
    cy.wait(1000);

    //Refering Physcian
    // cy.get('input[aria-expanded="true"]').click();
    // cy.contains("Aamna Batool Khan  (Dermatologist)").click({ force: true });
    // cy.wait(1000);

    //Diagnosis
    cy.get(
      ":nth-child(2) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click({ force: true });
    cy.contains("Tuberculosis of eye (A185)").click({ force: true });
    cy.wait(1000);

    //Diagnosis Related remarks
    cy.get("#diagnosis_remarks").type("Diagnosis Remarks", { force: true });
    cy.wait(1000);

    //Type of bed required

    cy.get(
      ".ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(1000);

    //Isolation Advice
    cy.get(
      ".ant-col-13 > :nth-child(2) > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    cy.wait(1000);

    //Covid Test Required
    cy.get("#covid_test > :nth-child(1) > .ant-radio > .ant-radio-input").click(
      { force: true }
    );
    cy.wait(1000);

    //Anethesia Consult
    cy.get("#anesthesia > :nth-child(1) > .ant-radio > .ant-radio-input").click(
      { force: true }
    );
    cy.wait(1000);

    //Any Other Important Remarks
    cy.get("#proc_remarks").type("Important Remarks", { force: true });
    cy.wait(1000);

    //Proposed Date of admission
    cy.get("div.ant-picker-input input").click({ force: true });
    cy.contains("td", "14")
      .closest("tr")
      .find("td")
      .eq(3)
      .click({ force: true });
    cy.wait(1000);

    //Estimated Length of stay
    cy.get("#els").type(4);
    cy.wait(2000);

    //Medical/Surgical Procedure Planned
    cy.get("input#procedures").click();
    cy.contains("Stapedectomy WO RX & SS (Pvt 1D) ( EN32 )").click();
    cy.wait(1000);
    //Proposed Date of Surgery
    cy.get("input#proposed_date_surgery").click();
    cy.get("td.ant-picker-cell-end div").eq(3).click();

    //Proposed Time of Surgery
    cy.get("input#proposed_time_surgery").click();
    cy.contains("a", "Now").click();
    //Attendant Name
    cy.get("#attnd_name").type("Shaharyar");
    cy.wait(1000);

    //Attendant Contact
    cy.get(".form-control").type("3061661947");
    cy.wait(1000);

    //Save Button
    cy.get("div.main-div span").click();

    cy.wait(1000);

    // cy.get("div.mr_no_div div").eq(1).click()
    // cy.get('button[type="button"] span').click()
  });
});
