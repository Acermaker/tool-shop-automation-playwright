import { Locator, Page } from '@playwright/test';

export interface ProductLocators {
    searchInput: Locator;
    searchButton: Locator;
    addToCartButton: Locator;
    cartNavIcon: Locator;
}

export const productLocators = (page: Page): ProductLocators => ({

    searchInput: page.getByPlaceholder('Search'),
    searchButton: page.getByRole('button', { name: 'Search' }),
    addToCartButton: page.getByRole('button', { name: 'Add to cart' }),
    cartNavIcon: page.locator('[data-test="nav-cart"]'),

});