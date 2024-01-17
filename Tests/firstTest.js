import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

async function addTask() {

    // Call driver
    let driver = await new Builder().forBrowser("chrome").build();

    // Open website
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    // Got the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)

    // Assertion / Validation
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/footer/input")).getText()
    .then(function(value){
    return value
    });

    seleniumText.should.equal("Aprender Selenium");

    // Quit it
    await driver.quit()

}

addTask()