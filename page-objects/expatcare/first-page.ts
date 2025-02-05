//It's Inprogress To create a policy and validate a policy on same day 
import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class ExpatcarePage {
    readonly page: Page;
    readonly firstnameInputField: Locator;
    readonly lastnameInputField: Locator;
    readonly homecountryDropdownField: Locator;
    readonly passportnumberInputField: Locator;
    readonly selectcountryInputField: Locator;
    readonly codeDropdownField: Locator;
    readonly mobilecodeInputField: Locator;
    readonly selectmobilecodeInputField: Locator;
    readonly mobilenumberInputField: Locator;
    readonly emailInputField: Locator;
    readonly streetnameInputField: Locator;
    readonly streetnumberInputField: Locator;
    readonly postalcodeInputField: Locator;
    readonly additionaladdressInputField: Locator;
    readonly cityInputField: Locator;
    readonly countryDropdownField: Locator;
    readonly dayInputField: Locator;
    readonly monthInputField: Locator;
    readonly yearInputField: Locator;
    readonly genderDropdownField: Locator;
    readonly selectgenderDropdownField: Locator;
    readonly firsttabnextButton: Locator;
    readonly addirionalinsuredPersonText: Locator;    
    readonly noteText: Locator;
    readonly addanotherinsuredPersonButton: Locator;
    readonly noButton: Locator;
    readonly secondtabNextButton: Locator;
    readonly secondtabPreviousButton: Locator;
    readonly expatcarebButton: Locator;
    readonly blankUsernameErrorMsg:Locator;    
    readonly blankPwdErrorMsg:Locator;
    readonly lessCharUsernameErrorMsg:Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly daYInputField: Locator;
    readonly montHInputField: Locator;
    readonly yeaRInputField:Locator;    
    readonly gendeRDropdownField:Locator;
    readonly selectgendeRDropdownField:Locator;
    readonly homecountrYDropdownField:Locator;    
    readonly selectcountrYInputField:Locator;
    readonly passportnumbeRInputField:Locator;        
    readonly germanyText:Locator;                              
    readonly codEDropdownField:Locator;
    readonly mobileNumberInputField:Locator;
    readonly emaiLInputField:Locator;                                     
    readonly allfieldsonFirstTabErrorMsg:Locator;
    readonly firstTabfirstnameErrorMsg:Locator;
    readonly lastTablastnameErrorMsg:Locator;
    readonly inavlidpostalcodeErrorMsg:Locator;                   
    readonly invaliddateofbirthErrorMsg:Locator; 
    readonly invalidmobilenumberErrorMsg:Locator; 
    readonly addinsuredpersonButton:Locator;     
    readonly firstnamesecondTabInputField: Locator;
    readonly lastnamesecondTabInputField: Locator;
    readonly daysecondTabInputField: Locator;
    readonly monthsecondTabInputField: Locator;
    readonly yearsecondTabInputField: Locator;
    readonly gendersecondTabDropdownField: Locator;
    readonly selectgendersecondTabDropdownField: Locator;
    readonly homecountrysecondTabDropdownField: Locator;
    readonly selectcountrysecondTabInputField: Locator;
    readonly passportnumbersecondTabInputField: Locator;                  
    readonly classictile: Locator; 
    readonly comforttile: Locator; 
    readonly premiumtile: Locator;
    readonly thirdtabnextButton: Locator;                             
    readonly fourttabApplyandPayButton: Locator;
    readonly directdebitButton: Locator;                          
    readonly creditcardButton: Locator;                         
    readonly applyandpayButton: Locator;
    readonly expatcareButton: Locator;
    readonly userNameInputField: Locator;
     readonly passwordInputField: Locator
    readonly signinButton: Locator;
    readonly financtialInfobtn: Locator;
    readonly contractNumber: Locator;
    readonly searchbtn: Locator;
    readonly editbtn: Locator;
    readonly acceptbtn: Locator;
    readonly confirmbtn: Locator;
    readonly fullDeatailsbtn: Locator;
    readonly policyId: Locator;


constructor(page: Page) {
        this.page = page;
        this.expatcarebButton = page.locator("//button[normalize-space()='Expatcare']");
        this.firstnameInputField = page.locator("//input[@id='mat-input-0']");
        this.lastnameInputField = page.locator("//input[@id='mat-input-1']");
        this.homecountryDropdownField = page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountryInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumberInputField = page.locator("//input[@id='mat-input-3']");
        this.codeDropdownField = page.locator("//div[@id='mat-select-value-1']");
        this.mobilecodeInputField = page.locator("//input[@class='mat-select-search-input mat-input-element ng-valid ng-touched ng-dirty']");
        this.selectmobilecodeInputField = page.locator("//mat-option[@id='mat-option-2944']//span[@class='mat-option-text']//span[1]");
        this.mobilenumberInputField = page.locator("//input[@id='mat-input-4']");
        this.emailInputField = page.locator("//input[@id='mat-input-5']");
        this.streetnameInputField = page.locator("//input[@id='mat-input-6']");
        this.streetnumberInputField = page.locator("//input[@id='mat-input-7']");
        this.postalcodeInputField = page.locator("//input[@id='mat-input-8']");
        this.additionaladdressInputField = page.locator("//input[@id='mat-input-9']");
        this.cityInputField = page.locator("//input[@id='mat-input-10']");
        this.countryDropdownField = page.locator('input[title="Email or Username"]');
        this.dayInputField = page.locator("//input[@id='mat-input-12']");
        this.monthInputField = page.locator("//input[@id='mat-input-13']");
        this.yearInputField = page.locator("//input[@id='mat-input-14']");
        this.genderDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgenderDropdownField = page.locator("//span[normalize-space()='Female']");
        this.firsttabnextButton = page.locator("//span[@class='mat-button-wrapper']");
        this.addirionalinsuredPersonText = page.locator("//h1[normalize-space()='Additional insured person']");
        this.noteText = page.locator("//div[@class='fieldset-note']");
        this.addanotherinsuredPersonButton = page.locator("//a[normalize-space()='Add another insured person']");
        this.noButton = page.locator("//label[@for='mat-radio-3-input']//span[@class='mat-radio-outer-circle']");
        this.secondtabNextButton = page.locator("//span[normalize-space()='Next']");
        this.secondtabPreviousButton = page.locator("//span[normalize-space()='Previous']");
        this.firstNameInputField = page.locator("//input[@id='mat-input-16']");
        this.lastNameInputField = page.locator("//input[@id='mat-input-17']");
        this.daYInputField = page.locator("//input[@id='mat-input-18']");
        this.montHInputField = page.locator("//input[@id='mat-input-19']");
        this.yeaRInputField = page.locator("//input[@id='mat-input-20']");
        this.gendeRDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[2]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendeRDropdownField = page.locator("//span[normalize-space()='Male']");
        this.homecountrYDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[4]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrYInputField = page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumbeRInputField = page.locator("//input[@id='mat-input-24']");
        this.codEDropdownField = page.locator("//span[contains(text(),'Code')]");
        this.mobileNumberInputField = page.locator("//input[@id='mat-input-25']");
        this.emaiLInputField = page.locator("//input[@id='mat-input-26']");
        this.germanyText = page.locator("//input[@type='text' and @value=' Germany ']");
        this.allfieldsonFirstTabErrorMsg=page.locator("//div[@id='iris-msg-396']");
        this.firstTabfirstnameErrorMsg=page.locator("//div[@id='row-12845']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.lastTablastnameErrorMsg=page.locator("//div[@id='row-12928']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.inavlidpostalcodeErrorMsg=page.locator("//div[@class='fieldType-19 form-error-msg ng-star-inserted']");
        this.invaliddateofbirthErrorMsg=page.locator("//p[@class='form-error ng-star-inserted']");
        this.invalidmobilenumberErrorMsg=page.locator("//p[normalize-space()='Invalid Phone']");
        this.addinsuredpersonButton=page.locator("//a[@class='iris-link add']");
        this.firstnamesecondTabInputField=page.locator("//input[@id='mat-input-27']");
        this.lastnamesecondTabInputField=page.locator("//input[@id='mat-input-28']");
        this.daysecondTabInputField=page.locator("//input[@id='mat-input-29']");
        this.monthsecondTabInputField=page.locator("//input[@id='mat-input-30']");
        this.yearsecondTabInputField=page.locator("//input[@id='mat-input-31']");
        this.gendersecondTabDropdownField=page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[3]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendersecondTabDropdownField=page.locator("//span[normalize-space()='Female']");
        this.homecountrysecondTabDropdownField=page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrysecondTabInputField=page.locator("//span[normalize-space()='Afghanistan']");
        this.passportnumbersecondTabInputField=page.locator("//input[@id='mat-input-35']");
        this.classictile=page.locator("//label[@for='mat-radio-5-input']");
        this.comforttile=page.locator("//label[@for='mat-radio-6-input']");
        this.premiumtile=page.locator("//label[@for='mat-radio-7-input']");
        this.thirdtabnextButton = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");
        this.fourttabApplyandPayButton = page.locator("//span[normalize-space()='Apply & Pay']");
        this.directdebitButton = page.locator("//label[@for='mat-radio-13-input']//div[@class='mat-h2 mb-none']");                 
        this.creditcardButton = page.locator("//div[normalize-space()='Credit Card']");   
        this.applyandpayButton = page.locator("//span[normalize-space()='Apply & Pay']");  
        this.userNameInputField = page.locator('//div//input[@title="username"]');
        this.passwordInputField = page.locator('//div//input[@title="password"]');
        this.signinButton = page.locator('//div//button[@id="button_login"]');
        this.contractNumber = page.locator('//div//input[@name="contractnumber"]');
        this.searchbtn = page.locator('//div[@class="search-action"]');
        this.editbtn = page.locator('//div[@class="tooltip  result_search_edit"]');
        this.acceptbtn = page.locator('//div//a[@id="accept_quotation_btn"]');
        this.confirmbtn = page.locator('//button[@class="btn btn_custom_pad confirm"]');
        this.fullDeatailsbtn = page.locator('//div//a[contains(@href,"../Endorsement/FullDetails")]');
        this.financtialInfobtn = page.locator('//div//a[@class="financialInfoBtn"]');
        this.policyId = page.locator('//div[@id="row-12889"]//app-message-screen//p[1]//following::p[1]//b[contains(text(), "MAE-AWPDE")]');
                                     //'//div[@id="row-12889"]//app-message-screen//p[1]//following::p[1]//b[contains(text(), 'MAE-AWPDE')]


    }  

    async gotoHomePage(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.page.setViewportSize({ width: 1536, height: 730 });

    }

    async verifyPageURL(expectedPageURL: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageURL = await this.page.url();
        console.log(actualPageURL);
        expect(actualPageURL).toBe(expectedPageURL);
    }
    async ClickOnExpatcare() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.expatcareButton.click();
    }

  
    async expatcareFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
       // await this.expatcarebButton.click();
        await this.firstnameInputField.fill(firstname);
        await this.lastnameInputField.fill(lastname);
        await this.homecountryDropdownField.click();
        await this.selectcountryInputField.click();
        await this.passportnumberInputField.fill(passport);
        await this.codeDropdownField.click();
        await this.page.locator("//div[@class='cdk-overlay-pane']//mat-option[2]//img").click();
        await this.mobilenumberInputField.fill(mobilenumber);
        await this.page.waitForTimeout(1000);
        await this.emailInputField.fill(email);
        await this.streetnameInputField.fill(streetname);
        await this.streetnumberInputField.fill(streetnumber);
        await this.postalcodeInputField.fill(postalcode);
        await this.additionaladdressInputField.fill(address);
        await this.cityInputField.fill(city);
        await this.dayInputField.fill(day);
        await this.monthInputField.fill(month);
        await this.yearInputField.fill(year);
        await this.genderDropdownField.click();
        await this.selectgenderDropdownField.click();
        //await this.page.locator("//span[normalize-space()='Male']").click();
        //await this.firsttabnextButton.click();
        
        //await this.page.waitForLoadState('networkidle');
       // await this.page.waitForTimeout(10000);
    }
    async clickOnFirstTabNextButton() {
        await this.firsttabnextButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(1000);
    }

    async clickOnsecondtabNextButton() {
        await this.secondtabNextButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

  /*  async expatcare_backdatedPolicy_fillStartDateEndDate(startdateDuration: number, endDateDuration: number){
        await this.page.locator("//input[@id='mat-input-27']").fill(await this.expatcare_BackDatedPolicy_StartDate(startdateDuration));
        await this.page.locator("//input[@id='mat-input-28']").fill(await this.expatcare_BackDatedPolicy_EndDate(endDateDuration));
        await this.page.locator("//div[@id='row-12896']").click();
            await this.page.waitForLoadState('networkidle');
            await this.page.waitForTimeout(10000);
    }*/
  

    async expatcare_BackDatedPolicy_StartDateEndDate(startdateDuration: number, enddateDuration : number) {
            const today = new Date();
            const startDate = new Date(today);
            const endDate = new Date(today);
            startDate.setDate(today.getDate() - startdateDuration);
            endDate.setDate(today.getDate() + enddateDuration);
            const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            const formattedstartDate = startDate.getDate().toString().padStart(2, '0') + "/" + monthNumber[startDate.getMonth()] + "/" + startDate.getFullYear();
            const formattedEndDate = endDate.getDate().toString().padStart(2, '0') + "/" + monthNumber[endDate.getMonth()] + "/" + endDate.getFullYear();
            await this.page.locator("//input[@id='mat-input-27']").fill(formattedstartDate);
            await this.page.locator("//input[@id='mat-input-28']").fill(formattedEndDate);
            await this.page.locator("//div[@id='row-12896']").click();
            await this.page.waitForLoadState('networkidle');
            await this.page.waitForTimeout(10000);
            //return formattedstartDate;
           
            // await this.page.locator("//input[@id='mat-input-27']").fill(startDate);
            //console.log(today);
            //console.log(startDate);
            
            /* await this.page.locator("//input[@id='mat-input-27']").fill(startDate);
            await this.page.locator("//input[@id='mat-input-28']").fill(endDate);

            
            await this.page.locator("//div[@id='row-12896']").click();
            await this.page.waitForLoadState('networkidle');
            await this.page.waitForTimeout(10000);*/
    }

    async clickOnClassiccTile() {
        await this.page.locator("//label[@for='mat-radio-8-input']//span[@class='mat-radio-label-content']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(20000);
    }



    async clickOnThirdTabNextButton() {
        await this.thirdtabnextButton.click();
        await this.page.waitForLoadState('networkidle');
       //await this.page.waitForTimeout(20000);
    }
   
    async clickOnDirectdebittButton() {
        await this.directdebitButton.click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
    }
    async expatcarefilldebitcarddetailstTab(iban: string) {
        
        //await this.page.locator("//input[@id='mat-input-33']").fill(name);
        await this.page.locator("//input[@placeholder='IBAN']").fill(iban);
        //await this.page.waitForTimeout(10000);
    }
    async clickOnCheckboxesonfourthtab() {
        await this.page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[4]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-component-loader[1]/app-questionnaire[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]").click();
      // await this.page.waitForTimeout(10000);
        await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information')]").click();
       //await this.page.waitForTimeout(10000);
        await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").click();
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
        
    }
    async expatcareclickonibanchkboxTab() {

        await this.page.locator("//label[normalize-space()='Issue SEPA Direct Debit Mandate']").click();
    }
    async clickOnApplyandPayButton() {
        //await new Promise(resolve => setTimeout(resolve, 5000));
        await this.applyandpayButton.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
   }
   async getPolicyId_policyValidation(superUser: string, password: string) {
   await new Promise(resolve => setTimeout(resolve, 40000));
    await this.page.waitForLoadState('networkidle');
    await this.page.locator("//div[@id='row-12889']//h3[contains(text(),'Thank you')]").waitFor();
   const pn = await this.policyId.innerText();
   await this.page.goto("https://test-syncro-eu.tatsh.cloud/Account/Login");
    await this.page.waitForLoadState('networkidle');
    await this.userNameInputField.fill(superUser);
    await this.passwordInputField.fill(password);
    await this.signinButton.click();
    await this.page.waitForLoadState('networkidle');
    await this.contractNumber.fill(pn);
    await this.searchbtn.click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await this.editbtn.click();
    await new Promise(resolve => setTimeout(resolve, 20000));
    await this.page.waitForLoadState('networkidle');
    await this.page.locator("//div[text()=' Details']").waitFor();
    await new Promise(resolve => setTimeout(resolve, 20000));
    await this.page.locator("//div//a[text()='Save & continue ']").waitFor();
    await this.acceptbtn.click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await this.acceptbtn.click();
    await this.page.waitForLoadState('networkidle');
    await this.confirmbtn.click();
    await this.page.waitForLoadState('networkidle');
    await this.fullDeatailsbtn.click();
    await this.page.waitForLoadState('networkidle');
    await this.financtialInfobtn.click();

    }
}
