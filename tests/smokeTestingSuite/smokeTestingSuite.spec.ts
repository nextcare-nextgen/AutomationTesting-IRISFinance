import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page.ts';
import { SmokeTestingSuitePage } from '../../page-objects/smokeTestingSuite-pages/smokeTestingSuite-pages.ts';

const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const smokeTestData = require(`../../testdata/${process.env.ENV||'eu'}/smokeTestingSuite.json`) as Record< string,any >

// //1
// test('FIN-TC-1741 @smoke: TC_001_Payment Orders_Verify that the user is able to navigate to Payment Orders_Smoke', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Account Transaction Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnpaymentOrdersUnderFinancials();
//     })
//  });


// //2
//  test('FIN-TC-1742 @smoke: TC_002_Create New_verify that click on create new button Payment Order popup window display_Smoke', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Account Transaction Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnpaymentOrdersUnderFinancials();
//     })

//     await test.step("Search all the mandatory feilds", async () => {
//          await smokeTestingSuitePage.fillMandaoryDetails(smokeTestData["smokeTest-001"].payer,smokeTestData["smokeTest-001"].Account);
//      })

//      await test.step("click on Create New button",async() => {
//         await smokeTestingSuitePage.createNewbutton();
//      })
// });


// //3
//  test('FIN-TC-1743 @smoke: TC_003_Payment Order popup_verify that Payment Order Type and corrections option  dropdown display_Smoke', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Account Transaction Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnpaymentOrdersUnderFinancials();
//     })

//     await test.step("Search all the mandatory feilds", async () => {
//          await smokeTestingSuitePage.fillMandaoryDetails(smokeTestData["smokeTest-001"].payer,smokeTestData["smokeTest-001"].Account);
//      })

//      await test.step("click on Create New button",async() => {
//         await smokeTestingSuitePage.createNewbutton();
//      })
// });

// //4
// test("FIN-TC-1744 @smoke: TC_004_Payer's Financial Collection_verify that user is navigate to Payer's Financial collection_Smoke" , async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payer's Financial Collection Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnPayersCollectionUnderFinancials();
//     })
//  });

// //5
// test("FIN-TC-1745 @smoke:TC_005_Payer's Financial Collection_verify that  all fields are displayed in Payer/Reinsurer Information , Bank Account Information , Collection Information_Smoke" , async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payer's Financial Collection Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnPayersCollectionUnderFinancials();
//     })

//     await test.step("Expect the fields are visible", async () => {
//          await smokeTestingSuitePage.pfcPayerInformation();
//          await smokeTestingSuitePage.pfcBankAccount();
//          await smokeTestingSuitePage.pfcCollectionInfo();
//      })

//  });

//  //6
// test("FIN-TC-1746 @smoke:TC_006_Payer's Financial Collection_verify that click on search button without filing any fields proper messages are displayed for mandatory fields_Smoke" , async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payer's Financial Collection Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnPayersCollectionUnderFinancials();
//     })

//     await test.step("Click on the Search button", async () => {
//          await smokeTestingSuitePage.clickonSearch();
//      })
 
//      await test.step("Validate thst popup should be displayed",async()=>{
//          await smokeTestingSuitePage.verifyErrorMsg();
//      })
//  });


// //7
// test('FIN-TC-1747 @smoke: TC_007_Account Transaction_Verify that user is navigate to Account Transaction_smoke', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Account Transaction Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnAccountTransactionUnderFinancials();
//     })
//  });

//  //8
//  test('FIN-TC-1748 @smoke: TC_008_Account Transaction_Verify that  without filling any values and click on search_Smoke', async ({ page }) => {
 
//      const loginPage: LoginPage = new LoginPage(page);
//      const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);
 
//      await test.step("User navigates to Mawista application", async () => {
//          await loginPage.gotoLoginPage(data['Login-Access'].url);
//      })
 
//      await test.step("User Enter Username and Password", async () => {
//          await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//      })
 
//      await test.step("Click On Provider Transaction Under Financials", async () => {
//          await smokeTestingSuitePage.searchAndClickOnAccountTransactionUnderFinancials();
//      })
  
//        await test.step("Verify that Account Transaction Page is visible", async () => {
//          await smokeTestingSuitePage.accountTransactionField();
//      })
 
//      await test.step("Click on the Search button", async () => {
//          await smokeTestingSuitePage.clickonSearch();
//      })
 
//      await test.step("Validate thst popup should be displayed",async()=>{
//          await smokeTestingSuitePage.verifyErrorMsg();
//      })
//  });
 
//  //9
//  test('FIN-TC-1749 @smoke: TC_009_Account Reconciliation_Verify that user is navigate to Account  Reconciliation_Smoke', async ({ page }) => {
 
//      const loginPage: LoginPage = new LoginPage(page);
//      const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//      await test.step("User navigates to Mawista application", async () => {
//          await loginPage.gotoLoginPage(data['Login-Access'].url);
//      })
 
//      await test.step("User Enter Username and Password", async () => {
//          await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//      })
 
//      await test.step("Click On Account Reconcilation Under Financials", async () => {
//          await smokeTestingSuitePage.searchAndClickOnAccountReconcilationUnderFinancials();
//      })
//   });
 
//   //10
//   test('FIN-TC-1750 @smoke:TC_010_Account Reconciliation_Verify that user can search by PO ID- Ex-3600709_Smoke', async ({ page }) => {
  
//       const loginPage: LoginPage = new LoginPage(page);
//       const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//       await test.step("User navigates to Mawista application", async () => {
//           await loginPage.gotoLoginPage(data['Login-Access'].url);
//       })
  
//       await test.step("User Enter Username and Password", async () => {
//           await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//       })
  
//       await test.step("Click On Account Reconcilation Under Financials", async () => {
//          await smokeTestingSuitePage.searchAndClickOnAccountReconcilationUnderFinancials();
//      })
      
//       await test.step("Fill all the mandatory details", async () => {
//           await smokeTestingSuitePage.fillMandaoryDetailsAR(smokeTestData["smokeTest-001"].payer,smokeTestData["smokeTest-001"].Account);;
//       })
  
//       await test.step("Click on the search button", async () => {
//           await smokeTestingSuitePage.clickonSearch();
//       })
  
//          await test.step("Validate that user should be able to search by PO ID", async () => {
//           await smokeTestingSuitePage.searchByID(smokeTestData['smokeTest-001'].POID);
//       })
//       await test.step("Validate that table should be displayed", async () => {
//           await smokeTestingSuitePage.verifyTable();
//       })
//   });
  
//   //11
//  test('FIN-TC-1751 @smoke: TC_011_provider Reconciliation_Verify that user is navigate to provider Reconciliation_Smoke', async ({ page }) => {
 
//      const loginPage: LoginPage = new LoginPage(page);
//      const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);
 
//      await test.step("User navigates to Mawista application", async () => {
//          await loginPage.gotoLoginPage(data['Login-Access'].url);
//      })
 
//      await test.step("User Enter Username and Password", async () => {
//          await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//      })
 
//      await test.step("Click On Provider Reconcilation Under Financials", async () => {
//          await smokeTestingSuitePage.searchAndClickOnProviderReconcilationUnderFinancials();
//      })
  
//  });
 
//  //12
//  test('FIN-TC-1752 @smoke: TC_012_provider Reconciliation_Verify that in Search Criteria, batch criteria, Transactions  all fields are displayed_Smoke', async ({ page }) => {
 
//      const loginPage: LoginPage = new LoginPage(page);
//      const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);
 
//      await test.step("User navigates to Mawista application", async () => {
//          await loginPage.gotoLoginPage(data['Login-Access'].url);
//      })
 
//      await test.step("User Enter Username and Password", async () => {
//          await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//      })
 
//       await test.step("Click On Provider Reconcilation Under Financials", async () => {
//          await smokeTestingSuitePage.searchAndClickOnProviderReconcilationUnderFinancials();
//      }) 

//        await test.step("Verify that Provider Recoincilation Page is visible", async () => {
//          await smokeTestingSuitePage.providerRecoincialtionField();
//      })
 
//      await test.step("User should be ablre to verify the fields",async()=>{
//          await smokeTestingSuitePage.visiblefield();
//          await smokeTestingSuitePage.SearchCriteria();
//          await smokeTestingSuitePage.batchCriteria();
//   })
//  });
 
//  //13
//  test("FIN-TC-1753 @smoke: TC_013_Provider's Financial Settlement_verify that  payer and reinsurer radio button are displayed_Smoke", async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Provider's Financial Settlement Under Financials", async () => {
//         await smokeTestingSuitePage.searchAndClickOnProviderFinancialSettlementUnderFinancials();
//     })

//     await test.step("Validate that payer and reinsurer radio button should be visible", async()=> {
//         await smokeTestingSuitePage.validateProviderRadioButton();
//     })
//  });

//  //14
//  test("FIN-TC-1754 @smoke: TC_014_Provider's Financial Settlement_Verify that when Payer is selected, then  Payer's auto populated list should be display_Smoke", async ({ page }) => {
  
//       const loginPage: LoginPage = new LoginPage(page);
//       const smokeTestingSuitePage: SmokeTestingSuitePage = new SmokeTestingSuitePage(page);

//         await test.step("User navigates to Mawista application", async () => {
//           await loginPage.gotoLoginPage(data['Login-Access'].url);
//         })
  
//         await test.step("User Enter Username and Password", async () => {
//           await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//         })
  
//         await test.step("Click On Provider's Financial Settlement Under Financials", async () => {
//             await smokeTestingSuitePage.searchAndClickOnProviderFinancialSettlementUnderFinancials();
//         })
      
//         await test.step("Fill all the mandatory details", async () => {
//           await smokeTestingSuitePage.fillPayer(smokeTestData["smokeTest-001"].payer,smokeTestData["smokeTest-001"].Account);;
//         })
// });
  