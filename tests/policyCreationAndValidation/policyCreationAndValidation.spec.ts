
/*import { expect, test } from '@playwright/test';
import { ExpatcarePage } from '../../page-objects/expatcare/first-page.ts';
//import { SyncroLoginPage } from '../../page-objects/login-page.ts';
const firsttabData = require(`../../testdata/${process.env.ENV || 'eu'}/expatcare.json`) as Record<string, any>;
//const loginbData = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
import '../../page-objects/utilities-pages/global-setup.ts';


test('NXGF-TC-3933:TC_001_Long term_back_Verify that a long term (backdated) policy is created and validated on the same day', async ({ browser }) => {
    const expatcarePage: ExpatcarePage = new ExpatcarePage(page);

    
    await test.step("Load the URL in Browser", async () => {
      await expatcarePage.gotoHomePage(firsttabData["expatcare-104"].url);
      
    })
    await test.step("click on protect program", async () => {
      await expatcarePage.ClickOnExpatcare();
  })
  
    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
      await expatcarePage.expatcareFirstTab(firsttabData["expatcare-104"].firstNameInput, firsttabData["expatcare-104"].lastNameInput,firsttabData["expatcare-104"].passportInput,firsttabData["expatcare-104"].mobileNumbercodeInput,firsttabData["expatcare-104"].mobileNumberInput,firsttabData["expatcare-104"].emailInput,firsttabData["expatcare-104"].streetNameInput,firsttabData["expatcare-104"].streetNumberInput,firsttabData["expatcare-104"].postalCodeInput,firsttabData["expatcare-104"].additionalAddressInput,firsttabData["expatcare-104"].cityInput,firsttabData["expatcare-104"].dayInput,firsttabData["expatcare-104"].monthInput,firsttabData["expatcare-104"].yearInput);
    })
  
    await test.step("Click on First Tab Next Button ", async () => {
      await expatcarePage.clickOnFirstTabNextButton();
    })
    ////page.pause();
    await test.step("Click on Second Tab  Button ", async () => {
      await expatcarePage.clickOnsecondtabNextButton();
    })
     // //page.pause();
    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
      await expatcarePage.expatcaresStartandEnddateonThirdtTab(firsttabData["expatcare-104"].StartdateInput,firsttabData["expatcare-104"].EnddateInput);
    })
    
    await test.step("Click on Classic Plan ", async () => {
      await expatcarePage.clickOnClassiccTile();
     // await page.waitForTimeout(10000);
    })
  
    await test.step("Click on Third Tab Next Button ", async () => {
      await expatcarePage.clickOnThirdTabNextButton();
    })
  
    await test.step("Click on  SEPA direct debit radio Button on fourth tab", async () => {
      await expatcarePage.clickOnDirectdebittButton();
    })
  
    await test.step("Enter ame of Account holder and IBAN ", async () => {
      await expatcarePage.expatcarefilldebitcarddetailstTab(firsttabData["expatcare-104"].iban);
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await expatcarePage.clickOnCheckboxesonfourthtab();
    })
  
    await test.step("Select checkboxes on  fourth tab", async () => {
      await expatcarePage.expatcareclickonibanchkboxTab();
    })
    
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
      await expatcarePage.clickOnApplyandPayButton();
    })
  
    await test.step("Vaerified all details on Thank you page ", async () => {
     await expatcarePage.verifyThankyoupageText(firsttabData["expatcare-104"].thankyouText,firsttabData["expatcare-104"].requestText,firsttabData["expatcare-104"].questionText,firsttabData["expatcare-104"].infoText);
     
    })
    
    const policyNum = expatcarePage.capturePolicyNum();
    console.log(policyNum);
    console.log("Thankyou");
    page.close();

});*/
