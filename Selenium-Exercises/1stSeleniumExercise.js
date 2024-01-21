import { Builder, By, Key } from "selenium-webdriver"
import { should } from "chai"
should()

async function addTask() {

    // Call driver
    let driver = await new Builder().forBrowser("chrome").build();

    // Open website
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium1", Key.RETURN)

    // Assertion / Validation
    let seleniumText1 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText1.should.equal(seleniumText1, "Aprender Selenium1");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium2", Key.RETURN)

    // Assertion / Validation
    let seleniumText2 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText2.should.equal(seleniumText2, "Aprender Selenium2");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium3", Key.RETURN)

    // Assertion / Validation
    let seleniumText3 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText3.should.equal(seleniumText3, "Aprender Selenium3");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium4", Key.RETURN)

    // Assertion / Validation
    let seleniumText4 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText4.should.equal(seleniumText4, "Aprender Selenium4");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium5", Key.RETURN)

    // Assertion / Validation
    let seleniumText5 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText5.should.equal(seleniumText5, "Aprender Selenium5");
    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium6", Key.RETURN)

    // Assertion / Validation
    let seleniumText6 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText6.should.equal(seleniumText6, "Aprender Selenium6");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium7", Key.RETURN)

    // Assertion / Validation
    let seleniumText7 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText7.should.equal(seleniumText7, "Aprender Selenium7");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium8", Key.RETURN)

    // Assertion / Validation
    let seleniumText8 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText8.should.equal(seleniumText8, "Aprender Selenium8");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium9", Key.RETURN)

    // Assertion / Validation
    let seleniumText9 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText9.should.equal(seleniumText9, "Aprender Selenium9");

    // Get the element and Type in it and Click go
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium10", Key.RETURN)

    // Assertion / Validation
    let seleniumText10 = await driver.findElement(By.xpath("/html/body/div/section/ul/li")).getText()
        .then(function (value) {
            return value
        });

    seleniumText10.should.equal(seleniumText10, "Aprender Selenium10");

    await driver.sleep(2000);

    // Quit it
    await driver.quit();

};

addTask()