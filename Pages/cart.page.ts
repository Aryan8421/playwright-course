import { Page } from '@playwright/test';
import UploadComponent from './Component/upload.component';

class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    UploadComponent() {

        return new UploadComponent(this.page);

    }

}
export default CartPage;
