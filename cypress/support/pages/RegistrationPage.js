import BasePage from "./BasePage";
class RegistrationPage extends BasePage {

    visit() {
        cy.log('Open registration form');
        cy.visit('/#/register');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }
}





export default new RegistrationPage()