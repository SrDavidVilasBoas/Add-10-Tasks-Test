// Goal: Do the same as the 1stSeleniumExercise.js, but with FOR
import {By, Builder, Key} from "selenium-webdriver"
import {should} from "chai"
should()

async function addTask() {

    // Call driver
    let driver = await new Builder().forBrowser("chrome").build();

    try {
    // Open website
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    // Got the element, Type in it and Click Return Key on Keyboard
    for (let on = 1; on <= 10; on++) {
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium" + on, Key.RETURN)
    }
    // Assertion / Validation
    for (let on = 1; on <= 10; on++) {
    let taskElement = await driver.findElement(By.xpath(`/html/body/div/section/ul/li[${on}]`));
    let seleniumText = await taskElement.getText();

    // Return String and Boolean of Each Output
    if (seleniumText.includes("Aprender Selenium" + on)) {
        console.log("Task " + on + " added successfully");
    } else {
        console.log("Task " + on + " not added as expected");
    }
}

    return true; 

} finally {

    await driver.sleep(2000);

    // Quit it
    await driver.quit();
    }
}

addTask();