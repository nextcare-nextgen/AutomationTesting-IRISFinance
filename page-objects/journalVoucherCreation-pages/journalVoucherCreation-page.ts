import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class JournalVoucherCreationPage {

    readonly page: Page;
    readonly journalVoucherShortcut: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly FXRatesShorcut: Locator;
    readonly organizationShortcut: Locator;
    readonly policiesShortcut: Locator;
    readonly FTMshortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator;
    readonly orgShortcut: Locator;
    readonly journalVoucherLookupButton: Locator;
    readonly journalVoucherLookupsearchSection: Locator;
    readonly journalVoucherLookupGridSection: Locator;
    readonly addJournalVoucherLookupButton: Locator;
    readonly addJournalVoucherLookupTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.FXRatesShorcut = page.locator('//div//span[@title="FX Rates"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.policiesShortcut = page.locator('//div//span[@title="Policies"]');
        this.FTMshortcut = page.locator('//div//span[@title="Financial Transactions Monitoring"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//h1[@title="Journal Vouchers"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.journalVoucherLookupButton = page.locator('//a[@title="Journal Voucher Lookup"]');
        this.journalVoucherLookupsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherLookupGridSection = page.locator('//section//mat-table[@id="JournalVoucherLookupList"]');
        this.addJournalVoucherLookupButton = page.locator('//button[@title="Add Journal Voucher Lookup"]');
        this.addJournalVoucherLookupTitle = page.locator('//h1[@title="Manage Journal Voucher"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
        await new Promise(resolve => setTimeout(resolve, 8000));

    }

    async clickOnOrganizationShrtcutsButton() {
        await this.orgShortcut.last().click();
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyJournalVoucherShortcutButton() {
        expect(this.journalVoucherShortcut).toBeVisible();
    }

    async verifyJShortcutButtonAreClickable() {
        expect(this.journalVoucherShortcut).toBeEnabled();
        expect(this.cashAllocationShortcut).toBeEnabled();
        expect(this.chartOfAccountsShortcut).toBeEnabled();
        expect(this.FXRatesShorcut).toBeEnabled();
        expect(this.orgShortcut).toBeEnabled();
        expect(this.policiesShortcut).toBeEnabled();
        expect(this.FTMshortcut).toBeEnabled();
    }

    async verifyJournalVoucherLookupText(data: string) {
        const actual = await this.journalVoucherLookupButton.textContent();
        expect(actual).toBe(data);
    }

    async clickOnJournalVoucherLookupButton() {
        await this.journalVoucherLookupButton.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.waitForSelector('.loader', { state: 'hidden' });
    }

    async clickOnAddLookupVoucherCreationButton() {
        await this.addJournalVoucherLookupButton.click();
    }

    async verifyAddJournalVoucherLookupTitle(data: string) {
        const actual = await this.addJournalVoucherLookupTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyTitleinBold() {
        const boldElement = await this.page.locator('//h1[@title="Manage Journal Voucher"]');
        // Check if the font-weight is bold
        const fontWeight = await boldElement.evaluate(element => {
            return window.getComputedStyle(element).fontWeight;
        });

        // Assert that the font-weight is either 'bold' or a numeric value equal or greater than 700
        expect(['bold', '700', '800', '900'].includes(fontWeight)).toBe(true);
    }

    async verifyAddJournalVoucherLookupScections() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const fisrtSection = this.page.locator('//div[contains(@class,"items-start")]');
        await expect(fisrtSection).toBeVisible();
        const secondSection = this.page.locator('//iris-composed-table-grid[contains(@class,"mb-4")]');
        await expect(secondSection).toBeVisible();
        const thirdSection = this.page.locator('//iris-composed-table-grid[contains(@class,"pivotGrid")]');
        await expect(thirdSection).toBeVisible();

    }
}