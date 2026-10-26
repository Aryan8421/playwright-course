import { test, expect } from '@playwright/test';
import BlogPage from '../Pages/blog.page';

test.describe('Blog', () => {
    let blogPage: BlogPage;


    test('Verify recent post  count and verify  the lenght of each list item', async ({ page }) => {
        blogPage = new BlogPage(page);

        //open the url
        // await page.goto('https://practice.sdetunicorns.com/blog/');
        await blogPage.navigate()

        //get the recent post list element 
        // const recentPostList = page.locator('#recent-posts-3 ul li');

        //loop throught the list and assert the char lenght > 10
        for (const el of await blogPage.recentPostList.elementHandles()) {
            //console.log((await el.textContent()));


            expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10)
        }

        //assert the total lenght = 5
        expect(await blogPage.recentPostList.count()).toEqual(5);

    })


})

