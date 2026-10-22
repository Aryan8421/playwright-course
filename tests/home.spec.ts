import { test, expect } from '@playwright/test';
import HomePage from '../Pages/home.page';

test.describe('Home', () => {
    let homePage;

    test('Open homapage and verify title', async ({ page }) => {  

    homePage = new HomePage(page);

        //open the URL
        await page.goto("https://practice.sdetunicorns.com/");

        //verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    })
    test('Open About page and verify title', async ({ page }) => {

        //Open about page
        await page.goto("https://practice.sdetunicorns.com/about/")

        //Verify title
        await expect(page).toHaveTitle("About – Practice E-Commerce Site")

    })

    test('click on the get started button and verify the url', async ({ page }) => {
    homePage = new HomePage(page);


        //open the URL
        await page.goto("https://practice.sdetunicorns.com/")

        //Click on the get-started Button
        // await page.locator("#get-started").click()
        await homePage.getstartedBtn

        //verify the URL #get-started //used RegExp here insted of the whole url RegExp(/.*/)
        await expect(page).toHaveURL(/.*#get-started/);
        

    })

    test('Verify the heading text is visible using the text selector', async ({ page }) => {
    homePage = new HomePage(page);


        //open the URL
        await page.goto("https://practice.sdetunicorns.com/")

        //find the text selector
        // const headingText = page.locator('text=Think different. Make different.')
        const headingText = await homePage.headingText


        //verify heading text is visible
        await expect(headingText).toBeVisible();

    })

    test('Verify Home link is enabled using text and CSS selector', async ({ page }) => {
            homePage = new HomePage(page);


        await page.goto("https://practice.sdetunicorns.com/");

        //find the home text
        // const hometext = page.locator('#zak-primary-menu >> text=Home')
        const hometext = await homePage.homeLink

        //verify homeText is enabled
        await expect(hometext).toBeEnabled();

    })

    test('Verify the serch icon is visible using xpath selector', async ({ page }) => {

            homePage = new HomePage(page);


        await page.goto("https://practice.sdetunicorns.com/")

        // fidn the serch icoe
        // const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
        const searchIcon = await homePage.searchIcon

        //verify search icon is visible
        await expect(searchIcon).toBeVisible();

    })

    test('Verify text for all Nav Link', async ({ page }) => {
            homePage = new HomePage(page);


        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        await page.goto("https://practice.sdetunicorns.com/")

        // fild the nav links
        // const navLinks = page.locator('#zak-primary-nav li[id*=menu]')
        const navLinks = await homePage.navLinks

        //Verify navLinks Text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);


    })


    //same as above but here we are checking Nth Locator
    test('Vrify NTH locator', async ({ page }) => {

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        await page.goto("https://practice.sdetunicorns.com/")

        // fild the Nth Locator
        const navLinks = page.locator('#zak-primary-nav li[id*=menu]').nth(3);

        //Verify navLinks Text
        expect(await navLinks.textContent()).toEqual(expectedLinks[3]);

        
    })

     test('Verify locatoer and the using for loop print it', async ({ page }) => {

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        await page.goto("https://practice.sdetunicorns.com/")

        // fild the Nth Locator
        const navLinks = page.locator('#zak-primary-nav li[id*=menu]')

        //fot loop and print the elemnets 
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
            
        }

        //Verify navLinks Text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);

     })

})



