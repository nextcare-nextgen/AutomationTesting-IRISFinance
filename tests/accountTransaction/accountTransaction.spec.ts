import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page.ts';
import { AccountTransactionPage } from '../../page-objects/accountTransaction-pages/accountTransaction-pages.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const AccountTransactionData = require(`../../testdata/${process.env.ENV||'eu'}/accountTransactions.json`) as Record< string,any >

//1
// test('FIN-TC-97: TC_098_Account Transaction_Verify that user is navigate to Account Transaction', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Account Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
//  });

// //2
// test('FIN-TC-98: TC_099_Account Transaction_Verify that  Validbreadcrumbs are displayed Finance >Account Transaction', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
// });

// //3
// test('FIN-TC-99: TC_100_Account Transaction_Verify that in Search Criteria, Search Result all fields are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
// });

// //4
// test('FIN-TC-100: TC_101_Account Transaction_Verify that click on search then user get Validresult', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })
// });

// //5
// test('FIN-TC-101: TC_102_Account Transaction_Verify that  fill only mandatory fields click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })
// });

// //6
// test('FIN-TC-102: TC_103_Account Transaction_Verify that  fill all fields click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillAllDetails(AccountTransactionData["accountTransaction-001"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-001"].Account,AccountTransactionData["accountTransaction-001"].type,AccountTransactionData["accountTransaction-001"].countryValue);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })
// });

// //7
// test('FIN-TC-103: TC_104_Account Transaction_Verify that  without filling any values and click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })

//     await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate thst popup should be displayed",async()=>{
//         await accountTransactionPage.verifyErrorMsg();
//     })
// });

// //8
// test('FIN-TC-104:TC_105_Account Transaction_verify that fill mandatory fields and  click on generate data file then file get downloaded and All contents should be display proper and and correct .', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })

//      await test.step("Fill all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//     await test.step("Click on the Generate file button", async () => {
//         await accountTransactionPage.clickgeneratefile();
//     })

// });

// //9
// test('FIN-TC-105:TC_106_Account Transaction_verify that without fill mandatory fields and  click on generate data file then file get downloaded', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })

//     await test.step("Click on the Generate file button", async () => {
//         await accountTransactionPage.clickgeneratefile();
//     })

//     await test.step("Validate thst popup should be displayed",async()=>{
//         await accountTransactionPage.verifyErrorMsg();
//     })
// });

// //10
// test('FIN-TC-106: TC_107_Account Transaction_verify that user can search result by Provider key Ex-Reim', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Search the fields", async() =>{
//         await accountTransactionPage.verifySearch(AccountTransactionData["accountTransaction-001"].providerKey)
//     })
// });

// //11
// test('FIN-TC-107:TC_108_Account Transaction_verify that user can search result by Txn Id EX-4074730', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Search the fields", async() =>{
//         await accountTransactionPage.verifySearch(AccountTransactionData["accountTransaction-001"].TXNID)
//     })
// });

// //12
// test('FIN-TC-108:TC_109_Account Transaction_verify that user can search result by payment order Ex-3601148', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Search the fields", async() =>{
//         await accountTransactionPage.verifySearch(AccountTransactionData["accountTransaction-001"].paymentOrder)
//     })
// });

// //13
// test('FIN-TC-109:TC_110_Account Transaction_verify that user can search result by Destination Account Ex-Hospital', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Search the fields", async() =>{
//         await accountTransactionPage.verifySearch(AccountTransactionData["accountTransaction-001"].destinationAccount)
//     })
// });

// //14
// test('FIN-TC-111:TC_112_Account Transaction_verify that user enter inValidvalues for serach ex-erw', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Search the fields", async() =>{
//         await accountTransactionPage.verifySearch(AccountTransactionData["accountTransaction-001"].InvalidValue)
//     })

//     await test.step("No Record found message should be displayed",async() => {
//         await accountTransactionPage.noRecordFound();
//     })
// });

// //15
// test('FIN-TC-113:TC_114_Account Transaction_verify that select any rows eye icon and click on it then Account transaction details popup window is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })
// });

// //16
// test('FIN-TC-114:TC_115_Account Transaction_verify that bank reference checque realse date and cheque sent date is editable', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that cheque dates should be present in popup", async() =>{
//         await accountTransactionPage.validatepopupdetail();
//     })
// });

// //17
// test('FIN-TC-115:TC_116_Account Transaction_verify that few fields are disabled', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that cheque dates should be present in popup", async() =>{
//         await accountTransactionPage.nonEditableField();
//     })
// });

// //18
// test('FIN-TC-116:TC_117_Account Transaction_verify that pending checkbox is displyed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })
// });

// //19
// test('FIN-TC-117:TC_118_Account Transaction_verify that checkbox is checked then pending reason button is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })
// });

// //20
// test('FIN-TC-118:TC_119_Account Transaction_verify that click on pending reason button then  Pending Reason popup window is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })

//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingReasonPopup();
//     })

// });

// //21
// test('FIN-TC-119:TC_120_Account Transaction_verify that reason label and multipline text box is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })

//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingReasonPopup();
//     })

// });

// //22
// test('FIN-TC-120:TC_121_Account Transaction_verify that click on apply button without filing reason then proper error message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })

//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingReasonPopup();
//     })

// });

// //23
// test('FIN-TC-121:TC_122_Account Transaction_verify that click on apply button with filing reason then details get saved', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingReasonText();
//     })

//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingReasonPopup();
//     })

// });

// //24
// test('FIN-TC-122:TC_123_Account Transaction_verify that click on cancel button with popup window should get closed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })
    
//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingPopupCancel();
//     })

// });

// //25
// test('FIN-TC-123:TC_124_Account Transaction_verify that click on Apply button with selecting checkbox pending but not filing the reason then proper error message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })

//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingReasonPopup();
//     })

// });

// //26
// test('FIN-TC-124: TC_125_Account Transaction_verify that click on Apply button without selecting checkbox pending values should get saved', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingCheckbox();
//     })

//     await test.step("Validate that pending checkbox is present", async() =>{
//         await accountTransactionPage.pendingReasonText();
//     })

//     await test.step("Validate that message popup box should be displayed",async()=>{
//         await accountTransactionPage.pendingReasonPopup();
//     })

// });

// //27
// test('FIN-TC-125: TC_126_Account Transaction_verify that set  Cheque realse date is less than settlement date  then error message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that Alert should be poped up when released Date is less than settled date", async() =>{
//         await accountTransactionPage.newChequereleaseDate(AccountTransactionData["accountTransaction-001"].chequeReleaseDate);
//     })
// });

// //28
// test('FIN-TC-126: TC_127_Account Transaction_verify that set  sent date is less than realse date  then error message is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Validate that Alert should be poped up when released Date is less than settled date", async() =>{
//         await accountTransactionPage.newChequereleaseDate(AccountTransactionData["accountTransaction-001"].chequeSentDate);
//     })
// });

// //29
// test('FIN-TC-127: TC_128_Account Transaction_verify that click  on cancel button then popup window get closed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate eye icon should be present",async() =>{
//         await accountTransactionPage.validateEyeIcon();
//     })

//     await test.step("Click on the close button", async() =>{
//         await accountTransactionPage.closePopup();
//     })
// });

// //30
// test('FIN-TC-128: TC_129_Account Transaction_Verify that Items per page label and dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate item per page should be present",async() =>{
//         await accountTransactionPage.verifyPerPage()
//     })

// });

// //31
// test('FIN-TC-129: TC_130_Account Transaction_IN dropdown 10,15,20, 30, 50, 100, 250 values are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate item per page should be present",async() =>{
//         await accountTransactionPage.itemperPagedd()
//     })

// });

// //32
// test('FIN-TC-130: TC_131_Account Transaction_Pagination is display from 1 to 15 and user can change the pagination using start page and last page', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//      await test.step("Search all the mandatory feilds", async () => {
//         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate item per page should be present",async() =>{
//         await accountTransactionPage.verifypagination()
//     })

// });

// //33
// test('FIN-TC-1235: TC_541_Account Transaction_verify that from po validation date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifyfromPODate()
//     })
 
// });

// //34
// test('FIN-TC-1236:TC_542_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifyfromPODate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromPODateCalendar();
//     })
// });

// //35
// test('FIN-TC-1237: TC_543_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifyfromPODate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromPODateCalendar();
//     })
// });

// //36
// test('FIN-TC-1238: TC_544_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifyfromPODate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromPODateCalendar();
//     })
//     await test.step("Validate that told date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //37
// test('FIN-TC-1239: TC_545_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifyfromPODate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromPODateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// //38
// test('FIN-TC-1240: TC_546_Account Transaction_verify that To po validation date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to po date should be present",async() =>{
//         await accountTransactionPage.verifytoPODate()
//     })
 
// });

// //39
// test('FIN-TC-1241:TC_547_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to po date should be present",async() =>{
//         await accountTransactionPage.verifytoPODate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifytoPODateCalendar();
//     })
// });

// //40
// test('FIN-TC-1242: TC_548_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to po date should be present",async() =>{
//         await accountTransactionPage.verifytoPODate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifytoPODateCalendar();
//     })
// });

// //41
// test('FIN-TC-1243: TC_549_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifytoPODate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifytoPODateCalendar();
//     })
//     await test.step("Validate that told date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //42
// test('FIN-TC-1244: TC_550_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifytoPODate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifytoPODateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// //43
// test('FIN-TC-1245: TC_551_Account Transaction_verify that user can select To po validation date less than from po validation date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with PO Validation Date", async () => {
//         await accountTransactionPage.fillPOValidationDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromPOValidationDate,AccountTransactionData["accountTransaction-001"].toPOValidationDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate that invalid message should be populated", async() => {
//         await accountTransactionPage.InvalidPageMsg();
//     })
// });

// //44
// test('FIN-TC-1246: TC_552_Account Transaction_verify that user can select To po validation date greater than from po validation date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with PO Validation Date", async () => {
//         await accountTransactionPage.fillPOValidationDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-002"].fromPOValidationDate,AccountTransactionData["accountTransaction-002"].toPOValidationDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

// });

// //45
// test('FIN-TC-1247: TC_553_Account Transaction_verify that user can select same To po validation date and from po validation date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with PO Validation Date", async () => {
//         await accountTransactionPage.fillPOValidationDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-003"].fromPOValidationDate,AccountTransactionData["accountTransaction-003"].toPOValidationDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

// });

// //46
// test('FIN-TC-1248: TC_554_Account Transaction_verify that from Due date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from due date should be present",async() =>{
//         await accountTransactionPage.verifyfromDueDate()
//     })
 
// });

// //47
// test('FIN-TC-1249:TC_555_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from due date should be present",async() =>{
//         await accountTransactionPage.verifyfromDueDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromDueDateCalendar();
//     })
// });

// //48
// test('FIN-TC-1250: TC_556_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from due date should be present",async() =>{
//         await accountTransactionPage.verifyfromDueDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromDueDateCalendar();
//     })
// });

// //49
// test('FIN-TC-1251: TC_557_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from due date should be present",async() =>{
//         await accountTransactionPage.verifyfromDueDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromDueDateCalendar();
//     })
//     await test.step("Validate that old date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //50
// test('FIN-TC-1252: TC_558_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from due date should be present",async() =>{
//         await accountTransactionPage.verifyfromDueDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromDueDateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// 

// test('FIN-TC-1253: TC_559_Account Transaction_verify that To Due date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to due date should be present",async() =>{
//         await accountTransactionPage.verifytoDueDate()
//     })
 
// });

// //52
// test('FIN-TC-1254:TC_560_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to due date should be present",async() =>{
//         await accountTransactionPage.verifytoDueDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifytoDueDateCalendar();
//     })
// });

// //53
// test('FIN-TC-1255: TC_561_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from due date should be present",async() =>{
//         await accountTransactionPage.verifytoDueDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromDueDateCalendar();
//     })
// });

// //54
// test('FIN-TC-1256: TC_562_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifytoDueDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifytoDueDateCalendar();
//     })
//     await test.step("Validate that told date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //55
// test('FIN-TC-1257: TC_563_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from po date should be present",async() =>{
//         await accountTransactionPage.verifytoDueDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifytoDueDateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// //56
// test('FIN-TC-1258: TC_564_Account Transaction_verify that user can select To Due date less than from Due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with Due Date", async () => {
//         await accountTransactionPage.fillDueDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDueDate,AccountTransactionData["accountTransaction-001"].toDueDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate that invalid message should be populated", async() => {
//         await accountTransactionPage.InvalidPageMsg();
//     })
// });

// //57
// test('FIN-TC-1259: TC_565_Account Transaction_verify that user can select To Due date greater than from Due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with Due Date", async () => {
//         await accountTransactionPage.fillDueDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-002"].fromDueDate,AccountTransactionData["accountTransaction-002"].toDueDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

// });

// //58
// test('FIN-TC-1260: TC_566_Account Transaction_verify that user can select same To Due date and from Due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Enter all the details with due Date", async () => {
//         await accountTransactionPage.fillDueDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-003"].fromDueDate,AccountTransactionData["accountTransaction-003"].toDueDate,AccountTransactionData["accountTransaction-002"].Account);
//     })


//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })
// });

// //59
// test('FIN-TC-1261: TC_567_Account Transaction_verify that from settle date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from Settle date should be present",async() =>{
//         await accountTransactionPage.verifyfromSettleDate()
//     })
 
// });

// //60
// test('FIN-TC-1262:TC_568_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from settle date should be present",async() =>{
//         await accountTransactionPage.verifyfromSettleDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromSettleDateCalendar();
//     })
// });

// //61
// test('FIN-TC-1263: TC_569_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from settle date should be present",async() =>{
//         await accountTransactionPage.verifyfromSettleDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromSettleDateCalendar();
//     })
// });

// //62
// test('FIN-TC-1264: TC_570_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from settle date should be present",async() =>{
//         await accountTransactionPage.verifyfromSettleDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromSettleDateCalendar();
//     })
//     await test.step("Validate that old date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //63
// test('FIN-TC-1265: TC_571_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from settle date should be present",async() =>{
//         await accountTransactionPage.verifyfromSettleDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromSettleDateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// //64
// test('FIN-TC-1266: TC_572_Account Transaction_verify that To settle date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to settle date should be present",async() =>{
//         await accountTransactionPage.verifytoSettleDate()
//     })
//  });

// // 65
// test('FIN-TC-1267:TC_573_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to settle date should be present",async() =>{
//         await accountTransactionPage.verifytoSettleDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifytoSettleDateCalendar();
//     })
// });

test('FIN-TC-1268: TC_574_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from due date should be present",async() =>{
        await accountTransactionPage.verifytoSettleDate()
    })
    
    await test.step("Validate that the calendar should be present",async()=>{
        await accountTransactionPage.verifyfromSettleDateCalendar();
    })
});

//67
test('FIN-TC-1269: TC_575_Account Transaction_verify that user can select old date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate to settle date should be present",async() =>{
        await accountTransactionPage.verifytoSettleDate()
    })
    
     await test.step("Click on calendar icon",async()=>{
        await accountTransactionPage.verifytoSettleDateCalendar();
    })
    await test.step("Validate that told date can be selected",async()=>{
        await accountTransactionPage.verifyOldDate();
    })
});

//68
test('FIN-TC-1270: TC_576_Account Transaction_verify that user can select future date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from settle date should be present",async() =>{
        await accountTransactionPage.verifytoSettleDate()
    })
    
     await test.step("Click on calendar icon",async()=>{
        await accountTransactionPage.verifytoSettleDateCalendar();
    })
    await test.step("Validate that future date can be selected",async()=>{
        await accountTransactionPage.verifyFutureDate();
    })
});

//69
test('FIN-TC-1271: TC_577_Account Transaction_verify that user can select To settle date less than from settle date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Verify that Account Transactions Page is visible", async () => {
        await accountTransactionPage.validatefieldsVisibility();
    })
    
     await test.step("Enter all the details with Settle Date", async () => {
        await accountTransactionPage.fillSettleDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromSettleDate,AccountTransactionData["accountTransaction-001"].toSettleDate,AccountTransactionData["accountTransaction-002"].Account);
    })

     await test.step("Click on the Search button", async () => {
        await accountTransactionPage.clickonSearch();
    })

    await test.step("Validate that invalid message should be populated", async() => {
        await accountTransactionPage.InvalidPageMsg();
    })
});

//70
test('FIN-TC-1272: TC_578_Account Transaction_verify that user can select To settle date greater than from settle date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Verify that Account Transactions Page is visible", async () => {
        await accountTransactionPage.validatefieldsVisibility();
    })
    
     await test.step("Enter all the details with Settle Date", async () => {
        await accountTransactionPage.fillSettleDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-002"].fromSettleDate,AccountTransactionData["accountTransaction-002"].toSettleDate,AccountTransactionData["accountTransaction-002"].Account);
    })

     await test.step("Click on the Search button", async () => {
        await accountTransactionPage.clickonSearch();
    })

});

//71
test('FIN-TC-1273: TC_579_Account Transaction_verify that user can select same To settle date and from settle date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Verify that Account Transactions Page is visible", async () => {
        await accountTransactionPage.validatefieldsVisibility();
    })
    
    await test.step("Enter all the details with settle Date", async () => {
        await accountTransactionPage.fillSettleDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-003"].fromSettleDate,AccountTransactionData["accountTransaction-003"].toSettleDate,AccountTransactionData["accountTransaction-002"].Account);
    })


     await test.step("Click on the Search button", async () => {
        await accountTransactionPage.clickonSearch();
    })
});

//72
test('FIN-TC-1274: TC_580_Account Transaction_verify that from cheque release date label and textbox is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from Cheque date should be present",async() =>{
        await accountTransactionPage.verifyfromChequeReleaseDate()
    })
 
});

//73
test('FIN-TC-1275:TC_581_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from cheque release date should be present",async() =>{
        await accountTransactionPage.verifyfromChequeReleaseDate()
    })
    
    await test.step("Validate that the calendar should be present",async()=>{
        await accountTransactionPage.verifyfromChequeReleaseDateCalendar();
    })
});

//74
test('FIN-TC-1276: TC_582_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from cheque release date should be present",async() =>{
        await accountTransactionPage.verifyfromChequeReleaseDate()
    })
    
    await test.step("Validate that the calendar should be present",async()=>{
        await accountTransactionPage.verifyfromChequeReleaseDateCalendar();
    })
});

//75
test('FIN-TC-1277: TC_583_Account Transaction_verify that user can select old date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from cheque date should be present",async() =>{
        await accountTransactionPage.verifyfromChequeReleaseDate()
    })
    
     await test.step("Click on calendar icon",async()=>{
        await accountTransactionPage.verifyfromChequeReleaseDateCalendar();
    })
    await test.step("Validate that old date can be selected",async()=>{
        await accountTransactionPage.verifyOldDate();
    })
});

//76
test('FIN-TC-1278: TC_584_Account Transaction_verify that user can select future date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from cheque date should be present",async() =>{
        await accountTransactionPage.verifyfromChequeReleaseDate()
    })
    
     await test.step("Click on calendar icon",async()=>{
        await accountTransactionPage.verifyfromChequeReleaseDateCalendar();
    })
    await test.step("Validate that future date can be selected",async()=>{
        await accountTransactionPage.verifyFutureDate();
    })
});

//77
test('FIN-TC-1279: TC_585_Account Transaction_verify that To cheque release date label and textbox is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate to cheque Release date should be present",async() =>{
        await accountTransactionPage.verifytoChequeReleaseDate()
    })
 
});

// 78
test('FIN-TC-1280:TC_586_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate to Cheque Release date should be present",async() =>{
        await accountTransactionPage.verifytoChequeReleaseDate()
    })
    
    await test.step("Validate that the calendar should be present",async()=>{
        await accountTransactionPage.verifytoChequeReleaseDateCalendar();
    })
});

//79
test('FIN-TC-1281: TC_587_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from cheque Release date should be present",async() =>{
        await accountTransactionPage.verifytoChequeReleaseDate()
    })
    
    await test.step("Validate that the calendar should be present",async()=>{
        await accountTransactionPage.verifyfromChequeReleaseDateCalendar();
    })
});

//80
test('FIN-TC-1282: TC_588_Account Transaction_verify that user can select old date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate to Cheque Release date should be present",async() =>{
        await accountTransactionPage.verifytoChequeReleaseDate()
    })
    
     await test.step("Click on calendar icon",async()=>{
        await accountTransactionPage.verifytoChequeReleaseDateCalendar();
    })
    await test.step("Validate that told date can be selected",async()=>{
        await accountTransactionPage.verifyOldDate();
    })
});

//81
test('FIN-TC-1283: TC_589_Account Transaction_verify that user can select future date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Validate from cheque release date should be present",async() =>{
        await accountTransactionPage.verifytoChequeReleaseDate()
    })
    
     await test.step("Click on calendar icon",async()=>{
        await accountTransactionPage.verifytoChequeReleaseDateCalendar();
    })
    await test.step("Validate that future date can be selected",async()=>{
        await accountTransactionPage.verifyFutureDate();
    })
});

//82
test('FIN-TC-1284: TC_590_Account Transaction_verify that user can select To cheque release date less than from cheque release date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Verify that Account Transactions Page is visible", async () => {
        await accountTransactionPage.validatefieldsVisibility();
    })
    
     await test.step("Enter all the details with Cheque Release Date", async () => {
        await accountTransactionPage.fillChequeReleaseDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromChequeReleaseDate,AccountTransactionData["accountTransaction-001"].toChequeReleaseDate,AccountTransactionData["accountTransaction-002"].Account);
    })

     await test.step("Click on the Search button", async () => {
        await accountTransactionPage.clickonSearch();
    })

    await test.step("Validate that invalid message should be populated", async() => {
        await accountTransactionPage.InvalidPageMsg();
    })
});

//83
test('FIN-TC-1285: TC_591_Account Transaction_verify that user can select To cheque release date greater than from cheque release date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 
      await test.step("Verify that Account Transaction Page is visible", async () => {
        await accountTransactionPage.accountTransactionField();
    })

    await test.step("Verify that Account Transactions Page is visible", async () => {
        await accountTransactionPage.validatefieldsVisibility();
    })
    
     await test.step("Enter all the details with Settle Date", async () => {
        await accountTransactionPage.fillChequeReleaseDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-002"].fromChequeReleaseDate,AccountTransactionData["accountTransaction-002"].toChequeReleaseDate,AccountTransactionData["accountTransaction-002"].Account);
    })

     await test.step("Click on the Search button", async () => {
        await accountTransactionPage.clickonSearch();
    })

});

// //84 Need to add next time
// test('FIN-TC-1286: TC_592_Account Transaction_verify that user can select same To cheque release date and from cheque release date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Enter all the details with settle Date", async () => {
//         await accountTransactionPage.fillChequeReleaseDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-003"].fromChequeReleaseDate,AccountTransactionData["accountTransaction-003"].toChequeReleaseDate,AccountTransactionData["accountTransaction-002"].Account);
//     })


//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })
// });

// //85
// test('FIN-TC-1287: TC_593_Account Transaction_verify that from po release date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from PO Release date should be present",async() =>{
//         await accountTransactionPage.verifyfromPOReleaseDate();
//     })
 
// });

// //86
// test('FIN-TC-1288:TC_594_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from PO Release date should be present",async() =>{
//         await accountTransactionPage.verifyfromPOReleaseDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromPOReleaseDateCalendar();
//     })
// });

// //87  
// test('FIN-TC-1289: TC_595_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from PO release date should be present",async() =>{
//         await accountTransactionPage.verifyfromPOReleaseDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromPOReleaseDateCalendar();
//     })
// });

// //88
// test('FIN-TC-1290: TC_596_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from PO Release date should be present",async() =>{
//         await accountTransactionPage.verifyfromPOReleaseDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromPOReleaseDateCalendar();
//     })
//     await test.step("Validate that old date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //89
// test('FIN-TC-1291: TC_597_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from settle date should be present",async() =>{
//         await accountTransactionPage.verifyfromPOReleaseDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifyfromPOReleaseDateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// //90
// test('FIN-TC-1292: TC_598_Account Transaction_verify that To po release date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to settle date should be present",async() =>{
//         await accountTransactionPage.verifytoPOReleaseDate()
//     })
 
// });

// // 91
// test('FIN-TC-1293:TC_599_Account Transaction_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to PO release date should be present",async() =>{
//         await accountTransactionPage.verifytoPOReleaseDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifytoPOReleaseDateCalendar();
//     })
// });

// //92
// test('FIN-TC-1294: TC_600_Account Transaction_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from PO release date should be present",async() =>{
//         await accountTransactionPage.verifytoPOReleaseDate()
//     })
    
//     await test.step("Validate that the calendar should be present",async()=>{
//         await accountTransactionPage.verifyfromPOReleaseDateCalendar();
//     })
// });

// //93
// test('FIN-TC-1295: TC_601_Account Transaction_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate to PO Release date should be present",async() =>{
//         await accountTransactionPage.verifytoPOReleaseDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifytoPOReleaseDateCalendar();
//     })
//     await test.step("Validate that told date can be selected",async()=>{
//         await accountTransactionPage.verifyOldDate();
//     })
// });

// //94
// test('FIN-TC-1296:TC_602_Account Transaction_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate from settle date should be present",async() =>{
//         await accountTransactionPage.verifytoPOReleaseDate()
//     })
    
//      await test.step("Click on calendar icon",async()=>{
//         await accountTransactionPage.verifytoPOReleaseDateCalendar();
//     })
//     await test.step("Validate that future date can be selected",async()=>{
//         await accountTransactionPage.verifyFutureDate();
//     })
// });

// //95
// test('FIN-TC-1297: TC_603_Account Transaction_verify that user can select To po release date less than from po release date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with PO Release Date", async () => {
//         await accountTransactionPage.fillPOReleaseDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromPOReleaseDate,AccountTransactionData["accountTransaction-001"].toPOReleaseDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

//     await test.step("Validate that invalid message should be populated", async() => {
//         await accountTransactionPage.InvalidPageMsg();
//     })
// });

// //96
// test('FIN-TC-1298: TC_604_Account Transaction_verify that user can select To po release date greater than from po release date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//      await test.step("Enter all the details with PO Release Date", async () => {
//         await accountTransactionPage.fillPOReleaseDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-002"].fromPOReleaseDate,AccountTransactionData["accountTransaction-002"].toPOReleaseDate,AccountTransactionData["accountTransaction-002"].Account);
//     })

//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })

// });

// //97
// test('FIN-TC-1299: TC_605_Account Transaction_verify that user can select same To po release date and from po release date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Enter all the details with settle Date", async () => {
//         await accountTransactionPage.fillPOReleaseDate(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-003"].fromPOReleaseDate,AccountTransactionData["accountTransaction-003"].toPOReleaseDate,AccountTransactionData["accountTransaction-002"].Account);
//     })


//      await test.step("Click on the Search button", async () => {
//         await accountTransactionPage.clickonSearch();
//     })
// });

// //98
// test('FIN-TC-1300: TC_606_Account Transaction_Verify that Type dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Click on Type field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.typeDropdown();
//     })
// });

// //99
// test('FIN-TC-1301: TC_607_Account Transaction_verify that in dropdown options are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Click on Type field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.typeDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstdropdown();
//     })
// });

// //100
// test('FIN-TC-1302: TC_608_Account Transaction_verify that user can select one option at a time', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Click on Type field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.typeDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstdropdown();
//     })
// });

// //101
// test('FIN-TC-1303: TC_609_Account Transaction_verify that selected value is shown on the dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Click on Type field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.typeDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstdropdown();
//     })

//     await test.step("Validate that the type is same as shown in the dropdown", async()=>{
//         await accountTransactionPage.selectedOption(AccountTransactionData["accountTransaction-002"].type);
//     })
// });

// //102
// test('FIN-TC-1304: TC_610_Account Transaction_Verify that Payment order Id textbox accept alphabeats', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Fill the payment order ID", async () => {
//         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDAlpha);
//     })

//     await test.step("Validate that OrderID is blank", async() =>{
//         await accountTransactionPage.blankOrderID();
//     })
// });

// //103
// test('FIN-TC-1305: TC_611_Account Transaction_Verify that Payment order Id textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Fill the payment order ID", async () => {
//         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDNo);
//     })
// });

// //104
// test('FIN-TC-1306: TC_612_Account Transaction_Verify that Payment order Id textbox accept specail charachters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Fill the payment order ID", async () => {
//         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDSpCh);
//     })

//     await test.step("Validate that OrderID is blank", async() =>{
//         await accountTransactionPage.blankOrderID();
//     })
// });

// //105
// test('FIN-TC-1307: TC_613_Account Transaction_Verify that Payment order Id textbox accept blank spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Fill the payment order ID", async () => {
//         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDBlSp);
//     })

//     await test.step("Validate that OrderID is blank", async() =>{
//         await accountTransactionPage.blankOrderID();
//     })
// });

// //106
// test('FIN-TC-1308: TC_614_Account Transaction_Verify that Payment order Id textbox accept leading and trailing spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Fill the payment order ID", async () => {
//         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDTrailingSpace);
//     })
// });

// //107
// test('FIN-TC-1309: TC_615_Account Transaction_Verify that Bank reference textbox accept alpha-numeric values ', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Fill the bank reference", async () => {
//         await accountTransactionPage.fillBankRef(AccountTransactionData["accountTransaction-001"].BankRefAlpha);
//     })

// });

// //108
// test('FIN-TC-1310: TC_616_Account Transaction_Verify that Bank reference textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Fill the bank reference", async () => {
//         await accountTransactionPage.fillBankRef(AccountTransactionData["accountTransaction-001"].BankRefNo);
//     })

// });

// //109
// test('FIN-TC-1311: TC_617_Account Transaction_Verify that Bank reference textbox accept special characters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//    await test.step("Fill the bank reference", async () => {
//         await accountTransactionPage.fillBankRef(AccountTransactionData["accountTransaction-001"].BankRefSpecialCharacter);
//     })

//  await test.step("Validate that Bank Reference is blank", async() =>{
//         await accountTransactionPage.blankrefernceID();
//     })
// });

// // //110
// // test('FIN-TC-1307: TC_613_Account Transaction_Verify that Payment order Id textbox accept blank spaces', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Provider Transaction Under Financials", async () => {
// //         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
// //     })
 
// //       await test.step("Verify that Account Transaction Page is visible", async () => {
// //         await accountTransactionPage.accountTransactionField();
// //     })

// //     await test.step("Verify that Account Transactions Page is visible", async () => {
// //         await accountTransactionPage.validatefieldsVisibility();
// //     })
    
// //     await test.step("Fill the payment order ID", async () => {
// //         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDBlSp);
// //     })

// //     await test.step("Validate that OrderID is blank", async() =>{
// //         await accountTransactionPage.blankOrderID();
// //     })
// // });

// // //111
// // test('FIN-TC-1308: TC_614_Account Transaction_Verify that Payment order Id textbox accept leading and trailing spaces', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Provider Transaction Under Financials", async () => {
// //         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
// //     })
 
// //       await test.step("Verify that Account Transaction Page is visible", async () => {
// //         await accountTransactionPage.accountTransactionField();
// //     })

// //     await test.step("Verify that Account Transactions Page is visible", async () => {
// //         await accountTransactionPage.validatefieldsVisibility();
// //     })
    
// //     await test.step("Fill the payment order ID", async () => {
// //         await accountTransactionPage.fillPaymentOrderID(AccountTransactionData["accountTransaction-001"].POIDTrailingSpace);
// //     })
// // });

// //112
// test('FIN-TC-1314: TC_620_Account Transaction_verify that settled dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//     await test.step("Click on Settled field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifysettledDropdown();
//     })
// });

// //113
// test('FIN-TC-1315: TC_621_Account Transaction_verify that in dropdown options are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//     await test.step("Click on Type field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifysettledDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstSettledDropdown();
//     })
// });

// //114
// test('FIN-TC-1316: TC_622_Account Transaction_verify that user can select one option at a time', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Click on Type field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifysettledDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstSettledDropdown();
//     })
// });

// //115
// test('FIN-TC-1317: TC_623_Account Transaction_verify that selected value is shown on the dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Click on Settled field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifysettledDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstSettledDropdown();
//     })

//     await test.step("Validate that the settled is same as shown in the dropdown", async()=>{
//         await accountTransactionPage.selectedSettleOption(AccountTransactionData["accountTransaction-001"].settled);
//     })
// });

// //116
// test('FIN-TC-1318: TC_624_Account Transaction_verify that country dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//     await test.step("Click on Country field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifyCountryDropdown();
//     })
// });

// //117
// test('FIN-TC-1319: TC_625_Account Transaction_verify that in dropdown options are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })
    
//     await test.step("Click on Country field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifyCountryDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })
// });

// //118
// test('FIN-TC-1320: TC_626_Account Transaction_verify that user can select one option at a time', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Click on Country field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifyCountryDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })
// });

// //119
// test('FIN-TC-1321: TC_627_Account Transaction_verify that selected value is shown on the dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Verify that Account Transactions Page is visible", async () => {
//         await accountTransactionPage.validatefieldsVisibility();
//     })
    
//     await test.step("Click on Country field and validate that the dropdown should be populated", async () => {
//         await accountTransactionPage.verifyCountryDropdown();
//     })

//     await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that the country is same as shown in the dropdown", async()=>{
//         await accountTransactionPage.selectedCountryOption(AccountTransactionData["accountTransaction-001"].Country);
//     })
// });

// //120
// test('FIN-TC-1322: TC_628_Account Transaction_verify that by default provider type and provider dropdown is disabled', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//     await test.step("Validate that provider fields are disabled", async () => {
//         await accountTransactionPage.verifyProvider();
//     })
// });

// //121
// test('FIN-TC-1323: TC_629_Account Transaction_verify that when country selected from dropdown then provider type dropdown get enabled', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that provider fields are disabled", async () => {
//         await accountTransactionPage.verifyProviderEnabled();
//     })
// });

// //122
// test('FIN-TC-1324: TC_630_Account Transaction_verify that in dropdown options are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that Provider type field is enabled", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//     })

// });

// //123
// test('FIN-TC-1325: TC_631_Account Transaction_verify that user can select one option at a time', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that Provider type field is enabled", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//     })

//     await test.step("Validate that first option of provider type is selected", async()=>{
//         await accountTransactionPage.selectfirstProviderTypeDropdown();
//     })
// });

// //124
// test('FIN-TC-1326: TC_632_Account Transaction_verify that selected value is shown on the dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that Provider type field is enabled", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//     })

//     await test.step("Validate that first option of provider type is selected", async()=>{
//         await accountTransactionPage.selectfirstProviderTypeDropdown();
//     })

//     await test.step("Validate that the selected value is shown", async()=>{
//         await accountTransactionPage.selectedProviderTypeOption(AccountTransactionData["accountTransaction-001"].ProviderType)
//     })
// });


// //121
// test('FIN-TC-1327: TC_633_Account Transaction_verify that when provider typw selected from dropdown then provider dropdown get enabled', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Select the valure for Provider type field", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//          await accountTransactionPage.selectfirstProviderTypeDropdown();
//     })

//     await test.step("Validate that Provider field dropdown is enabled",async()=>{
//         await accountTransactionPage.verifyProviderDropdown();
//     })
// });

// //122
// test('FIN-TC-1324: TC_634_Account Transaction_verify that in dropdown options are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that Provider type field is enabled", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//     })

// });

// //123
// test('FIN-TC-1325: TC_631_Account Transaction_verify that user can select one option at a time', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that Provider type field is enabled", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//     })

//     await test.step("Validate that first option of provider type is selected", async()=>{
//         await accountTransactionPage.selectfirstProviderTypeDropdown();
//     })
// });

// //124
// test('FIN-TC-1326: TC_632_Account Transaction_verify that selected value is shown on the dropdown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Transaction Under Financials", async () => {
//         await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
 
//       await test.step("Verify that Account Transaction Page is visible", async () => {
//         await accountTransactionPage.accountTransactionField();
//     })

//      await test.step("Validate that first option in dropdown is selected", async() =>{
//         await accountTransactionPage.verifyCountryDropdown();
//         await accountTransactionPage.selectfirstCountryDropdown();
//     })

//     await test.step("Validate that Provider type field is enabled", async () => {
//         await accountTransactionPage.verifyProviderTypeDropdown();
//     })

//     await test.step("Validate that first option of provider type is selected", async()=>{
//         await accountTransactionPage.selectfirstProviderTypeDropdown();
//     })

//     await test.step("Validate that the selected value is shown", async()=>{
//         await accountTransactionPage.selectedProviderTypeOption(AccountTransactionData["accountTransaction-001"].ProviderType)
//     })
// });
