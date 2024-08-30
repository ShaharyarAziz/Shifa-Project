import IPD from "../IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-11");
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
    });
    //Nurses
    cy.get('div[role="menuitem"]').eq(1).click();
    //Initial Nursing Assessment form Page
    cy.get('a[href="/shifa/admission/neonates"]').click();

    //Patient Belongings
    //Yes
    cy.get(
      "#patient_belongings > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Patient Personal Belongings Dialog bog open
    cy.get(
      '[style="margin-left: 8px; order: 2;"] > .anticon-edit > svg > [d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"]'
    ).click({ force: true });
    //Patient / family informed about hospital's "Patient Valueables" policy*
    cy.get(
      '[style="margin-left: -8px; margin-right: -8px; row-gap: 4px;"] > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner'
    ).click({ force: true });
    //Handed Over To
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();
    //Dropdown
    cy.contains("Father").click({ force: true });
    //Name
    cy.get("#handed_over_to_name").type("Testing");
    //Submit
    cy.get(
      '[style="padding-left: 8px; padding-right: 8px; text-align: right;"] > .ant-btn'
    ).click();

    // No
    // cy.get('#patient_belongings > .ant-row > .ant-col-11 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //Mode Of Admission
    //OPD
    cy.get(
      "#mode_of_admission > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //ER
    // cy.get('#mode_of_admission > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //OR
    // cy.get('#mode_of_admission > .ant-row > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //L&D
    // cy.get('#mode_of_admission > .ant-row > :nth-child(4) > .ant-radio-wrapper > .ant-radio').click()

    //Mode of Tranportation
    //Cot
    cy.get(
      "#mode_of_transportation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Incuba
    // cy.get('#mode_of_transportation > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //Other
    // cy.get('#mode_of_transportation > :nth-child(1) > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //Type
    // cy.get('#mode_of_transporation_text').type("Testing Purpose")

    //Accompanied By
    //Doctor
    cy.get("#mode_of_transporation_text").click({ force: true });
    //Nurse
    cy.get(
      "#accompanied_by > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //RTS
    cy.get(
      "#accompanied_by > .ant-row > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //ID Band Applied
    //YES
    cy.get(
      "#id_band_applied > .ant-row > .ant-col-12 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //NO
    // cy.get('#id_band_applied > .ant-row > .ant-col-11 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

    //Arrival Date
    cy.get("input#arrival_date").click();
    cy.get("td.ant-picker-cell-start div").eq(0).click();
    //Arrival Time
    cy.get("input#arrival_time").click();
    cy.contains("a", "Now").click();
    //Presenting Complaints
    cy.get("#presenting_complaint").type("Testing");

    //Communicable Disease
    //Active TB
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Cholera
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner'
    ).click({ force: true });
    //Maningtis
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Influenza
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(5) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Chicken pox
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(6) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Measles
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 0px;"] > :nth-child(7) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Other
    cy.get(
      ".ant-col-1 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //type
    cy.get("#communicable_disease_text").type("Testing");

    //Isolation Type
    //Standard
    // cy.get('#isolation_type > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click();
    //Contact
    cy.get(
      "#isolation_type > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Droplet
    // cy.get('#isolation_type > :nth-child(1) > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //Airborne
    // cy.get('#isolation_type > :nth-child(1) > :nth-child(4) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //Neutropenic
    // cy.get('#isolation_type > :nth-child(1) > :nth-child(5) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //other
    cy.get(
      ".ant-col-xxl-1 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Type
    cy.get("#isolation_type_text").type("Testing");

    //Gestational Age*
    cy.get("#gestational_age").type("783", {
      force: true,
    });
    //Current Weight*
    cy.get("#weight_in_grams").type(90);
    // Gestational Age*

    cy.get("#gestational_age").type(90, { force: true });
    //Height
    cy.get("#birth_height").type("6734", { force: true });
    //APGAR Score *
    cy.get("#apgar_score").type(321, { force: true });
    //H - Circumference*
    cy.get("#head_circumference").type(763, { force: true });

    //Patient / Family has been oriented to the following *
    //Hospital Valuable Policy
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner'
    ).click({ force: true });
    //No food / fruit allowed
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Visiting Hours
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Prayer Area
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //No gift policy
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(5) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Doctors round time
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(6) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Nursing Shift Timing
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(7) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    // NICU Visiting Policy
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(8) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //NICU Protocol
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > :nth-child(7) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    // Other
    cy.get(
      '#patient_family_has_been_oriented_to_the_following > [style="row-gap: 12px;"] > .ant-col-3 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click({ force: true });
    //Type
    cy.get("#unit_and_family_orientation_text").type("Testing");

    //Unit and Family Orientation
    //Patient/ Family are given following Items/ Information on admission: *
    //Patient Engagement in handover
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Religious Services
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Patient Personal Kit
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Patient Bill of Rights
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Emergency Exit
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(5) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //NICU Booklet
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(6) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Maternal Facilitation Room
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > :nth-child(7) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Kangroo Care Room
    cy.get(
      '[style="row-gap: 12px;"] > .ant-col-16 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Other
    cy.get(
      '#patient_family_are_given_following_items_information_on_admission > [style="row-gap: 12px;"] > .ant-col-3 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    ).click();
    //Type
    cy.get("#unit_and_family_orientation_items_text").type("Testing");

    //Immunization
    //Complete
    // cy.get(
    //   "#immunization > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    // ).click();
    //Incomplete
    cy.get(
      "#immunization > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Birth
    //BCG/OPV
    cy.get(
      "#immunization_schedule > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //DPT-HEP B-Hib OPV, PCV Hib
    cy.get(
      "#immunization_schedule > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //DPT-HEP B-Hib OPV, PCV Hib
    cy.get(
      "#immunization_schedule > .ant-row > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //DPT-HEP B-Hib OPV, PCV Rotavirus
    cy.get(
      "#immunization_schedule > .ant-row > :nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //Not Known
    // cy.get('.ant-col-16 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

    //Neonatal Pain Assessment form
    cy.get("#nips_assessment").click({ force: true });
    //Facial Expression*
    // cy.get(
    //   "#facial_expression > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    // ).click({ force: true });
    cy.get(
      "#facial_expression > :nth-child(1) > .ant-col-7 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });
    //Cry
    cy.get(
      "#cry_nips > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });
    //Breathing *
    cy.get(
      "#breathing_pattern > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });
    //Arms
    cy.get(
      "#arms > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });
    //Legs
    cy.get(
      "#legs_nips > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });
    //Alertness
    cy.get(
      "#state_arousal > :nth-child(1) > .ant-col-5 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });
    //Submit
    cy.get(
      '[style="padding: 20px 0px 0px 10px; row-gap: 0px;"] > .ant-col > .ant-btn'
    ).click({ force: true });
    cy.get(".total_span").should("have.text", "Total Score = 1");

    //Level of Conscious*
    // Unresponsive
    cy.get(
      "#level_of_conscious_oriented_to > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    // Alert
    // cy.get(
    //   "#level_of_conscious_oriented_to > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    // ).click();
    // Lethargic
    // cy.get(
    //   "#level_of_conscious_oriented_to > .ant-row > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    // ).click();
    //Tone
    // Normal
    cy.get(
      '#cognition_tone > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    ).click();
    // Hypertonic
    // cy.get(
    //   '#cognition_tone > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    // ).click();
    // Hypotonic
    // cy.get(
    //   '#cognition_tone > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    // ).click();
    //Hypertonic
    // cy.get(
    //   '#cognition_tone > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    // ).click();
    // Irritable
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > :nth-child(4) > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    ).click();

    // Other
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > .ant-col-3 > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    ).click();
    //type
    cy.get("#cognition_tone_text").type("Testing");
    // Red Reflex*

    // Present
    cy.get(
      '#cognition_red_reflex > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    ).click();
    // Absent
    // cy.get(
    //   '#cognition_red_reflex > [style="margin-left: -4px; margin-right: -4px; row-gap: 8px;"] > .ant-col-8 > .ant-radio-wrapper > .ant-radio > .ant-radio-input'
    // ).click();
    //type
    // cy.get("#cognition_red_reflex_text").type("Testing", { force: true });

    //Nutrition Screnning

    // Feeding
    // Bottle
    cy.get(
      "#nutrition_screening_feeding > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Breast
    cy.get(
      "#nutrition_screening_feeding > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Cup
    cy.get(
      "#nutrition_screening_feeding > .ant-row > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //NPO
    cy.get(
      "#nutrition_screening_feeding > .ant-row > :nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //NGT/OGT
    cy.get(
      "#nutrition_screening_feeding > .ant-row > .ant-col-4 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();

    //Formula/supplements/special diet
    cy.get("#formula_supplement_peads").click();
    //type
    cy.get("#formula_supplement_comment_peads").type("testing");
    //Growth Chart Percentile for Height
    cy.get("#percentile_for_height").type(90);

    //NEONATAL SKIN RISK ASSESSMENT (NSRA) TOOL
    cy.get("#nsra_assessment").click();
    //Current Gestational Age
    cy.get(
      "#current_gestational_age > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    // Sensory Perception
    cy.get(
      "#sensory_perception > :nth-child(2) > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Activity/ Mobility
    cy.get("#activity_mobility > :nth-child(3) > .ant-radio").click({
      force: true,
    });
    //Moisture
    cy.get("#moisture > :nth-child(2) > .ant-radio").click({ force: true });
    // Respiratory Support
    cy.get(
      "#respiratory_support > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    // ASkin Integrity
    cy.get(
      "#skin_integrity > :nth-child(3) > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    // Blood Collection
    cy.get(
      "#blood_collection > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    // Nutrition
    cy.get("#nutrition > :nth-child(4) > .ant-radio > .ant-radio-inner").click({
      force: true,
    });
    //Submit
    cy.get(".ant-form-item-control-input-content > .ant-btn").click({
      force: true,
    });
    //Umbilical Stump
    //Shed Off
    cy.get(
      "#umbilical_stump > :nth-child(1) > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Wet
    // cy.get('#umbilical_stump > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //Dry
    // cy.get('#umbilical_stump > :nth-child(1) > :nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()
    //type
    // cy.get('#umbilical_stump_inorm_to_doctor').type("testing")

    //Drains
    //Yes
    cy.get(
      "#drains > .ant-row > .ant-col-3 > .ant-radio-wrapper > .ant-radio > .ant-radio-inner"
    ).click({ force: true });
    //Chest
    cy.get("#pleural").click();
    //Site
    cy.get("input#drains_pleural_site").click({ force: true });
    cy.get('div[title=" Right "] div').click({ force: true });
    //DOI
    cy.get("#drains_pleural_doi", { timeout: 10000 }).click();
    // cy.wait(1000);
    cy.get("td.ant-picker-cell-selected div").click({ force: true });

    //Abdominal
    cy.get("#abdominal").click();
    //Site
    cy.get("div.ant-select-open div").click({ force: true });
    cy.get('div[title=" Left "] div').click({ force: true });
  });
});
