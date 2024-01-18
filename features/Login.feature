Feature: Checking if output matches with input

Scenario: Valid Matching

    When I put all the 10 inputs
    Then the outputs have to be the same

Scenario: Respectively Match

    When I put item 1 and the rest of them further
    Then the output should return the same order