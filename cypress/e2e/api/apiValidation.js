import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let user = {}
let response

Given("User generates a new user", () => {
  user = {
    username: `user_${Date.now()}`,
    password: "Test123!"
  }
})
When("User sends a signup request", () => {
  cy.signup(user).then((res) => {
    response = res
  })
})

Given("User use an existing user", () => {
  cy.signup(user)
})

When("User sends a login request with valid credentials", () => {
  cy.login(user).then((res) => {
    response = res
  })
})

When("User sends a login request with invalid credentials", () => {
  cy.login({
    username: user.username,
    password: "WrongPassword"
  }).then((res) => {
    response = res
  })
})

Then("Verify The signup is successful", () => {
  expect(response.status).to.eq(200)
  expect(response.body).to.be.empty
})

Then("User should receive a user already exists error", () => {
  expect(response.status).to.eq(200)
  expect(response.body.errorMessage).to.eq("This user already exist.")
})

Then("User should receive an auth token", () => {
  expect(response.status).to.eq(200)
  expect(response.body).contain("Auth_token")
})

Then("User should receive a login error", () => {
  expect(response.status).to.eq(200)
  expect(response.body.errorMessage).to.exist
})