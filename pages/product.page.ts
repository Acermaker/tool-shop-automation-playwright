import { Page, Locator, expect } from '@playwright/test';
import { ProductLocators, productLocators } from '../locators/product.locator';

export class ProductPage {
    private locators: ProductLocators;

    constructor(private page: Page) {
        this.locators = productLocators(page);
    }

    async searchProduct(productName: string) {
        await this.locators.searchButton.click();
        await this.locators.searchInput.fill(productName);
    }

    async selectProductByName(productName: string) {
        await this.page.getByRole('heading', { name: productName }).first().click();
    }

    async addToCart() {
        await this.locators.addToCartButton.click();
    }

    async goToCart() {
        await this.locators.cartNavIcon.click();
    }
}