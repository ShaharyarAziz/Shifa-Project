describe("Login with OTP Tests", () => {
    beforeEach(()=>{
        cy.visit("https://devemropdnew.shifa.com.pk/")
    })
    it('Login', () => {
        cy.get('#loginForm_username').type("17378")
        cy.get('#loginForm_password').type("123")
        cy.get('.ant-btn').click() 
    }); 
    it('forgot', () => {
        
    });
});
