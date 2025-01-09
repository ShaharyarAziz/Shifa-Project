import IPD from "../../IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-11");
  });
  it("Login", () => {
    cy.IPD_login("17378", "123");

    cy.get(".ant-select-selector").click();
    cy.contains("C-3").click({ force: true });    // cy.contains('span', 'Location change successfully')
    //lOGIN Password
    // cy.get("#loginForm_password").type(123);
    // cy.get(".ant-btn").click();
    //Patient Select
    cy.wait(2000);
    cy.get("body").then(($body) => {
      // If the patient list is visible, click on the patient
      if (
        $body.find(
          '[data-row-key="AE0734"] > :nth-child(4) > .ant-row > a > .patient-name-text'
        ).length > 0
      ) {
        cy.get(
          '[data-row-key="AE0734"] > :nth-child(4) > .ant-row > a > .patient-name-text'
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
    cy.contains("span", "Initial Nursing Assessment (Adult)").click({ force: true });
    //Nursing Assessment Form
    //Mode Of Admission
    //OPD
    // cy.get(
    //   "#mode_of_admission > .ant-row > .ant-col-14 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    // ).click();
    //ER
    cy.get(
      "#mode_of_admission > .ant-row > .ant-col-10 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    //Mode of Transportation
    cy.get(
      "#mode_of_transportation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click({ force: true });

    //Level of Conscious
    //Oriented To
    //Time
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //Place
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click({ force: true });
    //Person
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > .ant-col-6 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner"
    ).click({ force: true });

    //Update
    cy.get(".ant-col-8 > .ant-btn").click({ force: true });
  });
});
