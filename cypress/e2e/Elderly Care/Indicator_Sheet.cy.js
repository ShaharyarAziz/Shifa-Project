import ecare from "./ECare_url.cy";

describe("Indicator Sheet", () => {
  beforeEach(() => {
    cy.visit(ecare);
    cy.viewport("macbook-16");
  });
  it("", () => {
    cy.ElderlyCare_Login("1qr", 123);
    cy.wait(1500);
    cy.get(".ant-menu-submenu-title").click();
    cy.get('a[href="/elderly-indicator-sheet"]').click();
    cy.wait(2000);
    cy.get(".ant-radio-wrapper-checked > :nth-child(2)").should("be.visible");
    cy.get(".ant-radio-group > :nth-child(2) > :nth-child(2)").should(
      "be.visible"
    );
    //Inactive
    cy.get(":nth-child(2) > .ant-radio > .ant-radio-input").click();
  });
});
