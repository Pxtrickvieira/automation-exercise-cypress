
class CartPage {

    elements = {
        title: () => cy.get('.title'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        removeBackpackButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    validarPaginaCarrinho() {
        cy.url().should('include', '/cart.html')
        this.elements.title().should('contain.text', 'Your Cart')
    }

    irParaCheckout() {
        this.elements.checkoutButton().click()
    }

    continuarComprando() {
        this.elements.continueShoppingButton().click()
    }
    
    removerItem() {
        this.elements.removeBackpackButton().click()
    }
}

export default new CartPage()