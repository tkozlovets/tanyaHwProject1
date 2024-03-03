import BasePage from "./BasePage";

class LoginPage extends BasePage {

    visit() {
        cy.log('Open authorization form');
        cy.visit('/#/login');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }

    getEmailField() {
        return cy.get('[aria-label="Text field for the login email"]');

    }

    getPasswordField() {
        return cy.get('[aria-label="Text field for the login password"]');
    }

    getLoginButton() {
        return cy.get('#loginButton');
    }

    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getProfileLink() {
        return cy.get('span:contains("tk@gmail.com")');
    }

    getErrorMessageText() {
        return cy.get('.ng-star-inserted');

    }



    fillLoginFields(email = '', password = '') {
        cy.log('Fill in authorization fields');
        email ? this.getEmailField().type(email) : cy.log('Skip email field');
        password ? this.getPasswordField().type(password) : cy.log('Skip password field');
        this.getLoginButton().click();
    }

}



export default new LoginPage()