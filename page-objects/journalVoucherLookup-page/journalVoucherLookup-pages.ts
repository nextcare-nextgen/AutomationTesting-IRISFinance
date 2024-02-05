import { Keyboard, Locator, Page, expect } from "@playwright/test";

export class JournalVoucherLookupPage {

    readonly page: Page;
    readonly journalVoucherShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator;
    readonly orgShortcut: Locator;
    readonly journalVoucherLookupButton: Locator;
    readonly journalVoucherLookupsearchSection: Locator;
    readonly journalVoucherLookupGridSection: Locator;
    readonly organizationName: Locator;
    readonly advancedSearch: Locator;
    readonly accountNumber: Locator;
    readonly accountName: Locator;
    readonly applybutton: Locator;
    readonly search: Locator;
    readonly vouchertype: Locator;
    readonly fromVoucherNumber: Locator;
    readonly toVoucherNumber: Locator;
    readonly errorMessageVochernumber: Locator;
    readonly amount: Locator;
    readonly gridVoucherNum: Locator;
    readonly gridVouchertype: Locator;
    readonly gridVoucherDate: Locator;
    readonly gridAccountName: Locator;
    readonly gridAccountNum: Locator;
    readonly gridAmount: Locator;
    readonly gridCurrency: Locator;
    readonly gridAmountCV1: Locator;
    readonly gridAmountCV2: Locator;
    readonly gridDebitCredit: Locator;
    readonly gridValueDate: Locator;
    readonly gridproductLine: Locator;
    readonly gridVoucherRef: Locator;
    readonly vocherInfoText: Locator;
    readonly secondsection :Locator;
    readonly thirdsection :Locator;
    readonly voucherType :Locator;
    readonly voucherDate :Locator;
    readonly voucherRef :Locator; 
    readonly voucherNum :Locator;
    readonly validationDate :Locator;
    readonly validatedCheckbox :Locator;


    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//h1[@title="Journal Vouchers"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.journalVoucherLookupButton = page.locator('//a[@title="Journal Voucher lookup"]');
        this.journalVoucherLookupsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherLookupGridSection = page.locator('//section//mat-table[@id="JournalVoucherLookupList"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.advancedSearch = page.locator('//div//button[@title="Filter"]');
        this.accountNumber = page.locator('//div//input[@title="Account number"]');
        this.accountName = page.locator('//div//input[@title="Account name"]');
        this.applybutton = page.locator('//div//button[@title="Apply"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.vouchertype = page.locator('//iris-voucher-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.fromVoucherNumber = page.locator('//div//input[@title="From voucher number"]');
        this.toVoucherNumber = page.locator('//div//input[@title="To voucher number"]');
        this.errorMessageVochernumber = page.locator('//mat-label[text()="Please enter a value greater than or equal to 100"]');
        this.amount = page.locator('//div//input[@title="From Amount"]');
        this.gridVoucherNum = page.locator('//small[text()="Voucher Number"]');
        this.gridVouchertype = page.locator('//small[text()="Voucher Type"]');
        this.gridVoucherDate = page.locator('//small[text()="Voucher Date"]');
        this.gridAccountNum = page.locator('//small[text()="Account Number"]');
        this.gridAccountName = page.locator('//small[text()="Account Name"]');
        this.gridAmount = page.locator('//small[text()="Amount"]');
        this.gridCurrency = page.locator('//small[text()="Currency"]');
        this.gridAmountCV1 = page.locator('//small[text()="Amount CV1 (EUR)"]');
        this.gridAmountCV2 = page.locator('//small[text()="Amount CV2 (EUR)"]');
        this.gridDebitCredit = page.locator('//small[text()="Debit/Credit"]');
        this.gridValueDate = page.locator('//small[text()="Value Date"]');
        this.gridproductLine = page.locator('//small[text()="Product Line"]');
        this.gridVoucherRef = page.locator('//small[text()="Voucher Reference"]');
        this.vocherInfoText = page.locator('//h2[text()="Voucher Information"]');
        this.secondsection = page.locator('//mat-table[@id="voucherTransactionList"]');
        this.thirdsection = page.locator('//mat-table[@id="pivot-grid-data"]');
        this.voucherType = page.locator('//iris-standard-card//iris-select-formfield//div[contains(@class,"mat-form-field-flex")]');
        this.voucherDate = page.locator('//iris-standard-date//following::div//input[@title="Voucher Date"]');
        this.voucherRef = page.locator('//iris-standard-date//following::div//input[@title="Voucher Ref"]');
        this.voucherNum = page.locator('//iris-standard-date//following::div//input[@title="Voucher Number"]');
        this.validationDate = page.locator('//iris-standard-date//following::div//input[@title="Validation Date"]');
        this.validatedCheckbox = page.locator('//iris-checkbox-select//mat-checkbox');

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

    async verifyJournalVoucherLookupText(data: string) {
        await expect(this.journalVoucherLookupButton).toHaveText(data);
    }

    async clickOnJournalVoucherLookupButton() {
        await this.journalVoucherLookupButton.click();
    }

    async verifyjournalVoucherLookupsearchSection() {
        expect(this.journalVoucherLookupsearchSection).toBeVisible;
    }

    async verifyjournalVoucherLookupGridSection() {
        expect(this.journalVoucherLookupGridSection).toBeVisible;
    }

    async verifyOrganizationName(data: string) {
        await expect(this.organizationName).toHaveText(data);
    }

    async clickOnAdvancedSearchButton() {
        await this.advancedSearch.click();
    }

    async verifyAccountNumberField() {
        expect(this.accountNumber).toBeVisible;
    }

    async verifyAccountNameField() {
        expect(this.accountName).toBeVisible;
    }

    async enterAccountNumber(accountnumber: string) {
        await this.accountNumber.clear();
        await this.accountNumber.fill(accountnumber);
    }

    async enterAccountName(accountname: string) {
        await this.accountName.clear();
        await this.accountName.fill(accountname);
    }

    async clickonApplyButton() {
        await this.applybutton.click();
    }

    async clickonSearchButton() {
        await this.search.click();
    }

    async clickonVoucherType() {
        await this.vouchertype.click();
    }

    async verifyVoucherTypeDropdownList() {

        const dropdownLst = this.page.locator('//div//mat-option//span//iris-base-label');
        for (let index = 0; index < await dropdownLst.count(); index++) {
            expect(await dropdownLst.nth(index).innerText()).toBeTruthy();

        }
        console.log(await dropdownLst.count());
    }

    async enterFromVoucherNumber(fromvoucherNumber: string) {
        await this.fromVoucherNumber.clear();
        await this.fromVoucherNumber.fill(fromvoucherNumber);
    }


    async enterToVoucherNumber(tovoucherNumber: string) {
        await this.toVoucherNumber.clear();
        await this.toVoucherNumber.fill(tovoucherNumber);
    }


    async verifyErrorForVoucherNumber(data: string) {
        await expect(this.errorMessageVochernumber).toHaveText(data);
    }

    async enterAmount(amount: string) {
        await this.amount.clear();
        await this.amount.fill(amount);
    }


    async verifyAmountFromGrid() {

        const amount = this.page.locator('//mat-cell[contains(@class,"amount ")]');
        for (let index = 0; index < await amount.count(); index++) {
            expect(await amount.nth(index).innerText()).toBeTruthy();

        }
        console.log(await amount.count());
    }

    async verifySearchButton() {
        await expect(this.search).toBeVisible;
    }

    async verifyGridHeaderCloumnName() {
        await expect(this.gridVouchertype).toBeVisible;
        await expect(this.gridVoucherDate).toBeVisible;
        await expect(this.gridAccountName).toBeVisible;
        await expect(this.gridAccountNum).toBeVisible;
        await expect(this.gridAmount).toBeVisible;
        await expect(this.gridCurrency).toBeVisible;
        await expect(this.gridAmountCV1).toBeVisible;
        await expect(this.gridAmountCV2).toBeVisible;
        await expect(this.gridDebitCredit).toBeVisible;
        await expect(this.gridValueDate).toBeVisible;
        await expect(this.gridproductLine).toBeVisible;
        await expect(this.gridVoucherRef).toBeVisible;

    }

    async clickOnEditJournalVoucherButton() {
        let editicon = this.page.locator('//mat-icon[@data-mat-icon-name="icon-edit"]');
        await editicon.first().click();
    }

    async verifyVoucherInformationTexr(data: string) {
        await expect(this.vocherInfoText).toHaveText(data);
    }


    async verifyTransactionFromGrid() {

        const transaction = this.page.locator('//mat-cell[contains(@class,"account")]');
        for (let index = 0; index < await transaction.count(); index++) {
            expect(await transaction.nth(index).innerText()).toBeTruthy();

        }
        console.log(await transaction.count());
    }

    async verifySectionsFromVoucherInfo() {
        await expect(this.secondsection).toBeVisible;
        await expect(this.thirdsection).toBeVisible;
    }

    async verifyVoucherDetailsFirstSection() {
        await expect(this.voucherType).toBeVisible;
        await expect(this.voucherDate).toBeVisible;
        await expect(this.voucherRef).toBeVisible;
        await expect(this.voucherNum).toBeVisible;
        await expect(this.validationDate).toBeVisible;
        await expect(this.validatedCheckbox).toBeVisible;
        
    }

    async verifyValidatedCheckboxDisbaled() {
        await expect(this.validatedCheckbox).toBeDisabled;
        
    }

}