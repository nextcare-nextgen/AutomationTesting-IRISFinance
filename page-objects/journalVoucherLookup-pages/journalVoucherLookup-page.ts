import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class JournalVoucherLookupPage {

    readonly page: Page;
    readonly journalVoucherShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator;
    readonly orgShortcut: Locator;
    readonly journalVoucherLookupbtn: Locator;
    readonly journalVoucherLookupsearchSection: Locator;
    readonly journalVoucherLookupGridSection: Locator;
    readonly organizationName: Locator;
    readonly advancedSearch: Locator;
    readonly accountNumber: Locator;
    readonly accountName: Locator;
    readonly applybtn: Locator;
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
    readonly gridAmountEUR: Locator;
    readonly gridAmountEUR2: Locator;
    readonly gridDebitCredit: Locator;
    readonly gridValueDate: Locator;
    readonly gridproductLine: Locator;
    readonly gridVoucherRef: Locator;
    readonly vocherInfoText: Locator;
    readonly secondsection: Locator;
    readonly thirdsection: Locator;
    readonly voucherType: Locator;
    readonly voucherDate: Locator;
    readonly voucherRef: Locator;
    readonly voucherNum: Locator;
    readonly validationDate: Locator;
    readonly validatedCheckbox: Locator;
    readonly accountVoucherInfo: Locator;
    readonly amountVoucherInfo: Locator;
    readonly currencyVoucherInfo: Locator;
    readonly amountcv1VoucherInfo: Locator;
    readonly amountcv2VoucherInfo: Locator;
    readonly debitcreditVoucherInfo: Locator;
    readonly valueDateVoucherInfo: Locator;
    readonly productLineVoucherInfo: Locator;
    readonly descVoucherInfo: Locator;
    readonly recordsPerPage: Locator;
    readonly recordPerPageDropdown: Locator;
    readonly currencyVoucherInfoThirdSection: Locator;
    readonly totalDebitVoucherInfoThirdSection: Locator;
    readonly totalCredityVoucherInfoThirdSection: Locator;
    readonly balanceVoucherInfoThirdSection: Locator;
    readonly searchbar: Locator;
    readonly toAmount: Locator;
    readonly clearAll: Locator;
    readonly label: Locator;

    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//h1[@title="Journal Vouchers"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.journalVoucherLookupbtn = page.locator('//a[@title="Journal Voucher Lookup"]');
        this.journalVoucherLookupsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherLookupGridSection = page.locator('//section//mat-table[@id="JournalVoucherLookupList"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.advancedSearch = page.locator('//div//button[@title="Filter"]');
        this.accountNumber = page.locator('//div//input[@title="Account number"]');
        this.accountName = page.locator('//div//input[@title="Account name"]');
        this.applybtn = page.locator('//div//button[@title="Apply"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.vouchertype = page.locator('//iris-voucher-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.fromVoucherNumber = page.locator('//div//input[@title="From voucher number"]');
        this.toVoucherNumber = page.locator('//div//input[@title="To voucher number"]');
        this.errorMessageVochernumber = page.locator("//mat-label[@title='Please enter a value greater than or equal to 100.']");
        this.amount = page.locator('//div//input[@title="From Amount"]');
        this.gridVoucherNum = page.locator('//small[text()="Voucher Number"]');
        this.gridVouchertype = page.locator('//small[text()="Voucher Type"]');
        this.gridVoucherDate = page.locator('//small[text()="Voucher Date"]');
        this.gridAccountNum = page.locator('//small[text()="Account Number"]');
        this.gridAccountName = page.locator('//small[text()="Account Name"]');
        this.gridAmount = page.locator('//small[text()="Amount"]');
        this.gridCurrency = page.locator('//small[text()="Currency"]');
        this.gridAmountEUR = page.locator("//mat-header-cell[@id='amountCV1-Amount EUR']/div/div//small[@title='Amount EUR']");
        this.gridAmountEUR2 = page.locator("//mat-header-cell[@id='amountCV2-Amount EUR']/div/div//small[@title='Amount EUR']");
        this.gridDebitCredit = page.locator('//small[text()="Debit/Credit"]');
        this.gridValueDate = page.locator('//small[text()="Value Date"]');
        this.gridproductLine = page.locator('//small[text()="Product Line"]');
        this.gridVoucherRef = page.locator('//small[text()="Voucher Reference"]');
        this.vocherInfoText = page.locator('//h2[text()="Voucher Information"]');
        this.secondsection = page.locator('//mat-table[@id="voucherTransactionList"]');
        this.thirdsection = page.locator('//mat-table[@id="pivot-grid-data"]');
        this.voucherType = page.locator('//iris-voucher-type-autocomplete//iris-select-formfield');
        this.voucherDate = page.locator('//iris-standard-date//following::div//input[@title="Voucher Date"]');
        this.voucherRef = page.locator('//iris-standard-date//following::div//input[@title="Voucher Ref"]');
        this.voucherNum = page.locator('//iris-standard-date//following::div//input[@title="Voucher Number"]');
        this.validationDate = page.locator('//iris-standard-date//following::div//input[@title="Validation Date"]');
        this.validatedCheckbox = page.locator('//iris-checkbox-select//mat-checkbox');
        this.accountVoucherInfo = page.locator('//div//small[@title="Account"]');
        this.amountVoucherInfo = page.locator('//div//small[@title="Amount"]');
        this.currencyVoucherInfo = page.locator('//mat-header-cell[contains(@class,"currencyCode")]//div//small[@title="Currency"]');
        this.amountcv1VoucherInfo = page.locator('//div//small[@title="Amount CV1 (EUR)"]');
        this.amountcv2VoucherInfo = page.locator('//div//small[@title="Amount CV2 (EUR)"]');
        this.debitcreditVoucherInfo = page.locator('//div//small[@title="Debit/Credit"]');
        this.valueDateVoucherInfo = page.locator('//div//small[@title="Value Date"]');
        this.productLineVoucherInfo = page.locator('//div//small[@title="Product Line"]');
        this.descVoucherInfo = page.locator('//div//small[@title="Description"]');
        this.recordsPerPage = page.locator(' //mat-paginator//div[text()=" Records per page: "]');
        this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        this.currencyVoucherInfoThirdSection = page.locator('//mat-header-cell[contains(@class,"amountName")]//div//small[@title="Currency"]');
        this.totalCredityVoucherInfoThirdSection = page.locator('//mat-header-cell[contains(@class,"debitTotal")]//div//small[@title="Total Debit"]');
        this.totalDebitVoucherInfoThirdSection = page.locator('//mat-header-cell[contains(@class,"creditTotal")]//div//small[@title="Total Credit"]');
        this.balanceVoucherInfoThirdSection = page.locator('//mat-header-cell[contains(@class,"balance")]//div//small[@title="Balance"]');
        this.searchbar = page.locator('//input[@placeholder="Search"]');
        this.toAmount = page.locator('//div//input[@title="To Amount"]');
        this.clearAll = page.locator('//div//button[@title="Clear All"]');
        this.label = page.locator('//iris-menu-card//iris-base-label//span');


    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
        await new Promise(resolve => setTimeout(resolve, 5000));

    }

    async clickOnOrganizationShrtcutsButton() {
        await this.orgShortcut.last().click();
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyJournalVoucherShortcutButton() {
        expect(this.journalVoucherShortcut).toBeVisible();
    }

    async verifyJournalVoucherLookupText(data: string) {
        const actual = await this.journalVoucherLookupbtn.textContent();
        expect(actual).toBe(data);
    }

    async clickOnJournalVoucherLookupButton() {
        await this.journalVoucherLookupbtn.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async verifyjournalVoucherLookupsearchSection() {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(this.journalVoucherLookupsearchSection).toBeVisible();
    }

    async verifyjournalVoucherLookupGridSection() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.journalVoucherLookupGridSection).toBeVisible();
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }

    async clickOnAdvancedSearchButton() {
        await this.advancedSearch.click();
    }

    async verifyAccountNumberField() {
        expect(this.accountNumber).toBeVisible();
    }

    async verifyAccountNameField() {
        expect(this.accountName).toBeVisible();
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
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.applybtn.click();
    }

    async clickonClearAllButton() {
        await this.clearAll.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async clickonSearchButton() {
        await this.search.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async clickonVoucherType() {
        await this.vouchertype.click();
    }

    async selectVoucherType(data: string) {
        await this.vouchertype.click();
        const selectvouchertype = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
        selectvouchertype.click();
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

    async enterToAmount(tovoucherNumber: string) {
        await this.toVoucherNumber.clear();
        await this.toVoucherNumber.fill(tovoucherNumber);
    }

    async verifyErrorForVoucherNumber(data: string) {
        const actual = await this.errorMessageVochernumber.textContent();
        expect(actual).toBe(data);
    }

    async enterAmount(amount: string) {
        await this.amount.clear();
        await this.amount.fill(amount);
    }


    async verifyAmountFromGrid() {
        await new Promise(resolve => setTimeout(resolve, 9000));
        const amount = this.page.locator('//mat-cell[contains(@class,"amount ")]');
        for (let index = 0; index < await amount.count(); index++) {
            expect(await amount.nth(index).innerText()).toBeTruthy();
        }
    }

    async verifySearchButton() {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(this.search).toBeVisible();
    }

    async verifyGridHeaderColumnName() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.gridVoucherNum).toBeVisible();
        expect(this.gridVoucherDate).toBeVisible();
        expect(this.gridAccountName).toBeVisible();
        expect(this.gridAccountNum).toBeVisible();
        expect(this.gridAmount).toBeVisible();
        expect(this.gridCurrency).toBeVisible();
        expect(this.gridproductLine).toBeVisible();
        expect(this.gridAmountEUR).toBeVisible();
        expect(this.gridAmountEUR2).toBeVisible();
        expect(this.gridDebitCredit).toBeVisible();
        expect(this.gridValueDate).toBeVisible();
        expect(this.gridVoucherRef).toBeVisible();

    }

    async clickOnEditJournalVoucherButton() {
        let editicon = this.page.locator('//mat-icon[@data-mat-icon-name="icon-edit"]');
        await editicon.first().click();
    }

    async verifyVoucherInformationTexr(data: string) {
        const actual = await this.vocherInfoText.textContent();
        expect(actual).toBe(data);
    }


    async verifyTransactionFromGrid() {
        const transaction = this.page.locator('//mat-cell[contains(@class,"account")]');
        for (let index = 0; index < await transaction.count(); index++) {
            expect(await transaction.nth(index).innerText()).toBeTruthy();
        }
        console.log(await transaction.count());
    }

    async verifySectionsFromVoucherInfo() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.secondsection).toBeVisible();
        expect(this.thirdsection).toBeVisible();
    }

    async verifyVoucherDetailsFirstSection() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.voucherType).toBeVisible();
        expect(this.voucherDate).toBeVisible();
        expect(this.voucherRef).toBeVisible();
        expect(this.voucherNum).toBeVisible();
        expect(this.validationDate).toBeVisible();
        expect(this.validatedCheckbox).toBeVisible();

    }

    async verifyValidatedCheckboxDisabled() {
        expect(this.validatedCheckbox).toBeDisabled;

    }

    async verifyVoucherDetailsSecondSection() {
        expect(this.amountVoucherInfo).toBeVisible();
        expect(this.accountVoucherInfo).toBeVisible();
        expect(this.currencyVoucherInfo).toBeVisible();
        expect(this.amountcv1VoucherInfo).toBeVisible();
        expect(this.amountcv2VoucherInfo).toBeVisible();
        expect(this.debitcreditVoucherInfo).toBeVisible();
        expect(this.valueDateVoucherInfo).toBeVisible();
        expect(this.productLineVoucherInfo).toBeVisible();
        expect(this.descVoucherInfo).toBeVisible();
    }


    async verifyRecordsPerPageText(data: string) {
        const actual = await this.recordsPerPage.textContent();
        expect(actual).toBe(data);
    }


    async clickOnRecordsPerPageDropdown() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const recordsPerPagedropdown = this.page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        recordsPerPagedropdown.first().click();
        expect(this.page.locator('//mat-option//span')).toHaveText([' 50 ', ' 100 ', ' 150 ', ' 200 ', ' 250 ']);
    }

    async clickOnRecordsPerPageDropdownOption() {
        await this.recordPerPageDropdown.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        let dropdownOptions = await this.page.locator('//mat-option//span').all();

        for (let i = 0; i < dropdownOptions.length; i++) {
            // Check if current value is Item 1
            if (await dropdownOptions[i].textContent() === " 100 ") {
                // Click if element with text found
                await dropdownOptions[i].click();
                await new Promise(resolve => setTimeout(resolve, 3000));
                break;
            }
        }
    }

    async verifyVoucherDetailsThirdSection() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.currencyVoucherInfoThirdSection).toBeVisible();
        expect(this.totalCredityVoucherInfoThirdSection).toBeVisible();
        expect(this.totalDebitVoucherInfoThirdSection).toBeVisible();
        expect(this.balanceVoucherInfoThirdSection).toBeVisible();
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

    async verifySearchBarisDisplay() {
        expect(this.searchbar).toBeVisible();
    }

    async verifyAdvancedSearchfieldisEmpty() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.fromVoucherNumber).toBeEmpty;
        expect(this.toVoucherNumber).toBeEmpty;
        expect(this.voucherType).toBeEmpty;
        expect(this.accountName).toBeEmpty;
        expect(this.accountNumber).toBeEmpty;

    }

    async enterinSearchbar(data: string) {
        await this.searchbar.fill(data);
        await new Promise(resolve => setTimeout(resolve, 3000));
        const actual = await this.label.textContent();
        expect(actual).toBe(data);
    }

    async verifyAccountNumberDisplayed() {
        const transaction = this.page.locator('//mat-cell[contains(@class,"account")]');
        for (let index = 0; index < await transaction.count(); index++) {
            expect(await transaction.nth(index).innerText()).toBeTruthy();
        }
    }

}