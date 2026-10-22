class HomePage {
    page: any;
    getstartedBtn: any;
    headingText: any;
    homeLink: any;
    searchIcon: any;
    navLinks: any;

    constructor(page) {
        this.page = page;
        this.getstartedBtn = page.locator("#get-started").click()
        this.headingText =page.locator('text=Think different. Make different.')
        this.homeLink = page.locator('#zak-primary-menu >> text=Home')
        this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
        this.navLinks = page.locator('#zak-primary-nav li[id*=menu]');
    
    
    }   
}

export default HomePage;