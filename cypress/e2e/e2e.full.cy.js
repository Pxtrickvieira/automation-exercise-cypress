import InventoryPage from '../pages/InventoryPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'

describe('Fluxo End-to-End completo', () => {

    it('Deve realizar toda a compra do início ao fim', () => {
        cy.checkoutCompleto(['backpack'])
        CheckoutCompletePage.voltarParaProdutos()
        InventoryPage.validarPaginaAposLogin()
    })
})
