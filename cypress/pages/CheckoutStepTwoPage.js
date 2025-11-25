
class CheckoutStepTwoPage {

    elements = {
        title: () => cy.get('.title'),
        finishButton: () => cy.get('[data-test="finish"]')
    }
    validarCheckoutStepTwo() {
        cy.url().should('include', 'checkout-step-two.html')
        this.elements.title().should('contain.text', 'Checkout: Overview')
    }

    finalizarCompra() {
        this.elements.finishButton().click()
    }
}

export default new CheckoutStepTwoPage()