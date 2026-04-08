import { expect, Locator, Page } from "@playwright/test";
import exp from "constants";

export class SmokeTestingSuitePage{
    page: Page;
    financials: Locator;
    searchIcon: Locator;
    accountTransaction: Locator;
    Transaction: Locator;
    paymentOrders: Locator;
    poPayer: Locator;
    poAccount: Locator;
    createNew: Locator;
    newpopUp: Locator;
    popupPoType: Locator;
    popupcorrectionOrderType: Locator;
    paymentOrdersHeading: Locator;
    SearchButton: Locator;
    errorMsg: Locator;
    accountReconcilation: Locator;
    Recoincilation: Locator;
    searchTable: Locator;
    arPayer: Locator;
    providerReconcilation: Locator;
    headingSC: Locator;
    headingBC: Locator;
    headingTransactions: Locator;
    country: Locator;
    providerType: Locator;
    provider: Locator;
    fromDueDate: Locator;
    toDueDate: Locator;
    fromSettleDate: Locator;
    toSettleDate: Locator;
    fromValidationDate: Locator;
    toValidationDate: Locator;
    payers: Locator;
    currency: Locator;
    Account: Locator;
    paymentOrder: Locator;
    showOnlyNotSetteled: Locator;
    fromReceptionDate: Locator;
    toReceptionDate: Locator;
    search: Locator;
    providerSettlement: Locator;
    providerPayerRadio: Locator;
    providerreisurerRadio: Locator;
    pfsPayer: Locator;
    payersFinancialCollection: Locator;
    pfcPayer: Locator;
    pfcCurrency: Locator;
    pfcAccount: Locator;
    pfcPayerRadio: Locator;
    pfcReinsurerRadio: Locator;
    pfcreceiptvoucher: Locator;
    pfccollectionDate: Locator;
    pfctotalCollectedAmount: Locator;
    pfcBAAccounName: Locator;
    pfcBAAccount: Locator;
    pfcBACurrency: Locator;
    pfcBACurrentBalance: Locator;
    pfcBAUptoDueDate: Locator;
    pfcBAFromPOID: Locator;
    pfcfromDueDate: Locator;
    pfcBAToPOID: Locator;
    pfcBAPOID: Locator;
    pfcBATrxID: Locator;
    pfcBACollectionNoteRef: Locator;
    pfcBASettled: Locator;
    pfcBAProviderType: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.paymentOrders = page.getByRole('link', { name: 'Payment Orders' });
        this.paymentOrdersHeading=page.locator("//h1[text()='Payment Orders ']");
        this.poPayer=page.locator("#mat-input-11");
        this.poAccount=page.locator("//mat-select[@id='accountRF56']");
        this.createNew=page.locator("//span[text()='Create New']");
        this.newpopUp=page.locator("nc-new-payment-order-dialog");
        this.popupPoType=page.locator("//mat-select[@id='paymentordertype']");
        this.popupcorrectionOrderType=page.locator("//mat-select[@name='correctionsOption']");
        this.accountTransaction = page.getByRole('link', { name: 'Account Transaction' });
        this.Transaction=page.locator("//h1[text()='Account Transaction ']");
        this.SearchButton=page.locator("//button[@aria-label='Search']");
        this.errorMsg=page.locator("//mat-error[@id='mat-error-0']");
        this.accountReconcilation = page.getByRole('link', { name: 'Account Reconciliation' });
        this.Recoincilation=page.locator("//h1[text()='Account Reconciliation ']");
        this.searchTable=page.locator("//table[@id='dddd']/tbody/tr[2]");
        this.arPayer=page.locator("//input[@id='mat-input-5']");
        this.providerReconcilation = page.getByRole('link', { name: 'Provider Reconciliation' });
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
        this.search=page.locator("//input[@aria-label='Search']");
        this.providerPayerRadio=page.locator("//span[text()='Payer ']/../span[1]");
        this.providerreisurerRadio=page.locator("//span[text()='Reinsurer ']/../span[1]")
        this.providerSettlement = page.getByRole('link', { name: "Provider's Financial Settlement" });
        this.pfsPayer=page.locator("//input[@id='mat-input-13']")
        this.payersFinancialCollection= page.getByRole('link', { name: "Payer's Financial Collection" });
        this.pfcPayer= page.locator("#mat-input-15");
        this.pfcCurrency=page.locator("#mat-input-16");
        this.pfcAccount=page.locator("#mat-input-2");
        this.pfcPayerRadio=page.locator("#mat-radio-8-input");
        this.pfcReinsurerRadio=page.locator("#mat-radio-9-input");
        this.pfcreceiptvoucher=page.locator("#rctvoucher");
        this.pfctotalCollectedAmount=page.locator("#totalcollectedamount");
        this.pfccollectionDate=page.locator("#collectiondatepicker");
        this.pfcBAAccounName=page.locator("#mat-input-17");
        this.pfcBAAccount=page.locator("#mat-input-3");
        this.pfcBACurrency=page.locator("#mat-input-4");
        this.pfcBACurrentBalance=page.locator("#mat-input-5");
        this.pfcfromDueDate=page.locator("#mat-input-6");
        this.pfcBAUptoDueDate=page.locator("#uptoduedate");
        this.pfcBAFromPOID=page.locator("#mat-input-8");
        this.pfcBAToPOID=page.locator("#mat-input-9");
        this.pfcBAPOID=page.locator("#mat-radio-11-input");
        this.pfcBATrxID=page.locator("#mat-radio-12-input");
        this.pfcBACollectionNoteRef=page.locator("#collectionnoteref");
        this.pfcBASettled=page.locator("#mat-select-value-99");
        this.pfcBAProviderType=page.locator("#mat-input-18");
    }
    async searchAndClickOnpaymentOrdersUnderFinancials(){
        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();
        
        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");
        
        await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await this.financials.click();
        await this.paymentOrders.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
        await this.paymentOrders.click();
    }

    async fillMandaoryDetails(payer: String,account:String){
        await this.poPayer.fill("");  
        for (const char of payer) {await this.poPayer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
    }

    async createNewbutton(){
        await this.page.waitForLoadState('networkidle');
        await this.createNew.click();
        await this.page.waitForTimeout(2000);
        expect(await this.newpopUp.isVisible());
    }

    async verifypopUpfields(){
        expect(await this.popupPoType.isVisible());
        expect(await this.popupcorrectionOrderType.isVisible());
    }

    async searchAndClickOnAccountTransactionUnderFinancials(){
          await this.searchIcon.waitFor({ state: 'visible' });
                await expect(this.searchIcon).toBeEnabled();
        
                await this.searchIcon.click();
                await this.searchIcon.fill("FINANCIALS");
        
                await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
                await this.financials.click();
                await this.accountTransaction.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
                await this.accountTransaction.click();
    }

     async accountTransactionField(){
        expect(await this.Transaction.isVisible());
    }

    async clickonSearch(){
        await this.SearchButton.click();
    }

     async verifyErrorMsg(){
        expect(await this.errorMsg.isVisible());
    }

    async searchAndClickOnAccountReconcilationUnderFinancials(){
        await this.searchIcon.waitFor({ state: 'visible' });
        await expect(this.searchIcon).toBeEnabled();

        await this.searchIcon.click();
        await this.searchIcon.fill("FINANCIALS");

        await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
        await this.financials.click();
        await this.accountReconcilation.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
        await this.accountReconcilation.click();
    
    }

 async searchByID(id:String){
        await this.search.click();
        await this.search.fill(id.trim());
    }

    async verifyTable(){
        await this.searchTable.isVisible();
    }

    async fillMandaoryDetailsAR(payer: String,account:String){
        await this.arPayer.fill("");  
        for (const char of payer) {await this.arPayer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
    }

    async searchAndClickOnProviderReconcilationUnderFinancials() {
       
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
    expect(await this.country.isVisible());
    expect(await this.providerType.isVisible());
    expect(await this.provider.isVisible());
    expect(await this.fromDueDate.isVisible());
    expect(await this.toDueDate.isVisible());
    expect(await this.fromSettleDate.isVisible());
    expect(await this.toSettleDate.isVisible());
    expect(await this.fromValidationDate.isVisible());
    expect(await this.toValidationDate.isVisible());
    expect(await this.payers.isVisible());
    expect(await this.currency.isVisible());
    expect(await this.Account.isVisible());
    expect(await this.paymentOrder.isVisible());
    expect(await this.showOnlyNotSetteled.isVisible());
}
async batchCriteria(){
    expect(await this.fromReceptionDate.isVisible());
    expect(await this.toReceptionDate.isVisible());

}

async searchAndClickOnProviderFinancialSettlementUnderFinancials(){
          await this.searchIcon.waitFor({ state: 'visible' });
                await expect(this.searchIcon).toBeEnabled();
        
                await this.searchIcon.click();
                await this.searchIcon.fill("FINANCIALS");
        
                await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
                await this.financials.click();
                await this.providerSettlement.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
                await this.providerSettlement.click();
    }

    async validateProviderRadioButton(){
         expect(await this.providerPayerRadio.isVisible());
         expect(await this.providerreisurerRadio.isVisible());
    }

    async fillPayer(payer: String,account:String){
        await this.pfsPayer.fill("");  
        for (const char of payer) {await this.pfsPayer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
    }
async searchAndClickOnPayersCollectionUnderFinancials(){
          await this.searchIcon.waitFor({ state: 'visible' });
                await expect(this.searchIcon).toBeEnabled();
        
                await this.searchIcon.click();
                await this.searchIcon.fill("FINANCIALS");
        
                await this.financials.evaluate((el: HTMLElement) => {el.style.border = "3px solid red";});
                await this.financials.click();
                await this.payersFinancialCollection.evaluate((el: HTMLElement) => {el.style.border = "3px solid blue";});
                await this.payersFinancialCollection.click();
    }
    async pfcPayerInformation(){
        expect(await this.pfcPayer.isVisible());
        expect(await this.pfcCurrency.isVisible());
        expect(await this.pfcAccount.isVisible());
        expect(await this.pfcPayerRadio.isVisible());
        expect(await this.pfcReinsurerRadio.isVisible())
    }

    async pfcCollectionInfo(){
        expect(await this.pfcreceiptvoucher.isVisible());
        expect(await this.pfctotalCollectedAmount.isVisible());
        expect(await this.pfccollectionDate.isVisible());
    }

    async pfcBankAccount(){
        expect(await this.pfcBAAccounName.isVisible());
        expect(await this.pfcBAAccount.isVisible());
        expect(await this.pfcBACurrency.isVisible());
        expect(await this.pfcBACurrentBalance.isVisible());
        expect(await this.pfcfromDueDate.isVisible());
        expect(await this.pfcBAUptoDueDate.isVisible());
        expect(await this.pfcBAFromPOID.isVisible());
        expect(await this.pfcBAToPOID.isVisible());
        expect(await this.pfcBAPOID.isVisible());
        expect(await this.pfcBATrxID.isVisible());
        expect(await this.pfcBACollectionNoteRef.isVisible());
        expect(await this.pfcBASettled.isVisible());
        expect(await this.pfcBAProviderType.isVisible());
    }
}