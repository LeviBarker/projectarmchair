import {When, Then, Given,} from "@badeball/cypress-cucumber-preprocessor";

When("I visit the website", () => {
    cy.visit("http://localhost:3000")
})

Then("I should see {string}", (text: string) => {
    cy.contains(text)
})

Given("I navigate to {string} via the navbar", (page: string) => {
    cy.get("nav").contains(page).click()
})

Given("I click {string} in the {string}", (clickable: string, container: string) => {
    cy.get(`[data-cy='${container}']`).get(`[data-cy='${clickable}']`).click()
})

Then("Cy: Take a screenshot", () => cy.screenshot())