import demo from "./demo_blaze_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(demo);
    cy.viewport("macbook-16");
  });
  it("Sign Up", () => {
    cy.get("#signin2").click();
    cy.get("#signInModalLabel").should("have.text", "Sign up");
    cy.get("#sign-username").type("test987");
    cy.get("#sign-password").type("123");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });
  it.only("Login", () => {
    cy.get("#login2").click();
    cy.get("#loginusername").type("test9");
    cy.get("#loginpassword").type("123");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });
});
