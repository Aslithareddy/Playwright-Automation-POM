import { expect, test } from '../src/fixtures';

test('user can log in, add a product to the cart and check out', async ({
  page,
  loginPage,
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  const product = 'Sauce Labs Backpack';

  await test.step('log in', async () => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(inventoryPage.title).toHaveText('Products');
  });

  await test.step('add product to cart', async () => {
    await inventoryPage.addToCart(product);
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  await test.step('check out', async () => {
    await inventoryPage.openCart();
    await expect(cartPage.itemNames).toHaveText([product]);
    await cartPage.checkout();

    await checkoutPage.enterDetails('Aslitha', 'Reddy', '500081');
    await checkoutPage.finish();

    await expect(page).toHaveURL(/checkout-complete/);
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });
});
