import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User is on the Simple Form page", () => {
    cy.visit("https://v1.training-support.net/selenium/simple-form");
});

When("User enters {string} in the Firstname field", (name) => {
    cy.get("#firstName").type(name);
});

When("User enters {string} in the Lastname field", (name) => {
    cy.get("#lastName").type(name);
});

When("User enters {string} in the email field", (email) => {
    cy.get("#email").type(email);
});

When("User enters {string} in the Contact Number field", (contactNumber) => {
    cy.get("#number").type(contactNumber);
});

When("User clicks the submit button", () => {
    cy.get("input[type='submit']").click();
});

Then("User should see a confirmation message", () => {
    cy.get("textarea").should("be.visible").type("Message");
});
