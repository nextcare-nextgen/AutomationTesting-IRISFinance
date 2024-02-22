import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ChartOfAccountsPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly chartOfAccountText: Locator;
    readonly accountName: Locator;
    readonly accountNumber: Locator;
    readonly search: Locator;
    readonly parentAccountNumber: Locator;
    readonly accountNumberfromGrid: Locator;
    readonly accountNamefromGrid: Locator;
    readonly accountType: Locator;
    readonly productLine: Locator;
    readonly costCenter2: Locator;
    readonly costCenter3: Locator;
    readonly GLAccounttype: Locator;
    readonly startDate: Locator;
    readonly stopDate: Locator;
    readonly activeIndex: Locator;
    readonly stopIndex: Locator;
    readonly confirmationMessage: Locator;
    readonly recordsPerPage: Locator;
    readonly recordPerPageDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.chartOfAccountText = page.locator('//div//h1[@title="Charts of Accounts"]');
        this.accountName = page.locator('//div//input[@title="Account Name"]');
        this.accountNumber = page.locator('//div//input[@title="Account Number"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.parentAccountNumber = page.locator('id=parentaccountnumber-Parent Account Number');
        this.accountNumberfromGrid = page.locator('//div//small[@title="Account Number"]');
        this.accountNamefromGrid = page.locator('//div//small[@title="Account Name"]');
        this.accountType = page.locator('//div//small[@title="Account Type"]');
        this.productLine = page.locator('//div//small[@title="Product Line"]');
        this.costCenter2 = page.locator('//div//small[@title="Cost Center 2"]');
        this.costCenter3 = page.locator('//div//small[@title="Cost Center 3"]');
        this.GLAccounttype = page.locator('//div//small[@title="GL Account Type"]');
        this.startDate = page.locator('//div//small[@title="Start Date"]');
        this.stopDate = page.locator('//div//small[@title="Stop Date"]');
        this.activeIndex = page.locator('//iris-table-filter-tags//mat-chip-option[@chip-color="green"]');
        this.stopIndex = page.locator('//iris-table-filter-tags//mat-chip-option[@chip-color="red"]');
        this.confirmationMessage = page.locator('//p[@title="Are you sure you want to stop this account ?"]');
        this.recordsPerPage = page.locator(' //mat-paginator//div[text()=" Records per page: "]');
        this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }

    async clickOnChartsOfAccountsShrtcutsButton() {
        await this.chartOfAccountsShortcut.click();
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyChartsOfAccountsrShortcutButton() {
        expect(this.chartOfAccountsShortcut).toBeVisible;
    }

    async verifyChartsOfAccountsShrtcutsButtonisClickable() {
        await expect(this.chartOfAccountsShortcut).toBeEnabled;
    }

    async verifychartOfAccountText(data: string) {
        const actual = await this.chartOfAccountText.textContent();
        expect(actual).toBe(data);
    }

    async verifyAccountNameAccountNumberField() {
        await expect(this.accountName).toBeVisible();
        await expect(this.accountNumber).toBeVisible();
    }

    async verifySearchField() {
        await expect(this.search).toBeVisible();
    }

    async enterAccountNumber(data: string) {
        await this.accountNumber.fill(data);
    }

    async clickonSearchButton() {
        await this.search.click();
    }

    async verifyAccountNumberFromGrid() {
        const accountNum = this.page.locator('//mat-cell[contains(@class,"accountnumber")][2]');
        for (let index = 0; index < await accountNum.count(); index++) {
            expect(await accountNum.nth(index).innerText()).toBeTruthy();
        }
    }

    async verifyColumnNameFromGrid() {
        await expect(this.parentAccountNumber).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
    }

    async verifyActiveandStoppedIndex() {
        await expect(this.parentAccountNumber).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
    }

    async verifyStatusInTheGrid() {
        const status = this.page.locator('//mat-cell[contains(@class,"status")]');
        for (let index = 0; index < await status.count(); index++) {
            expect(await status.nth(index).innerText()).toBeTruthy();
        }
    }

    async clickOnActiveIndex() {
        await this.activeIndex.click();
    }

    async verifyActiveAccounts() {
        const stopAccount = this.page.locator('//mat-cell//button[contains(@title,"Stop Account")]');
        for (let index = 0; index < await stopAccount.count(); index++) {
            expect(await stopAccount.nth(index)).toBeVisible();
        }
    }
    async clickOnStopIndex() {
        await this.stopIndex.click();
    }


    async clickOnStopAccounts() {
        let stopAccount = this.page.locator('//mat-cell//button[contains(@title,"Stop Account")]');
        await stopAccount.first().click();
    }

    async verifyConfirmationMessage(data: string) {
        const actual = await this.confirmationMessage.textContent();
        expect(actual).toBe(data);
    }

    async verifyRecordsPerPageText(data: string) {
        const actualBatchSearch = await this.recordsPerPage.textContent();
        expect(actualBatchSearch).toBe(data);
    }


    async clickOnRecordsPerPageDropdown(data: string[]) {
        await sleep(2000);
        await this.recordPerPageDropdown.click();
        await expect(this.page.locator('//mat-option//span')).toHaveText([' 10 ', ' 15 ', ' 20 ', ' 30 ', ' 50 ', ' 100 ', ' 250 ']);

    }

}
