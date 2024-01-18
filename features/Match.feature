Feature: Matching Ouput with Input

Scenario: All Inputs Match Outputs

    Given I provide 10 inputs
    When I check the outputs
    Then all outputs should match the inputs

Scenario: Respective Matching Order

    Given I input item 1
    When I add the rest of the items
    Then the output should maintain the same order