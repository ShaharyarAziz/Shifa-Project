import url from "./url.cy";
describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.viewport("macbook-13");
    // doctor_select()
  });
  it.only("Discharge Summary", () => {
    //Doctor Login
    cy.OPD_login("1qr", "123");
    cy.get("span.ant-dropdown-trigger img").click();
    cy.get("span.item-text").eq(1).click();
    cy.wait(2000);
    cy.get('img[alt="edit icon"]').eq(1).click();
    cy.wait(5000);

    //-----------------Discharge Summary----------------------------

    //Primary Diagnosis dropdown
    cy.get("input#prdiagnosis").click();
    cy.wait(2000);
    cy.contains("Basal cell carcinoma of skin of trunk").click();
    cy.get("button.add-btn-ds span").eq(0).click();
    cy.wait(2000);

    //Secondary Diagnosis Dropdown
    cy.get("input#scdiagnosis").click();
    cy.get("div.ant-select-item-option-active div").eq(1).click();
    cy.get("button.add-btn-ds span").eq(0).click();

    //Save Button
    cy.get("button.header-save-btn span").click();
  });
});
