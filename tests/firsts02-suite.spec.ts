import { expect } from "@playwright/test";
import test from "@playwright/test";

test.describe('first-suite',async () => {
    
    test.beforeEach('before test', async ({page}) => {
        await page.goto('https://howden.b2ctravel.co.uk/quote');
    });
    
    test('Home Page',async ({page}) => {
        
        await expect(page).toHaveTitle('A-Plan t/a Howden');
    });
    
    test('Navigate',async ({page}) => {
        
        await expect(page).toHaveTitle('A-Plan t/a Howden');
    });
});

