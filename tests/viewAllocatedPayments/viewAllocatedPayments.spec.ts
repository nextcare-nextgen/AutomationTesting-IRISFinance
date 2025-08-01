import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { ViewAllocatedPaymentsPage } from '../../page-objects/viewAllocatedPayments-pages/viewAllocatedPayments-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const ViewAllocatedPaymentsPageData = require(`../../testdata/${process.env.ENV || 'eu'}/viewAllocatedPayments.json`) as Record<string, any>;


test('NXGF-TC-2899: TC_010_View allocated payments_Verify that the user is able to search the previoulsy allocated payments with the default values for payment type, payment status, payment method', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("User Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified that the user is able to search with default payment status", async () => {
        await viewAllocatedPaymentsPage.verifyPaymentStatusFromGrid(ViewAllocatedPaymentsPageData['TC_002_Cash_Allocation'].paymentStatus);
    })
});

test('NXGF-TC-2900,NXGF-TC-2901: TC_011_View allocated payments_Verify that the user is able to search with the secondary search from date, to date, Payment reference, From and To amount number, policy reference, policy holder name and these should not be the mandatory search fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("User Enter Payment Reference", async () => {
        await viewAllocatedPaymentsPage.enterPaymentReference(ViewAllocatedPaymentsPageData['TC_011_Cash_Allocation'].paymentRef);
    })

    await test.step("User Enter From amount", async () => {
        await viewAllocatedPaymentsPage.enterFromAmount(ViewAllocatedPaymentsPageData['TC_011_Cash_Allocation'].fromAmount);
    })

    await test.step("User Enter To amount", async () => {
        await viewAllocatedPaymentsPage.enterToAmount(ViewAllocatedPaymentsPageData['TC_011_Cash_Allocation'].toAmount);
    })

    await test.step("User Enter Policy Reference", async () => {
        await viewAllocatedPaymentsPage.enterPolicyRef(ViewAllocatedPaymentsPageData['TC_011_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified that the user is able to search with default payment status", async () => {
        await viewAllocatedPaymentsPage.verifyPaymentRefFromGrid(ViewAllocatedPaymentsPageData['TC_011_Cash_Allocation'].paymentRef);
    })
});

test('NXGF-TC-2902: TC_013_View allocated payments_Verify that the user is able to search the previoulsy allocated payments with Payment reference', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_013_Cash_Allocation'].paymentStatus);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("User Enter Payment Reference", async () => {
        await viewAllocatedPaymentsPage.enterPaymentReference(ViewAllocatedPaymentsPageData['TC_013_Cash_Allocation'].paymentRef);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verified that the user is able to search with default payment status", async () => {
        await viewAllocatedPaymentsPage.verifyPaymentRefFromGrid(ViewAllocatedPaymentsPageData['TC_013_Cash_Allocation'].paymentRef);
    })
});

test('NXGF-TC-2903: TC_014_View allocated payments_Verify that the user is able to search the previoulsy allocated payments with Payment amount', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_014_Cash_Allocation'].paymentStatus);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("User Enter From amount", async () => {
        await viewAllocatedPaymentsPage.enterFromAmount(ViewAllocatedPaymentsPageData['TC_014_Cash_Allocation'].fromAmount);
    })

    await test.step("User Enter To amount", async () => {
        await viewAllocatedPaymentsPage.enterToAmount(ViewAllocatedPaymentsPageData['TC_014_Cash_Allocation'].toAmount);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verify\ied that the user is able to search the previoulsy allocated payments with Payment amount", async () => {
        await viewAllocatedPaymentsPage.verifyFromAndToAmountFromGrid(ViewAllocatedPaymentsPageData['TC_014_Cash_Allocation'].toAmount);
    })
});

test('NXGF-TC-2904: TC_015_View allocated payments_Verify that the user is able to search the previoulsy allocated payments with Policy reference', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_015_Cash_Allocation'].paymentStatus);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("User Enter From amount", async () => {
        await viewAllocatedPaymentsPage.enterPolicyRef(ViewAllocatedPaymentsPageData['TC_015_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("Verify\ied that the user is able to search the previoulsy allocated payments with Payment amount", async () => {
        await viewAllocatedPaymentsPage.verifyPolicyRefFromGrid(ViewAllocatedPaymentsPageData['TC_015_Cash_Allocation'].policyRef);
    })
});

test('NXGF-TC-2906: TC_017_View allocated payments_Verify that the user clicks on the Reset button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Verified that the user clicks on the Reset button", async () => {
        await viewAllocatedPaymentsPage.clickOnResetButton();
    })
});

test('NXGF-TC-2907: TC_018_View allocated payments_Verify that all the search fields are cleared', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_018_Cash_Allocation'].paymentStatus);
    })

    await test.step("User Click on Reset button", async () => {
        await viewAllocatedPaymentsPage.clickOnResetButton();
    })

    await test.step("Verified that all the search fields are cleared", async () => {
        await viewAllocatedPaymentsPage.verifyAfterRestPaymentStatus(ViewAllocatedPaymentsPageData['TC_018_Cash_Allocation'].afterResetpaymentStatus);
    })
});

test('NXGF-TC-2908,NXGF-TC-2909: TC_019_View allocated payments_Verify that the user is able to view all the details of Allocated payments', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_019_Cash_Allocation'].paymentStatus);
    })

    await test.step("Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("Select Payment Reference", async () => {
        await viewAllocatedPaymentsPage.enterPaymentReference(ViewAllocatedPaymentsPageData['TC_019_Cash_Allocation'].paymentReference);
    })

    await test.step("Click on Apply button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("User Click on Details button", async () => {
        await viewAllocatedPaymentsPage.clickOnDetailsButton();
    })

    await test.step("User Select Policy Ref from dropdown option", async () => {
        await viewAllocatedPaymentsPage.selectPolicyRef(ViewAllocatedPaymentsPageData['TC_019_Cash_Allocation'].policyReference);
    })

    await test.step("Verified that the user is able to view all the details of Allocated payments", async () => {
        await viewAllocatedPaymentsPage.verifyPremiumAndTAxDuesGrid();
    })
});

test('NXGF-TC-2910: TC_021_View allocated payments_Vreify that the policy reference shows the payment  / part of the payment has been allocated against', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_021_Cash_Allocation'].paymentStatus);
    })

    await test.step("User Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();

    })

    await test.step("Verify\ied that the user is able to search the previoulsy allocated payments with Payment amount", async () => {
        await viewAllocatedPaymentsPage.verifyPaymentStatusFromGrid(ViewAllocatedPaymentsPageData['TC_021_Cash_Allocation'].paymentStatus);
    })
});

test('NXGF-TC-2911: TC_022_View allocated payments_Verify that the Premium and Tax amount is the Amount of the payment that has been allocated against a specific premium (& tax) due installment', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_020_Cash_Allocation'].paymentStatus);
    })

    await test.step("Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("Select Payment Reference", async () => {
        await viewAllocatedPaymentsPage.enterPaymentReference(ViewAllocatedPaymentsPageData['TC_020_Cash_Allocation'].paymentReference);
    })

    await test.step("Click on Apply button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("User Click on Details button", async () => {
        await viewAllocatedPaymentsPage.clickOnDetailsButton();
    })

    await test.step("User Select Policy Ref from dropdown option", async () => {
        await viewAllocatedPaymentsPage.selectPolicyRef(ViewAllocatedPaymentsPageData['TC_020_Cash_Allocation'].policyReference);
    })

    await test.step("Verified that the Premium and Tax amount ", async () => {
        await viewAllocatedPaymentsPage.verifyPremiumandTaxAmount(ViewAllocatedPaymentsPageData['TC_020_Cash_Allocation'].premiumAndTaxAmount);
    })
});

test('NXGF-TC-2912: TC_023_View allocated payments_Verify that the user is able to view the Due date of the specific premium (& tax) due installment', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_023_Cash_Allocation'].paymentStatus);
    })

    await test.step("Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("Select Payment Reference", async () => {
        await viewAllocatedPaymentsPage.enterPaymentReference(ViewAllocatedPaymentsPageData['TC_023_Cash_Allocation'].paymentReference);
    })

    await test.step("Click on Apply button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("User Click on Details button", async () => {
        await viewAllocatedPaymentsPage.clickOnDetailsButton();
    })

    await test.step("User Select Policy Ref from dropdown option", async () => {
        await viewAllocatedPaymentsPage.selectPolicyRef(ViewAllocatedPaymentsPageData['TC_023_Cash_Allocation'].policyReference);
    })

    await test.step("Verified that the user is able to view the Due date of the specific premium (& tax) due installment", async () => {
        await viewAllocatedPaymentsPage.verifyDueDate();
    })
});

test('NXGF-TC-2913: TC_024_View allocated payments_Verify that the user is able to view the status Paid/ partially paid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Cash Allocation Shortcut button", async () => {
        await viewAllocatedPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("Cleared Payment Status Type", async () => {
        await viewAllocatedPaymentsPage.clickOnClearedStatus();
    })

    await test.step("Select Payment Method", async () => {
        await viewAllocatedPaymentsPage.selectPaymentStatus(ViewAllocatedPaymentsPageData['TC_024_Cash_Allocation'].paymentStatus);
    })

    await test.step("Click on Filter button", async () => {
        await viewAllocatedPaymentsPage.clickOnFilterButton();
    })

    await test.step("Select Payment Reference", async () => {
        await viewAllocatedPaymentsPage.enterPaymentReference(ViewAllocatedPaymentsPageData['TC_024_Cash_Allocation'].paymentReference);
    })

    await test.step("Click on Apply button", async () => {
        await viewAllocatedPaymentsPage.clickOnApplyButton();
    })

    await test.step("Click on Search button", async () => {
        await viewAllocatedPaymentsPage.clickOnSearchButton();
    })

    await test.step("User Click on Details button", async () => {
        await viewAllocatedPaymentsPage.clickOnDetailsButton();
    })

    await test.step("User Select Policy Ref from dropdown option", async () => {
        await viewAllocatedPaymentsPage.selectPolicyRef(ViewAllocatedPaymentsPageData['TC_024_Cash_Allocation'].policyReference);
    })

    await test.step("Verified that the user is able to view the Due date of the specific premium (& tax) due installment", async () => {
        await viewAllocatedPaymentsPage.verifyStatus(ViewAllocatedPaymentsPageData['TC_024_Cash_Allocation'].status);
    })
});

test('NXGF-TC-2914: TC_025_View allocated payments_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const viewAllocatedPaymentsPage: ViewAllocatedPaymentsPage = new ViewAllocatedPaymentsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access1'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Verified that the Search bar displayed in main menu screen", async () => {
        await viewAllocatedPaymentsPage.verifySearchBar();
    })

});
