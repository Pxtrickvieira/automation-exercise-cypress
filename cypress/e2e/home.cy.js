import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage' 

describe('Home Page', () => {

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

    it('Deve adicionar a mochila ao carrinho', () => {
        cy.prepararCarrinho(['backpack'])
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack')
    })

    it('Deve finalizar compra da Backpack', () => {
        cy.checkoutCompleto(['backpack'])
        CheckoutCompletePage.voltarParaProdutos()
        InventoryPage.validarPaginaAposLogin()
    })
})
