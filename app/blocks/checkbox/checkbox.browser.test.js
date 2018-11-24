import test from 'ava';
import webdriver from 'selenium-webdriver';

test.beforeEach(t => {
	t.context.driver = new webdriver.Builder()
		.forBrowser('chrome')
		.usingServer('http://localhost:8090/wd/hub')
		.build();
});

test('It tests all checkboxes on the page', async t => {
	await t.context.driver.get('http://192.168.1.3:3000');
	const driver = t.context.driver;
	const checkboxInputs = await driver.findElements(
		webdriver.By.className('checkbox__input')
	);
	const checkboxLabels = await driver.findElements(
		webdriver.By.className('checkbox__label')
	);
	let startValue = false;
	let endValue = false;

	for (let i = 0; i < checkboxLabels.length; i++) {
		startValue = (await checkboxInputs[i].getAttribute('checked') === 'true');
		await checkboxLabels[i].click();
		endValue = (await checkboxInputs[i].getAttribute('checked') === 'true');
	}

	t.is(startValue, !endValue);

	await driver.quit();
});
