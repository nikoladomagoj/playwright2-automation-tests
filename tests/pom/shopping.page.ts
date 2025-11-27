import { Page, Locator } from "@playwright/test";

export class ShoppingPage {
    page: Page;
    consent: Locator;
    signuplogin: Locator;
    email: Locator;
    password: Locator;
    login: Locator;
    products: Locator;
    addtocart: Locator;
    addtocartinfo: Locator;
    viewcart: Locator;
    checkout: Locator;
    placeorder: Locator;
    nameoncard: Locator;
    cardnumber: Locator;
    cvc: Locator;
    expirationmm: Locator;
    expirationyyyy: Locator;
    payandconfirm: Locator;
    payandconfirminfo: Locator;
    orderplaced: Locator;
    


constructor(page: Page) {
    this.page = page;
    this.consent = page.locator('[class="fc-button fc-cta-consent fc-primary-button"]');
    this.signuplogin = page.locator('[class="fa fa-lock"]');
    this.email = page.locator('[data-qa="login-email"]');
    this.password = page.locator('[data-qa="login-password"]');
    this.login = page.locator('[data-qa="login-button"]');
    this.products = page.locator('[class="material-icons card_travel"]');
    this.addtocart = page.locator('[class="btn btn-default add-to-cart"]').first();
    this.addtocartinfo = page.locator('[class="modal-content"]');
    this.viewcart = page.locator('#cartModal a[href="/view_cart"]');
    this.checkout = page.locator('[class="btn btn-default check_out"]');
    this.placeorder = page.locator('[class="btn btn-default check_out"]');
    this.nameoncard = page.locator('[class="form-control"]');
    this.cardnumber = page.locator('[class="form-control card-number"]');
    this.cvc = page.locator('[class="form-control card-cvc"]');
    this.expirationmm = page.locator('[class="form-control card-expiry-month"]');
    this.expirationyyyy = page.locator('[class="form-control card-expiry-year"]');
    this.payandconfirm = page.locator('[class="form-control btn btn-primary submit-button"]');
    this.payandconfirminfo = page.locator('[class="title text-center"]');
    this.orderplaced = page.locator('[class="pull-right"]');
}    

async goto() {
    await this.page.goto('https://automationexercise.com/');
}
}