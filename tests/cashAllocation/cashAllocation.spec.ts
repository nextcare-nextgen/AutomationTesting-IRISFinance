import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { CashAllocationPage } from '../../page-objects/cashAllocation-pages/cashAllocation-page';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const CashAllocationPageData = require(`../../testdata/${process.env.ENV || 'eu'}/cashAllocation.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-3316: TC_000_Cash Allocation Dashboard_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Cash Alloaction Testclass----------------------", async () => {
        console.log("--------------Start the Cash Alloaction Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationPage: CashAllocationPage = new CashAllocationPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut Button", async () => {
        await cashAllocationPage.clickOnCashAllocationShrtcutsButton();

    })
    await test.step("Verify Breadcrumbs Text", async () => {
        await cashAllocationPage.verifyBreadCrumbsText(CashAllocationPageData['TC_000_Cash_Allocation'].breadcrumbsText);

    })

});

test('NXGF-TC-3317: TC_001_Cash Allocation Dashboard_Verify that after logging the user lands on the main menu', async ({ page }) => {

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

test('NXGF-TC-3318: TC_002_Cash Allocation Dashboard_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationPage: CashAllocationPage = new CashAllocationPage(page);

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

    await test.step("Verified that the User is able to See Cash Allocation Shortcut Button", async () => {
        await cashAllocationPage.verifyCashAllocationShortcutButton();
    })
});


test('NXGF-TC-3319: TC_003_Cash Allocation Dashboard_Verify that the user is able to navigate to the Cash Allocation Dashboard', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationPage: CashAllocationPage = new CashAllocationPage(page);


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

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await cashAllocationPage.verifyDashboardText(CashAllocationPageData['TC_003_Cash_Allocation'].dashboardText);
    })

});

test('NXGF-TC-3320: TC_004_Cash Allocation Dashboard_Verify that the screen is titled as "Cash Allocation Dashboard"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationPage: CashAllocationPage = new CashAllocationPage(page);


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
        await cashAllocationPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Verified that the user is redirected to the Chart of Accounts page", async () => {
        await cashAllocationPage.verifyCashAllocationText(CashAllocationPageData['TC_004_Cash_Allocation'].cashAllocationText)

    })
});


test('NXGF-TC-3321: TC_005_Cash Allocation Dashboard_Verify that the Organization is already selected on the top of the page (header)', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationPage: CashAllocationPage = new CashAllocationPage(page);

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
        await cashAllocationPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await cashAllocationPage.verifyOrganizationName(CashAllocationPageData['TC_005_Cash_Allocation'].orgName);

    })

});

