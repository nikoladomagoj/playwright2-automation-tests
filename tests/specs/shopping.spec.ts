import { test, expect } from '@playwright/test';
import { ShoppingPage } from '../pom/shopping.page';
import { randomString } from '../utility/random';

test.describe('ShoppingPage', () => {
  let shopPage: ShoppingPage;

  test.beforeEach(async ({page}) => {
    shopPage = new ShoppingPage(page);
    await shopPage.goto();
  });

  test('Login into account and buy something', async ({}) => {

    await shopPage.consent.click();

    await shopPage.signuplogin.click();

    await shopPage.email.click();
    await shopPage.email.fill('practicant@gmail.com')
    await shopPage.password.click();
    await shopPage.password.fill('test');
    await shopPage.login.click();

    await shopPage.products.click();

    await shopPage.addtocart.click();
    expect (shopPage.addtocartinfo).toBeInViewport();
    await shopPage.viewcart.click();

    await shopPage.checkout.click();

    await shopPage.placeorder.click();

    await shopPage.nameoncard.click();
    await shopPage.nameoncard.fill('practicant');
    await shopPage.cardnumber.click();
    await shopPage.cardnumber.fill(randomString(5));
    await shopPage.cvc.click();
    await shopPage.cvc.fill(randomString(5));
    await shopPage.expirationmm.click();
    await shopPage.expirationmm.fill(randomString(2));
    await shopPage.expirationyyyy.click();
    await shopPage.expirationyyyy.fill('2026');
    await shopPage.payandconfirm.click();
    
    expect (shopPage.payandconfirminfo).toBeInViewport();
    await shopPage.orderplaced.click();
  })
})

