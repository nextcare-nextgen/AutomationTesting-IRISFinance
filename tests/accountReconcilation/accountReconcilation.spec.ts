import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page.ts';
import { AccountReconcilationPage } from '../../page-objects/accountReconcilation-pages/accountReconcilation-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const AccountReconcilationData = require(`../../testdata/${process.env.ENV||'eu'}/accountReconcilation.json`) as Record< string,any >

// //1
// test('FIN-TC-131: TC_132_Account Reconciliation_Verify that user is navigate to Account  Reconciliation', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Account Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
//  });

// //2
// test('FIN-TC-132: TC_133_Account Reconciliation_Verify that  Validbreadcrumbs are displayed Finance >Account  Reconciliation', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Verify that Account Recoincilation Page is visible", async () => {
//         await accountReconcilationPage.accountRecoincialtionField();
//     })
// });

// //3
// test('FIN-TC-133: TC_134_Account Reconciliation_Verify that Account Reconciliation Label is display in bold', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Verify that Account Recoincilation Page is visible", async () => {
//         await accountReconcilationPage.accountRecoincialtionField();
//     })
// });

// //4
// test('FIN-TC-135: TC_136_Account Reconciliation_Verify that "Only Reimbursement Transactions are allowed to be settled from this screen." Tip is displayed in red colour', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Verify that the red text should be visible", async () => {
//         await accountReconcilationPage.verifytext();
//     })
// });

// //5
// test('FIN-TC-136: TC_137_Account Reconciliation_Verify that user can Search with a click on search button by filing all mandatory fields', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
// });

// //6
// test('FIN-TC-137: TC_138_Account Reconciliation_Verify that Search click on search button with filing all fields', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-001'].fromDueDate,AccountReconcilationData['accountReconcilation-001'].toDueDate);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
// });

// //7
// test('FIN-TC-138: TC_139_Account Reconciliation_Verify that Search click on search button without filing any fields', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
//        await test.step("Validate that error msg should be displayed", async () => {
//         await accountReconcilationPage.verifyErrorMessage();
//     })
// });

// //8
// test('FIN-TC-139: TC_140_Account Reconciliation_verify that click on Search button with filling all mandatory fields', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
//        await test.step("Validate that table should be displayed", async () => {
//         await accountReconcilationPage.verifyTable();
//     })
// });

// //9
// test('FIN-TC-140: TC_141_Account Reconciliation_Verify that user can search by PO ID- Ex-3600709', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//        await test.step("Validate that user should be able to search by PO ID", async () => {
//         await accountReconcilationPage.searchByID(AccountReconcilationData['accountReconcilation-001'].POID);
//     })
//     await test.step("Validate that table should be displayed", async () => {
//         await accountReconcilationPage.verifyTable();
//     })
// });

// //10
// test('FIN-TC-141: TC_142_Account Reconciliation_Verify that user can search by TXN NBR- ex-4074748', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//        await test.step("Validate that user should be able to search by TXN NBR ID", async () => {
//         await accountReconcilationPage.searchByID(AccountReconcilationData['accountReconcilation-001'].TXNNBR);
//     })
//     await test.step("Validate that table should be displayed", async () => {
//         await accountReconcilationPage.verifyTable();
//     })
// });

// //11
// test('FIN-TC-142: TC_143_Account Reconciliation_Verify that user can search by destination Account- ex-EXTCARE Claims Management.', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//        await test.step("Validate that user should be able to search by Destination Account", async () => {
//         await accountReconcilationPage.searchByID(AccountReconcilationData['accountReconcilation-001'].DestinationAccount);
//     })
//     await test.step("Validate that table should be displayed", async () => {
//         await accountReconcilationPage.verifyTable();
//     })
// });

// //12
// test('FIN-TC-143: TC_144_Account Reconciliation_Verify that user can search by Principle Ex-8088702', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//        await test.step("Validate that user should be able to search by Destination Account", async () => {
//         await accountReconcilationPage.searchByID(AccountReconcilationData['accountReconcilation-001'].Principle);
//     })
//     await test.step("Validate that table should be displayed", async () => {
//         await accountReconcilationPage.verifyTable();
//     })
// });

// //13
// test('FIN-TC-144: TC_145_Account Reconciliation_Verify that user can search inValidvalue Ex-erw', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//        await test.step("Validate that user should be able to search by Destination Account", async () => {
//         await accountReconcilationPage.searchByID(AccountReconcilationData['accountReconcilation-001'].invalidValue);
//     })
//     await test.step("Validate that No record found should be displayed", async () => {
//         await accountReconcilationPage.noRecordfound();
//     })
// });

// // test('FIN-TC-145: TC_146_Account Reconciliation_verify that select settled checkbox from dropdown and bank refrences column is empty click on Save button', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Provider Reconcilation Under Financials", async () => {
// //         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
// //     })
    
// //     await test.step("Fill all the mandatory details", async () => {
// //         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
// //     })

// //     await test.step("Click on the search button", async () => {
// //         await accountReconcilationPage.clickSearchButtn();
// //     })
    
// //      await test.step("Validate that ihe released cheque checkbox is clicked", async () => {
// //         await accountReconcilationPage.ChequeClicked();
// //     })

// //     await test.step("Click on the save button", async () => {
// //         await accountReconcilationPage.clickSaveButton();
// //     })

// //     await test.step("Validate that the popup should be displayed", async () => {
// //         await accountReconcilationPage.validateBankBlankPopup();
// //     })
// // });


// //14
// test('FIN-TC-146: TC_149_Account Reconciliation_verify that select settled checkbox from dropdown and  click on upload button', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })
// });

// //15
// test('FIN-TC-147: TC_150_Account Reconciliation_verify that in popup window Select file or Drop it here text is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//     await test.step("Click on the uplad button and uploading the file", async()=> {
//         await accountReconcilationPage.UploadFile();
//     })
// });

// //16
// test('FIN-TC-148: TC_151_Account Reconciliation_verify that click on Select file then file open window is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//     await test.step("Click on the uplad button and uploading the file", async()=> {
//         await accountReconcilationPage.UploadFile();
//     })
// });

// //17
// test('FIN-TC-149: TC_152_Account Reconciliation_verify that user can upload xls, xlsx file', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//     await test.step("Click on the uplad button and uploading the file", async()=> {
//         await accountReconcilationPage.UploadFile();
//     })
// });

// // //18 - not valid scenario
// // test('FIN-TC-150:TC_153_Account Reconciliation_verify that user can drag xls, xlsx file', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Provider Reconcilation Under Financials", async () => {
// //         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
// //     })
    
// //     await test.step("Fill all the mandatory details", async () => {
// //         await accountReconcilationPage.fillMandaoryDetails(accountReconcilation['accountReconcilation-001'].payerValue);
// //     })

// //     await test.step("Click on the search button", async () => {
// //         await accountReconcilationPage.clickSearchButtn();
// //     })
      
// //     await test.step("Click on the upload button", async () => {
// //         await accountReconcilationPage.clickUploadButton();
// //     })

// //     await test.step("Validate that the popup should be displayed", async () => {
// //         await accountReconcilationPage.validateUploadPopup();
// //     })

// //     await test.step("Click on the uplad button and uploading the file", async()=> {
// //         await accountReconcilationPage.dragandDropFile();
// //     })
// // });

// //19
// test('FIN-TC-151: TC_154_Account Reconciliation_verify that user can upload txt,ppt,png,jpeg,mp4 file', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//     await test.step("Click on the uplad button and uploading invalid the file", async()=> {
//         await accountReconcilationPage.UploadInvalidFile();
//     })
// });

// //20
// test('FIN-TC-153: TC_156_Account Reconciliation_verify that select an file xls and click on Upload button then user can upload file', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//       await test.step("Click on the uplad button and uploading the file", async()=> {
//         await accountReconcilationPage.UploadFile();
//     })
// });
 
// //21
// test('FIN-TC-154: TC_157_Account Reconciliation_verify that without selectinng any file and click on upload button', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//       await test.step("Validate that the Alert message should be popped up", async()=> {
//         await accountReconcilationPage.validateAlert();
//     })
// });
 
// //22
// test('FIN-TC-155: TC_158_Account Reconciliation_verify that  click on close button then popup window get closed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })
      
//     await test.step("Click on the upload button", async () => {
//         await accountReconcilationPage.clickUploadButton();
//     })

//     await test.step("Validate that the popup should be displayed", async () => {
//         await accountReconcilationPage.validateUploadPopup();
//     })

//       await test.step("Closing the popup message", async()=> {
//         await accountReconcilationPage.closeUploadPopup();
//     })
// });
 
// // //23
// // test('FIN-TC-156: TC_159_Account Reconciliation_verify that settled check box is selected then cheque realsed checkbox unchecked', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Provider Reconcilation Under Financials", async () => {
// //         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
// //     })
    
// //     await test.step("Fill all the mandatory details", async () => {
// //         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
// //     })

// //     await test.step("Click on the search button", async () => {
// //         await accountReconcilationPage.clickSearchButtn();
// //     })

// //     await test.step("Validate that ihe released cheque checkbox is not clicked", async () => {
// //         await accountReconcilationPage.settledC();
// //     })
// // });

// // //24
// // test('FIN-TC-157: TC_160_Account Reconciliation_verify that settled check box is unselected then cheque realsed checkbox checked', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Provider Reconcilation Under Financials", async () => {
// //         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
// //     })
    
// //     await test.step("Fill all the mandatory details", async () => {
// //         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
// //     })

// //     await test.step("Click on the search button", async () => {
// //         await accountReconcilationPage.clickSearchButtn();
// //     })

// //     await test.step("Validate that ihe released cheque checkbox is clicked", async () => {
// //         await accountReconcilationPage.ChequeClicked();
// //     })
// // });

// //25
// test('FIN-TC-158: TC_161_Account Reconciliation_Verify that Items per page label and dropdown is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Validate that Itemsper page should be visible", async () => {
//         await accountReconcilationPage.itemsPerPage();
//     })
// });

// //26
// test('FIN-TC-159: TC_162_Account Reconciliation_IN dropdown 10,15,20, 30, 50, 100, 250 values are displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Validate that Itemsper page should be visible", async () => {
//         await accountReconcilationPage.itemPerPageList();
//     })
// });

// //27

// test('FIN-TC-1211: TC_517_Account Reconciliation_verify that up and down arrow is displayed in search result', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//       await test.step("Verifying the up and down arrow in the table",async()=>{
//     await accountReconcilationPage.displayArrow();
//   })
// });

// //28
// test('FIN-TC-1212: TC_518_Account Reconciliation_verify that click on up arrow then data is displayed in ascending order', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//       await test.step("Verifying the up and down arrow in the table",async()=>{
//     await accountReconcilationPage.displayArrow();
//   })
//      await test.step("Verify that arrow is sorting the data",async()=>{
//     await accountReconcilationPage.upArrowSort();
//   })
// });

// //29
// test('FIN-TC-1213: TC_519_Account Reconciliation_verify that click on down arrow then data is displayed in descending order', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//       await test.step("Verifying the up and down arrow in the table",async()=>{
//     await accountReconcilationPage.displayArrow();
//   })
//      await test.step("Verify that arrow is sorting the data",async()=>{
//     await accountReconcilationPage.downArrowSort();
//   })
// });

// //30
// test('FIN-TC-1214: TC_520_Account Reconciliation_verify that In search result provider column has more hyperlink is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//       await test.step("Verifying the up and down arrow in the table",async()=>{
//     await accountReconcilationPage.displayArrow();
//   })
//      await test.step("Verify that provider is in a link form",async()=>{
//     await accountReconcilationPage.providerURL();
//   })
// });

// //31
// test('FIN-TC-1215: TC_521_Account Reconciliation_verify that click on more then Reimbursement Claims text and Hide hyperlink is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//       await test.step("Verifying the up and down arrow in the table",async()=>{
//     await accountReconcilationPage.displayArrow();
//   })
//      await test.step("Verify that provider is in a link form",async()=>{
//     await accountReconcilationPage.providerURL();
//   })
//   await test.step("Verify that the provider text should be visible",async()=>{
//     await accountReconcilationPage.verifyproviderText();
//   })
// });

// //32
// test('FIN-TC-1216: TC_522_Account Reconciliation_verify that click on hide then more hyperlink is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

    
//   await test.step("Verify that the provider text should be visible",async()=>{
//     await accountReconcilationPage.verifyHideButton();
//   })
// });

// //33
// test('FIN-TC-1217: TC_523_Account Reconciliation_verify that from due date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
    
//     await test.step("Verify from due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifyfromDueDate();
//     })

// });

// //34
// test('FIN-TC-1218: TC_524_Account Reconciliation_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify from due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifyfromDueDate();
//     })
    
//     await test.step("Verify from due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifyfromDueDateCalendar();
//     })

// });

// //35
// test('FIN-TC-1219: TC_525_Account Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify from due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifyfromDueDate();
//     })
    
//     await test.step("Verify from due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifyfromDueDateCalendar();
//     })

//      await test.step("Verify from due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifyDueDateToday();
//     })
// });

// //36
// test('FIN-TC-1220: TC_526_Account Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify from due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifyfromDueDate();
//     })
    
//     await test.step("Verify from due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifyfromDueDateCalendar();
//     })

//      await test.step("Verify from old due date got selected", async () => {
//         await accountReconcilationPage.oldDateSelect();
//     })
// });

// //37
// test('FIN-TC-1221: TC_527_Account Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify from due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifyfromDueDate();
//     })
    
//     await test.step("Verify from due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifyfromDueDateCalendar();
//     })

//      await test.step("Verify future from due date should be selected", async () => {
//         await accountReconcilationPage.futureDateSelect();
//     })
// });

// test('FIN-TC-1222: TC_528_Account Reconciliation_verify that To Due date label and textbox is displayed', async ({ page }) => {
 
//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })
 
//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })
 
//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
//     await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })
//    /// page.pause();
//     await test.step("Verify to due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifytoDueDate();
//     })
//  });
 
// //39
// test('FIN-TC-1223:TC_529_Account Reconciliation_verify that calender icon is displayed', async ({ page }) => {
 
//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })
 
//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })
 
//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//      await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillMandaoryDetails(AccountReconcilationData['accountReconcilation-001'].payerValue);
//     })
 
//      await test.step("Verify to due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifytoDueDate();
//     })
   
//     await test.step("Verify to due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifytoDueDateCalendar();
//     })
//  });

// //40
// test('FIN-TC-1224: TC_530_Account Reconciliation_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify to due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifytoDueDate();
//     })
    
//     await test.step("Verify to due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifytoDueDateCalendar();
//     })

//      await test.step("Verify to due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifyDueDateToday();
//     })
// });

// //41
// test('FIN-TC-1225: TC_531_Account Reconciliation_verify that user can select old date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify to due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifytoDueDate();
//     })
    
//     await test.step("Verify to due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifytoDueDateCalendar();
//     })

//      await test.step("Verify to old due date got selected", async () => {
//         await accountReconcilationPage.oldDateSelect();
//     })
// });

// //42
// test('FIN-TC-1226: TC_532_Account Reconciliation_verify that user can select future date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })

//      await test.step("Verify to due date label and textbox is present", async () => {
//         await accountReconcilationPage.verifytoDueDate();
//     })
    
//     await test.step("Verify to due date calendar icon should present", async () => {
//         await accountReconcilationPage.verifytoDueDateCalendar();
//     })

//      await test.step("Verify future to due date should be selected", async () => {
//         await accountReconcilationPage.futureDateSelect();
//     })
// });

// //43
// test('FIN-TC-1227: TC_533_Account Reconciliation_verify that user can select To Due date less than from due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-002'].fromDueDate,AccountReconcilationData['accountReconcilation-002'].toDueDate);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

//     await test.step("Validate that error message should be populated",async()=>{
//         await accountReconcilationPage.dueDateErrorMsg();
//     })
// });

// //44
// test('FIN-TC-1228: TC_534_Account Reconciliation_verify that user can select To Due date greater than from due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-001'].fromDueDate,AccountReconcilationData['accountReconcilation-001'].toDueDate);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

// });

// //45
// test('FIN-TC-1229: TC_535_Account Reconciliation_verify that user can select same To Due date and from due date', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-003'].fromDueDate,AccountReconcilationData['accountReconcilation-003'].toDueDate);
//     })

//     await test.step("Click on the search button", async () => {
//         await accountReconcilationPage.clickSearchButtn();
//     })

// });

// //46
// test('FIN-TC-1230: TC_536_Account Reconciliation_Verify that Payment order Id textbox accept alphabeats', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillpaymentOrderId(AccountReconcilationData['accountReconcilation-001'].paymentOrderIdAlphabet);
//     })

// });

// //47
// test('FIN-TC-1231: TC_537_Account Reconciliation_Verify that Payment order Id textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillpaymentOrderIdNo(AccountReconcilationData['accountReconcilation-001'].paymentOrderIdNo);
//     })

// });

// //48
// test('FIN-TC-1232: TC_538_Account Reconciliation_Verify that Payment order Id textbox accept specail charachters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillpaymentOrderId(AccountReconcilationData['accountReconcilation-001'].paymentOrderIdSp);
//     })
// });

// //49
// test('FIN-TC-1233: TC_539_Account Reconciliation_Verify that Payment order Id textbox accept blank spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillpaymentOrderId(AccountReconcilationData['accountReconcilation-001'].paymentOrderIdBlank);
//     })
// });

// //50
// test('FIN-TC-1234: TC_540_Account Reconciliation_Verify that Payment order Id textbox accept leading and trailing spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillpaymentOrderIdNo(AccountReconcilationData['accountReconcilation-001'].paymentOrderIdWithSpace);
//     })
// });

// //51
// test('FIN-TC-1378: TC_684_Account Reconciliation_verify that fill mandatory fields , search result and click on generate', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-001'].fromDueDate,AccountReconcilationData['accountReconcilation-001'].toDueDate);
//     })

//     await test.step("Click on the generate button", async () => {
//         await accountReconcilationPage.clickGenerateButton();
//     })
// });

// //52
// test('FIN-TC-1379: TC_685_Account Reconciliation_verify that fill fields , search result and click on generate', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-001'].fromDueDate,AccountReconcilationData['accountReconcilation-001'].toDueDate);
//     })

//     await test.step("Click on the generate button", async () => {
//         await accountReconcilationPage.clickGenerateButton();
//     })
// });

// //53
// test('FIN-TC-1380: TC_686_Account Reconciliation_Verify that jobs then popup message is display', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const accountReconcilationPage: AccountReconcilationPage = new AccountReconcilationPage(page);
   
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider Reconcilation Under Financials", async () => {
//         await accountReconcilationPage.searchAndClickOnAccountReconcilationUnderFinancials();
//     })
 
//       await test.step("Fill all the mandatory details", async () => {
//         await accountReconcilationPage.fillAllDetails(AccountReconcilationData['accountReconcilation-001'].payerValue,AccountReconcilationData['accountReconcilation-001'].fromDueDate,AccountReconcilationData['accountReconcilation-001'].toDueDate);
//     })

//     await test.step("Click on the generate button", async () => {
//         await accountReconcilationPage.clickGenerateButton();
//     })
// });
