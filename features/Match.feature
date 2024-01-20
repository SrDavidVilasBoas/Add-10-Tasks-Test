Feature: Matching Ouput with Input

Scenario: All Inputs Match Outputs

    Given I provide 10 inputs
    When I check the outputs
    Then all outputs should match the inputs