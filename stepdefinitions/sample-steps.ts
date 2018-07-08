import { browser, protractor } from "protractor";
import { PageObject } from "../pages/sample-page";
import {Given} from "cucumber";
const { When, Then } = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const pageObj: PageObject = new PageObject();

Given(/^I load up the sample hello page$/, async () => {
    await browser.get(browser.baseUrl);
    await browser.sleep(1500);
});

When(/^I see "(.*?)"$/, async (text) => {
    await browser.wait(() => { return pageObj.title.isPresent()}, 5000);
    // await expect(pageObj.title.getAttribute(`innerHTML`)).to.equal(text);
    //await expect(pageObj.title.getId()).to.equal(text);
    await expect(pageObj.title.getText()).to.eventually.equal(text);
});

Then(/^I should click the button$/, async () => {
    await browser.wait(() => { return pageObj.btn.isPresent()}, 5000);
    await pageObj.btn.click();
    await browser.sleep(1000);
});