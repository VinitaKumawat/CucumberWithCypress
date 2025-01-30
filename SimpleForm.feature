Feature: Submit Simple Form

  Scenario: User fills and submits the simple form
    Given User is on the Simple Form page
    When User enters "John" in the Firstname field
    When User enters "Doe" in the Lastname field
    And User enters "john@example.com" in the email field
    And User enters "1234567890" in the Contact Number field
    And User clicks the submit button
    Then User should see a confirmation message
