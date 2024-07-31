import IPD from "./IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-13");
  });
  it("Login", () => {
    cy.login("1qr", "123");

    cy.contains("span", "Select Location").click();
    cy.contains("span", "D-3").eq(1)
    cy.get('div[aria-selected="true"] div').click()
    cy.wait(1500);

    cy.get('a[href="/shifa/dashboard"] p').click();
    cy.wait(1000);
    cy.get('div[role="menuitem"]').eq(1).click();

    cy.get('a[href="/shifa/admission/adult"]').click();
  });
});
