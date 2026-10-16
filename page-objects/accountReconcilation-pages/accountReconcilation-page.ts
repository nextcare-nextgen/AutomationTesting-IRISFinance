import test, { Keyboard, Locator, Page, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { log } from "console";

type AdnicSettlementResult = {
    transactionNumber: string;
    paymentOrderId: string;
    bankReference: string;
    saveStartedAt: number;
    queueCorrelationTokens: string[];
};

export class AccountReconcilationPage{
    page: Page;
    searchIcon: Locator;
    financials: Locator;
    accountReconcilation: Locator;
    Recoincilation: Locator;
    redText: Locator;
    payer: Locator;
    currency: Locator;
    account: Locator;
    searchButton: Locator;
    fromDueDate: Locator;
    toDuedate: Locator;
    errormsg: Locator;
    searchTable: Locator;
    uploadButton: Locator;
    uploadPopUp: Locator;
    uploadPopUpButton:Locator;
    selectFile: Locator;
    invalidPopup: Locator;
    AlertBox: Locator;
    closePopUp: Locator;
    //settled: Locator;
    //chequeReleasd: Locator;
    itemPage: Locator;
    item10: Locator;
    item20: Locator;
    item15: Locator;
    item30: Locator;
    item50: Locator;
    item100: Locator;
    search: Locator;
    noRecord: Locator;
    save: Locator;
    alertBankPopUp: Locator;
    chequeReleased: any;
    upArrow: Locator;
    oldDate:Locator;
    downArrow: Locator;
    providerMore:Locator;
    providerText:Locator;
    providerHide: Locator;
    fromDueDateLabel: Locator;
    fromDueDateCalendar:Locator;
    toDueDateLabel:Locator;
    dueDateToday:Locator;
    futureDate:Locator;
    toDueDateCalendar:Locator;
    errormsgDate: Locator;
    paymentOrderId: Locator;
    generatebutton: Locator;
    preferences: Locator;
    fileName: Locator;
    generatebuttonPop: Locator;
    jobButton: Locator;
    appLoader: Locator;
    dropdownOptions: Locator;
    settled: Locator;
    bankReferenceNumber: Locator;

    constructor(page: Page){
     this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.accountReconcilation = page.getByRole('link', { name: 'Account Reconciliation' });
        this.Recoincilation=page.locator("//h1[text()='Account Reconciliation ']");
        this.redText=page.locator("//mat-error[contains(text(),' Only Reimbursement Transactions are allowed to be settled from this screen. ')]")
        this.payer=page.locator("//mat-label[normalize-space()='Payer']/ancestor::mat-form-field//input");
        this.currency=page.locator("//mat-label[normalize-space()='Currency']/ancestor::mat-form-field//input");
        this.account=page.locator("//mat-select[@id='accountreconciliationaccount']");
        this.searchButton=page.locator("//button[@aria-label='Search']");
        this.fromDueDateLabel=page.locator("//mat-label[text()='From Due Date']");
        this.fromDueDate=page.locator("//input[@formcontrolname='fromDueDate']");
        this.toDueDateLabel=page.locator("//mat-label[text()='To Due Date']");
        this.toDuedate=page.locator("//input[@formcontrolname='toDueDate']");
        this.errormsg=page.locator("(//mat-error[text()=' This field is required '])[1]");
        this.searchTable=page.locator("//table[@id='dddd']/tbody/tr[2]");
        this.uploadButton=page.locator("//button[@aria-labelledby='2']");
        this.uploadPopUp=page.locator("//div[@id='cdk-overlay-10']");
        this.uploadPopUpButton=page.locator("//button[@class='save-button']");
        this.selectFile=page.locator("(//div[text()='Select File'])[2]");
        this.invalidPopup=page.locator("//span[text()='Please select valid file']");
        this.AlertBox=page.locator("//mat-dialog-container[@id='mat-dialog-10']");
        this.closePopUp=page.locator("//img[@alt='No icon']");
        //this.settled=page.locator("//mat-checkbox[@id='mat-checkbox-3']");
        this.bankReferenceNumber=page.locator("//input[@id='externalRef0']");
        //this.chequeReleasd=page.locator("//mat-checkbox[@id='mat-checkbox-4']");
        this.itemPage=page.locator("//mat-select[@aria-label='Items per page:']");
        this.item10=page.locator("//span[text()='10']");
        this.item15=page.locator("//span[text()='15']");
        this.item20=page.locator("//span[text()='20']");
        this.item30=page.locator("//span[text()='30']");
        this.item50=page.locator("//span[text()='50']");
        this.item100=page.locator("//span[text()='100']");
        this.search=page.locator("//input[@aria-label='Search']");
        this.noRecord=page.locator("//div[text()=' No Records Found ']");
        this.save=page.locator("//span[text()='Save']");
        this.alertBankPopUp=page.locator("//mat-dialog-container[@id='mat-dialog-1']");
        this.upArrow=page.locator("//span[text()=' Settled']/../div/img[1]");
        this.downArrow=page.locator("//span[text()=' Settled']/../div/img[2]");
        this.providerMore=page.locator("//div[@id='More0']/button");
        this.providerText=page.locator("//div[@id='Hide0']/div");
        this.providerHide=page.locator("//div[@id='Hide0']/button");
        this.fromDueDateCalendar=page.locator("//input[@id='mat-input-2']/../../div[2]/mat-datepicker-toggle/button");
        this.toDueDateCalendar=page.locator("//input[@id='mat-input-3']/../../div[2]/mat-datepicker-toggle/button");
        //this.dueDateToday=page.locator("//div[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']");
        //this.dueDateToday = this.page.locator("div.mat-calendar-body-today");
        this.dueDateToday = this.page.locator('button[aria-current="date"]');
        this.oldDate=page.locator("//tbody[@class='mat-calendar-body']/tr[2]/td[1]");
        this.futureDate=page.locator("//tbody[@class='mat-calendar-body']/tr[5]/td[1]");
        this.errormsgDate=page.locator("//mat-error[text()=' Incorrect entry '][@id='mat-error-64']");
        this.paymentOrderId=page.locator("//input[@id='mat-input-4']");
        this.generatebutton=page.locator("//span[text()='Generate']/../..");
        this.preferences=page.locator("//mat-expansion-panel-header");
        this.fileName=page.locator("//mat-label[text()='File Name']/../../../div/input");
        this.generatebuttonPop=page.locator("//span[text()=' Generate ']/..");
        this.jobButton=page.locator("//button[text()='Dismiss']");
        this.appLoader = page.locator("app-new-loader");
        this.dropdownOptions = page.locator("mat-option span");
        this.settled = page.locator("//div[@class='mdc-checkbox']/input");
    }

    private escapeRegex(value: string): string {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
    async accountRecoincialtionField(){
        await this.Recoincilation.isVisible();
    }

    async verifytext(){
        await this.redText.isVisible();
        await expect(this.redText).toHaveCSS('color', 'rgb(244, 67, 54)'); 
    }

    async fillMandatoryDetails(payerValue: String){
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(5000);
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.pressSequentially(char, { delay: 300 }); }
        const option = this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").first();
        await option.waitFor({ state: "visible", timeout: 15000 });
        await option.click();      
        await this.account.click();
        await this.page.locator("//span[text()=' abcd ']").click();
    }

    async fillMandatoryDetailsWithRetry(payerValue: string) {
        const appLoader = this.page.locator("app-new-loader");
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({ state: "visible", timeout: 30000 });
        await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});

        await this.payer.click();
        await this.payer.fill("");

        const payerOption = this.page.locator(`//span[contains(text(),'${payerValue}')]`).first();

        try {
            await this.payer.type(payerValue, { delay: 200 });
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        } catch {
            console.log("Retrying payer selection...");
            await this.payer.click();
            await this.payer.fill("");
            for (const char of payerValue) {
                await this.payer.type(char, { delay: 200 });
                await appLoader.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
            }
            await appLoader.waitFor({ state: "hidden", timeout: 30000 }).catch(() => {});
            await payerOption.waitFor({ state: "visible", timeout: 15000 });
            await payerOption.click();
        }

        await this.page.waitForTimeout(2000);
        await expect(this.account).toBeVisible({ timeout: 10000 });
        await this.account.click();
        //await this.page.getByText("abcd", { exact: true }).click();
        const firstAccountOption = this.page.locator("mat-option").first();
        await firstAccountOption.waitFor({ state: "visible", timeout: 10000 });
        await firstAccountOption.click();
        console.log(`Payer "${payerValue}" selected successfully.`);
    }

    async fillMandatoryDetailsTC1214(payerValue: string,accountValue: string) {
        const payerSearchValue = payerValue.replace(/\s*\([^)]*\)\s*$/, '').trim();
        const payerPattern = new RegExp(
            payerSearchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
            'i',
        );
        await this.payer.click();
        await this.payer.fill("");

        for (let i = 0; i < payerSearchValue.length; i++) {
            await this.payer.pressSequentially(payerSearchValue[i], {
                delay: 250
            });

            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }

        let payerOption = this.page.locator("mat-option").filter({hasText: payerPattern}).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.click();
        await this.page.waitForTimeout(1000);
        payerOption = this.page.locator("mat-option").filter({hasText: payerPattern}).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.press("Tab");
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("UAE Dirham", {timeout: 30000});
        await this.account.click();

        const accountOption = this.page.locator("mat-option").filter({hasText: accountValue}).first();
        await expect(accountOption).toBeVisible({timeout: 20000});

        await accountOption.click();
    }

    async fillMandatoryDetailsTC1916(payerValue: string,accountValue: string) {
        const payerText = payerValue.toString();
        const payerPattern = new RegExp(
            `^\\s*${payerValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`,
            'i',
        );
        await this.page.waitForLoadState("domcontentloaded");
        await this.payer.waitFor({state: "visible", timeout: 30000});
        await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});

        const payerOption = this.page.locator("mat-option").filter({hasText: payerPattern});
        try {
            await this.payer.click();
            await this.payer.fill("");
            await this.payer.type(payerText, {delay: 200});
            await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
            await expect(
                payerOption,
                `Exact payer option "${payerValue}" must be available`,
            ).toHaveCount(1, {timeout: 15000});
            await payerOption.waitFor({state: "visible", timeout: 15000});
            await payerOption.click();
        } catch {
            console.log("Retrying TC1916 payer selection...");
            await this.payer.click();
            await this.payer.fill("");
            let payerSelected = false;
            for (let index = 0; index < payerText.length; index++) {
                await this.payer.pressSequentially(payerText[index], {delay: 250});
                if (index === 2) {
                    await this.page.waitForTimeout(5000);
                }
                if (await payerOption.isVisible()) {
                    await payerOption.click();
                    payerSelected = true;
                    break;
                }
            }
            expect(
                payerSelected,
                `Exact payer option "${payerValue}" must appear while retrying`,
            ).toBeTruthy();
        }

        await this.payer.press("Tab");
        await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("UAE Dirham", {timeout: 30000});

        await expect(this.account).toBeVisible({timeout: 30000});
        await this.account.click();
        const accountOption = this.page.locator("mat-option").filter({
            hasText: accountValue,
        }).first();
        await expect(accountOption, `ADNIC account "${accountValue}" must be available`).toBeVisible({
            timeout: 20000,
        });
        await accountOption.click();
    }

    private async selectExactPayer(payerValue: string): Promise<void> {
        const normalizedPayer = payerValue.trim().toLowerCase();
        const payerPattern = new RegExp(
            `^\\s*${payerValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`,
            'i',
        );
        const payerOption = this.page.locator("mat-option").filter({hasText: payerPattern});

        for (let attempt = 0; attempt < 2; attempt++) {
            await this.payer.click();
            await this.payer.fill("");

            for (let index = 0; index < payerValue.length; index++) {
                await this.payer.pressSequentially(payerValue[index], {delay: 200});
                if (index === 2) {
                    await this.page.waitForTimeout(3000);
                }
                if (await payerOption.isVisible()) {
                    await expect(payerOption).toHaveCount(1);
                    await this.page.waitForTimeout(500);
                    await payerOption.click();
                    break;
                }
            }

            const selectionCommitted = await expect
                .poll(
                    async () => (await this.payer.inputValue()).trim().toLowerCase(),
                    {timeout: 5000},
                )
                .toBe(normalizedPayer)
                .then(() => true)
                .catch(() => false);
            if (selectionCommitted) return;
        }

        throw new Error(`Exact payer option "${payerValue}" could not be selected`);
    }

    async clickSearchButtn(){
        await this.page.waitForTimeout(5000);
        await this.searchButton.click();
        await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
    }

    // async fillAllDetails(payerValue: String,fromDue:String,toDue:String){
    //     await this.page.waitForLoadState("networkidle");
    //     await this.page.waitForTimeout(5000);
    //     await this.payer.fill("");  
    //     for (const char of payerValue) {await this.payer.pressSequentially(char, { delay: 300 }); }
    //     const option = this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").first();
    //     await option.waitFor({ state: "visible", timeout: 30000 });
    //     await option.click();      
    //     await this.account.click();
    //     await this.page.locator("//span[text()=' ADNIC - Escrow ']").click();
    //     await this.fromDueDate.fill(fromDue.trim());
    //     await this.toDuedate.fill(toDue.trim());
    // }
    
    async fillAllDetails(payerValue: string, fromDue: string, toDue: string) {
        await this.page.waitForLoadState("domcontentloaded");
        await expect(this.payer).toBeEditable({timeout: 30000});
        await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
        await this.selectExactPayer(payerValue);
        await expect(this.currency).toHaveValue("UAE Dirham", {timeout: 30000});

        await this.account.click();
        const accountOption = this.page.locator("mat-option").filter({
            hasText: /^\s*ADNIC - Escrow\s*$/i,
        });
        await expect(accountOption).toBeVisible({timeout: 20000});
        await accountOption.click();

        await this.fromDueDate.fill(fromDue.trim());
        await this.fromDueDate.press("Tab");
        await this.toDuedate.fill(toDue.trim());
        await this.toDuedate.press("Tab");
    }

    async fillAllDetailsDev(payerValue: string,fromDue: string,toDue: string) {
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(5000);
        await this.payer.click();
        await this.payer.fill("");

        for (let i = 0; i < payerValue.length; i++) {
            await this.payer.pressSequentially(payerValue[i], {
                delay: 300
            });
            if (i === 2) {
                await this.page.waitForTimeout(5000);
            }
        }

        let payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 30000});
        await payerOption.click();
        await this.payer.click();
        await this.page.waitForTimeout(1000);
        payerOption = this.page.locator(`//span[contains(normalize-space(.), '${payerValue}')]`).first();
        await expect(payerOption).toBeVisible({timeout: 15000});
        await payerOption.click();
        await this.payer.press("Tab");
        const currency = this.page.getByRole("combobox", {name: "Currency"});
        await expect(currency).toHaveValue("Rial Omani", {timeout: 30000});
        await this.account.click();
        const accountOption = this.page.locator("mat-option").filter({ hasText: "Escrow" }).first();
        await expect(accountOption).toBeVisible({timeout: 20000});
        await accountOption.click({ force: true });
        await this.fromDueDate.click();
        await this.fromDueDate.fill(fromDue.trim());
        await this.fromDueDate.press("Tab");
        await this.toDuedate.click();
        await this.toDuedate.fill(toDue.trim());
        await this.toDuedate.press("Tab");
        await expect(this.fromDueDate).toHaveValue(fromDue.trim(),{ timeout: 10000 });
        await expect(this.toDuedate).toHaveValue(toDue.trim(),{ timeout: 10000 });

        console.log(`Payer: ${await this.payer.inputValue()}`);
        console.log(`Currency: ${await currency.inputValue()}`);
        console.log(`Account: ${(await this.account.textContent())?.trim()}`);
        console.log(`From Due Date: ${await this.fromDueDate.inputValue()}`);
        console.log(`To Due Date: ${await this.toDuedate.inputValue()}`);

        await this.page.waitForTimeout(1000);
    }
    
    async fillAllDetailsTC1378(
        payerValue: string,
        fromDue: string,
        toDue: string
    ) {
        // ==============================
        // PAYER
        // ==============================
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(5000);

        await this.payer.click();
        await this.payer.fill("");

        let typedText = "";

        for (const char of payerValue) {
            typedText += char;

            await this.payer.pressSequentially(char, {
                delay: 300
            });

            // Wait for dropdown after 3rd character
            if (typedText.length === 3) {
                await this.page.waitForTimeout(5000);
            }
        }

        // First payer selection
        let payerOption = this.page
            .locator(`//span[contains(normalize-space(.), '${payerValue}')]`)
            .first();

        await expect(payerOption).toBeVisible({
            timeout: 30000
        });

        await payerOption.click();

        // ==============================
        // SELECT PAYER AGAIN
        // ==============================
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

        // ==============================
        // CURRENCY
        // ==============================
        const currency = this.page.getByRole("combobox", {
            name: "Currency"
        });

        await expect(currency).toHaveValue("UAE Dirham", {
            timeout: 30000
        });

        // ==============================
        // ACCOUNT
        // ==============================
        await this.account.click();

        const accountOption = this.page
            .locator("//span[contains(normalize-space(.), 'ADNIC - Escrow')]")
            .first();

        await expect(accountOption).toBeVisible({
            timeout: 20000
        });

        await accountOption.click();

        // ==============================
        // DUE DATES
        // ==============================
        await this.fromDueDate.fill(fromDue.trim());
        await this.toDuedate.fill(toDue.trim());
    }
    
    async verifyErrorMessage(){
        await this.errormsg.isVisible();
    }

    async verifyTable(){
        await this.searchTable.isVisible();
    }

    async clickUploadButton(){
        await this.uploadButton.click();
    }

    async validateUploadPopup(){
        await this.uploadPopUp.isVisible();
    }

    async validateAlert(){
        await this.uploadPopUpButton.click();
        await this.page.waitForTimeout(2000);
        await this.AlertBox.isVisible();
    }

    async UploadFile(){
        //await this.selectFile.click();
        await this.page.waitForTimeout(2000);
        const filePath = path.resolve(__dirname, '../uploadDocuments/test.xlsx');
        await this.page.setInputFiles('input[type="file"]', filePath);
        await this.uploadPopUpButton.click();
    }

    async dragandDropFile(){
        await this.page.waitForTimeout(2000);
        const filePath = path.resolve(__dirname, '../uploadDocuments/test.xlsx');
        await this.page.locator('input[type="file"]').setInputFiles(filePath);

        await this.uploadPopUpButton.click();
    }

    async UploadInvalidFile(){
        await this.page.waitForTimeout(2000);
        const filePath = path.resolve(__dirname, '../uploadDocuments/test.pdf');
        await this.page.setInputFiles('input[type="file"]', filePath);
        await this.invalidPopup.isVisible();
    
    }

    async closeUploadPopup(){
        await this.closePopUp.click();
    }

    async settledC(){
        const checkboxLabel = this.settled;
        const checkboxInput = this.page.locator("//input[@id='mat-checkbox-3-input']");
 
        await checkboxLabel.waitFor({ state: 'visible' });
 
        await checkboxLabel.click();

        await expect(checkboxInput).toHaveAttribute('aria-checked', 'false', { timeout: 5000 });
        console.log('Checkbox checked successfully');
 
        await checkboxLabel.click();
        await expect(checkboxInput).toHaveAttribute('aria-checked', 'false', { timeout: 5000 });
        console.log('Checkbox unchecked successfully');
    }

    async settledToChequeReleased(){
        await this.settled.click();
      // await this.page.locator("//label[@for='mat-checkbox-3-input']").check();
    //   await this.page.getByRole('checkbox', { checked: false }).first().click();
        //await this.page.locator("//input[@id='mat-checkbox-3-input']").check();
        //await this.page.locator('input[type="checkbox"]#mat-checkbox-3-input').check();
//         const checkbox = this.page.locator("//input[@id='mat-checkbox-3-input']");
// await expect(checkbox).toBeEnabled();
// await checkbox.check();
//const chequeReleased = this.page.locator("//label[@for='mat-checkbox-3-input']");

// await expect(chequeReleased).toBeDisabled();
// await expect(chequeReleased).not.toBeChecked();
// await this.chequeReleased.check({force:true});

        // await this.page.waitForTimeout(5000);
        // await this.chequeReleased.isDisabled();
    }

    async ChequeClicked(){
        //await this.settled.click();
        await this.page.waitForTimeout(5000);
        await this.chequeReleased.isEnabled();
       // await this.settled.isDisabled();
    }

    async itemsPerPage(){
        await this.itemPage.isVisible();
        await this.itemPage.click();
    }

    async itemPerPageList(){
        await this.item10.isVisible();
        await this.itemPage.click();
        await this.page.waitForTimeout(5000);
        await this.item15.isVisible();
        await this.item20.isVisible();
        await this.item30.isVisible();
        await this.item50.isVisible();
        await this.item100.isVisible();
    }

    async displayArrow(){
        await this.upArrow.isVisible();
        await this.downArrow.isVisible();
    }

    async searchByID(id:String){
        await this.search.click();
        await this.search.fill(id.trim());
    }

    async noRecordfound(){
        await this.noRecord.isVisible();
    }

    async clickSaveButton(){
        await this.save.click();
    }

    async settleFirstEligibleAdnicTransactionAndVerifyPayload(): Promise<AdnicSettlementResult> {
        await this.page.waitForTimeout(5000);
        const table = this.page.locator('table').filter({ hasText: 'TXN NBR' }).first();
        await expect(table).toBeVisible({ timeout: 30000 });

        const transactionHeader = table.locator('th').filter({ hasText: /TXN NBR/ }).first();
        const transactionColumnIndex = await transactionHeader.evaluate(header =>
            Array.from(header.parentElement?.children ?? []).indexOf(header),);
        const paymentOrderHeader = table.locator('th').filter({hasText: /PO ID/}).first();
        const paymentOrderColumnIndex = await paymentOrderHeader.evaluate(header =>
            Array.from(header.parentElement?.children ?? []).indexOf(header),);
        expect(transactionColumnIndex).toBeGreaterThanOrEqual(0);
        expect(paymentOrderColumnIndex).toBeGreaterThanOrEqual(0);

        const rows = table.locator('tbody tr');
        await expect(rows.first(), 'An unsettled ADNIC claim must be available').toBeVisible({timeout: 30000,});

        const eligibleRow = rows.first();
        const settledCheckbox = eligibleRow.locator('td.mat-column-settled mat-checkbox').first();
        await expect(settledCheckbox, 'The first result must have a visible Settled checkbox').toBeVisible();

        const transactionNumber = (await eligibleRow.locator('td').nth(transactionColumnIndex).innerText()).trim();
        const paymentOrderId = (await eligibleRow.locator('td').nth(paymentOrderColumnIndex).innerText()).trim();
        expect(transactionNumber, 'The selected row must have a transaction number').not.toBe('');
        expect(paymentOrderId, 'The selected row must have a payment order ID').not.toBe('');

        await settledCheckbox.click({force: true});
        await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
        await this.page.waitForTimeout(5000);
        await settledCheckbox.click({force: true});
        await this.appLoader.waitFor({state: "hidden", timeout: 30000}).catch(() => {});
        await this.page.waitForTimeout(5000);

        const bankReference = `NBR-${transactionNumber}`;
        console.log(`Selected ADNIC transaction: ${transactionNumber}`);

        const bankReferenceCell = eligibleRow.locator('td.mat-column-externalRef').first();
        await bankReferenceCell.scrollIntoViewIfNeeded();
        await expect(bankReferenceCell).toBeVisible({timeout: 15000});
        await bankReferenceCell.click();

        const bankReferenceInput = bankReferenceCell.locator('input[id^="externalRef"]').first();
        await expect(bankReferenceInput).toBeVisible({timeout: 15000});
        await expect(bankReferenceInput).toBeEditable({timeout: 15000});
        await bankReferenceInput.fill(bankReference);
        await expect(bankReferenceInput).toHaveValue(bankReference);
        console.log(`Filled bank reference for ADNIC transaction ${transactionNumber}: ${bankReference}`);

        test.skip(process.env.ADNIC_SETTLEMENT_DRY_RUN === 'true',`Dry run reached Save for ADNIC transaction ${transactionNumber} with bank reference ${bankReference}.`,);

        const settlementRequestPromise = this.page.waitForRequest(request => {
            if (!['POST', 'PUT', 'PATCH'].includes(request.method())) return false;
            return request.postData()?.includes(transactionNumber) ?? false;}, { timeout: 30000 });

        const saveStartedAt = Date.now();
        await this.clickSaveButton();
        const saveSuccessMessage = this.page.locator('snack-bar-container, mat-snack-bar-container, [role="alert"]',).filter({hasText: /Account reconciliation data saved successfully/i}).first();
        await expect(saveSuccessMessage,'Account Reconciliation save confirmation must appear',).toBeVisible({timeout: 50000});

        const request = await settlementRequestPromise;
        const response = await request.response();
        expect(response, 'The settlement request should receive a response').not.toBeNull();
        expect(response!.ok(), `Settlement request failed with HTTP ${response!.status()}`).toBeTruthy();

        const requestPayload = request.postDataJSON();
        await this.verifyAdnicSettlementPayload(requestPayload);
        const responsePayload = await response!.json().catch(() => undefined);
        const queueCorrelationTokens = this.collectQueueCorrelationTokens(
            requestPayload,
            responsePayload,
            transactionNumber,
            paymentOrderId,
            bankReference,
        );
        return {
            transactionNumber,
            paymentOrderId,
            bankReference,
            saveStartedAt,
            queueCorrelationTokens,
        };
    }

    private collectQueueCorrelationTokens(...values: unknown[]): string[] {
        const tokens = new Set<string>();
        const collect = (value: unknown): void => {
            if (Array.isArray(value)) {
                value.forEach(collect);
                return;
            }
            if (value && typeof value === 'object') {
                Object.values(value as Record<string, unknown>).forEach(collect);
                return;
            }
            if (typeof value !== 'string' && typeof value !== 'number') return;

            const token = String(value).trim();
            if (/^[A-Za-z0-9_-]{6,50}$/.test(token)) tokens.add(token);
        };
        values.forEach(collect);
        return [...tokens];
    }

    private async verifyAdnicSettlementPayload(payload: unknown): Promise<void> {
        const fields = new Map<string, unknown>();
        const collectFields = (value: unknown): void => {
            if (!value || typeof value !== 'object') return;
            for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
                fields.set(key.replace(/[^a-z0-9]/gi, '').toLowerCase(), child);
                collectFields(child);
            }
        };
        collectFields(payload);

        const requiredFields: Array<[string, RegExp]> = [
            ['claim reference', /^claim(ref|reference)$/],
            ['FOB', /^fob$/],
            ['beneficiary PIN', /^beneficiarypin$/],
        ];
        for (const [label, keyPattern] of requiredFields) {
            const entry = [...fields.entries()].find(([key]) => keyPattern.test(key));
            expect(entry, `ADNIC settlement payload should contain ${label}`).toBeDefined();
            expect(String(entry![1] ?? '').trim(), `${label} should have a value`).not.toBe('');
        }
    }

    async verifyTransactionIsNoLongerAvailable(paymentOrderId: string): Promise<void> {
        await this.paymentOrderId.fill(paymentOrderId);
        await this.clickSearchButtn();
        await expect(this.noRecord).toBeVisible({ timeout: 30000 });
    }

    async verifyLatestClaimSettlementQueueStatus(
        settlement: AdnicSettlementResult,
    ): Promise<void> {
        const queueMonitoringUrl = new URL('/layout/queue-monitoring-screens', this.page.url());
        await this.page.goto(queueMonitoringUrl.toString(), {
            waitUntil: 'domcontentloaded',
            timeout: 120000,
        });

        await expect(this.page.getByText('MESSAGE MONITORING', {exact: true})).toBeVisible({
            timeout: 60000,
        });
        const table = this.page.locator('table').filter({hasText: 'Job Title'}).first();
        await expect(table).toBeVisible({timeout: 30000});

        const headers = table.locator('th');
        const headerTexts = (await headers.allTextContents()).map(text => text.trim());
        const requestDateIndex = headerTexts.findIndex(text => text.startsWith('Request Date'));
        const jobTitleIndex = headerTexts.findIndex(text => text.startsWith('Job Title'));
        const statusIndex = headerTexts.findIndex(text => text === 'Status');
        expect(requestDateIndex).toBeGreaterThanOrEqual(0);
        expect(jobTitleIndex).toBeGreaterThanOrEqual(0);
        expect(statusIndex).toBeGreaterThanOrEqual(0);

        const notificationRow = table.locator('tbody tr').filter({
            hasText: /Claim Settlement Notification/,
        }).first();
        await expect(
            notificationRow,
            'A Claim Settlement Notification queue record must be generated',
        ).toBeVisible({timeout: 90000});

        const requestDateText = (
            await notificationRow.locator('td').nth(requestDateIndex).innerText()
        ).trim();
        const queueRequestTime = this.parseQueueRequestDate(requestDateText);
        expect(
            queueRequestTime,
            `Queue request date "${requestDateText}" must be parseable`,
        ).not.toBeNull();
        expect(
            queueRequestTime!,
            'The Claim Settlement Notification must be created by this settlement run',
        ).toBeGreaterThanOrEqual(settlement.saveStartedAt - 120000);

        await expect(notificationRow.locator('td').nth(jobTitleIndex)).toContainText(
            'Claim Settlement Notification',
        );
        await expect(notificationRow.locator('td').nth(statusIndex)).toHaveText(/Completed/i);

        const viewDetails = notificationRow.locator('button, a').first();
        await expect(viewDetails, 'Queue record details control must be available').toBeVisible({
            timeout: 15000,
        });
        await viewDetails.click();
        await expect(this.page.getByText('View Message Details', {exact: true})).toBeVisible({
            timeout: 30000,
        });
        await expect(this.page.getByText('Completed Successfully', {exact: true})).toBeVisible({
            timeout: 30000,
        });

        const detailText = await this.page.locator('body').innerText();
        expect(
            settlement.queueCorrelationTokens.some(token => detailText.includes(token)),
            'Queue message details must correlate to the settlement request or response',
        ).toBeTruthy();
    }

    private parseQueueRequestDate(value: string): number | null {
        const match = value.match(
            /^(\d{1,2})-([A-Za-z]{3})-(\d{4})\s+(\d{1,2}):(\d{2}):(\d{2})\s+(AM|PM)$/i,
        );
        if (!match) return null;

        const months: Record<string, number> = {
            jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
            jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
        };
        const month = months[match[2].toLowerCase()];
        if (month === undefined) return null;

        let hour = Number(match[4]) % 12;
        if (match[7].toUpperCase() === 'PM') hour += 12;
        return new Date(
            Number(match[3]),
            month,
            Number(match[1]),
            hour,
            Number(match[5]),
            Number(match[6]),
        ).getTime();
    }

    async validateBankBlankPopup(){
        await this.alertBankPopUp.isVisible();
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

    async providerURL(){
        await this.providerMore.isVisible();
        await this.providerMore.click();
    }

    async verifyproviderText(){
        expect(this.providerText.isVisible());
        log(this.providerMore.allTextContents.toString);
        expect(this.providerHide.isVisible());
    }

    async verifyHideButton(){
        expect(this.providerMore.isVisible());
        await this.providerMore.click();
        await this.page.waitForTimeout(3000);
        await this.providerHide.click();
        await this.page.waitForTimeout(3000);
        expect(this.providerMore.isVisible())
    }

    async verifyfromDueDate(){
        await this.page.waitForLoadState('networkidle');
        expect(this.fromDueDate.isVisible());
        await this.page.waitForTimeout(10000);
        await this.page.waitForLoadState('networkidle');
        this.fromDueDate.click();
        await this.page.waitForTimeout(2000);
        expect(this.fromDueDateLabel.isVisible());
    }

    async verifyfromDueDateCalendar() {
        await expect(this.fromDueDateCalendar).toBeVisible({timeout: 10000});
        await this.fromDueDateCalendar.click();
    }

    async verifyDueDateToday() {
        await expect(this.dueDateToday).toBeVisible({timeout: 10000});
    }

    async oldDateSelect(){
        await this.page.waitForLoadState('networkidle');
        await this.oldDate.click();
    }

    async futureDateSelect(){
        await this.page.waitForLoadState('networkidle');
        await this.futureDate.click();
    }

    async verifytoDueDate(){
        await this.page.waitForLoadState('networkidle');
        expect(this.toDuedate.isVisible());
        await this.page.waitForTimeout(10000);
        this.toDuedate.click();
        await this.page.waitForTimeout(2000);
        expect(this.toDueDateLabel.isVisible());
    }

    async verifytoDueDateCalendar(){
        expect(this.toDueDateCalendar.isVisible());
        this.toDueDateCalendar.click();
    }

    async dueDateErrorMsg(){
        expect(this.errormsgDate.isVisible());
    }

    async fillpaymentOrderId(paymentOrder: String){
    await this.page.waitForTimeout(2000);
        await this.paymentOrderId.fill(paymentOrder.trim());
        log(await this.paymentOrderId.inputValue());
        expect(this.paymentOrderId).toHaveValue("");
    }

    async fillpaymentOrderIdNo(paymentOrder: String){
        await this.page.waitForTimeout(2000);
        await this.paymentOrderId.fill(paymentOrder.trim());
        log(this.paymentOrderId.textContent);
        expect(this.paymentOrderId.textContent).not.toBeNull();
    
    }

    async clickGenerateButton(){
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(15000);
        await this.generatebutton.click();
        await this.page.waitForLoadState("networkidle");
    // await this.generatebutton.click();
        await this.preferences.click();
        await this.fileName.fill("test");
        await this.page.waitForTimeout(2000);
        await this.generatebuttonPop.click();
        await this.page.waitForTimeout(5000);
        await this.page.waitForLoadState("networkidle");
        expect(this.jobButton.isVisible());
    }

    async jobRun(){
        await this.jobButton.click();
    }
}