import { Keyboard, Locator, Page, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { log } from "console";

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
    settled: Locator;
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
    constructor(page: Page){
     this.page = page;
        this.searchIcon = page.locator("//input[@placeholder='Quick Search']");
        this.financials = page.getByRole('button', { name: 'Financials' });
        this.accountReconcilation = page.getByRole('link', { name: 'Account Reconciliation' });
        this.Recoincilation=page.locator("//h1[text()='Account Reconciliation ']");
        this.redText=page.locator("//mat-error[contains(text(),' Only Reimbursement Transactions are allowed to be settled from this screen. ')]")
        this.payer=page.locator("//input[@id='mat-input-5']");
        this.currency=page.locator("//input[@id='mat-input-6']");
        this.account=page.locator("//mat-select[@id='accountreconciliationaccount']");
        this.searchButton=page.locator("//button[@aria-label='Search']");
        this.fromDueDateLabel=page.locator("//mat-label[text()='From Due Date']");
        this.fromDueDate=page.locator("//input[@id='mat-input-2']");
         this.toDueDateLabel=page.locator("//mat-label[text()='To Due Date']");
        this.toDuedate=page.locator("//input[@id='mat-input-3']");
        this.errormsg=page.locator("(//mat-error[text()=' This field is required '])[1]");
        this.searchTable=page.locator("//table[@id='dddd']/tbody/tr[2]");
        this.uploadButton=page.locator("//button[@aria-labelledby='2']");
        this.uploadPopUp=page.locator("//div[@id='cdk-overlay-10']");
        this.uploadPopUpButton=page.locator("//button[@class='save-button']");
        this.selectFile=page.locator("(//div[text()='Select File'])[2]");
        this.invalidPopup=page.locator("//span[text()='Please select valid file']");
        this.AlertBox=page.locator("//mat-dialog-container[@id='mat-dialog-10']");
        this.closePopUp=page.locator("//img[@alt='No icon']");
        this.settled=page.locator("//mat-checkbox[@id='mat-checkbox-3']");
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
        this.dueDateToday=page.locator("//div[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']");
        this.oldDate=page.locator("//tbody[@class='mat-calendar-body']/tr[2]/td[1]");
        this.futureDate=page.locator("//tbody[@class='mat-calendar-body']/tr[5]/td[1]");
        this.errormsgDate=page.locator("//mat-error[text()=' Incorrect entry '][@id='mat-error-64']");
        this.paymentOrderId=page.locator("//input[@id='mat-input-4']");
        this.generatebutton=page.locator("//span[text()='Generate']/../..");
        this.preferences=page.locator("//mat-expansion-panel-header");
        this.fileName=page.locator("//mat-label[text()='File Name']/../../../div/input");
        this.generatebuttonPop=page.locator("//span[text()=' Generate ']/..");
        this.jobButton=page.locator("//button[text()='Dismiss']");
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

    async fillMandaoryDetails(payerValue: String){
        await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.account.click();
        await this.page.locator("//span[text()=' abcd ']").click();
    }
    async clickSearchButtn(){
        await this.searchButton.click();
        await this.page.waitForLoadState("networkidle");
    }
    async fillAllDetails(payerValue: String,fromDue:String,toDue:String){
         await this.page.waitForLoadState("networkidle");
        await this.payer.fill("");  
        for (const char of payerValue) {await this.payer.type(char, { delay: 200 }); }
        const option = this.page.locator("//span[text()='ABU DHABI NATIONAL INSURANCE CO. ADNIC']").first();
        await option.waitFor({ state: "visible", timeout: 10000 });
        await option.click();      
        await this.account.click();
        await this.page.locator("//span[text()=' ADNIC - Escrow ']").click();
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
async verifyfromDueDateCalendar(){
    expect(this.fromDueDateCalendar.isVisible());
    this.fromDueDateCalendar.click();
}
async verifyDueDateToday(){
    await this.page.waitForLoadState('networkidle');
    expect(this.dueDateToday.isVisible());
    await this.dueDateToday.click();
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