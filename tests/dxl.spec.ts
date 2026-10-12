// import { test, expect } from '@playwright/test';

// test.describe('Login DXL.com', () => {
//     test('Login the DXL', async ({ page }) => {

//         //go to DXL.com website
//         try {
//             await page.goto('https://www.dxl.com/', {
//                 waitUntil: 'domcontentloaded',
//                 timeout: 60000
//             });
//         } catch (error) {
//             console.log('DXL site not reachable');
//             test.skip();
//         }

//         //approve for india
//         await page.locator(".backToShop").click();

//         //click on the close button
//         await page.locator("#onetrust-reject-all-handler").click();

//         await page.locator("//div[@class='chakra-stack css-r1d0r4']//div[@class='chakra-skeleton css-pvc1l8']").click();

//         await page.getByLabel("My Account");

//         await page.locator("button[class='chakra-button css-1w5aboo']").click();

//         await page.locator('#username').fill('ajio@yopmail.com');

//         await page.locator('[data-action-button-primary="true"]').click();

//         await page.locator('#password').fill('ajio123');

//         await page.locator("button[value='default']").click();



//     })


// })


import { test, expect } from '@playwright/test';

// Apply this browser setting to tests in this file only
test.use({
    launchOptions: {
        args: ['--disable-http2']
    }
});

test.describe('Login DXL.com', () => {
    test('Login the DXL', async ({ page }) => {

        // Go to DXL.com website
        try {
            const response = await page.goto('https://www.dxl.com/', {
                waitUntil: 'domcontentloaded',
                timeout: 90000
            });

            console.log('DXL website URL:', page.url());
            console.log('DXL response status:', response?.status());

        } catch (error) {
            console.error('DXL site navigation failed:', error);
            throw error;
        }

        // Approve shopping for India
        await page.locator('.backToShop').click();

        // Reject cookies
        await page.locator('#onetrust-reject-all-handler').click();

        // Click the specified page element
        await page.locator(
            "//div[@class='chakra-stack css-r1d0r4']//div[@class='chakra-skeleton css-pvc1l8']"
        ).click();

        // Verify My Account is visible
        await expect(page.getByText('My Account', { exact: true })).toBeVisible();

        // Click the account button
        await page.locator(
            "button[class='chakra-button css-1w5aboo']"
        ).click();

        // Enter username
        await page.locator('#username').fill('ajio@yopmail.com');

        // Continue to password
        await page.locator(
            '[data-action-button-primary="true"]'
        ).click();

        // Enter password
        await page.locator('#password').fill('ajio123');

        // Submit login
        await page.locator("button[value='default']").click();

    });
});
