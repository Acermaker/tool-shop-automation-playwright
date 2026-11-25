import { Page, Locator, expect } from "@playwright/test";
import { checkoutLocators, CheckoutLocators } from "../locators/checkout.locator";

export class CheckoutPage {
    private locators: CheckoutLocators;

    constructor(private page: Page) {
        this.locators = checkoutLocators(page);
    }
    async proceedThroughCartandSignIn() {
        await this.locators.proceedStep1Button.click();
        await this.locators.proceedStep2Button.click();
    }

    async proceedPastBillingAddress(housenumber: string = '199') {
        await this.locators.houseNumberInput.fill(housenumber);
        await this.locators.proceedStep3Button.click();
    }

    async completePayment(method: string = 'Cash on Delivery') {
        await this.locators.paymentMethodSelect.selectOption({ label: method });
        await this.locators.confirmButton.click();
    }

    getSuccessMessage(): Locator {
        return this.locators.paymentSuccessMessage;
    }
}