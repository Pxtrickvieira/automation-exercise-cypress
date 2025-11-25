import CartPage from '../pages/CartPage'
import InventoryPage from '../pages/InventoryPage'

describe('Inventory Tests', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Valida página', () => {
        InventoryPage.validarPaginaAposLogin()
    })

    it('Adiciona mochila ao carrinho', () => {
        cy.adicionarItem('backpack')
        InventoryPage.abrirCarrinho()
        CartPage.validarPaginaCarrinho()
    })
})
