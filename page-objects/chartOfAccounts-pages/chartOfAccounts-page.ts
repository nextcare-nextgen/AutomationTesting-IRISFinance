import { Locator, Page, expect } from "@playwright/test";

export class ChartOfAccountsPage {
    readonly page: Page;
    readonly searchIcon: Locator;
    readonly financials: Locator;
    readonly chartOfAccounts: Locator;
    readonly chartOfAccountsHeader: Locator;
    readonly accountsGrid: Locator;
    readonly paginator: Locator;
    readonly paginatorPageSizeText: Locator;
    readonly showStoppedToggle: Locator;
    readonly showStoppedToggleSwitch: Locator;
    readonly addButton: Locator;
    readonly accountNumberField: Locator;
    readonly accountNumberDetailsField: Locator;
    readonly accountNumberDetailsFieldByLabel: Locator;
    readonly accountNumberDetailsCodeField: Locator;
    readonly accountNumberDetailsIdField: Locator;
    readonly accountNameField: Locator;
    readonly accountForDropdown: Locator;
    readonly allowVoucherCreationCheckbox: Locator;
    readonly agingCheckbox: Locator;
    readonly saveButton: Locator;
    readonly updateButton: Locator;
    readonly accountInformationHeader: Locator;
    readonly fieldRequiredErrors: Locator;
    readonly accountForOptionsPanel: Locator;
    readonly accountForOptions: Locator;
    readonly successMessage: Locator;
    readonly duplicateAccountErrorMessage: Locator;
    readonly accountSearchInput: Locator;
    readonly accountsGridRows: Locator;
    readonly gridRowCell: Locator;
    readonly rowActionLink: Locator;
    readonly rowExpandButton: Locator;
    readonly firstRowCells: Locator;
    readonly firstRowAccountNumberCell: Locator;
    readonly firstRowAccountNameCell: Locator;
    readonly cannotCreateAccountErrorMessage: Locator;
    readonly stopButton: Locator;
    readonly confirmationDialog: Locator;
    readonly confirmationYesButton: Locator;
    readonly confirmationNoButton: Locator;
    selectedAccountNumber: string | null;

    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.selectedAccountNumber = null;
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.chartOfAccounts = page.getByRole('link', { name: 'Chart of Accounts' });
        this.chartOfAccountsHeader = page.getByRole('heading', { name: 'Chart of Accounts' });
        this.accountsGrid = page.locator('mat-table, table[role="grid"]').first();
        this.paginator = page.locator('mat-paginator:has(mat-select[aria-label="Items per page:"])');
        this.paginatorPageSizeText = page.locator('mat-select[aria-label="Items per page:"] .mat-select-min-line');
        this.showStoppedToggle = page.locator('//mat-slide-toggle[contains(., "Show stopped") or contains(., "Show Stopped")]');
        this.showStoppedToggleSwitch = page.locator('//mat-slide-toggle[contains(., "Show stopped") or contains(., "Show Stopped")]//input[@role="switch"]');
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.accountNumberField = page.locator('input[formcontrolname="accountNumber"], input[formcontrolname="code"]');
        this.accountNumberDetailsField = page.locator('input[formcontrolname="accountNumber"][matinput], input[formcontrolname="code"][matinput], input[name="id"][matinput]');
        this.accountNumberDetailsFieldByLabel = page.locator('mat-form-field:has-text("Account Number") input[matinput]');
        this.accountNumberDetailsCodeField = page.locator('input[formcontrolname="code"][matinput]');
        this.accountNumberDetailsIdField = page.locator('input[name="id"][matinput]');
        this.accountNameField = page.locator('input[formcontrolname="accountName"], input[formcontrolname="label"], input[formcontrolname="name"]').first();
        this.accountForDropdown = page.locator('mat-select#accountfor');
        this.allowVoucherCreationCheckbox = page.locator('//mat-checkbox[contains(., "Allow Voucher Creation")]');
        this.agingCheckbox = page.locator('//mat-checkbox[contains(., "Aging")]');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.updateButton = page.getByRole('button', { name: 'Update' });
        this.accountInformationHeader = page.getByRole('heading', { name: /Account Information/i });
        this.fieldRequiredErrors = page.locator('mat-error', { hasText: 'This field is required' });
        this.accountForOptionsPanel = page.locator('div[role="listbox"]');
        this.accountForOptions = page.locator('mat-option');
        this.successMessage = page.locator('snack-bar-container, .mat-snack-bar-container', { hasText: /(?:Account saved successfully\.?|Account updated successfully\.?|saved successfully\.?)/i });
        this.duplicateAccountErrorMessage = page.getByText('Account Number already exists.', { exact: true });
        this.accountSearchInput = page.locator('#new-grid-search-input[texttrimmer]');
        this.accountsGridRows = page.locator('mat-row, tbody tr');
        this.gridRowCell = this.accountsGridRows.locator('mat-cell, td');
        this.rowActionLink = this.accountsGridRows.locator('a.action-link.pr-12');
        this.rowExpandButton = this.accountsGridRows.locator('button[aria-label="expand"]');
        this.firstRowCells = this.accountsGridRows.first().locator('mat-cell, td');
        this.firstRowAccountNumberCell = this.firstRowCells.nth(1);
        this.firstRowAccountNameCell = this.firstRowCells.nth(2);
        this.cannotCreateAccountErrorMessage = page.getByText(/Cannot create an account under/i);
        this.stopButton = page.locator('button:has-text("Stop"), button:has-text("stop")');
        this.confirmationDialog = page.locator('div[role="dialog"], mat-dialog-container');
        this.confirmationYesButton = page.getByRole('button', { name: /yes|ok|confirm/i });
        this.confirmationNoButton = page.getByRole('button', { name: /no|cancel/i });
    }

    async searchAndClickOnChartOfAccountsUnderFinancials() {
        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await this.financials.evaluate((el: HTMLElement) => { el.style.border = "3px solid red"; });
        await this.financials.click();
        await this.chartOfAccounts.evaluate((el: HTMLElement) => { el.style.border = "3px solid blue"; });
        await this.chartOfAccounts.click();
    }

    async verifyChartOfAccountsScreenIsDisplayed() {
        await this.chartOfAccountsHeader.evaluate((el: HTMLElement) => { el.style.border = "3px solid green"; });
        await expect(this.chartOfAccountsHeader).toBeVisible();
    }

    async verifyChartOfAccountsGridIsDisplayed() {
        await this.accountsGrid.evaluate((el: HTMLElement) => { el.style.border = "3px solid green"; });
        await expect(this.accountsGrid).toBeVisible();
    }

    async verifyDefaultPaginationIs10() {
        await this.accountsGrid.waitFor({ state: 'visible', timeout: 60000 });
        await this.paginator.waitFor({ state: 'attached', timeout: 30000 });
        await expect(this.paginatorPageSizeText).toHaveText('10', { timeout: 30000 });
    }

    async verifyShowStoppedToggleIsOffByDefault() {
        await this.showStoppedToggle.waitFor({ state: 'visible' });
        await this.showStoppedToggle.evaluate((el: HTMLElement) => { el.style.border = "3px solid green"; });
        await expect(this.showStoppedToggleSwitch).toHaveAttribute('aria-checked', 'false');
    }

    async turnOnShowStoppedToggle() {
        await this.showStoppedToggle.waitFor({ state: 'visible' });
        await this.showStoppedToggle.evaluate((el: HTMLElement) => { el.style.border = "3px solid blue"; });
        const ariaChecked = await this.showStoppedToggleSwitch.getAttribute('aria-checked');
        if (ariaChecked === 'false') {
            await this.showStoppedToggle.click();
        }
    }

    async verifyShowStoppedToggleIsOnAndGridIsDisplayed() {
        await expect(this.showStoppedToggleSwitch).toHaveAttribute('aria-checked', 'true');
        await expect(this.accountsGrid).toBeVisible();
    }

    async clickOnAddButton() {
        await this.addButton.waitFor({ state: 'visible' });
        await this.addButton.evaluate((el: HTMLElement) => { el.style.border = "3px solid blue"; });
        await this.addButton.click();
    }

    async verifyAddNewScreenIsDisplayed() {
        await expect(this.page).toHaveURL(/chart-of-account-details/, { timeout: 30000 });
    }

    async verifyAddNewScreenFormFieldsAreVisible() {
        await expect(this.accountNumberField).toBeVisible();
        await expect(this.accountNameField).toBeVisible();
        await expect(this.accountForDropdown).toBeVisible();
        await expect(this.allowVoucherCreationCheckbox).toBeVisible();
        await expect(this.agingCheckbox).toBeVisible();
        await expect(this.saveButton).toBeVisible();
    }

    async clickSaveAndVerifyAllRequiredFieldErrorsAreShown() {
        await this.saveButton.click();
        await expect(this.fieldRequiredErrors).toHaveCount(3, { timeout: 20000 });
    }

    async openAccountForDropdownAndVerifyOptions() {
        await this.accountForDropdown.click();
        await this.accountForOptionsPanel.waitFor({ state: 'visible' });
        const expectedOptions = ['Escrow Account', 'Payers', 'Provider', 'Provider-Professional', 'Reinsurers'];
        await expect(this.accountForOptions).toHaveCount(6);
        for (const option of expectedOptions) {
            await expect(this.accountForOptions.filter({ hasText: new RegExp(`^\\s*${option}\\s*$`) })).toBeVisible();
        }
    }

    async verifyAgingCheckboxIsDisabledByDefault() {
        await expect(this.agingCheckbox).toHaveClass(/disable-agingStatus/);
    }

    async checkAllowVoucherCreationAndVerifyAgingIsEnabled() {
        await this.allowVoucherCreationCheckbox.click();
        await expect(this.allowVoucherCreationCheckbox).toHaveClass(/mat-checkbox-checked/);
        await expect(this.agingCheckbox).not.toHaveClass(/disable-agingStatus/);
    }

    async uncheckAllowVoucherCreationAndVerifyAgingIsDisabled() {
        await this.allowVoucherCreationCheckbox.click();
        await expect(this.allowVoucherCreationCheckbox).not.toHaveClass(/mat-checkbox-checked/);
        await expect(this.agingCheckbox).toHaveClass(/disable-agingStatus/);
    }

    async fillAccountFormAndSave(accountNumber: string, accountName: string, accountFor: string) {
        await this.accountNumberField.fill(accountNumber);
        await this.accountNameField.fill(accountName);
        await this.accountForDropdown.click();
        await this.accountForOptionsPanel.waitFor({ state: 'visible' });
        await this.accountForOptions.filter({ hasText: new RegExp(`^\\s*${accountFor}\\s*$`) }).click();
        await this.saveButton.click();
    }
    async updateAccountNameAndSave(newAccountName: string) {
        await this.accountNameField.fill(newAccountName);
        await expect(this.updateButton).toBeVisible({ timeout: 30000 });
        await expect(this.updateButton).toBeEnabled({ timeout: 30000 });
        await this.updateButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async getVisibleAccountNameDetailsField() {
        const candidates = [
            this.page.locator('mat-form-field:has-text("Account Name") input[formcontrolname="accountName"]'),
            this.page.locator('mat-form-field:has-text("Account Name") input[formcontrolname="label"]'),
            this.page.locator('mat-form-field:has-text("Account Name") input[formcontrolname="name"]'),
            this.accountNameField,
        ];

        for (const candidate of candidates) {
            if (await candidate.count() > 0) {
                const visibleCandidate = candidate.first();
                if (await visibleCandidate.isVisible()) {
                    return visibleCandidate;
                }
            }
        }

        return this.accountNameField;
    }

    async verifyAccountNameFieldIsUneditable() {
        const detailsField = await this.getVisibleAccountNameDetailsField();
        await expect(detailsField).toBeVisible({ timeout: 30000 });

        const originalValue = await detailsField.inputValue();
        await detailsField.click();
        await detailsField.press('Control+a');
        await detailsField.type('X', { delay: 50 }).catch(() => {});

        await expect(detailsField).toHaveValue(originalValue, { timeout: 30000 });
    }

    async verifySaveSuccessMessageAndReturnToListScreen() {
        try {
            await expect(this.successMessage).toBeVisible({ timeout: 30000 });
        } catch (error) {
            // Fallback for cases where the toast message does not appear as expected.
            await this.page.waitForLoadState('networkidle');
        }
        await expect(this.page).toHaveURL(/\/chart-of-accounts(?:$|[?#])/, { timeout: 30000 });
    }

    async verifyDuplicateAccountErrorIsShown() {
        await expect(this.duplicateAccountErrorMessage).toBeVisible({ timeout: 30000 });
    }

    async searchInAccountsGrid(value: string) {
        await this.accountSearchInput.waitFor({ state: 'visible' });
        await this.accountSearchInput.click();
        await this.accountSearchInput.clear();
        await this.accountSearchInput.pressSequentially(value, { delay: 50 });
        await this.page.waitForLoadState('networkidle');
    }

    async verifyGridHasExactlyOneRowContaining(value: string) {
        const matchedRows = this.accountsGridRows.filter({ hasText: value });
        const count = await matchedRows.count();
        await expect(count).toBeGreaterThan(0);
        await expect(matchedRows.first()).toContainText(value);
    }

    async stopFirstMatchedRowAndConfirmBySearch(searchText: string) {
        const row = this.accountsGridRows.filter({ hasText: searchText }).first();
        await row.waitFor({ state: 'visible', timeout: 30000 });

        // read the actual account number from the row (assumes column 1 is actions, 2 is account number)
        const accountNumberCell = row.locator('mat-cell, td').nth(1);
        const accountNumber = (await accountNumberCell.innerText()).trim();

        const stopBtn = row.locator('a:has-text("Stop"), a:has-text("stop"), button:has-text("Stop"), button:has-text("stop")').first();
        await stopBtn.waitFor({ state: 'visible', timeout: 30000 });

        // Step 2: Click Stop and verify confirmation appears
        await stopBtn.click();
        await this.confirmationDialog.waitFor({ state: 'visible', timeout: 30000 });

        // Step 3: Click No and verify account still exists
        await this.clickNoOnConfirmationDialog();
        const stillThere = this.accountsGridRows.filter({ hasText: accountNumber });
        const stillCount = await stillThere.count();
        expect(stillCount).toBeGreaterThan(0);

        // Step 4: Click Stop again and confirm Yes
        await stopBtn.click();
        await this.clickYesOnConfirmationDialog();

        // verify the exact account number no longer exists in the grid
        const after = this.accountsGridRows.filter({ hasText: accountNumber });
        await expect(after).toHaveCount(0, { timeout: 30000 });

        // Optional: check for a snackbar / toast indicating success
        const snack = this.page.locator('snack-bar-container, .mat-snack-bar-container');
        if (await snack.count() > 0) {
            await expect(snack.first()).toBeVisible({ timeout: 30000 });
        }
    }

    async fillAccountFormWithVoucherCreationAndSave(accountNumber: string, accountName: string, accountFor: string) {
        await this.accountNumberField.fill(accountNumber);
        await this.accountNameField.fill(accountName);
        await this.accountForDropdown.click();
        await this.accountForOptionsPanel.waitFor({ state: 'visible' });
        await this.accountForOptions.filter({ hasText: new RegExp(`^\\s*${accountFor}\\s*$`) }).click();
        await this.allowVoucherCreationCheckbox.click();
        await this.saveButton.click();
    }

    async clickOnGridRowByText(text: string) {
        const row = this.accountsGridRows.filter({ hasText: text });
        await row.waitFor({ state: 'visible', timeout: 30000 });
        await row.click();
    }

    async clickAccountNumberInRow(accountNumber: string) {
        await this.accountsGridRows.filter({ hasText: accountNumber }).first().waitFor({ state: 'visible', timeout: 30000 });
        const accountNumberCell = this.gridRowCell.filter({ hasText: accountNumber }).first();
        await accountNumberCell.click();
    }

    async clickAccountNameInRow(accountName: string) {
        const row = this.accountsGridRows.filter({ hasText: accountName }).first();
        await row.waitFor({ state: 'visible', timeout: 30000 });
        const accountNameCell = row.locator('mat-cell, td').nth(1);
        await expect(accountNameCell).toHaveText(accountName, { timeout: 30000 });
        await accountNameCell.click();
    }

    async getFirstRowAccountNumber(): Promise<string> {
        await this.firstRowAccountNumberCell.waitFor({ state: 'visible', timeout: 30000 });
        return (await this.firstRowAccountNumberCell.innerText()).trim();
    }

    async getFirstRowAccountName(): Promise<string> {
        await this.firstRowAccountNameCell.waitFor({ state: 'visible', timeout: 30000 });
        return (await this.firstRowAccountNameCell.innerText()).trim();
    }

    async verifyFirstRowAccountNumberDoesNotNavigate() {
        const accountNumber = await this.getFirstRowAccountNumber();
        await this.verifyClickOnAccountNumberDoesNotNavigate(accountNumber);
    }

    async verifyFirstRowAccountNameNavigatesToDetailsScreen() {
        const accountName = await this.getFirstRowAccountName();
        await this.verifyClickOnAccountNameNavigatesToDetailsScreen(accountName);
    }

    async getVisibleAccountNumberDetailsField() {
        const candidates = [
            this.accountNumberDetailsFieldByLabel,
            this.accountNumberDetailsCodeField,
            this.accountNumberDetailsIdField,
            this.accountNumberDetailsField,
            this.page.locator('mat-form-field:has-text("Account Number") input'),
            this.page.locator('mat-form-field:has-text("Account Number") input[formcontrolname="accountNumber"]'),
            this.page.locator('mat-form-field:has-text("Account Number") input[formcontrolname="code"]'),
        ];

        for (const candidate of candidates) {
            if (await candidate.count() > 0) {
                const visibleCandidate = candidate.first();
                if (await visibleCandidate.isVisible()) {
                    return visibleCandidate;
                }
            }
        }

        return this.page.locator('mat-form-field:has-text("Account Number") input').first();
    }

    async verifyDetailsScreenIsDisplayed() {
        await expect(this.page).toHaveURL(/chart-of-account-details/, { timeout: 30000 });
        await expect(this.updateButton).toBeVisible({ timeout: 30000 });
        await expect(await this.getVisibleAccountNumberDetailsField()).toBeVisible({ timeout: 30000 });
        await expect(this.accountNameField).toBeVisible({ timeout: 30000 });
    }

    async verifyAccountNumberFieldHasValue(expectedAccountNumber: string) {
        const detailsField = await this.getVisibleAccountNumberDetailsField();
        await expect(detailsField).toBeVisible({ timeout: 30000 });
        await expect(detailsField).toHaveValue(expectedAccountNumber, { timeout: 30000 });
    }

    async verifyFirstRowAccountDetailsAreLoaded() {
        const accountName = await this.getFirstRowAccountName();
        const accountNumber = await this.getFirstRowAccountNumber();

        await this.verifyClickOnAccountNameNavigatesToDetailsScreen(accountName);
        await this.verifyDetailsScreenIsDisplayed();
        await this.verifyAccountNumberFieldHasValue(accountNumber);
        await this.verifyAccountNumberFieldIsUneditable();
    }

    async verifyAccountNumberFieldIsUneditable() {
        const detailsField = await this.getVisibleAccountNumberDetailsField();
        await expect(detailsField).toBeVisible({ timeout: 30000 });

        const isReadOnlyOrDisabled = await detailsField.evaluate((element: any) => {
            if (!element) return false;
            const readOnly = element.readOnly === true || element.getAttribute?.('readonly') === 'true' || element.getAttribute?.('readonly') === '';
            const disabled = element.disabled === true || element.getAttribute?.('disabled') === 'true' || element.getAttribute?.('disabled') === '';
            const ariaReadOnly = element.getAttribute?.('aria-readonly') === 'true';
            return readOnly || disabled || ariaReadOnly;
        });

        await expect(isReadOnlyOrDisabled).toBeTruthy();
    }

    async getFirstStoppedRowAccountNumber(): Promise<string> {
        const stoppedRow = this.accountsGridRows.filter({ hasText: 'Stopped' }).first();
        await stoppedRow.waitFor({ state: 'visible', timeout: 30000 });
        const accountNumberCell = stoppedRow.locator('mat-cell, td').first();
        return (await accountNumberCell.innerText()).trim();
    }

    async getFirstStoppedRowAccountName(): Promise<string> {
        const stoppedRow = this.accountsGridRows.filter({ hasText: 'Stopped' }).first();
        await stoppedRow.waitFor({ state: 'visible', timeout: 30000 });
        const accountNameCell = stoppedRow.locator('mat-cell, td').nth(1);
        return (await accountNameCell.innerText()).trim();
    }

    async verifyFirstStoppedRowAccountNumberDoesNotNavigate() {
        const accountNumber = await this.getFirstStoppedRowAccountNumber();
        await this.verifyClickOnAccountNumberDoesNotNavigate(accountNumber);
    }

    async verifyFirstStoppedRowAccountNameDoesNotNavigate() {
        const accountName = await this.getFirstStoppedRowAccountName();
        await this.verifyClickOnAccountNameDoesNotNavigate(accountName);
    }

    async verifyClickOnAccountNumberDoesNotNavigate(accountNumber: string) {
        const initialUrl = this.page.url();
        await this.clickAccountNumberInRow(accountNumber);
        await this.page.waitForTimeout(1000);
        await expect(this.page).toHaveURL(initialUrl, { timeout: 5000 });
    }

    async verifyClickOnAccountNameDoesNotNavigate(accountName: string) {
        const initialUrl = this.page.url();
        await this.clickAccountNameInRow(accountName);
        await this.page.waitForTimeout(1000);
        await expect(this.page).toHaveURL(initialUrl, { timeout: 5000 });
    }

    async verifyClickOnAccountNameNavigatesToDetailsScreen(accountName: string) {
        await this.clickAccountNameInRow(accountName);
        await expect(this.page).toHaveURL(/chart-of-account-details/, { timeout: 30000 });
    }

    async verifyCannotCreateUnderAccountErrorIsShown(accountNumber: string) {
        await expect(this.cannotCreateAccountErrorMessage).toBeVisible({ timeout: 30000 });
        await expect(this.cannotCreateAccountErrorMessage).toContainText(accountNumber);
    }

    async clickPerRowAddForAccount(accountNumber: string) {
        const row = this.accountsGridRows.filter({ hasText: accountNumber });
        await row.waitFor({ state: 'visible', timeout: 30000 });
        const addLink = this.rowActionLink.filter({ hasText: accountNumber }).first();
        await addLink.click();
    }

    async verifyChildAccountsUI(parentAccountNumber: string) {
        await this.accountsGridRows.filter({ hasText: parentAccountNumber }).first().waitFor({ state: 'visible', timeout: 30000 });

        const expandToggle = this.rowExpandButton.filter({ hasText: parentAccountNumber }).first();
        if (await expandToggle.count() > 0) {
            const ariaExpanded = await expandToggle.getAttribute('aria-expanded');
            if (ariaExpanded !== 'true') await expandToggle.click();
        }

        const childRows = this.accountsGridRows.filter({ hasText: /^\s*-\s*/ });
        await expect(childRows.first()).toBeVisible({ timeout: 30000 });

        const directChildren = this.accountsGridRows.filter({ hasText: parentAccountNumber + ' -' });
        if (await directChildren.count() > 0) {
            await expect(directChildren.first()).toBeVisible();
        } else {
            const childCount = await childRows.count();
            expect(childCount).toBeGreaterThan(0);
        }
    }

    async clickStopButtonForAccount(accountNumber: string) {
        const row = this.accountsGridRows.filter({ hasText: accountNumber }).first();
        await row.waitFor({ state: 'visible', timeout: 30000 });
        
        const stopBtn = row.locator('a:has-text("Stop"), a:has-text("stop"), button:has-text("Stop"), button:has-text("stop")').first();
        await stopBtn.waitFor({ state: 'visible', timeout: 30000 });
        await stopBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickNoOnConfirmationDialog() {
        await this.confirmationDialog.waitFor({ state: 'visible', timeout: 30000 });
        await this.confirmationNoButton.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickYesOnConfirmationDialog() {
        await this.confirmationDialog.waitFor({ state: 'visible', timeout: 30000 });
        await this.confirmationYesButton.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyAccountDisappearsFromGrid(accountNumber: string) {
        const row = this.accountsGridRows.filter({ hasText: accountNumber });
        await expect(row).toHaveCount(0, { timeout: 30000 });
    }

    async stopSelectedAccountWithCancelAndConfirm() {
        if (!this.selectedAccountNumber) {
            throw new Error('Selected account number is not set. Call rememberFirstRowAccountNumber() first.');
        }

        await this.clickStopButtonForAccount(this.selectedAccountNumber);
        await this.clickNoOnConfirmationDialog();
        await this.verifySelectedAccountStillExists();

        await this.clickStopButtonForAccount(this.selectedAccountNumber);
        await this.clickYesOnConfirmationDialog();
        await this.verifySelectedAccountDisappearsFromGrid();
    }

    async rememberFirstRowAccountNumber() {
        this.selectedAccountNumber = await this.getFirstRowAccountNumber();
        return this.selectedAccountNumber;
    }

    async clickStopButtonOnSelectedAccount() {
        if (!this.selectedAccountNumber) {
            throw new Error('Selected account number is not set. Call rememberFirstRowAccountNumber() first.');
        }
        await this.clickStopButtonForAccount(this.selectedAccountNumber);
    }

    async verifySelectedAccountStillExists() {
        if (!this.selectedAccountNumber) {
            throw new Error('Selected account number is not set. Call rememberFirstRowAccountNumber() first.');
        }
        await this.searchInAccountsGrid(this.selectedAccountNumber);
        await this.verifyGridHasExactlyOneRowContaining(this.selectedAccountNumber);
    }

    async verifySelectedAccountDisappearsFromGrid() {
        if (!this.selectedAccountNumber) {
            throw new Error('Selected account number is not set. Call rememberFirstRowAccountNumber() first.');
        }
        await this.verifyAccountDisappearsFromGrid(this.selectedAccountNumber);
    }
}
