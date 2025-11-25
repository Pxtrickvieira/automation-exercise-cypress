import InventoryPage from '../pages/InventoryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'

describe('Página de Detalhes do Produto', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Acessa a página de detalhes', () => {
        InventoryPage.acessarProdutoPeloNome('Sauce Labs Backpack')
        ProductDetailsPage.validarPaginaDetalhes()
    })

    it('Valida informações do produto', () => {
        InventoryPage.acessarProdutoPeloNome('Sauce Labs Backpack')
        ProductDetailsPage.validarInformacoesProduto()
    })

    it('Volta para inventário', () => {
        InventoryPage.acessarProdutoPeloNome('Sauce Labs Backpack')
        ProductDetailsPage.voltarParaProdutos()
        InventoryPage.validarPaginaAposLogin()
    })
})
