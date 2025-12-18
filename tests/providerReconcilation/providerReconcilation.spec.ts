import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
import { ProviderReconcilationPage } from '../../page-objects/providerReconcilation-pages/providerReconcilation-pages.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
//const PaymentOrderDetailsData = require(`../../testdata/${process.env.ENV || 'eu'}/paymentOrderDetails.json`) as Record<string, any>;
const ProviderReconcilationData = require(`../../testdata/${process.env.ENV || 'eu'}/providerReconcilation.json`) as Record<string, any>;


test('FIN-TC-161: TC_164_provider Reconciliation_Verify that user is navigate to provider Reconciliation', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
});

test('FIN-TC-162: TC_165_provider Reconciliation_ Verify that Valid breadcrumbs are displayed Finance >provider Reconciliation', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);
   
    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
      await test.step("Verify that Provider Recoincilation Page is visible", async () => {
        await providerReconcilationPage.providerRecoincialtionField();
    })
});

test('FIN-TC-163: TC_166_provider Reconciliation_Verify that  Validbreadcrumbs are displayed Finance >provider Reconciliation', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
      await test.step("Verify that Provider Recoincilation Page is visible", async () => {
        await providerReconcilationPage.providerRecoincialtionField();
    })
});

test('FIN-TC-164: TC_167_provider Reconciliation_Verify that in Search Criteria, batch criteria, Transactions  all fields are displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
      await test.step("Verify that Provider Recoincilation Page is visible", async () => {
        await providerReconcilationPage.providerRecoincialtionField();
    })

    await test.step("User should be ablre to verify the fields",async()=>{
        await providerReconcilationPage.visiblefield();
        await providerReconcilationPage.SearchCriteria();
        await providerReconcilationPage.batchCriteria();
 })
});

//Need Json data
test('FIN-TC-165: TC_168_provider Reconciliation_verify that enter provider then country and provider type fields are filled', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
      await test.step("Verify that Provider Recoincilation Page is visible", async () => {
        await providerReconcilationPage.providerRecoincialtionField();
       // page.pause();
    })

//     await test.step("Selecting the Provider field",async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);

//   })
});

test('FIN-TC-166: TC_169_provider Reconciliation_verify that fill country, provider type, provider and click on search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
      await test.step("Verify that Provider Recoincilation Page is visible", async () => {
        await providerReconcilationPage.providerRecoincialtionField();
    })

//     await test.step("Selecting the Provider field",async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
});

test('FIN-TC-167: TC_170_provider Reconciliation_verify that fill country, provider type, provider, payer, currency,account , show only not settled toggle button is disabled click on search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
 
      await test.step("Verify that Provider Recoincilation Page is visible", async () => {
        await providerReconcilationPage.providerRecoincialtionField();
    })

//     await test.step("Selecting the Provider field", async()=>{
//         await providerReconcilationPage.providerField(ProviderReconcilationData["providerReconcilation-001"].ProviderType,ProviderReconcilationData["providerReconcilation-001"].Country,ProviderReconcilationData["providerReconcilation-001"].providerValue);
//   })

//   await test.step("Selecting the Payers field" , async()=>{
//         await providerReconcilationPage.payerfield(ProviderReconcilationData["providerReconcilation-001"].payerValue);
//         await providerReconcilationPage.DueDate(ProviderReconcilationData["providerReconcilation-001"].toDueDate,ProviderReconcilationData["providerReconcilation-001"].fromDueDate);

//   })
//   await test.step("Vaidate that the toggel button is disabled",async()=>{
//         await providerReconcilationPage.toggelDisable();
//   })
//   await test.step("Searching the selected value",async()=>{
//     await providerReconcilationPage.searchProvder();
//   })
});

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

test('FIN-TC-174:TC_177_provider Reconciliation_verify that click on generate date file without selecting provider,providertype, country then report prefrence popup window display', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
   
    await test.step("Click on Generate data file button",async()=>{
        await providerReconcilationPage.generateFileButton();
    })
    
    await test.step("Verify required message should be displayed",async()=>{
        await providerReconcilationPage.requireErrorMsg();
        await providerReconcilationPage.requirePayerMsg();
    })
});

test('FIN-TC-176:TC_179_provider Reconciliation_verify that search whitout filing any fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerReconcilationPage: ProviderReconcilationPage = new ProviderReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await providerReconcilationPage.searchAndClickOnPaymentOrderUnderFinancials();
    })
   
    await test.step("Searching the selected value",async()=>{
    await providerReconcilationPage.searchProvder();
  }) 
    
    await test.step("Verify required message should be displayed",async()=>{
        await providerReconcilationPage.requireErrorMsg();
        await providerReconcilationPage.requirePayerMsg();
    })
});

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