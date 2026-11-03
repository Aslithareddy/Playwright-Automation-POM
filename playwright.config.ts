import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,
  /* Retry on CI only, to absorb flakiness from the public demo site */
  retries: isCI ? 2 : 0,
  /* Run up to 3 tests at the same time */
  workers: 3,
  reporter: [['list'], ['html', { open: 'never' }]],
  /* Shared settings for all tests. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL ?? 'https://www.saucedemo.com',
    /* SauceDemo marks elements with data-test="...", so getByTestId() reads that attribute */
    testIdAttribute: 'data-test',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Keep a screenshot and video of every test, passed or failed */
    screenshot: 'on',
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
