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

    await test.step("User Verified the organization name selected on the top of the page", async () => {
        await cashAllocationPage.verifyOrganizationName(CashAllocationPageData['TC_005_Cash_Allocation'].orgName);

    })

});

test('NXGF-TC-3322: TC_006_Cash Allocation Dashboard_Verify that the mandatory search fields include Payment type, Payment status, Payment method', async ({ page }) => {

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

    await test.step("Verified that the Manadtory Fields displayed", async () => {
        await cashAllocationPage.verifyMadatoryFields();

    })

});

test('NXGF-TC-3323: TC_007_Cash Allocation Dashboard_Verify that the non manadatory search fields include From Date ,To Date,Payment Reference,Payment Amount ,Policy Reference', async ({ page }) => {

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

    await test.step("Click On Filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })
    await test.step("Verified that the Non Manadtory Fields displayed", async () => {
        await cashAllocationPage.verifyNonManadateFields();

    })

});

test('NXGF-TC-3324: TC_008_Cash Allocation Dashboard_Verify that the user is able to view and click on the the search button', async ({ page }) => {

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

    await test.step("Verified that the user is able to view and click on the the search button", async () => {
        await cashAllocationPage.verifySearchButton();

    })

});

test('NXGF-TC-3325: TC_009_Cash Allocation Dashboard_Verify that the Payment type has default value as "CASH" and the dropdown list should have Cash,Premium as multi select option', async ({ page }) => {

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

    await test.step("User Click on Cleared Transaction Type", async () => {
        await cashAllocationPage.clickOnClearedTransactionType();

    })

    await test.step("Verified that the Payment type has default value as 'CASH' and the dropdown list should have Cash,Premium as multi select option", async () => {
        await cashAllocationPage.verifyListOfTransactionType();

    })

});

test('NXGF-TC-3326: TC_010_Cash Allocation Dashboard_Verify that the Payment status has default value as "Cash-allocated” and the dropdown list should have “Cash-Unallocated”, “Cash-allocated” as multi select values', async ({ page }) => {

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

    await test.step("User Click on Cleared PaymentStatus", async () => {
        await cashAllocationPage.clickOnClearedPaymentStatus();

    })

    await test.step("Verified that the Payment status has default value as 'Cash-allocated” and the dropdown list should have “Cash-Unallocated”, “Cash-allocated” as multi select values", async () => {
        await cashAllocationPage.verifyListOfPaymentStatus();

    })

});

test('NXGF-TC-3327: TC_011_Cash Allocation Dashboard_Verify that the Payment method has default value as “Bank Transfer” and the dropdown values should have “Bank Transfer”, “SEPA Direct Debit” ,“Credit Card”', async ({ page }) => {

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

    await test.step("User Click on Cleared Method", async () => {
        await cashAllocationPage.clickOnClearedMethod();

    })

    await test.step("Verified that the Payment method has default value as “Bank Transfer” and the dropdown values should have “Bank Transfer”, “SEPA Direct Debit” ,“Credit Card”", async () => {
        await cashAllocationPage.verifyListOfPaymentsMethods();

    })

});

test('NXGF-TC-3328: TC_012_Cash Allocation Dashboard_Verify that the user is able to select todays date in the "from date" calendar selection', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("Verified that the user is able to select todays date in the 'from date' calendar selection", async () => {
        await cashAllocationPage.selectCurrentDateFromDateCalender();

    })

});


test('NXGF-TC-3330: TC_014_Cash Allocation Dashboard_Verify that the user should is be able to select past date in the "from date" calendar selection', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("Verified that the user should is be able to select past date in the 'from date' calendar selection", async () => {
        await cashAllocationPage.selectOldDate();

    })

});

test('NXGF-TC-3331,NXGF-TC-3334: TC_015_Cash Allocation Dashboard_Verify that the from date is earlier or equal to the to date', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("Verified that the from date is earlier or equal to the to date", async () => {
        await cashAllocationPage.selectCurrentDateFromDateCalender();

    })

    await test.step("Verified that the from date is earlier or equal to the to date", async () => {
        await cashAllocationPage.selectCurrentDateToDateCalender();

    })

});

test('NXGF-TC-3332: TC_016_Cash Allocation Dashboard_Verify that the user is able to search with the Payment reference', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("User Enter Payment Ref", async () => {
        await cashAllocationPage.enterAndVerifyPaymentRef(CashAllocationPageData['TC_016_Cash_Allocation'].pymentRef);

    })

    await test.step("User Click on Apply button", async () => {
        await cashAllocationPage.clickOnApplyButton();

    })

    await test.step("User Click on SEarch button", async () => {
        await cashAllocationPage.clickOnSearchButton();

    })

    await test.step("Verified that the user is able to search with the Payment reference", async () => {
        await cashAllocationPage.verifyPaymentRefFromGrid(CashAllocationPageData['TC_016_Cash_Allocation'].pymentRef)
    })

});

test('NXGF-TC-3333: TC_017_Cash Allocation Dashboard_Verify that the user is able to enter the Policy Reference number', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("User Enter Policy Ref", async () => {
        await cashAllocationPage.enterPolicyReference(CashAllocationPageData['TC_017_Cash_Allocation'].policyRef);

    })

});

test('NXGF-TC-3335: TC_019_Cash Allocation Dashboard_Verify that the user is able to enter the From amount number and to amount number and search', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("User Enter From Amount", async () => {
        await cashAllocationPage.enterFromAmount(CashAllocationPageData['TC_019_Cash_Allocation'].fromAmount);

    })

    await test.step("User Enter To Amount", async () => {
        await cashAllocationPage.enterToAmount(CashAllocationPageData['TC_019_Cash_Allocation'].toAmount);

    })

    await test.step("User Click on Apply button", async () => {
        await cashAllocationPage.clickOnApplyButton();

    })

    await test.step("User Click on SEarch button", async () => {
        await cashAllocationPage.clickOnSearchButton();

    })

    await test.step("Verified that the user is able to enter the From amount number and to amount number and search", async () => {
        await cashAllocationPage.verifyAmountFromGrid(CashAllocationPageData['TC_019_Cash_Allocation'].toAmount);

    })

});

test('NXGF-TC-3336: TC_020_Cash Allocation Dashboard_Verify that the user is able to enter the Policy holder name and apply', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("User Enter Policy holder name", async () => {
        await cashAllocationPage.enterPolicyHolder(CashAllocationPageData['TC_020_Cash_Allocation'].policyHolder);

    })

    await test.step("User Click on Apply button", async () => {
        await cashAllocationPage.clickOnApplyButton();

    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButton();

    })

    await test.step("Verified that the user is able to enter the From amount number and to amount number and search", async () => {
        await cashAllocationPage.verifyPolicyHolderNameFromGrid(CashAllocationPageData['TC_020_Cash_Allocation'].policyHolder);

    })

});

test('NXGF-TC-3337: TC_021_Cash Allocation Dashboard_Verify that the user is able to search only with Policy reference number', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("User Enter Policy Ref", async () => {
        await cashAllocationPage.enterPolicyReference(CashAllocationPageData['TC_021_Cash_Allocation'].policyRef);

    })
    await test.step("User Click on Apply button", async () => {
        await cashAllocationPage.clickOnApplyButton();

    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnSearchButton();

    })

    await test.step("Verified that the user is able to enter the From amount number and to amount number and search", async () => {
        await cashAllocationPage.verifyPolicyRefFromGrid(CashAllocationPageData['TC_021_Cash_Allocation'].policyRef);

    })

});

test('NXGF-TC-3338,NXGF-TC-3340: TC_022_Cash Allocation Dashboard_Verify that the user is able to search with the Payment type,payment status and the payment method set to defaulted values', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();

    })

    await test.step("Verified that the user is able to search with the Payment type,payment status and the payment method set to defaulted values", async () => {
        await cashAllocationPage.verifyPaymentTypeFromGrid(CashAllocationPageData['TC_022_Cash_Allocation'].paymentType);
        await cashAllocationPage.verifyPaymentStatusFromGrid(CashAllocationPageData['TC_022_Cash_Allocation'].paymentStatus);
        await cashAllocationPage.verifyPaymentMethodFromGrid(CashAllocationPageData['TC_022_Cash_Allocation'].paymentMethod);

    })

});

test('NXGF-TC-3339: TC_023_Cash Allocation Dashboard_ Verify that the user is able to click on "Reset" button to reset the non mandate search fields', async ({ page }) => {

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

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("User Enter Policy holder name", async () => {
        await cashAllocationPage.enterPolicyHolder(CashAllocationPageData['TC_023_Cash_Allocation'].policyHolder);

    })

    await test.step("Verified that the from date is earlier or equal to the to date", async () => {
        await cashAllocationPage.selectCurrentDateFromDateCalender();

    })

    await test.step("Verified that the from date is earlier or equal to the to date", async () => {
        await cashAllocationPage.selectCurrentDateToDateCalender();

    })

    await test.step("User Enter Payment Ref", async () => {
        await cashAllocationPage.enterAndVerifyPaymentRef(CashAllocationPageData['TC_023_Cash_Allocation'].pymentRef);

    })

    await test.step("User Enter From Amount", async () => {
        await cashAllocationPage.enterFromAmount(CashAllocationPageData['TC_023_Cash_Allocation'].fromAmount);

    })

    await test.step("User Enter To Amount", async () => {
        await cashAllocationPage.enterToAmount(CashAllocationPageData['TC_023_Cash_Allocation'].toAmount);

    })

    await test.step("User Click on Apply button", async () => {
        await cashAllocationPage.clickOnApplyButton();

    })

    await test.step("User Click on Reset button", async () => {
        await cashAllocationPage.clickOnResetButton();

    })

    await test.step("User Click on Search filter button", async () => {
        await cashAllocationPage.clickOnSearchFilterButton();

    })

    await test.step("Verified all field are empty after Click on Reset button", async () => {
        await cashAllocationPage.verifyFieldsAreEmptyAfterReset();

    })

});

test('NXGF-TC-3341: TC_025_Cash Allocation Dashboard_Verify that the payment record has "Allocate Policies" button', async ({ page }) => {

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

    await test.step("Verified that the payment record has 'Allocate Policies' button", async () => {
        await cashAllocationPage.verifyAllocatePoliciesButtons();
    })


});

test('NXGF-TC-3342: TC_026_Cash Allocation Dashboard_Verify that a new pop screen should appear when clicked on the Allocate Policies button', async ({ page }) => {

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

    await test.step("Click on 'Allocate Policies' button", async () => {
        await cashAllocationPage.clickOnAllocatePoliciesButton();
    })

    await test.step("Verified that a new pop screen should appear when clicked on the Allocate Policies button", async () => {
        await cashAllocationPage.verifyManualAllocationScreenTitle(CashAllocationPageData['TC_026_Cash_Allocation'].title);
    })


});

test('NXGF-TC-3343: TC_027_Cash Allocation Dashboard_Verify that the payment record has "“Un-allocate” or “Reverse Allocation” Button', async ({ page }) => {

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

    await test.step("Click on Cleared status", async () => {
        await cashAllocationPage.clickOnClearedstaus();
    })

    await test.step("Click on Cleared status", async () => {
        await cashAllocationPage.selectPaymentStatus(CashAllocationPageData['TC_027_Cash_Allocation'].paymentStatus);
    })

    await test.step("Click on Search Button", async () => {
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("Verified that the payment record has 'Un-allocate' or 'Reverse Allocation' Button", async () => {
        await cashAllocationPage.verifyReverseAllocationsButtons();
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
        await cashAllocationPage.clickOnSearchButton();
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
        await cashAllocationPage.clickOnSearchButton();
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
        await cashAllocationPage.clickOnSearchButton();
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
        await cashAllocationPage.clickOnSearchButton();
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

test('NXGF-TC-3349: TC_033_Cash Allocation Dashboard_Verify that the user effective date is an option search field', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_033_Cash_Allocation'].policyRef);
    })

    await test.step("User able to entert he policy details using the Effective date", async () => {
        await cashAllocationPage.enterEffectiveDate(CashAllocationPageData['TC_033_Cash_Allocation'].date);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

});

test('NXGF-TC-3350: TC_035_Cash Allocation Dashboard_Verify that the third section displays the search results, details dialogue and Add option', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_033_Cash_Allocation'].policyRef);
    })

    await test.step("User able to entert he policy details using the Effective date", async () => {
        await cashAllocationPage.enterEffectiveDate(CashAllocationPageData['TC_033_Cash_Allocation'].date);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("Verified Add policy Button", async () => {
        await cashAllocationPage.verifyAddPolicyButton();
    })

    await test.step("Verified Show details Button", async () => {
        await cashAllocationPage.verifyShowDetailsButton();
    })

});

test('NXGF-TC-3351: TC_036_Cash Allocation Dashboard_Verify that the policies that meet the search criteria should be displayed with mentioned information', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("Verified that the policies that meet the search criteria should be displayed with mentioned information", async () => {
        await cashAllocationPage.verifyPolicySearchGrid();
    })

});

test('NXGF-TC-3353: TC_034_Cash Allocation Dashboard_Verify that the when click on add/allocate option in the second sction after the policy search a confirmation message pops up', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_034_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_034_Cash_Allocation'].amount);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("Verified that the when click on add/allocate option in the second sction after the policy search a confirmation message pops up", async () => {
        await cashAllocationPage.verifyAddPolicyPopup();
    })

});

test('NXGF-TC-3354: TC_038_Cash Allocation Dashboard_Verify that  beside each policy found in the search result details option should be available', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_034_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("Verifed that  beside each policy found in the search result details option should be available", async () => {
        await cashAllocationPage.verifyShowDetailsButton();
    })

});

test('NXGF-TC-3355: TC_039_Cash Allocation Dashboard_Verify that the details option allows user to view all the “Unpaid” or “Partially Paid” Premium and Tax Dues per Due Date.', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_039_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Click on Show details button", async () => {
        await cashAllocationPage.clickOnShowDetailsButton();
    })

    await test.step("Verified that the details option allows user to view all the “Unpaid” or “Partially Paid” Premium and Tax Dues per Due Date.", async () => {
        await cashAllocationPage.verifyPremiumandTaxAmountFromGrid();
    })


});

test('NXGF-TC-3356: TC_040_Cash Allocation Dashboard_Verify that the Premium and tax details are avilable with Header "Premium and Tax Dues"', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_040_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Click on Show details button", async () => {
        await cashAllocationPage.clickOnShowDetailsButton();
    })

    await test.step("Verified that the Premium and tax details are avilable with Header 'Premium and Tax Dues'", async () => {
        await cashAllocationPage.verifyPremiumandTaxTitle(CashAllocationPageData['TC_040_Cash_Allocation'].title);
    })


});


test('NXGF-TC-3360: TC_044_Cash Allocation Dashboard_Verify that if the Outstanding Policy Balance > 0, theuser is allowed to add the policy to section 4 (allocated amounts)', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_044_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_044_Cash_Allocation'].amount);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("Verified that the when click on add/allocate option in the second sction after the policy search a confirmation message pops up", async () => {
        await cashAllocationPage.verifyAddPolicyPopup();
    })

});

test('NXGF-TC-3361: TC_045_Cash Allocation Dashboard_Verify that once the user adds a record (Policy Reference + Policy ID) to Allocated amounts, this record should be removed from the unallocated grid results', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_045_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_045_Cash_Allocation'].amount);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })


    await test.step("User Click on OK Button", async () => {
        await cashAllocationPage.clickOnOkButton();
    })

    await test.step("Verified that the when click on add/allocate option in the second sction after the policy search a confirmation message pops up", async () => {
        await cashAllocationPage.verifyUnallocatedPolicyID(CashAllocationPageData['TC_045_Cash_Allocation'].policyRef);
    })

});

test('NXGF-TC-3363: TC_047_Cash Allocation Dashboard_Verify that the Allocated amounts section displays a grid with a column as Allocated amount to enter the amount', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_047_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_047_Cash_Allocation'].amount);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("Verified that the when click on add/allocate option in the second sction after the policy search a confirmation message pops up", async () => {
        await cashAllocationPage.verifyAddPolicyPopup();
    })

});

test('NXGF-TC-3364: TC_048_Cash Allocation Dashboard_Verify that the Allocated amounts section displays the Total Amount Allocated which should display sum of the Allocated Amounts for each policy', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_048_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_048_Cash_Allocation'].amount);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("User Click on OK Button", async () => {
        await cashAllocationPage.clickOnOkButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_048_Cash_Allocation'].policyRef1);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_048_Cash_Allocation'].amount1);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("User Click on OK Button", async () => {
        await cashAllocationPage.clickOnOkButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_048_Cash_Allocation'].policyRef2);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_048_Cash_Allocation'].amount2);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("User Click on OK Button", async () => {
        await cashAllocationPage.clickOnOkButton();
    })


});

test('NXGF-TC-3365,NXGF-TC-3366: TC_049_Cash Allocation Dashboard_Verify that the amount entered in the Allocated amounts column  is less than or equal to the cash received', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_049_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_049_Cash_Allocation'].amount);
    })

    await test.step("Verified that the when click on add/allocate option in the second sction after the policy search a confirmation message pops up", async () => {
        await cashAllocationPage.verifyAlertErrorPopup();
    })

});

test('NXGF-TC-3369: TC_053_Cash Allocation Dashboard_Verify that the user is able to remove the previously selected policy using the Remove button', async ({ page }) => {

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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Policy Allocation  button", async () => {
        await cashAllocationPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationPage.enterPolicyRef(CashAllocationPageData['TC_053_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationPage.clickOnManualAllocationSearchButton();
    })

    await test.step("User Ener Amount", async () => {
        await cashAllocationPage.enterAmount(CashAllocationPageData['TC_053_Cash_Allocation'].amount);
    })

    await test.step("User Click on Add policy Button", async () => {
        await cashAllocationPage.clickOnAddPolicyButton();
    })

    await test.step("User Click on OK Button", async () => {
        await cashAllocationPage.clickOnOkButton();
    })

    await test.step("User Click on delete Button", async () => {
        await cashAllocationPage.clickOnDeleteButton();
    })

    await test.step("User Click on OK Button", async () => {
        await cashAllocationPage.clickOnOkButton();
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
        await cashAllocationPage.clickOnSearchButton();
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
        await cashAllocationPage.clickOnSearchButton();
    })

    await test.step("User Click on Clear All button", async () => {
        await cashAllocationPage.clickOnClearAllButton();
    })

    await test.step("Verified that a confirmation messae popup is displayed Are you sure do you want to cancel the allocation?", async () => {
        await cashAllocationPage.verifyPopupMessasge(CashAllocationPageData['TC_055_Cash_Allocation'].popupMessage);
    })
});

