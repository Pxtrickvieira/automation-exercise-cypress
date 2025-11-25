import CartPage from '../pages/CartPage'
import InventoryPage from '../pages/InventoryPage'

describe('Inventory Tests', () => {

    beforeEach(() => {
        cy.login()
        InventoryPage.validarPaginaAposLogin()
    })

    it('Deve validar página de inventário', () => {
        InventoryPage.validarPaginaAposLogin()
    })

    it('Deve adicionar a mochila ao carrinho com sucesso', () => {
        cy.adicionarItem('backpack')
        InventoryPage.abrirCarrinho()
        CartPage.validarPaginaCarrinho()
        CartPage.validarNomeDoProduto('Sauce Labs Backpack')
    })
})
