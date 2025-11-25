import InventoryPage from '../pages/InventoryPage'
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage'

describe('Totais e quantidades no Checkout', () => {

    beforeEach(() => {
        cy.prepararCheckout(['backpack', 'bike-light'])
    })

    it('Deve calcular corretamente o subtotal dos itens', () => {
       cy.validarSubtotal()
             
    })

    it('Deve manter a quantidade correta de itens até o checkout', () => {
        InventoryPage.validarQuantidadeCarrinho(2)
        cy.get('.cart_item').should('have.length', 2)
    })
})
