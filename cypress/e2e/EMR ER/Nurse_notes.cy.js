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

    //Nurse Notes
    cy.contains("span", "Nurse Notes").click({ force: true });
    //Progress Notes
    cy.get('a[href="/er/nurse/notes"]').click({ force: true });

    //Shift
    cy.get("input#layout-multiple-vertical_shift_id").click({ force: true });
    cy.get('div[title="Evening"] div').click({ force: true });
    //Notes
    cy.get("textarea#layout-multiple-vertical_description").type(
      "Test Notes for testing the ER progress notes in the ER Triage system",{ force: true }
    );
    //Save
    cy.contains("span", "Save").click({ force: true });
  });
});
