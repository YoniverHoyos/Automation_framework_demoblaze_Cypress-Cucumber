# Automation framework combining UI + API testing using Cypress and Cucumber for Demoblaze platform.

In this repository, there is a proposal of UI and API automation for the Demoblaze platform. The proposal uses Cypress and Cucumber to automate two sets of features following a POM pattern and a dynamic test data strategy. the UI automation follows a purchase scenario on https://www.demoblaze.com/ where the user add two products to the cart, verifies the content of the cart, fill the form and finalize the purchase. This scenario follows a structure shown on this Cucumber scenario:

 Scenario: Successful purchase of two products
    	Given User is on the home page.
   	 When User adds the desired products to the cart
    	And User navigates to the cart.
    	Then User should see the products in the cart
    	When User completes the purchase form
    	Then User should see a successful purchase confirmation

In addition, the API automation create four scenarios used to verify the signup (https://api.demoblaze.com/signup) and login (https://api.demoblaze.com/login ) on the Api platform, this scenarios are used  to create a new user, verify the error message for the creation of a existing user, a log in workflow for a user whit valid credentials and the same workflow for a user whit invalid credentials. These scenarios are showed on the following cucumber scenarios:

  Scenario: Create a new user for signup
   	Given User generates a new user.
    	When User sends a signup request
    	Then Verify The signup is successful.
  Scenario: Create an existing user for signup
    	Given User use an existing user.
    	When User sends a signup request
    	Then User should receive a user already exists error
  Scenario: Login with correct credentials
    	Given User use an existing user.
    	When User sends a login request with valid credentials
    	Then User should receive an auth token
  Scenario: Login with incorrect credentials
    	Given User use an existing user.
    	When User sends a login request with invalid credentials
    	Then User should receive a login error

## Tech tools
-   Cypress
-   JavaScript
-   Cucumber
-   Mochawesome (optional)

## Installation and execution

*	The first step in the installation process is clone the repository from GitHub, this can be done following the documentation given for GitHub on https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository 
*	Install dependencies whit “npm install”
*	Open Cypress whit “npx cypress open,” this command will execute the cypress open mode where you can click on E2E testing and be able to run the specs for UI and API scenarios. 
*	Run headless ”npx cypress run”, whit this command you can run both specs in headless mode, but if it is necessary to run the API feature file it is possible to use the “npx cypress run --spec "cypress/e2e/api/apiValidation.feature"” or “npx cypress run --spec “cypress/e2e/purchaseFlow.feature"” for the UI automation.

## Best Practices Applied

*	Using Cucumber and POM it was possible to create a clean step definition for both automations.
*	Reusable page methods whit the POM pattern
*	No hardcoded test data, making use of a fixtures folder in the project structure is possible to organize the data, giving the opportunity of scalability to the project and an easier access to data used.
*	Dynamic test data strategy, whit the use of “username: `user_${Date.now()}” it is possible to guarantee every execution of the scenarios it will generate a new username, making this data unique every time. Giving a continuous execution of the scenarios without changes on the user created.

## Author

Yoniver Hoyos Muñoz
Industrial Automation Engineer