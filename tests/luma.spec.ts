import { test, expect } from '@playwright/test';
import { envVariables } from '../utils/envVariables'; 

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill(envVariables.EMAIL);
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(envVariables.PASSWORD);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('banner').getByText('Welcome, Ketaki Pillay!')).toBeVisible();
});
