import BasePage from "./BasePage";

class FeedbackPage extends BasePage {

    getMenuIcon() {
        return cy.get('span:contains("menu")');
    }

    getFeedbackLink() {
        return cy.get('i:contains("feedback")');
    }
}




export default new FeedbackPage()