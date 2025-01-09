import ecare from "./ECare_url.cy";

describe("Login and Dashboard", () => {
  beforeEach(() => {
    cy.visit(ecare);
    cy.viewport("macbook-15");
  });
  it("Dasboard", () => {
    cy.ElderlyCare_Login("1qr", 123);
    cy.wait(1500);
    cy.get(
      ":nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get('div[aria-selected="false"] div').click();
    cy.get(
      '[data-row-key="366"] > .ant-table-column-sort > .list-style > div > .ant-typography'
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    const dropdownSelector = ":nth-child(3) > .ant-collapse-header > div"; // Replace with the actual selector for the dropdown
    const saveButtonSelector = ".save-btn"; // Replace with the actual selector for the save button

    // Check that the dropdown is blue when no fields are filled
    cy.get(dropdownSelector).should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );

    // Fill one of the fields
    cy.get(dropdownSelector).click({ multiple: true });
    cy.wait(2000);

    cy.get(dropdownSelector)
      .should("be.visible") // Ensure it is now visible
      .click(); // Now interact with the visible element

    cy.get('input[name="exer_low_mod_act"]').eq(0).click();

    // Click Save
    cy.get(saveButtonSelector).click();
    cy.get(".ant-message-notice-content").should("be.visible");
    // Check that the dropdown turns grey
    cy.get(dropdownSelector).should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );
  });
});
