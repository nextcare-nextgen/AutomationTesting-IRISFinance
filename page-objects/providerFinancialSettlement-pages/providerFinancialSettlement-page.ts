import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ProviderFinancialSettlementPage {

    readonly page: Page;
    readonly searchIcon: Locator;
    readonly financials: Locator;
    readonly providersFinancialSettlement: Locator;
    readonly payerRadio: Locator;
    readonly reinsurerRadio: Locator;
    readonly reinsurerInput: Locator;
    readonly reinsurerOptions: Locator;
    readonly searchBtn: Locator;
    readonly requiredErrors: Locator;
    readonly bankAccountDropdown: Locator;
    readonly bankAccountOptions: Locator;
    readonly payerDropdown: Locator;
    readonly upToDueDateInput: Locator;
    readonly searchResultsContainer: Locator;
    readonly glAccountDescLink: Locator;
    readonly glAccounthashLink: Locator;
    readonly providerTypeSearchField: Locator;
    readonly validErrorMessageVerification: Locator;
    readonly voucherSearchTitle: Locator;
    readonly accountNumber: Locator;
    readonly accountName: Locator;
    readonly voucherSearchButton: Locator;
    readonly voucherSearchSelectAccountName: Locator;
    readonly voucherSearchSelectAccountNumber: Locator;
    readonly selectedAccountName: Locator;
    readonly selectedAccountNumber: Locator;
    readonly currencyDropdown: Locator;
    readonly currencyDropdownOptions: Locator;
    readonly collectedDropdown: Locator;
    readonly collectedDropdownOptions: Locator;
    readonly currencyField: Locator;
    readonly minimumBalanceField: Locator;
    readonly currentBalanceField: Locator;
    readonly payerField: Locator;
    readonly bankAccountField: Locator;
    readonly upToDueDateField: Locator;
    readonly dueDateColumnCells: Locator;
    readonly orderResultsByPOID: Locator;
    readonly poIdCells: Locator;
    readonly orderResultsByPOIDRadio: Locator;
    readonly searchButton: Locator;
    readonly exportUsingJobInactive: Locator;
    readonly exportToExcelLocator: Locator;
    readonly enterFromPOIDSelector: Locator;
    readonly enterToPOIDSelector: Locator;
    readonly partnerBankSelect: Locator;
    readonly partnerBankOptions: Locator;
    readonly partnerBankSelectedValue: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.providersFinancialSettlement = page.locator("//a[contains(., \"Provider's Financial Settlement\")]"); 
        this.payerRadio = page.locator("//mat-radio-button[@value='Payer']");
        this.reinsurerRadio = page.locator("//mat-radio-button[@value='Reinsurer']");
        this.reinsurerInput = page.locator("//mat-label[text()='Reinsurer']/ancestor::mat-form-field//input");
        this.reinsurerOptions = page.locator(".cdk-overlay-pane mat-option");
        this.searchBtn = page.locator("//button[@id='search-settlement']");
        this.requiredErrors = page.locator("//mat-error[contains(text(),'This field is required')]");
        this.payerDropdown = page.locator("//mat-label[contains(text(),'Payer')]/ancestor::mat-form-field//input");
        this.bankAccountDropdown = page.locator("//mat-label[contains(text(),'Bank Account')]/ancestor::mat-form-field//mat-select");
        this.bankAccountOptions = page.locator(".cdk-overlay-pane mat-option");
        this.upToDueDateInput = page.locator("//input[@formcontrolname='toDueDate']");
        this.searchResultsContainer = page.locator('table.mat-table');
        this.glAccountDescLink = page.locator('a', { hasText: 'GL Account Desc' });
        this.glAccounthashLink = page.locator('a', { hasText: 'GL Account #' });
        this.providerTypeSearchField = page.locator("//iris-autocomplete[@id='providerTypes']");
        this.validErrorMessageVerification = page.locator("//div[@class='grid-no-data ng-star-inserted']");
        this.voucherSearchTitle = page.locator('mat-dialog-container h2', { hasText: 'Voucher Search' });
        this.accountNumber = page.locator("//input[@formcontrolname='accountNumber']");
        this.accountName = page.locator("//input[@formcontrolname='accountName']");
        this.voucherSearchButton = page.locator("//button[@title='Search']"); 
        this.voucherSearchSelectAccountName = page.locator("(//a[@class='ng-star-inserted'][normalize-space()='Select'])[10]");
        this.voucherSearchSelectAccountNumber = page.locator("//a[normalize-space()='Select']");
        this.selectedAccountName = page.locator('td.mat-column-accountName .td-content');
        this.selectedAccountNumber = page.locator('td.mat-column-accountNumber .td-content');
        this.currencyDropdown = page.locator("(//mat-label[normalize-space()='Currency']/ancestor::mat-form-field//input)[2]");
        this.currencyDropdownOptions = page.locator(".cdk-overlay-pane mat-option");
        this.collectedDropdown = page.locator("//mat-label[normalize-space()='Collected']/ancestor::mat-form-field");
        this.collectedDropdownOptions = page.locator(".cdk-overlay-pane mat-option");
        this.currencyField = page.locator("(//mat-label[normalize-space()='Currency']/ancestor::mat-form-field//input)[1]");
        this.minimumBalanceField = page.locator("//mat-label[normalize-space()='Minimum Balance']/ancestor::mat-form-field//input");
        this.currentBalanceField = page.locator("//mat-label[normalize-space()='Current Balance']/ancestor::mat-form-field//input");
        this.payerField = page.locator("//mat-label[normalize-space()='Payer']/ancestor::mat-form-field//input");
        this.bankAccountField = page.locator('#bankaccount');
        this.upToDueDateField = page.locator('#uptodate');
        this.dueDateColumnCells = page.locator("table tbody tr td.mat-column-dueDate");
        //this.orderResultsByPOID= page.locator("//label[@for='mat-radio-15-input']//div[@class='mat-radio-inner-circle']");
        this.searchButton = page.locator('#search-btn'); // update if needed
        this.orderResultsByPOID = page.locator('text=Order results by PO ID'); // update if needed
        this.poIdCells = page.locator('table.mat-table tbody tr td.mat-column-paymentOrderId');
        this.orderResultsByPOIDRadio = page.locator('mat-radio-button:has-text("PO ID")');
        this.exportUsingJobInactive = page.locator("//label[@for='mat-slide-toggle-4-input']//div[@class='mat-slide-toggle-bar']");
        this.exportToExcelLocator = page.locator("//button[@title='Export To Excel']");
        this.enterFromPOIDSelector = page.locator("//input[@formcontrolname='fromPoId']");
        this.enterToPOIDSelector = page.locator("//input[@formcontrolname='toPoId']");
        this.partnerBankSelect = page.locator("//mat-select[@formcontrolname='partnerBank']");
        this.partnerBankOptions = page.locator("//mat-option");
        this.partnerBankSelectedValue = page.locator("//mat-select[@formcontrolname='partnerBank']//span[contains(@class,'mat-select-value-text')]");
    }

    async searchAndClickFinancials() {  
        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await this.financials.click();
    }

    async clickOnProvidersFinancialSettlement() {  
        //await new Promise(resolve => setTimeout(resolve, 5000));
        await this.providersFinancialSettlement.scrollIntoViewIfNeeded();
        await this.providersFinancialSettlement.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
        await this.providersFinancialSettlement.click();
    }

    async toVerifyPayersAndReinsurerRadioButton() { 
        await new Promise(resolve => setTimeout(resolve, 10000)); 
        await expect(this.payerRadio).toBeVisible();
        await expect(this.reinsurerRadio).toBeVisible();
    }

    async verifyRadioButtonsAreMutuallyExclusive() {
        await this.payerRadio.click();
        await expect(this.payerRadio).toHaveAttribute('class', /mat-radio-checked/);
        await expect(this.reinsurerRadio).not.toHaveAttribute('class', /mat-radio-checked/);

        await this.reinsurerRadio.click();
        await expect(this.reinsurerRadio).toHaveAttribute('class', /mat-radio-checked/);
        await expect(this.payerRadio).not.toHaveAttribute('class', /mat-radio-checked/);
    }

    async clickOnPayersRadioButton() { 
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        await this.payerRadio.click();
    }

    async clickOnReinsurerRadioRadioButton() { 
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        await this.reinsurerRadio.click();
    }

    async verifyReinsurerDropdownValues() {
        await expect(this.reinsurerInput).toBeVisible();

        await this.reinsurerInput.click();
        await this.reinsurerInput.press("ArrowDown");
        await this.reinsurerOptions.first().waitFor({state: "visible",timeout: 5000});

        const optionCount = await this.reinsurerOptions.count();
        expect(optionCount).toBeGreaterThan(0);

        const texts = await this.reinsurerOptions.allTextContents();
        console.log("Reinsurer options:", texts);
    }

    async errorMessageWithoutFillingAnyField() {
        await this.requiredErrors.first().waitFor({state: "visible",timeout: 5000});

        const count = await this.requiredErrors.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            await expect(this.requiredErrors.nth(i)).toContainText("This field is required");
        }
        console.log(`Displayed ${count} required field error messages`);
    }

    async clickOnSearchButton() {
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        await this.searchBtn.click();
    }

    async notAbleToSelectBankAccountUntilPayerIsSelected() {
        await this.bankAccountDropdown.click();
        await expect(this.bankAccountOptions.first()).toBeVisible();
        const firstOption = this.bankAccountOptions.first();
        const optionText = (await firstOption.textContent())?.trim();
        await firstOption.click();
        const selectedText = await this.bankAccountDropdown.textContent();
        expect(selectedText).toContain("-- Select --");
        console.log("Verified: User cannot select any Bank Account until Payer is selected.");
    }

    async selectPayerOption(value: string) {
        await expect(this.payerDropdown).toBeVisible({ timeout: 10000 });
        await this.payerDropdown.click();
        await this.payerDropdown.fill("");  
        for (const char of value) {await this.payerDropdown.type(char, { delay: 200 }); }
        const option = this.page.locator(".cdk-overlay-pane mat-option", { hasText: value }).first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();
        console.log(`Payer "${value}" selected successfully.`);
    }

    async selectBankAccount(value: string) {
        await this.bankAccountDropdown.click();
        const option = this.bankAccountOptions.filter({ hasText: value }).first();
        //await option.waitFor({ state: "visible", timeout: 25000 });
        await expect(option).toBeVisible({ timeout: 90000 });
        await option.click();
        console.log(`Bank Account "${value}" selected successfully.`);
    }

    async selectUpTODueDate(value: string) {
        await expect(this.upToDueDateInput).toBeVisible({ timeout: 10000 });
        await this.upToDueDateInput.fill("");
        await this.upToDueDateInput.fill(value);
        await expect(this.upToDueDateInput).toHaveValue(value);
        console.log(`Up To Due Date "${value}" selected successfully.`);
    }

    async validateDetailsAfterSearch() {
        const rows = this.searchResultsContainer.locator("tr.mat-row");
        await expect(rows.first()).toBeVisible({ timeout: 15000 });

        const rowCount = await rows.count();
        if (rowCount === 0) {
            throw new Error("Expected at least 1 result row, but got 0.");
        }
        console.log(`Results list loaded and validated. Rows found: ${rowCount}`);
    }

    async verifyGLAccountDescHyperLink() {
        await expect(this.glAccountDescLink).toBeVisible();
        console.log('GL Account Desc hyperlink is visible.');
    }

    async clickOnGLAccountDescHyperLink() {
        await expect(this.glAccountDescLink).toBeVisible();
        console.log('GL Account Desc hyperlink is visible.');
        await this.glAccountDescLink.click();
    }

    async verifyGLAccounthashHyperLink() {
        await expect(this.glAccounthashLink).toBeVisible();
        console.log('GL Account Hash hyperlink is visible.');
    }

    async verifyProviderTypeSearchField() {
        await expect(this.providerTypeSearchField).toBeVisible();
        console.log('Provider Type Search field is visible.');
    }

    // async clickOnProviderTypeHyperLink() {
    //     await expect(this.providerTypeSearchField).toBeVisible();
    //     console.log('Provider Type Search field is visible.');
    // }

    async validErrorMessage() {
        await expect(this.validErrorMessageVerification).toBeVisible();
        console.log('Error Message available as No Records Found.');
    }

    async verifyVoucherSearchPopupDisplayed() {
        const voucherSearchTitle = this.page.locator('mat-dialog-container');
        await expect(voucherSearchTitle).toBeVisible();

        const title = voucherSearchTitle.locator('h2', { hasText: 'Voucher Search' });
        await expect(title).toBeVisible();
    }

    async addAccountNumber(value: string) {
        await expect(this.accountNumber).toBeVisible({ timeout: 10000 });
        await this.accountNumber.click();
        await this.accountNumber.fill(value); 
        console.log(`Entered Account Number: ${value}`);
    }

    async addAccountName(value: string) {
        await expect(this.accountNumber).toBeVisible({ timeout: 10000 });
        await this.accountName.click();
        await this.accountName.fill(value); 
        console.log(`Entered Account Name: ${value}`);
    }

    async clickOnVoucherSearchButton() {
        await this.voucherSearchButton.click();
        await expect(this.voucherSearchButton).toBeVisible();
        console.log('User Is able to search the value.');
    }

    async VoucherSearchSelectAccountName() {
        await this.voucherSearchSelectAccountName.click();
        await expect(this.voucherSearchSelectAccountName).toBeVisible();
        console.log('User Is able to select Account name for provider.');
    }

    async VoucherSearchSelectAccountNumber() {
        await this.voucherSearchSelectAccountNumber.click();
        await expect(this.voucherSearchSelectAccountNumber).toBeVisible();
        console.log('User Is able to select Account number for provider.');
    }

    async verifySelectedAccountNumberAndNameDisplayed() {
        await expect(this.selectedAccountName).toBeVisible({ timeout: 15000 });
        await expect(this.selectedAccountNumber).toBeVisible({ timeout: 15000 });

        const accountName = (await this.selectedAccountName.textContent())?.trim();
        const accountNumber = (await this.selectedAccountNumber.textContent())?.trim();

        expect(accountName).toBeTruthy();
        expect(accountNumber).toBeTruthy();

        console.log(`Selected Account Name: ${accountName}`);
        console.log(`Selected Account Number: ${accountNumber}`);
    }

    async verifyCurrencyDropdownValues() {
        await expect(this.currencyDropdown).toBeVisible({ timeout: 10000 });
        await this.currencyDropdown.click();

        await this.currencyDropdown.press("ArrowDown");
        await expect(this.currencyDropdownOptions.first()).toBeVisible({ timeout: 15000 });

        const optionCount = await this.currencyDropdownOptions.count();
        expect(optionCount).toBeGreaterThan(0);

        const currencyValues = await this.currencyDropdownOptions.allTextContents();
        console.log("Currency dropdown values:", currencyValues.map(v => v.trim()));
    }

    async verifyCollectedDropdownValues() {
        await expect(this.collectedDropdown).toBeVisible({ timeout: 10000 });
        await this.collectedDropdown.click();

        await this.collectedDropdown.press("ArrowDown");
        await expect(this.collectedDropdownOptions.first()).toBeVisible({ timeout: 15000 });

        const optionCount = await this.collectedDropdownOptions.count();
        expect(optionCount).toBeGreaterThan(0);

        const currencyValues = await this.collectedDropdownOptions.allTextContents();
        console.log("Currency dropdown values:", currencyValues.map(v => v.trim()));
    }

    async verifyCurrencyMinBalanceAndCurrentBalanceForSelectedPayer() {
        await expect(this.currencyField).toHaveValue(/.+/);
        await expect(this.minimumBalanceField).toHaveValue(/.+/);
        await expect(this.currentBalanceField).toHaveValue(/.+/);

        const currency = await this.currencyField.inputValue();
        const minimumBalance = await this.minimumBalanceField.inputValue();
        const currentBalance = await this.currentBalanceField.inputValue();

        expect(currency, 'Currency should be displayed').not.toBe('');
        expect(minimumBalance, 'Minimum Balance should be displayed').not.toBe('');
        expect(currentBalance, 'Current Balance should be displayed').not.toBe('');

        console.log(`Currency: ${currency}`);
        console.log(`Minimum Balance: ${minimumBalance}`);
        console.log(`Current Balance: ${currentBalance}`);
    }

    async verifyPayerBankAccountAndUpToDueDateAreDisplayed() {
        await expect(this.payerField).toHaveValue(/.+/);
        await expect(this.bankAccountField).toBeVisible({ timeout: 20000 });
        await expect(this.upToDueDateField).toBeVisible({ timeout: 20000 });

        const payer = await this.payerField.inputValue();

        const bankAccount = (await this.bankAccountField.locator('.mat-select-value-text').innerText()).trim();
        const upToDueDate = await this.upToDueDateField.inputValue();

        expect(payer).not.toBe('');
        expect(bankAccount).not.toBe('-- Select --');
        expect(bankAccount).not.toBe('');
        expect(upToDueDate).not.toBe('');

        console.log(`Payer: ${payer}`);
        console.log(`Bank Account: ${bankAccount}`);
        console.log(`Up to Due Date: ${upToDueDate}`);
    }

    private convertDateToNumber(date: string): number {
        const [day, month, year] = date.split('/');
        return new Date(+year, +month - 1, +day).getTime();
    }

    async orderResultsByDueDateAndSearch() {
        await this.searchBtn.click();      
        await expect(this.searchResultsContainer).toBeVisible({ timeout: 20000 });
    }

    async verifyResultsSortedByDueDate() {
        const dueDates = await this.dueDateColumnCells.allInnerTexts();

        const actual = dueDates.map(d => this.convertDateToNumber(d.trim()));
        const sorted = [...actual].sort((a, b) => a - b);

        expect(actual).toEqual(sorted);
    }

    async orderResultsByPOIDAndSearch() {
        await this.searchButton.click();      
        await this.orderResultsByPOID.check();
    }

    async verifyPOIDSortedAscending() {
        const poIdRadio = this.orderResultsByPOIDRadio.first();
    const poIdRadioInput = poIdRadio.locator('input[type="radio"]');

    await poIdRadio.click();
    await expect(poIdRadioInput).toBeChecked();

    await this.searchBtn.click();

    // ✅ simple & reliable wait
    await this.poIdCells.first().waitFor({ state: 'attached' });

    const poIdTexts = await this.poIdCells.allTextContents();
    const actualPOIDs = poIdTexts
        .map(t => t.trim())
        .filter(Boolean)
        .map(Number);

    const sortedPOIDs = [...actualPOIDs].sort((a, b) => a - b);
    expect(actualPOIDs).toEqual(sortedPOIDs);
    }

    async clickOnExportUsingJobInactive() {
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        await this.exportUsingJobInactive.check();
    }

    async exportToExcel() {
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        await this.exportToExcelLocator.click();
    }

    async enterFromPOID(value: string) {
        await expect(this.enterFromPOIDSelector).toBeVisible({ timeout: 50000 });
        await this.enterFromPOIDSelector.click();
        await this.enterFromPOIDSelector.fill(value); 
        console.log(`Entered PO ID Number: ${value}`);
    }

    async enterTOPOID(value: string) {
        await expect(this.enterToPOIDSelector).toBeVisible({ timeout: 50000 });
        await this.enterToPOIDSelector.click();
        await this.enterToPOIDSelector.fill(value); 
        console.log(`Entered TO PO ID Number: ${value}`);
    }

    async selectPartersBank(value: string) {
        await this.partnerBankSelect.click();
        await this.partnerBankOptions.filter({ hasText: value }).click();
        await expect(this.partnerBankSelectedValue).toHaveText(value);
    }
    
}
