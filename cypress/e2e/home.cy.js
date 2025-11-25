import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'

describe('Smoke Tests - Fluxos principais da aplicação', () => {

    it('Deve acessar a página inicial', () => {
        LoginPage.acessarSite()
        LoginPage.elements.logo().should('contain.text', 'Swag Labs')
    })

    it('Deve logar com sucesso', () => {
        cy.login()
        InventoryPage.validarPaginaAposLogin()
    })

    it('Deve abrir o carrinho', () => {
        cy.login()
        InventoryPage.abrirCarrinho()
        CartPage.validarPaginaCarrinho()
    })

    it('Deve adicionar a Backpack ao carrinho', () => {
        cy.prepararCarrinho(['backpack'])
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack')
    })

    it('Deve finalizar a compra da Backpack com sucesso', () => {
        cy.checkoutCompleto(['backpack'])
        CheckoutCompletePage.voltarParaProdutos()
        InventoryPage.validarPaginaAposLogin()
    })
})
