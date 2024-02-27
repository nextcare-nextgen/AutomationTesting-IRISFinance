import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class FinancialOrganizationsPage {

    readonly page: Page;
    readonly financialOrganizationShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator
    readonly dashboardShortcut: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly FXratesShortcut: Locator;
    readonly policiesShortcut: Locator;
    readonly reportsShortcut: Locator;
    readonly FTMShortcut: Locator;
    readonly organization: Locator;
    readonly organizationName: Locator;
    readonly organizationCode: Locator;
    readonly search: Locator;
    readonly activeIndex: Locator;
    readonly stoppedIndex: Locator;
    readonly recordsPerPage:Locator;
    readonly recordPerPageDropdown:Locator;


    constructor(page: Page) {
        this.page = page;
        this.financialOrganizationShortcut = page.locator('//div//span[@title="Organizations"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//span[@title="Journal Vouchers"]');
        this.dashboardShortcut = page.locator('//div//span[@title="Dashboard"]');
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.FXratesShortcut = page.locator('//div//span[@title="FX Rates"]');
        this.policiesShortcut = page.locator('//div//span[@title="Policies"]');
        this.reportsShortcut = page.locator('//div//span[@title="Reports"]');
        this.FTMShortcut = page.locator('//div//span[@title="Financial Transactions Monitoring"]');
        this.organization = page.locator('//h1[@title="Organizations"]');
        this.organizationName = page.locator('//div//input[@title="Name"]');
        this.organizationCode = page.locator('//div//input[@title="Code"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.activeIndex = page.locator('//iris-table-filter-tags//mat-chip-listbox//div//span[@title="Active"]');
        this.stoppedIndex = page.locator('//iris-table-filter-tags//mat-chip-listbox//div//span[@title="Stopped"]');
        this.recordsPerPage = page.locator(' //mat-paginator//div[text()=" Records per page: "]');
        this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnFinancialOrganizationShrtcutsButton() {
        await this.financialOrganizationShortcut.click();
    }


    async verifyFinancialOrganizationShrtcutButton() {
        await expect(this.financialOrganizationShortcut).toBeVisible();

    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationText(data: string) {
        const actual = await this.organization.textContent();
        expect(actual).toBe(data);
    }

    async verifyAllShrtcutButtonIsClickable() {
        await expect(this.financialOrganizationShortcut).toBeEnabled();
        await expect(this.dashboardShortcut).toBeEnabled();
        await expect(this.cashAllocationShortcut).toBeEnabled();
        await expect(this.chartOfAccountsShortcut).toBeEnabled();
        await expect(this.FXratesShortcut).toBeEnabled();
        await expect(this.journalVoucherText).toBeEnabled();
        await expect(this.reportsShortcut).toBeEnabled();
        await expect(this.FTMShortcut).toBeEnabled();

    }

    async verifyOrgNameAndOrgCodeField() {
        await expect(this.organizationName).toBeVisible();
        await expect(this.organizationCode).toBeVisible();
    }

    async verifySearchField() {
        await expect(this.search).toBeVisible();
    }

    async enterOrganizationCode(data: string) {
        await this.organizationCode.fill(data);
    }

    async enterOrganizationName(data: string) {
        await this.organizationName.fill(data);
    }

    async clickOnSearch() {
        await this.search.click();
    }

    async verifyOrganizationCodeFromGrid() {
        const code = this.page.locator('//mat-cell[contains(@class,"code")]');
        for (let index = 0; index < await code.count(); index++) {
            expect(await code.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyIndexStatus() {
        await expect(this.activeIndex).toBeVisible();
        await expect(this.stoppedIndex).toBeVisible();
    }

    async clickOnActiveIndex() {
        await this.activeIndex.click();
    }

    async verifyActiveIndexFromGrid() {
        const status = this.page.locator('//mat-cell[contains(@class,"status")]');
        for (let index = 0; index < await status.count(); index++) {
            expect(await status.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyRecordsPerPageText(data: string) {
        const actual = await this.recordsPerPage.textContent();
        expect(actual).toBe(data);
    }

    async clickOnRecordsPerPageDropdown(data: string[]) {
        const recordsPerPagedropdown = this.page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        recordsPerPagedropdown.first().click();
        await expect(this.page.locator('//mat-option//span')).toHaveText([' 10 ', ' 15 ', ' 20 ', ' 30 ', ' 50 ', ' 100 ', ' 250 ']);
    }

    async verifyOrgNameAndCodeFromGrid() {
        const Name = this.page.locator('//mat-cell[contains(@class,"name")]');
        for (let index = 0; index < await Name.count(); index++) {
            expect(await Name.nth(index).innerText()).toBeTruthy();

        }
        const code = this.page.locator('//mat-cell[contains(@class,"code")]');
        for (let index = 0; index < await Name.count(); index++) {
            expect(await Name.nth(index).innerText()).toBeTruthy();

        }
    }
    
}

