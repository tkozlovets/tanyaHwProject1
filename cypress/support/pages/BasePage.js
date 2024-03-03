export default class BasePage {

    // constructor() {
    //     this.dropdown = '.dropdown';
    //     this.button = '.button';
    // }
    //
    getSearchInput() {
        return cy.get('[data-mat-icon-type="font"]');
    }
    //
    // getContentPanel() {
    //     return cy.get('#filter_keyword');
    // }

}