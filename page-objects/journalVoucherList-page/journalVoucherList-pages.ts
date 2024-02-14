import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class JournalVoucherListPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator
    readonly journalVoucherShortcut: Locator;
    readonly journalVoucherListButton: Locator;
    readonly journalVoucherListsearchSection: Locator;
    readonly journalVoucherListGridSection: Locator;
    readonly journalVouchertext: Locator;
    readonly fromDate: Locator;
    readonly toDate: Locator;
    readonly search: Locator;
    readonly filter: Locator;
    readonly reset: Locator;
    readonly voucherNumber: Locator;
    readonly voucherType: Locator;
    readonly voucherDate: Locator;
    readonly validated: Locator;
    readonly validationDate: Locator;
    readonly voucherRef: Locator;
    readonly vouchertype: Locator;
    readonly fromVoucherNumber: Locator;
    readonly toVoucherNumber: Locator;
    readonly voucherRefAdvancedFilter: Locator;
    readonly errorMessageVochernumber: Locator;


    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherListButton = page.locator('//a[@title="Journal Voucher list"]');
        this.journalVoucherListsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherListGridSection = page.locator('//section//mat-table[@id="JournalVoucherListList"]');
        this.journalVouchertext = page.locator('//h1[@title="Journal Vouchers"]');
        this.fromDate = page.locator('//div//input[@title="From Date"]');
        this.toDate = page.locator('//div//input[@title="To Date"]');
        this.search = page.locator('//button[@title="Search"]');
        this.filter = page.locator('//button[@title="Filter"]');
        this.reset = page.locator('//button[@title="Reset"]');
        this.voucherNumber = page.locator('//mat-header-cell[@id="voucherNumber-Voucher Number"]');
        this.voucherType = page.locator('//mat-header-cell[@id="voucherTypeCode-Voucher Type"]');
        this.voucherDate = page.locator('//mat-header-cell[@id="voucherDate-Voucher Date"]');
        this.validated = page.locator('//mat-header-cell[@id="isValidated-Validated"]');
        this.validationDate = page.locator('//mat-header-cell[@id="validationDate-Validation Date"]');
        this.voucherRef = page.locator('//mat-header-cell[@id="voucherReference-Voucher Reference"]');
        this.vouchertype = page.locator('//iris-voucher-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.fromVoucherNumber = page.locator('//div//input[@title="From voucher number"]');
        this.toVoucherNumber = page.locator('//div//input[@title="To voucher number"]');
        this.voucherRefAdvancedFilter = page.locator('///div//input[@title="Voucher Reference"]');
        this.errorMessageVochernumber = page.locator('//mat-label[text()="Please enter a value greater than or equal to 100"]');
    }

    async verifyBreadCrumbsText(data: string) {
        await expect(this.breadCrumbs).toHaveText(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
    }


    async verifyDashboardText(data: string) {
        await expect(this.dashboard).toHaveText(data);
    }

    async verifyJournalVoucherShortcutButton() {
        expect(this.journalVoucherShortcut).toBeVisible;
    }

    async verifyJournalVoucherListText(data: string) {
        await expect(this.journalVoucherListButton).toHaveText(data);
    }

    async clickOnJournalVoucherListButton() {
        await this.journalVoucherListButton.click();
    }

    async verifyjournalVoucherListsearchSection() {
        expect(this.journalVoucherListsearchSection).toBeVisible;
    }

    async verifyjournalVoucherListGridSection() {
        expect(this.journalVoucherListGridSection).toBeVisible;
    }

    async verifyJournalVoucherText(data: string) {
        await expect(this.journalVouchertext).toHaveText(data);
    }

    async verifyjournalVoucherListAllFields() {
        expect(this.fromDate).toBeVisible;
        expect(this.toDate).toBeVisible;
        expect(this.search).toBeVisible;
        expect(this.filter).toBeVisible;
        expect(this.reset).toBeVisible;
        expect(this.voucherNumber).toBeVisible;
        expect(this.voucherType).toBeVisible;
        expect(this.voucherDate).toBeVisible;
        expect(this.validated).toBeVisible;
        expect(this.validationDate).toBeVisible;
        expect(this.voucherRef).toBeVisible;
    }

    async verifyVoucherTypeDropdownList() {

        const dropdownLst = this.page.locator('//div//mat-option//span//iris-base-label');
        for (let index = 0; index < await dropdownLst.count(); index++) {
            expect(await dropdownLst.nth(index).innerText()).toBeTruthy();

        }
        console.log(await dropdownLst.count());
    }

    async clickonVoucherType() {
        await this.vouchertype.click();
    }

    async clickOnAdvancedSearchButton() {
        await this.filter.click();
    }

    async selectVoucherType(data: string) {
        await this.vouchertype.click();
        const vouchertypeinput = this.page.locator('//iris-base-layout//iris-select-formfield//mat-form-field[contains(@class,"type")]//input');
        vouchertypeinput.fill(data);
        const selectvouchertype = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
        selectvouchertype.click();
    }

    async verifyFromVoucherNumber() {
        expect(this.fromVoucherNumber).toBeVisible;
    }

    async enterFromVoucherNumber(fromvoucherNumber: string) {
        await this.fromVoucherNumber.clear();
        await this.fromVoucherNumber.fill(fromvoucherNumber);
    }

    async enterToVoucherNumber(tovoucherNumber: string) {
        await this.toVoucherNumber.clear();
        await this.toVoucherNumber.fill(tovoucherNumber);
    }

    async verifyErrorForVoucherNumber(data: string) {
        await expect(this.errorMessageVochernumber).toHaveText(data);
    }

    async verifyFromDate() {
        expect(this.fromDate).toBeVisible;
    }

    async enterfromDate(fromDate: string) {
        await this.fromDate.clear();
        await this.fromDate.fill(fromDate);
    }

    async enterToDate(date: string) {
        await this.toDate.clear();
        await this.toDate.fill(date);
    }

    async verifyToDate() {
        expect(this.toDate).toBeVisible;
    }

    async verifySearchButton() {
        expect(this.search).toBeVisible;
    }

    async clickOnSearchButton() {
        await this.search.click();
    }

    async verifyVoucherNumFromGrid() {
        const voucherNum = this.page.locator('//mat-cell[contains(@class,"voucherNumber")]');
        for (let index = 0; index < await voucherNum.count(); index++) {
            expect(await voucherNum.nth(index).innerText()).toBeTruthy();
        }
    }
}