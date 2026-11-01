# Playwright Automation – Page Object Model

UI test automation built with **Playwright** and **TypeScript**, using the **Page Object Model (POM)**.

Site under test: [SauceDemo](https://www.saucedemo.com), a demo online store.

## The test

`tests/checkout.spec.ts` covers one end-to-end user journey:

1. **Log in** as `standard_user`
2. **Add** "Sauce Labs Backpack" to the cart and check the cart badge shows 1
3. **Check out** – verify the cart, enter customer details, finish, and see "Thank you for your order!"

## Project structure

```
src/
  pages/
    BasePage.ts          Shared behaviour for all page objects (goto)
    LoginPage.ts         Username, password, login button
    InventoryPage.ts     Product list, add to cart, cart icon
    CartPage.ts          Items in cart, checkout button
    CheckoutPage.ts      Customer details form, finish, confirmation
  fixtures/index.ts      Gives tests ready-made page objects
tests/
  checkout.spec.ts       Login → add to cart → checkout
playwright.config.ts     Base URL, browser, reporters, screenshots/videos
```

## Getting started

Prerequisite: Node.js 20 or newer.

```bash
npm install
npx playwright install chromium
```

## Commands

| Command               | What it does                           |
| --------------------- | -------------------------------------- |
| `npm test`            | Run the tests                          |
| `npm run test:headed` | Run with the browser visible           |
| `npm run test:ui`     | Open Playwright's interactive UI mode  |
| `npm run report`      | Open the HTML report from the last run |
| `npm run lint`        | Check code with ESLint                 |
| `npm run typecheck`   | Check TypeScript types                 |

## Design decisions

- **Page Object Model** – each page class holds its locators and actions; the test only describes what the user does. If the UI changes, only the page object needs updating.
- **Fixtures** – the test asks for `loginPage`, `cartPage`, etc. as arguments instead of creating them itself.
- **Stable locators** – `getByTestId` (the site's `data-test` attributes) and `getByRole`, instead of long CSS or XPath selectors.
- **Test steps** – `test.step` splits the journey into named steps that show up in the HTML report.
- **Debugging on failure** – screenshots and videos are kept for failed tests.
- **CI** – GitHub Actions runs lint, type check, formatting check and the tests on every push, and uploads the HTML report.
