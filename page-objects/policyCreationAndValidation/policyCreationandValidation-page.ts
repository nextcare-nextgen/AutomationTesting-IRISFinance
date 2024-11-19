import { Keyboard, Locator, Page, BrowserContext, expect } from "@playwright/test";
import { appendFile } from "fs";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class PolicyCreation {
     newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly protectButton: Locator;
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
    readonly homeCountry: Locator;
    readonly addirionalinsuredPersonText: Locator;
    readonly noteText: Locator;
    readonly addanotherinsuredPersonButton: Locator;
    readonly noButton: Locator;
    readonly secondtabNextButton: Locator;
    readonly secondtabPreviousButton: Locator;
    
    readonly blankUsernameErrorMsg: Locator;
    readonly blankPwdErrorMsg: Locator;
    readonly lessCharUsernameErrorMsg: Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly daYInputField: Locator;
    readonly montHInputField: Locator;
    readonly yeaRInputField: Locator;
    readonly gendeRDropdownField: Locator;
    readonly selectgendeRDropdownField: Locator;
    readonly homecountrYDropdownField: Locator;
    readonly selectcountrYInputField: Locator;
    readonly passportnumbeRInputField: Locator;
    readonly germanyText: Locator;
    readonly codEDropdownField: Locator;
    readonly mobileNumberInputField: Locator;
    readonly emaiLInputField: Locator;
    readonly allfieldsonFirstTabErrorMsg: Locator;
    readonly firstTabfirstnameErrorMsg: Locator;
    readonly lastTablastnameErrorMsg: Locator;
    readonly inavlidpostalcodeErrorMsg: Locator;
    readonly invaliddateofbirthErrorMsg: Locator;
    readonly invalidmobilenumberErrorMsg: Locator;
    readonly addinsuredpersonButton: Locator;
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
    readonly creditcardNumber: Locator;
    readonly creditcardNumberr: Locator;
    readonly contractNumber: Locator;
    readonly policynum: Locator;
    readonly userNameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signinButton: Locator;
    readonly searchbtn: Locator;
    readonly editbtn: Locator;
    readonly acceptbtn: Locator;
    readonly confirmbtn: Locator;
    readonly fullDeatailsbtn: Locator;
    readonly financtialInfobtn: Locator;
    



    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;

        this.protectButton = page.locator("//button[normalize-space()='Protect']");
        this.firstnameInputField = page.locator("//input[@id='mat-input-0']");
        this.lastnameInputField = page.locator("//mat-label[text()=' Last Name ']");
        //this.homecountryDropdownField = page.locator("//html[1]/body[1]/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.homeCountry = page.locator("//mat-label[text()=' Home country ']");
        this.selectcountryInputField = page.locator("//span[normalize-space()='India']");
        this.passportnumberInputField = page.locator("//mat-label[text()= ' Passport Number ']");
        this.codeDropdownField = page.locator("//span[text()='Code']");
        this.mobilecodeInputField = page.locator("//span[text() = 'Code']");
        this.selectmobilecodeInputField = page.locator("//mat-option[@id='mat-option-2944']//span[@class='mat-option-text']//span[1]");
        this.mobilenumberInputField = page.locator("//mat-label[text() = 'Mobile Number']");
        this.emailInputField = page.locator("//mat-label[text() = ' Email ']");
        this.streetnameInputField = page.locator("//mat-label[text() = ' Street name ']");
        this.streetnumberInputField = page.locator("//mat-label[text() = ' Street number ']");
        this.postalcodeInputField = page.locator("//mat-label[text() = 'Postal Code']");
        this.additionaladdressInputField = page.locator("//input[@id='mat-input-9']");
        this.cityInputField = page.locator("//mat-label[text() = ' City/Town ']");
        this.countryDropdownField = page.locator('input[title="Email or Username"]');
        this.dayInputField = page.locator("//mat-label[text() = 'Day']");
        this.monthInputField = page.locator("//mat-label[text() = 'Month']");
        this.yearInputField = page.locator("/mat-label[text() = 'Year']");
        this.genderDropdownField = page.locator("//mat-label[text() = ' Gender ']");
        this.selectgenderDropdownField = page.locator("//div//mat-option//span[text() = ' Female ']");
        this.firsttabnextButton = page.locator("//button//span[text() = ' Next ']");
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
        this.allfieldsonFirstTabErrorMsg = page.locator("//div[@id='iris-msg-396']");
        this.firstTabfirstnameErrorMsg = page.locator("//div[@id='row-12845']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.lastTablastnameErrorMsg = page.locator("//div[@id='row-12928']//p[@class='form-error ng-star-inserted'][normalize-space()='Field format is invalid']");
        this.inavlidpostalcodeErrorMsg = page.locator("//div[@class='fieldType-19 form-error-msg ng-star-inserted']");
        this.invaliddateofbirthErrorMsg = page.locator("//p[@class='form-error ng-star-inserted']");
        this.invalidmobilenumberErrorMsg = page.locator("//p[normalize-space()='Invalid Phone']");
        this.addinsuredpersonButton = page.locator("//a[@class='iris-link add']");
        this.firstnamesecondTabInputField = page.locator("//input[@id='mat-input-27']");
        this.lastnamesecondTabInputField = page.locator("//input[@id='mat-input-28']");
        this.daysecondTabInputField = page.locator("//input[@id='mat-input-29']");
        this.monthsecondTabInputField = page.locator("//input[@id='mat-input-30']");
        this.yearsecondTabInputField = page.locator("//input[@id='mat-input-31']");
        this.gendersecondTabDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[2]/div[3]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectgendersecondTabDropdownField = page.locator("//span[normalize-space()='Female']");
        this.homecountrysecondTabDropdownField = page.locator("//body/app-root[1]/div[1]/app-application-form[1]/div[1]/div[2]/div[1]/form[1]/app-dynamic-form[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/app-dynamic-form-builder[1]/div[1]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/app-dynamic-form-builder[1]/div[3]/div[1]/app-dynamic-form-field[1]/div[1]/app-field-autocomplete[1]/form[1]/iris-autocomplete[1]/mat-form-field[1]/div[1]/div[1]/div[3]/span[1]/label[1]/mat-label[1]");
        this.selectcountrysecondTabInputField = page.locator("//span[normalize-space()='India']");
        this.passportnumbersecondTabInputField = page.locator("//input[@id='mat-input-35']");
        this.classictile = page.locator("//label[@for='mat-radio-5-input']");
        this.comforttile = page.locator("//label[@for='mat-radio-6-input']");
        this.premiumtile = page.locator("//label[@for='mat-radio-7-input']");
        this.thirdtabnextButton = page.locator("//mat-icon[@aria-label='Mat Arrow Forward']");
        this.fourttabApplyandPayButton = page.locator("//span[normalize-space()='Apply & Pay']");
        this.directdebitButton = page.locator("//label[@for='mat-radio-13-input']//div[@class='mat-h2 mb-none']");
        this.creditcardButton = page.locator("//div[normalize-space()='Credit Card']");
        this.applyandpayButton = page.locator("//span[normalize-space()='Apply & Pay']");
        this.creditcardNumber = page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']");
        this.contractNumber = page.locator('//div//input[@name="contractnumber"]');
        this.policynum = page.locator('//div[@id="row-12889"]//app-message-screen//p[1]//following::p[1]//b[contains(text(),"MAE-AWPDE")]');
        this.userNameInputField = page.locator('//div//input[@title="username"]');
        this.passwordInputField = page.locator('//div//input[@title="password"]')
        this.signinButton = page.locator('//div//button[@id="button_login"]');
        this.searchbtn = page.locator('//div[@class="search-action"]');
        this.editbtn = page.locator('//div[@class="tooltip  result_search_edit"]');
        this.acceptbtn = page.locator('//div//a[@id="accept_quotation_btn"]');
        this.confirmbtn = page.locator('//button[@class="btn btn_custom_pad confirm"]');
        this.fullDeatailsbtn = page.locator('//div//a[contains(@href,"../Endorsement/FullDetails")]');
        this.financtialInfobtn = page.locator('//div//a[@class="financialInfoBtn"]');
    }


    async logIntoSynchroB2C(url: string){
       await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
        await this.page.setViewportSize({ width: 1280, height: 720 });

    }

    async ClickOnProtect() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.protectButton.click();
    }
    
    //async protectFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
        async protectFirstTab(firstname: string){
        await new Promise(resolve => setTimeout(resolve, 5000))   
        await this.firstnameInputField.fill(firstname);
        //await this.lastnameInputField.nth(0).fill(lastname);
        /*await this.homecountryDropdownField.click();
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

    async expatcaresStartandEnddateonThirdtTab(startdate: string, enddate: string) {

        await this.page.locator("//input[@id='mat-input-27']").fill(startdate);
        await this.page.locator("//input[@id='mat-input-28']").fill(enddate);
        await this.page.locator("//div[@id='row-12896']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnClassiccTile() {
        await this.page.locator("//label[@for='mat-radio-8-input']//span[@class='mat-radio-label-content']").click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnThirdTabNextButton() {
        await this.page.locator("//mat-radio-group//div//mat-radio-button").first().click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.locator("//div//mat-checkbox").click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.thirdtabnextButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
    }

    async clickOnCreditcardradioButton() {
        await this.creditcardButton.click();
        await this.page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async clickOnCheckboxesonfourthtab() {
        await this.page.locator("//div[@class='mat-checkbox-container-custom ng-star-inserted']//span[contains(@class,'checkmark')]").first().click();
        await this.page.locator("//div[contains(text(),'I consent to MAWISTA GmbH sending me information a')]").click();
        await this.page.locator("//b[contains(text(),'Yes, I sufficiently informed myself about the prod')]").click();
        await this.page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 5000));

    }
    async clickOnApplyandPayButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.applyandpayButton.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async expatcareFilldetailsoncreditcardTab() {
        await this.page.waitForTimeout(10000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("4111111111111111");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
        await this.page.waitForTimeout(10000);
    }

    async clickOnSaveCardDetails() {
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async verifyThankyoupageText(expectedthankyouText: string, policyNum: string) {
        await new Promise(resolve => setTimeout(resolve, 14000));
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//div[@id='row-12889']//h3[contains(text(),'Thank you')]").waitFor();
        //const actualfirtliText = await (await this.page.waitForSelector("//div[@id='row-12889']//h3[contains(text(),'Thank you')]")).textContent();
        //expect(actualfirtliText).toContain(expectedthankyouText);
        const actualdisText = await this.page.locator("//div[@id='row-12889']//app-message-screen//p[1]//following::p[1]//b[contains(text(),'MAE-AWPDE')]").textContent();
        expect(actualdisText).toContain(policyNum);
        //await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async verifyPageURL(expectedPageURL: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageURL = await this.page.url();
        console.log(actualPageURL);
        expect(actualPageURL).toBe(expectedPageURL);
    }

 

    

    async verifySaveDetailsButtonEnabled() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const actual = this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']");
        expect(actual).toBeEnabled();
    }

  

    async verifyPrevoiusPageTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 9000));
        const actual = await this.page.frameLocator("//h1[text()=' Payment method and checkout ']");
        expect(actual).toBe(data);
    }

    
    

    
    async getPolicyNumber(superUser: string, password: string) {
        await new Promise(resolve => setTimeout(resolve, 14000));
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//div[@id='row-12889']//h3[contains(text(),'Thank you')]").waitFor();
        //let actualdisText = await this.page.locator("//div[@id='row-12889']//app-message-screen//p[1]//following::p[1]//b[contains(text(),'MAE-AWPDE')]").textContent();
        const pn = await this.policynum.innerText();
        await this.page.goto("https://test-syncro-eu.tatsh.cloud/Account/Login");
        await this.page.waitForLoadState('networkidle');
        await this.userNameInputField.fill(superUser);
        await this.passwordInputField.fill(password);
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.contractNumber.fill(pn);
        await this.searchbtn.click();
        await new Promise(resolve => setTimeout(resolve, 8000));
        await this.editbtn.click();
        await new Promise(resolve => setTimeout(resolve, 20000));
        await this.page.waitForLoadState('networkidle');
        await this.page.locator("//div[text()=' Details']").waitFor();
        await new Promise(resolve => setTimeout(resolve, 10000));
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

    async verifyFinancialInfo() {
        await this.page.waitForTimeout(7000);
        const actual = this.page.locator("//iris-field-label//div//div");
        for(let i=0; i < await actual.count();i++)
        expect(actual.nth(i)).toBeVisible();
    }

    async verifyexpatcaredetailsoncreditcardTab() {
        await this.page.waitForTimeout(10000);
        const actual = this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        expect(actual).toBeTruthy();
    }

    async startDate(a: number) {
        const today = new Date();
        const startDate = new Date().setDate(today.getDate() - a)
        return startDate;
    }
    async endDate(a: number) {
        const today = new Date();
        const endDate = new Date().setDate(today.getDate() + a)
        return endDate;
    }*/

}}