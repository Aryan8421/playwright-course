
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
    ['github'],
  ],

  use: {
    baseURL: 'https://practice.sdetunicorns.com/',
    trace: 'retain-on-failure',
  },

  projects: isCI
    ? [
        {
          name: 'chromium',
          use: {
            ...devices['Desktop Chrome'],
            headless: true,
          },
        },
      ]
    : [
        {
          name: 'chromium',
          use: {
            ...devices['Desktop Chrome'],
            headless: false,
          },
        },
      ],
});
