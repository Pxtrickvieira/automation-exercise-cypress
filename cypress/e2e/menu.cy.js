import MenuPage from '../pages/MenuPage'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Testes do Menu Lateral', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Abre e fecha o menu', () => {
        MenuPage.abrirMenu()
        cy.get('.bm-menu').should('be.visible')
        MenuPage.fecharMenu()
    })

    it('Navega para All Items', () => {
        MenuPage.abrirMenu()
        MenuPage.clicarAllItems()
        InventoryPage.validarPaginaAposLogin()
    })

    it('Navega para About', () => {
        MenuPage.abrirMenu()
        cy.get('#about_sidebar_link')
            .should('have.attr', 'href', 'https://saucelabs.com/')

    })

    it('Logout pelo menu', () => {
        MenuPage.abrirMenu()
        MenuPage.clicarLogout()
        LoginPage.validarPaginaDeLogin()
    })

    it('Reseta o estado do app', () => {
        cy.adicionarItem('backpack')
        MenuPage.abrirMenu()
        MenuPage.clicarResetState()
        InventoryPage.abrirCarrinho()
        cy.get('.cart_item').should('have.length', 0)
    })
})
