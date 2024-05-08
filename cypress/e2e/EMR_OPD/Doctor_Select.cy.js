const doctor_select = () => {
  describe("Login Test Cases", () => {
    it("Valid Username and Password", () => {
      cy.get("#rc_select_0").click();
      cy.contains("Umar Yousaf Raja (Endocrinologist)").click();
    });
  });
};
export default doctor_select;
