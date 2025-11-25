import InventoryPage from '../pages/InventoryPage'

describe('Ordenação de Produtos', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Ordena A → Z', () => {  
        InventoryPage.ordenar('az')
        InventoryPage.validarOrdenacaoAZ()
    })

    it('Ordena Z → A', () => {
        InventoryPage.ordenar('za')
        InventoryPage.validarOrdenacaoZA()
    })

    it('Preço: menor → maior', () => {
        InventoryPage.ordenar('lohi')
        InventoryPage.validarOrdenacaoMenorMaior()
    })

    it('Preço: maior → menor', () => {
        InventoryPage.ordenar('hilo')
        InventoryPage.validarOrdenacaoMaiorMenor()
    })
})
