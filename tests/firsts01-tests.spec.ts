import test, { expect } from "@playwright/test";

test('test 1',async ({page}) => {
    await page.goto('https://howden.b2ctravel.co.uk/quote');
    await expect(page).toHaveTitle('A-Plan t/a Howden');
});

test('test 2',async ({page}) => {
    await page.goto('https://howden.b2ctravel.co.uk/quote');
    await expect(page).toHaveTitle('A-Plan t/a Howden');
});
