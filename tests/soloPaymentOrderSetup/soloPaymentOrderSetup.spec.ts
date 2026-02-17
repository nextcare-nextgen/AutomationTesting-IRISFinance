import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { SoloPaymentOrderSetupPage } from '../../page-objects/soloPaymentOrderSetup-pages/soloPaymentOrderSetup-pages.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
//const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const SoloPaymentOrderSetupData = require(`../../testdata/${process.env.ENV || 'eu'}/soloPaymentOrderSetup.json`) as Record<string, any>;

//Need to show in next run
test('FIN-TC-250: TC_257_Solo Payment Order Setup_Verify that user is navigate to Solo Payment Order Setup', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })
});

test('FIN-TC-251: TC_258_Solo Payment Order Setup_Verify that  Validbreadcrumbs are displayed Finance > Solo Payment Order Setup', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Verify valid breadcrumbs are displayed", async () => {
        await soloPaymentOrderSetupPage.verifyValidBreadcrumbs();
    })
});


test('FIN-TC-252: TC_259_Solo Payment Order Setup_Verify that Solo Payment Order Setup Label is display in bold', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Verify Solo Payment Order Setup label is displayed in bold", async () => {
        await soloPaymentOrderSetupPage.verifySoloPaymentOrderSetupLabelIsBold();
    })
});

test('FIN-TC-253: TC_260_Solo Payment Order Setup_Verify that in Search Criteria all fields are displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Verify all Search Criteria fields are displayed", async () => {
        await soloPaymentOrderSetupPage.verifyAllSearchCriteriaFieldsAreDisplayed();
    })
});

test('FIN-TC-254: TC_261_Solo Payment Order Setup_verify that Payer has mandatory symbol displayed and error message should display for invalid data', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Verify Payer field is mandatory", async () => {
        await soloPaymentOrderSetupPage.verifyPayerIsMandatory();
    })
});

test('FIN-TC-255: TC_262_Solo Payment Order Setup_verify that select Payer (ABU DHABI NATIONAL INSURANCE CO. ADNIC) and click on search check user get result', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Select Payer and verify search results", async () => {
        await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_262_SoloPaymentOrderSetupData'].payerName);
    });
});

test('FIN-TC-256: TC_263_Solo Payment Order Setup_verify that select payer (adnic), Name (test) and solo payment order -All click on search user get result', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Select Payer, Name, Solo Payment Order and verify search result", async () => {
        await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
        await soloPaymentOrderSetupPage.enterName(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].name);
        await soloPaymentOrderSetupPage.selectSoloPaymentOrder(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].soloPaymentOrder);
        await soloPaymentOrderSetupPage.clickSearchAndVerifyResult();
    });
});

test('FIN-TC-257: TC_264_Solo Payment Order Setup_verify that select Payer , Name, Effective date,solo payment order and click on search then user get result', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Select Payer, Name, Effective Date, Solo Payment Order and verify search result", async () => {
        await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
        await soloPaymentOrderSetupPage.enterName(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].name);
        await soloPaymentOrderSetupPage.enterEffectiveDate(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].effectiveDate);
        await soloPaymentOrderSetupPage.selectSoloPaymentOrder(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].soloPaymentOrder);
        await soloPaymentOrderSetupPage.clickSearchAndVerifyResult();
    });
});

test('FIN-TC-258: TC_265_Solo Payment Order Setup_verify that In search result Name, status, Start date,  stop date, solo payment order, solo payment order type', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Verify Name, Status, Start Date, Stop Date, Solo Payment Order and Solo Payment Order Type columns are visible in search result", async () => {
        await soloPaymentOrderSetupPage.verifySearchResultColumnsVisible();
    })
});

test('FIN-TC-259: TC_266_Solo Payment Order Setup_verify that in search result Name, status, Start date,  stop date has up and down arrows are displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Verify up and down arrows are displayed for Name, Status, Start Date and Stop Date columns", async () => {
        await soloPaymentOrderSetupPage.verifySortingArrowsVisible();
    });
});

test('FIN-TC-260: TC_267_Solo Payment Order Setup_verify that click on uparrow then data is displayed ascending order', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Select Payer, Name, Solo Payment Order and verify search result", async () => {
        await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
        await soloPaymentOrderSetupPage.clickSearchAndVerifyResult();
    })

    await test.step("Verify data is sorted in ascending order when clicking Name column up arrow", async () => {
        await soloPaymentOrderSetupPage.verifyNameColumnSortedAscending();
    })
});

test('FIN-TC-261: TC_268_Solo Payment Order Setup_verify that click on down arrow then data is displayed descending order', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Select Payer, Name, Solo Payment Order and verify search result", async () => {
        await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
        await soloPaymentOrderSetupPage.clickSearchAndVerifyResult();
    })

    await test.step("Verify data is sorted in descending order when clicking Name column down arrow", async () => { // Click down arrow to sort
        await soloPaymentOrderSetupPage.verifyNameColumnSortedDescending();
    })
});

test('FIN-TC-262: TC_269_Solo Payment Order Setup_verify that in solo payment order column has checkbox displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.verifySoloPaymentOrderCheckboxDisplayed();
    })
});

test('FIN-TC-263: TC_270_Solo Payment Order Setup_verify that user can check and uncheck checkbox values', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.verifyCheckboxCheckUncheck();
    })
});


///INPROGRESSS
// test('FIN-TC-264: TC_271_Solo Payment Order Setup_verify that user can select single entry using checkbox', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.verifyCheckboxCheckUncheck();
//     })
// });

test('FIN-TC-265: TC_272_Solo Payment Order Setup_verify that user can select multiple entries using checkbox', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

    await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await soloPaymentOrderSetupPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
    })

    await test.step("Select Payer, Name, Solo Payment Order and verify search result", async () => {
        await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
        await soloPaymentOrderSetupPage.clickSearchAndVerifyResult();
    })

    await test.step('Verify user can select multiple entries using checkbox',async () => {
        await soloPaymentOrderSetupPage.verifyMultipleRowSelection();
    })
});

//Need to show in next run
// test('FIN-TC-266: TC_273_Solo Payment Order Setup_verify that user can uncheck checkbox to checked', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can select multiple entries using checkbox',async () => {
//         await soloPaymentOrderSetupPage.verifySingleCheckboxToggle();
//     })
// });

// test('FIN-TC-267: TC_274_Solo Payment Order Setup_verify that user can select all the entries using checkbox', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step("Select Payer, Name, Solo Payment Order and verify search result", async () => {
//         await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
//         await soloPaymentOrderSetupPage.clickSearchAndVerifyResult();
//     })

//     await test.step('Verify user can select all entries using header checkbox',async () => {
//         await soloPaymentOrderSetupPage.selectAllRowsUsingHeaderCheckbox();
//     })
// });

// test('FIN-TC-268: TC_275_Solo Payment Order Setup_verify that check checkbox then solo payment order type column has down arrow displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can select all entries using header checkbox',async () => {
//         await soloPaymentOrderSetupPage.verifyCheckboxShowsDownArrow();
//     })
// });

// test('FIN-TC-269: TC_276_Solo Payment Order Setup_verify that uncheck checkbox then solo payment order type column has down arrow displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can select all entries using header checkbox',async () => {
//         await soloPaymentOrderSetupPage.verifyUncheckShowsDownArrow();
//     })
// });

// // test('FIN-TC-270: TC_277_Solo Payment Order Setup_verify that in dropdown  both, direct, reimbursment options are displayed', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

// //     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
// //         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
// //     })

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
// //     })

// //     await test.step("Click On Financials", async () => {
// //         await soloPaymentOrderSetupPage.searchAndClickFinancials();
// //     })

// //     await test.step("Click on Provider's Financial Settlement", async () => {
// //         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
// //     })

// //     await test.step('Verify user can select all entries using header checkbox',async () => {
// //         await soloPaymentOrderSetupPage.verifyUncheckShowsDownArrow();
// //     })
// // });

// test('FIN-TC-271: TC_278_Solo Payment Order Setup_verify that user can select any value from dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can select all entries using header checkbox',async () => {
//         await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
//     })
// });

// test('FIN-TC-272: TC_279_Solo Payment Order Setup_Verify that Items per page label and dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can see Items per page label and dropdown', async () => {
//         await soloPaymentOrderSetupPage.verifyItemsPerPageLabelAndDropdownIsDisplayed();
//     });
// });

// test('FIN-TC-273: TC_280_Solo Payment Order Setup_IN dropdown 10,15,20, 30, 50, 100, 250 values are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify Items per page dropdown options are displayed', async () => {
//         await soloPaymentOrderSetupPage.verifyItemsPerPageDropdownOptionsAreDisplayed();
//     });
// });

// // test('FIN-TC-274: TC_281_Solo Payment Order Setup_Pagination is display from 1 to 10 and user can change the pagination using click on previous page and next page icon', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

// //     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
// //         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
// //     })

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
// //     })

// //     await test.step("Click On Financials", async () => {
// //         await soloPaymentOrderSetupPage.searchAndClickFinancials();
// //     })

// //     await test.step("Click on Provider's Financial Settlement", async () => {
// //         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
// //     })

// //     await test.step('Verify Items per page dropdown options are displayed', async () => {
// //         await soloPaymentOrderSetupPage.verifyItemsPerPageDropdownOptionsAreDisplayed();
// //     });
// // });

// test('FIN-TC-275: TC_282_Solo Payment Order Setup_verify that when user is on 1st page then Previous page button is disabled and Tooltip is not displayed when hover over to icon', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//    await test.step('Verify Previous page button is disabled and tooltip is not displayed on first page', async () => {
//         await soloPaymentOrderSetupPage.verifyPreviousPageButtonIsDisabledAndTooltipIsNotDisplayed();
//     });
// });

// // No data to check
// // test('FIN-TC-276: TC_283_Solo Payment Order Setup_verify that when user is on last page then Next page button is disabled and Tooltip is not displayed when hover over to icon', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

// //     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
// //         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
// //     })

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
// //     })

// //     await test.step("Click On Financials", async () => {
// //         await soloPaymentOrderSetupPage.searchAndClickFinancials();
// //     })

// //     await test.step("Click on Provider's Financial Settlement", async () => {
// //         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
// //     })

// //    await test.step('Verify Previous page button is disabled and tooltip is not displayed on first page', async () => {
// //         await soloPaymentOrderSetupPage.verifyPreviousPageButtonIsDisabledAndTooltipIsNotDisplayed();
// //     });
// // });

// test('FIN-TC-277: TC_284_Solo Payment Order Setup_verify that save button is enabled', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify save button is enabled', async () => {
//         await soloPaymentOrderSetupPage.verifySaveButtonIsEnabled();
//     });
// });

// test('FIN-TC-278: TC_285_Solo Payment Order Setup_verify that click on save button without searching any values user got You have to search first message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify that click on save button without searching any values user got You have to search first message is displayed', async () => {
//         await soloPaymentOrderSetupPage.verifySaveWithoutSearchShowsErrorMessage();
//     });
// });

// test('FIN-TC-279: TC_286_Solo Payment Order Setup_verify that click on save button only searching payer , Nothing has changed message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can select all entries using header checkbox',async () => {
//         await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
//     })

//     await test.step('Verify clicking Save after searching payer without changes shows "Nothing has changed" message', async () => {
//         await soloPaymentOrderSetupPage.verifyNothingHasChangedMessageOnSave();
//     });
// });

// test('FIN-TC-280: TC_287_Solo Payment Order Setup_verify that click on save button with changing solo payment order type values then Record updated successfully ! message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const soloPaymentOrderSetupPage: SoloPaymentOrderSetupPage = new SoloPaymentOrderSetupPage(page);

//     await test.step("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Solo Payment Order Setup Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await soloPaymentOrderSetupPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await soloPaymentOrderSetupPage.clickOnSoloPaymentOrderSetup();
//     })

//     await test.step('Verify user can select all entries using header checkbox',async () => {
//         await soloPaymentOrderSetupPage.searchPayer(SoloPaymentOrderSetupData['TC_263_SoloPaymentOrderSetupData'].payerName);
//     })

//     await test.step('Verify clicking Save after changing Solo Payment Order Type shows "Record updated successfully !" message', async () => {
//         await soloPaymentOrderSetupPage.updateSoloPaymentOrderTypeAndVerifySuccess(SoloPaymentOrderSetupData['TC_280_SoloPaymentOrderSetupData'].soloPaymentOrderType);;
//     });
// });