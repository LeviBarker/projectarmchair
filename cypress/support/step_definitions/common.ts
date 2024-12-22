import {When, Then, Given,} from "@badeball/cypress-cucumber-preprocessor";

When("I visit the website", () => {
    cy.visit("http://localhost:3000")
})

Then("I should see the text: {string}", (text: string) => {
    cy.contains(text)
})

Given("I navigate to {string} via the navbar", (page: string) => {
    cy.get("nav").contains(page).click()
})

Then("Cy: Take a screenshot", () => cy.screenshot())