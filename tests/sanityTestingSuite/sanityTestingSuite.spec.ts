import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page.ts';
import { AccountReconcilationPage } from '../../page-objects/accountReconcilation-pages/accountReconcilation-page.ts';
import { AccountTransactionPage } from '../../page-objects/accountTransaction-pages/accountTransaction-pages.ts';
import { PaymentOrdersPage } from '../../page-objects/paymentOrders-pages/paymentOrders-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
import { ProviderFinancialSettlementPage } from '../../page-objects/providerFinancialSettlement-pages/providerFinancialSettlement-page.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const AccountReconcilationData = require(`../../testdata/${process.env.ENV||'eu'}/accountReconcilation.json`) as Record< string,any >
const AccountTransactionData = require(`../../testdata/${process.env.ENV||'eu'}/accountTransactions.json`) as Record< string,any >
const PaymentOrdersData = require(`../../testdata/${process.env.ENV || 'eu'}/paymentOrders.json`) as Record<string, any>;
const ProviderFinancialSettlementData = require(`../../testdata/${process.env.ENV || 'eu'}/providerFinancialSettlement.json`) as Record<string, any>;

//1
test('FIN-TC-1877 @sanity: TC01_Sanity_Account Reconciliation_Verify that Account Reconciliation hyperlink is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Account Reconcilation Under Financials", async () => {
        await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
    })
 });

 //2
 test('FIN-TC-1878 @sanity: TC02_Sanity_Account Reconciliation_Verify that user is redirected to Account Reconciliation screen on clicking Account Reconciliation', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
    
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Provider Reconcilation Under Financials", async () => {
         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
     })
  
       await test.step("Verify that Account Recoincilation Page is visible", async () => {
         await accountReconcilationPage.accountRecoincialtionField();
     })
 });
 
 //3
 test('FIN-TC-1879 @sanity: TC03_Sanity_Account Reconciliation_Verify that Account Reconciliation label is displayed', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
    
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Provider Reconcilation Under Financials", async () => {
         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
     })
  
       await test.step("Verify that Account Recoincilation Page is visible", async () => {
         await accountReconcilationPage.accountRecoincialtionField();
     })
 });
 
//4
test('FIN-TC-1880 @sanity: TC04_Sanity_Account Reconciliation_Verify that Payer label and dropdown are displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
    })
 
      await test.step("Fill all the mandatory details", async () => {
        await accountReconcilationPage.fillMandatoryDetailsWithRetry(AccountReconcilationData['accountReconcilation-001'].payerValue);
    })

});

//5
test('FIN-TC-1881 @sanity: TC05_Sanity_Account Reconciliation_Verify that Currency label and dropdown are displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
    })
 
      await test.step("Fill all the mandatory details", async () => {
        await accountReconcilationPage.fillMandatoryDetailsWithRetry(AccountReconcilationData['accountReconcilation-001'].payerValue);
    })

});

//6
test('FIN-TC-1882 @sanity: TC06_Sanity_Account Reconciliation_Verify that same From Due Date and To Due Date can be entered', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
    })
 
      await test.step("Fill all the mandatory details", async () => {
        await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-003'].fromDueDate,AccountReconcilationData['accountReconcilation-003'].toDueDate);
    })

    await test.step("Click on the search button", async () => {
        await accountReconcilationPage.clickSearchButtn();
    })

});

//7
test('FIN-TC-1883 @sanity: TC07_Sanity_Account Reconciliation_Verify that From Due Date is less than To Due Date due', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
    })
 
      await test.step("Fill all the mandatory details", async () => {
        await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-001'].fromDueDate,AccountReconcilationData['accountReconcilation-001'].toDueDate);
    })

    await test.step("Click on the search button", async () => {
        await accountReconcilationPage.clickSearchButtn();
    })

});

//8
test('FIN-TC-1884 @sanity: TC08_Sanity_Account Reconciliation_Verify that From Due Date is greater than To Due Date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Provider Reconcilation Under Financials", async () => {
        await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
    })
 
      await test.step("Fill all the mandatory details", async () => {
        await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-002'].fromDueDate,AccountReconcilationData['accountReconcilation-002'].toDueDate);
    })

    await test.step("Click on the search button", async () => {
        await accountReconcilationPage.clickSearchButtn();
    })

    await test.step("Validate that error message should be populated",async()=>{
        await accountReconcilationPage.dueDateErrorMsg();
    })
});

//9
test('FIN-TC-1885 @sanity: TC09_Sanity_Account Transactions_Verify that user navigates to Account Transactions screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const accountTransactionPage: AccountTransactionPage = new AccountTransactionPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Click On Account Transaction Under Financials", async () => {
        await accountTransactionPage.searchAndClickOnAccountTransactionUnderFinancials();
    })
 });

 //10
 test('FIN-TC-1886 @sanity: TC10_Sanity_Account Transactions_Verify that Search Criteria label is displayed', async ({ page }) => {
 
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
     
 });

 //11
test('FIN-TC-1887 @sanity: TC11_Sanity_Account Transactions_Verify that all fields are displayed in Search Criteria', async ({ page }) => {
 
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
     
 });
 
 //12
 test('FIN-TC-1888 @sanity: TC12_Sanity_Account Transactions_Verify that account details are displayed after selecting Payer and Currency', async ({ page }) => {
 
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
     
      await test.step("Search all the mandatory feilds", async () => {
         await accountTransactionPage.fillMandatoryDetailsWithRetry(AccountTransactionData["accountTransaction-001"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-001"].Account);
     })
 });
 
 //13
 test('FIN-TC-1889 @sanity: TC13_Sanity_Account Transactions_Verify that Transaction label is displayed in Search Results', async ({ page }) => {
 
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
     
 });
 
 //14
 test('FIN-TC-1890 @sanity: TC14_Sanity_Account Transactions_Verify that all columns are displayed in Search Results', async ({ page }) => {
 
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

     await test.step("Validate the different columns title should be present", async() => {
        await accountTransactionPage.tableFieldVisibility();
     })
 });
 
 //15
 test('FIN-TC-1891 @sanity: TC15_Sanity_Account Transactions_Verify that transaction results are displayed for selected search criteria', async ({ page }) => {
 
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
     
      await test.step("Search all the mandatory feilds", async () => {
        await accountTransactionPage.fillAllDetails(AccountTransactionData["accountTransaction-001"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-001"].Account,AccountTransactionData["accountTransaction-001"].type,AccountTransactionData["accountTransaction-001"].countryValue);
      })
 
      await test.step("Click on the Search button", async () => {
         await accountTransactionPage.clickonSearch();
     })
 });

 //16
 test('FIN-TC-1898 @sanity: TC22_Sanity_Report Preferences_Verify that all fields are displayed in Report Preferences', async ({ page }) => {
 
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
 
      await test.step("Fill all the mandatory feilds", async () => {
         await accountTransactionPage.fillMandatoryDetailsWithRetry(AccountTransactionData["accountTransaction-001"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-001"].Account);
     })
 
     await test.step("Click on the Generate file button", async () => {
         await accountTransactionPage.clickgeneratefile();
     })

     await test.step("Valdate that various fields have been populated correctly",async()=>{
        await accountTransactionPage.generateDatefileFieldsVerified();
     })
 
 });
 
 //17
 test('FIN-TC-1893 @sanity: TC17_Sanity_Report Preferences_Verify that success message is displayed after clicking Generate button', async ({ page }) => {
 
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
 
      await test.step("Fill all the mandatory feilds", async () => {
         await accountTransactionPage.fillMandatoryDetailsWithRetry(AccountTransactionData["accountTransaction-001"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-001"].Account);
     })
 
     await test.step("Click on the Generate file button", async () => {
         await accountTransactionPage.clickgeneratefile();
     })

     await test.step("Validate that various fields have been populated correctly",async()=>{
        await accountTransactionPage.generateDatefileFieldsVerified();
     })
 
     await test.step("Validate that success job creation message is created",async()=>{
        await accountTransactionPage.JobCreatedMsg();
     })
 });
 
 //18
 test('FIN-TC-1894 @sanity: TC18_Sanity_Payment Orders_Verify that user is able to navigate to Payment Orders', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
  
 });

//19
 test('FIN-TC-1895 @sanity: TC19_Sanity_Search Criteria_Verify that Search Criteria label is displayed', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Verify that all fields of Payment order, Report prefrences,  Transaction  displays", async () => {
         await paymentOrderDetailsPage.allFieldsOfPaymentOrder();
         await paymentOrderDetailsPage.allFieldsOfPaymentOrderReportPrefrences();
         await paymentOrderDetailsPage.allFieldsOfPaymentOrderTransactionDisplays();
     })
 
 });

 //20
 test('FIN-TC-1896 @sanity: TC20_Sanity_Search Criteria_Verify that all fields are displayed in Search Criteria', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Verify that all fields are getting displayed", async () => {
         await paymentOrderDetailsPage.allFieldsOfPaymentOrder();
        })
 
 });

 //21
 test('FIN-TC-1892 @sanity: TC16_Sanity_Report Preferences_Verify that all fields are displayed in Report Preferences', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Verify that all fields of Report prefrences are getting displayed", async () => {
        await paymentOrderDetailsPage.allFieldsOfPaymentOrderReportPrefrences();
        
     })
 
 });

 //22
 test('FIN-TC-1899 @sanity: TC23_Sanity_Search Results_Verify that searched data is displayed in Search Results', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Verify that all fields of Transaction  displays", async () => {
         await paymentOrderDetailsPage.allFieldsOfPaymentOrderTransactionDisplays();
     })
 
 });

 //23
 test('FIN-TC-1900 @sanity: TC24_Sanity_Search Results_Verify that user clicks Search without entering any field', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Click on search button without filling any details", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })
 
      await test.step("Validate the error message", async () => {
         await paymentOrderDetailsPage.validateErrorMsg();
     })
 });

 //24
 test('FIN-TC-1901 @sanity: TC25_Sanity_Search Criteria_Verify that search works when only mandatory fields are entered', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })

     await test.step("Fill all the mandatory details", async () => {
        await paymentOrderDetailsPage.fillMandatoryDetails(PaymentOrdersData['TC013'].payerValue);
     })
     
     await test.step("Click on search button after filling only mandatory fields", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })
 });

 //25
 test('FIN-TC-1902 @sanity: TC26_Sanity_Search Criteria_Verify that Payer dropdown values are displayed', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })

     await test.step("Type in payer field and verify dropdown values are displayed", async () => {
        await paymentOrderDetailsPage.verifyPayerDropdownValuesDisplayed(PaymentOrdersData['TC013'].payerValue);
    })
 });

//26
test('FIN-TC-1903 @sanity: TC27_Sanity_Search Criteria_Verify that Currency dropdown values are displayed', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })

     await test.step("Select payer to populate dependent dropdowns", async () => {
        await paymentOrderDetailsPage.fillMandatoryDetails(PaymentOrdersData['TC013'].payerValue);
    })

     await test.step("Verify currency dropdown values are displayed", async () => {
         await paymentOrderDetailsPage.verifyCurrencyDropdownValuesDisplayed();
     })
 });

 //27
 test('FIN-TC-1904 @sanity: TC28_Sanity_Payment Order_Verify that all details are displayed in Payment Order', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })

     await test.step("Fill all the mandatory details", async () => {
        await paymentOrderDetailsPage.fillMandatoryDetails(PaymentOrdersData['TC013'].payerValue);
     })

     await test.step("Click on search button", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })

     await test.step("Verify search result columns are displayed", async () => {
         await paymentOrderDetailsPage.verifySearchResultColumnsDisplayed();
     })
 });

 //28
 test('FIN-TC-1905 @sanity: TC29_Sanity_Payment Order_Verify that all details are displayed in Report Preferences', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Verify that all fields of Report prefrences are getting displayed", async () => {
        await paymentOrderDetailsPage.allFieldsOfPaymentOrderReportPrefrences();
        
     })
 
 });

 //29
 test("FIN-TC-1906 @sanity: TC30_Sanity_Provider Financial Settlement_Verify that Provider's Financial Settlement hyperlink is displayed", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

});

//30
 test("FIN-TC-1907 @sanity: TC31_Sanity_Provider Financial Settlement_Verify that user is redirected to Provider's Financial Settlement screen on clicking hyperlink", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

});

//31
test("FIN-TC-1908 @sanity: TC32_Sanity_Provider Financial Settlement_Verify that Search Criteria label is displayed", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

     await test.step("Validate all the fields are visible", async () => {
        await providerFinancialSettlementPage.fieldVisiblity();
    })
});

//32
test("FIN-TC-1909 @sanity: TC33_Sanity_Provider Financial Settlement_Verify that Payer radio button is displayed", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("To Verify Payers And Reinsurer Radio Button", async () => {
        await providerFinancialSettlementPage.toVerifyPayersAndReinsurerRadioButton();
    })

});


//33
test("FIN-TC-1910 @sanity: TC34_Sanity_Provider Financial Settlement_Verify that Reinsurer radio button is displayed", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("To Verify Payers And Reinsurer Radio Button", async () => {
        await providerFinancialSettlementPage.toVerifyPayersAndReinsurerRadioButton();
    })

});


//34
test("FIN-TC-1911 @sanity: TC35_Sanity_Provider Financial Settlement_Verify that user can check and uncheck radio buttons", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("User should be able to select one value at a time from radio button", async () => {
        await providerFinancialSettlementPage.verifyRadioButtonsAreMutuallyExclusive();
    })

});

//35
test("FIN-TC-1912 @sanity: TC36_Sanity_Provider Financial Settlement_Verify that only one option can be selected at a time", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("User should be able to select one value at a time from radio button", async () => {
        await providerFinancialSettlementPage.verifyRadioButtonsAreMutuallyExclusive();
    })

});

//36
test("FIN-TC-1993 @sanity: TC37_Sanity_Provider Financial Settlement_Verify that Payer options are displayed when Payer radio button is selected", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("User should be able to click on Payers Radio Button", async () => {
        await providerFinancialSettlementPage.clickOnPayersRadioButton();
    })

});

//37
test("FIN-TC-1914 @sanity: TC38_Sanity_Provider Financial Settlement_Verify that Reinsurer options are displayed when Reinsurer radio button is selected", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Providers Financial Settlement Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("User should be able to click on Payers Radio Button", async () => {
        await providerFinancialSettlementPage.clickOnReinsurerRadioRadioButton();
    })

    await test.step("User should be able to view Reinsurer auto-populated list when Reinsurer is selected", async () => {
        await providerFinancialSettlementPage.verifyReinsurerDropdownValues();
    })
});

//38
test("FIN-TC-1915 @sanity: TC39_Sanity_Provider Financial Settlement_Verify that Currency label and dropdown are displayed", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const providerFinancialSettlementPage: ProviderFinancialSettlementPage = new ProviderFinancialSettlementPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Click On Financials", async () => {
        await providerFinancialSettlementPage.searchAndClickFinancials();
    })

    await test.step("Click on Provider's Financial Settlement", async () => {
        await providerFinancialSettlementPage.clickOnProvidersFinancialSettlement();
    })

    await test.step("User should be able to click on Payers Radio Button", async () => {
        await providerFinancialSettlementPage.clickOnPayersRadioButton();
    })

    await test.step("Select Payer Option", async () => {
        await providerFinancialSettlementPage.selectPayerOption(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].PayerValue);
        await providerFinancialSettlementPage.selectUpTODueDate(ProviderFinancialSettlementData['TC_026_ProviderFinancialSettlementData'].UpToDueDate);
    })

    await test.step("User should be able to click on currency dropdown", async () => {
        await providerFinancialSettlementPage.verifyCurrencyLabelAndDropdownDisplayed();
    })
});

//39

// //40
// test('FIN-TC-1916 @sanity: TC40_Sanity_ADNIC Settlement_Verify that payload contains all required ADNIC settlement fields', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const accountReconcilationPage = new AccountReconcilationPage(page);
//     const settlementData = AccountReconcilationData.TC_040_ADNICSettlementData;
//     let transactionNumber = '';

//     await test.step("User navigates to IRIS application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User enters username and password", async () => {
//         await loginPage.loginToApplication(
//             data['Login-Access'].userNameInput,
//             data['Login-Access'].passwordInput,
//         );
//     });

//     await test.step("User navigates to Account Reconciliation", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     });

//     await test.step("User enters ADNIC payer, currency and account and searches", async () => {
//         await accountReconcilationPage.fillMandatoryDetailsTC1214(
//             settlementData.payerValue,
//             settlementData.accountValue,
//         );
//         await accountReconcilationPage.clickSearchButtn();
//     });

//     await test.step("User settles an eligible claim and verifies the ADNIC payload", async () => {
//         transactionNumber =
//             await accountReconcilationPage.settleFirstEligibleAdnicTransactionAndVerifyPayload();
//     });

//     await test.step("Settled transaction is no longer displayed", async () => {
//         await accountReconcilationPage.verifyTransactionIsNoLongerAvailable(transactionNumber);
//     });
// });

// //41
// test('FIN-TC-1917 @sanity: TC41_Sanity_Dhamani Payment Reference_Verify that payment reference from 1 to 18 characters is accepted by Dhamani', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const settlementPage = new ProviderFinancialSettlementPage(page);
//     const settlementData = ProviderFinancialSettlementData.TC_041_DhamaniPaymentReferenceData;
//     let paymentOrderId = '';

//     await test.step("User navigates to IRIS application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User enters username and password", async () => {
//         await loginPage.loginToApplication(
//             data['Login-Access1'].userNameInput,
//             data['Login-Access1'].passwordInput,
//         );
//     });

//     await test.step("User navigates to Provider Financial Settlement", async () => {
//         await settlementPage.searchAndClickFinancials();
//         await settlementPage.clickOnProvidersFinancialSettlement();
//     });

//     await test.step("User selects an eligible Dhamani payment order", async () => {
//         paymentOrderId = await settlementPage.discoverDhamaniPaymentOrder();
//         settlementPage.ensureDhamaniSettlementAllowed(paymentOrderId);
//     });

//     await test.step("Payment reference accepts 1 to 18 characters and saves successfully", async () => {
//         await settlementPage.verifyPaymentReferenceRangeAndSave(
//             paymentOrderId,
//             settlementData.PaymentReference,
//         );
//     });
// });

// //42
// test("FIN-TC-1918 @sanity: TC42_Sanity_Dhamani Payment Reference_Verify that payment reference starts with 'NP' character", async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const settlementPage = new ProviderFinancialSettlementPage(page);
//     const settlementData = ProviderFinancialSettlementData.TC_042_DhamaniPaymentReferenceData;
//     let paymentOrderId = '';

//     await test.step("User navigates to IRIS application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     });

//     await test.step("User enters username and password", async () => {
//         await loginPage.loginToApplication(
//             data['Login-Access1'].userNameInput,
//             data['Login-Access1'].passwordInput,
//         );
//     });

//     await test.step("User navigates to Provider Financial Settlement", async () => {
//         await settlementPage.searchAndClickFinancials();
//         await settlementPage.clickOnProvidersFinancialSettlement();
//     });

//     await test.step("User selects another eligible Dhamani payment order", async () => {
//         paymentOrderId = await settlementPage.discoverDhamaniPaymentOrder();
//         settlementPage.ensureDhamaniSettlementAllowed(paymentOrderId);
//     });

//     await test.step("NP-prefixed 18-character payment reference saves successfully", async () => {
//         await settlementPage.verifyNpPaymentReferenceAndSave(
//             paymentOrderId,
//             settlementData.PaymentReference,
//         );
//     });
// });

//43
test('FIN-TC-1897 @sanity: TC21_Sanity_Report Preferences_Verify that Report Preferences label is displayed', async ({ page }) => {
 
     const loginPage: LoginPage = new LoginPage(page);
     const paymentOrderDetailsPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 
     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
     })
 
     await test.step("User navigates to Mawista application", async () => {
         await loginPage.gotoLoginPage(data['Login-Access'].url);
     })
 
     await test.step("User Enter Username and Password", async () => {
         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
     })
 
     await test.step("Click On Payment Order Under Financials", async () => {
         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
     })
 
     await test.step("Verify that all fields of Report prefrences are getting displayed", async () => {
        await paymentOrderDetailsPage.allFieldsOfPaymentOrderReportPrefrences();
        
     })
 });
