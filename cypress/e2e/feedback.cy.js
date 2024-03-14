
import LoginPage from "../support/pages/LoginPage";
import {solveCaptcha} from '../support/helper'
import FeedbackPage from "../support/pages/FeedbackPage";



describe('Feedback suite', () => {
    it('Completing Feedback form', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields('tk@gmail.com', 'Qa123456+');

        FeedbackPage.getMenuIcon().click();

        FeedbackPage.getFeedbackLink().click();

        FeedbackPage.getCommentField().type("Hello");

        FeedbackPage.getFeedbackRating().click();

        solveCaptcha();

        FeedbackPage.getSubmitButton().click();


                });

});







