import { Page } from '@playwright/test';


class BlogPage {
    private page: Page;
    recentPostList: import("playwright-core").Locator;

    constructor(page: Page) {
        this.page = page;
        this.recentPostList = page.locator('#recent-posts-3 ul li');

    }

    async navigate(){

        await this.page.goto('https://practice.sdetunicorns.com/blog/');
    }

}
export default BlogPage;