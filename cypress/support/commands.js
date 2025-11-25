
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'



Cypress.Commands.add('login', (user = 'standard_user', pass = 'secret_sauce') => {
    LoginPage.acessarSite()
    LoginPage.preencherUsuario(user)
    LoginPage.preencherSenha(pass)
    LoginPage.clicarLogin()

    cy.url().should('include', 'inventory.html')
    cy.get('.inventory_item', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
})

Cypress.Commands.add('adicionarItem', (itemNome) => {
    cy.fixture('produtos').then(produtos => {
        const dataTestID = produtos[itemNome]

        cy.get(`[data-test="${dataTestID}"]`, { timeout: 10000 })
          .should('be.visible')
          .click()
    })
})

Cypress.Commands.add('adicionarItens', (lista) => {
    lista.forEach(item => {
        cy.adicionarItem(item)
    })
})

Cypress.Commands.add('prepararCarrinho', (lista) => {
    cy.login()

    cy.adicionarItens(lista)

    InventoryPage.abrirCarrinho()

    cy.url().should('include', 'cart.html')
    cy.get('.cart_item', { timeout: 10000 }).should('have.length.greaterThan', 0)
})

Cypress.Commands.add('prepararCheckout', (lista) => {
    cy.prepararCarrinho(lista)

    CartPage.irParaCheckout()

  
    cy.url().should('include', 'checkout-step-one')
    CheckoutStepOnePage.preencherDados('Joao', 'QA', '12345')
    CheckoutStepOnePage.clicarContinue()

   
    cy.url().should('include', 'checkout-step-two')
    CheckoutStepTwoPage.validarCheckoutStepTwo()
})


Cypress.Commands.add('checkoutCompleto', (lista) => {
    cy.prepararCheckout(lista)
    CheckoutStepTwoPage.finalizarCompra()

  
    cy.url().should('include', 'checkout-complete')
    CheckoutCompletePage.validarCheckoutCompleto()
})

Cypress.Commands.add('validarSubtotal', () => {
    cy.get('.inventory_item_price').then($prices => {

        const valores = [...$prices].map(el =>
            Number(el.innerText.replace('$', ''))
        )
        const somaEsperada = valores
            .reduce((acc, v) => acc + v, 0)
            .toFixed(2)
            
        cy.get('.summary_subtotal_label')
          .should('contain.text', `Item total: $${somaEsperada}`)
    })
})
