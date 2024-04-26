// In your Cypress test file

describe("Login with OTP Tests", () => {
  beforeEach(() => {
    cy.visit("https://devcorporateportal.shifa.com.pk/")
    cy.get('#loginForm_username').type('29920_Y77');
    cy.get('#loginForm_password').type('Complex@123');
    cy.get('.ant-btn > :nth-child(1)').click();
    // // Wait for the OTP screen to appear
cy.request('https://mail.shifa.com.pk/?_h=1bbc28f376f391bc84bc214ff415203e/')
.then(html=>{
  const otpline=html.body.match(/.*Axigen.*/)
  console.log("otp is"+otpline);
})
  });

  it("should input OTP after login", () => {
    // This test case verifies that the user can input OTP after successful login
  });
});
