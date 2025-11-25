class CartPage {

    elements = {
        title: () => cy.get('.title'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        removeBackpackButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        cartItems: () => cy.get('.cart_item'),
        productName: () => cy.get('.inventory_item_name'),
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

    // 🔹 NOVO: validar quantidade de itens no carrinho
    validarQuantidadeItems(qtdEsperada) {
        this.elements.cartItems().should('have.length', qtdEsperada)
    }

    // 🔹 NOVO: validar o nome do produto no carrinho
    validarNomeDoProduto(nomeEsperado) {
        this.elements.productName().should('contain.text', nomeEsperado)
    }

    // 🔹 NOVO: validar que foi para a página de checkout
    validarUrlCheckout() {
        cy.url().should('include', 'checkout-step-one.html')
    }
}

export default new CartPage()
