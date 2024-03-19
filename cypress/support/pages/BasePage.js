export default class BasePage {

    // constructor() {
    //     this.dropdown = '.dropdown';
    //     this.button = '.button';
    // }
    //
    getMenuIcon() {
        return cy.get('span:contains("menu")');
    }
    //
    // getContentPanel() {
    //     return cy.get('#filter_keyword');
    // }

}