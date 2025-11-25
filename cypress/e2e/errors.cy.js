import LoginPage from '../pages/LoginPage'

describe('Testes Negativos de Login', () => {

  beforeEach(() => {
    LoginPage.acessarSite()
  })

  it('Deve exibir erro ao tentar logar com usuário incorreto', () => {
    LoginPage.preencherUsuario('usuario_errado')
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarLogin()

    LoginPage.elements.errorMessage()
      .should('contain.text', 'Username and password do not match')
  })

  it('Deve exibir erro ao tentar logar com senha incorreta', () => {
    LoginPage.preencherUsuario('standard_user')
    LoginPage.preencherSenha('senha_incorreta')
    LoginPage.clicarLogin()

    LoginPage.elements.errorMessage()
      .should('contain.text', 'Username and password do not match')
  })

  it('Deve exibir erro ao tentar logar com o usuário bloqueado', () => {
    LoginPage.preencherUsuario('locked_out_user')
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarLogin()

    LoginPage.elements.errorMessage()
      .should('contain.text', 'Sorry, this user has been locked out')
  })

  it('Deve exibir erro ao tentar logar com usuário vazio', () => {
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarLogin()

    LoginPage.elements.errorMessage()
      .should('contain.text', 'Username is required')
  })

  it('Deve exibir erro ao tentar logar com senha vazia', () => {
    LoginPage.preencherUsuario('standard_user')
    LoginPage.clicarLogin()

    LoginPage.elements.errorMessage()
      .should('contain.text', 'Epic sadface: Password is required')
  })
})
