import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { appendFile } from "fs";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class OnePayPage {

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
        this.selectcountrysecondTabInputField = page.locator("//span[normalize-space()='Afghanistan']");
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
    }


    async gotoHomePage(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
        await this.page.setViewportSize({ width: 1536, height: 730 });

    }

    async expatcareFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
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

    async invalidexpatcareFilldetailsoncreditcardTab() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("000");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async verifyInvalidErrormessage(expected: string) {
        const actual = await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//div//span[text()='Invalid']").first().textContent();
        expect(actual).toContain(expected);
    }

    async verifySaveDetailsButtonEnabled() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const actual = this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']");
        expect(actual).toBeEnabled();
    }

    async clickOnCancelButton() {
        const framePage = await this.page.frameLocator("#CreditCardIframe");
        const actual = await framePage.getByRole('button', { name: 'Cancel ' });
        await actual.scrollIntoViewIfNeeded();
        await actual.dblclick({ force: true });
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async verifyPrevoiusPageTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 9000));
        const actual = await this.page.frameLocator("//h1[text()=' Payment method and checkout ']");
        expect(actual).toBe(data);
    }

    async reiscareStartandenddateonThirdtTab() {
        await this.page.locator("//iris-datepicker//mat-datepicker-toggle//button//mat-icon").first().click();
        await this.page.locator('//mat-year-view//td//button[contains(@class,"active")]').click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.page.locator("//div//span//mat-label[text()='End Date']//following::mat-datepicker-toggle//button//mat-icon").click();
        await this.page.locator('//mat-year-view//td//button[contains(@class,"active")]').click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async reiscareFirstTab(firstname: string, lastname: string, passport: string, code: string, mobilenumber: string, email: string, streetname: string, streetnumber: string, postalcode: string, address: string, city: string, day: string, month: string, year: string) {
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
        await this.page.locator("//mat-label[contains(text(),'Country')]").click();
        await this.page.locator("//span[normalize-space()='Germany']").click();
        await this.dayInputField.fill(day);
        await this.monthInputField.fill(month);
        await this.yearInputField.fill(year);
        await this.genderDropdownField.click();
        await this.selectgenderDropdownField.click();

    }

    async reiscareFilldetailsoncreditcardTab() {
        console.log("hi");
       //await this.page.waitForTimeout(10000);
        await new Promise(resolve => setTimeout(resolve, 10000));
        await this.page.waitForLoadState('networkidle');
        //await this.page.waitForTimeout(10000);
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").waitFor();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationMM']").fill("10");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cardnumber']").fill("5555 5555 5555 4444");
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='expirationYYYY']").fill("28");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='cvc']").fill("411");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//select[@id='country']").selectOption('India');
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").click();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").waitFor();
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//input[@id='postalCode']").fill("12345");
        await this.page.frameLocator("//iframe[@id='CreditCardIframe']").locator("//span[normalize-space()='Save card details']").click();
        await new Promise(resolve => setTimeout(resolve, 9000));
    
       // await this.page.waitForTimeout(10000);
     //   await new Promise(resolve => setTimeout(resolve, 8000));


    }


}