import { Locator, Page } from '@playwright/test';

export interface CustomerRegistration {

    firstName: string;
    lastName: string;
    dateOfBirth: string;
    country: string;
    postalCode: string;
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    phoneNumber: string;
    emailAddress: string;
    password: string;

}

export interface CustomerRegistrationLocators {

    firstNameInput: Locator;
    lastNameInput: Locator;
    dateOfBirthInput: Locator;
    countryInput: Locator;
    postalCodeInput: Locator;
    houseNumberInput: Locator;
    streetInput: Locator;
    cityInput: Locator;
    stateInput: Locator;
    phoneNumberInput: Locator;
    emailAddressInput: Locator;
    passwordInput: Locator;
    registerButtonInput: Locator;

    //For Negative test cases:
    errorMessageInput: Locator;

}

export const customerRegistrationLocators = (page: Page): CustomerRegistrationLocators => ({

    firstNameInput: page.getByRole('textbox', { name: 'First name' }),
    lastNameInput: page.getByRole('textbox', { name: 'Last name' }),
    dateOfBirthInput: page.getByRole('textbox', { name: 'Date of Birth *' }),
    countryInput: page.getByRole('combobox', { name: 'Country' }),
    postalCodeInput: page.getByRole('textbox', { name: 'Postal code' }),
    houseNumberInput: page.getByRole('textbox', { name: 'House number' }),
    streetInput: page.getByRole('textbox', { name: 'Street' }),
    cityInput: page.getByRole('textbox', { name: 'Street' }),
    stateInput: page.getByRole('textbox', { name: 'State' }),
    phoneNumberInput: page.getByRole('textbox', { name: 'Phone' }),
    emailAddressInput: page.getByRole('textbox', { name: 'Email address' }),
    passwordInput: page.getByLabel('Password'),

    registerButtonInput: page.getByRole('button', { name: 'Register' }),

    //Negative test:

    errorMessageInput: page.locator('.alert-danger'),



});