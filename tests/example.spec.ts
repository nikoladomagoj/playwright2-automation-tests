import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click({
    button: 'right'
});
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('practicant@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByText('Add to cart').nth(3).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('practicant');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('16164194946');
  await page.getByRole('textbox', { name: 'ex.' }).click();
  await page.locator('input[name="card_number"]').fill('16164194946311');
  await page.getByRole('textbox', { name: 'ex.' }).click();
  await page.getByRole('textbox', { name: 'ex.' }).fill('311');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('05');
  await page.getByRole('textbox', { name: 'YYYY' }).click();
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2026');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});