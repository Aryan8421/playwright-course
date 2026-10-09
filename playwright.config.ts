import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 10000,
  },

  fullyParallel: true,

  forbidOnly: isCI,

  retries: isCI ? 2 : 0,

  workers: isCI ? 1 : undefined,

  reporter: [
    ['html'],
    ['github']
  ],

  use: {
    trace: 'on-first-retry',
  },

  projects: isCI
    ? [
        // CI → Chromium only
        {
          name: 'chromium',
          use: {
            ...devices['Desktop Chrome'],
            headless: true,
          },
        },
      ]
    : [
        // Local → Chromium
        {
          name: 'chromium',
          use: {
            ...devices['Desktop Chrome'],
            headless: false,
          },
        },

        // Local → Firefox
        {
          name: 'firefox',
          use: {
            ...devices['Desktop Firefox'],
            headless: false,
          },
        },

        // Local → WebKit
        {
          name: 'webkit',
          use: {
            ...devices['Desktop Safari'],
            headless: false,
          },
        },
      ],
});