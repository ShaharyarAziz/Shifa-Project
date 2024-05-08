const  Login_File=()=> {
  describe("Login Test Cases", () => {
    it("Valid Username and Password", () => {
      cy.get("#loginForm_username").type(17378);
      cy.get("#loginForm_password").type(123);
      cy.get(".ant-btn").click();
    });
  });
}
export default Login_File
