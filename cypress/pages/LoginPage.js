
class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        logo: () => cy.get('.login_logo'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    acessarSite() {
        cy.visit('/')
    }

    preencherUsuario(usuario) {
        this.elements.usernameInput().type(usuario)
    }

    preencherSenha(senha) {
        this.elements.passwordInput().type(senha)
    }

    clicarLogin() {
        this.elements.loginButton().click()
    }
    validarMensagemErro(texto) {
        this.elements.errorMessage().should('be.visible').and('contain.text', texto)
    }

    validarPaginaDeLogin() {
        cy.url().should('include', '/')
        this.elements.logo().should('be.visible')
        this.elements.loginButton().should('be.visible')
    }
}



export default new LoginPage()