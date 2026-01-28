import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { waitForDebugger } from "inspector";
import { LoadFnOutput } from "module";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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


    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.providerReconcilation = page.getByRole('link', { name: 'Provider Reconciliation' });
        this.payer = page.locator("#mat-input-14");   
        this.Recoincilation=page.locator("//h1[text()='Provider Reconciliation ']");
        this.headingSC=page.getByText("Search Criteria");
        this.headingBC=page.getByText("Batch Criteria");   
        this.headingTransactions=page.locator("//h2[text()='Transactions']");  
        this.country=page.locator("//input[@id='mat-input-2']");
        this.providerType=page.locator("//input[@id='mat-input-3']");
        this.provider=page.locator("//input[@id='mat-input-13']");
        this.fromDueDate=page.locator("//input[@id='mat-input-4']");
        this.toDueDate=page.locator("//input[@id='mat-input-5']");
        this.fromSettleDate=page.locator("//input[@id='mat-input-6']");
        this.toSettleDate=page.locator("//input[@id='mat-input-7']");
        this.fromValidationDate=page.locator("//input[@id='mat-input-8']");
        this.toValidationDate=page.locator("//input[@id='mat-input-9']");
        this.payers=page.locator("mat-input-30");
        this.currency=page.locator("//input[@id='mat-input-15']");
        this.Account=page.locator("mat-select-4");
        this.paymentOrder=page.locator("//input[@id='mat-input-10']");
        this.showOnlyNotSetteled=page.getByText("Show Only Not Settled", { exact: true});
        this.fromReceptionDate=page.locator("//input[@id='mat-input-8']");
        this.toReceptionDate=page.locator("//input[@id='mat-input-9']");
        this.providerDD=page.locator("//span[text()='Yara Pharmacy - DXB']");
        this.searchButton=page.locator("//div[text()='Search']");
        this.toggleButton=page.locator("//input[@id='mat-slide-toggle-3-input']");
        this.generateFile=page.locator("//button[text()=' Generate Data File ']");
        this.popup=page.locator("//mat-dialog-container[@id='mat-dialog-2']");
        this.requiredField=page.locator("mat-error-0");
        this.payerError=page.locator("mat-error-3");
        this.perPage=page.locator("#mat-select-5");
        this.perPageDropdown=page.locator("//span[text()='10']/../../../div[2]");
        this.page10=page.locator("//span[@class='mat-option-text' and text()='10']");
        this.page15=page.locator("//span[text()='15']");
        this.page20=page.locator("//span[text()='20']");
        this.page30=page.locator("//span[text()='30']");
        this.page50=page.locator("//span[text()='50']");
        this.page100=page.locator("//span[text()='100']");
        this.pagination=page.locator('#main-paginator');
        this.toDueDateLabel=page.locator("//mat-label[text()='To Due Date']");
        this.toDueDateCalendar=page.locator("//input[@id='mat-input-5']/../../div[2]/mat-datepicker-toggle/button");
        this.todayCalender=page.locator("//div[@class='mat-calendar-body-cell-content mat-calendar-body-today']");
        this.oldDate=page.locator("//div[@class='mat-calendar-body-cell-content mat-calendar-body-today']/../../../tr[2]/td[1]");
        this.newDate=page.locator("//div[@class='mat-calendar-body-cell-content mat-calendar-body-today']/../../../tr[5]/td[1]");
        this.fromDueDateLabel=page.locator("//mat-label[text()='From Due Date']");
        this.fromDurDateCalendar=page.locator("//input[@id='mat-input-4']/../../div[2]/mat-datepicker-toggle/button");
        this.fromSettleDateLabel=page.locator("//mat-label[text()='From Settle Date']");
        this.fromSettleDateCalendar=page.locator("//label[@id='mat-form-field-label-17']/../../../div[2]/mat-datepicker-toggle/button");
        this.toSettleDateLabel=page.locator("//mat-label[text()='To Settle Date']");
        this.toSettleDateCalendar=page.locator("//label[@id='mat-form-field-label-19']/../../../div[2]/mat-datepicker-toggle/button")
        this.fromValidationDateLabel=page.locator("//mat-label[text()='From Validation Date']");
        this.fromValidationDateCalendar=page.locator("//label[@id='mat-form-field-label-21']/../../../div[2]/mat-datepicker-toggle/button");
        this.toValidationDateLabel=page.locator("//mat-label[text()='To Validation Date']");
        this.toValidationDateCalendar=page.locator("//label[@id='mat-form-field-label-23']/../../../div[2]/mat-datepicker-toggle/button");
        this.fromReceptionDateLabel=page.locator("//mat-label[text()='From Reception Date']");
        this.fromReceptionDateCalendar=page.locator("//label[@id='mat-form-field-label-29']/../../../div[2]/mat-datepicker-toggle/button");
        this.toReceptionDateLabel=page.locator("//mat-label[text()='To Reception Date']");
        this.toReceptionDateCalendar=page.locator("//label[@id='mat-form-field-label-31']/../../../div[2]/mat-datepicker-toggle/button");
        this.accountDD=page.locator("//mat-select[@id='mat-select-2']/div/div[2]");
        this.upArrow=page.locator("(//table[@id='dddd']/thead/tr/th/div/button/div/img[1])[2]");
        this.downArrow=page.locator("(//table[@id='dddd']/thead/tr/th/div/button/div/img[2])[2]");
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
    }

    async searchAndClickOnPaymentOrderUnderFinancials() {
       
        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await this.financials.click();
        await this.providerReconcilation.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
        await this.providerReconcilation.click();
    }

    async providerRecoincialtionField(){
        await this.Recoincilation.isVisible();
    }

    async visiblefield(){
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.headingBC.isVisible();
        await this.headingSC.isVisible();
        await this.headingTransactions.isVisible();
    }
        
    async SearchCriteria(){
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.country.isVisible();
        await this.providerType.isVisible();
        await this.provider.isVisible();
        await this.fromDueDate.isVisible();
        await this.toDueDate.isVisible();
        await this.fromSettleDate.isVisible();
        await this.toSettleDate.isVisible();
        await this.fromValidationDate.isVisible();
        await this.toValidationDate.isVisible();
        await this.payers.isVisible();
        await this.currency.isVisible();
        await this.Account.isVisible();
        await this.paymentOrder.isVisible();
        await this.showOnlyNotSetteled.isVisible();
    }

    async batchCriteria(){
        await this.fromReceptionDate.isVisible();
        await this.toReceptionDate.isVisible();
    }

    async providerField(providerType: String, Country: String, providerValue:String){
        await this.page.locator("//input[@id='mat-input-13']").click();
        await this.page.waitForTimeout(3000);
        await this.provider.fill("");  
        for (const char of providerValue) {await this.provider.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='Yara Pharmacy - DXB']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        console.log(await this.providerType.inputValue());
        const providerInput = await this.providerType.inputValue();
        expect(providerInput.trim()).toBe(providerType); 
        expect((await this.country.inputValue()).trim()).toBe(Country);
    }

    async searchProvder(){
        
        await this.searchButton.click();
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForLoadState();
        await this.page.waitForTimeout(10000);
        await this.page.locator("(//tr[@class='test mat-row ng-star-inserted'][1])").isVisible();
    }

    async payerfield(payerValue: String){
        await this.payer.click();
        await this.payer.fill("");
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click()
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
        await this.page.waitForTimeout(2000);
        await this.popup.isVisible();
    }

    async requireErrorMsg(){
        await this.requiredField.isVisible();
    }

    async requirePayerMsg(){
        await this.payerError.isVisible();
    }

    async pageDropdown(){
        await this.perPage.isVisible();
        await this.perPageDropdown.click();
        await this.page.waitForTimeout(5000);
    }
    async pageCount(){
        await this.page10.click();
        await this.perPageDropdown.click();
        await this.page15.isVisible();
        await this.page20.isVisible();
        await this.page30.isVisible();
        await this.page50.isVisible();
        await this.page100.isVisible();
    }

    async verifyPagination(){
        await this.page.waitForLoadState('networkidle');
        await this.pagination.isVisible();
    }

    async verifytoDueDate(){
        await this.toDueDateLabel.isVisible();
        await this.toDueDate.click();
    }

    async verifytoDueDateCalendar(){
        await this.toDueDateCalendar.click();
    }

    async verifyTodayDate(){
        await this.page.waitForLoadState('networkidle');
        await this.todayCalender.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyOldDate(){
        await this.page.waitForLoadState('networkidle');
        await this.oldDate.click();
    }

    async verifyNewDate(){
        await this.page.waitForLoadState('networkidle');
        await this.newDate.click();
    }

    async verifyfromDueDate(){
        await this.fromDueDateLabel.isVisible();
        await this.fromDueDate.click();
    }

    async verifyfromDueDateCalendar(){
        await this.fromDurDateCalendar.click();
    }

    async verifyfromSettleDate(){
        await this.fromSettleDateLabel.isVisible();
        await this.fromSettleDate.click();
    }

    async verifyfromSettleDateCalendar(){
        await this.fromSettleDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }

    async verifytoSettleDate(){
        await this.toSettleDateLabel.isVisible();
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
        await this.toValidationDateLabel.isVisible();
        await this.toValidationDate.click();
    }

    async verifytoValidationDateCalendar(){
        await this.toValidationDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyfromReceptionDate(){
        await this.fromReceptionDateLabel.isVisible();
        await this.fromReceptionDate.click();
    }

    async verifyfromReceptionDateCalendar(){
        await this.fromReceptionDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }

    async verifytoReceptionDate(){
        await this.toReceptionDateLabel.isVisible();
        await this.toReceptionDate.click();
    }

    async verifytoReceptionDateCalendar(){
        await this.toReceptionDateCalendar.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyCurrencyText(){
        expect(await this.currency.inputValue()).not.toHaveLength(0);
    } 

    async verifyAccountText(){
        await this.accountDD.isVisible();
        await this.accountDD.click();
    } 

    async sendpaymentOrder(digit:String){
        await this.paymentOrder.click();
        await this.paymentOrder.fill("");
        for (const char of digit) {await this.paymentOrder.type(char, { delay: 200 }); }
        await this.page.waitForTimeout(5000);
    }

    async validatePaymentOrder(){

        expect(await this.paymentOrder.inputValue()).toBeNull
    }

    async validatePaymentOrderaccepted(){
        console.log(this.paymentOrder.inputValue());
        expect(await this.paymentOrder.inputValue()).not.toBeNull
    }

    async displayArrow(){
        await this.upArrow.isVisible();
        await this.downArrow.isVisible();
    }

    async upArrowSort(){
        await this.upArrow.click();
        const colVal = await this.page.$$eval(
        'table tbody tr td:nth-child(7)', 
        cells => cells.map(cell => cell.textContent?.trim() || ''));
    // log(colVal);
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
        await this.page.waitForTimeout(2000);
        await this.page.locator("//input[@id='mat-slide-toggle-3-input']/..").click();
    }

    async settleDataNotPresent(){
        const colVal = await this.page.$$eval(
        'table tbody tr td:nth-child(5)', 
            cells => cells.map(cell => cell.textContent?.trim() || ''));
            //log(colVal);
            expect(colVal[0]).toEqual("")
    }
    
    async tableItems(){
        await this.tPayer.isVisible();
        await this.tValidationDate.isVisible();
        await this.tDeliveryDate.isVisible();
        await this.tDueDate.isVisible();
        await this.tSettledDate.isVisible();
        await this.tReceptionDate.isVisible();
        await this.tPaymentOrder.isVisible();
        await this.tDestinationAccount.isVisible();
        await this.tAmount.isVisible();
        await this.tCurrency.isVisible();
        await this.tCVAmount.isVisible();
        await this.tCVCurrency.isVisible();
    }
}