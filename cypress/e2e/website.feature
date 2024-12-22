Feature: All Website Tests

  Background: I'm already on the home page
    When I visit the website

  Scenario: Visiting the Home page.
    Then I should see the text: "Teachers reading aloud to children in crisis."
    And I should see the text: "Project Armchair reaches out to children who are in need of a moment's reprieve from challenging situations."

  Scenario: Visiting the Meet Us page.
    When I navigate to "Meet Us" via the navbar
    Then I should see the text: "Vonda Dahl"

  Scenario: Visiting the Donate page.
    When I navigate to "Donate" via the navbar
    Then I should see the text: "Donate"