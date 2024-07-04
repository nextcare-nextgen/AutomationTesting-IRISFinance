import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { count } from "console";

export class CashAllocationPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly cashAllocationText: Locator;
    readonly organizationName: Locator;
    readonly clearedPaymentStatus: Locator;
    readonly clearedPaymentMethod: Locator;
    readonly searchbtn: Locator;
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
    readonly clearAllbtn: Locator;
    readonly popupMessage: Locator;
    readonly searchFilter: Locator;
    readonly fromdate: Locator;
    readonly fromDateCalendarIcon: Locator;
    readonly paymentRef: Locator;
    readonly applybtn: Locator;
    readonly policyReference: Locator;
    readonly fromAmount: Locator;
    readonly toAmount: Locator;
    readonly policyHolderNamefromFilter: Locator;
    readonly resetbtn: Locator;
    readonly toDate: Locator;
    readonly toDateCalendarIcon: Locator;
    readonly ManualAllocationScreenTitle: Locator;
    readonly manualAllocationSearchbtn: Locator;
    readonly addPolicybtn: Locator;
    readonly showDetailsbtn: Locator;
    readonly policyReferenceMCA: Locator;
    readonly policyID: Locator;
    readonly policyHolderNameMCA: Locator;
    readonly outstandingTillDate: Locator;
    readonly totalBal: Locator;
    readonly amountMCA: Locator;
    readonly effectiveDateMCA: Locator;
    readonly expiryDate: Locator;
    readonly amountFill: Locator;
    readonly addPolicyPopup: Locator;
    readonly premiumandTaxtitle: Locator;
    readonly okbtn: Locator;
    readonly policyIDFromGrid: Locator;
    readonly alertErrorPopup: Locator;
    readonly deletebtn: Locator;
    readonly broker: Locator;
    readonly clearedtransactionType: Locator;




    constructor(page: Page) {
        this.page = page;
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.cashAllocationText = page.locator('//div//h1[@title="Cash Allocation"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.clearedPaymentStatus = page.locator('//mat-label//span[@title="Payment Status"]//following::iris-icon-action[@role="button"][1]');
        this.clearedPaymentMethod = page.locator('//mat-label//span[@title="Payment Method"]//following::iris-icon-action[@role="button"][1]');
        this.clearedtransactionType = page.locator('//mat-label//span[@title="Transaction Type"]//following::iris-icon-action[@role="button"][1]');
        this.searchbtn = page.locator('//button[@title="Search"]');
        this.manualAllocationTitle = page.locator('//h1[@title="Manual Cash Allocation"]');
        this.firstSection = page.locator('//h2[@title="Selected Payment Details"]');
        this.secondSection = page.locator('//h2[@title="Policy Search"]');
        this.thirdSection = page.locator('//section//mat-table');
        this.policyRef = page.locator('//section[contains(@class,"items-start")]//input[@title="Policy Reference"]');
        this.policyHolderName = page.locator('//div[@role="region"]//input[@title="Policy Holder Name"]');
        this.effectiveDate = page.locator('//div[@role="region"]//input[@title="Effective Date"]');
        this.clearAllbtn = page.locator('//button[@title="Clear all"]');
        this.popupMessage = page.locator('//iris-composed-dialog//p[text()="Are you sure you want to cancel the allocation ?"]');
        this.paymentDateTitle = page.locator('//h4[@title="Payment Date"]');
        this.paymentDate = page.locator('//h4[@title="Payment Date"]//following::p[1]');
        this.paymentReferenceTitle = page.locator('//h4[@title="Payment Reference"]');
        this.paymentReference = page.locator('//h4[@title="Payment Reference"]//following::p[1]');
        this.amountTitle = page.locator('//h4[@title="Amount"]');
        this.amount = page.locator('//h4[@title="Amount"]//following::p[1]');
        this.currencyTitle = page.locator('//h4[@title="Currency"]');
        this.currency = page.locator('//h4[@title="Currency"]//following::p[1]');
        this.senderAccountNameTitle = page.locator('//h4[@title="Sender A/C Name"]');
        this.senderAccountName = page.locator('//h4[@title="Sender A/C Name"]//following::p[1]');
        this.remittanceInfoTitle = page.locator('//h4[@title="Remittance Info"]');
        this.remittanceInfo = page.locator('//h4[@title="Remittance Info"]//following::p[1]');
        this.searchFilter = page.locator('//button[@title="Filter"]');
        this.fromdate = page.locator('//input[@title="From Date"]');
        this.toDate = page.locator('//input[@title="To Date"]');
        this.fromDateCalendarIcon = page.locator('//input[@title="From Date"]//following::mat-icon[1]');
        this.toDateCalendarIcon = page.locator('//input[@title="To Date"]//following::mat-icon[1]');
        this.paymentRef = page.locator('//input[@title="Payment Reference"]');
        this.applybtn = page.locator('//button[@title="Apply"]');
        this.policyReference = page.locator('//input[@title="Policy Ref/Document Ref"]');
        this.fromAmount = page.locator('//input[@title="From Amount"]');
        this.toAmount = page.locator('//input[@title="To Amount"]');
        this.policyHolderNamefromFilter = page.locator('//input[@title="Policy Holder Name"]');
        this.resetbtn = page.locator('//button[@title="Reset"]');
        this.ManualAllocationScreenTitle = page.locator('//h1[@title="Manual Cash Allocation"]');
        this.manualAllocationSearchbtn = page.locator('//button[@title="Search"]');
        this.addPolicybtn = page.locator('//button[@title="Add Policy"]');
        this.showDetailsbtn = page.locator('//button[@title="Show Details"]');
        this.policyReferenceMCA = page.locator('//mat-header-cell[@id="policyReferences-Policy Reference"]');
        this.policyID = page.locator('//mat-header-cell[@id="policyId-Policy Id"]');
        this.policyHolderNameMCA = page.locator('//mat-header-cell[@id="policyHolderName-Policy Holder Name"]');
        this.outstandingTillDate = page.locator('//mat-header-cell[@id="totalOutstandingTillDate-OutStanding till Date"]');
        this.totalBal = page.locator('//mat-header-cell[@id="outstandingPolicyBalance-Total Balance"]');
        this.amountMCA = page.locator('//mat-header-cell[@id="unallocatedAmount-Amount"]');
        this.effectiveDateMCA = page.locator('//mat-header-cell[@id="policyEffectiveDate-Effective Date"]');
        this.expiryDate = page.locator('//mat-header-cell[@id="policyExpiryDate-Expiry Date"]');
        this.amountFill = page.locator('//mat-row//div//mat-form-field//input');
        this.addPolicyPopup = page.locator('//iris-composed-dialog//iris-base-label//p');
        this.premiumandTaxtitle = page.locator("//h2[@title='Premium and Tax Dues']");
        this.okbtn = page.locator('//button[@title="Ok"]');
        this.policyIDFromGrid = page.locator("//mat-cell[contains(@class,'policyReferences')]");
        this.alertErrorPopup = page.locator("//mat-error//mat-label[@title='Please enter a value less than or equal to 11.82']");
        this.deletebtn = page.locator('//button[@title="Remove Policy"]');
        this.broker = page.locator('//input[@title="Broker"]');
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
        await this.clearedPaymentStatus.click();
        await new Promise(resolve => setTimeout(resolve, 3000));

    }

    async clickOnClearedMethod() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.clearedPaymentMethod.click();

    }

    async clickOnClearedTransactionType() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.clearedtransactionType.click();

    }

    async clickOnClearedPaymentStatus() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.clearedPaymentStatus.click();

    }

    async selectPaymentStatus(data: string) {
        await this.page.waitForSelector('.loader', { state: 'hidden' });
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnSearchButton() {
        await this.searchbtn.click();
    }

    async clickOnSearchFilterButton() {
        await this.searchFilter.click();
    }

    async verifyShowDetailsButtons() {
        const showDetailsbtn = this.page.locator('//button[@title="Show Details"]');
        for (let index = 0; index < await showDetailsbtn.count(); index++) {
            expect(await showDetailsbtn).toBeVisible();
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
        await new Promise(resolve => setTimeout(resolve, 5000));
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
        await this.policyRef.first().clear();
        await this.policyRef.first().fill(data);
    }

    async enterPolicyHolderName(data: string) {
        await this.policyHolderName.fill(data);
    }

    async enterEffectiveDate(data: string) {
        await this.effectiveDate.fill(data);
    }

    async clickOnClearAllButton() {
        await this.clearAllbtn.click();
    }

    async verifyPopupMessasge(data: string) {
        const actual = await this.popupMessage.textContent();
        expect(actual).toBe(data);
    }

    async verifyListOfPaymentsMethods() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator('//mat-label//span[@title="Payment Method"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');
        const expectedValues = ['Bank Transfer', 'Credit Card', 'Direct Debit'];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async selectCurrentDateFromDateCalender() {
        await this.fromDateCalendarIcon.click();
        await this.page.locator('//button[contains(@class,"active")]').click()

    }

    async selectCurrentDateToDateCalender() {
        await this.toDateCalendarIcon.click();
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

    async selectFutureDate() {

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        //let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${month}`;
        var todayDate = Number(fullDate);
        await this.fromDateCalendarIcon.click();
        await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
        await this.page.waitForTimeout(2000);
    }

    async enterAndVerifyPaymentRef(data: string) {
        await this.paymentRef.fill(data);
    }

    async verifyPaymentRefFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentReference")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentStatus = await elements.nth(index).textContent();
            expect(paymentStatus).toBe(data);
        }
    }

    async clickOnApplyButton() {
        await this.applybtn.click();
    }

    async enterPolicyReference(data: string) {
        await this.policyReference.fill(data);
    }

    async enterFromAmount(data: string) {
        await this.fromAmount.fill(data);
    }

    async enterToAmount(data: string) {
        await this.toAmount.fill(data);
    }

    async verifyAmountFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentAmount")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const amount = await elements.nth(index).textContent();
            expect(amount).toBe(data);
        }
    }

    async enterPolicyHolder(data: string) {
        await this.policyHolderNamefromFilter.fill(data);
    }


    async verifyPolicyHolderNameFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentAmount")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const policyHolderName = await elements.nth(index).textContent();
            expect(policyHolderName).toBe(data);
        }
    }

    async verifyPolicyRefFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"policyReference")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const policyRef = await elements.nth(index).textContent();
            expect(policyRef).toBe(data);
        }
    }

    async verifyPaymentTypeFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 8000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentType")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentType = await elements.nth(index).textContent();
            expect(paymentType).toBe(data);
        }
    }

    async verifyPaymentStatusFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentStatus")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentStaus = await elements.nth(index).textContent();
            expect(paymentStaus).toBe(data);
        }
    }

    async verifyPaymentMethodFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const elements = await this.page.locator('//mat-cell[contains(@class,"paymentMethod")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const paymentMethod = await elements.nth(index).textContent();
            expect(paymentMethod).toBe(data);
        }
    }

    async clickOnResetButton() {
        await this.resetbtn.click();
    }


    async verifyFieldsAreEmptyAfterReset() {
        expect(this.policyHolderNamefromFilter).toBeEmpty();
        expect(this.fromdate).toBeEmpty();
        expect(this.toDate).toBeEmpty();
        expect(this.paymentRef).toBeEmpty();
        expect(this.fromAmount).toBeEmpty();
        expect(this.toAmount).toBeEmpty();
    }

    async verifyAllocatePoliciesButtons() {

        const policyAllocationButtons = this.page.locator('//button[@title="Policy Allocation"]');
        for (let index = 0; index < await policyAllocationButtons.count(); index++) {
            expect(await policyAllocationButtons).toBeVisible();
        }
    }

    async clickOnAllocatePoliciesButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyAllocationButtons = this.page.locator('//button[@title="Policy Allocation"]');
        await policyAllocationButtons.first().click();
    }

    async verifyManualAllocationScreenTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const manualAllocationScreenTitle = await this.ManualAllocationScreenTitle.textContent();
        expect(manualAllocationScreenTitle).toBe(data);
    }

    async verifyReverseAllocationsButtons() {
        const reversePolicyAllocationButtons = this.page.locator('//button[@title="Reverse Allocated Policies"]');
        for (let index = 0; index < await reversePolicyAllocationButtons.count(); index++) {
            expect(await reversePolicyAllocationButtons).toBeVisible();
        }
    }

    async clickOnManualAllocationSearchButton() {
        await this.manualAllocationSearchbtn.first().click();
    }

    async clickOnAddPolicyButton() {
        await this.addPolicybtn.scrollIntoViewIfNeeded();
        await this.addPolicybtn.click();
    }

    async verifyAddPolicyButton() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.addPolicybtn.scrollIntoViewIfNeeded();
        expect(this.addPolicybtn).toBeVisible();
    }

    async verifyShowDetailsButton() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.addPolicybtn.scrollIntoViewIfNeeded();
        expect(this.showDetailsbtn).toBeVisible();
    }

    async verifyPolicySearchGrid() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.policyReferenceMCA).toBeVisible();
        expect(this.policyID).toBeVisible();
        expect(this.policyHolderNameMCA).toBeVisible();
        expect(this.outstandingTillDate).toBeVisible();
        expect(this.totalBal).toBeVisible();
        expect(this.amountMCA).toBeVisible();
        expect(this.effectiveDateMCA).toBeVisible();
        expect(this.expiryDate).toBeVisible();
    }

    async enterAmount(data: string) {
        await this.amountFill.scrollIntoViewIfNeeded();
        await this.amountFill.click();
        await this.amountFill.clear();
        await this.amountFill.fill(data);
    }

    async verifyAddPolicyPopup() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.showDetailsbtn).toBeVisible();
    }

    async clickOnShowDetailsButton() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.addPolicybtn.scrollIntoViewIfNeeded();
        await this.showDetailsbtn.click();
    }

    async verifyPremiumandTaxAmountFromGrid() {
        const premiumAndTaxAmount = this.page.locator('//mat-cell[contains(@class,"premiumAndTaxDueAmount")]');
        for (let index = 0; index < await premiumAndTaxAmount.count(); index++) {
            expect(await premiumAndTaxAmount).toBeVisible();
        }
    }


    async verifyPremiumandTaxTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const actual = await this.premiumandTaxtitle.textContent();
        expect(actual).toBe(data);
    }

    async clickOnOkButton() {
        await this.okbtn.click();
    }

    async verifyUnallocatedPolicyID(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const elements = await this.page.locator('//div[contains(@class,"mat-row detail")]//mat-cell[contains(@class,"policyReferences")]//small');
        for (let index = 0; index < await elements.count(); index++) {
            const actual = await elements.nth(index).textContent();
            expect(actual).toBe(data);
        }
    }

    async verifyAlertErrorPopup() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.alertErrorPopup).toBeVisible();
    }

    async clickOnDeleteButton() {
        await this.deletebtn.click();
    }

    async verifyMadatoryFields() {
        const mandateFields = this.page.locator('//form//div[contains(@class,"align-items-center")]//input');
        for (let index = 0; index < await mandateFields.count(); index++) {
            expect(await mandateFields).toBeVisible();
        }
    }

    async verifyNonManadateFields() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.fromdate).toBeVisible();
        expect(this.toDate).toBeVisible();
        expect(this.paymentRef).toBeVisible();
        expect(this.broker).toBeVisible();
        expect(this.fromAmount).toBeVisible();
        expect(this.toAmount).toBeVisible();
        expect(this.policyReference).toBeVisible();
        expect(this.policyHolderNamefromFilter).toBeVisible();
    }

    async verifySearchButton() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.waitForSelector('.loader', { state: 'hidden' });
        expect(this.searchbtn).toBeVisible();
        expect(this.searchbtn).toBeEnabled();
    }

    async verifyListOfTransactionType() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');
        const expectedValues = ['Cash Payment', 'Premium Payment'];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async verifyListOfPaymentStatus() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator('//mat-label//span[@title="Payment Status"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');
        const expectedValues = ['Cleared-allocated', 'Cleared-unallocated', 'Partially Allocated', 'Re-processing', 'Returned', 'Unidentified'];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async verifyAmountErrorMessage() {
        const premiumAndTaxAmount = this.page.locator('//mat-label[contains(@title,"Please enter a value less than or equal to")]');
            expect(premiumAndTaxAmount).toBeVisible();
        }
    

}