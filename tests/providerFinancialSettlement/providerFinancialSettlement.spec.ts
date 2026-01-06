import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { ProviderFinancialSettlementPage } from '../../page-objects/providerFinancialSettlement-pages/providerFinancialSettlement-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
//const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const ProviderFinancialSettlementData = require(`../../testdata/${process.env.ENV || 'eu'}/providerFinancialSettlement.json`) as Record<string, any>;

//test code
// test('FIN-TC-705: TC_000_Providers Financial Settlement_verify that  payer and reinsurer radio button are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("To Verify Payers And Reinsurer Radio Button", async () => {
//         await providerFinancialSettlementPage.toVerifyPayersAndReinsurerRadioButton();
//     })

// });

// test('FIN-TC-707: TC_001_Providers Financial Settlement_verify that select one value at a time from the radio button.', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to select one value at a time from radio button", async () => {
//         await providerFinancialSettlementPage.verifyRadioButtonsAreMutuallyExclusive();
//     })

// });

// test('FIN-TC-708: TC_002_Providers Financial Settlement_Verify that when Payer is selected, then  Payers auto populated list should be display ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

// });

// test('FIN-TC-709: TC_003_Providers Financial Settlement_verify that when Reinsurer is selected then Reinsurer dropdown is displayed ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnReinsurerRadioRadioButton();
//     })

//     await test.step("User should be able to view Reinsurer auto-populated list when Reinsurer is selected", async () => {
//         await providerFinancialSettlementPage.verifyReinsurerDropdownValues();
//     })
// });

// test('FIN-TC-710: TC_004_Providers Financial Settlement_verify that click on search button without filing any fields proper messages are displayed for mandatory fields ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnSearchButton();
//     })

//     await test.step("User should be able to click on search button without filing any fields proper messages are displayed for mandatory fields ", async () => {
//         await providerFinancialSettlementPage.errorMessageWithoutFillingAnyField();
//     })
// });

// test('FIN-TC-711: TC_005_Providers Financial Settlement_verify that user cannot select the bank account until the Payer is selected', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("User should not be able to select the bank account until the Payer is selected", async () => {
//         await providerFinancialSettlementPage.notAbleToSelectBankAccountUntilPayerIsSelected();
//     })
// });

// test('FIN-TC-712: TC_006_Providers Financial Settlement_verify that user can select Payer and relevant Bank accounts refelcts in the dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_006_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_006_ProviderFinancialSettlementData'].BankAccountValue);
//     });
// });

// test('FIN-TC-713: TC_007_Providers Financial Settlement_verify that the user can select Up To Due Date as mandatory field', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_006_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_006_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_006_ProviderFinancialSettlementData'].UpToDueDate);
//     });
// });

// test('FIN-TC-714: TC_008_Providers Financial Settlement_verify that user can fill all the mandatory fields and click on search then user gets the details', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnSearchButton();
//     })

//     await test.step("User should be able to validate details after providing expected values and clicking on serach ", async () => {
//         await providerFinancialSettlementPage.validateDetailsAfterSearch();
//     })
// });

// test('FIN-TC-715: TC_009_Providers Financial Settlement_verify that GL Account Desc hyper link is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("Verify user should be able to view the GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.verifyGLAccountDescHyperLink();
//     })
// });

// test('FIN-TC-716: TC_010_Providers Financial Settlement_verify that GL Account # hyper link is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("Verify User should be able to view the GL Account # hyper link ", async () => {
//         await providerFinancialSettlementPage.verifyGLAccounthashHyperLink();
//     })
// });

// test('FIN-TC-717: TC_011_Providers Financial Settlement_verify that provider type search field is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("Verify User should be able to view provider type search field ", async () => {
//         await providerFinancialSettlementPage.verifyProviderTypeSearchField();
//     })
// });

// // test('FIN-TC-718: TC_012_Providers Financial Settlement_verify that click on Provider type then Claim batch criteria selection popup window is displayed', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
// //     })

// //     await test.step("Click On Financials", async () => {
// //         await providerFinancialSettlementPage.searchAndClickFinancials();
// //     })

// //     await test.step("Click on Provider's Financial Settlement", async () => {
// //         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
// //     })

// //     await test.step("User should be able to click on Payers Radio Button", async () => {
// //         await providerFinancialSettlementPage.clickOnPayersRadioButton();
// //     })

// //     await test.step("Select Payer Option", async () => {
// //         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].PayerValue);
// //         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].BankAccountValue);
// //         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].UpToDueDate);
// //     })

// //     await test.step("Click on Provider type hyperlink ", async () => {
// //         await providerFinancialSettlementPage.clickOnProviderTypeHyperLink();
// //     })
// // });

// test('FIN-TC-728: TC_022_Providers Financial Settlement_verify that click on Export to excel without filling any mandatory fields', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("user should view a valid  error message ", async () => {
//         await providerFinancialSettlementPage.validErrorMessage();
//     })
// });

// test('FIN-TC-730: TC_024_Providers Financial Settlement_verify that click on GL Account Desc hyper link then Voucher Search popup window is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_008_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//         await providerFinancialSettlementPage.verifyVoucherSearchPopupDisplayed();
//     })
// });

// test('FIN-TC-731: TC_025_Providers Financial Settlement_verify that user is able to enter the account number of the Provider', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_025_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_025_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_025_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_025_ProviderFinancialSettlementData'].AccountNumber);
//     })
// });

// test('FIN-TC-732:  TC_026_Providers Financial Settlement_verify that user is able to enter the account name of the Provider', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         //await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountNumber);
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountName(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountName);
//     })
// });

// test('FIN-TC-733: TC_031_Providers Financial Settlement_Verify that user is able to search with the account name of the Provider', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         //await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountNumber);
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountName(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountName);
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnVoucherSearchButton();
//     })
// });

// test('FIN-TC-734: TC_032_Providers Financial Settlement_Verify that user is able to select the account name with SELECT hyperlink', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         //await providerFinancialSettlementPage.selectBankAccount(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].BankAccountValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     // await test.step("Click on GL Account Desc", async () => {
//     //     await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountNumber);
//     // })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountName(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountName);
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnVoucherSearchButton();
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.VoucherSearchSelectAccountName();
//     })
// });

// test('FIN-TC-735: TC_033_Providers Financial Settlement_Verify that user is able to select the account number with SELECT hyperlink', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountNumber);
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnVoucherSearchButton();
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.VoucherSearchSelectAccountNumber();
//     })
// });

// test('FIN-TC-736: TC_030_Providers Financial Settlement_Verify that user is able to search the provider with the account number ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountNumber);
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnVoucherSearchButton();
//     })
// });

// test('FIN-TC-737: TC_036_Providers Financial Settlement_Verify that user is able to view the account number and account  name in the search criteria page', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click On GL Account Desc hyper link ", async () => {
//         await providerFinancialSettlementPage.clickOnGLAccountDescHyperLink();
//     })

//     await test.step("Click on GL Account Desc", async () => {
//         await providerFinancialSettlementPage.addAccountNumber(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].AccountNumber);
//     })

//     await test.step("User should be able to click on Voucher Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnVoucherSearchButton();
//     })

//     await test.step("User should be able to view the account number and account name as per the selection on the search criteria page", async () => {
//         await providerFinancialSettlementPage.verifySelectedAccountNumberAndNameDisplayed();
//     })
// });

// test('FIN-TC-738: TC_035_Providers Financial Settlement_Verify that user is able to view all the dropdowns under Currency ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click on currency dropdown", async () => {
//         await providerFinancialSettlementPage.verifyCurrencyDropdownValues();
//     })
// });

// test('FIN-TC-739: TC_034_Providers Financial Settlement_Verify that user is able to view all the dropdown values under Collected ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click on the Collected", async () => {
//         await providerFinancialSettlementPage.verifyCollectedDropdownValues();
//     })
// });

// test('FIN-TC-740: TC_027_Providers Financial Settlement_Verify that the Currency, Minimum balance and Current balance reflects as per the Payer selected  ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to view the Currency, Minimum balance and Current balance as per the Payer selected", async () => {
//         await providerFinancialSettlementPage.verifyCurrencyMinBalanceAndCurrentBalanceForSelectedPayer();
//     })
// });

// test('FIN-TC-741: TC_028_Providers Financial Settlement_Verify that the user can search the details of the transaction with Payer , Bank account and up to date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should search the details of the transaction with Payer , Bank account and up to date", async () => {
//         await providerFinancialSettlementPage.clickOnSearchButton();
//         await providerFinancialSettlementPage.verifyPayerBankAccountAndUpToDueDateAreDisplayed();
//     })
// });

//Need To add Next time
// test('FIN-TC-742: TC_029_Providers Financial Settlement_Verify that the user should be able to sort the results using "Order results by"', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_029_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_029_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to sort the results using the Order results by due date", async () => {
//         await providerFinancialSettlementPage.orderResultsByDueDateAndSearch();
//         await providerFinancialSettlementPage.verifyResultsSortedByDueDate();
//     })
// });

// // test('FIN-TC-743: TC_027_Providers Financial Settlement_Verify that the user should be able to sort the results using "Order results by', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
// //     })

// //     await test.step("Click On Financials", async () => {
// //         await providerFinancialSettlementPage.searchAndClickFinancials();
// //     })

// //     await test.step("Click on Provider's Financial Settlement", async () => {
// //         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
// //     })

// //     await test.step("User should be able to click on Payers Radio Button", async () => {
// //         await providerFinancialSettlementPage.clickOnPayersRadioButton();
// //     })

// //     await test.step("Select Payer Option", async () => {
// //         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
// //         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
// //     })

// //     // await test.step("User should be able to sort the results using the Order results by PO ID", async () => {
// //     //     await providerFinancialSettlementPage.orderResultsByPOIDAndSearch();
// //     // })

// //     await test.step("User should be able to sort the results using the Order results by PO ID",async () => {
// //         await providerFinancialSettlementPage.verifyPOIDSortedAscending();
// //     });
// // });

// test('FIN-TC-744: TC_042_Providers Financial Settlement_Verify that the user should be able to export to excel when the export using Job toggle is inactive', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click on export using job (to inactive)", async () => {
//         await providerFinancialSettlementPage.clickOnExportUsingJobInactive();
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnSearchButton();
//     })

//     await test.step("User should be able to on Export to excel",async () => {
//         await providerFinancialSettlementPage.exportToExcel();
//     });
// });

// test('FIN-TC-745: TC_041_Providers Financial Settlement_Verify that the user should be able to export to excel when the export using Job toggle is active', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to click on Search Button", async () => {
//         await providerFinancialSettlementPage.clickOnSearchButton();
//     })

//     await test.step("User should be able to on Export to excel",async () => {
//         await providerFinancialSettlementPage.exportToExcel();
//     });
// });

// test('FIN-TC-746: TC_039_Providers Financial Settlement_ Verify that the user should be able enter the TO PO ID', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to enter from PO ID", async () => {
//         await providerFinancialSettlementPage.enterFromPOID(ProviderFinancialSettlementData['TC_039_ProviderFinancialSettlementData'].POID);
//     })
// });

// test('FIN-TC-747: TC_040_Providers Financial Settlement_ Verify that the user should be able enter the TO PO ID', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to enter to PO ID", async () => {
//         await providerFinancialSettlementPage.enterTOPOID(ProviderFinancialSettlementData['TC_039_ProviderFinancialSettlementData'].TOPOID);
//     })
// });

// test('FIN-TC-748: TC_037_Providers Financial Settlement_Verify that the user is able to select the Partner bank ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })

//     await test.step("Click On Financials", async () => {
//         await providerFinancialSettlementPage.searchAndClickFinancials();
//     })

//     await test.step("Click on Provider's Financial Settlement", async () => {
//         await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
//     })

//     await test.step("User should be able to click on Payers Radio Button", async () => {
//         await providerFinancialSettlementPage.clickOnPayersRadioButton();
//     })

//     await test.step("Select Payer Option", async () => {
//         await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
//         await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
//     })

//     await test.step("User should be able to select the Partner Bank", async () => {
//         await providerFinancialSettlementPage.selectPartersBank(ProviderFinancialSettlementData['TC_039_ProviderFinancialSettlementData'].PARTNER_BANK);
//     })
// });
