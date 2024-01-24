// Goal: Do the same as the 2ndSeleniumExercise.js, but with Workout related tasks
import { By, Builder, Key } from "selenium-webdriver"
import { should } from "chai"
should()

// Describe Block
describe("Add task functionality", function () {
    //Block IT - Individual Test
    it("TC01 - create a task", async function () {

    // Call driver
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Open website
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

        // Get the element, Type in it and Click Return Key on Keyboard
        const workoutTasks = [
            "Drink Pre-Workout",
            "Arrive Gym",
            "Do 10 exercises with 4 sections and 10 reps each",
            "Drink pos-workout",
            "Get home",
            "Eat first meal with 100g protein in it",
            "Eat 6-9 of this proteined meal along the day",
            "Sleep before 10pm",
            "Sleep at least 8h",
            "Stand up before 6 to get ready again"];
        for (const task of workoutTasks) {
            await driver.findElement(By.id("inputTask")).sendKeys(task, Key.RETURN);
        }

        // Assertion / Validation
        for (let on = 1; on <= 10; on++) {
            let taskElement = await driver.findElement(By.xpath(`/html/body/div/section/ul/li[${on}]`));
            let seleniumText = await taskElement.getText();

            // Validate if the task is added successfully
            if (seleniumText.includes(workoutTasks[on - 1])) {
                console.log(`Task ${on} added successfully`);
            } else {
                console.log(`Task ${on} not added as expected. Instead, the Output was: ${seleniumText}`);
            }
        }

        return true;

    } finally {

        await driver.sleep(2000);

        // Quit it
        await driver.quit();
    }
})
})