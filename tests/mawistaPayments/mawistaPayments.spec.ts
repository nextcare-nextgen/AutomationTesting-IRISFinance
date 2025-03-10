import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { MawistaPaymentsPage } from '../../page-objects/mawistaPayments-pages/mawistaPayments-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const MawistaPaymentsgData = require(`../../testdata/${process.env.ENV || 'eu'}/mawistaPayments.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;

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
    //page.pause();
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

test('NXGF-TC-3716: TC_006_Mawista payments_Verify that the user is able select any option from the advanced search filter and click on apply', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
            await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User enter the Date", async () => {
        await mawistaPaymentsPage.fillfromDate_PastDate();
    })

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("User enter the Transaction Id number", async () => {
        await mawistaPaymentsPage.enterTransactionId(MawistaPaymentsgData['TC_006_Mawista_payments'].transactionId);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified Transaction Id from grid", async () => {
        await mawistaPaymentsPage.verifySearchResultFromGrid();
    })

    await test.step("Verified Transaction Id from grid", async () => {
        await mawistaPaymentsPage.verifyTransactionIdFromGrid(MawistaPaymentsgData['TC_006_Mawista_payments'].transactionId);
    })
});

test('NXGF-TC-3717: TC_007_Mawista payments_Verify that the user is able to view the results where Payment Date is in descending order', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("Select Payment Status", async () => {
        await mawistaPaymentsPage.selectPaymentStatus(MawistaPaymentsgData['TC_007_Mawista_payments'].paymentStatus);
    })

    await test.step("Select Payment Method", async () => {
        await mawistaPaymentsPage.selectPaymentMethod(MawistaPaymentsgData['TC_007_Mawista_payments'].paymentMethod);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified Paymets Dates from grid", async () => {
        await mawistaPaymentsPage.verifyPaymentsDatesFromGrid();
    })
});

test('NXGF-TC-3718: TC_008_Mawista payments_Verify that the user is able to view the results where Payment file ref is in descending order', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("User Enter Payment FIle Ref", async () => {
        await mawistaPaymentsPage.enterPaymentFileRef(MawistaPaymentsgData['TC_008_Mawista_payments'].fileRef);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified Paymets File Ref from grid", async () => {
        await mawistaPaymentsPage.verifyPaymentFileRefFromGrid(MawistaPaymentsgData['TC_008_Mawista_payments'].fileRef);
    })
});


test('NXGF-TC-3719: TC_009_Mawista payments_Verify that the user is able to view the results where Payment type is Claim/Commission/Premium/Blank', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("User Select Payment type", async () => {
        await mawistaPaymentsPage.selectPaymentTypes(MawistaPaymentsgData['TC_009_Mawista_payments'].paymentType, MawistaPaymentsgData['TC_009_Mawista_payments'].paymentType1, MawistaPaymentsgData['TC_009_Mawista_payments'].paymentType2);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified Paymets Type from grid", async () => {
        await mawistaPaymentsPage.verifyPaymentTypesFromGrid();
    })
});

test('NXGF-TC-3720: TC_010_Mawista payments_Verify that the user is able to view the results where Payment Currency Amount is in descending order', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await mawistaPaymentsPage.enterFromPaymentAmount(MawistaPaymentsgData['TC_010_Mawista_payments'].fromPaymentAmount);
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await mawistaPaymentsPage.enterToPaymentAmount(MawistaPaymentsgData['TC_010_Mawista_payments'].toPaymentAmount);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified Payments Amount from grid", async () => {
        await mawistaPaymentsPage.verifyPaymentAmountFromGrid(MawistaPaymentsgData['TC_010_Mawista_payments'].toPaymentAmount);
    })

});

test('NXGF-TC-3721: TC_011_Mawista payments_Verify that the user is able to navigate back to Search Payments Screen to select different run parameters for query', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const mawistaPaymentsPage: MawistaPaymentsPage = new MawistaPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Financial Transactions Monitoring Shortcut Button", async () => {
        await mawistaPaymentsPage.clickOnFinancialTransactionsMonitoringShortcutButton();
    })

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await mawistaPaymentsPage.enterFromPaymentAmount(MawistaPaymentsgData['TC_011_Mawista_payments'].fromPaymentAmount);
    })

    await test.step("select from the Payment Method from the dropdown", async () => {
        await mawistaPaymentsPage.enterToPaymentAmount(MawistaPaymentsgData['TC_011_Mawista_payments'].toPaymentAmount);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified Payments Amount from grid", async () => {
        await mawistaPaymentsPage.verifyPaymentAmountFromGrid(MawistaPaymentsgData['TC_011_Mawista_payments'].toPaymentAmount);
    })

    await test.step("User Click on Search filter button", async () => {
        await mawistaPaymentsPage.clickOnSearchFilterButton();
    })

    await test.step("User Select Payment Status", async () => {
        await mawistaPaymentsPage.selectPaymentStatus(MawistaPaymentsgData['TC_011_Mawista_payments'].paymentStatus);
    })

    await test.step("User Click on Apply button", async () => {
        await mawistaPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await mawistaPaymentsPage.clickOnSearchButton();
    })
});

test('NXGF-TC-3722: TC_012_Mawista payments_Verify that the user is able to export the results to excel', async ({ page }) => {

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

    await test.step("User Click on Export to excel", async () => {
        await mawistaPaymentsPage.clickOnExportToExcelButton();
    })

    await test.step("User Click on Export to Current page", async () => {
        await mawistaPaymentsPage.clickExportTOcurrentPage();
    })
});


