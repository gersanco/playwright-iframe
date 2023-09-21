import { test, expect } from '@playwright/test';

test('scrollIntoViewIfNeeded to iFrame', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByText('Get started by editing app/page.tsxBy')
  ).toBeVisible();

  // getByRole('heading', { name: 'Video' })

  await expect(
    page
      .frameLocator('iframe[title="YouTube video player"]')
      .getByLabel('Play', { exact: true })
  ).toBeVisible();

  await page
    .frameLocator('iframe[title="YouTube video player"]')
    .getByLabel('Play', { exact: true })
    .scrollIntoViewIfNeeded();

  await page
    .frameLocator('iframe[title="YouTube video player"]')
    .getByLabel('Play', { exact: true })
    .click();
});

test('scrollIntoViewIfNeeded to header', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByText('Get started by editing app/page.tsxBy')
  ).toBeVisible();

  // getByRole('heading', { name: 'Video' })

  await expect(
    page
      .frameLocator('iframe[title="YouTube video player"]')
      .getByLabel('Play', { exact: true })
  ).toBeVisible();

  await page.getByRole('heading', { name: 'Video' }).scrollIntoViewIfNeeded();

  await page
    .frameLocator('iframe[title="YouTube video player"]')
    .getByLabel('Play', { exact: true })
    .click();
});
