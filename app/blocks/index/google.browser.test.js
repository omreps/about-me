import test from 'ava';
import webdriver from 'selenium-webdriver';
import LegacyActionSequence from 'selenium-webdriver';

test.beforeEach(t => {
	t.context.driver = new webdriver.Builder()
		.forBrowser('chrome')
		.usingServer('http://localhost:8090/wd/hub')
		.build();
});

test('It tests Google search', async t => {
	await t.context.driver.get('http://google.com');
	const driver = t.context.driver;

	await driver.findElement(webdriver.By.className('gsfi')).sendKeys('jhgkgkjkjhk');

    await driver.findElement(webdriver.By.className('lsb')).click();

     title = await driver.findElement(webdriver.By.title()).value();

	t.is(title.str('jhgkgkjkjhk'), 1);

	await driver.quit();
});
