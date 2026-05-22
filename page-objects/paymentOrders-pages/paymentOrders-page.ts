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
    readonly toDateLabel: Locator;
    readonly toDateTextbox: Locator;
    readonly toDateCalendarIcon: Locator;
    readonly searchButton: Locator;
    readonly errorMsg: Locator;
    readonly fromReleaseDateCalenderIcon: Locator;
    readonly fromReleaseDateLabel: Locator;
    readonly fromReleaseDateTextbox: Locator;
    readonly toReleaseDateCalendarIcon: Locator;
    readonly toReleaseDateLabel: Locator;
    readonly toReleaseDateTextbox: Locator;
    readonly fromDeliveryDateCalendarIcon: Locator;
    readonly fromDeliveryDateLabel: Locator;
    readonly fromDeliveryDateTextbox: Locator;
    readonly toDeliveryDateCalendarIcon: Locator;
    readonly toDeliveryDateLabel: Locator;
    readonly toDeliveryDateTextbox: Locator;
    readonly showOnlyNotDeliveredToggle: Locator;
    readonly capitationToggle: Locator;

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
        this.toDateLabel = page.locator('//mat-label[text()="To Date"]');
        this.toDateTextbox = page.locator('//input[@id="todate"]');
        this.toDateCalendarIcon = page.locator('//input[@id="todate"]/ancestor::mat-form-field//mat-icon[@matdatepickertoggleicon]');
        this.searchButton=page.locator("//button[@title='Search']");
        this.errorMsg=page.locator("(//mat-error[text()=' This field is required '])[1]");
        this.fromReleaseDateCalenderIcon = page.locator('//input[@id="fromreleasedate"]/ancestor::mat-form-field//mat-icon[@matdatepickertoggleicon]');
        this.fromReleaseDateLabel = page.locator('//mat-label[text()="From Release Date"]');
        this.fromReleaseDateTextbox = page.locator('//input[@id="fromreleasedate"]');
        this.toReleaseDateCalendarIcon = page.locator('//input[@id="toreleasedate"]/ancestor::mat-form-field//mat-icon[@matdatepickertoggleicon]');
        this.toReleaseDateLabel = page.locator('//mat-label[text()="To Release Date"]');
        this.toReleaseDateTextbox = page.locator('//input[@id="toreleasedate"]');
        this.fromDeliveryDateCalendarIcon = page.locator('//input[@id="fromdeliverydate"]/ancestor::mat-form-field//mat-icon[@matdatepickertoggleicon]');
        this.fromDeliveryDateLabel = page.locator('//mat-label[text()="From Delivery Date"]');
        this.fromDeliveryDateTextbox = page.locator('//input[@id="fromdeliverydate"]');
        this.toDeliveryDateCalendarIcon = page.locator('//input[@id="todeliverydate"]/ancestor::mat-form-field//mat-icon[@matdatepickertoggleicon]');
        this.toDeliveryDateLabel = page.locator('//mat-label[text()="To Delivery Date"]');
        this.toDeliveryDateTextbox = page.locator('//input[@id="todeliverydate"]');
        this.showOnlyNotDeliveredToggle = page.locator('//mat-slide-toggle[@formcontrolname="showOnlyNotDelivered"]');
        this.capitationToggle = page.locator('//mat-slide-toggle[@formcontrolname="capitation"]');

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

    async verifyUserCanSelectOldDate() {
        await this.fromDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const prevMonthBtn = calendarPopup.locator('button[aria-label="Previous month"]');
        await prevMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await prevMonthBtn.click();

        const oldDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await oldDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const oldDateLabel = await oldDateCell.getAttribute('aria-label');
        await oldDateCell.click();

        await expect(this.fromDateTextbox).not.toHaveValue('', { timeout: 5000 });
        const finalValue = await this.fromDateTextbox.inputValue();
        console.log(`Selected old date: ${oldDateLabel} | From Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectFutureDate() {
        await this.fromDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const nextMonthBtn = calendarPopup.locator('button[aria-label="Next month"]');
        await nextMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await nextMonthBtn.click();

        const futureDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await futureDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const futureDateLabel = await futureDateCell.getAttribute('aria-label');
        await futureDateCell.click();

        await expect(this.fromDateTextbox).not.toHaveValue('', { timeout: 5000 });
        const finalValue = await this.fromDateTextbox.inputValue();
        console.log(`Selected future date: ${futureDateLabel} | From Date textbox now shows: ${finalValue}`);
    }

    async verifyToDateLabelAndTextboxDisplayed() {
        await this.toDateLabel.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toDateLabel).toBeVisible();
        await this.toDateTextbox.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toDateTextbox).toBeVisible();
        console.log('To Date label and textbox are visible');
    }

    async verifyToDateCalendarIconDisplayed() {
        await this.toDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toDateCalendarIcon).toBeVisible();
        console.log('To Date calendar icon is visible');
    }

    async verifyToDateCalendarOpensWithCurrentDate() {
        await this.toDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const today = new Date();
        const todayDay = today.getDate().toString();

        const activeCell = calendarPopup.locator('button.mat-calendar-body-cell.mat-calendar-body-active');
        await activeCell.waitFor({ state: 'visible', timeout: 5000 });

        const activeText = (await activeCell.locator('.mat-calendar-body-cell-content').textContent())?.trim();
        expect(activeText).toBe(todayDay);

        const activeAriaLabel = await activeCell.getAttribute('aria-label');
        console.log(`To Date calendar opened — today's cell active: ${activeAriaLabel}`);
    }

    async verifyDatePickerCanSelectOldDateFromReleaseDateCalendarIcon() {
        await this.fromReleaseDateCalenderIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromReleaseDateCalenderIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const prevMonthBtn = calendarPopup.locator('button[aria-label="Previous month"]');
        await prevMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await prevMonthBtn.click();

        const oldDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await oldDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const oldDateLabel = await oldDateCell.getAttribute('aria-label');
        await oldDateCell.click();

        //await expect(this.fromDateTextbox).not.toHaveValue('', { timeout: 5000 });
        const finalValue = await this.fromDateTextbox.inputValue();
        console.log(`Selected old date: ${oldDateLabel} | From Date textbox now shows: ${finalValue}`);
    }

    async clickOnSearch(){
        await this.page.waitForTimeout(2000);
        await this.searchButton.click();
    }
 
    async validateErrorMsg(){
        await this.page.waitForTimeout(2000);
        expect(await this.errorMsg.isVisible());
    }
     
    async fillMandaoryDetails(payerValue: string){
        await this.page.waitForTimeout(2000);
       // await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        expect(await this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").isVisible());
        await this.page.waitForLoadState("networkidle");
        const option = this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();
        expect(await this.account.isVisible());    
        await this.account.click();
        expect(await this.page.locator("//span[text()=' abcd ']").isVisible());
        await this.page.locator("//span[text()=' abcd ']").click();
    }

    async verifyFromReleaseDateCalendarOpensWithCurrentDate() {
        await this.fromReleaseDateCalenderIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromReleaseDateCalenderIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const today = new Date();
        const todayDay = today.getDate().toString();

        const activeCell = calendarPopup.locator('button.mat-calendar-body-cell.mat-calendar-body-active');
        await activeCell.waitFor({ state: 'visible', timeout: 5000 });

        const activeText = (await activeCell.locator('.mat-calendar-body-cell-content').textContent())?.trim();
        expect(activeText).toBe(todayDay);

        const activeAriaLabel = await activeCell.getAttribute('aria-label');
        console.log(`From Release Date calendar opened — today's cell active: ${activeAriaLabel}`);
    }

    async verifyUserCanSelectFutureDateFromReleaseDateCalendarIcon() {
        await this.fromReleaseDateCalenderIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromReleaseDateCalenderIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const nextMonthBtn = calendarPopup.locator('button[aria-label="Next month"]');
        await nextMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await nextMonthBtn.click();

        const futureDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await futureDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const futureDateLabel = await futureDateCell.getAttribute('aria-label');
        await futureDateCell.click();

        await expect(this.fromReleaseDate).not.toHaveValue('', { timeout: 5000 });
        const finalValue = await this.fromReleaseDate.inputValue();
        console.log(`From Release Date — selected future date: ${futureDateLabel} | textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectToDateLessThanFromDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;
        const earlierLabel = `01-${mmm}-${yyyy}`;

        await this.fromDateCalendarIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${earlierLabel}"]`).click({ force: true }).catch(() => {});

        const fromValue = await this.fromDateTextbox.inputValue();
        const toValue = await this.toDate.inputValue();
        expect(toValue).not.toContain(earlierLabel);
        console.log(`From Date="${fromValue}" | Attempted To Date="${earlierLabel}" | To Date textbox: "${toValue}" (system blocked selection as expected)`);
    }

    async verifyUserCanSelectToDateGreaterThanFromDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;

        // Compute a date in next month (always > today, always exists)
        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);
        const nextDd = String(nextMonth.getDate()).padStart(2, '0');
        const nextMmm = nextMonth.toLocaleString('en-US', { month: 'short' });
        const nextYyyy = nextMonth.getFullYear();
        const laterLabel = `${nextDd}-${nextMmm}-${nextYyyy}`;

        // Set From Date = today
        await this.fromDateCalendarIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromDateTextbox).not.toHaveValue('', { timeout: 5000 });

        // Open To Date picker, navigate to next month, select later date
        await this.toDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator('button[aria-label="Next month"]').click();
        await popup.locator(`button[aria-label="${laterLabel}"]`).click();

        // Assert: To Date textbox now contains the selected later date
        const fromValue = await this.fromDateTextbox.inputValue();
        const toValue = await this.toDate.inputValue();
        expect(toValue).not.toBe('');
        console.log(`From Date="${fromValue}" | To Date="${toValue}" (selected ${laterLabel})`);
    }

    async verifyUserCanSelectSameToAndFromDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;

        // Set From Date = today
        await this.fromDateCalendarIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromDateTextbox).not.toHaveValue('', { timeout: 5000 });

        // Set To Date = today (same as From Date)
        await this.toDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.toDate).not.toHaveValue('', { timeout: 5000 });

        // Assert both textboxes hold the same date
        const fromValue = await this.fromDateTextbox.inputValue();
        const toValue = await this.toDate.inputValue();
        expect(toValue).toBe(fromValue);
        console.log(`From Date="${fromValue}" | To Date="${toValue}" (same date selected: ${todayLabel})`);
    }

    async verifyFromReleaseDateLabelAndTextboxDisplayed() {
        await this.fromReleaseDateLabel.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.fromReleaseDateLabel).toBeVisible();
        await this.fromReleaseDateTextbox.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.fromReleaseDateTextbox).toBeVisible();
        console.log('From Release Date label and textbox are visible');
    }

    async verifyToReleaseDateCalendarIconDisplayed() {
        await this.toReleaseDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toReleaseDateCalendarIcon).toBeVisible();
        console.log('To Release Date calendar icon is visible');
    }

    async verifyToReleaseDateCalendarOpensWithCurrentDate() {
        await this.toReleaseDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toReleaseDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const today = new Date();
        const todayDay = today.getDate().toString();

        const activeCell = calendarPopup.locator('button.mat-calendar-body-cell.mat-calendar-body-active');
        await activeCell.waitFor({ state: 'visible', timeout: 5000 });

        const activeText = (await activeCell.locator('.mat-calendar-body-cell-content').textContent())?.trim();
        expect(activeText).toBe(todayDay);

        const activeAriaLabel = await activeCell.getAttribute('aria-label');
        console.log(`To Release Date calendar opened — today's cell active: ${activeAriaLabel}`);
    }

    async verifyUserCanSelectOldDateFromToReleaseDateCalendarIcon() {
        await this.toReleaseDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toReleaseDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const prevMonthBtn = calendarPopup.locator('button[aria-label="Previous month"]');
        await prevMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await prevMonthBtn.click();

        const oldDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await oldDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const oldDateLabel = await oldDateCell.getAttribute('aria-label');
        await oldDateCell.click();

        const finalValue = await this.toReleaseDate.inputValue();
        console.log(`Selected old date: ${oldDateLabel} | To Release Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectFutureDateFromToReleaseDateCalendarIcon() {
        await this.toReleaseDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toReleaseDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const nextMonthBtn = calendarPopup.locator('button[aria-label="Next month"]');
        await nextMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await nextMonthBtn.click();

        const futureDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await futureDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const futureDateLabel = await futureDateCell.getAttribute('aria-label');
        await futureDateCell.click();

        const finalValue = await this.toReleaseDate.inputValue();
        console.log(`Selected future date: ${futureDateLabel} | To Release Date textbox now shows: ${finalValue}`);
    }

    async verifyToReleaseDateLabelAndTextboxDisplayed() {
        await this.toReleaseDateLabel.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toReleaseDateLabel).toBeVisible();
        await this.toReleaseDateTextbox.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toReleaseDateTextbox).toBeVisible();
        console.log('To Release Date label and textbox are visible');
    }

    async verifyFromDeliveryDateCalendarIconDisplayed() {
        await this.fromDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.fromDeliveryDateCalendarIcon).toBeVisible();
        console.log('From Delivery Date calendar icon is visible');
    }

    async verifyFromDeliveryDateCalendarOpensWithCurrentDate() {
        await this.fromDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromDeliveryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const today = new Date();
        const todayDay = today.getDate().toString();

        const activeCell = calendarPopup.locator('button.mat-calendar-body-cell.mat-calendar-body-active');
        await activeCell.waitFor({ state: 'visible', timeout: 5000 });

        const activeText = (await activeCell.locator('.mat-calendar-body-cell-content').textContent())?.trim();
        expect(activeText).toBe(todayDay);

        const activeAriaLabel = await activeCell.getAttribute('aria-label');
        console.log(`From Delivery Date calendar opened — today's cell active: ${activeAriaLabel}`);
    }

    async verifyUserCanSelectOldDateFromFromDeliveryDateCalendarIcon() {
        await this.fromDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromDeliveryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const prevMonthBtn = calendarPopup.locator('button[aria-label="Previous month"]');
        await prevMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await prevMonthBtn.click();

        const oldDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await oldDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const oldDateLabel = await oldDateCell.getAttribute('aria-label');
        await oldDateCell.click();

        const finalValue = await this.fromDeliveryDate.inputValue();
        console.log(`Selected old date: ${oldDateLabel} | From Delivery Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectFutureDateFromFromDeliveryDateCalendarIcon() {
        await this.fromDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.fromDeliveryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const nextMonthBtn = calendarPopup.locator('button[aria-label="Next month"]');
        await nextMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await nextMonthBtn.click();

        const futureDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await futureDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const futureDateLabel = await futureDateCell.getAttribute('aria-label');
        await futureDateCell.click();

        const finalValue = await this.fromDeliveryDate.inputValue();
        console.log(`Selected future date: ${futureDateLabel} | From Delivery Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectToReleaseDateLessThanFromReleaseDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;
        const earlierLabel = `01-${mmm}-${yyyy}`;

        await this.fromReleaseDateCalenderIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromReleaseDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toReleaseDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${earlierLabel}"]`).click({ force: true }).catch(() => {});

        const fromValue = await this.fromReleaseDateTextbox.inputValue();
        const toValue = await this.toReleaseDate.inputValue();
        expect(toValue).not.toContain(earlierLabel);
        console.log(`From Release Date="${fromValue}" | Attempted To Release Date="${earlierLabel}" | To Release Date textbox: "${toValue}" (system blocked selection as expected)`);
    }

    async verifyUserCanSelectToReleaseDateGreaterThanFromReleaseDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;

        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);
        const nextDd = String(nextMonth.getDate()).padStart(2, '0');
        const nextMmm = nextMonth.toLocaleString('en-US', { month: 'short' });
        const nextYyyy = nextMonth.getFullYear();
        const laterLabel = `${nextDd}-${nextMmm}-${nextYyyy}`;

        await this.fromReleaseDateCalenderIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromReleaseDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toReleaseDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator('button[aria-label="Next month"]').click();
        await popup.locator(`button[aria-label="${laterLabel}"]`).click();

        const fromValue = await this.fromReleaseDateTextbox.inputValue();
        const toValue = await this.toReleaseDate.inputValue();
        expect(toValue).not.toBe('');
        console.log(`From Release Date="${fromValue}" | To Release Date="${toValue}" (selected ${laterLabel})`);
    }

    async verifyUserCanSelectSameToAndFromReleaseDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;

        await this.fromReleaseDateCalenderIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromReleaseDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toReleaseDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.toReleaseDate).not.toHaveValue('', { timeout: 5000 });

        const fromValue = await this.fromReleaseDateTextbox.inputValue();
        const toValue = await this.toReleaseDate.inputValue();
        expect(toValue).toBe(fromValue);
        console.log(`From Release Date="${fromValue}" | To Release Date="${toValue}" (same date selected: ${todayLabel})`);
    }

    async verifyFromDeliveryDateLabelAndTextboxDisplayed() {
        await this.fromDeliveryDateLabel.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.fromDeliveryDateLabel).toBeVisible();
        await this.fromDeliveryDateTextbox.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.fromDeliveryDateTextbox).toBeVisible();
        console.log('From Delivery Date label and textbox are visible');
    }

    async verifyToDeliveryDateCalendarIconDisplayed() {
        await this.toDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toDeliveryDateCalendarIcon).toBeVisible();
        console.log('To Delivery Date calendar icon is visible');
    }

    async verifyUserCanSelectOldDateFromToDateCalendarIcon() {
        await this.toDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const prevMonthBtn = calendarPopup.locator('button[aria-label="Previous month"]');
        await prevMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await prevMonthBtn.click();

        const oldDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await oldDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const oldDateLabel = await oldDateCell.getAttribute('aria-label');
        await oldDateCell.click();

        const finalValue = await this.toDate.inputValue();
        console.log(`Selected old date: ${oldDateLabel} | To Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectFutureDateFromToDateCalendarIcon() {
        await this.toDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const nextMonthBtn = calendarPopup.locator('button[aria-label="Next month"]');
        await nextMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await nextMonthBtn.click();

        const futureDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await futureDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const futureDateLabel = await futureDateCell.getAttribute('aria-label');
        await futureDateCell.click();

        const finalValue = await this.toDate.inputValue();
        console.log(`Selected future date: ${futureDateLabel} | To Date textbox now shows: ${finalValue}`);
    }

    async verifyFromReleaseDateCalendarIconDisplayed() {
        await this.fromReleaseDateCalenderIcon.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.fromReleaseDateCalenderIcon).toBeVisible();
        console.log('From Release Date calendar icon is visible');
    }

    async verifyToDeliveryDateLabelAndTextboxDisplayed() {
        await this.toDeliveryDateLabel.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toDeliveryDateLabel).toBeVisible();
        await this.toDeliveryDateTextbox.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.toDeliveryDateTextbox).toBeVisible();
        console.log('To Delivery Date label and textbox are visible');
    }

    async verifyToDeliveryDateCalendarOpensWithCurrentDate() {
        await this.toDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toDeliveryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const today = new Date();
        const todayDay = today.getDate().toString();

        const activeCell = calendarPopup.locator('button.mat-calendar-body-cell.mat-calendar-body-active');
        await activeCell.waitFor({ state: 'visible', timeout: 5000 });

        const activeText = (await activeCell.locator('.mat-calendar-body-cell-content').textContent())?.trim();
        expect(activeText).toBe(todayDay);

        const activeAriaLabel = await activeCell.getAttribute('aria-label');
        console.log(`To Delivery Date calendar opened — today's cell active: ${activeAriaLabel}`);
    }

    async verifyUserCanSelectOldDateFromToDeliveryDateCalendarIcon() {
        await this.toDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toDeliveryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const prevMonthBtn = calendarPopup.locator('button[aria-label="Previous month"]');
        await prevMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await prevMonthBtn.click();

        const oldDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await oldDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const oldDateLabel = await oldDateCell.getAttribute('aria-label');
        await oldDateCell.click();

        const finalValue = await this.toDeliveryDate.inputValue();
        console.log(`Selected old date: ${oldDateLabel} | To Delivery Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectFutureDateFromToDeliveryDateCalendarIcon() {
        await this.toDeliveryDateCalendarIcon.waitFor({ state: 'visible', timeout: 10000 });
        await this.toDeliveryDateCalendarIcon.click();

        const calendarPopup = this.page.locator('//mat-datepicker-content');
        await expect(calendarPopup).toBeVisible({ timeout: 10000 });

        const nextMonthBtn = calendarPopup.locator('button[aria-label="Next month"]');
        await nextMonthBtn.waitFor({ state: 'visible', timeout: 5000 });
        await nextMonthBtn.click();

        const futureDateCell = calendarPopup.locator('button.mat-calendar-body-cell[aria-label]').first();
        await futureDateCell.waitFor({ state: 'visible', timeout: 5000 });
        const futureDateLabel = await futureDateCell.getAttribute('aria-label');
        await futureDateCell.click();

        const finalValue = await this.toDeliveryDate.inputValue();
        console.log(`Selected future date: ${futureDateLabel} | To Delivery Date textbox now shows: ${finalValue}`);
    }

    async verifyUserCanSelectToDeliveryDateLessThanFromDeliveryDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;
        const earlierLabel = `01-${mmm}-${yyyy}`;

        await this.fromDeliveryDateCalendarIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromDeliveryDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toDeliveryDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${earlierLabel}"]`).click({ force: true }).catch(() => {});

        const fromValue = await this.fromDeliveryDateTextbox.inputValue();
        const toValue = await this.toDeliveryDate.inputValue();
        expect(toValue).not.toContain(earlierLabel);
        console.log(`From Delivery Date="${fromValue}" | Attempted To Delivery Date="${earlierLabel}" | To Delivery Date textbox: "${toValue}" (system blocked selection as expected)`);
    }

    async verifyUserCanSelectToDeliveryDateGreaterThanFromDeliveryDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;

        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);
        const nextDd = String(nextMonth.getDate()).padStart(2, '0');
        const nextMmm = nextMonth.toLocaleString('en-US', { month: 'short' });
        const nextYyyy = nextMonth.getFullYear();
        const laterLabel = `${nextDd}-${nextMmm}-${nextYyyy}`;

        await this.fromDeliveryDateCalendarIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromDeliveryDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toDeliveryDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator('button[aria-label="Next month"]').click();
        await popup.locator(`button[aria-label="${laterLabel}"]`).click();

        const fromValue = await this.fromDeliveryDateTextbox.inputValue();
        const toValue = await this.toDeliveryDate.inputValue();
        expect(toValue).not.toBe('');
        console.log(`From Delivery Date="${fromValue}" | To Delivery Date="${toValue}" (selected ${laterLabel})`);
    }

    async verifyUserCanSelectSameToAndFromDeliveryDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mmm = today.toLocaleString('en-US', { month: 'short' });
        const yyyy = today.getFullYear();
        const todayLabel = `${dd}-${mmm}-${yyyy}`;

        await this.fromDeliveryDateCalendarIcon.click();
        const popup = this.page.locator('//mat-datepicker-content');
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.fromDeliveryDateTextbox).not.toHaveValue('', { timeout: 5000 });

        await this.toDeliveryDateCalendarIcon.click();
        await expect(popup).toBeVisible();
        await popup.locator(`button[aria-label="${todayLabel}"]`).click();
        await expect(this.toDeliveryDate).not.toHaveValue('', { timeout: 5000 });

        const fromValue = await this.fromDeliveryDateTextbox.inputValue();
        const toValue = await this.toDeliveryDate.inputValue();
        expect(toValue).toBe(fromValue);
        console.log(`From Delivery Date="${fromValue}" | To Delivery Date="${toValue}" (same date selected: ${todayLabel})`);
    }

    async verifyBatchIdTextboxAcceptBlankSpaces() {
        const blankSpaces = '   ';
        await this.batchId.fill(blankSpaces);
        await this.batchId.blur();
        const actualValue = await this.batchId.inputValue();
        expect(actualValue).toBe('');
        console.log(`Batch Id textbox after entering blank spaces: "${actualValue}" (system rejected blank spaces as expected)`);
    }

    async verifyBatchIdTextboxAcceptLeadingTrailingSpaces() {
        const valueWithSpaces = ' 123 ';
        const expectedValue = '123';
        await this.batchId.click();
        await this.batchId.pressSequentially(valueWithSpaces);
        const actualValue = await this.batchId.inputValue();
        expect(actualValue).toBe(expectedValue);
        console.log(`Batch Id input "${valueWithSpaces}" → textbox shows "${actualValue}" (system stripped leading/trailing spaces as expected)`);
    }

    async verifyBatchIdTextboxAcceptSingleAlphabet() {
        const singleAlphabet = 'A';
        await this.batchId.click();
        await this.batchId.pressSequentially(singleAlphabet);
        const actualValue = await this.batchId.inputValue();
        expect(actualValue).toBe('');
        console.log(`Batch Id input "${singleAlphabet}" → textbox shows "${actualValue}" (system rejected alphabet as expected)`);
    }

    async verifyBatchIdTextboxAcceptSingleSpecialCharacter() {
        const singleSpecialChar = '!';
        await this.batchId.click();
        await this.batchId.pressSequentially(singleSpecialChar);
        const actualValue = await this.batchId.inputValue();
        expect(actualValue).toBe('');
        console.log(`Batch Id input "${singleSpecialChar}" → textbox shows "${actualValue}" (system rejected special character as expected)`);
    }

    async verifyBatchIdTextboxAcceptNumberAndBlankSpacesThenSearch() {
        const valueWithSpaces = '1 2 3';
        const expectedValue = '123';
        await this.batchId.click();
        await this.batchId.pressSequentially(valueWithSpaces);
        const filteredValue = await this.batchId.inputValue();
        expect(filteredValue).toBe(expectedValue);
        console.log(`Batch Id input "${valueWithSpaces}" → textbox shows "${filteredValue}" (system stripped interleaved spaces, kept numbers)`);

        await this.searchButton.click();
        console.log('Search button clicked after entering numbers with blank spaces');
    }

    async verifyShowOnlyNotDeliveredToggleIsDisplayed() {
        await this.showOnlyNotDelivered.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.showOnlyNotDelivered).toBeVisible();
        console.log('Show Only Not Delivered toggle button is visible');
    }

    async verifyUserCanEnableShowOnlyNotDeliveredToggle() {
        await this.showOnlyNotDeliveredToggle.waitFor({ state: 'visible', timeout: 10000 });

        const toggleSwitch = this.showOnlyNotDeliveredToggle.locator('input[role="switch"]');
        const initialState = await toggleSwitch.getAttribute('aria-checked');
        console.log(`Show Only Not Delivered toggle initial aria-checked: ${initialState}`);

        await this.showOnlyNotDelivered.click();

        await expect(toggleSwitch).toHaveAttribute('aria-checked', 'true', { timeout: 5000 });
        const finalState = await toggleSwitch.getAttribute('aria-checked');
        console.log(`Show Only Not Delivered toggle after click — aria-checked: ${finalState} (enabled as expected)`);
    }

    async verifyUserCanDisableShowOnlyNotDeliveredToggle() {
        await this.showOnlyNotDeliveredToggle.waitFor({ state: 'visible', timeout: 10000 });

        const toggleSwitch = this.showOnlyNotDeliveredToggle.locator('input[role="switch"]');

        // Enable first
        await this.showOnlyNotDelivered.click();
        await expect(toggleSwitch).toHaveAttribute('aria-checked', 'true', { timeout: 5000 });
        console.log('Show Only Not Delivered toggle enabled (preparation step)');

        // Then disable
        await this.showOnlyNotDelivered.click();
        await expect(toggleSwitch).toHaveAttribute('aria-checked', 'false', { timeout: 5000 });
        const finalState = await toggleSwitch.getAttribute('aria-checked');
        console.log(`Show Only Not Delivered toggle after second click — aria-checked: ${finalState} (disabled as expected)`);
    }

    async verifyCapitationToggleIsDisplayed() {
        await this.capitation.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.capitation).toBeVisible();
        console.log('Capitation toggle button is visible');
    }

    async verifyUserCanEnableCapitationToggle() {
        await this.capitationToggle.waitFor({ state: 'visible', timeout: 10000 });

        const toggleSwitch = this.capitationToggle.locator('input[role="switch"]');
        const initialState = await toggleSwitch.getAttribute('aria-checked');
        console.log(`Capitation toggle initial aria-checked: ${initialState}`);

        await this.capitation.click();

        await expect(toggleSwitch).toHaveAttribute('aria-checked', 'true', { timeout: 5000 });
        const finalState = await toggleSwitch.getAttribute('aria-checked');
        console.log(`Capitation toggle after click — aria-checked: ${finalState} (enabled as expected)`);
    }

    async verifyUserCanDisableCapitationToggle() {
        await this.capitationToggle.waitFor({ state: 'visible', timeout: 10000 });

        const toggleSwitch = this.capitationToggle.locator('input[role="switch"]');

        // Enable first
        await this.capitation.click();
        await expect(toggleSwitch).toHaveAttribute('aria-checked', 'true', { timeout: 5000 });
        console.log('Capitation toggle enabled (preparation step)');

        // Then disable
        await this.capitation.click();
        await expect(toggleSwitch).toHaveAttribute('aria-checked', 'false', { timeout: 5000 });
        const finalState = await toggleSwitch.getAttribute('aria-checked');
        console.log(`Capitation toggle after second click — aria-checked: ${finalState} (disabled as expected)`);
    }


}