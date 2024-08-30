import IPD from "./IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-16");
  });
  it("Login", () => {
    cy.login("17378", "123");

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
          '[data-row-key="20817205"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).length > 0
      ) {
        cy.get(
          '[data-row-key="20817205"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).click({ force: true });
      } else {
        // If patient list is not visible or the element doesn't exist, throw an error
        cy.log("Patient list not found or the patient does not exist.");
        throw new Error(
          "Patient list not found or the patient does not exist."
        );
      }
      //Vitals Page
      cy.get('a[href="/shifa/vital"]').click();

      //Vitals Options
      //Unable to stand
      cy.get(
        ".ant-col-12 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      //Unconcious
      cy.get("#consciousness").click({ force: true });
      //Isolation Required
      //Contact Precaution
    //   cy.get(".ant-row > :nth-child(1) > .ant-radio").click({ force: true });
      //Airborne Precautions
    //   cy.get(".ant-row > :nth-child(2) > .ant-radio > .ant-radio-input").click({
    //     force: true,
    //   });
      //NA
      cy.get(":nth-child(3) > .ant-radio > .ant-radio-input").click({
        force: true,
      });

      //Mode of Arrival
      //Walking
      cy.get(
        ".ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
      ).click({ force: true });
      //Wheelchair
      cy.get(
        ":nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
      ).click({ force: true });
      //Strtcher
      cy.get(
        ":nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
      ).click({ force: true });

      //Temperature
      cy.get('input[type="NUMBER"]').eq(0).type(96);
      //blood pressureBP S (mm/Hg)
      cy.get('input[type="NUMBER"]').eq(1).type(150);
      //blood pressureBP D (mm/Hg)
      cy.get('input[type="NUMBER"]').eq(2).type(120);
      //   RRRR (Per Min)
      cy.get('input[type="NUMBER"]').eq(3).type(25);
      // pulsePulse (Per Min)
      cy.get('input[type="NUMBER"]').eq(4).type(112);
      // Spo2SpO2 (%)
      cy.get('input[autocomplete="off"]').eq(5).type(100);
      // weightWeight (Kg)
      cy.get('input[type="NUMBER"]').eq(5).type(100);
      // heightHeight (Cm)
      cy.get('input[type="NUMBER"]').eq(6).type(130);
      // bmiBMI (kg/m2)
      //   cy.get('input[type="NUMBER"]').eq(8).type(130);
      // pain scalePain Scale
      cy.get(
        ":nth-child(4) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .ant-col-2 > .vital_add_btn"
      ).click();
      //Pain Assessment form
      //   Face
      cy.get(
        "#face > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Legs
      cy.get(
        "#legs_flacc > :nth-child(1) > .ant-col-7 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Activity
      cy.get(
        "#activity > :nth-child(1) > .ant-col-7 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Cry
      cy.get(
        "#cry_flacc > :nth-child(1) > .r-bg > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Consolability
      cy.get(
        "#consolability > :nth-child(1) > .r-bg > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      //Submit
      cy.get(".ant-col > .ant-btn").click({ force: true });
      // FallsFalls Risk Screening
      //Yes
      cy.get('div[id="Falls Risk Screening"] input').eq(0).click();
      //Morse Fall Scale
      cy.get(
        ":nth-child(5) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .ant-col-2 > .vital_add_btn"
      ).click({ force: true });
      //History of falling *
      cy.get(
        ".o-bg > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Secondary Diagnosis *
      cy.get(
        "#sec_diagnosis > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Ambulatory Aid *
      cy.get(
        "#ambulatory_aid > .ant-row > :nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // IV/ Heparin/ Saline Lock *
      cy.get(
        "#iv_hep_sal > .ant-row > .m-bg > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Gait Transferring *
      cy.get(
        ".y-bg > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      // Mental Status *
      cy.get(
        "#mental_status > .ant-row > .ant-col-3.pl-10 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
      ).click({ force: true });
      //Submit
      cy.get(":nth-child(15) > .ant-btn").click({ force: true });
      //No
      //   cy.get('div[id="Falls Risk Screening"] input').eq(1).click()
      //Save
      cy.get(".save-button > .ant-btn").click();
      //Success Toast Message
      cy.get('div[role="alert"] div').eq(3).should("have.text","Admission order successfully saved")

      //   cy.get('input[type="NUMBER"]').eq(1).type(130);
      // FallsFall Assessment
      // FallsBSA (m2)
    });
  });
});
