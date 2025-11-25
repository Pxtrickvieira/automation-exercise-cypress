class CheckoutStepOnePage {

    elements = {
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
        title: () => cy.get('.title')
    }

    validarCheckoutStepOne() {
        cy.url().should('include', 'checkout-step-one.html')
        this.elements.title().should('contain.text', 'Checkout: Your Information')
    }

    // -------- MÉTODOS NOVOS --------
    preencherPrimeiroNome(valor) {
        this.elements.firstName().clear().type(valor)
    }

    preencherUltimoNome(valor) {
        this.elements.lastName().clear().type(valor)
    }

    preencherCep(valor) {
        this.elements.postalCode().clear().type(valor)
    }

    preencherTodosOsDados(first, last, postal) {
        this.preencherPrimeiroNome(first)
        this.preencherUltimoNome(last)
        this.preencherCep(postal)
    }

    // -------- MÉTODO ANTIGO (PARA NÃO QUEBRAR SEUS TESTES) --------
    preencherDados(first, last, postal) {
        if (first !== undefined) this.preencherPrimeiroNome(first)
        if (last !== undefined) this.preencherUltimoNome(last)
        if (postal !== undefined) this.preencherCep(postal)
    }

    // ----------------------------------------

    clicarContinue() {
        this.elements.continueButton().click()
    }

    validarMensagemDeErro(mensagemEsperada) {
        this.elements.errorMessage().should('contain.text', mensagemEsperada)
    }

    limparCampos() {
        this.elements.firstName().clear()
        this.elements.lastName().clear()
        this.elements.postalCode().clear()
    }
}

export default new CheckoutStepOnePage()
