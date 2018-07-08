Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: Protractor and Cucumber Test Demo
    Given I load up the sample hello page
    When I see "Hello Long World"
    Then I should click the button