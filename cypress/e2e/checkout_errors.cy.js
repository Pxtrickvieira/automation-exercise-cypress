import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CartPage from '../pages/CartPage'

describe('Testes Negativos de Checkout', () => {

    beforeEach(() => {
        cy.prepararCarrinho(['backpack'])
        CartPage.irParaCheckout()
        CheckoutStepOnePage.validarCheckoutStepOne()
    })

    it('Não deve avançar sem preencher First Name', () => {
        CheckoutStepOnePage.preencherDados('', 'QA', '12345')
        CheckoutStepOnePage.clicarContinue()
        cy.get('[data-test="error"]').should('contain.text', 'First Name is required')
    })

    it('Não deve avançar sem preencher Last Name', () => {
        CheckoutStepOnePage.preencherDados('João', '', '12345')
        CheckoutStepOnePage.clicarContinue()
        cy.get('[data-test="error"]').should('contain.text', 'Last Name is required')
    })

    it('Não deve avançar sem preencher o Zip Code', () => {
        CheckoutStepOnePage.preencherDados('João', 'QA', '')
        CheckoutStepOnePage.clicarContinue()
        cy.get('[data-test="error"]').should('contain.text', 'Postal Code is required')
    })

    it('Não deve avançar com todos os campos vazios', () => {
        CheckoutStepOnePage.clicarContinue()
        cy.get('[data-test="error"]').should('contain.text', 'First Name is required')
    })
})
