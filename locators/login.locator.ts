import { Locator, Page } from "@playwright/test";

export interface LoginForm {
    emailAddress: string;
    password: string;
}

export interface LoginFormLocators {
    emailAddressInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    forgotYourPassword: Locator;
    getErrorMessage: Locator;

}

export const loginFormLocators = (page: Page): LoginFormLocators => ({

    emailAddressInput: page.getByRole('textbox', { name: 'Email address *' }),
    passwordInput: page.getByRole('textbox', { name: 'Password *' }),
    loginButton: page.getByRole('button', { name: 'Login' }),

    forgotYourPassword: page.locator(`app-root > div.container > app-forgot-password`),
    getErrorMessage: page.locator('.alert.alert-danger'),

});