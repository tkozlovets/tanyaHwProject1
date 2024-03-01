import BasePage from "./BasePage";
class ProfilePage extends BasePage {

    visit() {
        cy.log('Open Profile page');
        cy.visit('/profile');
    }

    getProfileEmail() {
        return cy.get('#email');

    }

}

export default new ProfilePage()

