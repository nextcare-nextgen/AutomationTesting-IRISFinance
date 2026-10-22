import { Locator, Page, expect } from "@playwright/test";

export class SoloPaymentOrderSetupPage {

    readonly page: Page;
    readonly searchIcon: Locator;
    readonly financials: Locator;
    readonly soloPaymentOrderSetup: Locator;
    readonly breadcrumbs: Locator;
    readonly financeBreadcrumb: Locator;
    readonly soloPaymentOrderSetupBreadcrumb: Locator;
    readonly soloPaymentOrderSetupLabel: Locator;
    readonly searchCriteriaSection: Locator;
    readonly labels: string[];
    readonly payerLabel: Locator;
    readonly payerMandatorySymbol: Locator;
    readonly payerInput: Locator;
    readonly searchButton: Locator;
    readonly searchResults: Locator;
    readonly nameInput: Locator;
    readonly externalRefLabel: Locator;
    readonly externalRefInput: Locator;
    readonly soloPaymentOrderDropdown: Locator;
    readonly effectiveDateLabel: Locator;
    readonly effectiveDateInput: Locator;
    readonly effectiveDateCalendarIcon: Locator;
    readonly expiryDateLabel: Locator;
    readonly expiryDateInput: Locator;
    readonly expiryDateCalendarIcon: Locator;
    readonly nameColumn: Locator;
    readonly statusColumn: Locator;
    readonly startDateColumn: Locator;
    readonly stopDateColumn: Locator;
    readonly soloPaymentOrderColumn: Locator;
    readonly soloPaymentOrderTypeColumn: Locator;
    readonly nameUpArrow: Locator;
    readonly nameDownArrow: Locator;
    readonly statusUpArrow: Locator;
    readonly statusDownArrow: Locator;
    readonly startDateUpArrow: Locator;
    readonly startDateDownArrow: Locator;
    readonly stopDateUpArrow: Locator;
    readonly stopDateDownArrow: Locator;
    readonly nameColumnCells: Locator;
    readonly statusColumnCells: Locator;
    readonly startDateColumnCells: Locator;
    readonly stopDateColumnCells: Locator;
    readonly nameColumnHeader: Locator;
    readonly soloPaymentOrderHeader: Locator; 
    readonly soloPaymentOrderCheckbox: Locator;  
    readonly soloPaymentOrderCheckboxLabel: Locator; 
    readonly soloPaymentOrderCheckboxInput: Locator; 
    readonly rowCheckboxes: Locator; 
    readonly headerCheckboxLabel: Locator; 
    readonly headerCheckboxInput: Locator; 
    readonly rowCheckboxInputs: Locator; 
    readonly soloPaymentOrderTypeDownArrow: Locator;
    readonly itemsPerPageLabel: Locator;
    readonly itemsPerPageDropdown: Locator;
    readonly previousPageButton: Locator;
    readonly paginatorTooltip: Locator;
    readonly saveBtn: Locator;
    readonly errorMessageLocator : Locator;
    readonly infoMessageLocator : Locator;
    readonly successMessageLocator  : Locator;
    readonly soloPaymentOrderTypeDropdown   : Locator;
    readonly appLoader: Locator;
        
    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.soloPaymentOrderSetup = page.locator("//a[@aria-label='Solo Payment Order Setup']");
        this.breadcrumbs = page.locator('nc-breadcrumbs');
        this.financeBreadcrumb = page.locator('nc-breadcrumbs a.br-text', { hasText: 'Finance' });
        this.soloPaymentOrderSetupBreadcrumb = page.locator('nc-breadcrumbs a.last-a', { hasText: 'Solo Payment Order Setup' });
        this.soloPaymentOrderSetupLabel = page.locator('h1.heading', { hasText: 'Solo Payment Order SetUp' });
        this.searchCriteriaSection = page.locator('.batch-info-fields');
        this.labels = ['Payer','External Ref','Name','Effective Date','Expiry Date','Solo Payment Order','Solo Payment Order Type'];
        this.payerLabel = this.searchCriteriaSection.locator('mat-label', { hasText: 'Payer' });
        this.payerInput = page.locator('#payersolopaymentorder input');
        this.payerMandatorySymbol = this.payerInput.locator('xpath=ancestor::mat-form-field');
        this.searchButton = page.locator('button.search-button');
        this.searchResults = page.locator('table tbody tr');
        this.nameInput = page.locator("input[formcontrolname='name']");
        this.externalRefLabel = this.searchCriteriaSection.locator('mat-label', { hasText: 'External Ref' });
        this.externalRefInput = this.externalRefLabel.locator('xpath=ancestor::mat-form-field//input').first();
        this.soloPaymentOrderDropdown = page.locator("mat-select[formcontrolname='soloPaymentOrder']");
        this.effectiveDateLabel = this.searchCriteriaSection.locator('mat-label', { hasText: 'Effective Date' });
        this.effectiveDateInput = page.locator("input[formcontrolname='effectiveDate']");
        this.effectiveDateCalendarIcon = page
            .locator("input[formcontrolname='effectiveDate']")
            .locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle");
        this.expiryDateLabel = this.searchCriteriaSection.locator('mat-label', { hasText: 'Expiry Date' });
        this.expiryDateInput = this.expiryDateLabel.locator('xpath=ancestor::mat-form-field//input').first();
        this.expiryDateCalendarIcon = this.expiryDateLabel
            .locator('xpath=ancestor::mat-form-field//mat-datepicker-toggle');
        this.nameColumn = page.locator('th.mat-column-name', { hasText: 'Name' });
        this.statusColumn = page.locator('th.mat-column-status', { hasText: 'Status' });
        this.startDateColumn = page.locator('th.mat-column-startDate', { hasText: 'Start Date' });
        this.stopDateColumn = page.locator('th.mat-column-stopDate', { hasText: 'Stop Date' });
        this.soloPaymentOrderColumn = page.locator('th.mat-column-soloPaymentOrder', { hasText: 'Solo Payment Order' });
        this.soloPaymentOrderTypeColumn = page.locator('th.mat-column-soloPaymentOrderType', { hasText: 'Solo Payment Order Type' });
        this.nameUpArrow = page.locator('th.mat-column-name img.up-sort');
        this.nameDownArrow = page.locator('th.mat-column-name img[src*="down-sorting"]');
        this.statusUpArrow = page.locator('th.mat-column-status img.up-sort');
        this.statusDownArrow = page.locator('th.mat-column-status img[src*="down-sorting"]');
        this.startDateUpArrow = page.locator('th.mat-column-startDate img.up-sort');
        this.startDateDownArrow = page.locator('th.mat-column-startDate img[src*="down-sorting"]');
        this.stopDateUpArrow = page.locator('th.mat-column-stopDate img.up-sort');
        this.stopDateDownArrow = page.locator('th.mat-column-stopDate img[src*="down-sorting"]');
        this.nameColumnCells = page.locator('td.mat-column-name');
        this.statusColumnCells = page.locator("table tbody tr td:nth-child(2)");
        this.startDateColumnCells = page.locator("table tbody tr td:nth-child(3)");
        this.stopDateColumnCells = page.locator("table tbody tr td:nth-child(4)");
        this.nameColumnHeader = page.locator('th.mat-column-name button');
        this.soloPaymentOrderHeader = page.locator('th.cdk-column-soloPaymentOrder');
        //this.soloPaymentOrderCheckbox = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox input[type="checkbox"]');
        this.soloPaymentOrderCheckbox = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox input[type="checkbox"]');
        this.soloPaymentOrderCheckboxLabel = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox');
        this.soloPaymentOrderCheckboxInput = this.soloPaymentOrderCheckbox;
        this.rowCheckboxes = page.locator('table tbody tr mat-checkbox');

        this.headerCheckboxLabel = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox');
        this.headerCheckboxInput = this.soloPaymentOrderCheckbox;
        this.rowCheckboxInputs = page.locator('table tbody tr mat-checkbox input[type="checkbox"]');
        this.soloPaymentOrderTypeDownArrow = page.locator('th.cdk-column-soloPaymentOrderType .sort-div img[alt="Down Sorting Icon"]');
        this.itemsPerPageLabel = page.locator(".mat-mdc-paginator-page-size-label, .mat-paginator-page-size-label").filter({ hasText: "Items per page:" }).last();
        this.itemsPerPageDropdown = page.getByRole("combobox", { name: "Items per page:" }).last();
        this.previousPageButton = page.getByRole("button", { name: "Previous page" }).last();
        this.paginatorTooltip = page.locator('.mat-mdc-tooltip, .mat-tooltip');
        this.saveBtn = page.getByRole("button", { name: "Save", exact: true });
        const snackbars = page.locator('simple-snack-bar, .mat-mdc-snack-bar-container, .mat-snack-bar-container');
        this.errorMessageLocator = snackbars.filter({hasText: 'You have to search first'});
        this.infoMessageLocator = snackbars.filter({hasText: 'Nothing has changed'});
        this.successMessageLocator = snackbars.filter({hasText: 'Record updated successfully !'});
        this.soloPaymentOrderTypeDropdown = page.locator("//td[contains(@class, 'mat-column-soloPaymentOrderType')]//div[normalize-space(text())='Both']");
        this.appLoader = page.locator("app-new-loader");
        
    }

    async searchAndClickFinancials() {  
        await this.searchIcon.waitFor({ state: 'visible', timeout: 60000 });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");
        await expect(this.financials).toBeVisible({ timeout: 30000 });
        await this.appLoader.waitFor({ state: "hidden", timeout: 15000 }).catch(() => {});
        const opened = await this.financials.click({ timeout: 10000 }).then(() => true).catch(() => false);
        if (!opened) {
            await this.financials.click({ force: true, timeout: 10000 });
        }
    }

    async clickOnSoloPaymentOrderSetup() {  
        await expect(this.soloPaymentOrderSetup).toBeVisible({ timeout: 30000 });
        await this.soloPaymentOrderSetup.scrollIntoViewIfNeeded();
        const navigationStarted = await this.soloPaymentOrderSetup
            .click({ timeout: 10000 })
            .then(() => true)
            .catch(() => false);
        if (!navigationStarted) {
            await this.soloPaymentOrderSetup.click({ force: true, timeout: 10000 });
        }
        await this.appLoader.waitFor({ state: "hidden", timeout: 60000 });
        await expect(this.soloPaymentOrderSetupLabel).toBeVisible({ timeout: 60000 });
    }

    async verifyValidBreadcrumbs() {
        await expect(this.breadcrumbs).toBeVisible();

        await expect(this.financeBreadcrumb).toBeVisible();
        await expect(this.financeBreadcrumb).toHaveText('Finance');

        await expect(this.soloPaymentOrderSetupBreadcrumb).toBeVisible();
        await expect(this.soloPaymentOrderSetupBreadcrumb).toHaveText('Solo Payment Order Setup');
    }

    async verifySoloPaymentOrderSetupLabelIsBold() {
        await expect(this.soloPaymentOrderSetupLabel).toBeVisible();
        await expect(this.soloPaymentOrderSetupLabel).toHaveCSS('font-weight', /bold|[7-9]00/);
    }

    async verifyAllSearchCriteriaFieldsAreDisplayed() {
        for (const label of this.labels) {
            await expect(this.searchCriteriaSection.getByText(label, { exact: true })).toBeVisible();
        }
    }

    async verifyPayerIsMandatory() {
        await expect(this.payerInput).toHaveAttribute("required", "");
    }

    async searchPayer(payerName: string) {
        await expect(this.payerInput).toBeVisible({ timeout: 20000 });
        await this.payerInput.click();
        await this.payerInput.fill("");
        const searchValue = payerName.toUpperCase().includes("ADNIC")
            ? "ADNIC"
            : payerName.includes("TEST PAYER")
                ? "TEST PAYER"
                : payerName;
        const payerResponse = this.page.waitForResponse(
            response => response.url().includes("/payer/api/payers/") && response.status() === 200,
            { timeout: 60000 },
        );
        await this.payerInput.pressSequentially(searchValue, { delay: 150 });
        await payerResponse;
        await this.payerInput.click();
        await this.payerInput.press("ArrowDown");

        const option = this.page.locator(".cdk-overlay-pane mat-option", { hasText: payerName }).first();
        await option.waitFor({ state: "visible", timeout: 30000 });
        await option.click();
        await this.payerInput.press("Tab");
        await expect(this.page.locator("mat-error", { hasText: "Payer name was not found" })).toBeHidden();

        console.log(`Payer "${payerName}" selected successfully.`);
        await this.searchButton.click();
        const rows = this.page.locator("table tbody tr");
        const noRecords = this.page.getByText("No Records Found", { exact: true });
        await expect(rows.first().or(noRecords)).toBeVisible({ timeout: 60000 });
        const visibleRowsCount = await rows.count();
        console.log(`Number of rows found: ${visibleRowsCount}`);
    }

    async searchPayerToVerify(payerName: string) {
        await this.payerInput.click();
        await this.payerInput.fill("");
        const searchValue = payerName.toUpperCase().includes("ADNIC")
            ? "ADNIC"
            : payerName.includes("TEST PAYER")
                ? "TEST PAYER"
                : payerName;
        const payerResponse = this.page.waitForResponse(
            response => response.url().includes("/payer/api/payers/") && response.status() === 200,
            { timeout: 60000 },
        );
        await this.payerInput.pressSequentially(searchValue, { delay: 150 });
        await payerResponse;
        await this.payerInput.click();
        await this.payerInput.press("ArrowDown");
        const option = this.page.locator('.cdk-overlay-pane mat-option', { hasText: payerName }).first();
        await expect(option).toBeVisible({ timeout: 30000 });
        await option.click();
        await this.payerInput.press("Tab");
        await expect(this.page.locator("mat-error", { hasText: "Payer name was not found" })).toBeHidden();
    } 

    async enterName(name: string) {
        await this.nameInput.fill(name);
    } 

    async verifyExternalRefAcceptsAlphabets(): Promise<void> {
        const value = 'AlphaOnly';
        await this.externalRefInput.click();
        await this.externalRefInput.fill('');
        await this.externalRefInput.fill(value);
        await this.externalRefInput.press('Tab');
        await expect(this.externalRefInput).toHaveValue(value);
    }

    async verifyExternalRefAcceptsNumbers(): Promise<void> {
        const value = '1234567890';
        await this.externalRefInput.click();
        await this.externalRefInput.fill('');
        await this.externalRefInput.fill(value);
        await this.externalRefInput.press('Tab');
        await expect(this.externalRefInput).toHaveValue(value);
    }

    async verifyExternalRefAcceptsSpecialCharacters(): Promise<void> {
        const value = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
        await this.externalRefInput.click();
        await this.externalRefInput.fill('');
        await this.externalRefInput.fill(value);
        await this.externalRefInput.press('Tab');
        await expect(this.externalRefInput).toHaveValue(value);
    }

    async verifyExternalRefDoesNotAcceptBlankSpaces(): Promise<void> {
        const value = '     ';
        await this.externalRefInput.click();
        await this.externalRefInput.fill('');
        await this.externalRefInput.fill(value);
        await this.externalRefInput.press('Tab');
        const actual = await this.externalRefInput.inputValue();
        expect(actual.trim()).toBe('');
    }

    async verifyExternalRefDoesNotAllowLeadingTrailingSpaces(): Promise<void> {
        const value = '  ExternalRef123  ';
        await this.externalRefInput.click();
        await this.externalRefInput.fill('');
        await this.externalRefInput.fill(value);
        await this.externalRefInput.press('Tab');
        const actual = await this.externalRefInput.inputValue();
        expect(actual).toBe(actual.trim());
        expect(actual.trim()).toBe('ExternalRef123');
    }

    async verifyNameAcceptsAlphabets(): Promise<void> {
        const value = 'AlphaOnly';
        await this.nameInput.click();
        await this.nameInput.fill('');
        await this.nameInput.fill(value);
        await this.nameInput.press('Tab');
        await expect(this.nameInput).toHaveValue(value);
    }

    async verifyNameAcceptsNumbers(): Promise<void> {
        const value = '1234567890';
        await this.nameInput.click();
        await this.nameInput.fill('');
        await this.nameInput.fill(value);
        await this.nameInput.press('Tab');
        await expect(this.nameInput).toHaveValue(value);
    }

    async verifyNameAcceptsSpecialCharacters(): Promise<void> {
        const value = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
        await this.nameInput.click();
        await this.nameInput.fill('');
        await this.nameInput.fill(value);
        await this.nameInput.press('Tab');
        await expect(this.nameInput).toHaveValue(value);
    }

    async verifyNameDoesNotAcceptBlankSpaces(): Promise<void> {
        const value = '     ';
        await this.nameInput.click();
        await this.nameInput.fill('');
        await this.nameInput.fill(value);
        await this.nameInput.press('Tab');
        const actual = await this.nameInput.inputValue();
        expect(actual.trim()).toBe('');
    }

    async verifyNameDoesNotAllowLeadingTrailingSpaces(): Promise<void> {
        const value = '  NameValue123  ';
        await this.nameInput.click();
        await this.nameInput.fill('');
        await this.nameInput.fill(value);
        await this.nameInput.press('Tab');
        const actual = await this.nameInput.inputValue();
        expect(actual).toBe(actual.trim());
        expect(actual.trim()).toBe('NameValue123');
    }

    async enterEffectiveDate(date: string) {
        await this.effectiveDateInput.click();
        await this.effectiveDateInput.fill(date);
    }

    async verifyEffectiveDateLabelAndTextboxDisplayed(): Promise<void> {
        await expect(this.effectiveDateLabel).toBeVisible();
        await expect(this.effectiveDateInput).toBeVisible();
        await expect(this.effectiveDateInput).toBeEnabled();
    }

    async verifyExpiryDateLabelAndTextboxDisplayed(): Promise<void> {
        await expect(this.expiryDateLabel).toBeVisible();
        await expect(this.expiryDateInput).toBeVisible();
        await expect(this.expiryDateInput).toBeEnabled();
    }

    async verifyEffectiveDateCalendarIconDisplayed(): Promise<void> {
        await expect(this.effectiveDateCalendarIcon).toBeVisible();
    }

    async verifyExpiryDateCalendarIconDisplayed(): Promise<void> {
        await expect(this.expiryDateCalendarIcon).toBeVisible();
    }

    private async getCurrentCalendarDayCell(calendarPopup: Locator): Promise<Locator> {
        const selectedTdCell = calendarPopup.locator('td.mat-calendar-body-selected .mat-calendar-body-cell-content').first();
        if (await selectedTdCell.count()) {
            return selectedTdCell;
        }

        const activeButtonCell = calendarPopup.locator('button.mat-calendar-body-cell.mat-calendar-body-active .mat-calendar-body-cell-content').first();
        if (await activeButtonCell.count()) {
            return activeButtonCell;
        }

        const todayCell = calendarPopup.locator('.mat-calendar-body-today').first();
        return todayCell;
    }

    private parseDateValue(value: string): Date | null {
        const trimmed = value.trim();
        const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (slashMatch) {
            const day = Number.parseInt(slashMatch[1], 10);
            const month = Number.parseInt(slashMatch[2], 10);
            const year = Number.parseInt(slashMatch[3], 10);

            const parsed = new Date(year, month - 1, day);
            if (
                parsed.getFullYear() === year &&
                parsed.getMonth() === month - 1 &&
                parsed.getDate() === day
            ) {
                return parsed;
            }
            return null;
        }

        const dashMatch = trimmed.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/);
        if (dashMatch) {
            const day = Number.parseInt(dashMatch[1], 10);
            const monthToken = dashMatch[2].toLowerCase();
            const year = Number.parseInt(dashMatch[3], 10);

            const monthMap: Record<string, number> = {
                jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
                jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
            };

            const month = monthMap[monthToken];
            if (month === undefined) {
                return null;
            }

            const parsed = new Date(year, month, day);
            if (
                parsed.getFullYear() === year &&
                parsed.getMonth() === month &&
                parsed.getDate() === day
            ) {
                return parsed;
            }
            return null;
        }

        return null;
    }

    async verifyCalendarOpensWithCurrentDateSelectedByDefault(): Promise<void> {
        await this.effectiveDateCalendarIcon.click();

        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const currentDayCell = await this.getCurrentCalendarDayCell(calendarPopup);
        await expect(currentDayCell).toBeVisible();

        const selectedDayText = (await currentDayCell.textContent())?.trim();
        const todayDayText = new Date().getDate().toString();

        expect(selectedDayText).toBe(todayDayText);
    }

    async verifyExpiryCalendarOpensWithCurrentDateSelectedByDefault(): Promise<void> {
        await this.expiryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const currentDayCell = await this.getCurrentCalendarDayCell(calendarPopup);
        await expect(currentDayCell).toBeVisible();

        const selectedDayText = (await currentDayCell.textContent())?.trim();
        const todayDayText = new Date().getDate().toString();

        expect(selectedDayText).toBe(todayDayText);
    }

    async verifyUserCanSelectOldDate(): Promise<void> {
        await this.effectiveDateCalendarIcon.click();

        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const currentDayCell = await this.getCurrentCalendarDayCell(calendarPopup);
        await expect(currentDayCell).toBeVisible();

        const selectedDayText = (await currentDayCell.textContent())?.trim() || '';
        const selectedDay = Number.parseInt(selectedDayText, 10);

        const enabledCells = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)');
        const cellCount = await enabledCells.count();

        let targetCell: Locator | null = null;

        for (let i = 0; i < cellCount; i++) {
            const cell = enabledCells.nth(i);
            const dayText = (await cell.locator('.mat-calendar-body-cell-content').textContent())?.trim() || '';
            const day = Number.parseInt(dayText, 10);

            if (!Number.isNaN(day) && day < selectedDay) {
                targetCell = cell;
                break;
            }
        }

        if (!targetCell) {
            const previousMonthButton = calendarPopup.locator('button.mat-calendar-previous-button');
            await previousMonthButton.click();
            targetCell = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)').first();
        }

        await targetCell.click();
        await expect(this.effectiveDateInput).not.toHaveValue('');
    }

    async verifyExpiryDateUserCanSelectOldDate(): Promise<void> {
        await this.expiryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const currentDayCell = await this.getCurrentCalendarDayCell(calendarPopup);
        await expect(currentDayCell).toBeVisible();

        const selectedDayText = (await currentDayCell.textContent())?.trim() || '';
        const selectedDay = Number.parseInt(selectedDayText, 10);

        const enabledCells = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)');
        const cellCount = await enabledCells.count();

        let targetCell: Locator | null = null;

        for (let i = 0; i < cellCount; i++) {
            const cell = enabledCells.nth(i);
            const dayText = (await cell.locator('.mat-calendar-body-cell-content').textContent())?.trim() || '';
            const day = Number.parseInt(dayText, 10);

            if (!Number.isNaN(day) && day < selectedDay) {
                targetCell = cell;
                break;
            }
        }

        if (!targetCell) {
            const previousMonthButton = calendarPopup.locator('button.mat-calendar-previous-button');
            await previousMonthButton.click();
            targetCell = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)').first();
        }

        await targetCell.click();
        await expect(this.expiryDateInput).not.toHaveValue('');
    }

    async verifyUserCanSelectFutureDate(): Promise<void> {
        await this.effectiveDateCalendarIcon.click();

        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const currentDayCell = await this.getCurrentCalendarDayCell(calendarPopup);
        await expect(currentDayCell).toBeVisible();

        const selectedDayText = (await currentDayCell.textContent())?.trim() || '';
        const selectedDay = Number.parseInt(selectedDayText, 10);

        const enabledCells = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)');
        const cellCount = await enabledCells.count();

        let targetCell: Locator | null = null;

        for (let i = 0; i < cellCount; i++) {
            const cell = enabledCells.nth(i);
            const dayText = (await cell.locator('.mat-calendar-body-cell-content').textContent())?.trim() || '';
            const day = Number.parseInt(dayText, 10);

            if (!Number.isNaN(day) && day > selectedDay) {
                targetCell = cell;
                break;
            }
        }

        if (!targetCell) {
            const nextMonthButton = calendarPopup.locator('button.mat-calendar-next-button');
            await nextMonthButton.click();
            targetCell = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)').first();
        }

        await targetCell.click();
        await expect(this.effectiveDateInput).not.toHaveValue('');
    }

    async verifyExpiryDateUserCanSelectFutureDate(): Promise<void> {
        await this.expiryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const currentDayCell = await this.getCurrentCalendarDayCell(calendarPopup);
        await expect(currentDayCell).toBeVisible();

        const selectedDayText = (await currentDayCell.textContent())?.trim() || '';
        const selectedDay = Number.parseInt(selectedDayText, 10);

        const enabledCells = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)');
        const cellCount = await enabledCells.count();

        let targetCell: Locator | null = null;

        for (let i = 0; i < cellCount; i++) {
            const cell = enabledCells.nth(i);
            const dayText = (await cell.locator('.mat-calendar-body-cell-content').textContent())?.trim() || '';
            const day = Number.parseInt(dayText, 10);

            if (!Number.isNaN(day) && day > selectedDay) {
                targetCell = cell;
                break;
            }
        }

        if (!targetCell) {
            const nextMonthButton = calendarPopup.locator('button.mat-calendar-next-button');
            await nextMonthButton.click();
            targetCell = calendarPopup.locator('button.mat-calendar-body-cell:not(.mat-calendar-body-disabled)').first();
        }

        await targetCell.click();
        await expect(this.expiryDateInput).not.toHaveValue('');
    }

    async verifyExpiryDateLessThanEffectiveDateIsNotAllowed(): Promise<void> {
        await this.verifyUserCanSelectFutureDate();

        const beforeExpiryValue = (await this.expiryDateInput.inputValue()).trim();

        await this.expiryDateCalendarIcon.click();
        const calendarPopup = this.page.locator('mat-datepicker-content');
        await expect(calendarPopup).toBeVisible();

        const previousMonthButton = calendarPopup.locator('button.mat-calendar-previous-button');
        const isPreviousMonthDisabled = await previousMonthButton.isDisabled();

        const disabledDayCells = calendarPopup.locator('td.mat-calendar-body-disabled .mat-calendar-body-cell-content');
        const disabledDayCount = await disabledDayCells.count();

        expect(
            isPreviousMonthDisabled || disabledDayCount > 0,
            'Expected old expiry dates to be restricted (disabled old dates or disabled previous month navigation)'
        ).toBeTruthy();

        if (disabledDayCount > 0) {
            await disabledDayCells.first().click({ force: true });
            await expect(this.expiryDateInput).toHaveValue(beforeExpiryValue);
        }
    }

    async verifyExpiryDateGreaterThanEffectiveDateIsAllowed(): Promise<void> {
        await this.verifyUserCanSelectOldDate();
        const effectiveValue = (await this.effectiveDateInput.inputValue()).trim();
        const effectiveDate = this.parseDateValue(effectiveValue);
        expect(effectiveDate, `Unable to parse effective date value: ${effectiveValue}`).not.toBeNull();

        await this.verifyExpiryDateUserCanSelectFutureDate();
        const expiryValue = (await this.expiryDateInput.inputValue()).trim();
        const expiryDate = this.parseDateValue(expiryValue);
        expect(expiryDate, `Unable to parse expiry date value: ${expiryValue}`).not.toBeNull();
        expect(expiryDate!.getTime()).toBeGreaterThan(effectiveDate!.getTime());
    }

    async verifyUserCanSelectSameExpiryAndEffectiveDate(): Promise<void> {
        await this.verifyUserCanSelectFutureDate();

        const effectiveValue = (await this.effectiveDateInput.inputValue()).trim();
        expect(effectiveValue).not.toBe('');

        await this.expiryDateInput.click();
        await this.expiryDateInput.fill('');
        await this.expiryDateInput.fill(effectiveValue);
        await this.expiryDateInput.press('Tab');

        await expect(this.expiryDateInput).toHaveValue(effectiveValue);

        const effectiveDate = this.parseDateValue(effectiveValue);
        const expiryDateValue = (await this.expiryDateInput.inputValue()).trim();
        const expiryDate = this.parseDateValue(expiryDateValue);

        expect(effectiveDate, `Unable to parse effective date value: ${effectiveValue}`).not.toBeNull();
        expect(expiryDate, `Unable to parse expiry date value: ${expiryDateValue}`).not.toBeNull();
        expect(expiryDate!.getTime()).toBe(effectiveDate!.getTime());
    }

    async selectSoloPaymentOrder(option: string) {
        await this.soloPaymentOrderDropdown.click();
        await this.page.locator('.cdk-overlay-pane mat-option', { hasText: option }).first().click();
    }

    async clickSearchAndVerifyResult() {
        await expect(this.searchButton).toBeEnabled({ timeout: 30000 });
        await this.searchButton.click();
        await this.appLoader.waitFor({ state: "hidden", timeout: 60000 });
        await expect(this.searchResults.first()).toBeVisible({ timeout: 60000 });
    }

    async verifySearchResultColumnsVisible() {
        await expect(this.nameColumn).toBeVisible();
        await expect(this.statusColumn).toBeVisible();
        await expect(this.startDateColumn).toBeVisible();
        await expect(this.stopDateColumn).toBeVisible();
        await expect(this.soloPaymentOrderColumn).toBeVisible();
        await expect(this.soloPaymentOrderTypeColumn).toBeVisible();
    }

    async verifySortingArrowsVisible() {
        await expect(this.nameUpArrow).toBeVisible();
        await expect(this.nameDownArrow).toBeVisible();
        await expect(this.statusUpArrow).toBeVisible();
        await expect(this.statusDownArrow).toBeVisible();
        await expect(this.startDateUpArrow).toBeVisible();
        await expect(this.startDateDownArrow).toBeVisible();
        await expect(this.stopDateUpArrow).toBeVisible();
        await expect(this.stopDateDownArrow).toBeVisible();
    }

    async verifyNameColumnSortedAscending() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.nameUpArrow.click();
        const actualValues = await this.nameColumnCells.allTextContents();
        const trimmedValues = actualValues.map(value => value.trim());
        const expectedSortedValues = [...trimmedValues].sort((a, b) =>a.localeCompare(b));
        expect(trimmedValues).toEqual(expectedSortedValues);
    }

    async verifyNameColumnSortedDescending() {
        await this.nameDownArrow.click();
        const actualValues = await this.nameColumnCells.allTextContents();
        const trimmedValues = actualValues.map(v => v.trim());
        const expectedSortedValues = [...trimmedValues].sort((a, b) =>
            b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }),
        );
        expect(trimmedValues).toEqual(expectedSortedValues);
        console.log("Name column is in descending order:", trimmedValues);
    }

    async verifySoloPaymentOrderCheckboxDisplayed() {
        await this.soloPaymentOrderCheckbox.waitFor({ state: 'visible', timeout: 5000 });
        const isVisible = await this.soloPaymentOrderCheckbox.isVisible();
        if (!isVisible) {
            throw new Error('Solo Payment Order checkbox is not displayed');
        }
        console.log('Solo Payment Order checkbox is displayed.');
    }

    async verifyCheckboxCheckUncheck() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.soloPaymentOrderCheckboxLabel.waitFor({ state: 'visible' });
        await expect(this.soloPaymentOrderCheckboxInput).not.toBeChecked();

        await this.soloPaymentOrderCheckboxLabel.click();
        await expect(this.soloPaymentOrderCheckboxInput).toBeChecked();
        console.log('Checkbox checked successfully');

        await this.soloPaymentOrderCheckboxLabel.click();
        await expect(this.soloPaymentOrderCheckboxInput).not.toBeChecked();
        console.log('Checkbox unchecked successfully');
    }

    async verifyMultipleRowSelection() {
        const count = await this.rowCheckboxes.count();
        console.log(`Number of row checkboxes found: ${count}`);
        expect(count).toBeGreaterThanOrEqual(2);

        for (let i = 0; i < count; i++) {
            await expect(this.rowCheckboxes.nth(i)).toBeVisible();
        }
        console.log('Multiple row checkboxes are visible to the user');
    }

    async verifySingleCheckboxToggle() {
        const checkboxLabel = this.soloPaymentOrderCheckboxLabel;
        const checkboxInput = this.soloPaymentOrderCheckboxInput;

        await checkboxLabel.waitFor({ state: 'visible' });

        await checkboxLabel.click();
        await expect(checkboxInput).toBeChecked({ timeout: 5000 });
        console.log('Checkbox checked successfully');

        await checkboxLabel.click();
        await expect(checkboxInput).not.toBeChecked({ timeout: 5000 });
        console.log('Checkbox unchecked successfully');
    }

    async selectAllRowsUsingHeaderCheckbox() {
        await this.headerCheckboxLabel.waitFor({ state: 'visible' });
        await this.headerCheckboxLabel.click();

        const rowCount = await this.rowCheckboxInputs.count();
        for (let i = 0; i < rowCount; i++) {
            await expect(this.rowCheckboxInputs.nth(i)).toBeChecked({ timeout: 5000 });
        }
        console.log(`All ${rowCount} row checkboxes selected successfully`);
    }

    async verifyCheckboxShowsDownArrow() {
        await this.soloPaymentOrderCheckboxLabel.click();
        await expect(this.soloPaymentOrderTypeDownArrow).toBeVisible();
        console.log('Down arrow is displayed after checking the checkbox');
    }

    async verifyUncheckShowsDownArrow() {
        if (await this.soloPaymentOrderCheckboxInput.isChecked()) {
            await this.soloPaymentOrderCheckboxLabel.click();
        }
        await expect(this.soloPaymentOrderTypeDownArrow).toBeVisible();
        console.log('Down arrow is displayed after unchecking the checkbox');
    }

    async verifyItemsPerPageLabelAndDropdownIsDisplayed(): Promise<void> {
        await expect(this.itemsPerPageLabel).toBeVisible();
        await expect(this.itemsPerPageDropdown).toBeVisible();
    }

    async verifyItemsPerPageDropdownOptionsAreDisplayed(){
        await this.itemsPerPageDropdown.click();
        await expect(this.page.locator('//mat-option//span')).toHaveText(['10','15','20','30','50','100','250']);
    }

    async verifyPreviousPageButtonIsDisabledAndTooltipIsNotDisplayed(): Promise<void> {
        await expect(this.previousPageButton).toBeDisabled();
        await expect(this.paginatorTooltip).toHaveCount(0);
    }

    async verifySaveButtonIsEnabled(): Promise<void> {
        await expect(this.saveBtn).toBeEnabled();
    }

    async verifySaveWithoutSearchShowsErrorMessage(): Promise<void> {
        await this.saveBtn.click();
        await this.errorMessageLocator.scrollIntoViewIfNeeded();
        await expect(this.errorMessageLocator).toBeVisible();
        await expect(this.errorMessageLocator).toContainText('You have to search first');
    }

    async verifyNothingHasChangedMessageOnSave(): Promise<void> {
        await this.saveBtn.scrollIntoViewIfNeeded();
        await this.saveBtn.click();
        await expect(this.infoMessageLocator).toBeVisible({ timeout: 5000 });
        await expect(this.infoMessageLocator).toContainText('Nothing has changed');
    }

    async selectSoloPaymentOrderType(newValue: string): Promise<void> {
        const cell = this.page.locator('td.mat-column-soloPaymentOrderType').first();
        await cell.waitFor({ state: 'visible', timeout: 10000 });
        await cell.click();
        const dropdownTrigger = cell.locator('.mat-mdc-select-trigger, .mat-select-trigger');
        await dropdownTrigger.waitFor({ state: 'visible', timeout: 10000 });
        await dropdownTrigger.click();
        const option = this.page.locator(`//div[contains(@class,'cdk-overlay-pane')]//mat-option//span[normalize-space(.)='${newValue}']`);
        await option.waitFor({ state: 'visible', timeout: 10000 });
        await option.click();
    }

    async updateSoloPaymentOrderTypeAndVerifySuccess(newValue: string): Promise<void> {
        await this.selectSoloPaymentOrderType(newValue);
        await this.saveBtn.scrollIntoViewIfNeeded();
        await this.saveBtn.click();
        await expect(this.successMessageLocator).toContainText('Record updated successfully !', { timeout: 5000 });
    }
    

}
