import {test, expect} from '@playwright/test';

test.describe('Blog', () => {
    test('verify recent post count and verify the lenght of each list item', async ({ page }) => {

        //open the blog page
        await page.goto('https://practice.sdetunicorns.com/blog');

        // get the recent post list element 
        const recentPostlist = page.locator('#recent-posts-3 ul li')

        // loop through the list assert the char lenght > 1o 
    for (const el of await recentPostlist.elementHandles()) {
            console.log((await el.textContent()));
            expect(((await el.textContent()).trim()).length).toBeGreaterThan(10)
        }
        // asset the tolal lenght = 5
        expect(await recentPostlist.count()).toEqual(5);
    })
})

