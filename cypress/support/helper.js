export function findProduct(productName) {

        cy.get('#searchQuery').click();
        cy.get('#mat-input-0').type(`${productName}`);
        cy.get('#mat-input-0').type('{enter}');
        cy.get('[aria-label="Add to Basket"]').click();
        cy.get('span:contains("shopping_cart")').click();
        cy.get('.mat-row.cdk-row.ng-star-inserted').should('contain', `${productName}`);

}

export function solveCaptcha() {

        cy.get('#captcha').then(($question) => {
                const questionText = $question.text();
                const result = eval(questionText);

                // Fill out the captcha input field with the result
                cy.get('[placeholder="Please enter the result of the CAPTCHA."]').type(result);

        });

}







