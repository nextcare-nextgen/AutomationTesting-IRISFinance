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
test('FIN-TC-1757 @sanity: TC_240_Account Reconciliation_verify that Account Reconciliation hyperlink is displayed', async ({ page }) => {

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
 test('FIN-TC-1758 @sanity: TC_241_Account Reconciliation_verify that click on Account Reconciliation then user redirected to Account Reconciliation screen', async ({ page }) => {
 
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
 test('FIN-TC-1759 @sanity: TC_242_Account Reconciliation_verify that Account Reconciliation label is display', async ({ page }) => {
 
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
test('FIN-TC-1760 @sanity: TC_244_Account Reconciliation_verify that payer label and dropdown is displayed', async ({ page }) => {

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
        await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
    })

});

//5
test('FIN-TC-1761 @sanity: TC_246_Account Reconciliation_verify that currency label and dropdown is displayed', async ({ page }) => {

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
        await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
    })

});

//6
test('FIN-TC-1762 @sanity: TC_260_Account Reconciliation_verify that enter same from due date and To due date', async ({ page }) => {

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
test('FIN-TC-1763 @sanity: TC_261_Account Reconciliation_verify that enter from due date less than To due date', async ({ page }) => {

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
test('FIN-TC-1764 @sanity: TC_262_Account Reconciliation_verify that enter from due date greater than To due date', async ({ page }) => {

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
test('FIN-TC-1767 @sanity: TC_123_Account Transactions_verify that User navigate to Account Transaction screen', async ({ page }) => {

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
 test('FIN-TC-1768 @sanity: TC_124_Account Transactions_verify that Search criteria Label is displayed', async ({ page }) => {
 
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
test('FIN-TC-1769 @sanity: TC_125_Account Transactions_verify that all fields are displayed in search criteria', async ({ page }) => {
 
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
 test('FIN-TC-1770 @sanity: TC_126_Account Transactions_verify that select Payer and Currency then account  details are dispalyed in dropdown', async ({ page }) => {
 
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
         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
     })
 });
 
 //13
 test('FIN-TC-1771 @sanity: TC_128_Account Transactions_verify that Transaction label is displayed in Search result', async ({ page }) => {
 
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
 test('FIN-TC-1772 @sanity: TC_129_Account Transactions_verify that In serach result all coulmns are displayed Provider Key, Txn Id, Po validation date, Due date, settle date, cheque sent date, Payment order, delivery date, destination Account, principal, Amount, CV Amount, details', async ({ page }) => {
 
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
 test('FIN-TC-1773 @sanity: TC_130_Account Transactions_verify that select Payer- ADNIC , Currency UAE , Account- Escrow  from Po validation date-9/1/2023 To Po validation date -9/30/2023 and click on Show transaction then Result is displayed', async ({ page }) => {
 
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
 test('FIN-TC-1774 @sanity: TC_162_Report Prefrences_verify that In report prefrences all fields are displayed job label, date format, downoad format, decimal point, group separator, language, delimiter, first page top margin, next page top margin, result destination', async ({ page }) => {
 
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
         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
     })
 
     await test.step("Click on the Generate file button", async () => {
         await accountTransactionPage.clickgeneratefile();
     })

     await test.step("Valdate that various fields have been populated correctly",async()=>{
        await accountTransactionPage.generateDatefileFields();
     })
 
 });
 
 //17
 test('FIN-TC-1775 @sanity: TC_164_Report Prefrences_verify that click on generate button then "Your job has been scheduled, you can go to the jobs pageto see it" popup message display', async ({ page }) => {
 
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
         await accountTransactionPage.fillMandaoryDetails(AccountTransactionData["accountTransaction-002"].payer,AccountTransactionData["accountTransaction-001"].fromDeliveryDate,AccountTransactionData["accountTransaction-001"].todeliverydate,AccountTransactionData["accountTransaction-002"].Account);
     })
 
     await test.step("Click on the Generate file button", async () => {
         await accountTransactionPage.clickgeneratefile();
     })

     await test.step("Validate that various fields have been populated correctly",async()=>{
        await accountTransactionPage.generateDatefileFields();
     })
 
     await test.step("Validate that success job creation message is created",async()=>{
        await accountTransactionPage.JobCreatedMsg();
     })
 });
 
 //18
 test('FIN-TC-1776 @sanity: TC_001_Payment Orders_Verify that the user is able to navigate to Payment Orders', async ({ page }) => {
 
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
 test('FIN-TC-1777 @sanity: TC_002_Search Criteria_Verify that Search Criteria label displays', async ({ page }) => {
 
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
 test('FIN-TC-1778 @sanity: TC_003_Search Criteria_Verify that in search criteria all fileds are displayed', async ({ page }) => {
 
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
 test('FIN-TC-1780 @sanity: TC_005_Report Preferences_Verify that in Report Preferences all fields are displayed', async ({ page }) => {
 
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
 test('FIN-TC-1781 @sanity: TC_006_Search Results_Verify that in Search Results searched data is displayed', async ({ page }) => {
 
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
 test('FIN-TC-1782 @sanity: TC_008_Search Results_Verify that click on Search without filing any fields', async ({ page }) => {
 
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
 test('FIN-TC-1783 @sanity: TC_015_Search Criteria_Verify that fill only mandatory fields click on search', async ({ page }) => {
 
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
        await paymentOrderDetailsPage.fillMandaoryDetails(PaymentOrdersData['TC013'].payerValue);
    })
     await test.step("Click on search button without filling any details", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })
 });

 //25
 test('FIN-TC-1784 @sanity: TC_017_Search Criteria_verify that Payer dropdown values are displayed', async ({ page }) => {
 
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
        await paymentOrderDetailsPage.fillMandaoryDetails(PaymentOrdersData['TC013'].payerValue);
    })
    
     await test.step("Click on search button without filling any details", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })
 });

//26
test('FIN-TC-1785 @sanity: TC_018_Search Criteria_verify that Currency dropdown values are displayed', async ({ page }) => {
 
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
        await paymentOrderDetailsPage.fillMandaoryDetails(PaymentOrdersData['TC013'].payerValue);
    })

     await test.step("Click on search button without filling any details", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })
 });

 //27
 test('FIN-TC-1786 @sanity: TC_049_Payment Order_verify that in Payment order all details are displayed', async ({ page }) => {
 
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
        await paymentOrderDetailsPage.fillMandaoryDetails(PaymentOrdersData['TC013'].payerValue);
    })
     await test.step("Click on search button without filling any details", async () => {
         await paymentOrderDetailsPage.clickOnSearch();
     })
 });

 //28
 test('FIN-TC-1787 @sanity: TC_050_Payment Order_verify that in Report Preferences  all details are displayed', async ({ page }) => {
 
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
 test("FIN-TC-1788 @sanity: TC_426_Provider's Financial Settlement _verify that Provider's Financial Settlement hyperlink is displayed", async ({ page }) => {

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
 test("FIN-TC-1789 @sanity: TC_427_Provider's Financial Settlement _verify that user click on hyperlink then redirected to Provider's Financial Settlement screen", async ({ page }) => {

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
test("FIN-TC-1790 @sanity: TC_428_Provider's Financial Settlement _verify that search criteria label is displayed", async ({ page }) => {

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
test("FIN-TC-1791 @sanity: TC_429_Provider's Financial Settlement _verify that Payer radiobutton is displayed", async ({ page }) => {

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
test("FIN-TC-1792 @sanity: TC_430_Provider's Financial Settlement _verify that Reinsurer radiobutton is displayed", async ({ page }) => {

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
test("FIN-TC-1793 @sanity: TC_431_Provider's Financial Settlement _verify that user can check and uncheck radio button", async ({ page }) => {

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
test("FIN-TC-1794 @sanity: TC_432_Provider's Financial Settlement _verify that user can select one option at a time", async ({ page }) => {

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
test("FIN-TC-1795 @sanity: TC_433_Provider's Financial Settlement _verify that when radio button Payer is selected then in dropdown Payers option displayed", async ({ page }) => {

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
test("FIN-TC-1796 @sanity: TC_434_Provider's Financial Settlement _verify that when radio button Reinsurer is selected then in dropdown Reinsurer option displayed", async ({ page }) => {

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
test("FIN-TC-1797 @sanity: TC_435_Provider's Financial Settlement _verify that currency label and dropdown is displayed", async ({ page }) => {

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
        await providerFinancialSettlementPage.verifyCurrencyDropdownValues();
    })
});

//39

//40
test('FIN-TC-1779 @sanity: TC_004_Report Preferences_Verify that in Report Preferences label is displayed', async ({ page }) => {
 
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
