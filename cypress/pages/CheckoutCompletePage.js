
class CheckoutCompletePage {

    elements = {

        title: () => cy.get('.title'),
        successMessage: () => cy.get('[data-test="complete-header"]'),
        backHomeButton: () => cy.get('[data-test="back-to-products"]')

    }

    validarCheckoutCompleto() {
        cy.url().should('include', 'checkout-complete.html')
        this.elements.title().should('contain.text', 'Checkout: Complete!')
        this.elements.successMessage().should('contain.text', 'Thank you for your order!')
        
    }

    voltarParaProdutos() {
        this.elements.backHomeButton().click()
    }
}

export default new CheckoutCompletePage()
