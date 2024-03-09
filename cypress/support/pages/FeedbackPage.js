import BasePage from "./BasePage";

class FeedbackPage extends BasePage {

    getMenuIcon() {
        return cy.get('span:contains("menu")');
    }

    getFeedbackLink() {
        return cy.get('i:contains("feedback")');
    }

    getCommentField() {
        return cy.get('#comment');
    }

    getFeedbackRating() {
        return cy.get('.mat-slider-ticks').last();
    }


}


export default new FeedbackPage()