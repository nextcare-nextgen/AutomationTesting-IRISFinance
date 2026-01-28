import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
    readonly soloPaymentOrderDropdown: Locator;
    readonly effectiveDateInput: Locator;
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
        this.payerMandatorySymbol = this.payerLabel.locator('xpath=..//span[contains(@class,"mat-placeholder-required")]');
        this.payerInput = page.locator('#payersolopaymentorder input');
        this.searchButton = page.locator('button.search-button');
        this.searchResults = page.locator('table tbody tr');
        this.nameInput = page.locator("input[formcontrolname='name']");
        this.soloPaymentOrderDropdown = page.locator("mat-select[formcontrolname='soloPaymentOrder']");
        this.effectiveDateInput = page.locator("input[formcontrolname='effectiveDate']");
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
        this.soloPaymentOrderCheckbox = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox input.mat-checkbox-input');
        this.soloPaymentOrderCheckboxLabel = page.locator('th.cdk-column-soloPaymentOrder label.mat-checkbox-layout');
        this.soloPaymentOrderCheckboxInput = page.locator('th.cdk-column-soloPaymentOrder input.mat-checkbox-input');
        this.rowCheckboxes = page.locator('table tbody tr mat-checkbox');

        this.headerCheckboxLabel = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox label.mat-checkbox-layout');
        this.headerCheckboxInput = page.locator('th.cdk-column-soloPaymentOrder mat-checkbox input.mat-checkbox-input');
        this.rowCheckboxInputs = page.locator('table tbody tr mat-checkbox input.mat-checkbox-input');
        this.soloPaymentOrderTypeDownArrow = page.locator('th.cdk-column-soloPaymentOrderType .sort-div img[alt="Down Sorting Icon"]');
    }

    async searchAndClickFinancials() {  
        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await this.financials.click();
    }

    async clickOnSoloPaymentOrderSetup() {  
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.soloPaymentOrderSetup.scrollIntoViewIfNeeded();
        await this.soloPaymentOrderSetup.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
        await this.soloPaymentOrderSetup.click();
        await expect(this.soloPaymentOrderSetup).toBeVisible();
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
        await new Promise(resolve => setTimeout(resolve, 3000));
        await expect(this.payerMandatorySymbol).toBeVisible();
    }

    async searchPayer(payerName: string) {
        await expect(this.payerInput).toBeVisible({ timeout: 20000 });
        await this.payerInput.click();
        await this.payerInput.fill("");
        for (const char of payerName) {
            await this.payerInput.type(char, { delay: 200 });
        }

        const option = this.page.locator(".cdk-overlay-pane mat-option", { hasText: payerName }).first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();

        console.log(`Payer "${payerName}" selected successfully.`);
        await this.searchButton.click();
        const rows = this.page.locator("table tbody tr");
        await rows.first().waitFor({ state: "visible", timeout: 20000 });
        const visibleRowsCount = await rows.count();
        console.log(`Number of rows found: ${visibleRowsCount}`);
    }

    async searchPayerToVerify(payerName: string) {
        await this.payerInput.click();
        await this.payerInput.fill(payerName);
        await this.page.locator('.cdk-overlay-pane mat-option', { hasText: payerName }).first().click();
    } 

    async enterName(name: string) {
        await this.nameInput.fill(name);
    } 

    async enterEffectiveDate(date: string) {
        await this.effectiveDateInput.click();
        await this.effectiveDateInput.fill(date);
    }

    async selectSoloPaymentOrder(option: string) {
        await this.soloPaymentOrderDropdown.click();
        await this.page.locator('.cdk-overlay-pane mat-option', { hasText: option }).first().click();
    }

    async clickSearchAndVerifyResult() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.searchButton.click();
        await expect(this.searchResults.first()).toBeVisible({ timeout: 20000 });
    }

    async verifySearchResultColumnsVisible() {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(await this.nameColumn.isVisible()).toBeTruthy();
        expect(await this.statusColumn.isVisible()).toBeTruthy();
        expect(await this.startDateColumn.isVisible()).toBeTruthy();
        expect(await this.stopDateColumn.isVisible()).toBeTruthy();
        expect(await this.soloPaymentOrderColumn.isVisible()).toBeTruthy();
        expect(await this.soloPaymentOrderTypeColumn.isVisible()).toBeTruthy();
    }

    async verifySortingArrowsVisible() {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(await this.nameUpArrow.isVisible()).toBeTruthy();
        expect(await this.nameDownArrow.isVisible()).toBeTruthy();
        expect(await this.statusUpArrow.isVisible()).toBeTruthy();
        expect(await this.statusDownArrow.isVisible()).toBeTruthy();
        expect(await this.startDateUpArrow.isVisible()).toBeTruthy();
        expect(await this.startDateDownArrow.isVisible()).toBeTruthy();
        expect(await this.stopDateUpArrow.isVisible()).toBeTruthy();
        expect(await this.stopDateDownArrow.isVisible()).toBeTruthy();
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
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.waitForTimeout(2000);
        await this.nameDownArrow.click();
        const actualValues = await this.nameColumnCells.allTextContents();
        const trimmedValues = actualValues.map(v => v.trim());
        const expectedSortedValues = [...trimmedValues].sort((a, b) =>a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
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
        await expect(checkboxInput).toHaveAttribute('aria-checked', 'true', { timeout: 5000 });
        console.log('Checkbox checked successfully');

        await checkboxLabel.click();
        await expect(checkboxInput).toHaveAttribute('aria-checked', 'false', { timeout: 5000 });
        console.log('Checkbox unchecked successfully');
    }

    async selectAllRowsUsingHeaderCheckbox() {
        await this.headerCheckboxLabel.waitFor({ state: 'visible' });
        await this.headerCheckboxLabel.click();

        const rowCount = await this.rowCheckboxInputs.count();
        for (let i = 0; i < rowCount; i++) {
            await expect(this.rowCheckboxInputs.nth(i)).toHaveAttribute('aria-checked', 'true', { timeout: 5000 });
        }
        console.log(`All ${rowCount} row checkboxes selected successfully`);
    }

    async verifyCheckboxShowsDownArrow() {
        await this.soloPaymentOrderCheckboxLabel.click();
        await expect(this.soloPaymentOrderTypeDownArrow).toBeVisible();
        console.log('Down arrow is displayed after checking the checkbox');
    }

    async verifyUncheckShowsDownArrow() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const isChecked = await this.soloPaymentOrderCheckboxInput.getAttribute('aria-checked');
        if (isChecked === 'true') {
            await this.soloPaymentOrderCheckboxLabel.click();
        }
        await expect(this.soloPaymentOrderTypeDownArrow).toBeVisible();
        console.log('Down arrow is displayed after unchecking the checkbox');
    }

}
