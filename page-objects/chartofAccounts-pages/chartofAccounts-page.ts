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

    constructor(page: Page) {
        this.page = page;
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.chartOfAccountText = page.locator('//div//h1[@title="Charts of Accounts"]');
        this.accountName = page.locator('//div//input[@title="Account Name"]');
        this.accountNumber = page.locator('//div//input[@title="Account Number"]');
        this.search = page.locator('//div//button[@title="Search"]');
    }

    async verifyBreadCrumbsText(data: string) {
        await expect(this.breadCrumbs).toHaveText(data);
    }

    async clickOnChartsOfAccountsShrtcutsButton() {
        await this.chartOfAccountsShortcut.click();
    }

    async verifyDashboardText(data: string) {
        await expect(this.dashboard).toHaveText(data);
    }

    async verifyChartsOfAccountsrShortcutButton() {
        expect(this.chartOfAccountsShortcut).toBeVisible;
    }

    async verifyChartsOfAccountsShrtcutsButtonisClickable() {
        await expect(this.chartOfAccountsShortcut).toBeEnabled;
    }


    async verifychartOfAccountText(data: string) {
        await expect(this.chartOfAccountText).toHaveText(data);
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

}
