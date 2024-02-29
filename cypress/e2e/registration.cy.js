

import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import RegistrationPage from '../support/pages/RegistrationPage';

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'user.firstname', lastName: 'user.lastname',
  provider: 'some.fakeMail.qa', allowSpecialCharacters: false });

user.loginname = faker.internet.userName();


describe('Positive scenario. Registration form fill out', () => {
  it('Open registration form', () => {
    cy.log('Open registration form');
    RegistrationPage.visit();

    cy.log('Fill out email field');
    RegistrationPage.getEmailField().type(user.email);

    cy.log('Fill out password field');
    RegistrationPage.getPasswordField().type(user.password);

    cy.log('Fill out password field');
    RegistrationPage.getConfirmPasswordField().type(user.password);

    cy.log('Click Secret question Dropdown');
    RegistrationPage.getSecretQuestionDropdown().click();

    cy.log('Select Secret question');
    RegistrationPage.selectSecretQuestion().click();

    cy.log('Answer Secret question');
    RegistrationPage.answerSecretQuestion().type(user.secretquestion);

    cy.log('Click Register Button');
    RegistrationPage.getRegisterButton().click();

    cy.log('Check redirect to Login Page');
    RegistrationPage.getLoginLabel().should('be.visible');

  })
})

  describe('Negative scenario. Registration with empty mandatory field. ', () => {
  it('To check Registration button is disabled', () => {
    cy.log('Open registration form');
    RegistrationPage.visit();

    cy.log('Fill out email field');
    RegistrationPage.getEmailField().type(user.email);

    cy.log('Fill out password field');
    RegistrationPage.getPasswordField().type(user.password);

    // cy.log('Fill out password field');
    // RegistrationPage.getConfirmPasswordField().type('');

    cy.log('Click Secret question Dropdown');
    RegistrationPage.getSecretQuestionDropdown().click();

    cy.log('Select Secret question');
    RegistrationPage.selectSecretQuestion().click();

    cy.log('Answer Secret question');
    RegistrationPage.answerSecretQuestion().type(user.secretquestion);

    cy.log('Click Register Button');
    RegistrationPage.getRegisterButton().should('have.attr', 'disabled');

    })

  })





