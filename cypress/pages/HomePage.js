class HomePage {

  visit() {
    cy.visit('https://demoblaze.com/')
  }

  goToCart() {
    cy.get('#cartur').click()
  }

}

export default new HomePage()