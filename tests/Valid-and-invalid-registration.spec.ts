import { test, expect } from '@playwright/test';
import { CustomerRegistrationPage } from '../pages/registration.page';


test('Customer Registration Form with Valid Credentials', async ({ page, request }) => {
    const registrationPage = new CustomerRegistrationPage(page);

    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const randomUser = {
        firstName: `Users${Math.floor(Math.random() * 1000)}`,
        lastName: `Surname${Math.floor(Math.random() * 1000)}`,
        dateOfBirth: '1995-05-20',
        country: 'Nepal',
        postalCode: `${Math.floor(10000 + Math.random() * 90000)}`,
        housenumber: `${Math.floor(1 + Math.random() * 999)}`,
        street: `Main Street ${Math.floor(1 + Math.random() * 100)}`,
        city: 'Kathmandu',
        state: 'Bagmati',
        phone: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
        emailAddress: `testuser_${uniqueId}@example.com`,
        password: `Welcome@${Math.floor(1000 + Math.random() * 9000)}`,

    }

    await page.goto('https://practicesoftwaretesting.com/auth/register');

    await registrationPage.fillFirstName(randomUser.firstName);
    await registrationPage.fillLastName(randomUser.lastName);
    await registrationPage.fillDateOfBirth(randomUser.dateOfBirth);
    await registrationPage.selectCountry(randomUser.country);
    await registrationPage.fillPostalCode(randomUser.postalCode);
    await registrationPage.fillHouseNumber(randomUser.housenumber);
    await registrationPage.fillStreet(randomUser.street);
    await registrationPage.fillCity(randomUser.city);
    await registrationPage.fillState(randomUser.state);
    await registrationPage.fillPhoneNumber(randomUser.phone);
    await registrationPage.fillEmailAddress(randomUser.emailAddress);
    await registrationPage.fillPassword(randomUser.password);

    await registrationPage.clickRegister();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login', { timeout: 15000 });    // https://practicesoftwaretesting.com/auth/login

});

test.describe('Customer Registartion - Negative Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/auth/register');

    });

    test('Should show validation errors when submitting empty form', async ({ page }) => {
        const registrationPage = new CustomerRegistrationPage(page);
        await registrationPage.clickRegister();

        await expect(registrationPage.getErrorMessage('First name is required')).toBeVisible();
        await expect(registrationPage.getErrorMessage('Email is required')).toBeVisible();
        await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/register');

    });

    test('Should show error when registering with an already xisting email', async ({ page }) => {
        const registrationPage = new CustomerRegistrationPage(page);

        await registrationPage.fillFirstName('Jane');
        await registrationPage.fillLastName('Doe');
        await registrationPage.fillDateOfBirth('1990-01-05');
        await registrationPage.selectCountry('United States of America (the)');
        await registrationPage.fillPostalCode('10001');
        await registrationPage.fillHouseNumber('145B');
        await registrationPage.fillStreet('Main Street 123');
        await registrationPage.fillCity('New York');
        await registrationPage.fillState('NY');
        await registrationPage.fillPhoneNumber('5551234567');
        await registrationPage.fillEmailAddress('customer@practicesoftwaretesting.com');
        await registrationPage.fillPassword('Welcome@1234');

        await registrationPage.clickRegister();
        await expect(registrationPage.getErrorMessage('A customer with this email address already exists.')).toBeVisible();

    });

    test('Should show error when password is too weak', async ({ page }) => {
        const registrationPage = new CustomerRegistrationPage(page);

        await registrationPage.fillFirstName('Jane');
        await registrationPage.fillLastName('Doe');
        await registrationPage.fillDateOfBirth('1990-01-05');
        await registrationPage.selectCountry('United States of America (the)');
        await registrationPage.fillPostalCode('10001');
        await registrationPage.fillHouseNumber('145B');
        await registrationPage.fillStreet('Main Street 123');
        await registrationPage.fillCity('New York');
        await registrationPage.fillState('NY');
        await registrationPage.fillPhoneNumber('5551234567');
        await registrationPage.fillEmailAddress('customer@practicesoftwaretesting.com');
        await registrationPage.fillPassword('123');

        await registrationPage.clickRegister();
        await expect(registrationPage.getErrorMessage('Password must be minimal 6 characters long.')).toBeVisible();

    });



});