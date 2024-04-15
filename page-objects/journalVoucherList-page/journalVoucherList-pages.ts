import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class JournalVoucherListPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator
    readonly journalVoucherShortcut: Locator;
    readonly journalVoucherListButton: Locator;
    readonly journalVoucherListsearchSection: Locator;
    readonly journalVoucherListGridSection: Locator;
    readonly journalVouchertext: Locator;
    readonly fromDate: Locator;
    readonly toDate: Locator;
    readonly search: Locator;
    readonly filter: Locator;
    readonly reset: Locator;
    readonly voucherNumber: Locator;
    readonly voucherType: Locator;
    readonly voucherDate: Locator;
    readonly validated: Locator;
    readonly validationDate: Locator;
    readonly voucherRef: Locator;
    readonly vouchertype: Locator;
    readonly fromVoucherNumber: Locator;
    readonly toVoucherNumber: Locator;
    readonly voucherRefAdvancedFilter: Locator;
    readonly errorMessageVochernumber: Locator;
    readonly applybutton: Locator;
    readonly journalVoucherDeatilsText: Locator;
    readonly voucherNum: Locator;
    readonly validatedCheckbox: Locator;
    readonly currency: Locator;
    readonly totalDebit: Locator;
    readonly totalCredit: Locator;
    readonly balance: Locator;
    readonly accountName: Locator;
    readonly amount: Locator;
    readonly editTransationCurrency: Locator;
    readonly amountCV1: Locator;
    readonly amountCV2: Locator;
    readonly valueDate: Locator;
    readonly description: Locator;
    readonly recordPerPageDropdown: Locator;
    readonly recordPerPage: Locator;
    readonly searchBar: Locator;
    readonly label: Locator;
    readonly clearAll: Locator;

    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherListButton = page.locator('//a[@title="Journal Voucher List"]');
        this.journalVoucherListsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherListGridSection = page.locator('//section//mat-table[@id="JournalVoucherListList"]');
        this.journalVouchertext = page.locator('//h1[@title="Journal Vouchers"]');
        this.fromDate = page.locator('//div//input[@title="From Date"]');
        this.toDate = page.locator('//div//input[@title="To Date"]');
        this.search = page.locator('//button[@title="Search"]');
        this.filter = page.locator('//button[@title="Filter"]');
        this.reset = page.locator('//button[@title="Reset"]');
        this.voucherNumber = page.locator('//mat-header-cell[@id="voucherNumber-Voucher Number"]');
        this.voucherType = page.locator('//mat-header-cell[@id="voucherTypeCode-Voucher Type"]');
        this.voucherDate = page.locator('//mat-header-cell[@id="voucherDate-Voucher Date"]');
        this.validated = page.locator('//mat-header-cell[@id="isValidated-Validated"]');
        this.validationDate = page.locator('//mat-header-cell[@id="validationDate-Validation Date"]');
        this.voucherRef = page.locator('//mat-header-cell[@id="voucherReference-Voucher Reference"]');
        this.vouchertype = page.locator('//iris-voucher-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.fromVoucherNumber = page.locator('//div//input[@title="From voucher number"]');
        this.toVoucherNumber = page.locator('//div//input[@title="To voucher number"]');
        this.voucherRefAdvancedFilter = page.locator('///div//input[@title="Voucher Reference"]');
        this.errorMessageVochernumber = page.locator('//mat-label[text()="Please enter a value greater than or equal to 100"]');
        this.applybutton = page.locator('//div//button[@title="Apply"]');
        this.journalVoucherDeatilsText = page.locator('//h1[@title="Journal Voucher Modification"]');
        this.voucherNum = page.locator('//iris-standard-date//following::div//input[@title="Voucher Number"]');
        this.validatedCheckbox = page.locator('//iris-checkbox-select//mat-checkbox');
        this.currency = page.locator('//mat-header-cell[contains(@id,"amountName-Currency")]');
        this.totalDebit = page.locator('//mat-header-cell[contains(@id,"debitTotal-Total Debit")]');
        this.totalCredit = page.locator('//mat-header-cell[contains(@id,"creditTotal-Total Credit")]');
        this.balance = page.locator('//mat-header-cell[contains(@id,"balance-Balance")]');
        this.amount = page.locator('//div//input[@title="Amount"]');
        this.editTransationCurrency = page.locator('//mat-header-cell[contains(@id,"balance-Balance")]');
        this.amountCV1 = page.locator('//div//input[@title="Amount CV1"]');
        this.amountCV2 = page.locator('//div//input[@title="Amount CV2"]');
        this.valueDate = page.locator('//div//input[@title="Value Date"]');
        this.description = page.locator('//div//input[@title="Description"]');
        this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        this.recordPerPage = page.locator('//div[text()=" Records per page: "]');
        this.searchBar = page.locator('//iris-text-input[contains(@class,"search-menu-input")]');
        this.label = page.locator('//iris-menu-card//iris-base-label//span');
        this.clearAll = page.locator('//div//button[@title="Clear All"]');
    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
    }


    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyJournalVoucherShortcutButton() {
        expect(this.journalVoucherShortcut).toBeVisible;
    }

    async verifyJournalVoucherListText(data: string) {
        const actual = await this.journalVoucherListButton.textContent();
        expect(actual).toBe(data);
    }

    async clickOnJournalVoucherListButton() {
        await this.journalVoucherListButton.click();
    }

    async verifyjournalVoucherListsearchSection() {
        expect(this.journalVoucherListsearchSection).toBeVisible;
    }

    async verifyjournalVoucherListGridSection() {
        expect(this.journalVoucherListGridSection).toBeVisible;
    }

    async verifyJournalVoucherText(data: string) {
        const actual = await this.journalVouchertext.textContent();
        expect(actual).toBe(data);
    }

    async verifyjournalVoucherListAllFields() {
        expect(this.fromDate).toBeVisible;
        expect(this.toDate).toBeVisible;
        expect(this.search).toBeVisible;
        expect(this.filter).toBeVisible;
        expect(this.reset).toBeVisible;
        expect(this.voucherNumber).toBeVisible;
        expect(this.voucherType).toBeVisible;
        expect(this.voucherDate).toBeVisible;
        expect(this.validated).toBeVisible;
        expect(this.validationDate).toBeVisible;
        expect(this.voucherRef).toBeVisible;
    }

    async verifyVoucherTypeDropdownList() {

        const dropdownLst = this.page.locator('//div//mat-option//span//iris-base-label');
        for (let index = 0; index < await dropdownLst.count(); index++) {
            expect(await dropdownLst.nth(index).innerText()).toBeTruthy();

        }
        console.log(await dropdownLst.count());
    }

    async clickonVoucherType() {
        await this.vouchertype.click();
    }

    async clickOnAdvancedSearchButton() {
        await this.filter.click();
    }

    async clickOnApplyButton() {
        await this.applybutton.click();
    }

    async selectVoucherType(data: string) {
        await this.vouchertype.click();
        const vouchertypeinput = this.page.locator('//iris-base-layout//iris-select-formfield//mat-form-field[contains(@class,"type")]//input');
        vouchertypeinput.fill(data);
        const selectvouchertype = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
        selectvouchertype.click();
    }

    async verifyFromVoucherNumber() {
        expect(this.fromVoucherNumber).toBeVisible;
    }

    async enterFromVoucherNumber(fromvoucherNumber: string) {
        await this.fromVoucherNumber.clear();
        await this.fromVoucherNumber.fill(fromvoucherNumber);
    }

    async enterToVoucherNumber(tovoucherNumber: string) {
        await this.toVoucherNumber.clear();
        await this.toVoucherNumber.fill(tovoucherNumber);
    }

    async enterToVoucherN(tovoucherNumber: string) {
        await this.toVoucherNumber.clear();
        await this.toVoucherNumber.fill(tovoucherNumber);
    }

    async verifyErrorForVoucherNumber(data: string) {
        const actual = await this.errorMessageVochernumber.textContent();
        expect(actual).toBe(data);
    }

    async verifyFromDate() {
        expect(this.fromDate).toBeVisible;
    }

    async enterfromDate(fromDate: string) {
        await this.fromDate.clear();
        await this.fromDate.fill(fromDate);
    }

    async enterToDate(date: string) {
        await this.toDate.clear();
        await this.toDate.fill(date);
    }

    async verifyToDate() {
        expect(this.toDate).toBeVisible;
    }

    async verifySearchButton() {
        expect(this.search).toBeVisible;
    }

    async clickOnSearchButton() {
        await this.search.click();
    }

    async verifyVoucherNumFromGrid() {
        const voucherNum = this.page.locator('//mat-cell[contains(@class,"voucherNumber")]');
        for (let index = 0; index < await voucherNum.count(); index++) {
            expect(await voucherNum.nth(index).innerText()).toBeTruthy();
        }
    }

    async clickOnEditJournalVoucherButton() {
        let editicon = this.page.locator('//mat-icon[@data-mat-icon-name="icon-edit"]');
        await editicon.first().click();
    }


    async verifyJournalVoucherDeatilsText(data: string) {
        const actual = await this.journalVoucherDeatilsText.textContent();
        expect(actual).toBe(data);
    }

    async verifyAccountsFromGrid() {
        const accounts = this.page.locator('//mat-cell[contains(@class,"accountnumberandname")]');
        for (let index = 0; index < await accounts.count(); index++) {
            expect(await accounts.nth(index).innerText()).toBeTruthy();
        }
    }

    async verifyVoucherDetailsFirstSection() {
        await expect(this.voucherType).toBeVisible;
        await expect(this.voucherDate).toBeVisible;
        await expect(this.voucherRef).toBeVisible;
        await expect(this.voucherNum).toBeVisible;
        await expect(this.validationDate).toBeVisible;
        await expect(this.validatedCheckbox).toBeVisible;

    }

    async verifyValidatedCheckboxDisabled() {
        await expect(this.validatedCheckbox).toBeDisabled;

    }

    async verifyTotalDebitCVisequaltoTotalCreditCV() {
        let totalDebit = await this.page.locator('//mat-cell[contains(@class,"debitTotal")]').all;
        let totalCredit = await this.page.locator('//mat-cell[contains(@class,"debitTotal")]').all;

        for (let i = 0; i < totalDebit.length && totalCredit.length; i++) {
            expect(totalDebit[i].toEqual(totalCredit[i]));
        }
    }

    async verifyEditTransactionScreen() {
        await expect(this.amount).toBeVisible;
        await expect(this.amountCV1).toBeVisible;
        await expect(this.amountCV2).toBeVisible;
        await expect(this.valueDate).toBeVisible;
        await expect(this.description).toBeVisible;
    }

    async clickOnRecordsPerPageDropdown(data: string[]) {
        await this.recordPerPageDropdown.click();
        await expect(this.page.locator('//mat-option//span')).toHaveText([' 50 ', ' 100 ', ' 150 ' , ' 200 ' , ' 250 ']);
    }

    async verifyRecordsPerPageTitle(data: string) {
        const actual = await this.recordPerPage.textContent();
        expect(actual).toBe(data);
    }

    async clickOnRecordsPerPageDropdownOption() {
        await this.recordPerPageDropdown.click();
        let dropdownOptions = await this.page.locator('//mat-option//span').all();

        for (let i = 0; i < dropdownOptions.length; i++) {
            // Check if current value is Item 1
            if (await dropdownOptions[i].textContent() === " 100 ") {
                // Click if element with text found
                await dropdownOptions[i].click();
                break;
            }
        }
    }

    async verifyCurrencyAndAmountFromGrid() {

        const currency = this.page.locator('//mat-cell[contains(@class,"amountName")]');
        for (let index = 0; index < await currency.count(); index++) {
            expect(await currency.nth(index).innerText()).toBeTruthy();

        }

        const amount = this.page.locator('//mat-cell[contains(@class,"amount ")]');
        for (let index = 0; index < await amount.count(); index++) {
            expect(await amount.nth(index).innerText()).toBeTruthy();

        }

    }

    async verifySearchBar() {
        await expect(this.searchBar).toBeVisible;
    }

    async enterinSearchbar(data: string) {
        await this.searchBar.fill(data);
        await sleep(2000);
        const actual = await this.label.textContent();
        expect(actual).toBe(data);
    }


    async clickonClearAllButton() {
        await this.clearAll.click();
    }

    async verifyAdvancedSearchfieldisEmpty() {
        await expect(this.fromVoucherNumber).toBeEmpty;
        await expect(this.toVoucherNumber).toBeEmpty;
        await expect(this.voucherType).toBeEmpty;

    }


}