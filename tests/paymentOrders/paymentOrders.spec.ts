import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { PaymentOrdersPage } from '../../page-objects/paymentOrders-pages/paymentOrders-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
//const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const PaymentOrdersData = require(`../../testdata/${process.env.ENV || 'eu'}/paymentOrders.json`) as Record<string, any>;

// //test code
// test('FIN-TC-65: TC_066_Payment Order Details_verify that all fields of Payment order, Report prefrences,  Transaction  displays', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrderDetailsPage: PaymentOrderDetailsPage = new PaymentOrderDetailsPage(page);

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that all fields of Payment order, Report prefrences,  Transaction  displays", async () => {
//         await paymentOrderDetailsPage.allFieldsOfPaymentOrder();
//         await paymentOrderDetailsPage.allFieldsOfPaymentOrderReportPrefrences();
//         await paymentOrderDetailsPage.allFieldsOfPaymentOrderTransactionDisplays();
//     })

// });

// test('FIN-TC-71: TC_072_Payment Order Details_verify that click on print transaction then PDF file get open', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrderDetailsPage: PaymentOrderDetailsPage = new PaymentOrderDetailsPage(page);

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrderDetailsPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that all fields of Payment order, Report prefrences,  Transaction  displays", async () => {
//         await paymentOrderDetailsPage.allFieldsOfPaymentOrder();
//         await paymentOrderDetailsPage.allFieldsOfPaymentOrderReportPrefrences();
//         await paymentOrderDetailsPage.allFieldsOfPaymentOrderTransactionDisplays();
//     })

// });

// //Need to show in next run
// test('FIN-TC-1017: TC_369_Payment Orders_Verify that parent entity textbox accept alphabets', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that parent entity textbox accept alphabets", async () => {
//         await paymentOrdersPage.verifyParentEntityTextboxAcceptsAlphabets();
//     })
// });

// test('FIN-TC-1018: TC_370_Payment Orders_Verify that parent entity textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that parent entity textbox accept numberss", async () => {
//         await paymentOrdersPage.verifyParentEntityTextboxAcceptNumberss();
//     })
// });

// test('FIN-TC-1019: TC_371_Payment Orders_Verify that parent entity textbox accept specail charachters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that parent entity textbox accept specail charachters", async () => {
//         await paymentOrdersPage.verifyParentEntityTextboxAcceptSpecialCharacters();
//     })
// });

// test('FIN-TC-1020: TC_372_Payment Orders_Verify that parent entity textbox accept blank spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that parent entity textbox accept specail charachters", async () => {
//         await paymentOrdersPage.verifyParentEntityTextboxAcceptBlankSpaces();
//     })
// });

// test('FIN-TC-1021: TC_373_Payment Orders_ Verify that the parent entity textbox accept leading and trailing spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that parent entity textbox accept leading and trailing spaces", async () => {
//         await paymentOrdersPage.verifyParentEntityTextboxAcceptLeadingTrailingSpaces();
//     })
// });

// test('FIN-TC-1022: TC_374_Payment Orders_verify that enter test in parent entity textbox then list is shown', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that enter test in parent entity textbox then list is shown", async () => {
//         await paymentOrdersPage.verifyParentEntityAutocompleteListShown();
//     })
// });

// test('FIN-TC-1023: TC_375_Payment Orders_verify that user can select value from list', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that user can select value from list", async () => {
//         await paymentOrdersPage.verifyUserCanSelectValueFromParentEntityList();
//     })
// });

// test('FIN-TC-1024: TC_376_Payment Orders_verify that user can select one value at a time from list', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that user can select value from list", async () => {
//         await paymentOrdersPage.verifyUserCanSelectOnlyOneValueAtATime();
//     })
// });

// test('FIN-TC-1025: TC_377_Payment Orders_Verify that Id textbox accepts alphabets', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that Id textbox not accept alphabeats", async () => {
//         await paymentOrdersPage.verifyIdTextboxNotAcceptsAlphabets();
//     })
// });

// test('FIN-TC-1026: TC_378_Payment Orders_Verify that Id textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that Id textbox accept numbers", async () => {
//         await paymentOrdersPage.verifyIdTextboxAcceptsnumbers();
//     })
// });

// test('FIN-TC-1027: TC_379_Payment Orders_Verify that Id textbox accept special characters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that ID textbox accept specail charachters", async () => {
//         await paymentOrdersPage.verifyIdTextboxNotAcceptsSpecialCharacter();
//     })
// });

// test('FIN-TC-1028: TC_380_Payment Orders_Verify that Id textbox accepts blank spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that ID textbox accept blank spaces", async () => {
//         await paymentOrdersPage.verifyIdTextboxAcceptsBlankValue();
//     })
// });

// test('FIN-TC-1029: TC_381_Payment Orders_Verify that Id textbox accept leading and trailing spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Orders Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Orders Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that Id textbox accept leading and trailing spaces", async () => {
//         await paymentOrdersPage.verifyIdTextboxDoesNotAcceptLeadingTrailingSpaces();
//     })
// });

// // test('FIN-TC-1030: TC_382_Payment Orders_verify that enter single alphabeat and click on search', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

// //     await test.step("--------------Start the Financial Organization - Payment Orders Testclass----------------------", async () => {
// //         console.log("--------------Start the Financial Organization - Payment Orders Testclass----------------------")
// //     })

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Payment Order Under Financials", async () => {
// //         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
// //     })

// //     await test.step("Verify that enter single alphabeat and click on search", async () => {
// //         await paymentOrdersPage.verifyIdTextboxDoesNotAcceptLeadingTrailingSpaces();
// //     })
// // });

// // test('FIN-TC-1031: TC_383_Payment Orders_verify that enter single special charachter and click on search', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

// //     await test.step("--------------Start the Financial Organization - Payment Orders Testclass----------------------", async () => {
// //         console.log("--------------Start the Financial Organization - Payment Orders Testclass----------------------")
// //     })

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Payment Order Under Financials", async () => {
// //         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
// //     })

// //     await test.step("Verify that enter single alphabeat and click on search", async () => {
// //         await paymentOrdersPage.verifyIdTextboxDoesNotAcceptLeadingTrailingSpaces();
// //     })
// // });

// // test('FIN-TC-1031: TC_383_Payment Orders_verify that enter single special charachter and click on search', async ({ page }) => {

// //     const loginPage: LoginPage = new LoginPage(page);
// //     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

// //     await test.step("--------------Start the Financial Organization - Payment Orders Testclass----------------------", async () => {
// //         console.log("--------------Start the Financial Organization - Payment Orders Testclass----------------------")
// //     })

// //     await test.step("User navigates to Mawista application", async () => {
// //         await loginPage.gotoLoginPage(data['Login-Access'].url);
// //     })

// //     await test.step("User Enter Username and Password", async () => {
// //         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
// //     })

// //     await test.step("Click On Payment Order Under Financials", async () => {
// //         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
// //     })

// //     await test.step("Verify that enter single alphabeat and click on search", async () => {
// //         await paymentOrdersPage.verifyIdTextboxDoesNotAcceptLeadingTrailingSpaces();
// //     })
// // });

// test('FIN-TC-1033: TC_385_Payment Orders_Verify that label textbox accept alphabets', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that label textbox accept alphabets", async () => {
//         await paymentOrdersPage.verifyLabelTextboxAcceptsAlphabets();
//     })
// });

// test('FIN-TC-1034: TC_386_Payment Orders_Verify that label textbox accept numbers', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that label textbox accept alphabets", async () => {
//         await paymentOrdersPage.verifyLabelTextboxAcceptNumberss();
//     })
// });

// test('FIN-TC-1035: TC_387_Payment Orders_Verify that label entity textbox accept specail charachters', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that label textbox accept Special Character", async () => {
//         await paymentOrdersPage.verifyLabelTextboxAcceptSpecialCharacters();
//     })
// });

// test('FIN-TC-1036: TC_388_Payment Orders_Verify that label textbox accept blank spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that label textbox accept blank spaces", async () => {
//         await paymentOrdersPage.verifyLabelTextboxAcceptBlankSpaces();
//     })
// });

// test('FIN-TC-1037: TC_389_Payment Orders_Verify that label textbox accept leading and trailing spaces', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("Verify that label textbox accept leading and trailing spaces", async () => {
//         await paymentOrdersPage.verifyLabelTextboxAcceptLeadingTrailingSpaces();
//     })
// });

// test('FIN-TC-1038: TC_390_Payment Orders_verify that from date label and textbox is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("verify that from date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyFromDateLabelAndTextboxDisplayed();
//     })
// });

// test('FIN-TC-1039: TC_391_Payment Orders_verify that calender icon is displayed', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("verify that from date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyFromDateCalendarIconDisplayed();
//     })
// });

// test('FIN-TC-1040: TC_392_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

//     const loginPage: LoginPage = new LoginPage(page);
//     const paymentOrdersPage: PaymentOrdersPage = new PaymentOrdersPage(page);
 

//     await test.step("--------------Start the Financial Organization - Payment Order Details Testclass----------------------", async () => {
//         console.log("--------------Start the Financial Organization - Payment Order Details Testclass----------------------")
//     })

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//         await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
//     })

//     await test.step("Click On Payment Order Under Financials", async () => {
//         await paymentOrdersPage.searchAndClickOnPaymentOrderUnderFinancials();
//     })

//     await test.step("verify that click on calender icon then calender get open with current date selected by default", async () => {
//         await paymentOrdersPage.verifyFromDateCalendarOpensWithCurrentDate();
//     })
// });
