import { Keyboard, Locator, Page, expect } from "@playwright/test";

export class PoliciesPage {
    readonly page: Page;

    readonly policiesShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly policiesText: Locator;
    readonly fromDate: Locator;
    readonly toDate: Locator;
    readonly search: Locator;
    readonly advancedSearch: Locator;
    readonly reset: Locator;
    readonly policyId: Locator;
    readonly reference: Locator;
    readonly holderName: Locator;
    readonly startDate: Locator;
    readonly endDate: Locator;
    readonly brokerName: Locator;
    readonly policyRef: Locator;
    readonly advancedSearchPolicyId: Locator;
    readonly policyHolderName: Locator;
    readonly applybtn: Locator;
    readonly policyJournalVochereyeicon: Locator;
    readonly policyJournalVochereText: Locator;
    readonly policyJournalVoucherList: Locator;
    readonly policyJournalVoucherDtailsList: Locator;
    readonly voucherNumber: Locator;
    readonly voucherType: Locator;
    readonly voucherRef: Locator;
    readonly voucherDate: Locator;
    readonly validated: Locator;
    readonly validationDate: Locator;
    readonly account: Locator;
    readonly description: Locator;
    readonly currency: Locator;
    readonly amount: Locator;
    readonly amountCV1EUR: Locator;
    readonly amountCV2EUR: Locator;
    readonly credit_debit: Locator;
    readonly valuedDate: Locator;
    readonly recordPerPage: Locator;
    readonly errorText: Locator;
    readonly orgShortcut: Locator;
    readonly threedotsfromOrg: Locator;
    readonly editOrganization: Locator;
    readonly policyJournalVocherDeatils: Locator;





    constructor(page: Page) {
        this.page = page;
        this.policiesShortcut = page.locator('//div//span[@title="Policies"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.policiesText = page.locator('//div//h1[@title="Policies"]');
        this.fromDate = page.locator('//input[@title="From Date"]');
        this.toDate = page.locator('//input[@title="To Date"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.advancedSearch = page.locator('//div//button[@title="Filter"]');
        this.reset = page.locator('//div//button[@title="Reset"]');
        this.policyId = page.locator('//iris-base-label//small[@title="Policy Id"]');
        this.reference = page.locator('//iris-base-label//small[@title="Reference"]');
        this.holderName = page.locator('//iris-base-label//small[@title="Holder Name"]');
        this.startDate = page.locator('//iris-base-label//small[@title="Start Date"]');
        this.endDate = page.locator('//iris-base-label//small[@title="End Date"]');
        this.brokerName = page.locator('//iris-base-label//small[@title="Broker Name"]');
        this.policyRef = page.locator('//div//input[@title="Policy Reference"]');
        this.advancedSearchPolicyId = page.locator('//div//input[@title="Policy Id"]');
        this.policyHolderName = page.locator('//div//input[@title="Policy Holder Name"]');
        this.applybtn = page.locator('//div//button[@title="Apply"]');
        this.policyJournalVochereyeicon = page.locator('//button[@title="View Policy Journal Voucher"]');
        this.policyJournalVocherDeatils = page.locator('//mat-table[@id="policyJournalVoucherDtailsList"]');
        this.policyJournalVochereText = page.locator('//div//h1[@title="Policy Journal Voucher"]');
        this.policyJournalVoucherList = page.locator('//mat-table[@id="policyJournalVoucherList"]');
        this.policyJournalVoucherDtailsList = page.locator('//mat-table[@id="policyJournalVoucherDtailsList"]');
        this.voucherNumber = page.locator('//div//small[text()="Voucher number"]');
        this.voucherType = page.locator('//div//small[text()="Voucher Type"]');
        this.voucherRef = page.locator('//div//small[text()="Voucher Reference"]');
        this.voucherDate = page.locator('//div//small[text()="Voucher Date"]');
        this.validated = page.locator('//div//small[text()="Validated"]');
        this.validationDate = page.locator('//div//small[text()="Validation Date"]');
        this.account = page.locator('//div//small[text()="Account"]');
        this.description = page.locator('//div//small[text()="Description"]');
        this.currency = page.locator('//div//small[text()="Currency"]');
        this.amount = page.locator('//div//small[text()="Amount"]');
        this.amountCV1EUR = page.locator('(//div//small[text()="Amount EUR"])[1]');
        this.amountCV2EUR = page.locator('(//div//small[text()="Amount EUR"])[2]');
        this.credit_debit = page.locator('//div//small[text()="Credit/Debit"]');
        this.valuedDate = page.locator('//div//small[text()="Value Date"]');
        this.recordPerPage = page.locator('//div[text()=" Records per page: "]');
        this.errorText = page.locator('//mat-label[text()="Exceeded maximum value"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.threedotsfromOrg = page.locator('//mat-cell[contains(@class,"table-button-cell")]//button//mat-icon');
        this.editOrganization = page.locator('//mat-icon[@title="Edit Organization"]');

    }


    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }

    async clickOnPoliciesShrtcutsButton() {
        await new Promise(resolve => setTimeout(resolve, 9000));
        await this.policiesShortcut.first().click();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async clickOnOrganizationShrtcutsButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.orgShortcut.last().click();
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }


    async clickOnPolicisShrtcutsButton() {
        await this.policiesShortcut.click();
    }

    async verifyPolicisShortcutButton() {
        expect(this.policiesShortcut).toBeVisible;

    }

    async verifyPoliciesText(data: string) {
        const actual = await this.policiesText.textContent();
        expect(actual).toBe(data);
    }

    async verifyTextisinBold() {

        const boldElement = await this.page.locator('//h1[@title="Policies"]');
        // Check if the font-weight is bold
        const fontWeight = await boldElement.evaluate(element => {
            return window.getComputedStyle(element).fontWeight;
        });

        // Assert that the font-weight is either 'bold' or a numeric value equal or greater than 700
        expect(['bold', '700', '800', '900'].includes(fontWeight)).toBe(true);
    }

    async verifyFromDate() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.fromDate).toBeVisible();
    }

    async verifyToDate() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.toDate).toBeVisible();
    }

    async enterValidFromDate(fromDate: string) {
        await this.fromDate.clear();
        await this.fromDate.fill(fromDate);
    }

    async enterinValidFromDate(fromDates: string, errorText: string) {
        // await this.fromDate.clear();
        // await this.fromDate.fill(fromDates);
        // this.page.keyboard.press("Enter")
        // const actual = await this.errorText.textContent();
        // expect(actual).toBe(errorText);

        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate()); 
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
        await this.fromDate.fill(formattedPastDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
        const filledDate = await this.fromDate.inputValue();  
        const filledDateObj = new Date(filledDate.split("-").reverse().join("-")); 
        expect(filledDateObj.getTime()).toBeLessThanOrEqual(today.getTime());
    }

    async enterValidToDate(ToDate: string) {
        await this.fromDate.clear();
        await this.fromDate.fill(ToDate);
    }

    async verifySearch() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.search).toBeVisible();
    }

    async verifyAdvancedSearch() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.advancedSearch).toBeVisible();
    }

    async verifyReset() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.reset).toBeVisible();
    }

    async verifyGridColumn() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.policyId).toBeVisible();
        expect(this.reference).toBeVisible();
        expect(this.holderName).toBeVisible();
        expect(this.startDate).toBeVisible();
        expect(this.endDate).toBeVisible();
        expect(this.brokerName).toBeVisible();
    }

    async clickOnSerach() {
        await this.search.click();
        await this.page.waitForSelector('.loader', { state: 'hidden' });
    }

    async clickOnReset() {
        await this.reset.click();
    }

    async VerifyStartDateFromGrid() {
        let startdatevalue = await this.page.locator("//mat-cell[contains(@class,'policyStartDate')]").all();
        console.log(startdatevalue);
        for (let i = 0; i < startdatevalue.length; i++) {
            console.log(startdatevalue[i].allTextContents);
        }
    }


    async verifySearchResultFromDate() {
        const pendingReasonLocator = this.page.locator('//mat-cell[contains(@class,"policyStartDate")]');
        for (let index = 0; index < await pendingReasonLocator.count(); index++) {
            expect(await pendingReasonLocator.nth(index).innerText()).toBeTruthy();
        }
        console.log(await pendingReasonLocator.count());
    }


    async clickOnAdvancedSerach() {
        await this.advancedSearch.click();
        await this.page.waitForSelector('.loader', { state: 'hidden' });
    }

    async verifyPolicyReference() {
        expect(this.policyRef).toBeVisible();
    }

    async verifyPolicyId() {
        expect(this.policyId).toBeVisible();
    }

    async verifyPolicyHolderName() {
        expect(this.policyHolderName).toBeVisible();
    }

    async verifyApplyButton() {
        expect(this.applybtn).toBeVisible();
    }

    async verifyPolicyJournalVochereyeiconButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const icon = this.page.locator('//button[@title="View Policy Journal Voucher"]');
        for (let index = 0; index < await icon.count(); index++) {
            //expect(await policyHolderName.nth(index).innerText()).toBeTruthy();
            expect(await icon.nth(index)).toBeVisible();
        }

    }

    async clickOnPolicyJournalVochereyeiconButton() {
        await this.policyJournalVochereyeicon.click();
    }

    async verifyPolicyJournalVocherTitle(data: string) {
        const actual = await this.policyJournalVochereText.textContent();
        expect(actual).toBe(data);
    }

    async clickOnViewJournalVoucherEyeIcon() {
        let eyeIcons = this.page.locator('//button[@title="View Policy Journal Voucher"]');
        await eyeIcons.first().click();
    }

    async verifyPolicyJournalVoucherListSection() {
        expect(this.policyJournalVoucherList).toBeVisible();
    }

    async verifyPolicyJournalVoucherDtailsListSection() {
        expect(this.policyJournalVocherDeatils).toBeVisible();
    }

    async enterPolicyReference(policyRef: string) {
        await this.policyRef.fill(policyRef);

    }

    async enterPolicyId(policyId: string) {
        await this.advancedSearchPolicyId.fill(policyId);

    }

    async enterPolicyHolderName(policyHolderName: string) {
        await this.policyHolderName.fill(policyHolderName);

    }

    async clickOnApplyButton() {
        await this.applybtn.click();
    }

    async verifySearchResultPolicyRef() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyRef = this.page.locator('//mat-cell[contains(@class,"policyReference")]');
        expect(policyRef).toBeVisible();
    }

    async verifySearchResultPolicyId() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyID = this.page.locator('//mat-cell[contains(@class,"policyId")]');
        expect(policyID).toBeVisible();

    }

    async verifySearchResultPolicyHolderName() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyHolderName = this.page.locator('//mat-cell[contains(@class,"policyHolderName")]');
        for (let index = 0; index < await policyHolderName.count(); index++) {
            expect(await policyHolderName.nth(index).innerText()).toBeTruthy();

        }
        console.log(await policyHolderName.count());
    }


    async verifyPolicyJournalVoucherFirstSectionGridColumn() {
        expect(this.voucherNumber).toBeVisible();
        expect(this.voucherType).toBeVisible();
        expect(this.voucherRef).toBeVisible();
        expect(this.voucherDate).toBeVisible();
        expect(this.validated).toBeVisible();
        expect(this.validationDate).toBeVisible();
    }

    async verifyPolicyJournalVoucherSecondSectionGridColumn() {
        expect(this.account).toBeVisible();
        expect(this.description).toBeVisible();
        expect(this.currency).toBeVisible();
        expect(this.amount).toBeVisible();
        expect(this.amountCV1EUR).toBeVisible();
        expect(this.amountCV2EUR).toBeVisible();
        expect(this.valuedDate).toBeVisible();
    }


    async clickOnVoucherRef() {
        let vocherRefs = this.page.locator('//mat-cell[contains(@class,"voucherReference")]');
        await vocherRefs.first().click();

    }

    async verifyAccountRecordsFromSecondGrid() {

        const account = this.page.locator('//mat-cell[contains(@class,"accountName")]');

        for (let index = 0; index < await account.count(); index++) {
            expect(await account.nth(index).innerText()).toBeTruthy();

        }
        console.log(await account.count());
    }

    async verifyRecordsPerPageTitle() {

        const recordsPerPageTitle = this.page.locator('//div[text()=" Records per page: "]');

        for (let index = 0; index < await recordsPerPageTitle.count(); index++) {
            expect(await recordsPerPageTitle.nth(index).innerText()).toBeTruthy();
        }
        console.log(await recordsPerPageTitle.count());
    }

    async clickOnRecordsPerPageDropdown() {
        // await new Promise(resolve => setTimeout(resolve, 5000));
        // const recordsPerPagedropdown = this.page.locator('//section//mat-select[contains(@aria-label,"")]').first();
        // recordsPerPagedropdown.click();
        // expect(this.page.locator('//mat-option//span')).toHaveText([' 50 ', ' 100 ', ' 150 ', ' 200 ', ' 250 ']);

        const recordsPerPagedropdown = this.page.locator('//section//mat-select[contains(@aria-label,"")]').first();
        await recordsPerPagedropdown.click();
        const options = this.page.locator('div[role="listbox"] mat-option span');
        await expect(options).toHaveCount(5, { timeout: 10000 });
        await expect(options).toHaveText([' 50 ', ' 100 ', ' 150 ', ' 200 ', ' 250 ']);
    }


    async verifyCurrencyRecordsFromSecondGrid() {

        const account = this.page.locator('//mat-cell[contains(@class,"currencyCode")]');

        for (let index = 0; index < await account.count(); index++) {
            //expect(await account.nth(index).innerText()).toBeTruthy();
            const currency = await account.nth(index).innerText();
            console.log("currency first:" + currency);
        }
        console.log(await account.count());
    }

    async clickonthreedotsfromOrg() {
        this.threedotsfromOrg.first().click();
    }

    async clickOnEditOrganization() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const org = this.page.locator('//mat-icon[@title="Edit Organization"]').first();
        await org.first().click();
    }

    async verifyCurrencyFromOrganization() {

        const currency = this.page.locator('//iris-currency-autocomplete//div//input');

        for (let index = 0; index < await currency.count(); index++) {
            //expect(await account.nth(index).innerText()).toBeTruthy();
            const currencies = await currency.nth(index).innerText();
            console.log("currency CV:" + currencies);
        }
    }


    async verifyAmountEqulestoCV() {

        const amount = this.page.locator('//mat-cell[contains(@class,"amount ")]');
        const amountcv1 = this.page.locator('//mat-cell[contains(@class,"amountCV1")]');
        // const amountcv2 = this.page.locator('//mat-cell[contains(@class,"amountCV2")]');

        for (let index = 0; index < await amount.count() || await amountcv1.count(); index++) {
            //const amountcv1 = this.page.locator('//mat-cell[contains(@class,"amountCV1")]');
            expect(await amount.nth(index).innerText()).toEqual(amountcv1.nth(index).innerText());

        }
    }

}
