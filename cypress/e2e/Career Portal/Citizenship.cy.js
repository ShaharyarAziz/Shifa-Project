import CareerPortal_login from "./CP_url.cy.js";
import "cypress-file-upload";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(CareerPortal_login);
    cy.viewport("macbook-16");
    cy.CareerPortal_login("zohaibuii@gmail.com", "admin123");
  });
  it("Dashboard", () => {
    cy.wait(1000);
    cy.get("i.upload-button").click();
    cy.get("i.fa-camera").should("be.visible");
    // Wait for the file input to appear and attach the file
    const fileName = "profile-picture.jpg";
    cy.get('input[type="file"]').should("exist").attachFile(fileName);

    // Verify the upload by checking for a success message or the presence of the uploaded file
    cy.contains("Profile picture uploaded successfully").should("be.visible");
  });
});
