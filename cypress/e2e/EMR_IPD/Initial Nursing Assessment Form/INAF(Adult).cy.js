import IPD from "../IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-16");
  });
  it("Login", () => {
    cy.IPD_login("17378", 123);
    cy.wait(2000);
    cy.get(":nth-child(1) > .pop > .logo").click();
    cy.wait(2000);

    cy.get("div.ant-select-selector").click();
    cy.contains("B-3").click();
    cy.wait(2500);
    cy.get("body").then(($body) => {
      // If the patient list is visible, click on the patient
      if (
        $body.find(
          '[data-row-key="22812152"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).length > 0
      ) {
        cy.get(
          '[data-row-key="22812152"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).click({ force: true });
      } else {
        // If patient list is not visible or the element doesn't exist, throw an error
        cy.log("Patient list not found or the patient does not exist.");
        throw new Error(
          "Patient list not found or the patient does not exist."
        );
      }
    });
    cy.wait(2000);
    //Nurses
    cy.get('div[role="menuitem"]').eq(1).click();
    cy.wait(2000);
    //Initial Nursing Assessment form Page
    cy.contains("span", "Initial Nursing Assessment (Adult)").click();
    cy.wait(2000);
    //Nursing Assessment Form
    //Mode Of Admission
    cy.get(
      "#mode_of_admission > .ant-row > .ant-col-14 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Mode of Transportation
    cy.wait(2000);
    cy.get(
      "#mode_of_transportation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //ID Band Applied
    cy.wait(2000);
    cy.get(
      "#id_band_applied > .ant-row > .ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Patient Belongings
    cy.wait(2000);
    cy.get(
      "#patient_belongings > .ant-row > .ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Patient / family informed about hospital's "Patient Valueables" policy*
    cy.wait(2000);
    cy.get("input#informed_about_personal_belongings_policy").click();
    cy.wait(2000);
    cy.get(
      '[style="padding-left: 8px; padding-right: 8px; text-align: right;"] > .ant-btn'
    ).click();
    cy.wait(2000);
    //Accompanied By
    cy.wait(2000);
    cy.get(
      '#accompanied_by > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    cy.wait(2000);
    //Employee ID
    cy.get("#arrival_information_user_id").type("29920{enter}");
    cy.wait(2000);
    //Arrival Date
    cy.get("input#arrival_date").click();
    cy.wait(2000);
    cy.get("td.ant-picker-cell-start div").eq(0).click();
    cy.wait(2000);
    //Arrival Time
    cy.get("input#arrival_time").click();
    cy.wait(2000);
    cy.contains("a", "Now").click();
    cy.wait(2000);
    //Presenting Complaints
    cy.get("#presenting_complaint").type("Testing");
    //Patient / Family has been oriented to the following
    cy.wait(2000);
    cy.get(
      "#patient_family_has_been_oriented_to_the_following > .ant-row > :nth-child(9) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(2000);
    //Patient/ Family are given following Items/ Information on admission:
    cy.get(".ant-col-16 > .ant-checkbox-wrapper").click();
    cy.wait(2000);
    //Baseline Data
    //Communicable Disease
    cy.get(
      "#communicable_disease > :nth-child(1) > .ant-col-3 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(2000);
    //Isolation Type
    cy.get(
      "#isolation_type > :nth-child(1) > .ant-col-3 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Level of Conscious
    //Oriented To
    //Time
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(2000);
    //Place
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(2000);
    //Person
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > .ant-col-6 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(2000);
    //Orientation
    cy.get(
      "#level_of_conscious_oriented_to2 > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).should("be.disabled");
    cy.wait(2000);
    //Vision
    cy.get(
      "#cognition_vision > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Hearing
    cy.get(
      "#cognition_hearing > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Speech
    cy.get(
      "#cognition_speech > :nth-child(1) > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Sensory
    cy.get(
      "#cognition_sensory > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Activity of Daily Living (Self Caring)
    cy.get(
      "#no_problems_identified_self_caring > .ant-row > .ant-col-14 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Activity of Daily Living (Musculoskeletal)
    cy.get(
      "#no_problems_identified_musculoskeletal > .ant-col > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Risk of Pressure Ulcer
    cy.get(
      "#pressure_ulcer_present_yes_no > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Pressure Ulcer Assessment
    cy.get("#pressure_ulcer_assessment").click();
    cy.wait(2000);
    //Sensory Perception
    cy.get(
      "#sensory_perception > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Moisture
    cy.get(
      "#moisture > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio"
    ).click({ force: true });
    cy.wait(2000);
    //Activity
    cy.get(
      "#activity > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Mobility
    cy.get(
      "#mobility > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Nutrition
    cy.get(
      "#nutrition > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Frtiction and Shear
    cy.get(
      "#friction_shear > .ant-row > .y1-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Submit
    cy.get(".pt-6 > .ant-btn").click();
    cy.wait(2000);

    //Drains
    cy.get(
      "#drains > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Tubes
    cy.get(
      "#tubes > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Lines
    cy.get(
      "#lines > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Implants
    cy.get(
      "#implants > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Activity of Daily Living ( Use of Assisting Equipment )
    cy.get(
      '#_use_of_assisting_equipment > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner'
    ).click({ force: true });
    cy.wait(2000);
    //Nutrition Screening
    cy.get("#nutrition_assessment").click({ force: true });
    cy.wait(2000);
    //nform to duty doctor for relevant referral
    cy.get("#inform_to_duty_doctor_rel_ref").click({ force: true });
    cy.wait(2000);
    //History of hospitalization in past 2 months?
    cy.get(
      "#hospitalization > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //History of weight Loss/ Gain in past 2 months
    cy.get(
      "#weight_loss > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Vomiting
    cy.get(
      "#vomiting > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Diarrhea
    cy.get(
      "#diarrhea > .ant-row > .y-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Loss of appetite
    cy.get(
      "#loss_appetite > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    cy.wait(2000);
    //Hemoglobin 10g/dl (Yes = 02 score)
    cy.get(
      "#hemoglobin > .ant-row > .g-bg > .ant-radio-wrapper > .ant-radio"
    ).click({ force: true });
    cy.wait(2000);
    // cy.wait(2000);
    //Submit
    cy.get(
      ":nth-child(8) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-form > .ant-row.center_div > .pt-6 > .ant-btn"
    ).click();
    cy.wait(2000);
    // cy.get(
    //   ":nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body"
    // ).should("not.exist");
    // cy.wait(2000);

    //Psychological
    //Mood
    cy.get(
      "#mood > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Socioeconomic
    //Living Situation
    cy.get(
      "#living_situation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    cy.wait(2000);
    // Marital Status
    cy.get(
      "#marital_status > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Occupation
    cy.get(
      "#occupation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    cy.wait(2000);
    // Habits
    cy.get(
      "#habits > :nth-child(1) > :nth-child(4) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    cy.wait(2000);
    //other Text Field
    cy.get("#habits_text")
      .first()
      .scrollIntoView()
      .type("For testing Purpose", { force: true });
    cy.wait(2000);

    //Religious / Cultural / Spiritual
    //Religion
    cy.get(
      "#religion > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    )
      .first()
      .click({ force: true });
    cy.wait(2000);
    // Are there any religious cultural practices that need to be a part of your care
    cy.get(".ant-col-19 > .ant-radio-wrapper > .ant-radio > .ant-radio-input")
      .first()
      .click({ force: true });
    cy.wait(2000);

    //List Problems / Needs Identified based on Initial Assessment
    cy.get(".ant-select-selector").first().click({ force: true });
    cy.contains(
      "Risk for fall related to disease process evidence by use of assistive device"
    ).click();
    cy.wait(2000);
    //DISCHARGE PLANNING (To be initiated at the time of admission)
    //Will patient require care at home?
    cy.get(
      "#will_patient_require_care_at_home > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Will patient require transportation to go home?
    cy.get(
      "#require_transportation > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Will patient require physiotherapy to go home?*
    cy.get(
      "#require_home_physiotherapy > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Is home oxygen therapy anticipated?*
    cy.get(
      "#oxygen_therapy_anticipated > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Is home medical equipment anticipated?*
    cy.get(
      "#medical_equipment_anticipated > .ant-row > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Who will take care of patient at home?*
    cy.get(
      "#who_will_take_care_of_patient_at_home > :nth-child(1) > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    cy.wait(2000);
    //Any other needs anticipated?*
    cy.get(
      "#any_other_needs_anticipated > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    cy.wait(2000);
    //Save
    // cy.get(".ant-col-8 > .ant-btn").click({ force: true });
  });
});
