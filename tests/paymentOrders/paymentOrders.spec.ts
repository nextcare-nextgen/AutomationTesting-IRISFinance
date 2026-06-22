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


// test('FIN-TC-1041: TC_393_Payment Orders_verify that user can select old date', async ({ page }) => {

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

//     await test.step("verify that user can select old date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectOldDate();
//     })
// });

// test('FIN-TC-1042: TC_394_Payment Orders_verify that user can select future date', async ({ page }) => {

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

//     await test.step("verify that user can select future date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectFutureDate();
//     })
// });

// test('FIN-TC-1043: TC_395_Payment Orders_verify that To date label and textbox is displayed', async ({ page }) => {

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

//     await test.step("verify that To date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyToDateLabelAndTextboxDisplayed();
//     })
// });

// test('FIN-TC-1044: TC_396_Payment Orders_verify that calender icon is displayed', async ({ page }) => {

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

//     await test.step("verify that calender icon is displayed", async () => {
//         await paymentOrdersPage.verifyToDateCalendarIconDisplayed();
//     })
// });

// test('FIN-TC-1045: TC_397_Payment Orders_verify that click on To Date calender icon then calender get open with current date selected by default', async ({ page }) => {

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

//     await test.step("verify that click on To Date calender icon then calender get open with current date selected by default", async () => {
//         await paymentOrdersPage.verifyToDateCalendarOpensWithCurrentDate();
//     })
// });

// test('FIN-TC-1046: TC_398_Payment Orders_verify that user can select old date', async ({ page }) => {

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

//     await test.step("verify that user can select old date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectOldDateFromToDateCalendarIcon();
//     })
// });

// test('FIN-TC-1047: TC_399_Payment Orders_verify that user can select future date', async ({ page }) => {

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

//     await test.step("verify that user can select future date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectFutureDateFromToDateCalendarIcon();
//     })
// });


// test('FIN-TC-1048: TC_400_Payment Orders_verify that user can select To date less than from date', async ({ page }) => {

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

//     await test.step("verify that user can select To date less than from date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectToDateLessThanFromDate();
//     })
// });

// test('FIN-TC-1049: TC_401_Payment Orders_verify that user can select To date greater than from date', async ({ page }) => {

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

//     await test.step("verify that user can select To date greater than from date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectToDateGreaterThanFromDate();
//     })
// });

// test('FIN-TC-1050: TC_402_Payment Orders_verify that user can select same To date and from date', async ({ page }) => {

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

//     await test.step("verify that user can select same To date and from date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectSameToAndFromDate();
//     })
// });

// test('FIN-TC-1051: TC_403_Payment Orders_verify that from Release date label and textbox is displayed', async ({ page }) => {

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

//     await test.step("verify that from Release date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyFromReleaseDateLabelAndTextboxDisplayed();
//     })
// });

// test('FIN-TC-1052: TC_404_Payment Orders_verify that From Release date calender icon is displayed', async ({ page }) => {

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

//     await test.step("verify that From Release date calender icon is displayed", async () => {
//         await paymentOrdersPage.verifyFromReleaseDateCalendarIconDisplayed();
//     })
// });

// test('FIN-TC-1053: TC_397_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

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
//         await paymentOrdersPage.verifyFromReleaseDateCalendarOpensWithCurrentDate();
//     })
// });

// test('FIN-TC-1054: TC_398_Payment Orders_verify that user can select old date', async ({ page }) => {

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

//     await test.step("verify that user can select old date", async () => {
//         await paymentOrdersPage.verifyDatePickerCanSelectOldDateFromReleaseDateCalendarIcon();
//     })
// });

// test('FIN-TC-1055: TC_399_Payment Orders_verify that user can select future date', async ({ page }) => {

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

//     await test.step("verify that user can select future date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectFutureDateFromReleaseDateCalendarIcon();
//     })
// });

// test('FIN-TC-1056: TC_408_Payment Orders_verify that To Release date label and textbox is displayed', async ({ page }) => {

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

//     await test.step("verify that To Release date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyToReleaseDateLabelAndTextboxDisplayed();
//     })
// });


//need to add in AIO
// test('FIN-TC-1057: TC_404_Payment Orders_verify that To Release date calender icon is displayed', async ({ page }) => {

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

//     await test.step("verify that To Release date calender icon is displayed", async () => {
//         await paymentOrdersPage.verifyToReleaseDateCalendarIconDisplayed();
//     })
// });

// test('FIN-TC-1058: TC_405_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

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
//         await paymentOrdersPage.verifyToReleaseDateCalendarOpensWithCurrentDate();
//     })
// });

// test('FIN-TC-1059: TC_406_Payment Orders_verify that user can select old date', async ({ page }) => {

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

//     await test.step("verify that user can select old date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectOldDateFromToReleaseDateCalendarIcon();
//     })
// });

// test('FIN-TC-1060: TC_407_Payment Orders_verify that user can select future date', async ({ page }) => {

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

//     await test.step("verify that user can select future date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectFutureDateFromToReleaseDateCalendarIcon();
//     })
// });

// test('FIN-TC-1061: TC_413_Payment Orders_verify that user can select To Release date less than from Release date', async ({ page }) => {

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

//     await test.step("verify that user can select To Release date less than from Release date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectToReleaseDateLessThanFromReleaseDate();
//     })
// });

// test('FIN-TC-1062: TC_414_Payment Orders_verify that user can select To Release date greater than from Release date', async ({ page }) => {

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

//     await test.step("verify that user can select To Release date greater than from Release date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectToReleaseDateGreaterThanFromReleaseDate();
//     })
// });

// test('FIN-TC-1063: TC_415_Payment Orders_verify that user can select same To Release date and from Release date', async ({ page }) => {

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

//     await test.step("verify that user can select same To Release date and from Release date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectSameToAndFromReleaseDate();
//     })
// });

// test('FIN-TC-1064: TC_416_Payment Orders_verify that From Delivery date label and textbox is displayed', async ({ page }) => {

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

//     await test.step("verify that From Delivery date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyFromDeliveryDateLabelAndTextboxDisplayed();
//     })
// });

// test('FIN-TC-1065: TC_409_Payment Orders_verify that From Delivery date calender icon is displayed', async ({ page }) => {

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

//     await test.step("verify that From Delivery date calender icon is displayed", async () => {
//         await paymentOrdersPage.verifyFromDeliveryDateCalendarIconDisplayed();
//     })
// });

// test('FIN-TC-1066: TC_410_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

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
//         await paymentOrdersPage.verifyFromDeliveryDateCalendarOpensWithCurrentDate();
//     })
// });

// test('FIN-TC-1067: TC_411_Payment Orders_verify that user can select old date', async ({ page }) => {

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

//     await test.step("verify that user can select old date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectOldDateFromFromDeliveryDateCalendarIcon();
//     })
// });

// test('FIN-TC-1068: TC_412_Payment Orders_verify that user can select future date', async ({ page }) => {

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

//     await test.step("verify that user can select future date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectFutureDateFromFromDeliveryDateCalendarIcon();
//     })
// });

// test('FIN-TC-1069: TC_421_Payment Orders_verify that To Delivery date label and textbox is displayed', async ({ page }) => {

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

//     await test.step("verify that To Delivery date label and textbox is displayed", async () => {
//         await paymentOrdersPage.verifyToDeliveryDateLabelAndTextboxDisplayed();
//     })
// });

// test('FIN-TC-1070: TC_417_Payment Orders_verify that To Delivery date calender icon is displayed', async ({ page }) => {

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

//     await test.step("verify that To Delivery date calender icon is displayed", async () => {
//         await paymentOrdersPage.verifyToDeliveryDateCalendarIconDisplayed();
//     })
// });

// test('FIN-TC-1071: TC_423_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ page }) => {

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
//         await paymentOrdersPage.verifyToDeliveryDateCalendarOpensWithCurrentDate();
//     })
// });

// test('FIN-TC-1072: TC_424_Payment Orders_verify that user can select old date', async ({ page }) => {

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

//     await test.step("verify that user can select old date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectOldDateFromToDeliveryDateCalendarIcon();
//     })
// });

// test('FIN-TC-1073: TC_425_Payment Orders_verify that user can select future date', async ({ page }) => {

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

//     await test.step("verify that user can select future date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectFutureDateFromToDeliveryDateCalendarIcon();
//     })
// });

// test('FIN-TC-1074: TC_426_Payment Orders_verify that user can select To Delivery date less than From Delivery date', async ({ page }) => {

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

//     await test.step("verify that user can select To Delivery date less than From Delivery date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectToDeliveryDateLessThanFromDeliveryDate();
//     })
// });

//Need to add in next session

// test('FIN-TC-1075: TC_427_Payment Orders_verify that user can select To Delivery date greater than From Delivery date', async ({ page }) => {

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

//     await test.step("verify that user can select To Delivery date greater than From Delivery date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectToDeliveryDateGreaterThanFromDeliveryDate();
//     })
// });

// test('FIN-TC-1076: TC_428_Payment Orders_verify that user can select same To Delivery date and From Delivery date', async ({ page }) => {

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

//     await test.step("verify that user can select same To Delivery date and From Delivery date", async () => {
//         await paymentOrdersPage.verifyUserCanSelectSameToAndFromDeliveryDate();
//     })
// });

// test('FIN-TC-1077: TC_429_Payment Orders_Verify that Batch Id textbox accept blank spaces', async ({ page }) => {

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

//     await test.step("Verify that Batch Id textbox accept blank spaces", async () => {
//         await paymentOrdersPage.verifyBatchIdTextboxAcceptBlankSpaces();
//     })
// });

// test('FIN-TC-1078: TC_430_Payment Orders_Verify that Batch Id textbox accept leading and trailing spaces', async ({ page }) => {

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

//     await test.step("Verify that Batch Id textbox accept leading and trailing spaces", async () => {
//         await paymentOrdersPage.verifyBatchIdTextboxAcceptLeadingTrailingSpaces();
//     })
// });

// test('FIN-TC-1079: TC_431_Payment Orders_verify that enter single alphabeat and click on search', async ({ page }) => {

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

//     await test.step("verify that enter single alphabeat and click on search", async () => {
//         await paymentOrdersPage.verifyBatchIdTextboxAcceptSingleAlphabet();
//     })
// });

// test('FIN-TC-1080: TC_432_Payment Orders_verify that enter single special charachter and click on search', async ({ page }) => {

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

//     await test.step("verify that enter single special charachter and click on search", async () => {
//         await paymentOrdersPage.verifyBatchIdTextboxAcceptSingleSpecialCharacter();
//     })
// });

// test('FIN-TC-1081: TC_433_Payment Orders_verify that enter number and blank spaces and click on search', async ({ page }) => {

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

//     await test.step("verify that enter number and blank spaces and click on search", async () => {
//         await paymentOrdersPage.verifyBatchIdTextboxAcceptNumberAndBlankSpacesThenSearch();
//     })
// });

// test('FIN-TC-1082: TC_434_Payment Orders_verify that show only not delivered toggle button is displayed', async ({ page }) => {

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

//     await test.step("verify that show only not delivered toggle button is displayed", async () => {
//         await paymentOrdersPage.verifyShowOnlyNotDeliveredToggleIsDisplayed();
//     })
// });

// test('FIN-TC-1083: TC_435_Payment Orders_verify that user can enable toggle button show only not delivered', async ({ page }) => {

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

//     await test.step("verify that user can enable toggle button show only not delivered", async () => {
//         await paymentOrdersPage.verifyUserCanEnableShowOnlyNotDeliveredToggle();
//     })
// });

// test('FIN-TC-1084: TC_436_Payment Orders_verify that user can disable toggle button show only not delivered', async ({ page }) => {

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

//     await test.step("verify that user can disable toggle button show only not delivered", async () => {
//         await paymentOrdersPage.verifyUserCanDisableShowOnlyNotDeliveredToggle();
//     })
// });

// test('FIN-TC-1085: TC_437_Payment Orders_verify that Capitation toggle button is displayed', async ({ page }) => {

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

//     await test.step("verify that Capitation toggle button is displayed", async () => {
//         await paymentOrdersPage.verifyCapitationToggleIsDisplayed();
//     })
// });

// test('FIN-TC-1086: TC_438_Payment Orders_verify that user can enable toggle button Capitation', async ({ page }) => {

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

//     await test.step("verify that user can enable toggle button Capitation", async () => {
//         await paymentOrdersPage.verifyUserCanEnableCapitationToggle();
//     })
// });

// test('FIN-TC-1087: TC_439_Payment Orders_verify that user can disable toggle button Capitation', async ({ page }) => {

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

//     await test.step("verify that user can disable toggle button Capitation", async () => {
//         await paymentOrdersPage.verifyUserCanDisableCapitationToggle();
//     })
// });




