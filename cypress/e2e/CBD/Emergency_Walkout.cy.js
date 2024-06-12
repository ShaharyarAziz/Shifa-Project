import CBD from "./CBD_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(CBD);
    cy.viewport("macbook-16");
    // cy.wait(2000);
  });
  it("Emergency Walkout", () => {
    cy.login("25403", "Shifa@1234");
    cy.wait(3000);
    cy.get('a[href="/emr_walk_form"]').click();

    //MRNO
    cy.get('input[placeholder="Enter MR No"]').type("202032{enter}");
    cy.get('div.ant-notification-notice-description div').eq(1).should("exist")
cy.wait(1000);
    //Currenty In Radio Button
    cy.get('input[type="radio"]').eq(0).click()
    //Panel
    cy.wait(1000)
    cy.get('input[aria-expanded="true"]').click()
    cy.contains('INDUS BANK LIMITED').click()
  });
});
