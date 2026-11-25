import { test, expect } from '@playwright/test';
import { CustomerRegistrationPage } from '../pages/registration.page';
import { LoginFormPage } from '../pages/login.page';

test('Register a new customer and log in with those credentials', async ({ page }) => {
    const registrationPage = new CustomerRegistrationPage(page);
    const loginFormPage = new LoginFormPage(page);

    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const randomUser = {
        firstName: `Users${Math.floor(Math.random() * 1000)}`,
        lastName: `Surname${Math.floor(Math.random() * 1000)}`,
        dateOfBirth: '1995-05-20',
        country: 'Nepal',
        postalCode: `${Math.floor(10000 + Math.random() * 90000)}`,
        housenumber: `${Math.floor(1 + Math.random() * 999)}`,
        street: `Main Street ${Math.floor(1 + Math.random() * 100)}`,
        city: 'Hetauda',
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
    await expect(page).toHaveURL(/.*login/, { timeout: 15000 });

    //LOGIN WITH SAME REGISTRATION DETAILS:

    await loginFormPage.fillEmailAddress(randomUser.emailAddress);
    await loginFormPage.fillPassword(randomUser.password);
    await loginFormPage.clickLoginButton();


    await expect(page).toHaveURL(/.*account/); // https://practicesoftwaretesting.com/account

});

test('Register a new customer but login try with invalid credentials', async ({ page }) => {
    const registrationPage = new CustomerRegistrationPage(page);
    const loginFormPage = new LoginFormPage(page);

    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const randomUser = {
        firstName: `Users${Math.floor(Math.random() * 1000)}`,
        lastName: `Surname${Math.floor(Math.random() * 1000)}`,
        dateOfBirth: '1995-05-20',
        country: 'Nepal',
        postalCode: `${Math.floor(10000 + Math.random() * 90000)}`,
        housenumber: `${Math.floor(1 + Math.random() * 999)}`,
        street: `Main Street ${Math.floor(1 + Math.random() * 100)}`,
        city: 'Lalitpur',
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
    await expect(page).toHaveURL(/.*login/, { timeout: 15000 });


    //LOGIN WITH invalid credentials after successful REGISTRATION:

    await loginFormPage.fillEmailAddress(randomUser.emailAddress);
    await loginFormPage.fillPassword('WrongPassword@999');
    await loginFormPage.clickLoginButton();

    await expect(loginFormPage.getErrorMessage()).toContainText('Invalid email or password');
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');

});
