import IPD from "./IPD_URL.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(IPD);
    cy.viewport("macbook-16");
  });
  it("Login with valid credentials", () => {
    cy.IPD_login("17378", 123);
    cy.wait(2000);
    cy.get(":nth-child(1) > .pop > .logo").click();
    cy.wait(2000);
    
  });
});
