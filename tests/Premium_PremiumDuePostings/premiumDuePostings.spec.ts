import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { premiumDuePosting } from '../../page-objects/Premium_PremiumduePostings/premiumDuePosting-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const policyData = require(`../../testdata/${process.env.ENV || 'eu'}/premiumDuePosting.json`) as Record<string, any>;


test('NXGF-TC-7460: TC_03_410_LT_reverse premium postings_Verify that the reverse premium postings are posted in IRIS Finance', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0001_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Reverse Premium Postings", async () => {
        await PremiumDuePosting.clickOnReversePremiumPostings();
    })

    await test.step("Verify Account, Amount detail are displaying", async () => {
        await PremiumDuePosting.verifyReversePremiumPostingGrid();
    })
});

test('NXGF-TC-7461: TC_04_410_LT_reverse premium postings_LT_Verify that for reverse premium postings credit account is Suspense Receivable B2C', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0001_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Reverse Premium Postings", async () => {
        await PremiumDuePosting.clickOnReversePremiumPostings();
    })

    await test.step("Verify the Account name in the displayed grid", async () => {
        await PremiumDuePosting.verifyAccountName(policyData['TC_0001_PremiumDuePostings'].CreditAccountName, policyData['TC_0000_PremiumDuePostings'].creditAccountType);
    })
});

test('NXGF-TC-7462: TC_05_410_reverse premium postings_LT_Verify that for reverse premium postings the debit account is GWP negative premium', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0001_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Reverse Premium Postings", async () => {
        await PremiumDuePosting.clickOnReversePremiumPostings();
    })

    await test.step("Verify the Account name in the displayed grid", async () => {
        await PremiumDuePosting.verifyAccountName(policyData['TC_0001_PremiumDuePostings'].DebitAccountName,policyData['TC_0000_PremiumDuePostings'].debitAccountType);
    })
});

test('NXGF-TC-7463: TC_06_410_Partial Cancellation_LT_Verify that the Reverse premium and tax postings are posted after partial cancellation of the policy', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0002_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Reverse Tax Postings", async () => {
        await PremiumDuePosting.clickOnReverseTaxPosting();
    })

    await test.step("Verify the Reverse Tax Postings in the grid", async () => {
        await PremiumDuePosting.verifyReverseTaxPostingGrid();
    })
});

test('NXGF-TC-7464: TC_07_410_Partial Cancellation_LT_Verify that for Reverse premium and tax postings the debit account is "Suspense IPT', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0002_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Reverse Tax Postings", async () => {
        await PremiumDuePosting.clickOnReverseTaxPosting();
    })

    await test.step("Verify the Debit Account name dislayed in the grid", async () => {
        await PremiumDuePosting.verifyReversePostingAccountName(policyData['TC_0002_PremiumDuePostings'].debitAccountName, policyData['TC_0000_PremiumDuePostings'].debitAccountType);
    })
});

test('NXGF-TC-7465: TC_08_410_Partial Cancellation_LT_Verify that for Reverse premium and tax posting credit account is Suspense Receivable B2C', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0002_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Reverse Tax Postings", async () => {
        await PremiumDuePosting.clickOnReverseTaxPosting();
    })

    await test.step("Verify the credit Account name dislayed in the grid", async () => {
        await PremiumDuePosting.verifyReversePostingAccountName(policyData['TC_0002_PremiumDuePostings'].creditAccountName, policyData['TC_0000_PremiumDuePostings'].creditAccountType);
    })
    //code complete
    
});

test('NXGF-TC-7466: TC_09_410_Dependent removed_LT_Verify that the Positive Instalment postings are posted after removal dependent from the policy', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0003_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Positive Instalment postings", async () => {
        await PremiumDuePosting.clickOnPositiveInstallmentPosting();
    })

   await test.step("Verify Account, Amount detail are displaying", async () => {
        await PremiumDuePosting.verifyReversePremiumPostingGrid();
    })
    
});

test('NXGF-TC-7467: TC_10_410_Dependent removed_LT_Verify that for Reverse premium and tax postings the debit account is "Receivable from Policy Holders', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0003_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Positive Instalment postings", async () => {
        await PremiumDuePosting.clickOnPositiveInstallmentPosting();
    })

    await test.step("Verify the credit Account name dislayed in the grid", async () => {
        await PremiumDuePosting.verifyAccountName(policyData['TC_0003_PremiumDuePostings'].debitAccountName, policyData['TC_0000_PremiumDuePostings'].debitAccountType);
    })

});

test('NXGF-TC-7468: TC_11_410_Dependent removed_LT_Verify that for Reverse premium and tax posting credit account is "Suspense Receivables B2C', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0003_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Positive Instalment postings", async () => {
        await PremiumDuePosting.clickOnPositiveInstallmentPosting();
    })

    await test.step("Verify the credit Account name dislayed in the grid", async () => {
        await PremiumDuePosting.verifyAccountName(policyData['TC_0003_PremiumDuePostings'].creditAccountName, policyData['TC_0000_PremiumDuePostings'].creditAccountType);
    })

});

test('NXGF-TC-7470: TC_13_410_cancelled from inception_ST_Verify that the premium postings are posted in IRIS Finance', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0004_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Premium postings", async () => {
        await PremiumDuePosting.clickOnPremiumPosting();
    })

    await test.step("Verify Account, Amount detail are displaying", async () => {
        await PremiumDuePosting.verifyReversePremiumPostingGrid();
    })

});

test('NXGF-TC-7471: TC_14_410_cancelled from inception_ST_Verify that for premium posting debit account is Suspense Receivable B2C', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0004_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Premium postings", async () => {
        await PremiumDuePosting.clickOnPremiumPosting();
    })

    await test.step("Verify the credit Account name dislayed in the grid", async () => {
        await PremiumDuePosting.verifyReversePostingAccountName(policyData['TC_0004_PremiumDuePostings'].debitAccountName, policyData['TC_0000_PremiumDuePostings'].debitAccountType);
    })
});

test('NXGF-TC-7472: TC_15_410_cancelled from inception_ST_Verify that for premium posting the credit account is GWP positive premium', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0004_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Premium postings", async () => {
        await PremiumDuePosting.clickOnPremiumPosting();
    })

    await test.step("Verify the credit Account name dislayed in the grid", async () => {
        await PremiumDuePosting.verifyReversePostingAccountName(policyData['TC_0004_PremiumDuePostings'].creditAccountName, policyData['TC_0000_PremiumDuePostings'].creditAccountType);
    })
});

/*test('NXGF-TC-393: TC_001_Long term_back_Verify that a long term (backdated) policy is created and validated on the same day', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const PremiumDuePosting: premiumDuePosting = new premiumDuePosting(page);

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

    await test.step("User click on Policies Menu Icon", async () => {
        await PremiumDuePosting.clickOnPolicyMenuIcon();
    })

    await test.step("Enter valid from date", async () => {
        await PremiumDuePosting.ProvideFromDate(policyData['TC_0000_PremiumDuePostings'].fromDate);
    })

    await test.step("Click on Filter button", async () => {
        await PremiumDuePosting.clickOnFilterButton(policyData['TC_0005_PremiumDuePostings'].policyRef);
    })

    await test.step("click on search button", async () => {
        await PremiumDuePosting.clickOnSearchButton();
    })

    await test.step("Click on policy journal voucher Icon", async () => {
        await PremiumDuePosting.clickOnViewPolicyJournalvoucher();
    })

    await test.step("Click on Premium postings", async () => {
        await PremiumDuePosting.clickOnPremiumPosting();
    })

});*/

