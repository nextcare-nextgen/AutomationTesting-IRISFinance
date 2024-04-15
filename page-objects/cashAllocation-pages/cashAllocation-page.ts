import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { count } from "console";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class CashAllocationPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly cashAllocationText: Locator;
    readonly organizationName: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.cashAllocationText = page.locator('//div//h1[@title="Cash Allocation"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
    }


    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }

    async clickOnCashAllocationShrtcutsButton() {
        await this.cashAllocationShortcut.click();
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyCashAllocationShortcutButton() {
        expect(this.cashAllocationShortcut).toBeVisible;
    }

    async verifyCashAllocationText(data: string) {
        const actual = await this.cashAllocationText.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }


}