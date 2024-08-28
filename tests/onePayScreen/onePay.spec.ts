import { expect, test } from '@playwright/test';
import { OnePayPage } from '../../page-objects/onePay-pages/onePay-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const onePayData = require(`../../testdata/${process.env.ENV || 'eu'}/onePay.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;


test('NXGF-TC-2827,NXGF-TC-2830: TC_003_OnePay payment journey_Validate that the user is able to create any long term and short term policies in Mawista B2C portal', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("--------------Start the OnePay payment journey Testclass----------------------", async () => {
        console.log("--------------Start the OnePay payment journey Testclass----------------------")
    })

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_003_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_003_OnePay"].firstNameInput, onePayData["TC_003_OnePay"].lastNameInput, onePayData["TC_003_OnePay"].passportInput, onePayData["TC_003_OnePay"].mobileNumbercodeInput, onePayData["TC_003_OnePay"].mobileNumberInput, onePayData["TC_003_OnePay"].emailInput, onePayData["TC_003_OnePay"].streetNameInput, onePayData["TC_003_OnePay"].streetNumberInput, onePayData["TC_003_OnePay"].postalCodeInput, onePayData["TC_003_OnePay"].additionalAddressInput, onePayData["TC_003_OnePay"].cityInput, onePayData["TC_003_OnePay"].dayInput, onePayData["TC_003_OnePay"].monthInput, onePayData["TC_003_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_003_OnePay"].StartdateInput, onePayData["TC_003_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter all details of credit card ", async () => {
        await onePayPage.expatcareFilldetailsoncreditcardTab();
    })

    await test.step("Click on Save card details", async () => {
        await onePayPage.clickOnSaveCardDetails();
    })

    await test.step("Verified all details on Thank you page ", async () => {
        await onePayPage.verifyThankyoupageText(onePayData["TC_003_OnePay"].thankyouText, onePayData["TC_003_OnePay"].policyidText);
    })

    page.close();
});


test('NXGF-TC-2828: TC_004_OnePay payment journey_Validate that the user is able to select the payment method as Credit card for long term policy and short term policies', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_004_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_004_OnePay"].firstNameInput, onePayData["TC_004_OnePay"].lastNameInput, onePayData["TC_004_OnePay"].passportInput, onePayData["TC_004_OnePay"].mobileNumbercodeInput, onePayData["TC_004_OnePay"].mobileNumberInput, onePayData["TC_004_OnePay"].emailInput, onePayData["TC_004_OnePay"].streetNameInput, onePayData["TC_004_OnePay"].streetNumberInput, onePayData["TC_004_OnePay"].postalCodeInput, onePayData["TC_004_OnePay"].additionalAddressInput, onePayData["TC_004_OnePay"].cityInput, onePayData["TC_004_OnePay"].dayInput, onePayData["TC_004_OnePay"].monthInput, onePayData["TC_004_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_004_OnePay"].StartdateInput, onePayData["TC_004_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Validated that the user is able to select the payment method as Credit card for short term policies", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })
    page.close();
});

test('NXGF-TC-2829: TC_005_OnePay payment journey_Validate that the user is navigated to One pay iframe once the credit card payment method is selected', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_005_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_005_OnePay"].firstNameInput, onePayData["TC_005_OnePay"].lastNameInput, onePayData["TC_005_OnePay"].passportInput, onePayData["TC_005_OnePay"].mobileNumbercodeInput, onePayData["TC_005_OnePay"].mobileNumberInput, onePayData["TC_005_OnePay"].emailInput, onePayData["TC_005_OnePay"].streetNameInput, onePayData["TC_005_OnePay"].streetNumberInput, onePayData["TC_005_OnePay"].postalCodeInput, onePayData["TC_005_OnePay"].additionalAddressInput, onePayData["TC_005_OnePay"].cityInput, onePayData["TC_005_OnePay"].dayInput, onePayData["TC_005_OnePay"].monthInput, onePayData["TC_005_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_005_OnePay"].StartdateInput, onePayData["TC_005_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Validated that the user is navigated to One pay iframe once the credit card payment method is selected", async () => {
        await onePayPage.verifyexpatcaredetailsoncreditcardTab();
    })

});


test('NXGF-TC-2831: TC_006_OnePay payment journey_Validate that when the incorrect card number is entered the user is able to view the valid error message', async ({ page }) => {

    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_006_OnePay"].url);

    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_006_OnePay"].firstNameInput, onePayData["TC_006_OnePay"].lastNameInput, onePayData["TC_006_OnePay"].passportInput, onePayData["TC_006_OnePay"].mobileNumbercodeInput, onePayData["TC_006_OnePay"].mobileNumberInput, onePayData["TC_006_OnePay"].emailInput, onePayData["TC_006_OnePay"].streetNameInput, onePayData["TC_006_OnePay"].streetNumberInput, onePayData["TC_006_OnePay"].postalCodeInput, onePayData["TC_006_OnePay"].additionalAddressInput, onePayData["TC_006_OnePay"].cityInput, onePayData["TC_006_OnePay"].dayInput, onePayData["TC_006_OnePay"].monthInput, onePayData["TC_006_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_006_OnePay"].StartdateInput, onePayData["TC_006_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter card number ", async () => {
        await onePayPage.invalidexpatcareFilldetailsoncreditcardTab();
    })

    await test.step("Validated that when the incorrect card number is entered the user is able to view the valid error message", async () => {
        await onePayPage.verifyInvalidErrormessage(onePayData["TC_006_OnePay"].errormessage);
    })

    page.close();
});

test('NXGF-TC-2832: TC_000_OnePay payment journey_Validate that the pay button is enabled once all the required fields are filled', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_003_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_003_OnePay"].firstNameInput, onePayData["TC_003_OnePay"].lastNameInput, onePayData["TC_003_OnePay"].passportInput, onePayData["TC_003_OnePay"].mobileNumbercodeInput, onePayData["TC_003_OnePay"].mobileNumberInput, onePayData["TC_003_OnePay"].emailInput, onePayData["TC_003_OnePay"].streetNameInput, onePayData["TC_003_OnePay"].streetNumberInput, onePayData["TC_003_OnePay"].postalCodeInput, onePayData["TC_003_OnePay"].additionalAddressInput, onePayData["TC_003_OnePay"].cityInput, onePayData["TC_003_OnePay"].dayInput, onePayData["TC_003_OnePay"].monthInput, onePayData["TC_003_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_003_OnePay"].StartdateInput, onePayData["TC_003_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter all details of credit card ", async () => {
        await onePayPage.expatcareFilldetailsoncreditcardTab();
    })

    await test.step("Verified Save button Enabled", async () => {
        await onePayPage.verifySaveDetailsButtonEnabled();
    })

    page.close();
});

test('NXGF-TC-2833: TC_001_OnePay payment journey_Validate that the user can click on cancel and they return to the previous page', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_001_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_001_OnePay"].firstNameInput, onePayData["TC_001_OnePay"].lastNameInput, onePayData["TC_001_OnePay"].passportInput, onePayData["TC_001_OnePay"].mobileNumbercodeInput, onePayData["TC_001_OnePay"].mobileNumberInput, onePayData["TC_001_OnePay"].emailInput, onePayData["TC_001_OnePay"].streetNameInput, onePayData["TC_001_OnePay"].streetNumberInput, onePayData["TC_001_OnePay"].postalCodeInput, onePayData["TC_001_OnePay"].additionalAddressInput, onePayData["TC_001_OnePay"].cityInput, onePayData["TC_001_OnePay"].dayInput, onePayData["TC_001_OnePay"].monthInput, onePayData["TC_001_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_001_OnePay"].StartdateInput, onePayData["TC_001_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter all details of credit card ", async () => {
        await onePayPage.expatcareFilldetailsoncreditcardTab();
    })

    await test.step("Click On Cancel button", async () => {
        await onePayPage.clickOnCancelButton();
    })

    await test.step("Verified Prevoius page title as 'Payment method and checkout'", async () => {
        await onePayPage.verifyPrevoiusPageTitle(onePayData["TC_001_OnePay"].title);
    })

    page.close();
});

test('NXGF-TC-2834,NXGF-TC-2835: TC_002_OnePay payment journey_validate that the user can view a payment successful message along with the policy number and the one pay iframe is closed', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_003_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.expatcareFirstTab(onePayData["TC_002_OnePay"].firstNameInput, onePayData["TC_002_OnePay"].lastNameInput, onePayData["TC_002_OnePay"].passportInput, onePayData["TC_002_OnePay"].mobileNumbercodeInput, onePayData["TC_002_OnePay"].mobileNumberInput, onePayData["TC_002_OnePay"].emailInput, onePayData["TC_002_OnePay"].streetNameInput, onePayData["TC_002_OnePay"].streetNumberInput, onePayData["TC_002_OnePay"].postalCodeInput, onePayData["TC_002_OnePay"].additionalAddressInput, onePayData["TC_002_OnePay"].cityInput, onePayData["TC_002_OnePay"].dayInput, onePayData["TC_002_OnePay"].monthInput, onePayData["TC_002_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Enter Start Date and End Date  on Third Tab ", async () => {
        await onePayPage.expatcaresStartandEnddateonThirdtTab(onePayData["TC_002_OnePay"].StartdateInput, onePayData["TC_002_OnePay"].EnddateInput);
    })

    await test.step("Click on Classic Plan ", async () => {
        await onePayPage.clickOnClassiccTile();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter all details of credit card ", async () => {
        await onePayPage.expatcareFilldetailsoncreditcardTab();
    })

    await test.step("Click on Save card details", async () => {
        await onePayPage.clickOnSaveCardDetails();
    })

    await test.step("Verified all details on Thank you page ", async () => {
        await onePayPage.verifyThankyoupageText(onePayData["TC_002_OnePay"].thankyouText, onePayData["TC_002_OnePay"].policyidText);
    })

    page.close();
});

test('NXGF-TC-3923,NXGF-TC-3927: TC_000_long term_Verify that the user is able to create a long term policy with Credit card as the payment method', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);
    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_000_long_term"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.reiscareFirstTab(onePayData["TC_000_long_term"].firstNameInput, onePayData["TC_000_long_term"].lastNameInput, onePayData["TC_000_long_term"].passportInput, onePayData["TC_000_long_term"].mobileNumbercodeInput, onePayData["TC_000_long_term"].mobileNumberInput, onePayData["TC_000_long_term"].emailInput, onePayData["TC_000_long_term"].streetNameInput, onePayData["TC_000_long_term"].streetNumberInput, onePayData["TC_000_long_term"].postalCodeInput, onePayData["TC_000_long_term"].additionalAddressInput, onePayData["TC_000_long_term"].cityInput, onePayData["TC_000_long_term"].DayInput, onePayData["TC_000_long_term"].MonthInput, onePayData["TC_000_long_term"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })
    await test.step("Select Start and End Date on Third Tab ", async () => {
        await onePayPage.reiscareStartandenddateonThirdtTab();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter all details of credit card ", async () => {
        await onePayPage.reiscareFilldetailsoncreditcardTab();
        await page.waitForLoadState('networkidle');
    })

    await test.step("Verified all details on Thank you page ", async () => {
        await page.waitForLoadState('networkidle');
        await onePayPage.verifyThankyoupageText(onePayData["TC_000_long_term"].thankyouText, onePayData["TC_000_long_term"].policyidText);
    })

    page.close();
});

test('NXGF-TC-3924: TC_001_long term_Verify that the user is redirected to One Pay Iframe when the Credit card option is selected', async ({ page }) => {

    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_000_long_term"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.reiscareFirstTab(onePayData["TC_000_long_term"].firstNameInput, onePayData["TC_000_long_term"].lastNameInput, onePayData["TC_000_long_term"].passportInput, onePayData["TC_000_long_term"].mobileNumbercodeInput, onePayData["TC_000_long_term"].mobileNumberInput, onePayData["TC_000_long_term"].emailInput, onePayData["TC_000_long_term"].streetNameInput, onePayData["TC_000_long_term"].streetNumberInput, onePayData["TC_000_long_term"].postalCodeInput, onePayData["TC_000_long_term"].additionalAddressInput, onePayData["TC_000_long_term"].cityInput, onePayData["TC_000_long_term"].DayInput, onePayData["TC_000_long_term"].MonthInput, onePayData["TC_000_long_term"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Select Start and End Date on Third Tab ", async () => {
        await onePayPage.reiscareStartandenddateonThirdtTab();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Verified that the user is redirected to One Pay Iframe when the Credit card option is selected", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    page.close();
});

test('NXGF-TC-3925,NXGF-TC-3926: TC_002_long term_Verify that the user is able to enter all the card details on the One pay Iframe', async ({ page }) => {

    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_000_long_term"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.reiscareFirstTab(onePayData["TC_000_long_term"].firstNameInput, onePayData["TC_000_long_term"].lastNameInput, onePayData["TC_000_long_term"].passportInput, onePayData["TC_000_long_term"].mobileNumbercodeInput, onePayData["TC_000_long_term"].mobileNumberInput, onePayData["TC_000_long_term"].emailInput, onePayData["TC_000_long_term"].streetNameInput, onePayData["TC_000_long_term"].streetNumberInput, onePayData["TC_000_long_term"].postalCodeInput, onePayData["TC_000_long_term"].additionalAddressInput, onePayData["TC_000_long_term"].cityInput, onePayData["TC_000_long_term"].DayInput, onePayData["TC_000_long_term"].MonthInput, onePayData["TC_000_long_term"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Select Start and End Date on Third Tab ", async () => {
        await onePayPage.reiscareStartandenddateonThirdtTab();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on Credit card option", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Verified that the user is able to enter all the card details on the One pay Iframe", async () => {
        await onePayPage.reiscareFilldetailsoncreditcardTab();
    })

    page.close();
});

test('NXGF-TC-3928: TC_005_long term_Verify that the user is able to view the saved card details in Syncro "financial info page" after validating the policy', async ({ page }) => {
    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_005_long_term"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.reiscareFirstTab(onePayData["TC_005_long_term"].firstNameInput, onePayData["TC_005_long_term"].lastNameInput, onePayData["TC_005_long_term"].passportInput, onePayData["TC_005_long_term"].mobileNumbercodeInput, onePayData["TC_005_long_term"].mobileNumberInput, onePayData["TC_005_long_term"].emailInput, onePayData["TC_005_long_term"].streetNameInput, onePayData["TC_005_long_term"].streetNumberInput, onePayData["TC_005_long_term"].postalCodeInput, onePayData["TC_005_long_term"].additionalAddressInput, onePayData["TC_005_long_term"].cityInput, onePayData["TC_005_long_term"].DayInput, onePayData["TC_005_long_term"].MonthInput, onePayData["TC_005_long_term"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

    await test.step("Click on Second Tab  Button ", async () => {
        await onePayPage.clickOnsecondtabNextButton();
    })

    await test.step("Select Start and End Date on Third Tab ", async () => {
        await onePayPage.reiscareStartandenddateonThirdtTab();
    })

    await test.step("Click on Third Tab Next Button ", async () => {
        await onePayPage.clickOnThirdTabNextButton();
    })

    await test.step("Click on  Credit card radio Button on fourth tab", async () => {
        await onePayPage.clickOnCreditcardradioButton();
    })

    await test.step("Select checkboxes on  fourth tab", async () => {
        await onePayPage.clickOnCheckboxesonfourthtab();
    })
    page.pause();
    await test.step("Click on  Apply & Pay Button on fourth tab", async () => {
        await onePayPage.clickOnApplyandPayButton();
    })

    await test.step("Enter all details of credit card ", async () => {
        await onePayPage.reiscareFilldetailsoncreditcardTab();
        await page.waitForLoadState('networkidle');
    })

    await test.step("Get the policy number and validate it", async () => {
        await page.waitForLoadState('networkidle');
        await onePayPage.getPolicyNumber(onePayData["TC_005_long_term"].username, onePayData["TC_005_long_term"].password);
    })

    await test.step("user is able to view the saved card details in Syncro 'financial info page' after validating the policy", async () => {
        await onePayPage.verifyFinancialInfo();
    })

    page.close();
});


test('NXGF-TC-2834: TC_008_OnePay payment journey_Validate the the user can click on pay and proceed with the payment', async ({ page }) => {

    const onePayPage: OnePayPage = new OnePayPage(page);

    await test.step("Load the URL in Browser", async () => {
        await onePayPage.gotoHomePage(onePayData["TC_008_OnePay"].url);
    })

    await test.step("Enter Policyholder's details,Policyholder's address in Germany,Are you the insured person details and Enter your date of birth and gender", async () => {
        await onePayPage.reiscareFirstTab(onePayData["TC_008_OnePay"].firstNameInput, onePayData["TC_008_OnePay"].lastNameInput, onePayData["TC_008_OnePay"].passportInput, onePayData["TC_008_OnePay"].mobileNumbercodeInput, onePayData["TC_008_OnePay"].mobileNumberInput, onePayData["TC_008_OnePay"].emailInput, onePayData["TC_008_OnePay"].streetNameInput, onePayData["TC_008_OnePay"].streetNumberInput, onePayData["TC_008_OnePay"].postalCodeInput, onePayData["TC_008_OnePay"].additionalAddressInput, onePayData["TC_008_OnePay"].cityInput, onePayData["TC_008_OnePay"].DayInput, onePayData["TC_008_OnePay"].MonthInput, onePayData["TC_008_OnePay"].yearInput);
    })

    await test.step("Click on First Tab Next Button ", async () => {
        await onePayPage.clickOnFirstTabNextButton();
    })

});