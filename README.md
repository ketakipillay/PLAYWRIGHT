Playwright Automation Framework
This repository contains a test automation framework based on Playwright, a Node.js library that enables reliable end-to-end testing for modern web apps.

Features : 
Cross-browser testing: Supports Chromium, Firefox, and WebKit.
Parallel Test Execution: Run tests concurrently for better performance.
Screenshots and Videos: Automatically capture screenshots and videos for failing tests.
Fixtures and Hooks: Setup and teardown your tests easily with Playwright’s fixtures.
Custom Reporter: Configured for better reporting of test results.
Headless or Headed Modes: Run in both headless (faster) and headed (visual) modes.
Prerequisites
Before setting up the project, ensure that you have the following installed:

Node.js (version 14 or above)
npm (comes with Node.js)
Setup and Installation
Clone this repository:

bash
Copy code
git clone https://github.com/ketakipillay/PLAYWRIGHT.git
Navigate into the project directory:

bash
Copy code
cd PLAYWRIGHT
Install dependencies:

bash
Copy code
npm install
Install Playwright browsers:

bash
Copy code
npx playwright install
Running Tests
To execute tests, you can use the following commands:

Run All Tests
bash
Copy code
npx playwright test
Run Tests in a Specific Browser
bash
Copy code
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
Run Tests in Headed Mode
bash
Copy code
npx playwright test --headed
Run a Specific Test File
bash
Copy code
npx playwright test tests/example.spec.ts
Run Tests with UI Reporter
Playwright comes with a built-in interactive test report that can be launched using:

bash
Copy code
npx playwright show-report
Test Reports
HTML Report: After each test run, an HTML report will be generated in the playwright-report directory. You can open this report in a browser to inspect detailed test results.

bash
Copy code
npx playwright show-report
Screenshots and Videos: Playwright automatically captures screenshots and videos for failed tests, which are available in the test-results folder.

Writing Tests
You can write your test cases in TypeScript or JavaScript. Here’s a sample test file structure:

typescript
Copy code
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
Configuration
The Playwright configuration file playwright.config.ts contains various settings for:

Browser configurations (e.g., Chromium, Firefox, WebKit)
Test directory paths
Global timeout for tests
Base URL for tests
Headless mode
Parallel execution
You can modify these settings according to your project requirements.

Project Structure
bash
Copy code
PLAYWRIGHT/
│
├── tests/                 # Test files
│   └── example.spec.ts     # Example test file
│
├── playwright.config.ts    # Playwright configuration file
├── package.json            # Node.js dependencies and scripts
├── README.md               # Project documentation
└── ...


Troubleshooting
Stale Element Reference Error: Ensure that the elements are stable before interacting with them using Playwright's wait functions.
Timeouts: Playwright automatically retries and waits for elements, but you can adjust the timeout in the playwright.config.ts file.
