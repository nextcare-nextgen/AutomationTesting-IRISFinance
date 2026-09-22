import { expect, Locator, Page } from "@playwright/test";
import { log } from "console";


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
    errorAmount: Locator;
    fromdeliveryDateCalendar: Locator;
    fromdeliveryDatecalendarButton: Locator;
    fromdeliveryDateLabel: Locator;
    todeliveryDateLabel: Locator;
    todeliveryDatecalendarButton: Locator;
    todeliveryDateCalendar: Locator;
    chequeNotSentCheckbox: Locator;
    popBankReference: Locator;
    popChequeSentDate: Locator;
    popChequeReleaseDate: Locator;

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
        this.Settled=page.locator("//mat-select[@id='mat-select-0']");
        this.Country=page.locator("//input[@id='mat-input-23']");
        this.providerType=page.locator("//input[@id='mat-input-24']");
        this.provider=page.locator("//input[@id='mat-input-25']");
        this.fromAmount=page.locator("//input[@id='mat-input-15']");
        this.toAmount=page.locator("//input[@id='mat-input-16']");
        this.fromdeliveryDate=page.locator("//input[@id='mat-input-17']");
        this.fromdeliveryDateLabel=page.locator("//mat-label[text()='From Delivery Date']");
        this.fromdeliveryDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-10']/button");
        this.fromdeliveryDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
       this.todeliveryDateLabel=page.locator("//mat-label[text()='To Delivery Date']");
        this.todeliveryDatecalendarButton=page.locator("//mat-datepicker-toggle[@data-mat-calendar='mat-datepicker-10']/button");
        this.todeliveryDateCalendar=page.locator("mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today");
        this.toDeliveryDate=page.locator("//input[@id='mat-input-18']");
        this.AccountTransactions=page.locator("//h1[text()='Account Transactions ']");
        this.Searchresults=page.locator("//label[text()='Search Result : ']");
        this.SearchButton=page.locator("//button[@aria-label='Search']");
        this.errorMsg=page.locator("//mat-error[@id='mat-error-0']");
        this.genratefile=page.locator("//div[text()='Generate Data File ']/..");
        this.search=page.locator("final-grid-component input");
        //this.eyeIcon=page.locator("(//table[@id='dddd']/tbody/tr[1]/td[last()]//img)[1]");
        this.eyeIcon = this.page.locator("table tbody tr").first().locator("td:last-child img").first();
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
        this.popCheckbox = this.page.locator("mat-checkbox").filter({ hasText: "Pending" });
        this.popPendingtext = this.page.getByRole("button", {name: "Pending Reason"});
        this.popBankReference=page.locator("//input[@id='bankreference']");
        this.popChequeReleaseDate=page.locator("//input[@id='chequereleasedate']");
        this.popChequeSentDate=page.locator("//input[@id='chequesentdate']");
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
        this.errorAmount=page.locator("//span[contains(text(),'Choose amount greater than')]");
        this.chequeNotSentCheckbox=page.locator(" //span[text()=' Cheques Not Sent '] /../span[1]");
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

    async fillMandatoryDetails(payerValue: String,fromDelDate:String,toDeldate: String,account:String){
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

    // async clickonSearch(){
    //     await this.page.waitForTimeout(10000);
    //     await this.SearchButton.click();
    //     await this.page.waitForLoadState("networkidle");
    // }

    async clickonSearch() {
        const searchButton = this.page.getByRole("button", {name: "Search"});
        await expect(searchButton).toBeEnabled({timeout: 10000});
        await searchButton.click();
        console.log("Search clicked");
        const appLoader = this.page.locator("app-new-loader");
        await appLoader.waitFor({state: "hidden",timeout: 60000}).catch(() => {});
        await this.page.waitForTimeout(2000);
    }

    // async fillMandatoryDetailsWithRetry(payerValue: string, fromDelDate: string, toDelDate: string, account: string) {
    //     const appLoader = this.page.locator("app-new-loader");
    //     await this.page.waitForLoadState("domcontentloaded");
    //     await this.payer.waitFor({ state: "visible", timeout: 30000 });
    //     await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

    //     await this.payer.click();
    //     await this.payer.fill("");

    //     const payerOption = this.page.locator(`//span[contains(text(),'${payerValue}')]`).first();

    //     try {
    //         await this.payer.type(payerValue, { delay: 200 });
    //         await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
    //         await payerOption.waitFor({ state: "visible", timeout: 15000 });
    //         await this.page.keyboard.press("Enter").catch(() => {});
    //         await payerOption.click();
    //     } catch {
    //         console.log("Retrying payer selection...");
    //         await this.payer.click();
    //         await this.payer.fill("");
    //         for (const char of payerValue) {
    //             await this.payer.type(char, { delay: 200 });
    //             await appLoader.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
    //         }
    //         await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
    //         await payerOption.waitFor({ state: "visible", timeout: 15000 });
    //         await this.page.keyboard.press("Enter").catch(() => {});
    //         await payerOption.click();
    //     }

    //     await this.page.waitForTimeout(2000);
    //     await expect(this.Account).toBeVisible({ timeout: 10000 });
    //     await this.Account.click();
    //     const accOption = this.page.locator(`//span[contains(text(),'${account}')]`).first();
    //     try {
    //         await accOption.waitFor({ state: "visible", timeout: 10000 });
    //         await accOption.click();
    //     } catch {
    //         console.log(`Retrying account selection with fallback for "${account}"...`);
    //         const firstAccountOption = this.page.locator("mat-option").first();
    //         await firstAccountOption.waitFor({ state: "visible", timeout: 10000 });
    //         await firstAccountOption.click();
    //     }

    //     // await this.fromdeliveryDate.fill(fromDelDate.trim());
    //     // await this.toDeliveryDate.fill(toDelDate.trim());
    //     // await this.toDeliveryDate.press("Tab");
    //     // console.log(`Payer "${payerValue}" and Account "${account}" selected successfully.`);
    //     await this.fromdeliveryDate.click();
    //     await this.fromdeliveryDate.pressSequentially(fromDelDate.trim(), { delay: 100 });
    //     await this.fromdeliveryDate.press("Tab");

    //     await this.toDeliveryDate.click();
    //     await this.toDeliveryDate.pressSequentially(toDelDate.trim(), { delay: 100 });
    //     await this.toDeliveryDate.press("Tab");

    //     await this.page.waitForTimeout(1000);
    //     console.log("From Delivery Date:", await this.fromdeliveryDate.inputValue());
    //     console.log("To Delivery Date:", await this.toDeliveryDate.inputValue());
    // }

    async fillMandatoryDetailsWithRetry(payerValue: string, fromDelDate: string, toDelDate: string, account: string) {
        const appLoader = this.page.locator("app-new-loader");

        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await this.payer.click();
        await this.payer.fill("");

        for (let i = 0; i < payerValue.length; i++) {
            await this.payer.pressSequentially(payerValue[i], {
                delay: 250
            });

            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }

        let payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 20000});
        await payerOption.click();
        await this.payer.click();
        await this.page.waitForTimeout(1000);

        payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.press("Tab");
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("UAE Dirham", {timeout: 30000});
        await this.Account.click();
        const accOption = this.page.locator(`//span[contains(normalize-space(.), '${account}')]`).first();

        await expect(accOption).toBeVisible({timeout: 20000});
        await accOption.click();
        await this.fromdeliveryDate.click();
        await this.fromdeliveryDate.fill(fromDelDate.trim());
        await this.fromdeliveryDate.press("Tab");
        await this.toDeliveryDate.click();
        await this.toDeliveryDate.fill(toDelDate.trim());
        await this.toDeliveryDate.press("Tab");
        await expect(this.fromdeliveryDate).toHaveValue(fromDelDate.trim(),{ timeout: 10000 });
        await expect(this.toDeliveryDate).toHaveValue(toDelDate.trim(),{ timeout: 10000 });
        console.log(`Payer: ${await this.payer.inputValue()}`);
        console.log(`Currency: ${await currency.inputValue()}`);
        console.log(`Account: ${await this.Account.inputValue()}`);
        console.log(`From Delivery Date: ${await this.fromdeliveryDate.inputValue()}`);
        console.log(`To Delivery Date: ${await this.toDeliveryDate.inputValue()}`);
        await this.page.waitForTimeout(1000);
    }

    async fillMandatoryDetailsWithRetryDev(
    payerValue: string,
    fromDelDate: string,
    toDelDate: string,
    account: string
) {
    await this.page.waitForLoadState("domcontentloaded");
    await this.payer.waitFor({
        state: "visible",
        timeout: 30000
    });

    // =========================
    // PAYER
    // =========================
    await this.payer.click();
    await this.payer.fill("");

    for (let i = 0; i < payerValue.length; i++) {
        await this.payer.pressSequentially(payerValue[i], {
            delay: 250
        });

        if (i === 2) {
            await this.page.waitForTimeout(5000);
        }
    }

    let payerOption = this.page
        .locator(`//span[contains(normalize-space(.), '${payerValue}')]`)
        .first();

    await expect(payerOption).toBeVisible({
        timeout: 20000
    });

    await payerOption.click();

    // Application sometimes needs payer to be opened again
    await this.payer.click();
    await this.page.waitForTimeout(1000);

    payerOption = this.page
        .locator(`//span[contains(normalize-space(.), '${payerValue}')]`)
        .first();

    await expect(payerOption).toBeVisible({
        timeout: 15000
    });

    await payerOption.click();
    await this.payer.press("Tab");

    // =========================
    // CURRENCY
    // =========================
    const currency = this.page.getByRole("combobox", {
        name: "Currency"
    });

    await expect(currency).toHaveValue("Rial Omani", {
        timeout: 30000
    });

    // =========================
    // ACCOUNT
    // =========================
    await this.Account.click();

    const accOption = this.page
        .locator(`//span[contains(normalize-space(.), '${account}')]`)
        .first();

    await expect(accOption).toBeVisible({
        timeout: 20000
    });

    await accOption.click();

    // =========================
    // FROM DELIVERY DATE
    // =========================
    await this.fromdeliveryDate.click();
    await this.fromdeliveryDate.fill(fromDelDate.trim());
    await this.fromdeliveryDate.press("Tab");

    // =========================
    // TO DELIVERY DATE
    // =========================
    await this.toDeliveryDate.click();
    await this.toDeliveryDate.fill(toDelDate.trim());
    await this.toDeliveryDate.press("Tab");

    // =========================
    // VERIFY VALUES
    // =========================
    await expect(this.fromdeliveryDate).toHaveValue(
        fromDelDate.trim(),
        { timeout: 10000 }
    );

    await expect(this.toDeliveryDate).toHaveValue(
        toDelDate.trim(),
        { timeout: 10000 }
    );

    console.log(`Payer: ${await this.payer.inputValue()}`);
    console.log(`Currency: ${await currency.inputValue()}`);
    console.log(`Account: ${await this.Account.inputValue()}`);
    console.log(`From Delivery Date: ${await this.fromdeliveryDate.inputValue()}`);
    console.log(`To Delivery Date: ${await this.toDeliveryDate.inputValue()}`);

    await this.page.waitForTimeout(1000);
}

    async fillAllDetails(payerValue: String,fromDelDate:String,toDeldate: String, AccountValue:String, type: String, country:String){
        const appLoader = this.page.locator("app-new-loader");
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

        await this.payer.click();
        await this.payer.fill("");
        const payerText = payerValue.toString();
        const payerOption = this.page.locator(`//span[contains(text(),'${payerText}')]`).first();

        try {
            await this.payer.type(payerText, { delay: 200 });
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        } catch {
            console.log("Retrying payer selection...");
            await this.payer.click();
            await this.payer.fill("");
            for (const char of payerText) {
                await this.payer.type(char, { delay: 200 });
                await appLoader.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
            }
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        }

        await this.page.waitForTimeout(2000);
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
        // await this.Settled.click();
        // await this.page.locator("//span[text()=' Yes ']").click();
        await this.Country.click();
        await this.page.locator("//span[text()='United Arab Emirates']").click(); 
        await this.fromdeliveryDate.fill(fromDelDate.trim());
        await this.toDeliveryDate.fill(toDeldate.trim());
    }

    async fillAllDetailsDev(payerValue: String,fromDelDate:String,toDeldate: String, AccountValue:String, type: String, country:String){
        const appLoader = this.page.locator("app-new-loader");
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

        await this.payer.click();
        await this.payer.fill("");
        const payerText = payerValue.toString();
        const payerOption = this.page.locator(`//span[contains(text(),'${payerText}')]`).first();

        try {
            await this.payer.type(payerText, { delay: 200 });
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        } catch {
            console.log("Retrying payer selection...");
            await this.payer.click();
            await this.payer.fill("");
            for (const char of payerText) {
                await this.payer.type(char, { delay: 200 });
                await appLoader.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
            }
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        }

        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState("networkidle");
        await this.Account.click();
        const accOption = this.page.locator(`//span[contains(normalize-space(.), '${AccountValue}')]`).first();
        await expect(accOption).toBeVisible({timeout: 20000});

        await accOption.click();
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
        // await this.Settled.click();
        // await this.page.locator("//span[text()=' Yes ']").click();
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
        await this.page.waitForTimeout(5000);
        await this.search.click();
        await this.search.fill(provider.trim());
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
    }

    async noRecordFound(){
        await this.page.locator("//div[text()=' No Records Found ']")
    }

    // async validateEyeIcon(){
    //     const appLoader = this.page.locator("app-new-loader");
    //     await this.page.waitForLoadState("domcontentloaded");
    //     await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

    //     await this.eyeIcon.waitFor({ state: "visible", timeout: 20000 });
    //     await expect(this.eyeIcon).toBeVisible({ timeout: 20000 });
    //     await this.eyeIcon.click();

    //     await expect(this.accTransPopUp).toBeVisible({ timeout: 20000 });
    // }

    async validateEyeIcon() {
        const rows = this.page.locator("table tbody tr");
        await expect(rows.first()).toBeVisible({timeout: 60000});
        await expect(this.eyeIcon).toBeVisible({timeout: 30000});
        await this.eyeIcon.click();
    }

    async verifySearchResult() {
        const resultText = await this.page.locator("body").innerText();

        console.log(
            resultText.includes("No Records Found")
                ? "❌ Search returned NO RECORDS"
                : "✅ Search returned records"
        );
    }

    async validatepopupdetail(){
        await this.chequeReleaseDate.click();
        await this.page.keyboard.press('Enter');
        await this.page.getByRole("button", { name: "OK" }).click();
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

    async pendingCheckbox() {
        await expect(this.popCheckbox).toBeVisible();
        await this.popCheckbox.click();
        await this.page.waitForTimeout(2000);
        await this.popCheckbox.click();
        await expect(this.popPendingtext).toBeVisible({timeout: 10000});
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

    // async fillPOValidationDate(payerValue: String,fromPOValidDate:String,toPOValiddate: String,account:String){
    //     await this.page.waitForLoadState("networkidle");
    //     await this.payer.fill("");  
    //     for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
    //     const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
    //     await option.waitFor({ state: "visible", timeout: 10000 });
    //     await option.click();      
    //     await this.Account.click();
    //     const acc = this.page.locator("//span[text()='Union Ins.']").first();
    //     await acc.waitFor({ state: "visible", timeout: 10000 });
    //     await acc.click();  
    //    await this.fromPOValidationDate.fill(fromPOValidDate.trim());
    //     await this.toPOValidationDate.fill(toPOValiddate.trim());

        
    // }

    async fillPOValidationDate(payerValue: string, fromPOValidDate: string, toPOValidDate: string,account: string) {
        await this.payer.click();
        await this.payer.fill("");

        for (let i = 0; i < payerValue.length; i++) {
            await this.payer.pressSequentially(payerValue[i], {
                delay: 250
            });

            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }

        let payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 20000});
        await payerOption.click();
        await this.payer.click();
        await this.page.waitForTimeout(1000);
        payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.press("Tab");
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("UAE Dirham", {timeout: 30000});
        await this.Account.click();
        const accOption = this.page.locator(`//span[contains(normalize-space(.), '${account}')]`).first();
        await expect(accOption).toBeVisible({timeout: 20000});
        await accOption.click();
        await this.fromPOValidationDate.click();
        await this.fromPOValidationDate.fill(fromPOValidDate.trim());
        await this.fromPOValidationDate.press("Tab");
        await this.toPOValidationDate.click();
        await this.toPOValidationDate.fill(toPOValidDate.trim());
        await this.toPOValidationDate.press("Tab");
        await expect(this.fromPOValidationDate).toHaveValue(fromPOValidDate.trim(),{ timeout: 10000 });
        await expect(this.toPOValidationDate).toHaveValue(toPOValidDate.trim(),{ timeout: 10000 });
        console.log(`Payer: ${await this.payer.inputValue()}`);
        console.log(`Currency: ${await currency.inputValue()}`);
        console.log(`Account: ${await this.Account.inputValue()}`);
        console.log(`From PO Validation Date: ${await this.fromPOValidationDate.inputValue()}`);
        console.log(`To PO Validation Date: ${await this.toPOValidationDate.inputValue()}`);
        await this.page.waitForTimeout(1000);
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

    // async fillDueDate(payerValue: String,fromDueDate1:String,toDueDate1: String,account:String){
    //         await this.page.waitForLoadState("networkidle");
    //         await this.payer.fill("");  
    //         for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
    //         const option = this.page.locator("//span[text()='TEST PAYER (Do Not Use)']").first();
    //         await option.waitFor({ state: "visible", timeout: 10000 });
    //         await option.click();      
    //         await this.Account.click();
    //         const acc = this.page.locator("//span[text()='Union Ins.']").first();
    //         await acc.waitFor({ state: "visible", timeout: 10000 });
    //         await acc.click();  
    //     await this.fromDueDate.fill(fromDueDate1.trim());
    //         await this.toDueDate.fill(toDueDate1.trim());
    // }

    async fillDueDate(payerValue: string,fromDueDate1: string,toDueDate1: string,account: string) {
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await this.payer.click();
        await this.payer.fill("");

        for (let i = 0; i < payerValue.length; i++) {
            await this.payer.pressSequentially(payerValue[i], {
                delay: 250
            });

            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }

        let payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 20000});
        await payerOption.click();
        await this.payer.click();
        await this.page.waitForTimeout(1000);

        payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.press("Tab");
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("UAE Dirham", {timeout: 30000});
        await this.Account.click();

        const accOption = this.page.locator(`//span[contains(normalize-space(.), '${account}')]`).first();
        await expect(accOption).toBeVisible({timeout: 20000});
        await accOption.click();
        await this.fromDueDate.click();
        await this.fromDueDate.fill(fromDueDate1.trim());
        await this.fromDueDate.press("Tab");
        await this.toDueDate.click();
        await this.toDueDate.fill(toDueDate1.trim());
        await this.toDueDate.press("Tab");
        await expect(this.fromDueDate).toHaveValue(fromDueDate1.trim(),{ timeout: 10000 });
        await expect(this.toDueDate).toHaveValue(toDueDate1.trim(),{ timeout: 10000 });
        console.log(`Payer: ${await this.payer.inputValue()}`);
        console.log(`Currency: ${await currency.inputValue()}`);
        console.log(`Account: ${await this.Account.inputValue()}`);
        console.log(`From Due Date: ${await this.fromDueDate.inputValue()}`);
        console.log(`To Due Date: ${await this.toDueDate.inputValue()}`);
        await this.page.waitForTimeout(1000);
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
        const appLoader = this.page.locator("app-new-loader");
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

        await this.payer.click();
        await this.payer.fill("");
        const payerText = payerValue.toString();
        const payerOption = this.page.locator(`//span[contains(text(),'${payerText}')]`).first();

        try {
            await this.payer.type(payerText, { delay: 200 });
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        } catch {
            console.log("Retrying payer selection...");
            await this.payer.click();
            await this.payer.fill("");
            for (const char of payerText) {
                await this.payer.type(char, { delay: 200 });
                await appLoader.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
            }
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        }

        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState("networkidle");
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
        const appLoader = this.page.locator("app-new-loader");
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

        await this.payer.click();
        await this.payer.fill("");
        const payerText = payerValue.toString();
        const payerOption = this.page.locator(`//span[contains(text(),'${payerText}')]`).first();

        try {
            await this.payer.type(payerText, { delay: 200 });
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        } catch {
            console.log("Retrying payer selection...");
            await this.payer.click();
            await this.payer.fill("");
            for (const char of payerText) {
                await this.payer.type(char, { delay: 200 });
                await appLoader.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
            }
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        }

        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState("networkidle");
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
        await this.payer.click();
        await this.payer.fill("");

        for (let i = 0; i < payerValue.length; i++) {
            await this.payer.pressSequentially(payerValue[i], {
                delay: 250
            });

            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }

        let payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 20000});
        await payerOption.click();
        await this.payer.click();
        await this.page.waitForTimeout(1000);
        payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.press("Tab");
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("UAE Dirham", {timeout: 30000});
        await this.Account.click();
        const accOption = this.page.locator(`//span[contains(normalize-space(.), '${account}')]`).first();
        await expect(accOption).toBeVisible({timeout: 20000});
        await accOption.click();
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

    async fillFromAmount(Amount:String){
        await this.fromAmount.fill(Amount.trim());
    }

     async blankFromAmount(){
       const x = await this.fromAmount.inputValue();
       console.log(x);
       expect(x).toBe("");
    }

    async fillToAmount(Amount:String){
        await this.toAmount.fill(Amount.trim());
    }

     async fillAmount(FromAmount:String, ToAmount:String){
        await this.fromAmount.fill(FromAmount.trim());
        await this.toAmount.fill(ToAmount.trim());
    }

    async errorMsgAmount(){
        await this.page.waitForTimeout(2000);
       // expect(await this.toAmount.getAttribute("aria-invalid")).toBe("true");
       expect(await this.errorAmount.isVisible());
    }
     async blankToAmount(){
       const x = await this.toAmount.inputValue();
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

    async generateDatefileFieldsVerified() {
        const dialog = this.page.locator('mat-dialog-container').last();
        await expect(dialog).toBeVisible({ timeout: 30000 });

        const preferencesEl = dialog.getByText('Preferences', { exact: true });
        await expect(preferencesEl).toBeVisible({ timeout: 30000 });
        await preferencesEl.click();

        const titleLabel = dialog.locator('mat-label').filter({ hasText: /^Title$/ });
        await expect(titleLabel).toBeVisible({ timeout: 15000 });
        const titleField = titleLabel.locator('xpath=ancestor::mat-form-field').locator('input');
        await expect(titleField).toBeVisible({ timeout: 15000 });
        await titleField.fill("test");
        console.log('Generate file dialog Preferences fields verified.');
    }

    async generateDatefileFieldsVerifiedDev() {
    const dialog = this.page.locator('mat-dialog-container').last();

    await expect(dialog).toBeVisible({
        timeout: 30000
    });

    // =========================
    // PREFERENCES
    // =========================
    const preferencesEl = dialog
        .getByText('Preferences', { exact: true })
        .first();

    await expect(preferencesEl).toBeVisible({
        timeout: 30000
    });

    await preferencesEl.click();

    await this.page.waitForTimeout(2000);

    // =========================
    // JOB LABEL
    // =========================
    const titleField = dialog.locator('input').first();

    await expect(titleField).toBeVisible({
        timeout: 15000
    });

    await titleField.fill("test");

    console.log(
        'Generate file dialog Preferences fields verified.'
    );
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

    async verifyfromDeleiveryDate(){
        expect(await this.fromdeliveryDate.isVisible());
        expect(await this.fromdeliveryDateLabel.isVisible());
    }

    async verifyfromDeliveryDateCalendar(){
        
        await this.fromdeliveryDatecalendarButton.click();
       expect(await this.fromdeliveryDateCalendar.isVisible());
    }

     async verifytoDeliveryDate(){
        expect(await this.toDeliveryDate.isVisible());
        expect(await this.todeliveryDateLabel.isVisible());
    }

    async verifytoDeliveryDateCalendar(){
        
        await this.todeliveryDatecalendarButton.click();
       expect(await this.todeliveryDateCalendar.isVisible());
    }

     async fillDeliveryDate(payerValue: String,fromDeliveryDate1:String,toDeliveryDate1: String,account:String){
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
       await this.fromdeliveryDate.fill(fromDeliveryDate1.trim());
        await this.toDeliveryDate.fill(toDeliveryDate1.trim());
    }

    async verifychequeNotSentCheckbox(){
        expect(await this.chequeNotSentCheckbox.isVisible());
    }

    async checkAndUncheckChequeNotSentCheckbox(){
        await this.chequeNotSentCheckbox.click();
        await this.page.waitForTimeout(2000);
        expect(await this.chequeNotSentCheckbox.locator("input").isChecked()).toBeTruthy();
        await this.chequeNotSentCheckbox.click();
        await this.page.waitForTimeout(2000);
        expect(await this.chequeNotSentCheckbox.locator("input").isChecked()).toBeFalsy();
    }

    async fillDestinationAccount(destinationAccount:String){
        await this.destinationAccount.fill(destinationAccount.trim());
    }

     async blankDestinationAccount(){
       const x = await this.destinationAccount.inputValue();
       console.log(x);
       expect(x).toBe("");
    }

    async generateDataFile(){
        await this.genratefile.click();
        await this.page.waitForTimeout(3000);
    }

    async nonEditableFieldforNoSettledDate(){
        expect(await this.popDueDate.isDisabled());
        expect(await this.popSettlementDate.isDisabled());
        expect(await this.popTransactionType.isDisabled());
        expect(await this.popDestination.isDisabled());
        expect(await this.popCurrency.isDisabled());
        expect(await this.popAmount.isDisabled());
        expect(await this.popcvc.isDisabled());
        expect(await this.popcva.isDisabled());
        expect(await this.poplabel.isDisabled());
        expect(await this.poppo.isDisabled());
        expect(await this.popdeleiveryDate.isDisabled());
        expect(await this.popBankReference.isDisabled());
        expect(await this.popChequeReleaseDate.isDisabled());
        expect(await this.popChequeSentDate.isDisabled());
    }

}