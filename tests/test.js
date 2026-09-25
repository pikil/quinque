import { expect, test } from '@playwright/test'

test('home page shows the game title', async ({ page }) => {
  await page.goto('/quinque/')
  await expect(page.getByRole('heading', { name: /quinque/i })).toBeVisible()
})

test('play page renders the default 7x7 grid', async ({ page }) => {
  await page.goto('/quinque/play')
  await expect(page.getByRole('button', { name: /^Grid cell/ })).toHaveCount(49)
})
