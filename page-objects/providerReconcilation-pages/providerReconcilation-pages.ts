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
        this.fromValidationDate=page.locator("mat-input-24");
        this.toValidationDate=page.locator("mat-input-25");
        this.payers=page.locator("mat-input-30");
        this.currency=page.locator("mat-input-31");
        this.Account=page.locator("mat-select-4");
        this.paymentOrder=page.locator("mat-input-26");
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
 //await this.page.waitForTimeout(10000);
 //await this.providerDD.click();
 console.log(await this.providerType.inputValue());
const providerInput = await this.providerType.inputValue();
expect(providerInput.trim()).toBe(providerType); 
expect((await this.country.inputValue()).trim()).toBe(Country);
}

async searchProvder(){
    await this.page.waitForTimeout(2000);
await this.searchButton.click();
await this.page.locator("(//tr[@class='test mat-row ng-star-inserted'][1])").isVisible();
}

async payerfield(payerValue: String){
    await this.payer.click();
    await this.payer.fill("");
    for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
 const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
  await option.waitFor({ state: "visible", timeout: 10000 });
await option.click()
    // await this.toDueDate.fill("01-Jan-2017");
    // await this.fromDueDate.fill("31-Dec-2016");
//await this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").click();
}

async DueDate(fromDue: String,toDue: String){
     await this.toDueDate.fill(toDue.trim());
    await this.fromDueDate.fill(fromDue.trim());
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(2000);
   
}

async InCorrectDateMsg(){
   //await expect(this.page.locator("(//mat-error[text()=' Incorrect entry '][1])")).not.toBeVisible();
    await this.page.locator("(//mat-error[text()=' Incorrect entry '][1])").isVisible();
}

async toggelDisable(){
//    await this.toggleButton.click();
    await expect(this.toggleButton).not.toBeChecked();
}
async toggelEnable(){
    //await this.toggleButton.check();
    await expect(this.toggleButton).not.toBeChecked();
}
async receptionDate(){
    await this.toReceptionDate.fill("01-Jan-2016");
    await this.fromReceptionDate.fill("31-Dec-2016");
}
async settleDate(){
    await this.toSettleDate.fill("01-Jan-2016");
    await this.fromSettleDate.fill("31-Dec-2016");
}

async generateFileButton(){
    // this.page.pause();
    // await this.page.waitForTimeout(2000);
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

}