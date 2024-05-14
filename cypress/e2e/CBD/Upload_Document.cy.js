export const upload = () => {
  it("Choose File", () => {
    // Upload Document Page
    cy.get(`a[href="/upload_docs"]`).click();
    cy.get(".ant-input").type("202030{enter}");
    //Admission Type
    cy.get(":nth-child(1) > .ant-radio > .ant-radio-input").click();
    //Document Type
    cy.get("#rc_select_0").click();
    cy.contains("Medical Card").click();

    // Browse Document
    cy.get("#attachment").selectFile(
      "C:\\Users\\shaharyar.aziz\\Downloads\\Corporate Portal Checklist.pdf"
    );
    cy.get(".ant-btn").click();
  });
};
