import { Page, Locator, expect } from '@playwright/test';
import { CustomerRegistrationLocators, customerRegistrationLocators } from '../locators/registration.locator';


export class CustomerRegistrationPage {
    readonly page: Page;
    readonly locators: CustomerRegistrationLocators;
    readonly url = 'https://practicesoftwaretesting.com/auth/register';

    constructor(page: Page) {
        this.page = page;
        this.locators = customerRegistrationLocators(page);
    }

    async gotoTOOLSHOP() {
        await this.page.goto(this.url);
    }

    async fillFirstName(firstName: string) {
        await this.locators.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.locators.lastNameInput.fill(lastName);
    }

    async fillDateOfBirth(dateOfBirth: string) {
        await this.locators.dateOfBirthInput.fill(dateOfBirth);
    }

    async selectCountry(country: string) {
        await this.locators.countryInput.selectOption(country);
    }

    async fillPostalCode(postalCode: string) {
        await this.locators.postalCodeInput.fill(postalCode);
    }

    async fillHouseNumber(houseNumber: string) {
        await this.locators.houseNumberInput.fill(houseNumber);
    }

    async fillStreet(street: string) {
        await this.locators.streetInput.fill(street);
    }

    async fillCity(city: string) {
        await this.locators.cityInput.fill(city);
    }

    async fillState(state: string) {
        await this.locators.stateInput.fill(state);
    }

    async fillPhoneNumber(phoneNumber: string) {
        await this.locators.phoneNumberInput.fill(phoneNumber);
    }

    async fillEmailAddress(emailAddress: string) {
        await this.locators.emailAddressInput.fill(emailAddress);
    }

    async fillPassword(password: string) {
        await this.locators.passwordInput.fill(password);
    }

    async clickRegister() {
        await this.locators.registerButtonInput.click();
    }

    //Negative Test Case:

    getErrorMessage(messageText: string): Locator {
        return this.page.locator('.alert-danger', { hasText: messageText });
    }













}