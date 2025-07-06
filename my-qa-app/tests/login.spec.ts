import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:5173/login')
})

test('The login page have to be dysplayed', async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Connexion' })).toBeVisible;
})

test('All the element of Login page has been dysplayed', async ({page}) => {
  await expect(page.getByPlaceholder('Nom d/utilisateur')).toBeVisible;
  await expect(page.getByRole('button', {name: 'Se connecter'})).toBeVisible;
})

test('Filling the user name is required', async ({page}) => {
  const input = page.getByPlaceholder('Nom d\'utilisateur');
  await expect(input).toHaveAttribute('required', '') // DOM attribute boolean : required="required"
})
