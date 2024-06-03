import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { count } from "console";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ViewAllocatedPaymentsPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly cashAllocationText: Locator;
    readonly search: Locator;
    readonly reset: Locator;
    readonly resultGrid: Locator;
    readonly ManualAllocationScreenTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.cashAllocationText = page.locator('//div//h1[@title="Cash Allocation"]');
        this.resultGrid = page.locator('//mat-table');
        this.search = page.locator('//button[@title="Search"]');
        this.reset = page.locator('//button[@title="Filter"]');
        this.ManualAllocationScreenTitle = page.locator('//h1[@title="Manual Cash Allocation"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }

    async clickOnCashAllocationShrtcutsButton() {
        await this.cashAllocationShortcut.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyCashAllocationShortcutButton() {
        expect(this.cashAllocationShortcut).toBeVisible();
    }

    async verifyCashAllocationText(data: string) {
        const actual = await this.cashAllocationText.textContent();
        expect(actual).toBe(data);
    }

    async verifySearchFilterButton() {
        expect(this.search).toBeVisible();
    }

    async verifyResetButton() {
        expect(this.reset).toBeVisible();
    }

    async verifyResultGrid() {
        expect(this.resultGrid).toBeVisible();
    }

    async verifyPaymentStatusFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentStatus")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentStaus = await elements.nth(index).textContent();
            expect(paymentStaus).toBe(data);
        }
    }

    async clickOnSearchFilterButton() {
        await this.search.click();
    }

    async verifyManualAllocationScreenTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const manualAllocationScreenTitle = await this.ManualAllocationScreenTitle.
        
        textContent();
        expect(manualAllocationScreenTitle).toBe(data);
    }

    async clickOnAllocatePoliciesButton() {
        await this.page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyAllocationButtons = this.page.locator('//button[@title="Policy Allocation"]');
        await policyAllocationButtons.first().click();
    }

}