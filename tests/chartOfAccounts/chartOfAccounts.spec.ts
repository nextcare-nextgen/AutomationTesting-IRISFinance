import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { ChartOfAccountsPage } from '../../page-objects/chartOfAccounts-pages/chartOfAccounts-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
import { DynamicName } from "../../page-objects/utilities-pages/dynamicNaming.ts";
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const ChartOfAccountsData = require(`../../testdata/${process.env.ENV || 'eu'}/chartOfAccounts.json`) as Record<string, any>;

test('FIN-TC-1391: TC_001_Chart of Accounts_Verify that the user is able to navigate to Chart of Accounts screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

    await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
    });

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    });

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    });

    await test.step("Click on Chart of Accounts under Financials", async () => {
        await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
    });

    await test.step("Verify that user is navigated to Chart of Accounts screen", async () => {
        await chartOfAccountsPage.verifyChartOfAccountsScreenIsDisplayed();
    });

});

test('FIN-TC-1392: TC_002_Chart of Accounts_Verify the UI of the landing screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

    await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
    });

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    });

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    });

    await test.step("Click on Chart of Accounts under Financials", async () => {
        await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
    });

    await test.step("Verify the UI of Chart of Accounts screen (grid is displayed)", async () => {
        await chartOfAccountsPage.verifyChartOfAccountsGridIsDisplayed();
    });

});

// test('FIN-TC-1393: TC_003_Chart of Accounts_Verify the pagination', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Verify default pagination is 10 records per page", async () => {
//         await chartOfAccountsPage.verifyDefaultPaginationIs10();
//     });

// });

// test('FIN-TC-1394: TC_004_Chart of Accounts_Verify "Show stopped" toggle button', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Verify 'Show stopped' toggle is OFF by default", async () => {
//         await chartOfAccountsPage.verifyShowStoppedToggleIsOffByDefault();
//     });

// });

// test('FIN-TC-1395: TC_005_Chart of Accounts_Verify the UI of the stopped accounts', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Turn ON the 'Show stopped' toggle", async () => {
//         await chartOfAccountsPage.turnOnShowStoppedToggle();
//     });

//     await test.step("Verify grid is refreshed and toggle is ON", async () => {
//         await chartOfAccountsPage.verifyShowStoppedToggleIsOnAndGridIsDisplayed();
//     });

// });

// test('FIN-TC-1396: TC_006_Chart of Accounts_Verify the "Add" button on the top right panel', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Click on the Add button", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//     });

//     await test.step("Verify Add new screen is displayed", async () => {
//         await chartOfAccountsPage.verifyAddNewScreenIsDisplayed();
//     });

// });

// test('FIN-TC-1397: TC_007_Chart of Accounts_Verify the add new screen', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Click on the Add button", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//     });

//     await test.step("Verify all form fields on Add new screen are visible", async () => {
//         await chartOfAccountsPage.verifyAddNewScreenFormFieldsAreVisible();
//     });

// });

// test('FIN-TC-1398: TC_008_Chart of Accounts_Verify save without entering any value', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Click on the Add button", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//     });

//     await test.step("Click Save and verify 'This field is required' errors for all 3 fields", async () => {
//         await chartOfAccountsPage.clickSaveAndVerifyAllRequiredFieldErrorsAreShown();
//     });

// });

// test('FIN-TC-1399: TC_009_Chart of Accounts_Verify the "Account For" Dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Click on the Add button", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//     });

//     await test.step("Open 'Account For' dropdown and verify all 5 expected options", async () => {
//         await chartOfAccountsPage.openAccountForDropdownAndVerifyOptions();
//     });

// });

// test('FIN-TC-1400: TC_010_Chart of Accounts_Verify the relation between "Allow Voucher Creation" and "Aging" checkboxes', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Click on the Add button", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//     });

//     await test.step("Verify Aging checkbox is disabled by default", async () => {
//         await chartOfAccountsPage.verifyAgingCheckboxIsDisabledByDefault();
//     });

//     await test.step("Check 'Allow Voucher Creation' and verify Aging becomes enabled", async () => {
//         await chartOfAccountsPage.checkAllowVoucherCreationAndVerifyAgingIsEnabled();
//     });

//     await test.step("Uncheck 'Allow Voucher Creation' and verify Aging becomes disabled again", async () => {
//         await chartOfAccountsPage.uncheckAllowVoucherCreationAndVerifyAgingIsDisabled();
//     });

// });

// test('FIN-TC-1438: TC_011_Chart of Accounts_Verify adding a new account which would allow creating an account under it', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_011_Chart of Accounts'];

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Click on the Add button", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//     });

//     await test.step("Fill account details and click Save", async () => {
//         await chartOfAccountsPage.fillAccountFormAndSave(
//             DynamicName.randomAccountNumber(tcData.accountNumberPrefix),
//             tcData.accountName,
//             tcData.accountFor
//         );
//     });

//     await test.step("Verify success message and return to list screen", async () => {
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

// });

// test('FIN-TC-1439: TC_012_Chart of Accounts_Verify adding a new account which would not allow creating an account under it', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_012_Chart of Accounts'];
//     const duplicateAccountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("First Add - save a new account successfully", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(
//             duplicateAccountNumber,
//             tcData.accountName,
//             tcData.accountFor
//         );
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Second Add - attempt save with the SAME Account Number", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(
//             duplicateAccountNumber,
//             tcData.accountName,
//             tcData.accountFor
//         );
//     });

//     await test.step("Verify duplicate Account Number error is shown", async () => {
//         await chartOfAccountsPage.verifyDuplicateAccountErrorIsShown();
//     });

// });

// test('FIN-TC-1440: TC_013_Chart of Accounts_Verify searching the added account by Account Number', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_013_Chart of Accounts'];
//     const accountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);
//     const accountName = DynamicName.randomAccountNumber(tcData.accountNamePrefix);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Add a new account with unique number and name", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(accountNumber, accountName, tcData.accountFor);
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Search by Account Number", async () => {
//         await chartOfAccountsPage.searchInAccountsGrid(accountNumber);
//     });

//     await test.step("Verify grid shows exactly 1 row with the searched account", async () => {
//         await chartOfAccountsPage.verifyGridHasExactlyOneRowContaining(accountNumber);
//     });

// });

// test('FIN-TC-1441: TC_014_Chart of Accounts_Verify searching the added account by Account Name', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_014_Chart of Accounts'];
//     const accountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);
//     const accountName = DynamicName.randomAccountNumber(tcData.accountNamePrefix);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Add a new account with unique number and name", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(accountNumber, accountName, tcData.accountFor);
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Search by Account Name", async () => {
//         await chartOfAccountsPage.searchInAccountsGrid(accountName);
//     });

//     await test.step("Verify grid shows exactly 1 row with the searched account", async () => {
//         await chartOfAccountsPage.verifyGridHasExactlyOneRowContaining(accountName);
//     });

// });

// test('FIN-TC-1442: TC_015_Chart of Accounts_Verify adding a child account which would allow creating another child account under it', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_015_Chart of Accounts'];
//     const accountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);
//     const accountName = DynamicName.randomAccountNumber(tcData.accountNamePrefix);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Add a new account with all details filled", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(accountNumber, accountName, tcData.accountFor);
//     });

//     await test.step("Verify success message and return to list screen", async () => {
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

// });

// test('FIN-TC-1443: TC_016_Chart of Accounts_Verify adding a child account which would not allow creating another child account under it', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_016_Chart of Accounts'];
//     const duplicateAccountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("First Add - save a new account successfully", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(
//             duplicateAccountNumber,
//             tcData.accountName,
//             tcData.accountFor
//         );
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Second Add - attempt save with the SAME Account Number", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(
//             duplicateAccountNumber,
//             tcData.accountName,
//             tcData.accountFor
//         );
//     });

//     await test.step("Verify duplicate Account Number error is shown", async () => {
//         await chartOfAccountsPage.verifyDuplicateAccountErrorIsShown();
//     });

// });

// test('FIN-TC-1444: TC_017_Chart of Accounts_Verify adding a child account under an account that isn\'t allowing to do so', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_017_Chart of Accounts'];
//     const accountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);
//     const accountName = DynamicName.randomAccountNumber(tcData.accountNamePrefix);

//     await test.step("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Chart of Accounts Testclass----------------------");
//     });

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Add a new account with Allow Voucher Creation checked", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormWithVoucherCreationAndSave(accountNumber, accountName, tcData.accountFor);
//     });

//     await test.step("Verify success message and return to list screen", async () => {
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Search for the newly created account", async () => {
//         await chartOfAccountsPage.searchInAccountsGrid(accountNumber);
//     });

//     await test.step("Click the per-row Add link and verify 'Cannot create an account under' error", async () => {
//         await chartOfAccountsPage.clickPerRowAddForAccount(accountNumber);
//         await chartOfAccountsPage.verifyCannotCreateUnderAccountErrorIsShown(accountNumber);
//     });
// });

// test('FIN-TC-1445: TC_018_Chart of Accounts_Verify the UI of child accounts', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Verify the accounts grid is displayed", async () => {
//         await chartOfAccountsPage.verifyChartOfAccountsGridIsDisplayed();
//     });

//     await test.step("Verify child accounts UI under a sample parent account", async () => {
//         const sampleParent = (await chartOfAccountsPage.accountsGridRows.first().innerText()).split('\n')[0];
//         await chartOfAccountsPage.verifyChildAccountsUI(sampleParent);
//     });
// });

// test('FIN-TC-1446: TC_019_Chart of Accounts_Verify navigating to edit screen of an active account', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Verify the accounts grid is displayed", async () => {
//         await chartOfAccountsPage.verifyChartOfAccountsGridIsDisplayed();
//     });

//     await test.step("Capture an active account's number and name from the first row", async () => {
//         await chartOfAccountsPage.verifyFirstRowAccountNumberDoesNotNavigate();
//         await chartOfAccountsPage.verifyFirstRowAccountNameNavigatesToDetailsScreen();
//     });
// });

// test('FIN-TC-1447: TC_020_Chart of Accounts_Verify navigating to edit screen of a stopped account', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Turn the 'Show stopped' toggle", async () => {
//         await chartOfAccountsPage.turnOnShowStoppedToggle();
//     });

//     await test.step("Verify grid displays stopped accounts", async () => {
//         await chartOfAccountsPage.verifyChartOfAccountsGridIsDisplayed();
//     });

//     await test.step("Click on AccountNumber from grid of any stopped account and verify no navigation", async () => {
//         await chartOfAccountsPage.verifyFirstStoppedRowAccountNumberDoesNotNavigate();
//     });

//     await test.step("Click on Account Name from grid of any stopped account and verify no navigation", async () => {
//         await chartOfAccountsPage.verifyFirstStoppedRowAccountNameDoesNotNavigate();
//     });
// });

// test('FIN-TC-1448: TC_021_Chart of Accounts_Verify the details screen of an account', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const accountNumber = DynamicName.randomAccountNumber('TEST');
//     const accountName = DynamicName.randomAccountNumber('TESTNAME');
//     const accountFor = 'Payers';

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Create a new account first", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(accountNumber, accountName, accountFor);
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Search for the new account", async () => {
//         await chartOfAccountsPage.searchInAccountsGrid(accountNumber);
//     });

//     await test.step("Click the account name and verify the details screen loads with the account number uneditable", async () => {
//         await chartOfAccountsPage.clickAccountNameInRow(accountName);
//         await chartOfAccountsPage.verifyDetailsScreenIsDisplayed();
//         await chartOfAccountsPage.verifyAccountNumberFieldHasValue(accountNumber);
//         await chartOfAccountsPage.verifyAccountNumberFieldIsUneditable();
//     });
// });

// test('FIN-TC-1449: TC_022_Chart of Accounts_Verify search for a newly added account by Account Number and update Account Name', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);
//     const tcData = ChartOfAccountsData['TC_022_Chart of Accounts'];
//     const accountNumber = DynamicName.randomAccountNumber(tcData.accountNumberPrefix);
//     const accountName = DynamicName.randomAccountNumber(tcData.accountNamePrefix);
//     const updatedAccountName = tcData.updatedAccountName;
//     const accountFor = tcData.accountFor;

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Add a new account", async () => {
//         await chartOfAccountsPage.clickOnAddButton();
//         await chartOfAccountsPage.fillAccountFormAndSave(accountNumber, accountName, accountFor);
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Search for the newly added account by account number", async () => {
//         await chartOfAccountsPage.searchInAccountsGrid(accountNumber);
//         await chartOfAccountsPage.verifyGridHasExactlyOneRowContaining(accountNumber);
//     });

//     await test.step("Open the account details and update the Account Name", async () => {
//         await chartOfAccountsPage.clickAccountNameInRow(accountName);
//         await chartOfAccountsPage.verifyDetailsScreenIsDisplayed();
//         await chartOfAccountsPage.updateAccountNameAndSave(updatedAccountName);
//         await chartOfAccountsPage.verifySaveSuccessMessageAndReturnToListScreen();
//     });

//     await test.step("Verify the account still exists and displays the updated name", async () => {
//         await chartOfAccountsPage.searchInAccountsGrid(accountNumber);
//         await chartOfAccountsPage.verifyGridHasExactlyOneRowContaining(accountNumber);
//     });
// });

// test('FIN-TC-1450: TC_023_Chart of Accounts_Verify stopping an account with "Show stopped" toggle off', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     });

//     await test.step("Click on Chart of Accounts under Financials", async () => {
//         await chartOfAccountsPage.searchAndClickOnChartOfAccountsUnderFinancials();
//     });

//     await test.step("Verify Chart of Accounts screen and default toggle state", async () => {
//         await chartOfAccountsPage.verifyChartOfAccountsGridIsDisplayed();
//         await chartOfAccountsPage.verifyShowStoppedToggleIsOffByDefault();
//     });

//     await test.step("Use an existing account from the grid and stop one matched row (confirm)", async () => {
//         const accountSearch = await chartOfAccountsPage.rememberFirstRowAccountNumber();
//         await chartOfAccountsPage.stopFirstMatchedRowAndConfirmBySearch(accountSearch);
//     });
// });

