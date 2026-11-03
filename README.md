# Playwright Automation – Page Object Model

UI test automation built with **Playwright** and **TypeScript**, using the **Page Object Model (POM)**.

Site under test: [SauceDemo](https://www.saucedemo.com), a demo online store.

## The test

`tests/login.spec.ts` logs in as `standard_user` and checks that the Products page opens.

## Project structure

```
src/
  pages/
    LoginPage.ts         Username, password, login button
    InventoryPage.ts     Products page shown after login
tests/
  login.spec.ts          Log in and land on the Products page
playwright.config.ts     Base URL, browser, reporters, screenshots/videos
```

## Getting started

Prerequisite: Node.js 20 or newer.

```bash
npm install
npx playwright install chromium firefox webkit
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
- **Stable locators** – `getByTestId` (the site's `data-test` attributes) and `getByRole`, instead of long CSS or XPath selectors.
- **Debugging on failure** – screenshots and videos are kept for failed tests.
- **CI** – GitHub Actions runs lint, type check, formatting check and the tests on every push, and uploads the HTML report.
