import BasePage from "./BasePage";

class OrderPage extends BasePage {

    getCheckoutButton() {
        return cy.get('#checkoutButton');
    }


    getNewAddressButton() {
      return cy.get('[aria-label="Add a new address"]');
    }


    getCountryField() {
        return cy.get('[placeholder="Please provide a country."]');
    }


    getNameField() {
        return cy.get('[placeholder="Please provide a name."]');
    }

    getPhoneField() {
        return cy.get('[placeholder="Please provide a mobile number."]');
    }

    getZipcodeField() {
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }

    getAddressField() {
        return cy.get('[placeholder="Please provide an address."]');
    }

    getCityField() {
        return cy.get('[placeholder="Please provide a city."]');
    }

    getSubmitButton() {
        return cy.get('span:contains("Submit")');
    }

    getFirstAddressRadioButton() {
        return cy.get('span.mat-radio-container').first();
    }

    getAddressContinueButton() {
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    getDeliverySpeedButton() {
        return cy.get('span.mat-radio-inner-circle').first();
    }

    getAddressContinue1Button() {
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }

    getPaymentButton() {
        return cy.get('span.mat-radio-inner-circle').first();

    }

    getPaymentContinue2Button() {
        return cy.get('[aria-label="Proceed to review"]');
    }

    getPlaceOrderButton() {
        return cy.get('span:contains("monetization_on")');
    }

    getContentPanel() {
        return cy.get('h1:contains("Thank you for your purchase!")');
    }


}

export default new OrderPage()
