import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { count } from "console";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class CashAllocationUnderPaymentsPage {

    readonly page: Page;
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
    readonly popupMessage: Locator;
    //code
    readonly filter: Locator;
    readonly applyButton: Locator;
    readonly unallocatedAmount: Locator;
    readonly allocateButton: Locator;
    readonly okButton: Locator;
    readonly policiesShortcut: Locator;
    readonly fromDate: Locator;
    readonly policyReference: Locator;
    readonly viewPolicyButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
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
        this.popupMessage = page.locator('//p[text()="Are you sure you want to cancel the allocation ?"]');
        //code
        this.filter = page.locator('//button[@title="Filter"]');
        this.paymentReference = page.locator('//div//input[@title="Payment Reference"]');
        this.applyButton = page.locator('//div//button[@title="Apply"]');
        this.unallocatedAmount = page.locator('//mat-cell[contains(@class,"unallocatedAmount")]//div//input[@type="text"]');
        this.allocateButton = page.locator('//button[@title="Allocate"]');
        this.okButton = page.locator('//button[@title="Ok"]')
        this.policiesShortcut = page.locator('//div//span[@title="Policies"]');
        this.fromDate = page.locator('//div//input[@title="From Date"]');
        this.policyReference = page.locator('//div//input[@title="Policy Reference"]');
        this.viewPolicyButton = page.locator('//div//button[@title="View Policy Journal Voucher"]')

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
        await this.clearedPaymentStatus.click();

    }

    async selectPaymentStatus(data: string) {
        sleep(5000);
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }


    async verifyShowDetailsButtons() {
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


    //start underpayment code
    async verifyUnAllocatedData() {
        const unallocateddata = this.page.locator('//mat-cell[contains(@class,"paymentStatus")]');
        for (let index = 0; index < await unallocateddata.count(); index++) {
            expect(await unallocateddata).toBeVisible();
        }
    }

    async clickOnFilterButton() {
        await this.filter.click();
    }

    async enterPaymentRef(data: string) {
        await this.paymentReference.fill(data);
    }

    async clickOnApplyButton() {
        await this.applyButton.click();
    }

    async clickOnSearchButtonButton() {
        await this.searchButton.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async verifyAmount() {
        const amount = this.page.locator('//mat-card//div[contains(@class,"row me-0")][3]//iris-base-label//p').textContent();
        const outstandingAmount = this.page.locator('//iris-composed-table-grid//mat-cell[contains(@class,"totalOutstandingTillDate")]//small');
        const outstangingamt = await outstandingAmount.textContent();
        const alphanumericValue = outstangingamt?.trimEnd();
        console.log(amount);
        console.log(alphanumericValue);

        function Remove(outstangingamt, startIndex) {
            return outstangingamt.substr(0, startIndex);
        }
        const allocatedAmount = await this.page.locator('.allocated-amount').textContent();
     const actualAmount = await this.page.locator('.actual-amount').textContent();
      
       
      
        // Verify if the actual amount is less than the allocated amount
      //  expect(allocatedAmount).toBeLessThan(actualAmount);


    }

    async enterUnallocatedAmount(data: string) {
        await this.unallocatedAmount.fill(data);
    }

    async clickOnAddpolicyAllocationButton() {
        let addpolicyAllocation = this.page.locator('//button[@title="Add Policy"]');
        await addpolicyAllocation.first().click();
    }

    async clickOnOKButtonButton() {
        await this.okButton.click();
    }

    async verifyAllocateButtonIsClickable() {
        expect(this.allocateButton).toBeEnabled();
    }

    async clickOnPoliciesShrtcutsButton() {
        await this.policiesShortcut.click();
    }

    async enterFromDate(data: string) {
        await this.fromDate.fill(data);
    }

    async enterPolicyREF(data: string) {
        await this.policyReference.fill(data);
    }

    async clickOnViewPolicyJournalVoucherButton() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.viewPolicyButton.first().click();
    }


    async clickOnVoucherType(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        let vouchertype = await this.page.locator('//mat-cell[contains(@class,"voucherTypeCode")]//small').all();
        for (let i = 0; i < vouchertype.length; i++) {
            if (await vouchertype[i].textContent() === data) {
                await vouchertype[i].click();
                break;
            }
        }
    }


    async verifyRecievedPayment() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const payments = this.page.locator('//mat-cell[contains(@class,"amount")]');
        for (let index = 0; index < await payments.count(); index++) {
            expect(await payments.nth(index)).toBeVisible();
        }
    }



}