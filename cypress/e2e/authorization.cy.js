import user from '../fixtures/user.json'
import LoginPage from "../support/pages/LoginPage";



describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        LoginPage.visit();
        LoginPage.getEmailField().type('tk@gmail.com');
        LoginPage.getPasswordField().type('Qa123456+');
        LoginPage.getLoginButton().click();

        LoginPage.getAccountButton().click();
        LoginPage.getProfileLink().should('be.visible');


    })
})

describe('Authorization negative scenarios', () => {

    it('Authorization with incorrect email', () => {
        LoginPage.visit();
        LoginPage.getEmailField().type('tk1@gmail.com');
        LoginPage.getPasswordField().type('Qa123456+');
        LoginPage.getLoginButton().click();

        cy.log('Error should be displayed');
        LoginPage.getErrorMessageText().should('contain', 'Invalid email or password');
    })

})

describe('Authorization negative scenarios', () => {

    it('Authorization with empty email', () => {
        LoginPage.visit();
        LoginPage.getPasswordField().type('Qa123456+');


        cy.log('Login button should be disabled');
        LoginPage.getLoginButton().should('have.attr', 'disabled');
    })

})
