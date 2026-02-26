class CartPage {

  validateProduct(productName) {
    cy.contains(productName).should('be.visible')
  }

  validateTotal(expectedTotal) {
    cy.get('#totalp').should('have.text', expectedTotal)
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click()
  }

}

export default new CartPage()