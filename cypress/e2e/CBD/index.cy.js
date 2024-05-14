import CBD from "./CBD_url.cy";
import "cypress-file-upload";
import { upload } from "./Upload_Document.cy";
import { login } from "./Login.cy";
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(CBD);
    // cy.viewport("macbook-16");
  });

  // it("Login", () => {
  //   cy.get("#loginForm_email").type("11116");
  //   cy.get("#loginForm_password").type("123");
  //   cy.get(".ant-btn").click();
  //   cy.get(".ant-notification-notice").should("exist");
  // });

  it("Upload", () => {
    cy.get("#loginForm_email").type("11116");
    cy.get("#loginForm_password").type("123");
    cy.get(".ant-btn").click();
    cy.get(".ant-notification-notice").should("exist");
    // Upload Document Page
    cy.get(`a[href="/upload_docs"]`).click();
    // cy.wait(1000)
    cy.get(".ant-input").type("202030{enter}");
    // cy.wait(1000)

  //   //Admission Type
  //   cy.get(":nth-child(1) > .ant-radio > .ant-radio-input").click();
  //   cy.get(".ant-notification-notice").should("exist");

  //   //Document Type
  //   cy.get("#rc_select_0").click();
  //   cy.contains("CNIC Card of Patient - Front").click();

  //   // Browse Document
  //   cy.get("#attachment").selectFile(
  //     "C:\\Users\\shaharyar.aziz\\Downloads\\Corporate Portal Checklist.pdf"
  //   );
  //   cy.get(".ant-btn").click();
  // });
  // it("In-Patient Reservation", () => {
  //   // Login
  //   cy.get("#loginForm_email").type("11116");
  //   cy.get("#loginForm_password").type("123");
  //   cy.get(".ant-btn").click();
  //   cy.get(".ant-notification-notice").should("exist");

  //   //In-Patient Reservation Page
  //   cy.get(`a[href="/form"]`).click();
  //   // cy.wait(5000);
  //   cy.get(".ant-select-selector").click();
  //   //Doctor Select
  //   cy.contains("Qamar Hafeez Kiani (General Surgeon)").click();
    //MR NO
    // cy.get(".ant-input").type(202018);
    // cy.get(":nth-child(1) > .ant-btn").click()
  });
});
