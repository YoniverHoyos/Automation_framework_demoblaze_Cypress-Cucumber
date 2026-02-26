import './commands'

// Automatic screenshots if there is a faillure 
afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.screenshot()
  }
})

Cypress.on('test:before:run', (test) => {
  console.log(`Starting: ${test.title}`)
  console.log(`File: ${test.file}`)
})