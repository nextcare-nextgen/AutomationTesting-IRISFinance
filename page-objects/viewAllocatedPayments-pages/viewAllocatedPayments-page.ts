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
    readonly filter: Locator;
    readonly paymentRef: Locator;
    readonly fromAmount: Locator;
    readonly toAmount: Locator;
    readonly policyRef: Locator;
    readonly apply: Locator;
    readonly searchBar: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.cashAllocationText = page.locator('//div//h1[@title="Cash Allocation"]');
        this.resultGrid = page.locator('//mat-table');
        this.search = page.locator('//button[@title="Search"]');
        this.reset = page.locator('//button[@title="Reset"]');
        this.ManualAllocationScreenTitle = page.locator('//h1[@title="Manual Cash Allocation"]');
        this.cashAllocation = page.locator('//a[@title="Cash Allocation"]');
        this.clearedPaymentStatus = page.locator('//mat-label//span[@title="Payment Status"]//following::iris-icon-action[@role="button"][1]');
        this.clearedTransactionType = page.locator('//mat-label//span[@title="Transaction Type"]//following::iris-icon-action[@role="button"][1]');
        this.clearedPaymentMethod = page.locator('//mat-label//span[@title="Payment Method"]//following::iris-icon-action[@role="button"][1]');
        this.filter = page.locator('//button[@title="Filter"]');
        this.paymentRef = page.locator('//input[@title="Payment Reference"]');
        this.fromAmount = page.locator('//input[@title="From Amount"]');
        this.toAmount = page.locator('//input[@title="To Amount"]');
        this.policyRef = page.locator('//input[@title="Policy Ref/Document Ref"]');
        this.apply = page.locator('//button[@title="Apply"]');
        this.searchBar = page.locator('//input[@placeholder="Search"]');
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
        await new Promise(resolve => setTimeout(resolve, 5000));
        const actual = await this.cashAllocationText.textContent();
        expect(actual).toBe(data);
    }

    async verifySearchFilterButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.filter).toBeVisible();
    }

    async verifyResetButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
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

    async clickOnSearchButton() {
        await this.search.click();
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async verifyManualAllocationScreenTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const manualAllocationScreenTitle = await this.ManualAllocationScreenTitle.textContent();
        expect(manualAllocationScreenTitle).toBe(data);
    }

    async clickOnAllocatePoliciesButton() {
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
        await new Promise(resolve => setTimeout(resolve, 10000));
        await new Promise(resolve => setTimeout(resolve, 20000));
        await this.page.waitForLoadState('load');
        const elements = this.page.locator('//mat-cell[contains(@class,"paymentMethod")]//small');
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

    async clickOnFilterButton() {
        await this.filter.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async enterPaymentReference(data: string) {
        await this.paymentRef.fill(data);
    }

    async enterFromAmount(data: string) {
        await this.fromAmount.fill(data);
    }

    async enterToAmount(data: string) {
        await this.toAmount.fill(data);
    }

    async enterPolicyRef(data: string) {
        await this.policyRef.fill(data);
    }

    async clickOnApplyButton() {
        await this.apply.click();
    }

    async verifyPaymentRefFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentReference")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentRef = await elements.nth(index).textContent();
            expect(paymentRef).toBe(data);
        }
    }

    async verifyFromAndToAmountFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentAmount")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const amount = await elements.nth(index).textContent();
            expect(amount).toBe(data);
        }
    }


    async verifyPolicyRefFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"policyReference")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const policyRef = await elements.nth(index).textContent();
            expect(policyRef).toBe(data);
        }
    }

    async clickOnResetButton() {
        await this.reset.click();
    }

    async verifyAfterRestPaymentStatus(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const element = await this.page.locator('//mat-label[@title="Cleared-unallocated"]').textContent();;
        expect(element).toBe(data);
    }

    async clickOnDetailsButton() {
        const showDetails = this.page.locator('//button[@title="Show Details"]');
        await showDetails.first().click();
    }

    async verifySearchBar() {
        expect(this.searchBar).toBeVisible();
    }
}