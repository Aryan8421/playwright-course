import {test, expect} from '@playwright/test';
import CartPage from '../Pages/cart.page';
const path = require('path');

test.describe('Upload file ', () => {
    let cartPage: CartPage;

    test('Should upload a test file', async ({ page }) => {
        cartPage = new CartPage(page);

    //open Url
        await page.goto('https://practice.sdetunicorns.com/cart/');

    //provide test file path
        const filePath = path.join(__dirname, '../data/logotitle.png');

    // //upload test file
    // await page.setInputFiles('input#upfile_1',filePath); 

    // //click the submit button
    //     await page.locator('#upload_1').click();

    //upload test file
    cartPage.UploadComponent().uploadFile(filePath);



    //assertions 

        // await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully',{timeout: 10000});
        await expect(cartPage.UploadComponent().successTxt).toContainText('uploaded successfully',{timeout: 10000});
        
    })
    
    
})
