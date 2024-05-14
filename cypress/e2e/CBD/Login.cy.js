export const login = () => {
  it("Choose File", () => {
    cy.get("#loginForm_email").type("11116");
    cy.get("#loginForm_password").type("123");
    cy.get(".ant-btn").click();
    cy.get(".ant-notification-notice").should("exist");
  });
};

