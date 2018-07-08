import { element, by } from "protractor";

export class PageObject {
    public title: any;
    public btn: any;

    constructor() {
        this.title = element(by.id('helloWorld'));
        this.btn = element(by.id(`btnShowMe`));
    }
}