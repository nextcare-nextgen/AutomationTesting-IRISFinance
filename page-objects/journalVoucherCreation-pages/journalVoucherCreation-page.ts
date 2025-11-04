import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { appendFile } from "fs";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class JournalVoucherCreationPage {

    readonly page: Page;
    readonly journalVoucherShortcut: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly FXRatesShorcut: Locator;
    //readonly organizationShortcut: Locator;
    readonly policiesShortcut: Locator;
    readonly FTMshortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator;
    readonly orgShortcut: Locator;
    readonly journalVoucherLookupbtn: Locator;
    readonly journalVoucherLookupsearchSection: Locator;
    readonly journalVoucherLookupGridSection: Locator;
    readonly addJournalVoucherLookupbtn: Locator;
    readonly addJournalVoucherLookupTitle: Locator;
    readonly vouchertype: Locator;
    readonly addVoucherTransactionbtn: Locator;
    readonly description: Locator;
    readonly addVoucherTransactionTitle: Locator;
    readonly accountName: Locator;
    readonly amount: Locator;
    readonly currency: Locator;
    readonly amountEUR1: Locator;
    readonly amountEUR2: Locator;
    readonly valueDate: Locator;
    readonly productLine: Locator;
    readonly manadteaccountName: Locator;
    readonly manadteamount: Locator;
    readonly manadtecurrency: Locator;
    readonly manadteamountCV1: Locator;
    readonly manadteamountCV2: Locator;
    readonly manadtevalueDate: Locator;
    readonly manadtedescription: Locator;
    readonly selectValueCalenderIcon: Locator;
    readonly currentDateFromCalender: Locator;
    readonly savebtn: Locator;
    readonly editTransaction: Locator;
    readonly editJournalVoucher: Locator;
    readonly validateCheckbox: Locator;
    readonly errorpopup: Locator;
    readonly debitCreditErrorpopup: Locator;
    readonly gridCurrency: Locator;
    readonly gridTotalDebit: Locator;
    readonly gridTotalCredit: Locator;
    readonly gridBalance: Locator;
    readonly searchBar: Locator;
    readonly label: Locator;
    readonly voucherType: Locator;
    readonly VoucherDate: Locator;
    readonly voucherRef: Locator;
    readonly voucherNumber: Locator;
    readonly validationDate: Locator;
    readonly validated: Locator;
    readonly voucherDateMandate: Locator;
    readonly voucherDatecalenderIcon: Locator;
    readonly voucherTypeMandate: Locator;


    constructor(page: Page) {
        this.page = page;
        this.journalVoucherShortcut = page.locator('//div//span[@title="Journal Vouchers"]');
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.FXRatesShorcut = page.locator('//div//span[@title="FX Rates"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.policiesShortcut = page.locator('//div//span[@title="Policies"]');
        this.FTMshortcut = page.locator('//div//span[@title="Financial Transactions Monitoring"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//h1[@title="Journal Vouchers"]');
        this.orgShortcut = page.locator('//div//span[@title="Organizations"]');
        this.journalVoucherLookupbtn = page.locator('//a[@title="Journal Voucher Lookup"]');
        this.journalVoucherLookupsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherLookupGridSection = page.locator('//section//mat-table[@id="JournalVoucherLookupList"]');
        this.addJournalVoucherLookupbtn = page.locator('//button[@title="Add Journal Voucher Lookup"]');
        this.addJournalVoucherLookupTitle = page.locator('//h1[@title="Manage Journal Voucher"]');
        this.vouchertype = page.locator('//iris-voucher-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.addVoucherTransactionbtn = page.locator('//button[@title="Add Voucher Transaction"]');
        this.description = page.locator('//input[@title="Description"]');
        this.addVoucherTransactionTitle = page.locator('//h2[@title="Add Voucher Transaction"]');
        this.accountName = page.locator('//iris-composed-dialog//iris-account-autocomplete//div//input[contains(@class,"input-element")]');
        this.amount = page.locator('//iris-composed-dialog//input[@title="Amount"]');
        this.currency = page.locator('//iris-composed-dialog//iris-currency-autocomplete//div//input[contains(@class,"input-element")]');
        this.amountEUR1 = page.locator('(//iris-composed-dialog//input[@title="Amount EUR"])[1]');
        this.amountEUR2 = page.locator('(//iris-composed-dialog//input[@title="Amount EUR"])[2]');
        this.valueDate = page.locator('//iris-composed-dialog//input[@title="Value Date"]');
        this.productLine = page.locator('//iris-composed-dialog//iris-cost-center-autocomplete//div//input[contains(@class,"input-element")]');
        this.manadteaccountName = page.locator('//iris-composed-dialog//iris-account-autocomplete//div//input[contains(@class,"input-element")]');
        this.manadteamount = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Amount"]');
        this.manadtecurrency = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::iris-currency-autocomplete//input[contains(@class,"input-element")]');
        this.manadteamountCV1 = page.locator('(//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Amount EUR"])[1]');
        this.manadteamountCV2 = page.locator('(//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Amount EUR"])[2]');
        this.manadtevalueDate = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Value Date"]');
        this.manadtedescription = page.locator('//input[@title="Description"]');
        this.selectValueCalenderIcon = page.locator('//iris-composed-dialog//div//input[contains(@class,"datepicker")]//following::button//mat-icon[@data-mat-icon-name="icon-calendar"]');
        this.currentDateFromCalender = page.locator('//mat-month-view//td//button[contains(@class,"active")]');
        this.savebtn = page.locator('//button[@title="Save"]');
        this.editTransaction = page.locator('//button[@title="Edit Transaction"]');
        this.editJournalVoucher = page.locator('//button[@title="Edit Journal Voucher"]');
        this.validateCheckbox = page.locator('//iris-checkbox-select//mat-checkbox');
        this.errorpopup = page.locator('//mat-label[@title="Field is required"]');
        this.debitCreditErrorpopup = page.locator('//mat-label[@title="Total Debit and Total Credit should be equal."]')
        this.gridBalance = page.locator('//mat-header-cell[contains(@class,"balance")]');
        this.gridCurrency = page.locator('//mat-header-cell[contains(@class,"amountName")]');
        this.gridTotalCredit = page.locator('//mat-header-cell[contains(@class,"creditTotal")]');
        this.gridTotalDebit = page.locator('//mat-header-cell[contains(@class,"debitTotal")]')
        this.searchBar = page.locator('//input[@placeholder="Search"]');
        this.label = page.locator('//iris-menu-card//iris-base-label//span');
        this.voucherType = page.locator('//iris-voucher-type-autocomplete//mat-form-field');
        this.VoucherDate = page.locator('//iris-standard-date//mat-form-field//input[@title="Voucher Date"]');
        this.voucherRef = page.locator('//iris-text-input//mat-form-field//input[@title="Voucher Ref"]');
        this.voucherNumber = page.locator('//iris-text-input//mat-form-field//input[@title="Voucher Number"]');
        this.validationDate = page.locator('//iris-standard-date//mat-form-field//input[@title="Validation Date"]');
        this.validated = page.locator('//iris-checkbox-select//mat-checkbox');
        this.voucherDateMandate = page.locator('//label//span[contains(@class,"required-marker")]');
        this.voucherDatecalenderIcon = page.locator('//div//input[contains(@class,"datepicker")]//following::button//mat-icon[@data-mat-icon-name="icon-calendar"]');
        this.voucherTypeMandate = page.locator('//iris-voucher-type-autocomplete//mat-form-field//label');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
        await new Promise(resolve => setTimeout(resolve, 2000));

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

    async verifyJShortcutButtonAreClickable() {
        expect(this.journalVoucherShortcut).toBeEnabled();
        expect(this.cashAllocationShortcut).toBeEnabled();
        expect(this.chartOfAccountsShortcut).toBeEnabled();
        expect(this.FXRatesShorcut).toBeEnabled();
        expect(this.orgShortcut).toBeEnabled();
        expect(this.policiesShortcut).toBeEnabled();
        expect(this.FTMshortcut).toBeEnabled();
    }

    async verifyJournalVoucherLookupText(data: string) {
        const actual = await this.journalVoucherLookupbtn.textContent();
        expect(actual).toBe(data);
    }

    async clickOnJournalVoucherLookupButton() {
        await this.journalVoucherLookupbtn.waitFor();
        await this.journalVoucherLookupbtn.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async clickOnAddLookupVoucherCreationButton() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.addJournalVoucherLookupbtn.waitFor();
        await this.addJournalVoucherLookupbtn.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async verifyAddJournalVoucherLookupTitle(data: string) {
        const actual = await this.addJournalVoucherLookupTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyTitleinBold() {
        const boldElement = await this.page.locator('//h1[@title="Manage Journal Voucher"]');
        // Check if the font-weight is bold
        const fontWeight = await boldElement.evaluate(element => {
            return window.getComputedStyle(element).fontWeight;
        });

        // Assert that the font-weight is either 'bold' or a numeric value equal or greater than 700
        expect(['bold', '700', '800', '900'].includes(fontWeight)).toBe(true);
    }

    async verifyAddJournalVoucherLookupScections() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const fisrtSection = this.page.locator('//div[contains(@class,"items-start")]');
        expect(fisrtSection).toBeVisible();
        const secondSection = this.page.locator('//iris-composed-table-grid[contains(@class,"mb-4")]');
        expect(secondSection).toBeVisible();
        const thirdSection = this.page.locator('//iris-composed-table-grid[contains(@class,"pivotGrid")]');
        expect(thirdSection).toBeVisible();
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    async verifyVoucherTypeDropdownList() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const dropdownLst = this.page.locator('//div//mat-option//span//iris-base-label');
        for (let index = 0; index < await dropdownLst.count(); index++) {
            expect(await dropdownLst.nth(index).innerText()).toBeTruthy();
        }
    }

    async clickonVoucherType() {
        await this.vouchertype.click();
    }

    async selectVoucherType(data: string) {
        await this.vouchertype.click();
        const selectvouchertype = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
        selectvouchertype.click();
    }

    async clickOnAddVoucherTrancastionButton() {
        await this.addVoucherTransactionbtn.click();
        await new Promise(resolve => setTimeout(resolve, 3000));

    }

    async verifyDescriptionInputBox() {
        await new Promise(resolve => setTimeout(resolve, 9000));
        expect(this.description).toBeEditable();
    }

    async enterDescription(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.description.fill(data);
        //await new Promise(resolve => setTimeout(resolve, 3000));
    }

    async VerifyAddVoucherTrancastionButtonEnable() {
        expect(this.addVoucherTransactionbtn).toBeEnabled();
    }

    async verifyAddVoucherTrancastionTitle(data: string) {
        const actual = await this.addVoucherTransactionTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyAddVoucherTransactionFields() {
        expect(this.accountName).toBeVisible();
        expect(this.amount).toBeVisible();
        expect(this.currency).toBeVisible();
        expect(this.amountEUR1).toBeVisible();
        expect(this.amountEUR2).toBeVisible();
        expect(this.valueDate).toBeVisible();
        expect(this.description).toBeVisible();
        expect(this.productLine).toBeVisible();
    }

    async verifyMandatoryAddVoucherTransactionFields() {
        expect(this.manadteaccountName).toBeVisible();
        expect(this.manadteamount).toBeVisible();
        expect(this.manadtecurrency).toBeVisible();
        expect(this.manadteamountCV1).toBeVisible();
        expect(this.manadteamountCV2).toBeVisible();
        expect(this.manadtevalueDate).toBeVisible();
        expect(this.manadtedescription).toBeVisible();
        expect(this.productLine).toBeVisible();
    }


    async selectAccountName(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.accountName.click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]').click();
    }

    async enterAmount(data: string) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.amount.fill(data);
        //await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async selectCurrency(data: string) {
        await this.currency.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]').click();
        //await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async verifyCV1Amount() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const value = await this.amountEUR1.inputValue();
        expect(value).toBeTruthy();
    }

    async verifyCV2Amount() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const value = await this.amountEUR2.inputValue();
        expect(value).toBeTruthy();
    }

    async verifyCurrentDateFromCalender() {
        await this.selectValueCalenderIcon.click();
        expect(this.currentDateFromCalender).toBeVisible();
    }

    async selectCurrentDateCalender() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.selectValueCalenderIcon.click();
        //await this.page.locator('//button[contains(@class,"active")]').click();
        //await new Promise(resolve => setTimeout(resolve, 3000));
        const todayDateCell = this.page.locator("//span[contains(@class, 'mat-calendar-body-cell-content') and contains(@class, 'mat-calendar-body-today')]");
        await expect(todayDateCell).toBeVisible({ timeout: 5000 }); 
        await todayDateCell.click();
    }

    async clickOnSave() {
        await this.savebtn.click();
        //await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async clickOnEditTransaction() {
        await this.editTransaction.click();
        //await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async clickOnEditJournalVoucher() {
        await this.editJournalVoucher.first().click();
    }

    async verifyValidatedCheckboxDisabled() {
        expect(this.validateCheckbox).toBeDisabled;
    }


    async verifyErrorPopupAlert(data: string) {
        await this.description.click();
        await this.page.keyboard.press('Tab');
        await new Promise(resolve => setTimeout(resolve, 3000));
        const actual = await this.errorpopup.textContent();
        expect(actual).toBe(data);
    }

    async verifyDebitCreditErrorPopupAlert(data: string) {
        const actual = await this.debitCreditErrorpopup.textContent();
        expect(actual).toBe(data);
    }

    async verifySectionIndicatingTotals() {
        const display = this.page.locator('//iris-composed-table-grid//mat-table[@id="pivot-grid-data"]');
        expect(display).toBeVisible();
    }

    async verifyGridSection() {
        expect(this.gridBalance).toBeVisible();
        expect(this.gridCurrency).toBeVisible();
        expect(this.gridTotalCredit).toBeVisible();
        expect(this.gridTotalDebit).toBeVisible();
    }

    async verifyCurrencyDebitCredit() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const currency = this.page.locator('//mat-header-cell[contains(@class,"debitTotal")]');
        const currency1 = this.page.locator('//mat-header-cell[contains(@class,"creditTotal")]');

        for (let index = 0; index < await currency.count() && currency1.count(); index++) {
            expect(await currency.nth(index).innerText() && await currency1.nth(index).innerText()).toBeTruthy();
        }
    }

    async verifySearchBar() {
        expect(this.searchBar).toBeVisible();
    }

    async enterinSearchbar(data: string) {
        await this.searchBar.fill(data);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const actual = await this.label.textContent();
        expect(actual).toBe(data);
    }

    async verifyFirstScections() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.voucherType).toBeVisible();
        expect(this.VoucherDate).toBeVisible();
        expect(this.voucherRef).toBeVisible();
        expect(this.voucherNumber).toBeVisible();
        expect(this.validationDate).toBeVisible();
        expect(this.validated).toBeVisible();
    }

    async verifyVoucherDateMandate() {
        expect(this.voucherDateMandate).toBeVisible();
    }

    async verifyCurrentVoucherDateFromCalender() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.voucherDatecalenderIcon.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.currentDateFromCalender).toBeVisible();
    }

    async verifyVoucherTypeMandate() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.voucherTypeMandate).toBeVisible();
    }

}