import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { MawistaPaymentsPage } from '../../page-objects/mawistaPayments-pages/mawistaPayments-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const MawistaPaymentsgData = require(`../../testdata/${process.env.ENV || 'eu'}/mawistaPayments.json`) as Record<string, any>;

test('NXGF-TC-3712: TC_002_Mawista payments_Verify that the user is able to view the default and mandatory search option of "from date" and "To date"', async ({ page }) => {

    await test.step("--------------Start the Mawista Payments Testclass----------------------", async () => {
        console.log("--------------Start the Mawista Payments Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Verify that the user is able to view the default and mandatory search option of 'from date' and 'To date'", async () => {
        await mawistaPaymentsPage.verifyFromDateandToDate();

    })

});

test('NXGF-TC-3711: TC_001_Mawista payments_Verify that the IRIS user will be presented with the initial Search Payments query screen and fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Click on search with default date selected", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified that the user is able view the Search filters", async () => {
        await mawistaPaymentsPage.verifySeatchFilter();
    })

});

test('NXGF-TC-3713: TC_003_Mawista payments_Verify that the user is able to search and view the relevant payments with search option of "from date" and "To date"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Click on search with default date selected", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified that the user is able to search and view the relevant payments with search option of 'from date' and 'To date'", async () => {
        await mawistaPaymentsPage.verifyDatesFromGrid();
    })

});

test('NXGF-TC-3714: TC_004_Mawista payments_Verify that the user is able to reset the  search option of "from date" and "To date"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Click on search with default date selected", async () => {
        await mawistaPaymentsPage.clickOnResetButton();
    })

});

test('NXGF-TC-3715: TC_005_Mawista payments_Verify that the user is able click on the filters for advance search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("Click on Advance filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("Verified that the user is able click on the filters for advance search", async () => {
        await mawistaPaymentsPage.verifyAdvanceSearchOption();
    })

});




