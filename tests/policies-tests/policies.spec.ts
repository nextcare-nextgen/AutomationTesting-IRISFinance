/*import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { PoliciesPage } from '../../page-objects/policies-pages/policies-page';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const policiesData = require(`../../testdata/${process.env.ENV || 'eu'}/policies.json`) as Record<string, any>;

test('NXGF-TC-1910: TC_000_Policies_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Policies Testclass----------------------", async () => {
        console.log("--------------Start the Policies Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("Verify Breadcrumbs Text", async () => {
        await policiesPage.verifyBreadCrumbsText(policiesData['TC_000_Policies'].breadcrumbsText);

    })

});

test('NXGF-TC-1911: TC_001_Policies_Verify that the user is able to navigate to main menu', async ({ page }) => {

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
    })

});

test('NXGF-TC-1912: TC_002_Policies_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("Verify Dashborad Text", async () => {
        await policiesPage.verifyDashboardText(policiesData['TC_002_Policies'].dashboardText)

    })


});

test('NXGF-TC-1913: TC_003_Policies_Verify that Policies shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

});

test('NXGF-TC-1914: TC_004_Policies_Verify that the user is able to see Policies shortcut menu button in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Verified that the User is able to See the Policies Shortcut button ", async () => {
        await policiesPage.verifyPolicisShortcutButton();
    })


});

test('NXGF-TC-1915: TC_005_Policies_Verify that the user is redirected to the Policies page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.verifyPoliciesText(policiesData['TC_005_Policies'].policiesText);
    })
});

test('NXGF-TC-1916: TC_006_Policies_Verify that the user is able to view the "Policies" title in bold', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();

    })

    await test.step("User Verify Text is in Bold", async () => {
        await policiesPage.verifyTextisinBold();

    })

});

test('NXGF-TC-1917: TC_007_Policies_Verify that the From date and To date is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_007_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Verify that From Date is Displayed", async () => {
        await policiesPage.verifyFromDate();
    })

    await test.step("User Verify that To Date is Displayed", async () => {
        await policiesPage.verifyToDate();
    })


});

test('NXGF-TC-1918: TC_008_Policies_Verify that the user is able to select From date and To date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })


    await test.step("User Enter From Date", async () => {
        await policiesPage.enterValidFromDate(policiesData['TC_008_Policies'].fromDate);
    })

    await test.step("User Enter To Date", async () => {
        await policiesPage.enterValidToDate(policiesData['TC_008_Policies'].toDate);
    })

    await test.step("Verify Dates from Grid", async () => {
        await policiesPage.verifyToDate();
    })

});

test('NXGF-TC-1919: TC_009_Policies_Verify that the Search filed is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Verify Search field is displayed", async () => {
        await policiesPage.verifySearch();
    })

});

test('NXGF-TC-1920: TC_010_Policies_Verify that the Advanced search filed is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Vrify Advanced Search is displayed", async () => {
        await policiesPage.verifyAdvancedSearch();
    })

});

test('NXGF-TC-1921: TC_011_Policies_Verify that the Reset filed is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Verify Reset button is displayed", async () => {
        await policiesPage.verifyReset();
    })

});

test('NXGF-TC-1922: TC_012_Policies_Verify that the all the column name should displayed in grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Verify All coumn name should displayed", async () => {
        await policiesPage.verifyGridColumn();
    })


});

test('NXGF-TC-1923: TC_013_Policies_Verify that the user is able to search with From date to To date and get record from the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })


    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Enter From Date", async () => {
        await policiesPage.enterValidFromDate(policiesData['TC_013_Policies'].fromDate);
    })

    await test.step("User Enter To Date", async () => {
        await policiesPage.enterValidToDate(policiesData['TC_013_Policies'].toDate);
    })

    await test.step("User Click on Search button", async () => {
        await policiesPage.clickOnSerach();
    })

    await test.step("User Click on Search button", async () => {
        await policiesPage.verifySearchResultFromDate();
    })


});

test('NXGF-TC-1924: TC_014_Policies_Verify that the Policy Reference filed is displayed in Advanced search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })


    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();

    })

    await test.step("User Verify Policy Refrence is displayed", async () => {
        await policiesPage.verifyPolicyReference();
    })

})

test('NXGF-TC-1925: TC_015_Policies_Verify that the Policy Id field is displayed in Advanced search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();

    })

    await test.step("User Verify Policy Id is displayed", async () => {
        await policiesPage.verifyPolicyId();
    })

})

test('NXGF-TC-1926: TC_016_Policies_Verify that the Policy Holder Name field is displayed in Advanced search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();

    })

    await test.step("User Verify Policy Holder Name is displayed", async () => {
        await policiesPage.verifyPolicyHolderName();
    })
})

test('NXGF-TC-1927: TC_017_Policies_Verify that the Apply button is displayed in Advanced search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();

    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();

    })
    await test.step("Verify Apply Button is displayed ", async () => {
        await policiesPage.verifyApplyButton();
    })

})

test('NXGF-TC-1928: TC_018_Policies_Verify that the user is able to click on Reset button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })


    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Reset Button", async () => {
        await policiesPage.clickOnReset();
    })

})

test('NXGF-TC-1929: TC_019_Policies_Verify that the user is able to Reset field and get the existing result', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Reset Button", async () => {
        await policiesPage.clickOnReset();
    })

})


test('NXGF-TC-1930: TC_020_Policies_Verify that the user is able to search with Policy reference', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_020_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();

    })

    await test.step("User enter Policy Reference", async () => {
        await policiesPage.enterPolicyReference(policiesData['TC_020_Policies'].policyRef);
    })

    await test.step("User Click on Apply button", async () => {
        await policiesPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await policiesPage.clickOnSerach();
    })

    await test.step("Verify the Policy Refrences from Grid", async () => {
        await policiesPage.verifySearchResultPolicyRef();
    })

})


test('NXGF-TC-1931: TC_021_Policies_Verify that the user is able to search with Policy ID', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_021_Policies'].organization);
    })


    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Enter Date", async () => {
        await policiesPage.enterValidFromDate(policiesData['TC_021_Policies'].date);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();
    })

    await test.step("User enter Policy ID", async () => {
        await policiesPage.enterPolicyId(policiesData['TC_021_Policies'].policyId);

    })

    await test.step("User Click on Apply button", async () => {
        await policiesPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await policiesPage.clickOnSerach();

    })

    await test.step("Verify the Policy ID from Grid", async () => {
        await policiesPage.verifySearchResultPolicyId();

    })

})

test('NXGF-TC-1932: TC_022_Policies_Verify that the user is able to search with Policy Holder name', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_021_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();

    })

    await test.step("User Click on Advanced Search Button", async () => {
        await policiesPage.clickOnAdvancedSerach();
    })

    await test.step("User enter Policy Holder Name", async () => {
        await policiesPage.enterPolicyHolderName(policiesData['TC_022_Policies'].policyHolderName);

    })

    await test.step("User Click on Apply button", async () => {
        await policiesPage.clickOnApplyButton();
    })

    await test.step("User Click on Search button", async () => {
        await policiesPage.clickOnSerach();
    })

    await test.step("Verify the Policy Holder Name from Grid", async () => {
        await policiesPage.verifySearchResultPolicyHolderName();
    })

})

test('NXGF-TC-1933: TC_023_Policies_Verify that the View Policy Journal ocher eye icon is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("Verify Policy Journal Voucher Eye Icon Displayed", async () => {
        await policiesPage.verifyPolicyJournalVochereyeiconButton();
    })

})

test('NXGF-TC-1934: TC_024_Policies_Verify that the user is able to redirected on Policy Journal Voucher screen after click on view policy journal voucher', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_024_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })
    
    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();

    })

})

test('NXGF-TC-1935: TC_025_Policies_Verify that the Policy Journal Voucher title is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Verify Policy Journal Voucher Title Displayed", async () => {
        await policiesPage.verifyPolicyJournalVocherTitle(policiesData['TC_025_Policies'].policyJournalVochereText);
    })

})

test('NXGF-TC-1936: TC_026_Policies_Verify that the two section are displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Verify Two sections are Displayed", async () => {
        await policiesPage.verifyPolicyJournalVoucherListSection();;
        await policiesPage.verifyPolicyJournalVoucherDtailsListSection();
    })

})

test('NXGF-TC-1937: TC_027_Policies_Verify that the all the column are displayed in first section', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Verify First sections Grid Column are Displayed", async () => {
        await policiesPage.verifyPolicyJournalVoucherFirstSectionGridColumn();
    })

})

test('NXGF-TC-1938: TC_028_Policies_Verify that the all the column are displayed in second section', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();

    })
    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Verify Second sections Grid Column are Displayed", async () => {
        await policiesPage.verifyPolicyJournalVoucherSecondSectionGridColumn();
    })

})

test('NXGF-TC-1939: TC_029_Policies_Verify that the user is able to click on voucher reference and the record data should get in second section of grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Click On Vocher Reference from Grid", async () => {
        await policiesPage.clickOnVoucherRef();
    })

    await test.step("Verify Account Records from Second grid", async () => {
        await policiesPage.verifyAccountRecordsFromSecondGrid();
    })

})

test('NXGF-TC-1940: TC_030_Policies_Verify that the Records per page title should displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_030_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Verify that the Records per page title is displayed", async () => {
        await policiesPage.verifyRecordsPerPageTitle();
    })

})

test('NXGF-TC-1941: TC_031_Policies_Verify that the user is able to view the item counts (10,15,20,30,50,100,250) in the drop down', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);


    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_030_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Click On Records per page dropdown", async () => {
        await policiesPage.clickOnRecordsPerPageDropdown();
    })

})


test('NXGF-TC-1942: TC_032_Policies_Verify that the user is able to view the item counts (10,15,20,30,50,100,250) in the drop down in Polices screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_030_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("Click On Records per page dropdown", async () => {
        await policiesPage.clickOnRecordsPerPageDropdown();
    })

})

test('NXGF-TC-1943: TC_033_Policies_Verify that the Records per page title should displayed in Polices screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_030_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("Verify that the Records per page title is displayed", async () => {
        await policiesPage.verifyRecordsPerPageTitle();
    })

})

test('NXGF-TC-1944: TC_034_Policies_Verify that the user is not able to select future date in From date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_034_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Enter From Date", async () => {
        await policiesPage.enterinValidFromDate(policiesData['TC_034_Policies'].fromDate, policiesData['TC_034_Policies'].errorText);
    })
})

test('NXGF-TC-1945: TC_035_Policies_Verify that Any journal created under a policy can be viewed when clicked on the detail button for the respective policy', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Click On Vocher Reference from Grid", async () => {
        await policiesPage.clickOnVoucherRef();

    })

    await test.step("Verify Account Records from Second grid", async () => {
        await policiesPage.verifyAccountRecordsFromSecondGrid();
    })

})


test('NXGF-TC-1946: TC_036_Policies_Verify that the values in Amount CV1 CV2 varies based on the selected currencies defined in the respective organization', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Click On Vocher Reference from Grid", async () => {
        await policiesPage.clickOnVoucherRef();
    })

    await test.step("Verify Currency Records from Second grid", async () => {
        await policiesPage.verifyCurrencyRecordsFromSecondGrid();
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Organzation Shortcut Button", async () => {
        await policiesPage.clickOnOrganizationShrtcutsButton();
    })

    await test.step("Click on Edit Organization", async () => {
        await policiesPage.clickOnEditOrganization();
    })

    await test.step("Verify Currency from Organziations", async () => {
        await policiesPage.verifyCurrencyFromOrganization();
    })

})


test('NXGF-TC-1947: TC_037_Policies_Verify that the Amount column displays the Total of debit amount column from grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const policiesPage: PoliciesPage = new PoliciesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User select oragnization", async () => {
        await dashboardPage.selectOrganization(policiesData['TC_025_Policies'].organization);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Policies Shortcut Button", async () => {
        await policiesPage.clickOnPoliciesShrtcutsButton();
    })

    await test.step("User Click On Policy Journal Voucher Eye Icon", async () => {
        await policiesPage.clickOnViewJournalVoucherEyeIcon();
    })

    await test.step("Click On Vocher Reference from Grid", async () => {
        await policiesPage.clickOnVoucherRef();
    })

    await test.step("Verify Currency Records from Second grid", async () => {
        await policiesPage.verifyAmountEqulestoCV();
    })

    await test.step("--------------End the Policies Testclass----------------------", async () => {
        console.log("--------------End the Policies Testclass----------------------")
    })
})*/