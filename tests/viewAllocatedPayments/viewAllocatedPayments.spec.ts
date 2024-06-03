import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { ViewAllocatedPaymentsPage } from '../../page-objects/viewAllocatedPayments-pages/viewAllocatedPayments-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const ViewAllocatedPaymentsPageData = require(`../../testdata/${process.env.ENV || 'eu'}/viewAllocatedPayments.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-2889: TC_000_View allocated payments_Verify that the user is able to navigate to cash allocation screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);


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

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Verified that the user is redirected to the Chart of Accounts page", async () => {
        await viewAllocatedPaymentsPage.verifyCashAllocationText(ViewAllocatedPaymentsPageData['TC_000_Cash_Allocation'].cashAllocationText)

    })
});


test('NXGF-TC-2890: TC_001_View allocated payments_Verify that the user is able to view the search option and the fileds along with Reset option and the result grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Verify Search filter button", async () => {
        await viewAllocatedPaymentsPage.verifySearchFilterButton();

    })

    await test.step("Verify Reset filter button", async () => {
        await viewAllocatedPaymentsPage.verifyResetButton();
    })

    await test.step("Verify Result Grid", async () => {
        await viewAllocatedPaymentsPage.verifyResultGrid();
    })

});

test('NXGF-TC-2891,NXGF-TC-2892: TC_002_View allocated payments_Verify that the user is able to search with default payment status', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("User Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchFilterButton();

    })

    await test.step("Verified that the user is able to search with default payment status", async () => {
        await viewAllocatedPaymentsPage.verifyPaymentStatusFromGrid(ViewAllocatedPaymentsPageData['TC_002_Cash_Allocation'].paymentStatus);

    })

});

test('NXGF-TC-2893: TC_004_View allocated payments_Verify that the user is able to click on details for the unallocated payments', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("User Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchFilterButton();

    })

    await test.step("Click on 'Allocate Policies' button", async () => {
        await viewAllocatedPaymentsPage.clickOnAllocatePoliciesButton();
    })

    await test.step("Verified that a new pop screen should appear when clicked on the Allocate Policies button", async () => {
        await viewAllocatedPaymentsPage.verifyManualAllocationScreenTitle(ViewAllocatedPaymentsPageData['TC_004_Cash_Allocation'].title);
    })


});


