export function findProduct(productName) {

        cy.get('#searchQuery').click();
        cy.get('#mat-input-0').type(`${productName}`);
        cy.get('#mat-input-0').type('{enter}');
        cy.get('[aria-label="Add to Basket"]').click();
        cy.get('span:contains("shopping_cart")').click();
        cy.get('.mat-row.cdk-row.ng-star-inserted').should('contain', `${productName}`);

}

export function solveCaptcha() {

                cy.get('#captcha').invoke('text').then((text) => {

                        const parts = text.split(' ');


                        const operand1 = parseInt(parts[0]);
                        const operator1 = parts[1];
                        const operand2 = parseInt(parts[2]);
                        const operator2 = parts[3];
                        const operand3 = parseInt(parts[4]);


                        let result;
                        switch (operator1) {
                                case '+':
                                        result = operand1 + operand2;
                                        break;
                                case '-':
                                        result = operand1 - operand2;
                                        break;
                                case '*':
                                        result = operand1 * operand2;
                                        break;
                                case '/':
                                        result = operand1 / operand2;
                                        break;

                        }

                        switch (operator2) {
                                case '+':
                                        result += operand3;
                                        break;
                                case '-':
                                        result -= operand3;
                                        break;
                                case '*':
                                        result *= operand3;
                                        break;
                                case '/':
                                        result /= operand3;
                                        break;

                        }

                        // Ввод результата в поле CAPTCHA
                        cy.get('[placeholder="Please enter the result of the CAPTCHA."]').type(`${result}`);



        });
}







