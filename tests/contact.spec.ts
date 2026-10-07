import {test, expect} from '@playwright/test';

test.describe('about', () => {
    test('Fill the contact form and verify success massage', async ({ page }) => {


        //open contact page
        await page.goto('https://practice.sdetunicorns.com/contact/');

        //fill out the input feilds
        await page.locator('.contact-name input').fill('Test Name')
        await page.locator('.contact-email input').fill('Test@gmail.com')
        await page.locator('.contact-phone input').fill('1234567890')
        await page.locator('.contact-message textarea').fill('this is the test message')


        //click on the submit button
        await page.locator('button[name="everest_forms[submit]"]').click()


        //verify sucess massage
        const sucessAlert = page.locator('div[role="alert"]')
        await expect(sucessAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')

    });
    
    
});
