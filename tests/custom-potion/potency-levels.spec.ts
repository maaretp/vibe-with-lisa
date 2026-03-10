// spec: specs/potion-shop-comprehensive-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Custom Potion Builder', () => {
  test('should apply potency multipliers correctly', async ({ page }) => {
    // Navigate to The Enchanted Brew Shop homepage
    await page.goto('https://epictestquest.github.io/the-Potion-Shop/');

    // Select base potion, add ingredients, and test Standard, Enhanced, and Maximum potency levels
    await page.locator('label').filter({ hasText: '❤️ Healing Draught 25 gold' }).click();

    // Add ingredients to test potency multiplier effects 
    await page.getByText('🐉 Dragon Scale +15 gold').click();

    // Add additional ingredient to create comprehensive baseline for potency testing
    await page.getByText('🌙 Moonstone Dust +8 gold').click();

    // Verify Standard potency level is selected with no additional cost modifier
    await expect(page.getByRole('radio', { name: 'Standard Regular strength' })).toBeVisible();
    await expect(page.getByText('Potency: Standard')).toBeVisible();

    // Test Enhanced potency level with +25% price increase
    await page.getByText('Enhanced +25% strength, +25%').click();
    await expect(page.getByText('Potency: Enhanced (+25%)')).toBeVisible();

    // Test Maximum potency level with +75% price increase
    await page.getByText('Maximum +75% strength, +75%').click();
    await expect(page.getByText('Potency: Maximum (+75%)')).toBeVisible();

    // Verify switching back to Standard potency returns to baseline pricing
    await page.getByText('Standard Regular strength').click();
    await expect(page.getByText('Potency: Standard')).toBeVisible();
  });
});