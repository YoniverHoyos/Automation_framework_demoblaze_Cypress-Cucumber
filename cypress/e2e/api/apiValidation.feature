Feature: Authentication API testing for demoblaze 

  Scenario: Create a new user for signup
    Given User generates a new user
    When User sends a signup request
    Then Verify The signup is successful

  Scenario: Create an existing user for signup
    Given User use an existing user
    When User sends a signup request
    Then User should receive a user already exists error

  Scenario: Login with correct credentials
    Given User use an existing user
    When User sends a login request with valid credentials
    Then User should receive an auth token

  Scenario: Login with incorrect credentials
    Given User use an existing user
    When User sends a login request with invalid credentials
    Then User should receive a login error