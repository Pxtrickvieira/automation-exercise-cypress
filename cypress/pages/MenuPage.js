
class MenuPage {

    elements = {

        menuButton: () => cy.get('#react-burger-menu-btn'),
        closeButton: () => cy.get('#react-burger-cross-btn'),
        allItems: () => cy.get('#inventory_sidebar_link'),
        about: () => cy.get('#about_sidebar_link'),
        logout: () => cy.get('#logout_sidebar_link'),
        resetState: () => cy.get('#reset_sidebar_link')
    }


    abrirMenu() {
        this.elements.menuButton().click()
    }

    fecharMenu() {
        this.elements.closeButton().click()
    }

    clicarAllItems() {
        this.elements.allItems().click()
    }

    clicarAbout() {
        cy.get('#about_sidebar_link')
            .invoke('removeAttr', 'target') // impede abrir nova aba
            .click({ force: true })
    }

    clicarLogout() {
        this.elements.logout().click()
    }

    clicarResetState() {
        this.elements.resetState().click()
    }
}

export default new MenuPage()