Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains(productName).should('be.visible').click()
  cy.contains('Add to cart').click()

  cy.on('window:alert', (text) => {
    expect(text).to.include('Product added')
  })

  cy.get('#nava').click()
})

Cypress.Commands.add("signup", (user) => {
  return cy.request({
    method: "POST",
    url: "/signup",
    body: user,
    failOnStatusCode: false
  })
})

Cypress.Commands.add("login", (user) => {
  return cy.request({
    method: "POST",
    url: "/login",
    body: user,
    failOnStatusCode: false
  })
})