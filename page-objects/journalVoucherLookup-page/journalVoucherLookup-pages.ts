import { Keyboard, Locator, Page, expect } from "@playwright/test";

export class JournalVoucherLookupPage{

    readonly page: Page;
    readonly journalVoucherShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator;
    readonly orgShortcut: Locator;


    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//h1[@title="Journal Vouchers"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
    }


    async verifyBreadCrumbsText(data: string) {
        await expect(this.breadCrumbs).toHaveText(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
    }

    async clickOnOrganizationShrtcutsButton() {
        await this.orgShortcut.last().click();
    }

    async verifyDashboardText(data: string) {
        await expect(this.dashboard).toHaveText(data);
    }

    async verifyJournalVoucherShortcutButton() {
         expect(this.journalVoucherShortcut).toBeVisible;

    }

}