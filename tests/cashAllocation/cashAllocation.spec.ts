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

test('NXGF-TC-3344: TC_028_Cash Allocation Dashboard_Verify that the "Details" button is available to view the Allocated payments', async ({ page }) => {

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

    await test.step("User Click on Cleared status close button", async () => {
        await cashAllocationPage.clickOnClearedstaus();
    })

    await test.step("User select Payment status", async () => {
        await cashAllocationPage.selectPaymentStatus(CashAllocationPageData['TC_028_Cash_Allocation'].paymentStatus);

    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButtonButton();
    })

    await test.step("Verified that the 'Details' button is available to view the Allocated payments", async () => {
        await cashAllocationPage.verifyShowDetailsButtons();
    })


});

test('NXGF-TC-3345: TC_029_Cash Allocation Dashboard_Verify that the allocation screen pops up when clicked on Allocate button and the screen is divided into 4 sections', async ({ page }) => {

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

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User select Payment status", async () => {
        await cashAllocationPage.verifyManualAllocationTitle(CashAllocationPageData['TC_029_Cash_Allocation'].title);

    })

    await test.step("Verified Section", async () => {
        await cashAllocationPage.verifyFirstSection(CashAllocationPageData['TC_029_Cash_Allocation'].firstSection);

    })

    await test.step("Verified Section", async () => {
        await cashAllocationPage.verifySecondSection(CashAllocationPageData['TC_029_Cash_Allocation'].secondSection);

    })

    await test.step("Verified Section", async () => {
        await cashAllocationPage.verifythirdSection();

    })

});

test('NXGF-TC-3346,NXGF-TC-3347: TC_031_Cash Allocation Dashboard_Verify that the first section has the payment date, Payment reference, Amount, currency, Sender account name ,Remittance info', async ({ page }) => {

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

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("Verified that the first section has the payment date, Payment reference, Amount, currency, Sender account name ,Remittance info ", async () => {
        await cashAllocationPage.verifySelectPaymentsDetails();

    })

});

test('NXGF-TC-3348: TC_032_Cash Allocation Dashboard_Verify that the user can entert he policy details using the policy refernce, policy holder name or effective date', async ({ page }) => {

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

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_032_Cash_Allocation'].policyRef);
    })

    await test.step("User able to entert he policy details using the policy holder name", async () => {
        await cashAllocationPage.enterPolicyHolderName(CashAllocationPageData['TC_032_Cash_Allocation'].policyHolderName);
    })

    await test.step("User able to entert he policy details using the Effective date", async () => {
        await cashAllocationPage.enterEffectiveDate(CashAllocationPageData['TC_032_Cash_Allocation'].date);
    })

});

test('NXGF-TC-3370,NXGF-TC-3371: TC_055_Cash Allocation Dashboard_Verify that a confirmation messae popup is displayed Are you sure do you want to cancel the allocation?', async ({ page }) => {

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

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_055_Cash_Allocation'].policyRef);
    })

    await test.step("User able to entert he policy details using the policy holder name", async () => {
        await cashAllocationPage.enterPolicyHolderName(CashAllocationPageData['TC_055_Cash_Allocation'].policyHolderName);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Clear All button", async () => {
        await cashAllocationPage.clickOnClearAllButton();
    })

    await test.step("Verified that a confirmation messae popup is displayed Are you sure do you want to cancel the allocation?", async () => {
        await cashAllocationPage.verifyPopupMessasge(CashAllocationPageData['TC_055_Cash_Allocation'].popupMessage);
    })
});

