import BasePage from "./BasePage";
class RegistrationPage extends BasePage {

    visit() {
        cy.log('Open registration form');
        cy.visit('/#/register');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }

    getEmailField() {
       return cy.get('[aria-label="Email address field"]');
    }

    getPasswordField() {
        return cy.get('[aria-label="Field for the password"]');

    }

    getConfirmPasswordField() {
        return cy.get('[aria-label="Field to confirm the password"]');
    }

    getSecretQuestionDropdown() {
        return cy.get('.mat-select-arrow-wrapper .mat-select-arrow');
    }

    selectSecretQuestion() {
        return cy.get('span:contains("maiden name?")');
    }

    answerSecretQuestion() {
        return cy.get('[placeholder="Answer to your security question"]');
    }

    getRegisterButton() {
        return cy.get('#registerButton');
    }

    getLoginLabel() {
        return cy.contains('h1', 'Login');
    }

    }


export default new RegistrationPage()





