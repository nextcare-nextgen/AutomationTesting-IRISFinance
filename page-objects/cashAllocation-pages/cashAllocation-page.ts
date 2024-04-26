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
    readonly clearedPaymentStatus: Locator;
    readonly searchButton: Locator;
    readonly manualAllocationTitle: Locator;
    readonly firstSection: Locator;
    readonly secondSection: Locator;
    readonly thirdSection: Locator;
    readonly paymentDateTitle: Locator;
    readonly paymentDate: Locator;
    readonly paymentReferenceTitle: Locator;
    readonly paymentReference: Locator;
    readonly amountTitle: Locator;
    readonly amount: Locator;
    readonly currencyTitle: Locator;
    readonly currency: Locator;
    readonly senderAccountNameTitle: Locator;
    readonly senderAccountName: Locator;
    readonly remittanceInfoTitle: Locator;
    readonly remittanceInfo: Locator;
    readonly policyRef: Locator;
    readonly policyHolderName: Locator;
    readonly effectiveDate: Locator;
    readonly clearAllbutton: Locator;
    readonly popupMessage:Locator;



    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.cashAllocationText = page.locator('//div//h1[@title="Cash Allocation"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.clearedPaymentStatus = page.locator('//mat-label//span[@title="Payment Status"]//following::iris-icon-action[@role="button"][1]');
        this.searchButton = page.locator('//button[@title="Search"]');
        this.manualAllocationTitle = page.locator('//h1[@title="Manual Cash Allocation"]');
        this.firstSection = page.locator('//h2[@title="Selected Payment Details"]');
        this.secondSection = page.locator('//h2[@title="Policy Search"]');
        this.thirdSection = page.locator('//section//mat-table');
        this.policyRef = page.locator('//div[@role="region"]//input[@title="Policy Reference"]');
        this.policyHolderName = page.locator('//div[@role="region"]//input[@title="Policy Holder Name"]');
        this.effectiveDate = page.locator('//div[@role="region"]//input[@title="Effective Date"]');
        this.clearAllbutton = page.locator('//button[@title="Clear all"]');
        this.popupMessage =page.locator('//p[text()="Are you sure you want to cancel the allocation ?"]');
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
        expect(this.cashAllocationShortcut).toBeVisible();
    }

    async verifyCashAllocationText(data: string) {
        const actual = await this.cashAllocationText.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }

    async clickOnClearedstaus() {
        sleep(10000);
        await this.page.waitForLoadState('networkidle');
        await this.clearedPaymentStatus.click();

    }

    async selectPaymentStatus(data: string) {
        sleep(5000);
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnSearchButtonButton() {
        await this.searchButton.click();
    }

    async verifyShowDetailsButtons() {
        await this.page.waitForLoadState('networkidle');
        const showDetailsButtons = this.page.locator('//button[@title="Show Details"]');
        for (let index = 0; index < await showDetailsButtons.count(); index++) {
            expect(await showDetailsButtons).toBeVisible();
        }
    }

    async clickOnpolicyAllocationButton() {
        let policyAllocation = this.page.locator('//button[@title="Policy Allocation"]');
        await policyAllocation.first().click();
    }

    async verifyManualAllocationTitle(data: string) {
        const actual = await this.manualAllocationTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyFirstSection(data: string) {
        const actual = await this.firstSection.textContent();
        expect(actual).toBe(data);
    }


    async verifySecondSection(data: string) {
        const actual = await this.secondSection.textContent();
        expect(actual).toBe(data);
    }

    async verifythirdSection() {
        expect(this.thirdSection).toBeVisible();
    }

    async verifySelectPaymentsDetails() {
        expect(this.paymentDateTitle).toBeVisible();
        expect(this.paymentDate).toBeVisible();
        expect(this.paymentReferenceTitle).toBeVisible();
        expect(this.paymentReference).toBeVisible();
        expect(this.amountTitle).toBeVisible();
        expect(this.amount).toBeVisible();
        expect(this.currencyTitle).toBeVisible();
        expect(this.currency).toBeVisible();
        expect(this.senderAccountNameTitle).toBeVisible();
        expect(this.senderAccountName).toBeVisible();
        expect(this.remittanceInfoTitle).toBeVisible();
        expect(this.remittanceInfo).toBeVisible();
    }

    async enterPolicyRef(data: string) {
        await this.policyRef.fill(data);
    }

    async enterPolicyHolderName(data: string) {
        await this.policyHolderName.fill(data);
    }

    async enterEffectiveDate(data: string) {
        await this.effectiveDate.fill(data);
    }

    async clickOnClearAllButton() {
        await this.clearAllbutton.click();
    }

    async verifyPopupMessasge(data: string) {
        const actual = await this.popupMessage.textContent();
        expect(actual).toBe(data);
    }
}