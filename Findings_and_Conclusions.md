# Findings

## UI Automation (E2E Testing)

-   The Cart validation use specific assertions for product name and total amount to validate the exact products were added correctly.
-   The application depends on visible text selectors, which may introduce instability if UI text changes.
-   Even no advanced validation was implemented in the purchase form fields; it could be possible to add more validations to the form data and structure in the future. 
-   It was possible to add the products to the cart and complete the purchase process.

## API Automation (Signup & Login)

-   The API only accepts POST requests, if a get request it is executed it returns a 405 Method Not Allowed.
-   The successful user creation returns HTTP response status of 200 with an empty JSON object.
-   In the execution to create an existing user, ths system returns HTTP response status of 200 with an error message "This user already exists."
-   The API does not follow strict REST conventions, even if the response generates a error message the response has a 200status code. This error messages ideally return 4xx codes.
-   If the user creates login request whit valid credentials it returns an authentication token and a 200 status code.

## Test Architecture

-   The creation of custom commands increases reusability and reduces duplicated logic. 
-   Dynamic test data (`Date.now()`) prevents duplication problems in the creation of user’s data.
-   API and UI tests are properly isolated but share reusable configurations. Allowing the integration of both automations in the same structure, creating a complete validation of the demoblaze platform

# Conclusions

* The execution of the project demonstrates the importance of validation of multiple levels in the applications. UI testing ensures the system works from a user perspective, making sure the user experience is the expected according to the requirements. Otherwise, the API automation validates the communication and integration of the business logic. The combination of both layers increases defect detection capability.

* The project has a strong automation structure and a clean architecture design following a POM pattern, this provides a reusable and scalable test strategy, guaranteeing the maintainability of the test scenarios.

* According to best practice on quality assurance, it is possible to say that the application presents functional stability but reveals a REST design inconsistency, giving 200 status code for scenarios whit error messages. Also, there are few mechanisms in API validation, making it impossible to validate all the CRUD operations.

# Author

Yoniver Hoyos Muñoz
Industrial Automation Engineer