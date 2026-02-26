class PurchasePage {

  fillForm(user) {
    cy.get('#name').type(user.name)
    cy.get('#country').type(user.country)
    cy.get('#city').type(user.city)
    cy.get('#card').type(user.card)
    cy.get('#month').type(user.month)
    cy.get('#year').type(user.year)
  }

  submit() {
    cy.contains('Purchase').click()
  }

  validateSuccess() {
    cy.get('.sweet-alert').should('be.visible')
      .and('contain', 'Thank you for your purchase!')
  }

}

export default new PurchasePage()