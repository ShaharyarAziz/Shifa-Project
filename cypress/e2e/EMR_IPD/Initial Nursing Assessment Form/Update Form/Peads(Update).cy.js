import IPD from "../../IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-16");
  });
  it("Orientation To Disable Issue", () => {
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
    cy.contains("span", "Initial Nursing Assessment (Peads)").click();
    cy.wait(2000);
    //Mode Of Admission
    cy.get(
      "#mode_of_admission > .ant-row > .ant-col-14 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();
    //Mode of Transportation
    cy.get(
      "#mode_of_transportation > :nth-child(1) > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).click();

    //Cognition / Perception Pattern
    //Level of Conscious
    //Oriented To
    //Time
    // cy.get(
    //   "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    // ).click();
    //Place
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > :nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();
    //Person
    cy.get(
      "#level_of_conscious_oriented_to1 > .ant-row > .ant-col-6 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();

    // Verify the first radio button is disabled
    cy.get(
      "#level_of_conscious_oriented_to2 > .ant-row > :nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).should("be.disabled");

    // Verify the second radio button is disabled
    cy.get(
      "#level_of_conscious_oriented_to2 > .ant-row > :nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).should("be.disabled");

    // Verify the third radio button is disabled
    cy.get(
      "#level_of_conscious_oriented_to2 > .ant-row > .ant-col-14 > .ant-radio-wrapper > .ant-radio > .ant-radio-input"
    ).should("be.disabled");

    //Update
    cy.get(".ant-col-8 > .ant-btn").click({ force: true });
  });
});
