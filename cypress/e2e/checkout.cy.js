import InventoryPage from '../pages/InventoryPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage'

describe('Checkout Tests', () => {

    it('Deve validar que está no Checkout Step Two após preparar checkout', () => {
        cy.prepararCheckout(['backpack'])
        cy.url().should('include', 'checkout-step-two')
        CheckoutStepTwoPage.validarCheckoutStepTwo()
    })

    it('Deve avançar para o Step Two após preencher dados (fluxo já incluso)', () => {
        cy.prepararCheckout(['backpack'])
        cy.url().should('include', 'checkout-step-two')
    })

    it('Deve finalizar a compra com sucesso', () => {
        cy.checkoutCompleto(['backpack'])
        CheckoutCompletePage.validarCheckoutCompleto()
    })

    it('Deve retornar para produtos após finalizar', () => {
        cy.checkoutCompleto(['backpack'])
        CheckoutCompletePage.voltarParaProdutos()
        InventoryPage.validarPaginaAposLogin()
    })
})
