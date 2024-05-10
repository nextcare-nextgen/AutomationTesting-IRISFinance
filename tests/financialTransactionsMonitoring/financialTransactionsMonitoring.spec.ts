import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { FinancialTransactionsMonitoringPage } from '../../page-objects/financialTransactionsMonitoring-pages/financialTransactionsMonitoring-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const FinancialTransactionsMonitoringData = require(`../../testdata/${process.env.ENV || 'eu'}/financialTransactionsMonitoring.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-3014: TC_000_Transactions Details Screen_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Financial Transactions Monitoring Testclass----------------------", async () => {
        console.log("--------------Start the Financial Transactions Monitoring Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);


    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();

    })
    await test.step("Verify Breadcrumbs Text", async () => {
        await financialTransactionsMonitoringPage.verifyBreadCrumbsText(FinancialTransactionsMonitoringData['TC_000_Transactions_Details_Screen'].breadcrumbsText);

    })

});


test('NXGF-TC-3015: TC_001_Transactions Details Screen_Verify that after logging the user lands on the main menu', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

});

test('NXGF-TC-3016: TC_002_Transactions Details Screen_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("Verified that the User is able to See Transactions Details Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.verifyFinancialTransactionsMonitoringShrtcutButton();
    })


});


test('NXGF-TC-3017,NXGF-TC-3018: TC_003_Transactions Details Screen_Verify that the user is able to navigate to the Transaction details screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher Lookup screen", async () => {
        await financialTransactionsMonitoringPage.verifyJournalVoucherListText(FinancialTransactionsMonitoringData['TC_003_Transactions_Details_Screen'].financialTransactionsMonitoringText)

    })


});

test('NXGF-TC-3019: TC_005_Transactions Details Screen_Verify that the Organization is already selected on the top of the page (header)', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Verified the organization name selected on the top of the page", async () => {
        await financialTransactionsMonitoringPage.verifyOrganizationName(FinancialTransactionsMonitoringData['TC_005_Transactions_Details_Screen'].orgName);

    })


});


test('NXGF-TC-3021: TC_006_Transactions Details Screen_Verify that the user is able to select todays date in the "from date" calendar selections', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Verified that the user is able to select todays date in the 'from date' calendar selections", async () => {
        await financialTransactionsMonitoringPage.selectCurrentDateFromDateCalender();

    })


});

test('NXGF-TC-3022: TC_007_Transactions Details Screen_Verify that the user should not be able to select future date in the "from date" calendar selection', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Select Future Date in From Date Field", async () => {
        await financialTransactionsMonitoringPage.selectFutureDateInFromDateCalender();

    })


});

test('NXGF-TC-3020: TC_008_Transactions Details Screen_Verify that the user is able to view the search filters', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Verified the organization name selected on the top of the page", async () => {
        await financialTransactionsMonitoringPage.verifySearchfiltersButton();

    })


});

test('NXGF-TC-3023: TC_009_Transactions Details Screen_Verify that the user should is be able to select past date in the "from date" calendar selection', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Verified that the user should is be able to select past date in the 'from date' calendar selection", async () => {
        await financialTransactionsMonitoringPage.selectOldDate();

    })


});

test('NXGF-TC-3024: TC_010_Transactions Details Screen_Verify that the from date is earlier or equal to the to date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Verified that the from date is earlier or equal to the to date", async () => {
        await financialTransactionsMonitoringPage.selectOldDate();
        await financialTransactionsMonitoringPage.selectCurrentDateToDateCalender();

    })


});

test('NXGF-TC-3026: TC_012_Transaction Details Screen_Verify that the user is able to select from the Payment Status dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able to select from the Payment Status dropdown", async () => {
        await financialTransactionsMonitoringPage.selectPaymentStatus(FinancialTransactionsMonitoringData['TC_012_Transactions_Details_Screen'].paymentStatus);
    })

});

test('NXGF-TC-3027: TC_013_Transaction Details Screen_Verify that the Payment status has the mentioned values', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the Payment status has the mentioned values", async () => {
        await financialTransactionsMonitoringPage.verifyListOfPaymentStatus();
    })

});

test('NXGF-TC-3028: TC_014_Transaction Details Screen_Verify that the user is able to select from the Payment Type dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able to select from the Payment Type dropdown", async () => {
        await financialTransactionsMonitoringPage.selectTransactiontype(FinancialTransactionsMonitoringData['TC_014_Transactions_Details_Screen'].transactionType);
    })

});

test('NXGF-TC-3029: TC_015_Transaction Details Screen_Verify that the Payment Type has the mentioned values', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the Payment Type has the mentioned values", async () => {
        await financialTransactionsMonitoringPage.verifyListOfTransactionType();
    })

});

test('NXGF-TC-3030: TC_016_Transaction Details Screen_Verify that the user is able to select from the Payment Method from the dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able to select from the Payment Method from the dropdown", async () => {
        await financialTransactionsMonitoringPage.selectPaymentMethod(FinancialTransactionsMonitoringData['TC_016_Transactions_Details_Screen'].paymentMethod);
    })

});

test('NXGF-TC-3031: TC_017_Transaction Details Screen_Verify that the user is able to enter the Payment Amount  in the search field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Enter From Payment Amount", async () => {
        await financialTransactionsMonitoringPage.enterFromPaymentAmount(FinancialTransactionsMonitoringData['TC_017_Transactions_Details_Screen'].fromPaymentAmount);
    })

    await test.step("Enter To Payment amount", async () => {
        await financialTransactionsMonitoringPage.enterToPaymentAmount(FinancialTransactionsMonitoringData['TC_017_Transactions_Details_Screen'].toPaymentAmount);
    })

});

test('NXGF-TC-3032: TC_018_Transaction Details Screen_Verify that the user is able to enter the Policy Reference number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able to enter the Policy Reference number", async () => {
        await financialTransactionsMonitoringPage.enterPolicyRef(FinancialTransactionsMonitoringData['TC_018_Transactions_Details_Screen'].policyRef);
    })

});

test('NXGF-TC-3033: TC_019_Transaction Details Screen_Verify that the user is able to enter the Customer Reference number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able to enter the Customer Reference number", async () => {
        await financialTransactionsMonitoringPage.enterCustomerRef(FinancialTransactionsMonitoringData['TC_019_Transactions_Details_Screen'].customerRef);
    })

});

test('NXGF-TC-3034: TC_020_Transaction Details Screen_Verify that the user is able to enter the Transaction ID', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able to enter the Transaction Id  number", async () => {
        await financialTransactionsMonitoringPage.enterTransactionId(FinancialTransactionsMonitoringData['TC_020_Transactions_Details_Screen'].transactionId);
    })

});

test('NXGF-TC-3035: TC_021_Transaction Details Screen_Verify that the user is able to search only with From and To date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Verifued that the user is able to search only with From and To date", async () => {
        await financialTransactionsMonitoringPage.selectOldDate();
        await financialTransactionsMonitoringPage.selectCurrentDateToDateCalender();

    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

});


test('NXGF-TC-3036: TC_022_Transaction Details Screen_Verify that the user is able to search with Payment status', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Status dropdown", async () => {
        await financialTransactionsMonitoringPage.selectPaymentStatus(FinancialTransactionsMonitoringData['TC_022_Transactions_Details_Screen'].paymentStatus);
    })

    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified payments status from grid", async () => {
        await financialTransactionsMonitoringPage.verifyPaymentStatusFromGrid(FinancialTransactionsMonitoringData['TC_022_Transactions_Details_Screen'].paymentStatus);
    })

});

test('NXGF-TC-3037: TC_023_Transaction Details Screen_Verify that the user is able to search with Payment type', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Type from the dropdown", async () => {
        await financialTransactionsMonitoringPage.selectPaymentType(FinancialTransactionsMonitoringData['TC_023_Transactions_Details_Screen'].paymentType);
    })


    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Payments Method from grid", async () => {
        await financialTransactionsMonitoringPage.verifyPaymentTypeFromGrid(FinancialTransactionsMonitoringData['TC_023_Transactions_Details_Screen'].paymentType);
    })

});

test('NXGF-TC-3038: TC_024_Transaction Details Screen_Verify that the user is able to search with Payment method', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await financialTransactionsMonitoringPage.selectPaymentMethod(FinancialTransactionsMonitoringData['TC_024_Transactions_Details_Screen'].paymentMethod);
    })


    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Payments Method from grid", async () => {
        await financialTransactionsMonitoringPage.verifyPaymentMethodFromGrid(FinancialTransactionsMonitoringData['TC_024_Transactions_Details_Screen'].paymentMethod);
    })

});

test('NXGF-TC-3039: TC_025_Transaction Details Screen_Verify that the user is able to search with Payment Amount', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await financialTransactionsMonitoringPage.enterFromPaymentAmount(FinancialTransactionsMonitoringData['TC_025_Transactions_Details_Screen'].fromPaymentAmount);
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await financialTransactionsMonitoringPage.enterToPaymentAmount(FinancialTransactionsMonitoringData['TC_025_Transactions_Details_Screen'].toPaymentAmount);
    })

    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Payments Amount from grid", async () => {
        await financialTransactionsMonitoringPage.verifyPaymentAmountFromGrid(FinancialTransactionsMonitoringData['TC_025_Transactions_Details_Screen'].toPaymentAmount);
    })

});

test('NXGF-TC-3040: TC_026_Transaction Details Screen_Verify that the user is able to search with the Policy reference number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await financialTransactionsMonitoringPage.enterPolicyRef(FinancialTransactionsMonitoringData['TC_026_Transactions_Details_Screen'].policyRef);
    })

    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Policy Ref from grid", async () => {
        await financialTransactionsMonitoringPage.verifyPolicyRefFromGrid(FinancialTransactionsMonitoringData['TC_026_Transactions_Details_Screen'].policyRef);
    })

});

test('NXGF-TC-3041: TC_027_Transaction Details Screen_Verify that the user is able to search with the customer reference number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("User enter the Customer Reference number", async () => {
        await financialTransactionsMonitoringPage.enterCustomerRef(FinancialTransactionsMonitoringData['TC_027_Transactions_Details_Screen'].customerRef);
    })

    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Customer Ref from grid", async () => {
        await financialTransactionsMonitoringPage.verifyCustomerRefFromGrid(FinancialTransactionsMonitoringData['TC_027_Transactions_Details_Screen'].customerRef);
    })

});


test('NXGF-TC-3042,NXGF-TC-3044: TC_028_Transaction Details Screen_Verify that the user is able to search with the Transaction ID', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("User enter the Transaction Id number", async () => {
        await financialTransactionsMonitoringPage.enterTransactionId(FinancialTransactionsMonitoringData['TC_028_Transactions_Details_Screen'].transactionId);
    })

    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Transaction Id from grid", async () => {
        await financialTransactionsMonitoringPage.verifyTransactionIdFromGrid(FinancialTransactionsMonitoringData['TC_028_Transactions_Details_Screen'].transactionId);
    })

});

test('NXGF-TC-3043: TC_029_Transaction Details Screen_Verify that the user is able to click on "Reset" button to reset the search fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialTransactionsMonitoringPage: FinancialTransactionsMonitoringPage = new FinancialTransactionsMonitoringPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await financialTransactionsMonitoringPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchFilterButton();
    })

    await test.step("User enter the Transaction Id number", async () => {
        await financialTransactionsMonitoringPage.enterTransactionId(FinancialTransactionsMonitoringData['TC_028_Transactions_Details_Screen'].transactionId);
    })

    await test.step("User Click on Apply button", async () => {
        await financialTransactionsMonitoringPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await financialTransactionsMonitoringPage.clickOnSearchButton();
    })

    await test.step("Verified Transaction Id from grid", async () => {
        await financialTransactionsMonitoringPage.verifyTransactionIdFromGrid(FinancialTransactionsMonitoringData['TC_028_Transactions_Details_Screen'].transactionId);
    })

    await test.step("User Click on Reset button", async () => {
        await financialTransactionsMonitoringPage.clickOnResetButton();
    })

});




