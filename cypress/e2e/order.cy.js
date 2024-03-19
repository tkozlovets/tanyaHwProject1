// import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'
import {faker} from '@faker-js/faker'

import LoginPage from "../support/pages/LoginPage";
import OrderPage from "../support/pages/OrderPage";
import user from "../fixtures/user.json";

user.city = faker.location.city();


describe('Order suite', () => {
    it('Order from homepage', () => {
        LoginPage.visit();
        LoginPage.fillLoginFields('tk@gmail.com', 'Qa123456+');

        findProduct("Apple Pomace");

        OrderPage.getCheckoutButton().click();

        OrderPage.getNewAddressButton().click();

        OrderPage.getCountryField().type('Poland');

        OrderPage.getNameField().type('Tetiana');

        OrderPage.getPhoneField().type('1234545');

        OrderPage.getZipcodeField().type('1234');

        OrderPage.getAddressField().type('address test');

        OrderPage.getCityField().type(user.city);

        OrderPage.getSubmitButton().click();

        OrderPage.getFirstAddressRadioButton().click();

        OrderPage.getAddressContinueButton().click();

        OrderPage.getDeliverySpeedButton().click( {force: true});

        OrderPage.getAddressContinue1Button().click();

        OrderPage.getPaymentButton().click();

        OrderPage.getPaymentContinue2Button().click();

        OrderPage.getPlaceOrderButton().click();

        OrderPage.getContentPanel().should('contain', "Thank you for your purchase!")



    })
})


