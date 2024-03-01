import user from '../fixtures/user.json'
import LoginPage from "../support/pages/LoginPage";
import ProfilePage from "../support/pages/ProfilePage";


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

// describe('Authorization negative scenarios', () => {
//
//     it('Authorization without entered username', () => {
//         LoginPage.visit();
//         LoginPage.fillLoginFields('', user.password);
//
//         cy.log('Error should be displayed');
//         LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
//     })
//
//
//     it('Authorization without entered password', () => {
//         LoginPage.visit();
//         LoginPage.fillLoginFields(user.loginname);
//
//         cy.log('Error should be displayed');
//         LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
//     })
//
//     it('Authorization with empty fields', () => {
//         LoginPage.visit();
//         LoginPage.fillLoginFields();
//
//         cy.log('Error should be displayed');
//         LoginPage.getErrorMessageText().should('contain', 'Incorrect login or password provided.');
//     })
//
//
// })