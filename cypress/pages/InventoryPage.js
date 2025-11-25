
class InventoryPage {

    elements = {

        appLogo: () => cy.get('.app_logo'),
        productList: () => cy.get('.inventory_item'),
        cartButton: () => cy.get('.shopping_cart_link'),
        addToCartButtons: () => cy.get('button.btn_inventory'),
        addBikeLightButton: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),

    }

    validarPaginaAposLogin() {
        cy.url().should('include', 'inventory.html')
        this.elements.appLogo().should('contain.text', 'Swag Labs')
    }

    abrirCarrinho() {
        this.elements.cartButton().click()
    }

    adicionarBackpack() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    adicionarBikeLight() {
        this.elements.addBikeLightButton().click()
    }
    
    validarQuantidadeCarrinho(qtdEsperada) {
        this.elements.cartBadge()
            .should('be.visible')
            .and('have.text', String(qtdEsperada))
    }

    ordenar(tipo) {
        cy.get('[data-test="product-sort-container"]').select(tipo)
    }

    validarOrdenacaoAZ() {
        cy.get('.inventory_item_name').then(items => {
            const nomes = [...items].map(i => i.innerText)
            const ordenados = [...nomes].sort()
            expect(nomes).to.deep.equal(ordenados)
        })
    }

    validarOrdenacaoZA() {
        cy.get('.inventory_item_name').then(items => {
            const nomes = [...items].map(i => i.innerText)
            const ordenados = [...nomes].sort().reverse()
            expect(nomes).to.deep.equal(ordenados)
        })
    }

    validarOrdenacaoMenorMaior() {
        cy.get('.inventory_item_price').then(prices => {
            const valores = [...prices].map(p => Number(p.innerText.replace('$', '')))
            const ordenados = [...valores].sort((a, b) => a - b)
            expect(valores).to.deep.equal(ordenados)
        })
    }

    validarOrdenacaoMaiorMenor() {
        cy.get('.inventory_item_price').then(prices => {
            const valores = [...prices].map(p => Number(p.innerText.replace('$', '')))
            const ordenados = [...valores].sort((a, b) => b - a)
            expect(valores).to.deep.equal(ordenados)
        })
    }

    acessarProdutoPeloNome(nomeProduto) {
        cy.contains('.inventory_item_name', nomeProduto).click()
    }
}

export default new InventoryPage()