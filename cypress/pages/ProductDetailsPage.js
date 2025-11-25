
class ProductDetailsPage {

    elements = {
        productName: () => cy.get('[data-test="inventory-item-name"]'),
        productDescription: () => cy.get('[data-test="inventory-item-desc"]'),
        productPrice: () => cy.get('[data-test="inventory-item-price"]'),
        backButton: () => cy.get('[data-test="back-to-products"]')
    }

    validarPaginaDetalhes() {
        cy.url().should('include', 'inventory-item.html')

    }
    
    validarInformacoesProduto() {
        this.elements.productName().should('be.visible')
        this.elements.productDescription().should('be.visible')
        this.elements.productPrice().should('be.visible')
    }

    voltarParaProdutos() {
        this.elements.backButton().click()
    }
}

export default new ProductDetailsPage()
