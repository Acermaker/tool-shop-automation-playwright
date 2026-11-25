import { test, expect } from '@playwright/test';
import { CustomerRegistrationPage } from '../pages/registration.page';
import { LoginFormPage } from '../pages/login.page';
import { ProductPage } from "../pages/product.page";
import { CheckoutPage } from '../pages/checkout.page';
import { beforeEach } from 'node:test';


test('Registration, Login, productsearch and addtocart, checkout', async ({ page }) => {
    const registrationPage = new CustomerRegistrationPage(page);
    const loginFormPage = new LoginFormPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    //For Registration

    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const randomUser = {
        firstName: `Users${Math.floor(Math.random() * 1000)}`,
        lastName: `Surname${Math.floor(Math.random() * 1000)}`,
        dateOfBirth: '1995-05-20',
        country: 'Nepal',
        postalCode: `${Math.floor(10000 + Math.random() * 90000)}`,
        housenumber: `${Math.floor(1 + Math.random() * 999)}`,
        street: `Main Street ${Math.floor(1 + Math.random() * 100)}`,
        city: 'Pokhara',
        state: 'Kaski',
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

    await expect(registrationPage.locators.cityInput).not.toBeEmpty({ timeout: 5000 });
    await registrationPage.fillCity(randomUser.city);

    await registrationPage.fillState(randomUser.state);
    await registrationPage.fillPhoneNumber(randomUser.phone);
    await registrationPage.fillEmailAddress(randomUser.emailAddress);
    await registrationPage.fillPassword(randomUser.password);

    await registrationPage.clickRegister();
    // await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login', { timeout: 15000 });

    // Login with registered credentials:

    await loginFormPage.fillEmailAddress(randomUser.emailAddress);
    await loginFormPage.fillPassword(randomUser.password);
    await loginFormPage.clickLoginButton();
    await expect(page).toHaveURL(/.*account/); // https://practicesoftwaretesting.com/account

    // Seraching and adding products to cart

    await page.goto('https://practicesoftwaretesting.com/');
    await productPage.searchProduct('Combination Pliers');
    await productPage.selectProductByName('Combination Pliers');
    await productPage.addToCart();
    await productPage.goToCart();
    await expect(page).toHaveURL(/.*checkout/);

    //Checkout Process

    await checkoutPage.proceedThroughCartandSignIn();
    await checkoutPage.proceedPastBillingAddress();
    await checkoutPage.completePayment('Cash on Delivery');

    await expect(checkoutPage.getSuccessMessage()).toContainText('Payment was successful');


});


