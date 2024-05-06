import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class FinancialTransactionsMonitoringPage {

    readonly page: Page;
    readonly financialTransactionsMonitoringShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly financialTransactionsMonitoringLabel: Locator;
    readonly organizationName: Locator;
    readonly searchFilters: Locator;
    readonly currentDateFromCalender: Locator;
    readonly fromDateCalenderIcon: Locator;
    readonly fromdateinput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.financialTransactionsMonitoringShortcut = page.locator('//div//span[@title="Financial Transactions Monitoring"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.financialTransactionsMonitoringLabel = page.locator('//a[@title="Financial Transactions Monitoring"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.searchFilters = page.locator('//button[@title="Filter"]');
        this.currentDateFromCalender = page.locator('//mat-month-view//td//button[contains(@class,"active")]');
        this.fromDateCalenderIcon = page.locator('//div//input[@title="From Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
        this.fromdateinput = page.locator('//input[@title="From Date"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnFinancialTransactionsMonitoringShortcutButton() {
        await this.financialTransactionsMonitoringShortcut.click();
    }


    async verifyFinancialTransactionsMonitoringShrtcutButton() {
        await expect(this.financialTransactionsMonitoringShortcut).toBeVisible();

    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyJournalVoucherListText(data: string) {
        const actual = await this.financialTransactionsMonitoringLabel.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }

    async verifySearchfiltersButton() {
        await expect(this.searchFilters).toBeVisible();
    }

    async selectCurrentDateFromDateCalender() {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'short' });
        const year = today.getFullYear();

        // Format the date in "06 May 2024" format
        const formattedDate = `${day.toString().padStart(2, '0')} ${month} ${year}`;
        await this.fromdateinput.fill(formattedDate);
        // Example: Logging the formatted date
        console.log(formattedDate);

    }

    async selectFutureDateInFromDateCalender() {
        const inputField = await this.page.locator('//input[@title="From Date"]');

        if (inputField) {
            // Generate a future date
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 7); // Add 7 days for example
            const formattedDate = futureDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            // Fill the input field with the formatted date
            await inputField.fill(formattedDate);
        } else {
            console.error('Input field not found');
        }

    }

}





