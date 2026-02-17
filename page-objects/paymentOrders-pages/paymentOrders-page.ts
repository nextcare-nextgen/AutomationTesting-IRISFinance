import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class PaymentOrdersPage {

    readonly page: Page;
    readonly searchIcon: Locator;
    readonly financials: Locator;
    readonly paymentOrders: Locator;
    readonly payer: Locator;
    readonly currency: Locator;
    readonly account: Locator;
    readonly parentEntity: Locator;
    readonly idField: Locator;
    readonly labelField: Locator;
    readonly fromDate: Locator;
    readonly toDate: Locator;
    readonly fromReleaseDate: Locator;
    readonly toReleaseDate: Locator;
    readonly fromDeliveryDate: Locator;
    readonly toDeliveryDate: Locator;
    readonly batchId: Locator;
    readonly showOnlyNotDelivered: Locator;
    readonly capitation: Locator;
    readonly onlyUnsettled: Locator;
    readonly firstOrder: Locator;
    readonly sortByFirstOrder: Locator;
    readonly secondOrder: Locator;
    readonly sortBySecondOrder: Locator;
    readonly groupByPrincipal: Locator;
    readonly groupByBeneficiary: Locator;
    readonly showNotes: Locator;
    readonly breakByPolicy: Locator;
    readonly printTransactions: Locator;
    readonly printTransactions2: Locator;
    readonly printClaimsEvaluation: Locator;
    readonly autocompletePanel: Locator;
    readonly firstAutocompleteOptionText: Locator;
    readonly fromDateLabel: Locator;
    readonly fromDateTextbox: Locator;
    readonly fromDateCalendarIcon: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.paymentOrders = page.getByRole('link', { name: 'Payment Orders' });
        this.payer = page.locator("#mat-input-11");        
        this.currency = page.locator("#mat-input-12");    
        this.account = page.locator("mat-select[formcontrolname='account']"); 
        this.parentEntity = page.locator("#mat-input-13");
        this.idField = page.locator("input[formcontrolname='id']");
        this.labelField = page.locator("input[formcontrolname='label']");
        this.fromDate = page.locator("input[formcontrolname='fromDate']");
        this.toDate = page.locator("input[formcontrolname='toDate']");
        this.fromReleaseDate = page.locator("input[formcontrolname='fromReleaseDate']");
        this.toReleaseDate = page.locator("input[formcontrolname='toReleaseDate']");
        this.fromDeliveryDate = page.locator("input[formcontrolname='fromDeliveryDate']");
        this.toDeliveryDate = page.locator("input[formcontrolname='toDeliveryDate']");
        this.batchId = page.locator("input[formcontrolname='batchId']");
        this.showOnlyNotDelivered = page.getByText("Show Only Not Delivered", { exact: true });
        this.capitation = page.getByText("Capitation", { exact: true });
        this.onlyUnsettled = page.getByText("Only Unsettled Transactions", { exact: true });
        this.firstOrder = page.locator("mat-select[formcontrolname='firstOrder']");
        this.sortByFirstOrder = page.locator("mat-select[formcontrolname='sortByFirstOrder']");
        this.secondOrder = page.locator("mat-select[formcontrolname='secondOrder']");
        this.sortBySecondOrder = page.locator("mat-select[formcontrolname='sortBySecondOrder']");
        this.groupByPrincipal = page.getByText("Group By Principal", { exact: true });
        this.groupByBeneficiary = page.getByText("Group By Beneficiary", { exact: true });
        this.showNotes = page.getByText("Show Notes", { exact: true });
        this.breakByPolicy = page.getByText("Break By Policy", { exact: true });
        this.printTransactions = page.getByText("Print Transactions", { exact: true });
        this.printTransactions2 = page.getByText("Print Transactions 2", { exact: true });
        this.printClaimsEvaluation = page.getByText("Print Claims Evaluation", { exact: true });
        this.autocompletePanel = page.locator('div[role="listbox"]');
        this.firstAutocompleteOptionText = page.locator('span.custom-mat-option-text').first();
        this.fromDateLabel = page.locator('//mat-label[text()="From Date"]');
        this.fromDateTextbox = page.locator('//input[@id="fromdate"]');
        this.fromDateCalendarIcon = page.locator('//mat-icon[@matdatepickertoggleicon]').first();
    }

    async searchAndClickOnPaymentOrderUnderFinancials() {
        // await new Promise(resolve => setTimeout(resolve, 8000));
        // await this.page.waitForLoadState('networkidle');

        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await this.financials.click();
        await this.paymentOrders.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
        await this.paymentOrders.click();
    }

    async allFieldsOfPaymentOrder() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.payer.evaluate(el => el.style.border = "3px solid red");
        await expect(this.payer).toBeVisible();
        await this.currency.evaluate(el => el.style.border = "3px solid red");
        await expect(this.currency).toBeVisible();
        await this.account.evaluate(el => el.style.border = "3px solid red");
        await expect(this.account).toBeVisible();
        await this.parentEntity.evaluate(el => el.style.border = "3px solid red");
        await expect(this.parentEntity).toBeVisible();
        await this.idField.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await expect(this.idField).toBeVisible();
        await this.labelField.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await expect(this.labelField).toBeVisible();
        await this.fromDate.evaluate(el => el.style.border = "3px solid red");
        await expect(this.fromDate).toBeVisible();  
        await this.toDate.evaluate(el => el.style.border = "3px solid red");
        await expect(this.toDate).toBeVisible();
        await this.fromReleaseDate.evaluate(el => el.style.border = "3px solid red");
        await expect(this.fromReleaseDate).toBeVisible();
        await this.toReleaseDate.evaluate(el => el.style.border = "3px solid red");
        await expect(this.toReleaseDate).toBeVisible();
        await this.fromDeliveryDate.evaluate(el => el.style.border = "3px solid red");
        await expect(this.fromDeliveryDate).toBeVisible();
        await this.toDeliveryDate.evaluate(el => el.style.border = "3px solid red");
        await expect(this.toDeliveryDate).toBeVisible();
        await this.batchId.evaluate(el => el.style.border = "3px solid red");
        await expect(this.batchId).toBeVisible();
        await this.showOnlyNotDelivered.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.showOnlyNotDelivered).toBeVisible();
        await this.capitation.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.capitation).toBeVisible();
        await this.onlyUnsettled.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.onlyUnsettled).toBeVisible();
    }

    async allFieldsOfPaymentOrderReportPrefrences() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.firstOrder.evaluate(el => el.style.border = "3px solid green");
        await expect(this.firstOrder).toBeVisible();
        await this.sortByFirstOrder.evaluate(el => el.style.border = "3px solid green");
        await expect(this.sortByFirstOrder).toBeVisible();
        await this.secondOrder.evaluate(el => el.style.border = "3px solid green");
        await expect(this.secondOrder).toBeVisible();
        await this.sortBySecondOrder.evaluate(el => el.style.border = "3px solid green");
        await expect(this.sortBySecondOrder).toBeVisible();
        await this.groupByPrincipal.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.groupByPrincipal).toBeVisible();
        await this.groupByBeneficiary.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.groupByBeneficiary).toBeVisible();
        await this.showNotes.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.showNotes).toBeVisible();
        await this.breakByPolicy.evaluate(el => el.style.border = "3px solid blue");
        await expect(this.breakByPolicy).toBeVisible();
    }

    async allFieldsOfPaymentOrderTransactionDisplays() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.printTransactions.evaluate(el => el.style.border = "3px solid orange");
        await expect(this.printTransactions).toBeVisible();
        await this.printTransactions2.evaluate(el => el.style.border = "3px solid orange");
        await expect(this.printTransactions2).toBeVisible();
        await this.printClaimsEvaluation.evaluate(el => el.style.border = "3px solid orange");
        await expect(this.printClaimsEvaluation).toBeVisible();
    }

    async verifyParentEntityTextboxAcceptsAlphabets() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = 'TESTENTITY';
        await this.parentEntity.fill(testValue);
        await expect(this.parentEntity).toHaveValue(testValue);
    }

    async verifyParentEntityTextboxAcceptNumberss() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = '12345';
        await this.parentEntity.fill(testValue);
        await expect(this.parentEntity).toHaveValue(testValue);
    }

    async verifyParentEntityTextboxAcceptSpecialCharacters() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = '!@#$%^&*()_+-={}[]|;:"<>,.?/~`';
        await this.parentEntity.fill(testValue);
        await expect(this.parentEntity).toHaveValue(testValue);
    }

    async verifyParentEntityTextboxAcceptBlankSpaces() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = 'Parent Entity Test';
        await this.parentEntity.fill(testValue);
        await expect(this.parentEntity).toHaveValue(testValue);
    }

    async verifyParentEntityTextboxAcceptLeadingTrailingSpaces() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = '   ParentEntity   ';
        await this.parentEntity.fill(testValue);
        await expect(this.parentEntity).toHaveValue(testValue);
    }

    async verifyParentEntityAutocompleteListShown() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const testValue = 'test';
        await this.parentEntity.focus();
        await this.parentEntity.type(testValue, { delay: 200 });
        await expect(this.autocompletePanel).toBeVisible({ timeout: 9000 });
        await expect(this.firstAutocompleteOptionText).toContainText(testValue);
        // await this.firstAutocompleteOptionText.click();
        // const selectedValue = await this.parentEntity.inputValue();
        // expect(selectedValue.toLowerCase()).toBe(testValue.toLowerCase());
    }

    async verifyUserCanSelectValueFromParentEntityList() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const testValue = 'test';
        await this.parentEntity.focus();
        await this.parentEntity.type(testValue, { delay: 200 });
        await expect(this.autocompletePanel).toBeVisible({ timeout: 5000 });
        await expect(this.firstAutocompleteOptionText).toContainText(testValue);
        await this.firstAutocompleteOptionText.click();
        const selectedValue = await this.parentEntity.inputValue();
        expect(selectedValue.toLowerCase()).toBe(testValue.toLowerCase());
    }

    async verifyUserCanSelectOnlyOneValueAtATime() {
        const firstValue = 'test';
        const secondValue = 'demo';

        await this.parentEntity.fill('');
        await this.parentEntity.type(firstValue, { delay: 200 });
        await this.firstAutocompleteOptionText.click();
        await this.parentEntity.type(secondValue, { delay: 200 });
        await this.firstAutocompleteOptionText.click();
        const selectedValue = await this.parentEntity.inputValue();
        expect(selectedValue.toLowerCase()).toBe(firstValue.toLowerCase());
    }

    async verifyIdTextboxNotAcceptsAlphabets() {
        const alphabetValue = 'TESTENTITY';
        await this.idField.click();
        await this.idField.pressSequentially(alphabetValue);
        const actualValue = await this.idField.inputValue();
        expect(actualValue).toBe('');
    }

    async verifyIdTextboxAcceptsnumbers() {
        await this.idField.click();
        await this.idField.pressSequentially('123ABC');
        const value = await this.idField.inputValue();
        expect(value).toBe('123');
    }

    async verifyIdTextboxNotAcceptsSpecialCharacter() {
        const specialCharacters = '!@#$%^&*()';
        await this.idField.click();
        await this.idField.pressSequentially(specialCharacters);
        const actualValue = await this.idField.inputValue();
        expect(actualValue).toBe('');
    }

    async verifyIdTextboxAcceptsBlankValue() {
        await this.idField.fill('');
        await this.idField.blur();
        const actualValue = await this.idField.inputValue();
        expect(actualValue).toBe('');
    }

    async verifyIdTextboxDoesNotAcceptLeadingTrailingSpaces() {
        const valueWithSpaces = ' 123 ';
        const expectedValue = '123'; 
        await this.idField.click();
        await this.idField.pressSequentially(valueWithSpaces);
        const actualValue = await this.idField.inputValue();
        expect(actualValue).toBe(expectedValue);
    }

    async verifyLabelTextboxAcceptsAlphabets() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = 'TESTENTITY';
        await this.labelField.fill(testValue);
        await expect(this.labelField).toHaveValue(testValue);
    }

    async verifyLabelTextboxAcceptNumberss() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = '12345';
        await this.labelField.fill(testValue);
        await expect(this.labelField).toHaveValue(testValue);
    }

    async verifyLabelTextboxAcceptSpecialCharacters() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = '!@#$%^&*()_+-={}[]|;:"<>,.?/~`';
        await this.labelField.fill(testValue);
        await expect(this.labelField).toHaveValue(testValue);
    }

    async verifyLabelTextboxAcceptBlankSpaces() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = 'Label Test';
        await this.labelField.fill(testValue);
        await expect(this.labelField).toHaveValue(testValue);
    }

    async verifyLabelTextboxAcceptLeadingTrailingSpaces() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const testValue = '   LabelEntity   ';
        await this.labelField.fill(testValue);
        await expect(this.labelField).toHaveValue(testValue);
    }

    async verifyFromDateLabelAndTextboxDisplayed() {
        await expect(this.fromDateLabel).toBeVisible();
        await expect(this.fromDateTextbox).toBeVisible();
    }

    async verifyFromDateCalendarIconDisplayed() {
        await expect(this.fromDateCalendarIcon).toBeVisible();
    }

    async verifyFromDateCalendarOpensWithCurrentDate() {
        await this.fromDateCalendarIcon.click();
        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 5000 });
        const today = new Date();
        const todayDate = today.getDate().toString();
        const selectedDate = calendarPopup.locator(`//td[contains(@class,"mat-calendar-body-selected")]`);
        await expect(selectedDate).toHaveText(todayDate);
    }


}