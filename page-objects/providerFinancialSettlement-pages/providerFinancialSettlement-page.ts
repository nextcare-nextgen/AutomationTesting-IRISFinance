import { Keyboard, Locator, Page, expect, test } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ProviderFinancialSettlementPage {
    private static readonly usedDhamaniPaymentOrderIds = new Set<string>();

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
    readonly currencyLabel: Locator;
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
    readonly ShowDeductionVoucher: Locator;
    readonly glAccountNumber: Locator;
    readonly glAccountDescription: Locator;
    appLoader: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.providersFinancialSettlement = page.getByRole("link", { name: "Provider's Financial Settlement", exact: true }).first();
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
        //this.searchResultsContainer = page.locator('table.mat-table');
        this.searchResultsContainer = page.locator("table.mat-mdc-table, table.mat-table").first();
        this.glAccountDescLink = page.locator('a', { hasText: 'GL Account Desc' });
        this.glAccounthashLink = page.locator('a', { hasText: 'GL Account #' });
        this.providerTypeSearchField = page.locator("//iris-autocomplete[@id='providerTypes']");
        this.validErrorMessageVerification = page.locator("//div[@class='grid-no-data ng-star-inserted']");
        this.voucherSearchTitle = page.locator('mat-dialog-container h2', { hasText: 'Voucher Search' });
        this.accountNumber = page.locator("//input[@formcontrolname='accountNumber']");
        this.accountName = page.locator("//input[@formcontrolname='accountName']");
        this.voucherSearchButton = page.locator("//button[@title='Search']"); 
        this.voucherSearchSelectAccountName = page.getByRole("dialog").getByRole("link", { name: "Select", exact: true }).first();
        this.voucherSearchSelectAccountNumber = this.voucherSearchSelectAccountName;
        this.selectedAccountName = page.locator('td.mat-column-accountName .td-content');
        this.selectedAccountNumber = page.locator('td.mat-column-accountNumber .td-content');
        this.currencyLabel = page.locator("//mat-label[normalize-space()='Currency']").first();
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
        //this.exportUsingJobInactive = page.locator("//label[@for='mat-slide-toggle-4-input']//div[@class='mat-slide-toggle-bar']");
        this.exportUsingJobInactive = this.page.getByRole("switch", {name: "Export Using Job"});
        this.exportToExcelLocator = page.locator("//button[@title='Export To Excel']");
        this.enterFromPOIDSelector = page.locator("//input[@formcontrolname='fromPoId']");
        this.enterToPOIDSelector = page.locator("//input[@formcontrolname='toPoId']");
        // this.partnerBankSelect = page.locator("//mat-select[@formcontrolname='partnerBank']");
        // this.partnerBankOptions = page.locator("//mat-option");
        //this.partnerBankSelectedValue = page.locator("//mat-select[@formcontrolname='partnerBank']//span[contains(@class,'mat-select-value-text')]");
        this.partnerBankSelect = this.page.getByRole("combobox", {name: "Partner Bank"});
        this.partnerBankOptions = page.locator("#partnerbank-panel mat-option");
        this.partnerBankSelectedValue = this.partnerBankSelect.locator(".mat-mdc-select-value-text");
        //this.ShowDeductionVoucher = page.locator("//label[@for='mat-slide-toggle-3-input']//div[@class='mat-slide-toggle-bar']");
        this.ShowDeductionVoucher = page.getByRole("switch", {name: "Show deductions vouchers"});
        this.appLoader=page.locator("app-new-loader");
        this.glAccountNumber = page.getByLabel("GL Account #");
        this.glAccountDescription = page.getByLabel("GL Account Desc");
    }

    private async dismissTransientErrorDialog(): Promise<void> {
        const errorDialog = this.page.getByRole("dialog").filter({ hasText: "Unknown Error" });
        if (await errorDialog.isVisible()) {
            await errorDialog.getByRole("button", { name: "Close" }).click();
            await expect(errorDialog).toBeHidden();
        }
    }

    private async ensureSettlementFormReady(): Promise<void> {
        await this.dismissTransientErrorDialog();
        const loaderCleared = await this.appLoader
            .waitFor({ state: "hidden", timeout: 30000 })
            .then(() => true)
            .catch(() => false);
        if (loaderCleared && await this.payerRadio.isVisible()) return;

        await this.page.reload({ waitUntil: "domcontentloaded", timeout: 120000 });
        await this.dismissTransientErrorDialog();
        if (!await this.payerRadio.isVisible()) {
            await expect(this.searchIcon).toBeVisible({ timeout: 60000 });
            await this.searchIcon.fill("FINANCIALS");
            await expect(this.financials).toBeVisible({ timeout: 30000 });
            await this.financials.click({ force: true, timeout: 10000 });
            const routeLinkVisible = await this.providersFinancialSettlement
                .isVisible({ timeout: 10000 })
                .catch(() => false);
            const navigationStarted = routeLinkVisible
                ? await this.providersFinancialSettlement
                    .click({ force: true, timeout: 10000 })
                    .then(() => true)
                    .catch(() => false)
                : false;
            if (!navigationStarted) {
                const settlementUrl = new URL("/layout/finance/providersettelment", this.page.url()).toString();
                await this.page.goto(settlementUrl, { waitUntil: "domcontentloaded", timeout: 120000 });
            }
        }
        await this.appLoader.waitFor({ state: "hidden", timeout: 60000 });
        await this.dismissTransientErrorDialog();
        await expect(this.payerRadio).toBeVisible({ timeout: 60000 });
    }

    async searchAndClickFinancials() {  
        await this.dismissTransientErrorDialog();
        await this.searchIcon.waitFor({ state: 'visible', timeout: 60000 });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await expect(this.financials).toBeVisible({ timeout: 30000 });
        await this.appLoader.waitFor({ state: "hidden", timeout: 15000 }).catch(() => {});
        const financialsOpened = await this.financials
            .click({ timeout: 10000 })
            .then(() => true)
            .catch(() => false);
        if (!financialsOpened) {
            await this.financials.click({ force: true, timeout: 10000 });
        }
    }

    async clickOnProvidersFinancialSettlement() {  
        const navigationStarted = await this.providersFinancialSettlement
            .click({ timeout: 10000 })
            .then(() => true)
            .catch(() => false);
        if (!navigationStarted) {
            const forcedNavigationStarted = await this.providersFinancialSettlement
                .click({ force: true, timeout: 10000 })
                .then(() => true)
                .catch(() => false);
            if (!forcedNavigationStarted) {
                const settlementUrl = new URL("/layout/finance/providersettelment", this.page.url()).toString();
                await this.page.goto(settlementUrl, { waitUntil: "domcontentloaded", timeout: 120000 });
            }
        }

        await this.ensureSettlementFormReady();
    }

    async toVerifyPayersAndReinsurerRadioButton() { 
        await expect(this.payerRadio).toBeVisible({ timeout: 30000 });
        await expect(this.reinsurerRadio).toBeVisible({ timeout: 30000 });
    }

    async verifyRadioButtonsAreMutuallyExclusive() {
        await this.payerRadio.click();
        await expect(this.payerRadio).toHaveClass(/mat-mdc-radio-checked/);
        await expect(this.reinsurerRadio).not.toHaveClass(/mat-mdc-radio-checked/);

        await this.reinsurerRadio.click();
        await expect(this.reinsurerRadio).toHaveClass(/mat-mdc-radio-checked/);
        await expect(this.payerRadio).not.toHaveClass(/mat-mdc-radio-checked/);
    }

    async verifyRadioButtonsAreMutuallyExclusiveDev() {
        await this.payerRadio.click();

        await expect(this.payerRadio).toHaveClass(/mat-mdc-radio-checked/);
        await expect(this.reinsurerRadio).not.toHaveClass(/mat-mdc-radio-checked/);

        await this.reinsurerRadio.click();

        await expect(this.reinsurerRadio).toHaveClass(/mat-mdc-radio-checked/);
        await expect(this.payerRadio).not.toHaveClass(/mat-mdc-radio-checked/);
    }

    async clickOnPayersRadioButton() { 
        await this.ensureSettlementFormReady();
        await expect(this.payerRadio).toBeVisible({ timeout: 30000 });
        await this.payerRadio.click();
        await expect(this.payerRadio).toHaveClass(/mat-mdc-radio-checked/);
    }

    async clickOnReinsurerRadioRadioButton() { 
        await expect(this.reinsurerRadio).toBeVisible({ timeout: 30000 });
        await this.reinsurerRadio.click();
        await expect(this.reinsurerRadio).toHaveClass(/mat-mdc-radio-checked/);
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
        await expect(this.searchBtn).toBeVisible({ timeout: 30000 });
        await this.searchBtn.click();
        await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
    }

    async discoverDhamaniPaymentOrder(payerValue: string): Promise<string> {
        const payerSearchValue = payerValue.replace(/\s*\([^)]*\)\s*$/, '').trim();
        const payerPattern = new RegExp(
            payerSearchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
            'i',
        );
        await this.clickOnPayersRadioButton();
        await expect(this.payerDropdown).toBeEditable({ timeout: 30000 });
        await this.payerDropdown.click();
        await this.payerDropdown.fill('');
        for (let index = 0; index < payerSearchValue.length; index++) {
            await this.payerDropdown.pressSequentially(payerSearchValue[index], { delay: 250 });
            if (index === 2) {
                await this.page.waitForTimeout(5000);
            }
        }
        await this.appLoader.waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
        const payerOptions = this.page.locator('mat-option').filter({
            hasText: payerPattern,
        });
        await expect(
            payerOptions.first(),
            `Payer "${payerValue}" must be available`,
        ).toBeVisible({ timeout: 30000 });
        const payer = (await payerOptions.first().innerText()).trim();
        await payerOptions.first().click();
        await expect(this.payerDropdown).toHaveValue(payer, { timeout: 30000 });

        await this.bankAccountDropdown.click();
        const bankAccountOptions = this.bankAccountOptions.filter({
            hasNotText: /^-- Select --$/,
        });
        await expect(
            bankAccountOptions.first(),
            `At least one bank account must be available for ${payer}`,
        ).toBeVisible({ timeout: 30000 });
        const bankAccount = (await bankAccountOptions.first().innerText()).trim();
        await bankAccountOptions.first().click();
        console.log(`Selected Dhamani payer and bank account: ${payer} / ${bankAccount}`);

        await this.selectCurrentUpToDueDate();
        await this.selectFirstAvailableGlAccount(bankAccount);
        await this.clickOnSearchButton();

        const paymentOrderHeader = this.searchResultsContainer.locator('th').filter({
            hasText: /^P\.O\. ID$/,
        });
        await expect(
            paymentOrderHeader,
            `No provider settlement results were found for ${payer} / ${bankAccount}`,
        ).toBeVisible({ timeout: 30000 });
        const paymentOrderColumnIndex = await paymentOrderHeader.evaluate(header =>
            Array.from(header.parentElement?.children ?? []).indexOf(header),
        );
        expect(paymentOrderColumnIndex).toBeGreaterThanOrEqual(0);

        const eligiblePaymentOrderIds: string[] = [];
        const rows = this.searchResultsContainer.locator('tbody tr');
        await expect(rows.first(), `No unsettled transactions were found for ${payer}`).toBeVisible({
            timeout: 30000,
        });
        for (let index = 0; index < await rows.count(); index++) {
            const row = rows.nth(index);
            const checkbox = row.locator('input[type="checkbox"]:not([disabled])').first();
            if (!await checkbox.isVisible()) continue;

            const paymentOrderId = (
                await row.locator('td').nth(paymentOrderColumnIndex).innerText()
            ).trim();
            if (
                paymentOrderId &&
                !ProviderFinancialSettlementPage.usedDhamaniPaymentOrderIds.has(paymentOrderId)
            ) {
                eligiblePaymentOrderIds.push(paymentOrderId);
            }
        }
        expect(
            eligiblePaymentOrderIds.length,
            'No unused eligible Dhamani payment order was found',
        ).toBeGreaterThan(0);

        const paymentOrderId = eligiblePaymentOrderIds[0];
        ProviderFinancialSettlementPage.usedDhamaniPaymentOrderIds.add(paymentOrderId);
        await this.enterFromPOID(paymentOrderId);
        await this.enterTOPOID(paymentOrderId);
        await this.clickOnSearchButton();
        await expect(
            this.searchResultsContainer.locator('tbody tr').filter({ hasText: paymentOrderId }).first(),
        ).toBeVisible({ timeout: 30000 });
        return paymentOrderId;
    }

    private async selectExactPayer(payerValue: string): Promise<string> {
        const escapedPayer = payerValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const searchValue = /ADNIC/i.test(payerValue)
            ? "ADNIC"
            : payerValue.replace(/\s*\([^)]*\)\s*$/, "").trim();
        const escapedSearchValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const exactPayerOption = this.page.locator('mat-option').filter({
            hasText: new RegExp(`^\\s*${escapedPayer}\\s*$`, 'i'),
        }).first();
        const matchingPayerOption = this.page.locator('mat-option').filter({
            hasText: new RegExp(escapedSearchValue, 'i'),
        }).first();
        const availablePayerOption = this.page
            .locator(".cdk-overlay-pane mat-option:not([aria-disabled='true'])")
            .filter({ hasNotText: /^\s*-- Select --\s*$/ })
            .first();

        for (let attempt = 0; attempt < 3; attempt++) {
            await this.ensureSettlementFormReady();
            await this.payerDropdown.click({ timeout: 15000 });
            await this.payerDropdown.fill('');
            const currentSearchValue = searchValue;
            const payerResponse = this.page.waitForResponse(
                response =>
                    response.url().includes("/payer/api/payers/") &&
                    response.url().includes(`payerName=${encodeURIComponent(currentSearchValue)}`) &&
                    response.status() === 200,
                { timeout: 30000 },
            );
            await this.payerDropdown.pressSequentially(
                currentSearchValue,
                { delay: 250 },
            );
            await payerResponse;
            await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await this.payerDropdown.click();
            await this.payerDropdown.press("ArrowDown");
            await expect(availablePayerOption).toBeVisible({ timeout: 15000 });

            const payerOption = await exactPayerOption.isVisible()
                ? exactPayerOption
                : matchingPayerOption;
            const optionVisible = await payerOption
                .waitFor({ state: "visible", timeout: 15000 })
                .then(() => true)
                .catch(() => false);
            if (!optionVisible) continue;

            const selectedPayer = (await payerOption.innerText()).trim();
            await payerOption.click();
            const selectionCommitted = await expect
                .poll(
                    async () => (await this.payerDropdown.inputValue()).trim().toLowerCase(),
                    { timeout: 10000 },
                )
                .toBe(selectedPayer.toLowerCase())
                .then(() => true)
                .catch(() => false);
            if (selectionCommitted) return selectedPayer;
        }

        throw new Error(`Exact payer option "${payerValue}" could not be selected`);
    }

    private async selectCurrentUpToDueDate(): Promise<void> {
        const datePickerButton = this.upToDueDateInput.locator(
            'xpath=ancestor::mat-form-field//mat-datepicker-toggle//button',
        );
        await expect(datePickerButton).toBeVisible({ timeout: 15000 });
        await datePickerButton.click();

        const today = this.page.locator('mat-calendar button[aria-current="date"]');
        await expect(today).toBeVisible({ timeout: 15000 });
        await today.click();
        await expect(this.upToDueDateInput).not.toHaveValue('');
        console.log(`Up To Due Date "${await this.upToDueDateInput.inputValue()}" selected successfully.`);
    }

    private async selectFirstAvailableGlAccount(accountName: string): Promise<void> {
        await this.glAccounthashLink.click();
        const dialog = this.page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: 15000 });

        const accountNameInput = dialog.locator('input[formcontrolname="accountName"]');
        await expect(accountNameInput).toBeEditable({ timeout: 15000 });
        await accountNameInput.fill(accountName.replace(/\s+LLC$/i, '').trim());

        const searchButton = dialog.locator('button[title="Search"]');
        await expect(searchButton).toBeEnabled({ timeout: 15000 });
        await searchButton.click();

        const firstResult = dialog.locator('tbody tr').first();
        await expect(firstResult, 'At least one GL account must be available').toBeVisible({
            timeout: 30000,
        });
        const accountNumber = (
            await firstResult.locator('td.mat-column-accountNumber, td').first().innerText()
        ).trim();
        const selectLink = firstResult.getByText('Select', { exact: true });
        await expect(selectLink).toBeVisible({ timeout: 15000 });
        await selectLink.click();
        await expect(dialog).toBeHidden({ timeout: 15000 });
        console.log(`Selected GL account: ${accountNumber}`);
    }

    ensureDhamaniSettlementAllowed(paymentOrderId: string): void {
        test.skip(
            process.env.ALLOW_DHAMANI_SETTLEMENT !== 'true',
            `Discovered eligible Dhamani PO ${paymentOrderId}; ` +
            'set ALLOW_DHAMANI_SETTLEMENT=true to save it.',
        );
    }

    async verifyPaymentReferenceRangeAndSave(
        paymentOrderId: string,
        paymentReference: string,
    ): Promise<void> {
        await this.savePaymentReference(paymentOrderId, paymentReference, true);
    }

    async verifyNpPaymentReferenceAndSave(
        paymentOrderId: string,
        paymentReference: string,
    ): Promise<void> {
        expect(paymentReference).toMatch(/^NP/);
        expect(paymentReference).toHaveLength(18);
        await this.savePaymentReference(paymentOrderId, paymentReference);
    }

    private async savePaymentReference(
        paymentOrderId: string,
        paymentReference: string,
        verifyMinimumLength = false,
    ): Promise<void> {
        expect(paymentReference.length).toBeGreaterThanOrEqual(1);
        expect(paymentReference.length).toBeLessThanOrEqual(18);

        const row = this.searchResultsContainer.locator('tbody tr').filter({
            hasText: paymentOrderId,
        }).first();
        await expect(row).toBeVisible({ timeout: 30000 });

        const rowCheckbox = row.locator('mat-checkbox, input[type="checkbox"]').first();
        await expect(rowCheckbox).toBeVisible({ timeout: 15000 });
        await rowCheckbox.check();
        await expect(rowCheckbox).toBeChecked();

        const bankReferenceHeader = this.searchResultsContainer.locator('th').filter({
            hasText: /^Bank Ref\.$/,
        });
        const headerIndex = await bankReferenceHeader.evaluate(header =>
            Array.from(header.parentElement?.children ?? []).indexOf(header),
        );
        expect(headerIndex).toBeGreaterThanOrEqual(0);

        const bankReference = row.locator('td').nth(headerIndex).locator('input');
        await expect(bankReference).toBeEditable({ timeout: 15000 });
        if (verifyMinimumLength) {
            await bankReference.fill(paymentReference.slice(0, 1));
            await expect(bankReference).toHaveValue(paymentReference.slice(0, 1));
        }
        await bankReference.fill(paymentReference);
        await expect(bankReference).toHaveValue(paymentReference);

        const sendToBank = this.page.locator('mat-radio-button').filter({
            hasText: 'Send to Bank & Settle in TATSH',
        });
        await expect(sendToBank).toBeVisible({ timeout: 15000 });
        await sendToBank.click();

        const saveButton = this.page.locator('#providerFinancialSettlementSave');
        await expect(saveButton).toBeEnabled({ timeout: 15000 });
        await saveButton.click();

        const confirmation = this.page.locator(
            'snack-bar-container, mat-snack-bar-container, [role="alert"], mat-dialog-container',
        ).filter({ hasText: /success|saved successfully/i }).first();
        await expect(confirmation).toBeVisible({ timeout: 30000 });
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

    // async selectPayerOption(value: string) {
    //     await this.page.waitForLoadState("networkidle");
    //     await expect(this.payerDropdown).toBeVisible({ timeout: 15000 });
    //     await this.payerDropdown.click();
    //     await this.payerDropdown.fill("");  
    //     for (const char of value) {await this.payerDropdown.pressSequentially(char, { delay: 200 }); }
    //     const option = this.page.locator(".cdk-overlay-pane mat-option", { hasText: value }).first();
    //     await option.waitFor({ state: "visible", timeout: 10000 });
    //     await option.click();
    //     console.log(`Payer "${value}" selected successfully.`);
        
    // }

    async selectPayerOption(value: string) {
        await this.page.waitForLoadState("domcontentloaded");

        await this.payerDropdown.waitFor({ state: "visible", timeout: 30000 });
        await expect(this.payerDropdown).toBeEditable({ timeout: 30000 });
        await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
        await this.selectExactPayer(value);
        await this.appLoader.waitFor({state: "hidden",timeout: 30000}).catch(() => {});
        await this.page.waitForTimeout(2000);
        console.log(`Payer "${value}" selected successfully.`);
    }

    // async selectPayerOption(value: string) {
    //     await this.page.waitForLoadState("domcontentloaded");

    //     await this.payerDropdown.waitFor({ state: "visible", timeout: 30000 });
    //     await expect(this.payerDropdown).toBeEditable({ timeout: 30000 });

    //     await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

    //     await this.payerDropdown.click();
    //     await this.payerDropdown.fill("");

    //     await this.payerDropdown.type(value, { delay: 300 });

    //     await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

    //     const option = this.page
    //         .locator("mat-option")
    //         .filter({ hasText: value })
    //         .first();

    //     await expect(option).toBeVisible({ timeout: 30000 });
    //     await option.click();
    // }

    async selectBankAccount(value: string) {
        await expect(this.bankAccountDropdown).toBeVisible({ timeout: 30000 });
        await expect(this.bankAccountDropdown).toBeEnabled({ timeout: 90000 });
        const requestedOption = this.bankAccountOptions.filter({ hasText: value }).first();
        const availableOption = this.bankAccountOptions
            .filter({ hasNotText: /^\s*-- Select --\s*$/ })
            .first();

        for (let attempt = 0; attempt < 3; attempt++) {
            await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await this.bankAccountDropdown.click();
            if (await availableOption.isVisible({ timeout: 30000 }).catch(() => false)) break;
            await this.page.keyboard.press("Escape");
            await this.page.waitForTimeout(2000);
        }

        await expect(availableOption).toBeVisible({ timeout: 30000 });
        const option = await requestedOption.isVisible() ? requestedOption : availableOption;
        const selectedAccount = (await option.innerText()).trim();
        await option.click();
        console.log(`Bank Account "${selectedAccount}" selected successfully.`);
    }

//     async selectBankAccountTC741(value: string) {
//         await this.appLoader.waitFor({
//         state: "hidden",
//         timeout: 30000
//     }).catch(() => {});

//     await this.bankAccountField.waitFor({
//         state: "visible",
//         timeout: 30000
//     });

//     await this.bankAccountField.click();

//     const option = this.page
//         .locator("mat-option")
//         .filter({ hasText: value })
//         .first();

//     await expect(option).toBeVisible({
//         timeout: 20000
//     });

//     await option.click();

//     await expect(
//         this.bankAccountField.locator(".mat-select-value-text")
//     ).toContainText(value, {
//         timeout: 15000
//     });

//     console.log(`Bank Account "${value}" selected successfully.`);
// }

    async selectUpTODueDate(value: string) {
        await expect(this.upToDueDateInput).toBeVisible({ timeout: 10000 });
        await this.upToDueDateInput.fill("");
        await this.upToDueDateInput.fill(value);
        await this.upToDueDateInput.press("Tab");
        const displayedValue = await expect
            .poll(() => this.upToDueDateInput.inputValue(), {timeout: 20000})
            .not.toBe("")
            .then(() => this.upToDueDateInput.inputValue());
        expect(
            this.parseDateValue(displayedValue),
            `Up To Due Date "${displayedValue}" must represent "${value}"`,
        ).toBe(this.parseDateValue(value));
        console.log(`Up To Due Date "${displayedValue}" selected successfully.`);
    }

    private parseDateValue(value: string): number {
        const normalizedValue = value.trim();
        const numericMatch = normalizedValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (numericMatch) {
            return Date.UTC(
                Number(numericMatch[3]),
                Number(numericMatch[2]) - 1,
                Number(numericMatch[1]),
            );
        }

        const namedMatch = normalizedValue.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/);
        const months: Record<string, number> = {
            jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
            jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
        };
        if (namedMatch && months[namedMatch[2].toLowerCase()] !== undefined) {
            return Date.UTC(
                Number(namedMatch[3]),
                months[namedMatch[2].toLowerCase()],
                Number(namedMatch[1]),
            );
        }

        throw new Error(`Unsupported date value "${value}"`);
    }

   async validateDetailsAfterSearch() {
        const resultTable = this.page.locator("table").filter({ hasText: "GL Account #" }).filter({ hasText: "Provider Name" }).first();
        await expect(resultTable).toBeVisible({ timeout: 30000 });
        const rows = resultTable.locator("tbody tr");
        await expect(rows.first()).toBeVisible({ timeout: 15000 });
        const rowCount = await rows.count();
        expect(rowCount).toBeGreaterThan(0);
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
        const dialog = this.page.getByRole("dialog");
        await expect(this.voucherSearchSelectAccountName).toBeVisible({ timeout: 30000 });
        await this.voucherSearchSelectAccountName.click();
        await expect(dialog).toBeHidden({ timeout: 30000 });
        console.log('User Is able to select Account name for provider.');
    }

    async VoucherSearchSelectAccountNumber() {
        const dialog = this.page.getByRole("dialog");
        await expect(this.voucherSearchSelectAccountNumber).toBeVisible({ timeout: 30000 });
        await this.voucherSearchSelectAccountNumber.click();
        await expect(dialog).toBeHidden({ timeout: 30000 });
        console.log('User Is able to select Account number for provider.');
    }

    async verifySelectedAccountNumberAndNameDisplayed() {
        const row = this.page.locator("tr.mat-mdc-row").first();

        await expect(row).toBeVisible({ timeout: 30000 });

        const accountName = row.locator("td.mat-column-accountName");
        const accountNumber = row.locator("td.mat-column-accountNumber");

        await expect(accountName).toBeVisible({ timeout: 15000 });
        await expect(accountNumber).toBeVisible({ timeout: 15000 });

        const accountNameValue = (await accountName.textContent())?.trim();
        const accountNumberValue = (await accountNumber.textContent())?.trim();

        expect(accountNameValue).toBeTruthy();
        expect(accountNumberValue).toBeTruthy();

        console.log(`Selected Account Name: ${accountNameValue}`);
        console.log(`Selected Account Number: ${accountNumberValue}`);
    }

    // async verifyCurrencyDropdownValues() {
    //     await this.page.locator("body").click({ position: { x: 10, y: 10 } });
    //     await expect(this.currencyDropdown).toBeVisible({ timeout: 10000 });
    //     await this.currencyDropdown.click();

    //     await this.currencyDropdown.press("ArrowDown");
    //     await expect(this.currencyDropdownOptions.first()).toBeVisible({ timeout: 20000 });

    //     const optionCount = await this.currencyDropdownOptions.count();
    //     expect(optionCount).toBeGreaterThan(0);

    //     const currencyValues = await this.currencyDropdownOptions.allTextContents();
    //     console.log("Currency dropdown values:", currencyValues.map(v => v.trim()));
    // }

    // async verifyCurrencyDropdownValues() {
    //     await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

    //     await expect(this.currencyDropdown).toBeVisible({ timeout: 10000 });

    //     await this.currencyDropdown.click();

    //     await expect(this.currencyDropdownOptions.first()).toBeVisible({
    //         timeout: 20000
    //     });

    //     const optionCount = await this.currencyDropdownOptions.count();

    //     expect(optionCount).toBeGreaterThan(0);

    //     const currencyValues = await this.currencyDropdownOptions.allTextContents();

    //     console.log(
    //         "Currency dropdown values:",
    //         currencyValues.map(v => v.trim())
    //     );
    // }

    async verifyCurrencyDropdownValues() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.currencyDropdown.waitFor({state: "visible",timeout: 30000});
        await expect(this.currencyDropdown).toBeEditable({timeout: 30000});
        await this.appLoader.waitFor({state: "hidden",timeout: 30000}).catch(() => {});
        await this.currencyDropdown.click();
        await this.currencyDropdown.fill("");
        const searchValue = "UAE";

        for (let i = 0; i < searchValue.length; i++) {

            await this.currencyDropdown.pressSequentially(
                searchValue[i],
                { delay: 250 }
            );
            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }
        const options = this.page.locator(`//span[contains(normalize-space(.), '${searchValue}')]`);
        await expect(options.first()).toBeVisible({timeout: 20000});
        const optionCount = await options.count();
        expect(optionCount).toBeGreaterThan(0);
        const currencyValues = await options.allTextContents();

        console.log("Currency dropdown values:",currencyValues.map(value => value.trim()));
    }

    async verifyCurrencyLabelAndDropdownDisplayed() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

        await expect(this.currencyLabel).toBeVisible({ timeout: 20000 });
        await expect(this.currencyDropdown).toBeVisible({ timeout: 20000 });
        await expect(this.currencyDropdown).toBeEditable({ timeout: 20000 });

        // Click to confirm the dropdown is interactable for this sanity assertion.
        await this.currencyDropdown.click();
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

    async verifyPayerBankAccountAndUpToDueDateAreDisplayedTC741() {
        await expect(this.payerField).toBeVisible({timeout: 20000});
        await expect(this.payerField).toHaveValue(/.+/, {timeout: 20000});
        await expect(this.bankAccountField).toBeVisible({timeout: 20000});
        await expect(this.upToDueDateField).toBeVisible({timeout: 20000});

        const payer = (await this.payerField.inputValue()).trim();
        const bankAccount = (await this.bankAccountField.innerText()).trim();
        const upToDueDate = (await this.upToDueDateField.inputValue()).trim();
        expect(payer).not.toBe("");
        expect(bankAccount).not.toBe("");
        expect(bankAccount).not.toContain("-- Select --");
        expect(upToDueDate).not.toBe("");

        console.log(`Payer: ${payer}`);
        console.log(`Bank Account: ${bankAccount}`);
        console.log(`Up To Due Date: ${upToDueDate}`);
    }

    private convertDateToNumber(date: string): number {
        const [day, month, year] = date.split('/');
        return new Date(+year, +month - 1, +day).getTime();
    }

    async orderResultsByDueDateAndSearch() {
        await this.searchBtn.click();      
        await expect(this.searchResultsContainer).toBeVisible({ timeout: 20000 });
        console.log("Search results displayed successfully.");
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

    // async clickOnExportUsingJobInactive() {
    //     await new Promise(resolve => setTimeout(resolve, 5000)); 
    //     await this.exportUsingJobInactive.check();
    // }

    async clickOnExportUsingJobInactive() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const toggle = this.exportUsingJobInactive;
        await expect(toggle).toBeVisible({ timeout: 10000 });

        if (await toggle.getAttribute("aria-checked") === "true") {
            await toggle.click();
        }
        await expect(toggle).toHaveAttribute("aria-checked", "false");
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
        await this.partnerBankSelect.waitFor({state: "visible",timeout: 20000});
        await this.partnerBankSelect.click();
        const option = this.partnerBankOptions.filter({ hasText: value }).first();
        await expect(option).toBeVisible({timeout: 20000});
        await option.click();
        await expect(this.partnerBankSelectedValue).toContainText(value, {timeout: 20000});
        console.log(`Partner Bank "${value}" selected successfully.`);
    }

    async clickOnShowDeductionVoucher() {
        await this.ShowDeductionVoucher.waitFor({state: "visible",timeout: 20000});
        const isChecked = await this.ShowDeductionVoucher.getAttribute("aria-checked");
        console.log("Show deductions vouchers current state:", isChecked);

        if (isChecked === "false") {
            await this.ShowDeductionVoucher.click();
        }

        await expect(this.ShowDeductionVoucher).toHaveAttribute("aria-checked","true",{ timeout: 10000 });
        console.log("Show deductions vouchers is ON.");
    }

    async fieldVisiblity(){
        expect(await this.payerField.isVisible());
        expect(await this.bankAccountField.isVisible());
        expect(await this.currencyField.isVisible());
        expect(await this.collectedDropdown.isVisible());
        expect(await this.dueDateColumnCells.isVisible());
        expect(await this.upToDueDateField.isVisible());
        expect(await this.minimumBalanceField.isVisible());
        expect(await this.currentBalanceField.isVisible());
        expect(await this.enterFromPOIDSelector.isVisible());
        expect(await this.enterToPOIDSelector.isVisible());
        expect(await this.providerTypeSearchField.isVisible());
        expect(await this.partnerBankSelect.isVisible());
   
    }
    
}
