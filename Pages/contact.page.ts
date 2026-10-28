import { Page } from '@playwright/test';


class ContactPage {
    private page: Page;
    nameInput: import("playwright-core").Locator;
    emailInput: import("playwright-core").Locator;
    phoneInput: import("playwright-core").Locator;
    messageTextarea: import("playwright-core").Locator;
    submitBtn: import("playwright-core").Locator;
    sucessTxt: import("playwright-core").Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('.contact-name input')
        this.emailInput = page.locator('.contact-email input')
        this.phoneInput = page.locator('.contact-phone input')
        this.messageTextarea = page.locator('.contact-message textarea')
        this.submitBtn = page.locator('.everest-forms-submit-button')
        this.sucessTxt = page.locator('div[role="alert"]')
    }

    async navigate(){
        await this.page.goto('/contact');
    }

    async submitForm(name: string, email: string, phone: string, message: string){
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.phoneInput.fill(phone)
        await this.messageTextarea.fill(message)
        await this.submitBtn.click()
    }

}
export default ContactPage;