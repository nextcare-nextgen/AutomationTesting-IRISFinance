import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { PaymentOrderDetailsPage } from '../../page-objects/PaymentOrderDetails-pages/PaymentOrderDetails-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
//const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const PaymentOrderDetailsData = require(`../../testdata/${process.env.ENV || 'eu'}/paymentOrderDetails.json`) as Record<string, any>;

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



