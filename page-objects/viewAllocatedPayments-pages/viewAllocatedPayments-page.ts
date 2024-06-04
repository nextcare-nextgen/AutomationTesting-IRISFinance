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
    readonly cashAllocation: Locator;
    readonly clearedPaymentStatus: Locator;
    readonly clearedTransactionType: Locator;
    readonly clearedPaymentMethod: Locator;


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
        this.cashAllocation = page.locator('//a[@title="Cash Allocation"]');
        this.clearedPaymentStatus = page.locator('//mat-label//span[@title="Payment Status"]//following::iris-icon-action[@role="button"][1]');
        this.clearedTransactionType = page.locator('//mat-label//span[@title="Transaction Type"]//following::iris-icon-action[@role="button"][1]');
        this.clearedPaymentMethod = page.locator('//mat-label//span[@title="Payment Method"]//following::iris-icon-action[@role="button"][1]');

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
        await new Promise(resolve => setTimeout(resolve, 3000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentStatus")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentStaus = await elements.nth(index).textContent();
            expect(paymentStaus).toBe(data);
        }
    }

    async clickOnSearchFilterButton() {
        await this.search.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async verifyManualAllocationScreenTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const manualAllocationScreenTitle = await this.ManualAllocationScreenTitle.textContent();
        expect(manualAllocationScreenTitle).toBe(data);
    }

    async clickOnAllocatePoliciesButton() {
        await this.page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyAllocationButtons = this.page.locator('//button[@title="Policy Allocation"]');
        await policyAllocationButtons.first().click();
    }

    async clickOnClearedStatus() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.clearedPaymentStatus.click();

    }

    async selectPaymentStatus(data: string) {
        sleep(5000);
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnCashAllocationButton() {
        await this.cashAllocation.click();
    }

    async verifyPaymentMethodFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 7000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentMethod")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentMethod = await elements.nth(index).textContent();
            expect(paymentMethod).toBe(data);
        }
    }

    async verifyPaymentTypeFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 7000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentType")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentType = await elements.nth(index).textContent();
            expect(paymentType).toBe(data);
        }
    }


    async selectPaymentMethod(data: string) {
        sleep(5000);
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnClearedtransactionType() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.clearedTransactionType.click();

    }

    async selectTransactionType(data: string) {
        sleep(5000);
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnClearedPaymentMenthod() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.clearedPaymentMethod.click();

    }

}