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
    readonly clearedPaymentMethod: Locator;
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
    readonly searchFilter:Locator;
    readonly fromdate:Locator;
    readonly fromDateCalendarIcon:Locator;



    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.cashAllocationText = page.locator('//div//h1[@title="Cash Allocation"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.clearedPaymentStatus = page.locator('//mat-label//span[@title="Payment Status"]//following::iris-icon-action[@role="button"][1]');
        this.clearedPaymentMethod = page.locator('//mat-label//span[@title="Payment Method"]//following::iris-icon-action[@role="button"][1]');
        this.searchButton = page.locator('//button[@title="Search"]');
        this.manualAllocationTitle = page.locator('//h1[@title="Manual Cash Allocation"]');
        this.firstSection = page.locator('//h2[@title="Selected Payment Details"]');
        this.secondSection = page.locator('//h2[@title="Policy Search"]');
        this.thirdSection = page.locator('//section//mat-table');
        this.policyRef = page.locator('//div[@role="region"]//input[@title="Policy Reference"]');
        this.policyHolderName = page.locator('//div[@role="region"]//input[@title="Policy Holder Name"]');
        this.effectiveDate = page.locator('//div[@role="region"]//input[@title="Effective Date"]');
        this.clearAllbutton = page.locator('//button[@title="Clear all"]');
        this.popupMessage =page.locator('//iris-composed-dialog//p[text()="Are you sure you want to cancel the allocation ?"]');
        this.paymentDateTitle=page.locator('//h4[@title="Payment Date"]');
        this.paymentDate=page.locator('//h4[@title="Payment Date"]//following::p[1]');
        this.paymentReferenceTitle=page.locator('//h4[@title="Payment Reference"]');
        this.paymentReference=page.locator('//h4[@title="Payment Reference"]//following::p[1]');
        this.amountTitle=page.locator('//h4[@title="Amount"]');
        this.amount=page.locator('//h4[@title="Amount"]//following::p[1]');
        this.currencyTitle=page.locator('//h4[@title="Currency"]');
        this.currency=page.locator('//h4[@title="Currency"]//following::p[1]');
        this.senderAccountNameTitle=page.locator('//h4[@title="Sender A/C Name"]');
        this.senderAccountName=page.locator('//h4[@title="Sender A/C Name"]//following::p[1]');
        this.remittanceInfoTitle=page.locator('//h4[@title="Remittance Info"]');
        this.remittanceInfo=page.locator('//h4[@title="Remittance Info"]//following::p[1]');
        this.searchFilter = page.locator('//button[@title="Filter"]');
        this.fromdate = page.locator('//input[@title="From Date"]');
        this.fromDateCalendarIcon = page.locator('//input[@title="From Date"]//following::mat-icon[1]');

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
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.waitForLoadState('networkidle');
        await this.clearedPaymentStatus.click();

    }

    async clickOnClearedMethod() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.waitForLoadState('networkidle');
        await this.clearedPaymentMethod.click();

    }


    async selectPaymentStatus(data: string) {
        sleep(5000);
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnSearchButtonButton() {
        await this.searchButton.click();
    }

    async clickOnSearchFilterButton() {
        await this.searchFilter.click();
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

    async verifyListOfPaymentsMethods() {
        await this.page.locator('//mat-label//span[@title="Payment Method"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');

        const expectedValues = ['Bank Transfer', 'Credit Card', 'Direct Debit'];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async selectCurrentDateFromDateCalender() {
        await this.page.locator('//input[@title="From Date"]//following::mat-icon[1]').click();
        await this.page.locator('//button[contains(@class,"active")]').click()
    
    }

    async selectCurrentDateToDateCalender() {
        await this.page.locator('//input[@title="To Date"]//following::mat-icon[1]').click();
        await this.page.locator('//button[contains(@class,"active")]').click()
    
    }

    async selectOldDate() {

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() - 1;
        let year = date.getFullYear();

        //let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${month}`;
        var todayDate = Number(fullDate);
        await this.fromDateCalendarIcon.click();
        await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
        await this.page.waitForTimeout(2000);
    }
}