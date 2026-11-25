import { Page, Locator, expect } from '@playwright/test';
import { LoginFormLocators, loginFormLocators } from '../locators/login.locator';

export class LoginFormPage {
    readonly page: Page;
    readonly locators: LoginFormLocators;
    readonly url = 'https://practicesoftwaretesting.com/auth/login';

    constructor(page: Page) {
        this.page = page;
        this.locators = loginFormLocators(page);
    }

    async gotoTOOLSHOP() {
        await this.page.goto(this.url);
    }

    async fillEmailAddress(emailAddress: string) {
        await this.locators.emailAddressInput.fill(emailAddress);
    }

    async fillPassword(password: string) {
        await this.locators.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.locators.loginButton.click();
    }

    async clickForgetYourPassword() {
        await this.locators.forgotYourPassword.click();
    }

    getErrorMessage(): Locator {
        return this.page.locator('.alert-danger');
    }








}

