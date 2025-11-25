import CartPage from '../pages/CartPage'
import InventoryPage from '../pages/InventoryPage'

describe('Cart Tests', () => {

    beforeEach(() => {
        cy.prepararCarrinho(['backpack'])
        CartPage.validarPaginaCarrinho()
    })

    it('Deve validar que o produto está no carrinho', () => {
        CartPage.validarQuantidadeItems(1)
        CartPage.validarNomeDoProduto('Sauce Labs Backpack')
    })

    it('Deve remover o produto do carrinho', () => {
        CartPage.removerItem()
        CartPage.validarQuantidadeItems(0)
    })

    it('Deve voltar para a página de produtos', () => {
        CartPage.continuarComprando()
        InventoryPage.validarPaginaAposLogin()
    })

    it('Deve seguir para o checkout', () => {
        CartPage.irParaCheckout()
        CartPage.validarUrlCheckout()
    })
})
