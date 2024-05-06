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

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
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

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await financialTransactionsMonitoringPage.verifySearchfiltersButton();

    })


});



