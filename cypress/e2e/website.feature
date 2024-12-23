Feature: All Website Tests

  Background: I'm already on the home page
    When I visit the website

  Scenario: Visiting the Home page.
    When I click "Home" in the "navbar"
    Then I should see "Teachers reading aloud"
    And I should see "FAQ"
    And I should see "Background"
    And I should see "Mission"
    And I should see "Vision"

  Scenario: Visiting the Meet Us page.
    When I click "Meet Us" in the "navbar"
    Then I should see "Vonda Dahl"
    And I should see "Jerri Carlson"
    And I should see "Annette Kost"

  Scenario: Visiting the Get Involved page.
    When I click "Get Involved" in the "navbar"
    Then I should see "Get Involved"
    And I should see "Join Our Team"
    And I should see "Apply"
    And I should see "Ideas"

  Scenario: Visiting the Donate page.
    When I click "Donate" in the "navbar"
    Then I should see "Donations"
    And I should see "501 (c)(3)"
    And I should see "Donate a Book"