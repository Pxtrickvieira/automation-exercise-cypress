import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CartPage from '../pages/CartPage'

describe('Testes Negativos de Checkout', () => {

    beforeEach(() => {
        cy.prepararCarrinho(['backpack'])
        CartPage.irParaCheckout()
        CheckoutStepOnePage.validarCheckoutStepOne()
        CheckoutStepOnePage.limparCampos()
    })

    it('Não deve avançar sem preencher First Name', () => {
        CheckoutStepOnePage.preencherUltimoNome('QA')
        CheckoutStepOnePage.preencherCep('12345')
        CheckoutStepOnePage.clicarContinue()
        CheckoutStepOnePage.validarMensagemDeErro('First Name is required')
    })

    it('Não deve avançar sem preencher Last Name', () => {
        CheckoutStepOnePage.preencherPrimeiroNome('João')
        CheckoutStepOnePage.preencherCep('12345')
        CheckoutStepOnePage.clicarContinue()
        CheckoutStepOnePage.validarMensagemDeErro('Last Name is required')
    })

    it('Não deve avançar sem preencher o Zip Code', () => {
        CheckoutStepOnePage.preencherPrimeiroNome('João')
        CheckoutStepOnePage.preencherUltimoNome('QA')
        CheckoutStepOnePage.clicarContinue()
        CheckoutStepOnePage.validarMensagemDeErro('Postal Code is required')
    })

    it('Não deve avançar com todos os campos vazios', () => {
        CheckoutStepOnePage.clicarContinue()
        CheckoutStepOnePage.validarMensagemDeErro('First Name is required')
    })
})
