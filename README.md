# Tool Shop E2E Test Automation (Playwright + TypeScript)

End-to-end UI test automation framework built with **Playwright** and **TypeScript** for the [Practice Software Testing (Tool Shop)](https://practicesoftwaretesting.com) demo e-commerce application.

This project implements a modular **Page Object Model (POM)** architecture with decoupled locator definitions, reusable page action classes, dynamic test data generation, and HTML reporting.

---

## Tech Stack

- **Framework:** [Playwright](https://playwright.dev)
- **Language:** TypeScript
- **Design Pattern:** Page Object Model (Separated `locators/`, `pages/`, and `tests/`)
- **Environment Management:** `dotenv`
- **Reporting:** Playwright Built-in HTML Reporter (with screenshots & traces)

---

## Project Structure

```text
tool-shop-automation-playwright/
├── locators/                                  # Centralized element locators & TypeScript interfaces
│   ├── checkout.locator.ts
│   ├── login.locator.ts
│   ├── product.locator.ts
│   └── registration.locator.ts
├── pages/                                     # Page Object classes encapsulating user actions
│   ├── checkout.page.ts
│   ├── login.page.ts
│   ├── product.page.ts
│   └── registration.page.ts
├── tests/                                     # End-to-end, positive, and negative test specs
│   ├── product-add-and-checkout.spec.ts
│   ├── registration-and-login.spec.ts
│   └── Valid-and-invalid-registration.spec.ts
├── playwright.config.ts                       # Playwright configuration (browsers, reporters, screenshots)
├── package.json
└── .gitignore
```

---

## Automated Test Scenarios

1. **Customer Registration (Positive & Negative):**
   - Valid registration using dynamically generated unique user credentials.
   - Validation checks for empty required fields, duplicate email addresses, and weak passwords.
2. **Authentication Flow (Registration → Login):**
   - End-to-end registration followed by immediate login with newly created credentials.
   - Negative login verification using invalid passwords.
3. **Full E2E Purchase Flow:**
   - User registration & login → Product search (`Combination Pliers`) → Add to cart → 4-step checkout wizard (Cart, Sign In, Billing Address, and Cash on Delivery payment confirmation).

---

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org) (v18 or higher)
- npm

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Acermaker/tool-shop-automation-playwright.git
cd tool-shop-automation-playwright
npm install
npx playwright install
```

### 3. Environment Configuration (Optional)
Create a `.env` file in the root directory if running standalone login tests with pre-seeded accounts:

```env
TEST_EMAIL=customer@practicesoftwaretesting.com
TEST_PASSWORD=welcome01
```

---

## Running Tests

- **Run all tests (headless):**
  ```bash
  npx playwright test
  ```

- **Run tests in headed mode (visible browser):**
  ```bash
  npx playwright test --headed
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/product-add-and-checkout.spec.ts
  ```

- **Open interactive Playwright UI Mode:**
  ```bash
  npx playwright test --ui
  ```

---

## Viewing Test Reports

After running the test suite, view the generated HTML report (including step-by-step logs and screenshots):

```bash
npx playwright show-report
```
