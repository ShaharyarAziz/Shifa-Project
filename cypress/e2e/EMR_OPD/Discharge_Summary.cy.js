import url from "./url.cy";
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.viewport("macbook-13");
    // doctor_select()
  });
  it.only("Discharge Summary", () => {
    //Doctor Login
    cy.get("#loginForm_username").type("1qr");
    cy.get("#loginForm_password").type(123);
    cy.get(".ant-btn").click();
    cy.get("span.ant-dropdown-trigger img").click();
    cy.get("span.item-text").eq(1).click();

    cy.get('img[alt="edit icon"]').eq(1).click();
  });
});
