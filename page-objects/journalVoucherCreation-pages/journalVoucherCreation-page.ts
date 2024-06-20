import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class JournalVoucherCreationPage {

    readonly page: Page;
    readonly journalVoucherShortcut: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly FXRatesShorcut: Locator;
    readonly organizationShortcut: Locator;
    readonly policiesShortcut: Locator;
    readonly FTMshortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator;
    readonly orgShortcut: Locator;
    readonly journalVoucherLookupButton: Locator;
    readonly journalVoucherLookupsearchSection: Locator;
    readonly journalVoucherLookupGridSection: Locator;
    readonly addJournalVoucherLookupButton: Locator;
    readonly addJournalVoucherLookupTitle: Locator;
    readonly vouchertype: Locator;
    readonly addVoucherTransactionButton: Locator;
    readonly description: Locator;
    readonly addVoucherTransactionTitle: Locator;
    readonly accountName: Locator;
    readonly amount: Locator;
    readonly currency: Locator;
    readonly amountCV1: Locator;
    readonly amountCV2: Locator;
    readonly valueDate: Locator;
    readonly productLine: Locator;
    readonly manadteaccountName: Locator;
    readonly manadteamount: Locator;
    readonly manadtecurrency: Locator;
    readonly manadteamountCV1: Locator;
    readonly manadteamountCV2: Locator;
    readonly manadtevalueDate: Locator;
    readonly manadtedescription: Locator;

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
        this.journalVoucherLookupButton = page.locator('//a[@title="Journal Voucher Lookup"]');
        this.journalVoucherLookupsearchSection = page.locator('//iris-table-header//iris-composed-grid-search-criteria');
        this.journalVoucherLookupGridSection = page.locator('//section//mat-table[@id="JournalVoucherLookupList"]');
        this.addJournalVoucherLookupButton = page.locator('//button[@title="Add Journal Voucher Lookup"]');
        this.addJournalVoucherLookupTitle = page.locator('//h1[@title="Manage Journal Voucher"]');
        this.vouchertype = page.locator('//iris-voucher-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.addVoucherTransactionButton = page.locator('//button[@title="Add Voucher Transaction"]');
        this.description = page.locator('//input[@title="Description"]');
        this.addVoucherTransactionTitle = page.locator('//h2[@title="Add Voucher Transaction"]');
        this.accountName = page.locator('//iris-composed-dialog//iris-account-autocomplete//div//input[contains(@class,"input-element")]');
        this.amount = page.locator('//iris-composed-dialog//input[@title="Amount"]');
        this.currency = page.locator('//iris-composed-dialog//iris-currency-autocomplete//div//input[contains(@class,"input-element")]');
        this.amountCV1 = page.locator('//iris-composed-dialog//input[@title="Amount CV1"]');
        this.amountCV2 = page.locator('//iris-composed-dialog//input[@title="Amount CV2"]');
        this.valueDate = page.locator('//iris-composed-dialog//input[@title="Value Date"]');
        this.productLine = page.locator('//iris-composed-dialog//iris-cost-center-autocomplete//div//input[contains(@class,"input-element")]');
        this.manadteaccountName = page.locator('//iris-composed-dialog//iris-account-autocomplete//div//input[contains(@class,"input-element")]');
        this.manadteamount = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Amount"]');
        this.manadtecurrency = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::iris-currency-autocomplete//input[contains(@class,"input-element")]');
        this.manadteamountCV1 = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Amount CV1"]');
        this.manadteamountCV2 = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Amount CV2"]');
        this.manadtevalueDate = page.locator('//iris-composed-dialog//span[contains(@class,"required-marker")]//following::input[@title="Value Date"]');
        this.manadtedescription = page.locator('//input[@title="Description"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnJournalVoucherShrtcutsButton() {
        await this.journalVoucherShortcut.click();
        await new Promise(resolve => setTimeout(resolve, 8000));

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
        const actual = await this.journalVoucherLookupButton.textContent();
        expect(actual).toBe(data);
    }

    async clickOnJournalVoucherLookupButton() {
        await this.journalVoucherLookupButton.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.waitForSelector('.loader', { state: 'hidden' });
    }

    async clickOnAddLookupVoucherCreationButton() {
        await this.addJournalVoucherLookupButton.click();
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
        await expect(fisrtSection).toBeVisible();
        const secondSection = this.page.locator('//iris-composed-table-grid[contains(@class,"mb-4")]');
        await expect(secondSection).toBeVisible();
        const thirdSection = this.page.locator('//iris-composed-table-grid[contains(@class,"pivotGrid")]');
        await expect(thirdSection).toBeVisible();

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
        await this.addVoucherTransactionButton.click();
    }

    async verifyDescriptionInputBox() {
        await expect(this.description).toBeEditable();
    }

    async enterDescription(data: string) {
        await this.description.fill(data);
    }

    async VerifyAddVoucherTrancastionButtonEnable() {
        await expect(this.addVoucherTransactionButton).toBeEnabled();
    }

    async verifyAddVoucherTrancastionTitle(data: string) {
        const actual = await this.addVoucherTransactionTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyAddVoucherTransactionFields() {
        await expect(this.accountName).toBeVisible();
        await expect(this.amount).toBeVisible();
        await expect(this.currency).toBeVisible();
        await expect(this.amountCV1).toBeVisible();
        await expect(this.amountCV2).toBeVisible();
        await expect(this.valueDate).toBeVisible();
        await expect(this.description).toBeVisible();
        await expect(this.productLine).toBeVisible();
    }

    async verifyMandatoryAddVoucherTransactionFields() {
        await expect(this.manadteaccountName).toBeVisible();
        await expect(this.manadteamount).toBeVisible();
        await expect(this.manadtecurrency).toBeVisible();
        await expect(this.manadteamountCV1).toBeVisible();
        await expect(this.manadteamountCV2).toBeVisible();
        await expect(this.manadtevalueDate).toBeVisible();
        await expect(this.manadtedescription).toBeVisible();
        
    }


    async selectAccountName(data: string) {
        await this.accountName.click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]').click();
    }

}