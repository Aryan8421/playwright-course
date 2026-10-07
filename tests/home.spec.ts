import {test, expect} from '@playwright/test';

test.describe('Home', () => {
    test('Open Homepage and verify title', async ({ page }) => {
        //open the url 
        await page.goto('https://practice.sdetunicorns.com/');

        //verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")

    });

    test('Open about page and verify title', async ({ page }) => {

     //await page.goto('https://practice.sdetunicorns.com/about/');

        await page.getByRole('link', { name: 'About' })

        await expect(page).toHaveTitle("About – Practice E-Commerce Site")

    });
    test('Click get started using CSS selectors', async ({ page }) => {

     await page.goto('https://practice.sdetunicorns.com');

    //click the button
    await page.locator('#get-started').click();

        //verify the url #egt-started
        await expect(page).toHaveURL(/.*get-started/)
  
    });
    
test('Verify Heading Text using Text Selector', async ({ page }) => {

     await page.goto('https://practice.sdetunicorns.com');

    //Fine the text locator
    const headingText = page.locator('text=Think different. Make different.')

        //verify heading text is visible
        await expect(headingText).toBeVisible();
  
    });
    test('Verify Home link is enabled using test and css selector', async ({ page }) => {

     await page.goto('https://practice.sdetunicorns.com');

    //Find the Home text
    //const homeText = await page.locator('#zak-primary-menu >> text=Home')
        const homeText = page.locator('#zak-primary-menu:has-text("Home")')

        //verify home text is enabled
        await expect(homeText).toBeEnabled();
  
    });

    test('Verify serch icon is visible using css xpath selector', async ({ page }) => {

     await page.goto('https://practice.sdetunicorns.com');

    //Find the serch icon
        const serchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");

        //verify SerchIcon is visible
        await expect(serchIcon).toBeVisible();
  
    });

    test('verify test for all vav link', async ({ page }) => {
        const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        //find the nav link
        const navLinks = page.locator('#zak-primary-menu li[id*=menu]')

        //print out all the link
       for (const el of await navLinks.elementHandles()) {
        console.log(await el.textContent());
       }
        //verify nav link text 
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        //expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
        
    }) 
});