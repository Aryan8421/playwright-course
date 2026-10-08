import {test, expect} from '@playwright/test'
const path = require('path');

test.describe('Upload file ', () => {

    test('Should upload a test file', async ({ page }) => {

    //open Url
        await page.goto('https://practice.sdetunicorns.com/cart/');

    //provide test file path
        const filePath = path.join(__dirname, '../data/logotitle.png');

    //upload test file
    await page.setInputFiles('input#upfile_1',filePath);

    //click the submit button
        await page.locator('#upload_1').click();
    //assertions 

        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
    })
    
    
})
