import {test, expect} from '@playwright/test';
import ContactPage from '../Pages/contact.page';


test.describe('about', () => {
   let contactPage: ContactPage;

     test('Fill contact form and verify sucess massage', async ({ page }) => {
      contactPage = new ContactPage(page);

        //got open conatct page
         //open contact page
      //   await page.goto('https://practice.sdetunicorns.com/contact/');
         await contactPage.navigate()

        //Find the Contact menu
      //   await page.locator('#menu-item-493').click();

        // fill out the inout fill
      //   await page.locator('.contact-name input').fill("Test name")
      //   await page.locator('.contact-email input').fill("Test@gmail.com")
      //   await page.locator('.contact-phone input').fill("+91-0987654321")
      //   await page.locator('.contact-message textarea').fill('this is the ramdam test massage')

      await contactPage.submitForm('test name', 'test@email.com','0987654321', 'Hello This is thaking advantage of POM');

        // click submit

      //   await page.locator('.everest-forms-submit-button').click();

        //verify sucess massage
        //const successAlert = page.locator('div[role="alert"]');
        await expect(contactPage.sucessTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        
     })
     
    
});
