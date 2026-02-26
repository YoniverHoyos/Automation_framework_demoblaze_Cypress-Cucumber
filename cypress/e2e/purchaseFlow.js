import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"
import PurchasePage from "../pages/PurchasePage"

let products = []

Given("User is on the home page", () => {
  HomePage.visit()
})

When("User adds the desired products to the cart", () => {
  cy.fixture("productData").then((data) => {
    products = data

    products.forEach(product => {
      cy.addProductToCart(product.name)
    })
  })
})

When("User navigates to the cart", () => {
  HomePage.goToCart()
})

Then("User should see the products in the cart", () => {
  let expectedTotal = 0
  products.forEach(product => {
    CartPage.validateProduct(product.name)
    expectedTotal += product.price
  })
  CartPage.validateTotal(expectedTotal)
})

When("User completes the purchase form", () => {
  cy.fixture("userData").then(user => {
    CartPage.clickPlaceOrder()
    PurchasePage.fillForm(user)
    PurchasePage.submit()
  })
})

Then("User should see a successful purchase confirmation", () => {
  PurchasePage.validateSuccess()
})