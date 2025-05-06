import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { CashAllocationUnderPaymentsPage } from '../../page-objects/cashAllocation-Underpayments-pages/cashAllocationUnderpayments-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const CashAllocationUnderPaymentsPageData = require(`../../testdata/${process.env.ENV || 'eu'}/cashAllocationUnderpayments.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-2973: TC_001_Underpayment_Verify that a received payment with a status of cleared-unallocated', async ({ page }) => {

    await test.step("--------------Start the Cash Alloaction- underpayments Testclass----------------------", async () => {
        console.log("--------------Start the Cash Alloaction- underpayments Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationUnderPaymentsPage: CashAllocationUnderPaymentsPage = new CashAllocationUnderPaymentsPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnCashAllocationShrtcutsButton();

    })
    await test.step("Verified that a received payment with a status of cleared-unallocated", async () => {
        await cashAllocationUnderPaymentsPage.verifyUnAllocatedData();
    })
});
/*
test('NXGF-TC-2974,NXGF-TC-2975: TC_002_Underpayment_Verify that the payment amount is less than the premium due for the policy', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationUnderPaymentsPage: CashAllocationUnderPaymentsPage = new CashAllocationUnderPaymentsPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("User Click on Filter Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnFilterButton();
    })

    await test.step("User enter Payment Refernce", async () => {
        await cashAllocationUnderPaymentsPage.enterPaymentRef(CashAllocationUnderPaymentsPageData['TC_002_Cash_Allocation'].paymentRef);
    })

    await test.step("User Click on Apply Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Policy Allocation Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationUnderPaymentsPage.enterPolicyRef(CashAllocationUnderPaymentsPageData['TC_002_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnSearchButtonButton();
    })

    await test.step("User verified amount button", async () => {
        //await cashAllocationUnderPaymentsPage.verifyAmount();
    })
});

test('NXGF-TC-2976,NXGF-TC-2981: TC_004_one to one_Verify that a received payment has been allocated to a policy', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationUnderPaymentsPage: CashAllocationUnderPaymentsPage = new CashAllocationUnderPaymentsPage(page);

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

    await test.step("User Click on Cash Allocation Shortcut Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnCashAllocationShrtcutsButton();
    })

    await test.step("User Click on Filter Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnFilterButton();
    })

    await test.step("User enter Payment Refernce", async () => {
        await cashAllocationUnderPaymentsPage.enterPaymentRef(CashAllocationUnderPaymentsPageData['TC_004_Cash_Allocation'].paymentRef);
    })

    await test.step("User Click on Apply Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on Policy Allocation Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnpolicyAllocationButton();
    })

    await test.step("User able to entert he policy details using the policy refernce", async () => {
        await cashAllocationUnderPaymentsPage.enterPolicyRef(CashAllocationUnderPaymentsPageData['TC_004_Cash_Allocation'].policyRef);
    })

    await test.step("User Click on Search button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnSearchButtonButton();
    })

    await test.step("User verified amount button", async () => {
        await cashAllocationUnderPaymentsPage.enterUnallocatedAmount(CashAllocationUnderPaymentsPageData['TC_004_Cash_Allocation'].unallocatedAmount);
    })

    await test.step("User Click on Add Policy Allocation Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnAddpolicyAllocationButton();
    })

    await test.step("User Click on OK Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnOKButtonButton();
    })

    await test.step("User Verify Aloocate button is Clickable", async () => {
        await cashAllocationUnderPaymentsPage.verifyAllocateButtonIsClickable();
    })
});
*/
test('NXGF-TC-2986: TC_014_Underpayment_Verify a received payment has been allocated to a policy where commission is applicable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cashAllocationUnderPaymentsPage: CashAllocationUnderPaymentsPage = new CashAllocationUnderPaymentsPage(page);

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

    await test.step("User Click on Policies Shortcut Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User enter From Date Refernce", async () => {
        await cashAllocationUnderPaymentsPage.enterFromDate(CashAllocationUnderPaymentsPageData['TC_014_Cash_Allocation'].fromDate);
    })

    await test.step("User Click on Filter Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnFilterButton();
    })

    await test.step("User enter Payment Refernce", async () => {
        await cashAllocationUnderPaymentsPage.enterPolicyREF(CashAllocationUnderPaymentsPageData['TC_014_Cash_Allocation'].policyREf);
    })

    await test.step("User Click on Apply Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnApplyButton();
    })

    await test.step("User Click on Search Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnSearchButtonButton();
    })

    await test.step("User Click on View Policy Journal Voucher Button", async () => {
        await cashAllocationUnderPaymentsPage.clickOnViewPolicyJournalVoucherButton();
    })

    await test.step("User Click on Voucher Type policy where commission is applicable ", async () => {
        await cashAllocationUnderPaymentsPage.clickOnVoucherType(CashAllocationUnderPaymentsPageData['TC_014_Cash_Allocation'].voucherType);
    })

    await test.step("User Verify Received Payment amounts", async () => {
        await cashAllocationUnderPaymentsPage.verifyRecievedPayment();
    })
});
