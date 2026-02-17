import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
import { ProviderReconcilationPage } from '../../page-objects/providerReconcilation-pages/providerReconcilation-pages.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
//const PaymentOrderDetailsData = require(`../../testdata/${process.env.ENV || 'eu'}/paymentOrderDetails.json`) as Record<string, any>;
const ProviderReconcilationData = require(`../../testdata/${process.env.ENV || 'eu'}/providerReconcilation.json`) as Record<string, any>;


// test('FIN-TC-161: TC_164_provider Reconciliation_Verify that user is navigate to provider Reconciliation', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
// });

// test('FIN-TC-162: TC_165_provider Reconciliation_ Verify that Valid breadcrumbs are displayed Finance >provider Reconciliation', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })
// });

// test('FIN-TC-163: TC_166_provider Reconciliation_Verify that  Validbreadcrumbs are displayed Finance >provider Reconciliation', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })
// });

// test('FIN-TC-164: TC_167_provider Reconciliation_Verify that in Search Criteria, batch criteria, Transactions  all fields are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("User should be ablre to verify the fields",async()=>{
//         await providerReconcilationPage.visiblefield();
//         await providerReconcilationPage.SearchCriteria();
//         await providerReconcilationPage.batchCriteria();
//  })
// });

// //Need Json data
// test('FIN-TC-165: TC_168_provider Reconciliation_verify that enter provider then country and provider type fields are filled', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//        // page.pause();
//     })

//     await test.step("Selecting the Provider field",async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);

//   })
// });

// test('FIN-TC-166: TC_169_provider Reconciliation_verify that fill country, provider type, provider and click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field",async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//     })

//     await test.step("Searching the selected value",async()=>{
//         await providerReconcilationPage.searchProvder();
//     })
// });

// test('FIN-TC-167: TC_170_provider Reconciliation_verify that fill country, provider type, provider, payer, currency,account , show only not settled toggle button is disabled click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//     })

//     await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//         await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);

//     })
//     await test.step("Vaidate that the toggel button is disabled",async()=>{
//         await providerReconcilationPage.toggelDisable();
//     })
//     await test.step("Searching the selected value",async()=>{
//         await providerReconcilationPage.searchProvder();
//     })
// });

// test('FIN-TC-168: TC_171_provider Reconciliation_verify that fill country, provider type, provider, payer, currency,account , show only not settled toggle button is enabled click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//          await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);

//   })
//   await test.step("Vaidate that the toggel button is disabled",async()=>{
//         await providerReconcilationPage.toggelEnable();
//   })
//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
// });

// test('FIN-TC-169: TC_172_provider Reconciliation_verify that fill country, provider type, provider, payer, currency,account ,from due date, to due date click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//          await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);

//     })
 
//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
// });

// test('FIN-TC-170: TC_173_provider Reconciliation_verify that fill country, provider type, provider, payer,currency , account ,from due date, to due date, from reception date, to reception date click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field and reception date" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//          await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);
//         await providerReconcilationPage.receptionDate();
//     })
 
//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
// });

// test('FIN-TC-171: TC_174_provider Reconciliation_verify that fill country, provider type, provider, payer,currency , account ,from due date, to due date, from reception date, to reception date, from settal date, to settle date  click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field,settle date and reception date" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//         await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);
//         await providerReconcilationPage.receptionDate();
//         await providerReconcilationPage.settleDate();
//     })
 
//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
// });

// test('FIN-TC-172:TC_175_provider Reconciliation_verify that fill country, provider type, provider, payer,currency , account ,from due date, to due date, from reception date, to reception date, enable toggle button show only not settled click on search', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field,settle date and reception date" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//          await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);
//         await providerReconcilationPage.receptionDate();
//         await providerReconcilationPage.settleDate();
//     })
//  await test.step("Vaidate that the toggel button is disabled",async()=>{
//         await providerReconcilationPage.toggelDisable();
//   })
//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
// });

// test('FIN-TC-173:TC_176_provider Reconciliation_verify that click on generate date file then report prefrence popup window display', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field,settle date and reception date" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//          await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);
   
//     })

//     await test.step("Click on Generate data file button",async()=>{
//         await providerReconcilationPage.generateFileButton();
//     })
    
// });

// test('FIN-TC-174:TC_177_provider Reconciliation_verify that click on generate date file without selecting provider,providertype, country then report prefrence popup window display', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
   
//     await test.step("Click on Generate data file button",async()=>{
//         await providerReconcilationPage.generateFileButton();
//     })
    
//     await test.step("Verify required message should be displayed",async()=>{
//         await providerReconcilationPage.requireErrorMsg();
//         await providerReconcilationPage.requirePayerMsg();
//     })
// });

// test('FIN-TC-176:TC_179_provider Reconciliation_verify that search whitout filing any fields', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
   
//     await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   }) 
    
//     await test.step("Verify required message should be displayed",async()=>{
//         await providerReconcilationPage.requireErrorMsg();
//         await providerReconcilationPage.requirePayerMsg();
//     })
// });

// test('FIN-TC-177: TC_180_provider Reconciliation_verify that user can select to due date is less than from due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilationIncorrect-001"].fromDueDate,ProviderReconcilationData["providerReconcilationIncorrect-001"].toDueDate)
//         await providerReconcilationPage.InCorrectDateMsg();
//     })

   
// });

// test('FIN-TC-178: TC_181_provider Reconciliation_verify that user can select  same date to due date and from due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilationSameDate-001"].fromDueDate,ProviderReconcilationData["providerReconcilationSameDate-001"].toDueDate)
//        // await providerReconcilationPage.InCorrectDateMsg();
//     })
// });

// test('FIN-TC-179: TC_182_provider Reconciliation_verify that user can select to due date is greater than from due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].fromDueDate,ProviderReconcilationData["providerReconcilation-001"].toDueDate);
//     })
// });

//19  15 new TC added
// test('FIN-TC-180: TC_183_provider Reconciliation_verify that user can select to settle date is less than from settle date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field and settle date", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.settleDate(ProviderReconcilationData["providerReconcilation-001"].fromSettleDate,ProviderReconcilationData["providerReconcilation-001"].toSttleDate);
//     })
// });
// //20
// test('FIN-TC-181: TC_184_provider Reconciliation_verify that user can select  same date to settle date and from settle date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//      await providerReconcilationPage.settleDate(ProviderReconcilationData["providerReconcilationSameDate-001"].fromSettleDate,ProviderReconcilationData["providerReconcilationSameDate-001"].toSttleDate)
          
//     })

   
// });
// //21
// test('FIN-TC-182: TC_185_provider Reconciliation_verify that user can select to settle date is greater than from settle date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.settleDate(ProviderReconcilationData["providerReconcilationIncorrect-001"].fromSettleDate,ProviderReconcilationData["providerReconcilationIncorrect-001"].toSttleDate);
//          await providerReconcilationPage.InCorrectDateMsg();
//        })
// });
// //22
// test('FIN-TC-183: TC_186_provider Reconciliation_verify that user can select to validation date is less than from validation date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field and settle date", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//        await providerReconcilationPage.validateDate(ProviderReconcilationData["providerReconcilation-001"].fromValidateDate,ProviderReconcilationData["providerReconcilation-001"].toValidateDate);
//     })
// });
// //23
// test('FIN-TC-184: TC_187_provider Reconciliation_verify that user can select  same date to validation date and from validation  date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field and settle date", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//      await providerReconcilationPage.validateDate(ProviderReconcilationData["providerReconcilationSameDate-001"].fromValidateDate,ProviderReconcilationData["providerReconcilationSameDate-001"].toValidateDate)

//     })
// });
// //24
// test('FIN-TC-185: TC_188_provider Reconciliation_verify that user can select to validation date is greater than from validation  date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.validateDate(ProviderReconcilationData["providerReconcilationIncorrect-001"].fromValidateDate,ProviderReconcilationData["providerReconcilationIncorrect-001"].toValidateDate);
//          await providerReconcilationPage.InCorrectDateMsg();
//        })
// });
// //25
// test('FIN-TC-186: TC_189_provider Reconciliation_verify that user can select to Reception date is less than from Reception date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field and settle date", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//        await providerReconcilationPage.receptionDate(ProviderReconcilationData["providerReconcilation-001"].fromReceptionDate,ProviderReconcilationData["providerReconcilation-001"].toReceptionDate);
//     })
// });
// //26
// test('FIN-TC-187:TC_190_provider Reconciliation_verify that user can select  same date to Reception date and from Reception date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field and settle date", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//      await providerReconcilationPage.receptionDate(ProviderReconcilationData["providerReconcilationSameDate-001"].fromReceptionDate,ProviderReconcilationData["providerReconcilationSameDate-001"].toReceptionDate);

//     })
// });
// //27
// test('FIN-TC-188: TC_191_provider Reconciliation_verify that user can select to Reception date is greater than from Reception  date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//         await providerReconcilationPage.receptionDate(ProviderReconcilationData["providerReconcilationIncorrect-001"].fromReceptionDate,ProviderReconcilationData["providerReconcilationIncorrect-001"].toReceptionDate);
//          await providerReconcilationPage.InCorrectDateMsg();
//        })
// });
// //28
// test('FIN-TC-189: TC_192_provider Reconciliation_Verify that Items per page label and dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Click on the page dropdown",async()=>{
//         await providerReconcilationPage.pageDropdown();
//     })
// });
// //29
// test('FIN-TC-190: TC_193_provider Reconciliation_IN dropdown 10,15,20, 30, 50, 100, 250 values are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Click on the page dropdown",async()=>{
//         await providerReconcilationPage.pageDropdown();
//         await providerReconcilationPage.pageCount();
//     })
// });
// //30
// test('FIN-TC-191:TC_194_provider Reconciliation_Pagination is display from 1 to 10 and user can change the pagination using start page and last page', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that the pagination should be visible",async()=>{
//         await providerReconcilationPage.pageDropdown();
//         await providerReconcilationPage.verifyPagination();
//     })
// });
// //31
// test('FIN-TC-1093:TC_445_provider Reconciliation_verify that From Due date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date label and textbox is present",async()=>{
//         await providerReconcilationPage.verifytoDueDate();
//     })
// });
// //32
// test('FIN-TC-1094:TC_446_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })
 
//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromDueDateCalendar();
//     })
// });
// //33
// test('FIN-TC-1095:TC_447_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromDueDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });
//34  
// test('FIN-TC-1096: TC_448_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromDueDateCalendar()
//         await providerReconcilationPage.verifyOldDate();
//     })
// });
// //35
// test('FIN-TC-1097:TC_449_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromDueDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });
// //36
// test('FIN-TC-1098:TC_450_provider Reconciliation_verify that To Due date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date label and textbox is present",async()=>{
//         await providerReconcilationPage.verifytoDueDate();
//     })
// });
// //37
// test('FIN-TC-1099: TC_451_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })
 
//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoDueDateCalendar();
//     })
// });
// //38
// test('FIN-TC-1100: TC_452_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//        await providerReconcilationPage.verifytoDueDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });
// //39
// test('FIN-TC-1101: TC_453_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoDueDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });
// //40
// test('FIN-TC-1102:TC_454_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoDueDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });
// //41
// test('FIN-TC-1103:TC_455_provider Reconciliation_verify that From settle date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from settle date label is present",async()=>{
//         await providerReconcilationPage.verifyfromSettleDate();
//     })
// });

//42
// test('FIN-TC-1104:TC_456_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from settle date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromSettleDateCalendar();
//     })
// });

// //43
// test('FIN-TC-1105: TC_457_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//        await providerReconcilationPage.verifyfromSettleDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });

// //44
// test('FIN-TC-1106: TC_458_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromSettleDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });

// //45
// test('FIN-TC-1107:TC_459_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromSettleDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });

// //46
// test('FIN-TC-1108:TC_460_provider Reconciliation_verify that To settle date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to settle date label is present",async()=>{
//         await providerReconcilationPage.verifytoSettleDate();
//     })
// });

// //47
// test('FIN-TC-1109:TC_461_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to settle date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoSettleDateCalendar();
//     })
// });

// //48
// test('FIN-TC-1110: TC_462_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//        await providerReconcilationPage.verifytoSettleDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });

// //49
// test('FIN-TC-1111: TC_463_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoSettleDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });

// //50
// test('FIN-TC-1112:TC_464_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoSettleDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });

// //51
// test('FIN-TC-1113:TC_465_provider Reconciliation_verify that From validation date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from Validation date label is present",async()=>{
//         await providerReconcilationPage.verifyfromValidationDate();
//     })
// });

// //52
// test('FIN-TC-1114:TC_466_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from validation date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromValidationDateCalendar();
//     })
// });

// //53
// test('FIN-TC-1115: TC_467_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//        await providerReconcilationPage.verifyfromValidationDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });

// //54
// test('FIN-TC-1116: TC_468_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromValidationDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });

// //55
// test('FIN-TC-1117:TC_469_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to due date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromSettleDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });

// //56
// test('FIN-TC-1118:TC_470_provider Reconciliation_verify that To validation date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from Validation date label is present",async()=>{
//         await providerReconcilationPage.verifytoValidationDate();
//     })
// });

// //57
// test('FIN-TC-1119:TC_471_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from validation date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoValidationDateCalendar();
//     })
// });

// //58
// test('FIN-TC-1120: TC_472_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to validation date calendar is present",async()=>{
//        await providerReconcilationPage.verifytoValidationDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });

// 
// test('FIN-TC-1121: TC_473_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to Validation date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoValidationDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });

// //60
// test('FIN-TC-1122:TC_474_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to Validation date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoValidationDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });

// //61
// test('FIN-TC-1123:TC_475_provider Reconciliation_verify that From Reception date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from Reception date label is present",async()=>{
//         await providerReconcilationPage.verifyfromReceptionDate();
//     })
// });

// //62
// test('FIN-TC-1124:TC_476_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from reception date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromReceptionDateCalendar();
//     })
// });

// //63
// test('FIN-TC-1125:TC_477_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from reception date calendar is present",async()=>{
//        await providerReconcilationPage.verifyfromReceptionDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });

// //64
// test('FIN-TC-1126:TC_478_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from Reception date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromReceptionDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });

// //65
// test('FIN-TC-1127:TC_479_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from Reception date calendar is present",async()=>{
//         await providerReconcilationPage.verifyfromReceptionDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });

// //66
// test('FIN-TC-1128:TC_480_provider Reconciliation_verify that To Reception date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to Reception date label is present",async()=>{
//         await providerReconcilationPage.verifytoReceptionDate();
//     })
// });

// //67
// test('FIN-TC-1129:TC_481_provider Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that from reception date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoReceptionDateCalendar();
//     })
// });

// //68
// test('FIN-TC-1130:TC_482_provider Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to reception date calendar is present",async()=>{
//        await providerReconcilationPage.verifytoReceptionDateCalendar();
//         await providerReconcilationPage.verifyTodayDate();
//     })
// });


// test('FIN-TC-1131:TC_483_provider Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to Reception date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoReceptionDateCalendar();
//         await providerReconcilationPage.verifyOldDate();
//     })
// });

// //70
// test('FIN-TC-1132:TC_484_provider Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Verify that to Reception date calendar is present",async()=>{
//         await providerReconcilationPage.verifytoReceptionDateCalendar();
//         await providerReconcilationPage.verifyNewDate();
//     })
// });
// //71
// test('FIN-TC-1133: TC_485_provider Reconciliation_verify that Payer is selected then currency option get selected', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Vaidate that the currency got populated",async()=>{
//         await providerReconcilationPage.verifyCurrencyText();
//   })
  
// });
// //72
// test('FIN-TC-1134: TC_486_provider Reconciliation_verify that when payer name is entered then auto-suggested list should display', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Vaidate that the Account got populated",async()=>{
//         await providerReconcilationPage.verifyAccountText();
//   })
  
// });
  
// //73
// test('FIN-TC-1135: TC_487_provider Reconciliation_Verify that Payment order textbox accept alphabets', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Send the value of Payment order is not getting accepted",async()=>{
//         await providerReconcilationPage.sendpaymentOrder(ProviderReconcilationData["providerReconcilation-001"].paymentOrder);
//   })
//  await test.step("Vaidate that Pyment order is not getting accepted",async()=>{
//         await providerReconcilationPage.validatePaymentOrder();
//   })
  
// });
// //74
// test('FIN-TC-1136: TC_488_provider Reconciliation_Verify that Payment order textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Send the value of Payment order is not getting accepted",async()=>{
//         await providerReconcilationPage.sendpaymentOrder(ProviderReconcilationData["providerReconcilation-001"].paymentOrderDig);
//   })
//  await test.step("Vaidate that Pyment order is getting accepted",async()=>{
//         await providerReconcilationPage.validatePaymentOrderaccepted();
//   })
  
// });

// //75 -popup should be there according to tc 1137 step
// test('FIN-TC-1137: TC_489_provider Reconciliation_Verify that Payment order textbox accept specail charachters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Send the value of Payment order is not getting accepted",async()=>{
//         await providerReconcilationPage.sendpaymentOrder(ProviderReconcilationData["providerReconcilation-001"].paymentOrderSp);
//   })
//  await test.step("Vaidate that Pyment order is not getting accepted",async()=>{
//         await providerReconcilationPage.validatePaymentOrder();
//   })
  
// });
// //76
// test('FIN-TC-1138:TC_490_provider Reconciliation_Verify that Payment order textbox accept blank spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Send the value of Payment order is not getting accepted",async()=>{
//         await providerReconcilationPage.sendpaymentOrder(ProviderReconcilationData["providerReconcilation-001"].paymentOrderBlank);
//   })
//  await test.step("Vaidate that Pyment order is not getting accepted",async()=>{
//         await providerReconcilationPage.validatePaymentOrder();
//   })
  
// });

// //77
// test('FIN-TC-1139:TC_491_provider Reconciliation_Verify that Payment order textbox accept leading and trailing spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Send the value of Payment order is not getting accepted",async()=>{
//         await providerReconcilationPage.sendpaymentOrder(ProviderReconcilationData["providerReconcilation-001"].paymentOrderSpaces);
//   })
//  await test.step("Vaidate that Pyment order is not getting accepted",async()=>{
//         await providerReconcilationPage.validatePaymentOrder();
//   })
  
// });

// //78 
// test('FIN-TC-1140:TC_492_provider Reconciliation_verify that user can serach result by payment order', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
//   await test.step("Send the value of Payment order",async()=>{
//         await providerReconcilationPage.sendpaymentOrder(ProviderReconcilationData["providerReconcilation-001"].paymentOrderDig);
//   })
// await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })  
// });


// test('FIN-TC-1141:TC_493_provider Reconciliation_verify that user can serach result by payer', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
       
//   })
 
// await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })  
// });

// //80
// test('FIN-TC-1142:TC_494_provider Reconciliation_verify that serach result column has up and down arrow are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//     await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//     })

//     await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//     })

//     await test.step("Searching the selected value",async()=>{
//         await providerReconcilationPage.searchProvder();
//     }) 
     
//     await test.step("Verifying the up and down arrow in the table",async()=>{
//         await providerReconcilationPage.displayArrow();
//     })
// });

// //81
// test('FIN-TC-1143:TC_495_provider Reconciliation_verify that click on up arrow them data is displayed in ascending order', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
    
//   })

//     await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })  
//      await test.step("Verify that arrow is sorting the data",async()=>{
//     await providerReconcilationPage.upArrowSort();
//   })
// });

// //82
// test('FIN-TC-1144:TC_496_provider Reconciliation_verify that click on down arrow then data is displayed in descending order', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
 
//       await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//         await providerReconcilationPage.providerRecoincialtionField();
//     })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
    
//   })

//     await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })  
//      await test.step("Verify that arrow is sorting the data",async()=>{
//     await providerReconcilationPage.downArrowSort();
//   })
// });

// //83
// test('FIN-TC-1538:TC_497_Provider Reconciliation_Verify clicking on "Generate Data File" without filling any field in Search Criteria', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
   
//     await test.step("Click on Generate data file button",async()=>{
//         await providerReconcilationPage.generateFileButton();
//     })
    
//     await test.step("Verify required message should be displayed",async()=>{
//         await providerReconcilationPage.requireErrorMsg();
//         await providerReconcilationPage.requirePayerMsg();
//     })
// });

// //84
// test('FIN-TC-1539:TC_498_Provider Reconciliation_Verify the columns in the grid', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//     })

//     await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
    
//     })

//     await test.step("Searching the selected value",async()=>{
//         await providerReconcilationPage.searchProvder();
//     })

//     await test.step("Validate that all the table item should be present", async()=>{
//         await providerReconcilationPage.tableItems();
//     })
// });

// //85
// test('FIN-TC-1540:TC_499_Provider Reconciliation_Verify data without "Show Only Not Settled" option turned on', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//     })

//     await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//     })

//     await test.step("Searching the selected value",async()=>{
//         await providerReconcilationPage.searchProvder();
//     })

//     await test.step("Validate that settle data should be presnt", async()=>{
//         await providerReconcilationPage.settleData();
//     })
// });

// //86
// test('FIN-TC-1541:TC_500_Provider Reconciliation_Verify data with "Show Only Not Settled" option turned on', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })
    
//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType, ProviderReconcilationData["providerReconcilation-001"].Country, ProviderReconcilationData["providerReconcilation-001"].providerValue);
//     })

//     await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//     })

//     await test.step("Turn on the toggle button",async()=>{
//         await providerReconcilationPage.toggleClick();
//     })

//     await test.step("Searching the selected value",async()=>{
//         await providerReconcilationPage.searchProvder();
//     })

//     await test.step("Validate that settle data should be presnt", async()=>{
//         await providerReconcilationPage.settleDataNotPresent();
//     })

// });
//79  Need TO add Next Time
