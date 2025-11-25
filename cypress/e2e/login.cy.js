import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Login Tests', () => {

  beforeEach(() => {
    LoginPage.acessarSite()
  })

  it('Deve realizar login com sucesso', () => {
    LoginPage.preencherUsuario('standard_user')
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarLogin()

    InventoryPage.validarPaginaAposLogin()
  })

  it('Não deve logar com usuário incorreto', () => {
    LoginPage.preencherUsuario('usuario_errado')
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarLogin()

    LoginPage.validarMensagemErro('Username and password do not match')
  })

  it('Não deve logar com senha incorreta', () => {
    LoginPage.preencherUsuario('standard_user')
    LoginPage.preencherSenha('senha_errada')
    LoginPage.clicarLogin()

    LoginPage.validarMensagemErro('Username and password do not match')
  })

  it('Não deve logar com campos vazios', () => {
    LoginPage.clicarLogin()
    LoginPage.validarMensagemErro('Username is required')
  })
})
