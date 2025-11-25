# 🧪 Automação de Testes E2E – SauceDemo com Cypress

Este repositório contém uma suíte de testes **end-to-end** desenvolvida em **Cypress 15+**, utilizando Page Object Model (POM), commands customizados e relatórios com Mochawesome.

O objetivo é validar fluxos críticos do e-commerce SauceDemo, garantindo confiabilidade em login, inventário, carrinho, checkout e fluxo completo de compra.

---

## 🏷️ Tecnologias Utilizadas

- Cypress 15+
- JavaScript (ES6+)
- Node.js 20+
- Mochawesome / mochawesome-merge / mochawesome-report-generator
- NPM Scripts

---

## 🗂 Estrutura do Projeto

```bash
cypress/
 ├── e2e/                 # Testes organizados por contexto
 ├── fixtures/            # Massa de dados
 ├── pages/               # Page Object Model
 └── support/             # Commands e configuração global
```

---

## 🧱 Arquitetura – Page Object Model (POM)

O projeto segue o padrão **POM**, onde cada página representa uma classe com elementos e ações:

- `LoginPage` – login e validações  
- `InventoryPage` – inventário, ordenações e carrinho  
- `CartPage` – carrinho e navegação  
- `ProductDetailsPage` – detalhes do produto  
- `MenuPage` – menu lateral  
- `CheckoutStepOnePage` – preenchimento de dados  
- `CheckoutStepTwoPage` – revisão  
- `CheckoutCompletePage` – confirmação da compra  

---

## 🎯 Cenários Automatizados

### 🔐 Login
- Login com sucesso  
- Usuário incorreto  
- Senha incorreta  
- Usuário bloqueado  
- Campos obrigatórios  

### 📦 Inventário
- Validação da página  
- Adicionar itens ao carrinho  
- Acessar carrinho  

### 🔁 Ordenação
- Nome: A → Z  
- Nome: Z → A  
- Preço: menor → maior  
- Preço: maior → menor  

### 🔍 Detalhes do Produto
- Acessar produto pelo nome  
- Validar nome, descrição e preço  
- Voltar ao inventário  

### 🛒 Carrinho
- Validar página  
- Validar itens  
- Remover item  
- Continuar comprando  
- Ir para checkout  

### 🧾 Checkout
- Campos obrigatórios  
- Subtotal dinâmico  
- Step One → Step Two  
- Finalização da compra  

### 🚀 Fluxo E2E
Fluxo completo:  
Login → Adicionar item → Carrinho → Checkout → Sucesso.

---

## 🧪 Commands Customizados (support/commands.js)

- `cy.login()`  
- `cy.adicionarItem()`  
- `cy.adicionarItens()`  
- `cy.prepararCarrinho()`  
- `cy.prepararCheckout()`  
- `cy.checkoutCompleto()`  
- `cy.validarSubtotal()`  

---

## ▶ Execução dos Testes

### Modo interativo
```bash
npm run cy:open
```

### Modo headless
```bash
npm run cy:run
```

### Gerar relatório Mochawesome
```bash
npm run report
```

Após gerar, o relatório HTML estará disponível em:
```
cypress/reports/index.html
```

---

## ⚙ Instalação

```bash
npm install
```

---

## 👨‍💻 Autor

Projeto desenvolvido para fins profissionais e demonstração de competências em **QA Automation com Cypress**, arquitetura POM e testes de ponta a ponta.

---

## 📄 Licença

ISC
