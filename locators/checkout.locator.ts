import { Locator, Page } from "@playwright/test";

export interface CheckoutLocators {
    proceedStep1Button: Locator;
    proceedStep2Button: Locator;

    houseNumberInput: Locator,
    proceedStep3Button: Locator;
    paymentMethodSelect: Locator;
    paymentSuccessMessage: Locator;
    confirmButton: Locator;

}

export const checkoutLocators = (page: Page): CheckoutLocators => ({

    proceedStep1Button: page.locator('[data-test="proceed-1"]'),
    proceedStep2Button: page.locator('[data-test="proceed-2"]'),

    houseNumberInput: page.locator('[data-test="house_number"]'),

    proceedStep3Button: page.locator('[data-test="proceed-3"]'),
    paymentMethodSelect: page.locator('[data-test="payment-method"]'),
    confirmButton: page.locator('[data-test="finish"]'),
    paymentSuccessMessage: page.locator('[data-test="payment-success-message"]'),


});