
import LoginPage from "../support/pages/LoginPage";
import FeedbackPage from "../support/pages/FeedbackPage";
import user from "../fixtures/user.json";
import OrderPage from "../support/pages/OrderPage";


describe('Order suite', () => {
    it('Order from homepage', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields('tk@gmail.com', 'Qa123456+');

        FeedbackPage.getMenuIcon().click();

        FeedbackPage.getFeedbackLink().click();

    })
})
