import ER from "./ER_url.cy";

describe("Main Login", () => {
  beforeEach(() => {
    cy.visit(ER);
    cy.viewport("macbook-16");
  });
  it("Login with valid credentials", () => {
    cy.ER_Token_Login("ER-Shifa", 123);
    // cy.wait(2000);

    //Emergency Index(A)

    cy.get(
      ":nth-child(2) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();

    //Do you have MR.NO
    cy.get("span.ant-radio-inner").eq(1).click({force: true});
    cy.get("#layout-multiple-vertical_mrno").type("202046");
    //Fever
    cy.get(
      "#layout-multiple-vertical_fever > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({force: true});
    //Shortness of Breath
    cy.get(
      "#layout-multiple-vertical_rash > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({force: true});
    //Rash
    cy.get(
      "#layout-multiple-vertical_sob > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({force: true});
    //Cough
    cy.get(
      "#layout-multiple-vertical_cough > :nth-child(1) > .ant-radio > .ant-radio-inner"
    ).click({force: true});


    cy.get('input[type="radio"]').eq(10).click({force: true});
    //Submit
    cy.get(".isolation-confirm-btn").click();
  });
});
