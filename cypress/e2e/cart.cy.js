import CartPage from '../pages/CartPage'
import InventoryPage from '../pages/InventoryPage'

describe('Cart Tests', () => {

    beforeEach(() => {
        cy.prepararCarrinho(['backpack'])
    })

    it('Deve validar que está na página do carrinho', () => {
        CartPage.validarPaginaCarrinho()
    })

    it('Deve validar que o produto está no carrinho', () => {
        cy.get('.cart_item').should('have.length', 1)
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack')
    })

    it('Deve remover o produto do carrinho', () => {
        CartPage.removerItem()
        cy.get('.cart_item').should('have.length', 0)
    })

    it('Deve voltar para a página de produtos', () => {
        CartPage.continuarComprando()
        InventoryPage.validarPaginaAposLogin()
    })

    it('Deve ir para o checkout', () => {
        CartPage.irParaCheckout()
        cy.url().should('include', 'checkout-step-one.html')
    })
})
