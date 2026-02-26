Feature: Purchase flow on Demoblaze webpage

  Scenario: Successful purchase of two products
    Given User is on the home page
    When User adds the desired products to the cart
    And User navigates to the cart
    Then User should see the products in the cart
    When User completes the purchase form
    Then User should see a successful purchase confirmation