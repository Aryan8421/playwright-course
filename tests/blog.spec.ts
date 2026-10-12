import {test, expect} from '@playwright/test';

test.describe('Blog', () => {

    test('Verify recent post  count and verify  the lenght of each list item', async ({ page }) => {

        //open the url
        await page.goto('https://practice.sdetunicorns.com/blog/');

        //get the recent post list element 
        const recentPostList = page.locator('#recent-posts-3 ul li');

        //loop throught the list and assert the char lenght > 10
        for (const el of await recentPostList.elementHandles()) {
            console.log((await el.textContent()));
            expect(((await el.textContent()).trim()).length).toBeGreaterThan(10)
        }

        //assert the total lenght = 5
        expect(await recentPostList.count()).toEqual(5);
        
    })
    
    
})

