// Import the custom login command
import "../../support/commands";
import url from "./url.cy";
// import Login_File from "./Login.cy";
import Login_File from "./Login.cy";
import doctor_select from "./Doctor_Select.cy";
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.viewport("macbook-13");
    // doctor_select()
  });
  it.only("login", () => {
    // Login_File();
    cy.get("#loginForm_username").type(17378);
    cy.get("#loginForm_password").type(123);
    cy.get(".ant-btn").click();
    // cy.get(".toast").should("be.visible");
    // cy.get(".toast").should("contain.text", "Logged In");
    cy.get("#rc_select_0").click();
    cy.contains("Umar Yousaf Raja (Endocrinologist)").click();
    //Dropdown Doctor select

    cy.wait(2000);
    //New Visit----------------------------------------------------
    // cy.get(":nth-child(3) > .ant-btn").click();
    // cy.get('.ant-input-wrapper > .ant-input').type(202034)
    // cy.get('.ant-modal-footer > .ant-btn-primary').click({multiple:true})
    // cy.get('#visit_status > .ant-radio-group > :nth-child(1) > .ant-radio-wrapper > :nth-child(2)').click()
    // // const doctorName = "Umar Yousaf Raja (Endocrinologist)";
    // cy.get('.ant-radio-input').click({multiple:true})

    // cy.get('.ant-modal-footer > .ant-btn-primary > span').click()
    // cy.get('.ant-notification-notice').should("exist")
    //New Visit------------------------------------------------------------
    //Patient Select
    cy.get(
      '[data-row-key="1"] > :nth-child(4) > .patient-name > a > .patient-name-text'
    ).click();
    // cy.get(
    //   '[data-row-key="2"] > :nth-child(4) > .patient-name > a > .patient-name-text'
    // ).click();
    //Initial History and Physical
    // cy.get(".tab-row > :nth-child(2)").click();
    // cy.get('.ant-row > :nth-child(1) > .ant-btn').click()
    //Unable To Stand
    // cy.get('#vitals-form_unable_to_stand').click()
    //Isolation Required
    // cy.get('#vitals-form_isolation_needed > :nth-child(1) > .ant-radio > .ant-radio-input').click()
    //Mode Of Arrival
    // cy.get('#vitals-form_mode_of_arrival > :nth-child(1) > .ant-radio > .ant-radio-input').click()

    // ----------------------------------------------Vitals Form----------------------------------------------------------------
    //Temperature
    cy.get("#vitals-form_vitals_0_result").type(100);
    // //Pulse
    cy.get("#vitals-form_vitals_3_result").type(75);
    // //SP02
    cy.get("#vitals-form_vitals_6_result").type(50);
    // //RR
    cy.get("#vitals-form_vitals_9_result").type(20);
    // //BP S
    cy.get("#vitals-form_vitals_12_result").type(120);
    // //BP D
    cy.get("#vitals-form_vitals_15_result").type(80);
    // //Pain Scale
    cy.get(".ant-col-11 > :nth-child(1) > :nth-child(2) > .ant-col-2").click();
    cy.get(".ant-col-offset-2 > .ant-checkbox-wrapper").click();
    cy.get(".popover-btn > :nth-child(2) > .ant-btn").click();
    // //Height
    cy.get("#vitals-form_vitals_4_result").type(187);
    // //Weight
    cy.get("#vitals-form_vitals_7_result").type(110);
    //BMI
    // cy.get('#vitals-form_vitals_7_result').type(33)
    //BSA
    // cy.get('#vitals-form_vitals_13_result').type(30)
    //Falls Risk Screening
    cy.get(
      "#vitals-form_vitals_2_result > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Falls Assessment
    cy.get(
      ":nth-child(6) > :nth-child(1) > .ant-col-11 > :nth-child(1) > :nth-child(1) > .ant-col-2"
    ).click();
    // //Morse Fall Scale
    cy.get(
      "#history_falling > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#sec_diagnosis > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#ambulatory_aid > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#iv_hep_sal > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#gait_transf > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#mental_status > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(2) > .ant-col > .popover-btn > :nth-child(2) > .ant-btn"
    ).click();
    // //Nutritional Score
    cy.get(
      ":nth-child(9) > :nth-child(1) > .ant-col-11 > :nth-child(1) > :nth-child(1) > .ant-col-2"
    ).click();
    // //Nutritional Scaling
    cy.get(
      "#hospitalization > .ant-row > .g-bg > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#weight_loss > .ant-row > .g-bg > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#vomiting > .ant-row > .g-bg > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#diarrhea > .ant-row > .g-bg > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#loss_appetite > .ant-row > .g-bg > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      "#hemoglobin > .ant-row > .g-bg > .ant-checkbox-wrapper > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(6) > :nth-child(1) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > :nth-child(2) > .ant-col > .popover-btn > :nth-child(2) > .ant-btn"
    ).click();

    //Functional Assessment
    cy.get(':nth-child(6) > :nth-child(1) > .ant-col-11 > :nth-child(1) > :nth-child(1) > .ant-col-2').click();
    // //Level of Consciouness
    cy.get(
      "#level_of_conscious > .ant-row > .g-bg > .text-align > :nth-child(2)"
    ).click();
    // //Sensory
    cy.get(
      "#sensory > :nth-child(1) > .g-bg > .text-align > :nth-child(2)"
    ).click();
    // //Speech
    cy.get(
      "#speech > :nth-child(1) > .g-bg > .text-align > :nth-child(2)"
    ).click();
    // //Vision
    cy.get(
      "#vision > :nth-child(1) > .g-bg > .text-align > :nth-child(2)"
    ).click();
    // //Hearing
    cy.get(
      "#hearing > :nth-child(1) > .g-bg > .text-align > :nth-child(2)"
    ).click();
    // // Add Button
    cy.get(
      ":nth-child(7) > :nth-child(1) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > :nth-child(2) > .ant-col > .popover-btn > :nth-child(2) > .ant-btn"
    ).click();

    //Save Button
    cy.get(".ant-row > :nth-child(1) > .ant-btn").click();
    // //Verify ACCOUNT
    // //Username
    cy.get("#verificationForm_username").type(17378);
    // //Password
    cy.get("#verificationForm_password").type(123);
    // //See Password
    cy.get(
      ":nth-child(5) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input-suffix"
    ).click();
    // //Verify Button
    cy.get(".ant-modal-footer > .ant-btn-primary").click();

    //Initial Physical History
    // cy.get(".tab-row > :nth-child(2)").click();
    //Import Previous Data
    // cy.get('.ant-collapse-extra > .ant-btn').click()
    //Upload Document
    // cy.get(
    //   '[data-menu-id="rc-menu-uuid-27031-1-upload-docs"] > .ant-menu-title-content'
    // ).click();
  });
  it("Dropdown Doctor Select", () => {
    doctor_select();
    cy.debug();
  });
});
