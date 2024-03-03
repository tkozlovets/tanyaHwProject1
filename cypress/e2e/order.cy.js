// import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'

import LoginPage from "../support/pages/LoginPage";
// import OrderPage from "../support/pages/OrderPage";


describe('Order suite', () => {
    it('Order from homepage', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields('tk@gmail.com', 'Qa123456+');

        findProduct("Apple Pomace");
    //
    //     // cy.get('.productpagecart').click()
    //     OrderPage.getAddToCartButton().click();
    //
    //     // cy.get('#cart_checkout1').click()
    //     OrderPage.getCheckoutButton().click();
    //
    //
    //     // cy.get('#checkout_btn').click()
    //     OrderPage.getConfirmOrderButton().click();
    //
    //     OrderPage.getContentPanel().should('contain', "Thank you for shopping with us!")
    })
})
