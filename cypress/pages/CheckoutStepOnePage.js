class CheckoutStepOnePage {

    elements = {
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        title: () => cy.get('.title')
    }

    validarCheckoutStepOne() {
        cy.url().should('include', 'checkout-step-one.html')
        this.elements.title().should('contain.text', 'Checkout: Your Information')
    }

    preencherDados(first, last, postal) {
        if (first) {
            this.elements.firstName().type(first)
        }

        if (last) {
            this.elements.lastName().type(last)
        }

        if (postal) {
            this.elements.postalCode().type(postal)
        }
    }

    clicarContinue() {
        this.elements.continueButton().click()
    }
}

export default new CheckoutStepOnePage()