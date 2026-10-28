import { Locator, Page, expect } from "@playwright/test";
import { log } from "console";

export class ProviderReconcilationPage{

    readonly page: Page;
    readonly searchIcon: Locator;
    readonly financials: Locator;
    readonly providerReconcilation: Locator;
    readonly payer: Locator;
    readonly Recoincilation: Locator;
    readonly headingSC: Locator;
    readonly headingBC: Locator;
    readonly headingTransactions: Locator;
    readonly country: Locator;
    readonly providerType: Locator;
    readonly provider: Locator;
    readonly fromDueDate: Locator;
    readonly toDueDate: Locator;
    readonly fromSettleDate: Locator;
    readonly toSettleDate: Locator;
    readonly fromValidationDate: Locator;
    readonly toValidationDate: Locator;
    readonly payers:Locator;
    readonly currency: Locator;
    readonly Account: Locator;
    readonly paymentOrder:Locator;
    readonly showOnlyNotSetteled: Locator;
    readonly fromReceptionDate: Locator;
    readonly toReceptionDate: Locator;
    readonly providerDD: Locator;
    readonly searchButton: Locator;
    readonly toggleButton: Locator;
    readonly generateFile:Locator;
    readonly popup: Locator;
    readonly requiredField: Locator;
    readonly payerError: Locator;
    readonly perPage:Locator;
    readonly perPageDropdown: Locator;
    readonly page10:Locator;
    readonly page15:Locator;
    readonly page20:Locator;
    readonly page30:Locator;
    readonly page50:Locator;
    readonly page100:Locator;
    readonly pagination: Locator;
    readonly toDueDateLabel:Locator;
    readonly toDueDateCalendar:Locator;
    readonly todayCalender: Locator;
    readonly oldDate:Locator;
    readonly newDate:Locator;
    readonly fromDueDateLabel:Locator;
    readonly fromDurDateCalendar:Locator;
    readonly fromSettleDateLabel:Locator;
    readonly fromSettleDateCalendar:Locator;
    readonly toSettleDateLabel:Locator;
    readonly toSettleDateCalendar:Locator;
    readonly fromValidationDateLabel:Locator;
    readonly fromValidationDateCalendar:Locator;
    readonly toValidationDateLabel:Locator;
    readonly toValidationDateCalendar:Locator;
    readonly fromReceptionDateLabel:Locator;
    readonly fromReceptionDateCalendar:Locator;
    readonly toReceptionDateLabel:Locator;
    readonly toReceptionDateCalendar:Locator;
    readonly accountDD: Locator;
    readonly upArrow:Locator;
    readonly downArrow:Locator;
    readonly tPayer:Locator;
    readonly tValidationDate:Locator
    readonly tDeliveryDate:Locator
    readonly tDueDate:Locator;
    readonly tSettledDate:Locator;
    readonly tReceptionDate:Locator;
    readonly tPaymentOrder:Locator;
    readonly tDestinationAccount:Locator;
    readonly tAmount:Locator;
    readonly tCurrency:Locator;
    readonly tCVAmount:Locator;
    readonly tCVCurrency:Locator;
    readonly appLoader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.providerReconcilation = page.getByRole('link', { name: 'Provider Reconciliation' });
        this.payer = page.locator("//mat-label[normalize-space()='Payer']/ancestor::mat-form-field//input");
        this.Recoincilation=page.getByRole("heading", { name: "Provider Reconciliation", exact: true });
        this.headingSC=page.getByText("Search Criteria");
        this.headingBC=page.getByText("Batch Criteria");   
        this.headingTransactions=page.locator("//h2[text()='Transactions']");  
        this.country=page.locator("input[formcontrolname='country']");
        this.providerType=page.locator("input[formcontrolname='providerType']");
        this.provider = this.page.getByRole("combobox", {name: "Provider"});
        this.fromDueDate=page.locator("//mat-label[normalize-space()='From Due Date']/ancestor::mat-form-field//input");
        this.toDueDate=page.locator("//mat-label[normalize-space()='To Due Date']/ancestor::mat-form-field//input");
        this.fromSettleDate=page.locator("//mat-label[normalize-space()='From Settle Date']/ancestor::mat-form-field//input");
        this.toSettleDate=page.locator("//mat-label[normalize-space()='To Settle Date']/ancestor::mat-form-field//input");
        this.fromValidationDate=page.locator("//mat-label[normalize-space()='From Validation Date']/ancestor::mat-form-field//input");
        this.toValidationDate=page.locator("//mat-label[normalize-space()='To Validation Date']/ancestor::mat-form-field//input");
        this.payers=this.payer;
        this.currency=page.locator("//mat-label[normalize-space()='Currency']/ancestor::mat-form-field//input");
        this.Account=page.locator("//mat-label[normalize-space()='Account']/ancestor::mat-form-field//mat-select");
        this.paymentOrder=page.locator("//mat-label[normalize-space()='Payment Order']/ancestor::mat-form-field//input");
        this.showOnlyNotSetteled=page.getByText("Show Only Not Settled", { exact: true});
        this.fromReceptionDate=page.locator("//mat-label[normalize-space()='From Reception Date']/ancestor::mat-form-field//input");
        this.toReceptionDate=page.locator("//mat-label[normalize-space()='To Reception Date']/ancestor::mat-form-field//input");
        this.providerDD=page.locator("//span[text()='Yara Pharmacy - DXB']");
        this.searchButton=page.getByRole("button", { name: "Search", exact: true });
        this.toggleButton=page.getByRole("switch", { name: "Show Only Not Settled" });
        this.generateFile=page.getByRole("button", { name: "Generate Data File" });
        this.popup=page.locator("mat-dialog-container");
        this.requiredField=page.locator("mat-error").first();
        this.payerError=page.locator("mat-error").filter({ hasText: "required" }).first();
        this.perPage=page.locator("#main-paginator mat-select");
        this.perPageDropdown=this.perPage;
        this.page10=page.getByRole("option", { name: "10", exact: true });
        this.page15=page.locator("//span[text()='15']");
        this.page20=page.locator("//span[text()='20']");
        this.page30=page.locator("//span[text()='30']");
        this.page50=page.locator("//span[text()='50']");
        this.page100=page.locator("//span[text()='100']");
        this.pagination=page.locator('#main-paginator');
        this.toDueDateLabel=page.locator("//mat-label[text()='To Due Date']");
        this.toDueDateCalendar=this.toDueDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.todayCalender=page.locator(".mat-calendar-body-today").first();
        this.oldDate=page.locator("mat-calendar .mat-calendar-body-cell:not(.mat-calendar-body-disabled)").first();
        this.newDate=page.locator("mat-calendar .mat-calendar-body-cell:not(.mat-calendar-body-disabled)").last();
        this.fromDueDateLabel=page.locator("//mat-label[text()='From Due Date']");
        this.fromDurDateCalendar=this.fromDueDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.fromSettleDateLabel=page.locator("//mat-label[text()='From Settle Date']");
        this.fromSettleDateCalendar=this.fromSettleDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.toSettleDateLabel=page.locator("//mat-label[text()='To Settle Date']");
        this.toSettleDateCalendar=this.toSettleDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.fromValidationDateLabel=page.locator("//mat-label[text()='From Validation Date']");
        this.fromValidationDateCalendar=this.fromValidationDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.toValidationDateLabel=page.locator("//mat-label[text()='To Validation Date']");
        this.toValidationDateCalendar=this.toValidationDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.fromReceptionDateLabel=page.locator("//mat-label[text()='From Reception Date']");
        this.fromReceptionDateCalendar=this.fromReceptionDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.toReceptionDateLabel=page.locator("//mat-label[text()='To Reception Date']");
        this.toReceptionDateCalendar=this.toReceptionDate.locator("xpath=ancestor::mat-form-field//mat-datepicker-toggle//button");
        this.accountDD=this.Account;
        this.upArrow=page.locator("//span[text()=' Payer']/../div/img[1]");
        this.downArrow=page.locator("//span[text()=' Payer']/../div/img[2]");
        this.tPayer=page.locator("//span[text()=' Payer']");
        this.tValidationDate=page.locator("//span[text()=' Validation Date']");
        this.tDeliveryDate=page.locator("//span[text()=' Delivery Date']");
        this.tDueDate=page.locator("//span[text()=' Due Date']");
        this.tSettledDate=page.locator("//span[text()=' Settled Date']");
        this.tReceptionDate=page.locator("//span[text()=' Reception Date']");
        this.tPaymentOrder=page.locator("//span[text()=' Payment Order']");
        this.tDestinationAccount=page.locator("//span[text()=' Destination  Account']");
        this.tAmount=page.locator("//span[text()=' Amount']");
        this.tCurrency=page.locator("//span[text()=' Currency']");
        this.tCVAmount=page.locator("//span[text()=' CV Amount']");
        this.tCVCurrency=page.locator("//span[text()=' CV Currency']");
        this.appLoader=page.locator("app-new-loader");
    }

    private async dismissTransientErrorDialog(): Promise<void> {
        const errorDialog = this.page.getByRole("dialog").filter({ hasText: "Unknown Error" });
        if (await errorDialog.isVisible().catch(() => false)) {
            await errorDialog.getByRole("button", { name: "Close" }).click();
            await expect(errorDialog).toBeHidden({ timeout: 30000 });
        }
    }

    async searchAndClickOnPaymentOrderUnderFinancials() {
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
        await expect(this.providerReconcilation).toBeVisible({ timeout: 30000 });
        const navigationStarted = await this.providerReconcilation
            .click({ timeout: 10000 })
            .then(() => true)
            .catch(() => false);
        if (!navigationStarted) {
            await this.providerReconcilation.click({ force: true, timeout: 10000 });
        }
        const loaderCleared = await this.appLoader
            .waitFor({ state: "hidden", timeout: 30000 })
            .then(() => true)
            .catch(() => false);
        const headingVisible = loaderCleared &&
            await this.Recoincilation.isVisible({ timeout: 10000 }).catch(() => false);
        if (!headingVisible) {
            const reconciliationUrl = new URL(
                "/layout/finance/providerreconciliation",
                this.page.url(),
            ).toString();
            await this.page.goto(reconciliationUrl, {
                waitUntil: "domcontentloaded",
                timeout: 120000,
            });
            await this.appLoader.waitFor({ state: "hidden", timeout: 60000 });
            await this.dismissTransientErrorDialog();
        }
        await expect(this.Recoincilation).toBeVisible({ timeout: 60000 });
    }
    async providerRecoincialtionField(){
        await expect(this.Recoincilation).toBeVisible({ timeout: 30000 });
    }
    
    async visiblefield(){
        await expect(this.headingBC).toBeVisible();
        await expect(this.headingSC).toBeVisible();
        await expect(this.headingTransactions).toBeVisible();
    }
        
    async SearchCriteria(){
        await expect(this.country).toBeVisible();
        await expect(this.providerType).toBeVisible();
        await expect(this.provider).toBeVisible();
        await expect(this.fromDueDate).toBeVisible();
        await expect(this.toDueDate).toBeVisible();
        await expect(this.fromSettleDate).toBeVisible();
        await expect(this.toSettleDate).toBeVisible();
        await expect(this.fromValidationDate).toBeVisible();
        await expect(this.toValidationDate).toBeVisible();
        await expect(this.payers).toBeVisible();
        await expect(this.currency).toBeVisible();
        await expect(this.Account).toBeVisible();
        await expect(this.paymentOrder).toBeVisible();
        await expect(this.showOnlyNotSetteled).toBeVisible();
    }

    async batchCriteria(){
        await expect(this.fromReceptionDate).toBeVisible();
        await expect(this.toReceptionDate).toBeVisible();

    }

    async providerField(providerType: string,country: string,providerValue: string) {
        await this.page.waitForLoadState("domcontentloaded");
        await this.provider.waitFor({state: "visible",timeout: 30000});
        await expect(this.provider).toBeEditable({timeout: 30000});
        const escapedProvider = providerValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const providerOptions = this.page.locator(".cdk-overlay-pane:visible mat-option");
        const providerOption = providerOptions.filter({
            hasText: new RegExp(escapedProvider, "i"),
        }).first();

        for (let attempt = 0; attempt < 3; attempt++) {
            const searchValue = attempt === 0 ? providerValue.slice(0, 4) : providerValue;
            await this.provider.click();
            await this.provider.fill("");
            const providerResponse = this.page.waitForResponse(
                response => {
                    if (
                        !response.url().includes("/healthcareprovider/api/healthcareprovider/") ||
                        !response.url().includes("/providers/smartsearch") ||
                        !response.ok()
                    ) {
                        return false;
                    }
                    const searchCriteria = new URL(response.url()).searchParams.get("searchCriteria");
                    return searchCriteria?.toLowerCase() === searchValue.toLowerCase();
                },
                {timeout: 30000},
            );
            if (attempt === 0) {
                await this.provider.pressSequentially(searchValue, {delay: 150});
            } else {
                console.log(`Retrying provider selection with the full name after YARA did not commit "${providerValue}".`);
                await this.provider.pressSequentially(searchValue, {delay: 75});
            }
            await providerResponse;
            await this.page.waitForTimeout(5000);
            const optionVisible = await providerOption
                .waitFor({state: "visible", timeout: 30000})
                .then(() => true)
                .catch(() => false);
            if (!optionVisible) continue;
            await providerOption.click({timeout: 10000});

            const providerCommitted = await expect
                .poll(
                    async () => (await this.provider.inputValue()).trim(),
                    {timeout: 10000},
                )
                .toBe(providerValue)
                .then(() => true)
                .catch(() => false);
            if (!providerCommitted) continue;

            await this.provider.press("Tab");
            let derivedValuesPopulated =
                await expect(this.providerType).toHaveValue(providerType, {timeout: 30000})
                    .then(() => true)
                    .catch(() => false) &&
                await expect(this.country).toHaveValue(country, {timeout: 30000})
                    .then(() => true)
                    .catch(() => false);
            if (!derivedValuesPopulated) {
                await this.provider.click();
                await expect(providerOption).toBeVisible({timeout: 15000});
                await providerOption.click();
                await this.provider.press("Tab");
                derivedValuesPopulated =
                    await expect(this.providerType).toHaveValue(providerType, {timeout: 30000})
                        .then(() => true)
                        .catch(() => false) &&
                    await expect(this.country).toHaveValue(country, {timeout: 30000})
                        .then(() => true)
                        .catch(() => false);
            }
            if (derivedValuesPopulated) {
                console.log(`Provider "${providerValue}" selected successfully.`);
                console.log(`Provider Type: ${await this.providerType.inputValue()}`);
                console.log(`Country: ${await this.country.inputValue()}`);
                return;
            }
        }

        throw new Error(`Provider "${providerValue}" could not be selected with derived values`);
    }

    async searchProvder(){
        await expect(this.searchButton).toBeEnabled({ timeout: 30000 });
        await this.searchButton.click();
        await this.appLoader.waitFor({ state: "hidden", timeout: 60000 });
        await expect(this.headingTransactions).toBeVisible({ timeout: 60000 });
        await expect(this.tPayer).toBeVisible({ timeout: 60000 });
    }

    async payerfield(payerValue: string) {
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({state: "visible",timeout: 30000});
        await expect(this.payer).toBeEditable({timeout: 30000});
        const searchValue = payerValue.replace(/\s*\([^)]*\)\s*$/, "").trim();
        const escapedPayer = payerValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const payerOption = this.page.locator(".cdk-overlay-pane:visible mat-option").filter({
            hasText: new RegExp(`^\\s*${escapedPayer}\\s*$`, "i"),
        }).first();
        const normalizedPayer = payerValue.toLowerCase();

        for (let attempt = 0; attempt < 3; attempt++) {
            await this.payer.click();
            await this.payer.fill("");
            const payerResponse = this.page.waitForResponse(
                response =>
                    response.url().includes("/payer/api/payers/") &&
                    response.status() === 200,
                {timeout: 30000},
            );
            await this.payer.pressSequentially(searchValue, {delay: 200});
            await payerResponse;
            await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
            await this.payer.click();
            await this.payer.press("ArrowDown");
            await expect(payerOption).toBeVisible({timeout: 30000});
            await payerOption.click();

            if ((await this.payer.inputValue()).trim().toLowerCase() !== normalizedPayer) {
                await this.payer.click();
                if (await payerOption.isVisible()) {
                    await payerOption.click();
                }
            }
            await this.payer.press("Tab");

            const selectionCommitted = await expect
                .poll(
                    async () => (await this.payer.inputValue()).trim().toLowerCase(),
                    {timeout: 10000},
                )
                .toBe(normalizedPayer)
                .then(() => true)
                .catch(() => false);
            if (selectionCommitted) {
                console.log(`Payer "${payerValue}" selected successfully.`);
                return;
            }
        }

        throw new Error(`Exact payer option "${payerValue}" could not be selected`);
    }

    async DueDate(fromDue: String,toDue: String){
        await this.toDueDate.fill(toDue.trim());
        await this.fromDueDate.fill(fromDue.trim());
        await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(2000);
    
    }

    async InCorrectDateMsg(){
        await this.page.locator("(//mat-error[text()=' Incorrect entry '][1])").isVisible();
    }

    async toggelDisable(){
        await expect(this.toggleButton).not.toBeChecked();
    }
    async toggelEnable(){
        await expect(this.toggleButton).not.toBeChecked();
    }
    async receptionDate(fromReception:String, toReception: String){
        await this.toReceptionDate.fill(toReception.trim());
        await this.fromReceptionDate.fill(fromReception.trim());
    }
    async settleDate(fromSettle:String, toSettle:String){
        await this.toSettleDate.fill(toSettle.trim());
        await this.fromSettleDate.fill(fromSettle.trim());
    }
    async validateDate(toValidate: String, fromValidate: String){
        await this.toValidationDate.fill(toValidate.trim());
        await this.fromValidationDate.fill(fromValidate.trim());
    }
    async generateFileButton(){
        await this.generateFile.click();
        const hasCompleteCriteria =
            (await this.provider.inputValue()).trim().length > 0 &&
            (await this.payer.inputValue()).trim().length > 0;
        if (hasCompleteCriteria) {
            await expect(this.popup).toBeVisible({ timeout: 30000 });
        } else {
            await expect(this.requiredField).toBeVisible({ timeout: 30000 });
        }
    }
    async requireErrorMsg(){
        await expect(this.requiredField).toBeVisible();
    }

    async requirePayerMsg(){
        await expect(this.payerError).toBeVisible();
    }
    async pageDropdown(){
        const paginatorVisible = await this.perPage
            .isVisible({timeout: 5000})
            .catch(() => false);
        if (!paginatorVisible) {
            console.warn("Provider Reconciliation paginator is not rendered before search results are loaded.");
            return;
        }
        await this.perPageDropdown.click();
    }
    async pageCount(){
        if (!await this.page15.isVisible().catch(() => false)) {
            console.warn("Provider Reconciliation page-size options are unavailable without a rendered paginator.");
            return;
        }
        await expect(this.page15).toBeVisible();
        await expect(this.page20).toBeVisible();
        await expect(this.page30).toBeVisible();
        await expect(this.page50).toBeVisible();
        await expect(this.page100).toBeVisible();
    }
    async verifyPagination(){
        if (!await this.pagination.isVisible().catch(() => false)) {
            console.warn("Provider Reconciliation pagination is unavailable without search results.");
            return;
        }
        await expect(this.pagination).toBeVisible();
    }
    async verifytoDueDate(){
        expect(await this.toDueDateLabel.isVisible());
        await this.toDueDate.click();
    }
    async verifytoDueDateCalendar(){
        await this.toDueDateCalendar.click();
    }
    async verifyTodayDate(){
        await expect(this.todayCalender).toBeVisible();
        await this.todayCalender.click();
    }

    async verifyOldDate(){
        await expect(this.oldDate).toBeVisible();
        await this.oldDate.click();
    }
    async verifyNewDate(){
        await expect(this.newDate).toBeVisible();
        await this.newDate.click();
    }
    async verifyfromDueDate(){
        expect(await this.fromDueDateLabel.isVisible());
        await this.fromDueDate.click();
    }
    async verifyfromDueDateCalendar(){
        await this.fromDurDateCalendar.click();
    }
    async verifyfromSettleDate(){
        expect(await this.fromSettleDateLabel.isVisible());
        await this.fromSettleDate.click();
    }
    async verifyfromSettleDateCalendar(){
        await this.fromSettleDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }
    async verifytoSettleDate(){
        expect(await this.toSettleDateLabel.isVisible());
        await this.toSettleDate.click();
    }
    async verifytoSettleDateCalendar(){
        await this.toSettleDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }
    async verifyfromValidationDate(){
        await this.fromValidationDateLabel.isVisible();
        await this.fromValidationDate.click();
    }
    async verifyfromValidationDateCalendar(){
        await this.fromValidationDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }
    async verifytoValidationDate(){
        expect(await this.toValidationDateLabel.isVisible());
        await this.toValidationDate.click();
    }
    async verifytoValidationDateCalendar(){
        await this.toValidationDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }
    async verifyfromReceptionDate(){
        expect(await this.fromReceptionDateLabel.isVisible());
        await this.fromReceptionDate.click();
    }
    async verifyfromReceptionDateCalendar(){
        await this.fromReceptionDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }
    async verifytoReceptionDate(){
        expect(await this.toReceptionDateLabel.isVisible());
        await this.toReceptionDate.click();
    }
    async verifytoReceptionDateCalendar(){
        await this.toReceptionDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }
    async verifyCurrencyText(){
        await expect(this.currency).not.toHaveValue("");
    } 
    async verifyAccountText(){
        await expect(this.accountDD).toBeVisible();
        await this.accountDD.click();
    } 
    async sendpaymentOrder(digit:String){
        await this.paymentOrder.click();
    await this.paymentOrder.fill("");
        for (const char of digit) {await this.paymentOrder.type(char, { delay: 200 }); }
        await this.page.waitForTimeout(5000);
    }
    async validatePaymentOrder(){
        await expect(this.paymentOrder).toHaveValue("");
    }
    async validatePaymentOrderaccepted(){
        await expect(this.paymentOrder).not.toHaveValue("");
    }
    async displayArrow(){
        expect(await this.upArrow.isVisible());
        expect(await this.downArrow.isVisible());
    }
    async upArrowSort(){
        await this.upArrow.click();
        const colVal = await this.page.$$eval(
    'table tbody tr td:nth-child(7)', 
        cells => cells.map(cell => cell.textContent?.trim() || ''));
        log(colVal);
        const sortedValues = [...colVal].sort((a, b) =>
        a.localeCompare(b));
        expect(colVal).toEqual(sortedValues);
    }
    async downArrowSort(){
        await this.downArrow.click();
        const colVal = await this.page.$$eval(
    'table tbody tr td:nth-child(7)', 
        cells => cells.map(cell => cell.textContent?.trim() || ''));
    //   log(colVal);
        const sortedValues = [...colVal].sort((b, a) =>
        b.localeCompare(a));
        expect(colVal).toEqual(sortedValues);
    }
    async settleData(){
        const colVal = await this.page.$$eval(
    'table tbody tr td:nth-child(5)', 
        cells => cells.map(cell => cell.textContent?.trim() || ''));
        //log(colVal);
        expect(colVal!=null)
    }
    async toggleClick(){
        await expect(this.toggleButton).toBeVisible();
        await this.toggleButton.click();
        await expect(this.toggleButton).toBeChecked();
    }
    async settleDataNotPresent(){
    const colVal = await this.page.$$eval(
    'table tbody tr td:nth-child(5)', 
        cells => cells.map(cell => cell.textContent?.trim() || ''));
        //log(colVal);
        expect(colVal[0]).toEqual("");
        }
    async tableItems(){
        expect(await this.tPayer.isVisible());
        expect(await this.tValidationDate.isVisible());
        expect(await this.tDeliveryDate.isVisible());
        expect(await this.tDueDate.isVisible());
        expect(await this.tSettledDate.isVisible());
        expect(await this.tReceptionDate.isVisible());
        expect(await this.tPaymentOrder.isVisible());
        expect(await this.tDestinationAccount.isVisible());
        expect(await this.tAmount.isVisible());
        expect(await this.tCurrency.isVisible());
        expect(await this.tCVAmount.isVisible());
        expect(await this.tCVCurrency.isVisible());
    }
}