import { expect, Locator, Page } from "@playwright/test";
import { test } from '@playwright/test';
import { log } from "console";
import exp from "constants";

export class AccountTransactionPage{
    page: Page  ;
    searchIcon: Locator;
    financials: Locator;
    accountTransaction: Locator;
    Transaction: Locator;
    payer:Locator;
    Currency:Locator;
    Account:Locator;
    fromPOValidationDate:Locator;
    toPOValidationDate:Locator;
    Type:Locator;
    fromDueDate:Locator;
    toDueDate:Locator;
    destinationAccount:Locator;
    fromSettleDate:Locator;
    toSettleDate:Locator;
    POID:Locator;
    fromChequeReleaseDate:Locator;
    toChecqueReleaseDate:Locator;
    bankReference:Locator;
    fromPOReleaseDate:Locator;
    toPOReleaseDate:Locator;
    Settled:Locator;
    Country:Locator;
    providerType:Locator;
    provider:Locator;
    fromAmount:Locator;
    toAmount:Locator;
    fromdeliveryDate:Locator;
    toDeliveryDate:Locator;
    AccountTransactions:Locator;
    Searchresults:Locator;
    SearchButton: Locator;
    genratefile: Locator;
    errorMsg: Locator;
    search: Locator;
    eyeIcon: Locator;
    accTransPopUp: Locator;
    chequeReleaseDate: Locator;
    chequeSentDate: Locator;
    popDueDate: Locator;
    popTransactionType: Locator;
    popSettlementDate: Locator;
    popDestination: Locator;
    popCurrency: Locator;
    popAmount: Locator;
    popcvc: Locator;
    popcva: Locator;
    poplabel: Locator;
    poppo: Locator;
    popdeleiveryDate: Locator;
    popCheckbox: Locator;
    popPendingtext: Locator;
    reason: Locator;
    error: Locator;
    popApply: Locator;
    popCancel: Locator;
    applyButton: Locator;
    popAlert: Locator;
    popClose: Locator;
    itemPerPage: Locator;
    itemppDD: Locator;
    itempp10: Locator;
    itempp15: Locator;
    itempp20: Locator;
    itempp30: Locator;
    itempp50: Locator;
    itempp100: Locator;
    paginator: Locator;
    leftArrow: Locator;
    rightArrow: Locator;
    fromPOValidationDateLabel: Locator;
    fromPOValidationcalendarButton: Locator;
    fromPOValidationDateCalendar: Locator;
    oldDate: Locator;
    futureDate: Locator;
    toPOValidationDateLabel: Locator;
    toPOValidationcalendarButton: Locator;
    fromDueDateLabel: Locator;
    fromDueDatecalendarButton: Locator;
    fromDueDateDateCalendar: Locator;
    toDueDateLabel: Locator;
    toDueDatecalendarButton: Locator;
    toDueDateDateCalendar: Locator;
    fromSettleDateLabel: Locator;
    fromSettleDatecalendarButton: Locator;
    fromSettleDateCalendar: Locator;
    toSettleDateLabel: Locator;
    toSettleDatecalendarButton: Locator;
    toSettleDateDateCalendar: Locator;
    fromChequeReleaseDateLabel: Locator;
    fromChequeReleaseDatecalendarButton: Locator;
    toChequeReleaseDateLabel: Locator;
    toChequeReleaseDatecalendarButton: Locator;
    toChequeReleaseDateCalendar: Locator;
    fromChequeReleaseDateCalendar: Locator;
    fromPOReleaseDatecalendarButton: Locator;
    fromPOReleaseDateCalendar: Locator;
    fromPOReleaseDateLabel: Locator;
    toPOReleaseDateLabel: Locator;
    toPOReleaseDatecalendarButton: Locator;
    toPOReleaseDateCalendar: Locator;
    typeDrop: Locator;
    typeDropfirst: Locator;
    SettledDrop: Locator;
    CountryDrop: Locator;
    providerTypeDrop: Locator;

    constructor(page: Page){
     this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
         this.financials = page.getByRole('button', { name: 'Financials' });
        this.accountTransaction = page.getByRole('link', { name: 'Account Transaction' });
        this.Transaction=page.locator("//h1[text()='Account Transaction ']");
        this.payer=page.locator("//input[@id='mat-input-19']");
        this.Currency=page.locator("//input[@id='mat-input-20']");
        this.Account=page.locator("//input[@id='mat-input-21']");
        this.fromPOValidationDateLabel=page.locator("//mat-label[text()='From PO Validation Date']");
        this.fromPOValidationDate=page.locator("//input[@id='mat-input-2']");
        this.fromPOValidationcalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-3']/button");
        this.fromPOValidationDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.oldDate=page.locator("(//table[@class='mat-calendar-table']/tbody/tr[2]/td)[1]");
        this.futureDate=page.locator("(//table[@class='mat-calendar-table']/tbody/tr[5]/td)[1]");
        this.toPOValidationDate=page.locator("//input[@id='mat-input-3']");
        this.toPOValidationDateLabel=page.locator("//mat-label[text()='To PO Validation Date']");
       this.toPOValidationcalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-4']/button");
        this.Type=page.locator("//input[@id='mat-input-22']");
        this.fromDueDate=page.locator("//input[@id='mat-input-4']");
        this.fromDueDateLabel=page.locator("//mat-label[text()='From Due Date']");
         this.fromDueDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-5']/button");
        this.fromDueDateDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.toDueDate=page.locator("//input[@id='mat-input-5']");
        this.toDueDateLabel=page.locator("//mat-label[text()='To Due Date']");
         this.toDueDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-6']/button");
        this.toDueDateDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.destinationAccount=page.locator("//input[@id='mat-input-6']");
        this.fromSettleDate=page.locator("//input[@id='mat-input-7']");
        this.fromSettleDateLabel=page.locator("//mat-label[text()='From Settle Date']");
        this.fromSettleDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-7']/button");
        this.fromSettleDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.toSettleDateLabel=page.locator("//mat-label[text()='To Settle Date']");
        this.toSettleDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-8']/button");
        this.toSettleDateDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.toSettleDate=page.locator("//input[@id='mat-input-8']");
        this.POID=page.locator("//input[@id='mat-input-9']");
        this.fromChequeReleaseDate=page.locator("//input[@id='mat-input-10']");
        this.fromChequeReleaseDateLabel=page.locator("//mat-label[text()='From Cheque Release Date']");
        this.fromChequeReleaseDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-9']/button");
        this.fromChequeReleaseDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.toChecqueReleaseDate=page.locator("//input[@id='mat-input-11']");
        this.toChequeReleaseDateLabel=page.locator("//mat-label[text()='To Cheque Release Date']");
        this.toChequeReleaseDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-10']/button");
        this.toChequeReleaseDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.bankReference=page.locator("//input[@id='mat-input-12']");
        this.fromPOReleaseDate=page.locator("//input[@id='mat-input-13']");
        this.fromPOReleaseDateLabel=page.locator("//mat-label[text()='From PO Release Date']");
        this.fromPOReleaseDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-10']/button");
        this.fromPOReleaseDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.toPOReleaseDate=page.locator("//input[@id='mat-input-14']");
        this.toPOReleaseDateLabel=page.locator("//mat-label[text()='To PO Release Date']");
        this.toPOReleaseDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-10']/button");
        this.toPOReleaseDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.Settled=page.locator("//mat-select[@id='mat-select-4']");
        this.Country=page.locator("//input[@id='mat-input-23']");
        this.providerType=page.locator("//input[@id='mat-input-24']");
        this.provider=page.locator("//input[@id='mat-input-25']");
        this.fromAmount=page.locator("//input[@id='mat-input-15']");
        this.toAmount=page.locator("//input[@id='mat-input-16']");
        this.fromdeliveryDate=page.locator("//input[@id='mat-input-17']");
        this.toDeliveryDate=page.locator("//input[@id='mat-input-18']");
        this.AccountTransactions=page.locator("//h1[text()='Account Transactions ']");
        this.Searchresults=page.locator("//label[text()='Search Result : ']");
        this.SearchButton=page.locator("//button[@aria-label='Search']");
        this.errorMsg=page.locator("//mat-error[@id='mat-error-0']");
        this.genratefile=page.locator("//div[text()='Generate Data File ']");
        this.search=page.locator("final-grid-component input");
        this.eyeIcon=page.locator("(//table[@id='dddd']/tbody/tr/td[16]/div/div/img)[1]");
        this.accTransPopUp=page.locator("nc-account-detail");
        this.chequeReleaseDate=page.locator("//input[@id='chequereleasedate']");
        this.chequeSentDate=page.locator("//input[@id='chequesentdate']");
        this.popDueDate=page.locator("//input[@formcontrolname='dueDate']");
        this.popSettlementDate=page.locator("//input[@formcontrolname='settlementDate']");
        this.popTransactionType=page.locator("//input[@formcontrolname='transactionType']");
        this.popDestination=page.locator("//input[@formcontrolname='destination']");
        this.popCurrency=page.locator("//input[@formcontrolname='currency']");
        this.popAmount=page.locator("//input[@formcontrolname='amount']");
        this.popcvc=page.locator("//input[@formcontrolname='counterValue']");
        this.popcva=page.locator("//input[@formcontrolname='counterValueAmount']");
        this.poplabel=page.locator("//input[@formcontrolname='lable']");
        this.poppo=page.locator("//input[@formcontrolname='paymentOrder']");
        this.popdeleiveryDate=page.locator("//input[@formcontrolname='deliveryDate']");
        this.popCheckbox=page.locator("//mat-checkbox[@id='mat-checkbox-4']");
        this.popPendingtext=page.locator("//div[text()='Pending Reason']/..");
        this.reason=page.locator("//textarea[@id='textarea']");
        this.error=page.locator("//mat-error[text()=' This field is required ']");
        this.popApply=page.locator("(//div[@class='btn-section']/button)[1]");
        this.popCancel=page.locator("//button[@class='clear-button']");
        this.applyButton=page.locator("//div[text()='Apply']");
        this.popAlert=page.locator("nc-msg-dialog");
        this.popClose=page.locator("//div[@class='title-div']/img");
        this.itemPerPage=page.locator("(//div[@class='mat-paginator-page-size-label'])[2]");
        this.itemppDD=page.locator("//mat-select[@aria-label='Items per page:']/div/div[2]");
        this.itempp10=page.locator("//span[text()=' 10 ']");
        this.itempp15=page.locator("//span[text()=' 15 ']");
        this.itempp20=page.locator("//span[text()=' 20 ']");
        this.itempp30=page.locator("//span[text()=' 30 ']");
        this.itempp50=page.locator("//span[text()=' 50 ']");
        this.itempp100=page.locator("//span[text()=' 100 ']");
        this.paginator=page.locator("(//div[@class='mat-paginator-range-label'])[2]");
        this.leftArrow=page.locator("(//div[@class='mat-paginator-range-actions']/button)[3]");
        this.rightArrow=page.locator("(//div[@class='mat-paginator-range-actions']/button)[4]");
        this.typeDrop=page.locator("//div[@id='cdk-overlay-0']");
        this.typeDropfirst=page.locator("//div[@id='cdk-overlay-0']/div/mat-option[1]");
        this.SettledDrop=page.locator("//div[@id='mat-select-4-panel']");
        this.CountryDrop=page.locator("//div[@id='mat-autocomplete-4']");
        this.providerTypeDrop=page.locator("//div[@id='mat-autocomplete-5']");
       // this.providerDrop=page.locator("")
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

    async validatefieldsVisibility(){
        expect(await this.payer.isVisible());
        expect(await this.Currency.isVisible());
        expect(await this.Account.isVisible());
        expect(await this.fromPOValidationDate.isVisible());
        expect(await this.toPOValidationDate.isVisible());
        expect(await this.Type.isVisible());
        expect(await this.fromDueDate.isVisible());
        expect(await this.toDueDate.isVisible());
        expect(await this.destinationAccount.isVisible());
        expect(await this.fromSettleDate.isVisible());
        expect(await this.toSettleDate.isVisible());
        expect(await this.POID.isVisible());
        expect(await this.fromChequeReleaseDate.isVisible());
        expect(await this.toChecqueReleaseDate.isVisible());
        expect(await this.bankReference.isVisible());
        expect(await this.fromPOReleaseDate.isVisible());
        expect(await this.toPOReleaseDate.isVisible());
        expect(await this.Settled.isVisible());
        expect(await this.Country.isVisible());
        expect(await this.providerType.isVisible());
        expect(await this.provider.isVisible());
        expect(await this.fromAmount.isVisible());
        expect(await this.toAmount.isVisible());
        expect(await this.fromdeliveryDate.isVisible());    
        expect(await this.toDeliveryDate.isVisible());
        expect(await this.AccountTransactions.isVisible());
        expect(await this.Searchresults.isVisible());

    }
    async fillMandaoryDetails(payerValue: String,fromDelDate:String,toDeldate: String,account:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.Account.click();
        const acc = this.page.locator("//span[text()='Union Ins.']").first();
        await acc.waitFor({ state: "visible", timeout: 10000 });
        await acc.click();  
       await this.fromdeliveryDate.fill(fromDelDate.trim());
        await this.toDeliveryDate.fill(toDeldate.trim());
    }

    async clickonSearch(){
        await this.SearchButton.click();
    }
    async fillAllDetails(payerValue: String,fromDelDate:String,toDeldate: String, AccountValue:String, type: String, country:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();  
        await this.page.waitForLoadState("networkidle");
       // await this.Account.fill("");  
       // for (const char of this.AccountValue) {await this.Account.type(char, { delay: 200 }); }
        await this.Account.click();
       const acc = this.page.locator("//span[text()='ADNIC - Escrow']").first();
        await acc.waitFor({ state: "visible", timeout: 10000 });
        await acc.click();  
        await this.fromPOValidationDate.fill(fromDelDate.trim());
        await this.toPOValidationDate.fill(toDeldate.trim());
        await this.Type.click();
        await this.page.locator("//span[text()='Reimbursement Claims']").click();  
        await this.fromDueDate.fill(fromDelDate.trim());
        await this.toDueDate.fill(toDeldate.trim());
        await this.fromSettleDate.fill(fromDelDate.trim());
        await this.toSettleDate.fill(toDeldate.trim());
        await this.fromChequeReleaseDate.fill(fromDelDate.trim());
        await this.toChecqueReleaseDate.fill(toDeldate.trim());
        await this.fromPOReleaseDate.fill(fromDelDate.trim());
        await this.toPOReleaseDate.fill(toDeldate.trim());
        await this.Settled.click();
        await this.page.locator("//span[text()=' Yes ']").click();
        await this.Country.click();
        await this.page.locator("//span[text()='United Arab Emirates']").click(); 
        await this.fromdeliveryDate.fill(fromDelDate.trim());
        await this.toDeliveryDate.fill(toDeldate.trim());
    }

    async verifyErrorMsg(){
        expect(await this.errorMsg.isVisible());
    }
    async clickgeneratefile(){
        await this.page.waitForTimeout(5000);
        await this.genratefile.click();
        await this.page.waitForTimeout(5000);
    }

    async verifySearch(provider: String){
        await this.search.click();
        await this.search.fill(provider.trim());
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
    }
    async noRecordFound(){
        await this.page.locator("//div[text()=' No Records Found ']")
    }
    async validateEyeIcon(){
        expect(await this.eyeIcon.isVisible());
        await this.page.waitForTimeout(2000);
        await this.eyeIcon.click();
        await this.page.waitForTimeout(5000);
        expect(await this.accTransPopUp.isVisible())
    }

    async validatepopupdetail(){
        await this.chequeReleaseDate.click();
        await this.page.keyboard.press('Enter');
        await this.chequeSentDate.click();
    }

    async nonEditableField(){
        expect(await this.popDueDate.isVisible());
        expect(await this.popSettlementDate.isVisible());
        expect(await this.popTransactionType.isVisible());
        expect(await this.popDestination.isVisible());
        expect(await this.popCurrency.isVisible());
        expect(await this.popAmount.isVisible());
        expect(await this.popcvc.isVisible());
        expect(await this.popcva.isVisible());
        expect(await this.poplabel.isVisible());
        expect(await this.poppo.isVisible());
        expect(await this.popdeleiveryDate.isVisible());
    }

    async pendingCheckbox(){
        expect(await this.popCheckbox.isVisible());
        await this.popCheckbox.click();
        await this.page.waitForTimeout(5000);
        expect(await this.popPendingtext.isVisible())
    }

    async pendingReasonPopup(){
        await this.popPendingtext.click();
        await this.page.waitForTimeout(2000);
        expect(await this.reason.isVisible());
    }

    async pendingReasonText(){
         await this.page.waitForTimeout(2000);
        await this.page.locator("//div[text()='Pending Reason']/..").click();
        await this.page.waitForTimeout(2000);
        await this.reason.fill("test");
        await this.page.waitForTimeout(2000);
        await this.popApply.click();
        expect(await this.reason.isVisible());
    }

    async pendingPopupCancel(){
          await this.page.waitForTimeout(2000);
        await this.page.locator("//div[text()='Pending Reason']/..").click();
        await this.page.waitForTimeout(2000);
        await this.popCancel.click();
       
    }
    async errorMessage(){
        expect(await this.error.isVisible());
    }

    async newChequereleaseDate(Releasedate: String){
        await this.chequeReleaseDate.fill(Releasedate.trim());
        await this.page.waitForTimeout(2000);
        await this.applyButton.click();
        expect(await this.popAlert.isVisible());
    }

        async newChequeSentDate(sentDate: String){
        await this.chequeSentDate.fill(sentDate.trim());
        await this.page.waitForTimeout(2000);
        await this.applyButton.click();
        expect(await this.popAlert.isVisible());
    }

    async closePopup(){
        await this.popClose.click();
    }

    async verifyPerPage(){
        expect(await this.itemPerPage.isVisible());
        await this.itemppDD.click();
        await this.page.waitForTimeout(2000);
    }

    async itemperPagedd(){
        await this.itemppDD.click();
        await this.page.waitForTimeout(2000);
        expect(await this.itempp10.isVisible());
        expect(await this.itempp15.isVisible());
        expect(await this.itempp20.isVisible());
        expect(await this.itempp30.isVisible());
        expect(await this.itempp50.isVisible());
        expect(await this.itempp100.isVisible());
    }

    async verifypagination(){
        expect(await this.paginator.isVisible());
        expect(await this.leftArrow.isVisible());
        expect(await this.rightArrow.isVisible());
    }

    async verifyfromPODate(){
        expect(await this.fromPOValidationDate.isVisible());
        expect(await this.fromPOValidationDateLabel.isVisible());
    }

    async verifyfromPODateCalendar(){
        
        await this.fromPOValidationcalendarButton.click();
       expect(await this.fromPOValidationDateCalendar.isVisible());
    }

    async verifyOldDate(){
        await this.oldDate.click();
    }

    async verifyFutureDate(){
        await this.futureDate.click();
    }
    async verifytoPODate(){
        expect(await this.fromPOValidationDate.isVisible());
        expect(await this.fromPOValidationDateLabel.isVisible());
    }

    async verifytoPODateCalendar(){
        
        await this.fromPOValidationcalendarButton.click();
       expect(await this.fromPOValidationDateCalendar.isVisible());
    }
    async fillPOValidationDate(payerValue: String,fromPOValidDate:String,toPOValiddate: String,account:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.Account.click();
        const acc = this.page.locator("//span[text()='Union Ins.']").first();
        await acc.waitFor({ state: "visible", timeout: 10000 });
        await acc.click();  
        await this.fromPOValidationDate.fill(fromPOValidDate.trim());
        await this.toPOValidationDate.fill(toPOValiddate.trim());
    }

    async InvalidPageMsg(){
        await this.page.locator("(//mat-error[text()='Invalid Date'])[1]");
    }

    async verifyfromDueDate(){
        expect(await this.fromDueDate.isVisible());
        expect(await this.fromDueDateLabel.isVisible());
    }

    async verifyfromDueDateCalendar(){
        
        await this.fromDueDatecalendarButton.click();
       expect(await this.fromDueDateDateCalendar.isVisible());
    }

     async verifytoDueDate(){
        expect(await this.toDueDate.isVisible());
        expect(await this.toDueDateLabel.isVisible());
    }

    async verifytoDueDateCalendar(){
        
        await this.toDueDatecalendarButton.click();
       expect(await this.toDueDateDateCalendar.isVisible());
    }
async fillDueDate(payerValue: String,fromDueDate1:String,toDueDate1: String,account:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        try {
            await option.waitFor({ state: "visible", timeout: 20000 });
        } catch {
            await this.payer.fill("");
            for (const char of payerValue) {await this.payer.type(char, { delay: 250 }); }
            await option.waitFor({ state: "visible", timeout: 20000 });
        }
        await option.click();      
        await this.Account.click();
        const acc = this.page.locator("//span[text()='Union Ins.']").first();
        await acc.waitFor({ state: "visible", timeout: 15000 });
        await acc.click();  
       await this.fromDueDate.fill(fromDueDate1.trim());
        await this.toDueDate.fill(toDueDate1.trim());
    }

    async verifyfromSettleDate(){
          expect(await this.fromSettleDate.isVisible());
        expect(await this.fromSettleDateLabel.isVisible());
           
    }

    async verifyfromSettleDateCalendar(){
        
        await this.fromSettleDatecalendarButton.click();
       expect(await this.fromSettleDateCalendar.isVisible());
    }

     async verifytoSettleDate(){
        expect(await this.toSettleDate.isVisible());
        expect(await this.toSettleDateLabel.isVisible());
    }

    async verifytoSettleDateCalendar(){
        
        await this.toSettleDatecalendarButton.click();
       expect(await this.toSettleDateDateCalendar.isVisible());
    }

    async fillSettleDate(payerValue: String,fromSettleDate1:String,toSettleDate1: String,account:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.Account.click();
        const acc = this.page.locator("//span[text()='Union Ins.']").first();
        await acc.waitFor({ state: "visible", timeout: 10000 });
        await acc.click();  
       await this.fromSettleDate.fill(fromSettleDate1.trim());
        await this.toSettleDate.fill(toSettleDate1.trim());
    }

      async verifyfromPOReleaseDate(){
          expect(await this.fromPOReleaseDate.isVisible());
        expect(await this.fromPOReleaseDateLabel.isVisible());
           
    }

    async verifyfromPOReleaseDateCalendar(){
        
        await this.fromPOReleaseDatecalendarButton.click();
       expect(await this.fromPOReleaseDateCalendar.isVisible());
    }

     async verifytoPOReleaseDate(){
        expect(await this.toPOReleaseDate.isVisible());
        expect(await this.toPOReleaseDateLabel.isVisible());
    }

    async verifytoPOReleaseDateCalendar(){
        
        await this.toPOReleaseDatecalendarButton.click();
       expect(await this.toPOReleaseDateCalendar.isVisible());
    }

    async fillPOReleaseDate(payerValue: String,fromChequereleaseDate1:String,toChequereleaseDate1: String,account:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.Account.click();
        const acc = this.page.locator("//span[text()='Union Ins.']").first();
        await acc.waitFor({ state: "visible", timeout: 10000 });
        await acc.click();  
       await this.fromPOReleaseDate.fill(fromChequereleaseDate1.trim());
        await this.toPOReleaseDate.fill(toChequereleaseDate1.trim());
    }

      async verifyfromChequeReleaseDate(){
          expect(await this.fromChequeReleaseDate.isVisible());
        expect(await this.fromChequeReleaseDateLabel.isVisible());
           
    }

    async verifyfromChequeReleaseDateCalendar(){
        
        await this.fromChequeReleaseDatecalendarButton.click();
       expect(await this.fromChequeReleaseDateCalendar.isVisible());
    }

     async verifytoChequeReleaseDate(){
        expect(await this.toChecqueReleaseDate.isVisible());
        expect(await this.toChequeReleaseDateLabel.isVisible());
    }

    async verifytoChequeReleaseDateCalendar(){
        
        await this.toChequeReleaseDatecalendarButton.click();
       expect(await this.toChequeReleaseDateCalendar.isVisible());
    }

    async fillChequeReleaseDate(payerValue: String,fromChequereleaseDate1:String,toChequereleaseDate1: String,account:String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.Account.click();
        const acc = this.page.locator("//span[text()='Union Ins.']").first();
        await acc.waitFor({ state: "visible", timeout: 10000 });
        await acc.click();  
       await this.fromChequeReleaseDate.fill(fromChequereleaseDate1.trim());
        await this.toChecqueReleaseDate.fill(toChequereleaseDate1.trim());
    }

    async typeDropdown(){
        await this.Type.click();
        await this.page.waitForTimeout(2000);
        expect(await this.typeDrop.isVisible());
    }

    async selectfirstdropdown(){
        await this.typeDropfirst.click();
        log(await this.Type.inputValue());
    }

    async selectedOption(type1:String){
        expect(type1).toBe(await this.Type.inputValue())
    }

     async selectedSettleOption(type1:String){
        expect(type1.trim()).toBe((await this.Settled.innerText()).trim())
    }
    async fillPaymentOrderID(paymentOrderID:String){
        await this.POID.fill(paymentOrderID.trim());
    }

    async blankOrderID(){
       const x = await this.POID.inputValue();
       console.log(x);
       expect(x).toBe("");
    }

    async fillBankRef(bankReference1:String){
        await this.bankReference.fill(bankReference1.trim());
    }

    async blankrefernceID(){
       const x = await this.bankReference.inputValue();
       console.log(x);
       expect(x).toBe("");
    }

    async verifysettledDropdown(){
        await this.Settled.click();
        await this.page.waitForTimeout(2000);
        expect(await this.SettledDrop.isVisible());
    }

    async selectfirstSettledDropdown(){
         await this.SettledDrop.first().click();
         const x= await this.Settled.innerText();
        log(x);
    }

    async verifyCountryDropdown(){
        await this.Country.click();
        await this.page.waitForTimeout(2000);
        expect(await this.CountryDrop.isVisible());
    }

    async selectfirstCountryDropdown(){
      await this.CountryDrop.first().click();
      const x= await this.Country.innerText();
      await this.page.waitForTimeout(1000);
      log(x);
    }

    async selectedCountryOption(type1:String){
        expect(type1.trim()).toBe((await this.Country.inputValue()));
    }

    async verifyProvider(){
        expect(await this.provider.isDisabled());
        expect(await this.providerType.isDisabled());
    }

    async verifyProviderEnabled(){
        expect(await this.provider.isEnabled());
        expect(await this.providerType.isEnabled());
    }

     async verifyProviderTypeDropdown(){
        await this.providerType.click();
        await this.page.waitForTimeout(2000);
        expect(await this.providerTypeDrop.isVisible());
    }

    async selectfirstProviderTypeDropdown(){
      await this.providerTypeDrop.first().click();
      const x= await this.providerType.innerText();
      await this.page.waitForTimeout(2000);
      log(x);
    }

    async selectedProviderTypeOption(type1:String){
        expect(type1.trim()).toBe((await this.providerType.inputValue()));
    }

    // async verifyProviderDropdown(){
    //     await this.provider.click();
    //     await this.page.waitForTimeout(2000);
    //     expect(await this.providerDrop.isVisible())
    // }

    async tableFieldVisibility(){
        expect(await this.page.getByRole('columnheader', { name: 'Settled Up Sorting Icon Down' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Cheque Released Up Sorting' }).isVisible());
        expect(await this.page.getByRole('columnheader', { name: 'Cheque Released Up Sorting' }).isVisible());
        expect(await this.page.getByRole('columnheader', { name: 'Cheque Sent Up Sorting Icon' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'PO ID Up Sorting Icon Down' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'TXN NBR Up Sorting Icon Down' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Due Date Up Sorting Icon Down' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Destination Account Up' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'principal Up Sorting Icon' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Provider Up Sorting Icon Down' }).isVisible());
        //expect(await this.page.getByRole('button', { name: 'Amount Up Sorting Icon Down' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Counter Value Up Sorting Icon' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Settled Date Up Sorting Icon' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Cheque Released Date Up' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Cheque Sent Date Up Sorting' }).isVisible());
        expect(await this.page.getByRole('button', { name: 'Bank Reference Up Sorting' }).isVisible());
        
    }
 
    async generateDatefileFields(){
        await this.page.waitForLoadState("networkidle");
        expect(await this.page.getByText('Account Transaction *').isVisible());
        expect(await this.page.locator('#mat-dialog-0 div').filter({ hasText: /^Account \*$/ }).nth(3).isVisible());
        expect(await this.page.locator('.cdk-overlay-container > div:nth-child(3)').isVisible());
        expect(await this.page.getByRole('button', { name: 'Preferences' }).isVisible());
        await this.page.getByRole('button', { name: 'Preferences' }).click();
        await this.page.waitForTimeout(5000);
        expect(await this.page.locator('div').filter({ hasText: /^Title$/ }).nth(3).isVisible());
        await this.page.locator("//input[@id='mat-input-28']").fill("test");
        
        expect(await this.page.getByRole('img', { name: 'No icon found' }).isVisible());
 
    }
 
    async JobCreatedMsg(){
        expect(await this.page.locator('snack-bar-container').isVisible());
    }
 
}