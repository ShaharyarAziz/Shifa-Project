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
    cy.wait(2000);
    cy.get(
      '[data-row-key="22812200"] > :nth-child(4) > .ant-row > a > .patient-name-text'
    ).click();
    //Intial Nursing Assessment Page Navigation
    cy.get(":nth-child(6) > .ant-menu-submenu-title").click();
    cy.get('a[href="/shifa/admission/peads"]').click();
    cy.wait(2000);
    //Mode Of Admission
    cy.get(
      "#mode_of_admission > .ant-row > .ant-col-14 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Mode of Transportation
    cy.get(
      "#mode_of_transportation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //ID Band Applied
    cy.get(
      "#id_band_applied > .ant-row > .ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Patient Belongings
    cy.get(
      "#patient_belongings > .ant-row > .ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Accompanied By
    cy.get(
      '#accompanied_by > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Employee ID
    cy.get("#arrival_information_user_id").type("29920{enter}");
    //Arrival Date
    cy.get("input#arrival_date").click();
    cy.get("td.ant-picker-cell-start div").eq(0).click();
    //Arrival Time
    cy.get("input#arrival_time").click();
    cy.contains("a", "Now").click();
    //Presenting Complaints
    cy.get("#presenting_complaint").type("Testing");
    //Patient / Family has been oriented to the following
    cy.get(
      "#patient_family_has_been_oriented_to_the_following > .ant-row > :nth-child(9) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Patient/ Family are given following Items/ Information on admission:
    cy.get(".ant-col-16 > .ant-checkbox-wrapper").click();
    //Baseline Data
    //Communicable Disease
    cy.get(
      "#communicable_disease > :nth-child(1) > .ant-col-3 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Isolation Type
    cy.get(
      "#isolation_type > :nth-child(1) > .ant-col-3 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Immunization
    cy.get(
      "#immunization > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Functional Assessment
    //Feeding
    cy.get(
      "#functional_assessment_feeding > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Bathing
    cy.get(
      "#functional_assessment_bathing > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Elimination
    cy.get(
      "#functional_assessment_elimination > :nth-child(1) > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Mobility
    cy.get(
      "#functional_assessment_mobility > :nth-child(1) > .ant-col-2 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Mobility Comment
    cy.get("#mobility_comments").type("Testing Mobility Comment");
    //Cognition / Perception Pattern
    //Level of Conscious
    //Oriented To
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > .ant-col-6 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();

    //Orientation
    cy.get(
      "#level_of_conscious_oriented_to2 > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Vision
    cy.get(
      "#cognition_vision > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Hearing
    cy.get(
      "#cognition_hearing > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Speech
    cy.get(
      "#cognition_speech > :nth-child(1) > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Sensory
    cy.get(
      "#cognition_sensory > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Risk of Pressure Ulcer
    cy.get(
      "#pressure_ulcer_present_yes_no > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Pressure Ulcer Assessment
    cy.get("#pressure_ulcer_assessment").click();
    //Sensory Perception
    cy.get(
      "#sensory_perception > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Moisture
    cy.get(
      "#moisture > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio"
    ).click({ force: true });
    //Activity
    cy.get(
      "#activity > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Mobility
    cy.get(
      "#mobility > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Nutrition
    cy.get(
      "#nutrition > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Frtiction and Shear
    cy.get(
      "#friction_shear > .ant-row > .y1-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Submit
    cy.get(".pt-6 > .ant-btn").click();
    //Drains
    cy.get(
      "#drains > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Tubes
    cy.get(
      "#tubes > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Lines
    cy.get(
      "#lines > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Implants
    cy.get(
      "#implants > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Growth & Development
    cy.get(
      "#growth_and_development_are_normal_as_per_growth_chart > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Physician to be notified for relevant referral
    cy.get("#physician_referral_peads").click();
    //Nutrition Assessment
    cy.get("#nutrition_assessment").click({ force: true });
    //History of hospitalization in past 2 months? *
    cy.get(
      "#hospitalization > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //History of weight Loss/ Gain in past 2 months *
    cy.get(
      "#weight_loss > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Vomiting
    cy.get(
      "#vomiting > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Diarrhea
    cy.get(
      "#diarrhea > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Loss of appetite *
    cy.get(
      "#loss_appetite > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Hemoglobin 10g/dl (Yes = 02 score) *
    cy.get(
      "#hemoglobin > .ant-row > .r-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Submit
    cy.get(
      ":nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-form > .ant-row.center_div > .pt-6 > .ant-btn"
    ).click({ force: true });
    //Feeding
    cy.get(
      "#nutrition_screening_feeding > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Psychological
    //Mood
    cy.get(
      "#mood > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    //Socioeconomic
    //Living Situation
    cy.get(
      "#living_situation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    // Marital Status
    cy.get(
      "#marital_status > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    //Occupation
    cy.get(
      "#occupation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    // Habits
    cy.get(
      "#habits > :nth-child(1) > :nth-child(4) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    //other Text Field
    cy.get("#habits_text")
      .first()
      .scrollIntoView()
      .type("For testing Purpose", { force: true });
    //Religious / Cultural / Spiritual
    //Religion
    cy.get(
      "#religion > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    // Are there any religious cultural practices that need to be a part of your care
    cy.get(".ant-col-19 > .ant-radio-wrapper > .ant-radio > .ant-radio-input")
      .first()
      .click({ force: true });

    //List Problems / Needs Identified based on Initial Assessment
    cy.get(".ant-select-selector").first().click({ force: true });
    cy.contains(
      "Risk for fall related to disease process evidence by use of assistive device"
    ).click();
    //DISCHARGE PLANNING (To be initiated at the time of admission)
    //Will patient require care at home?
    cy.get(
      "#will_patient_require_care_at_home > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Will patient require transportation to go home?
    cy.get(
      "#require_transportation > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Will patient require physiotherapy to go home?*
    cy.get(
      "#require_home_physiotherapy > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Is home oxygen therapy anticipated?*
    cy.get(
      "#oxygen_therapy_anticipated > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Is home medical equipment anticipated?*
    cy.get(
      "#medical_equipment_anticipated > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Who will take care of patient at home?*
    cy.get(
      "#who_will_take_care_of_patient_at_home > :nth-child(1) > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Any other needs anticipated?*
    cy.get(
      "#any_other_needs_anticipated > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Following information / Education has been imparted on the basis of anticipated discharge needs*
    cy.get(
      "#following_information_education_has_been_imparted_on_the_basis_of_anticipated_discharge_needs > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Save
    cy.get(".ant-col-8 > .ant-btn").click({ force: true });
  });
});
