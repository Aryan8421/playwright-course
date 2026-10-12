import { test, expect } from '@playwright/test';

test.describe('Login DXL.com', () => {
    test('Login the DXL', async ({ page }) => {

        //go to DXL.com website
        await page.goto('https://www.dxl.com/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        //approve for india
        await page.locator(".backToShop").click();

        //click on the close button
        await page.locator("#onetrust-reject-all-handler").click();

        await page.locator("//div[@class='chakra-stack css-r1d0r4']//div[@class='chakra-skeleton css-pvc1l8']").click();

        await page.getByLabel("My Account");

        await page.locator("button[class='chakra-button css-1w5aboo']").click();

        await page.locator('#username').fill('ajio@yopmail.com');

        await page.locator('[data-action-button-primary="true"]').click();

        await page.locator('#password').fill('ajio123');

        await page.locator("button[value='default']").click();



    })


})
