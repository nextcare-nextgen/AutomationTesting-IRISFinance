import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { FinancialOrganizationsPage } from '../../page-objects/financialOrganizations-pages/financialOrganizations-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
import { FxRatesPage } from '../../page-objects/fx-rates-pages/fx-rates-page.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const FinancialOrganizationsData = require(`../../testdata/${process.env.ENV || 'eu'}/financialOrganizations.json`) as Record<string, any>;


test('NXGF-TC-1647: TC_000_Login_Access_Verify that the user is able to access the IRIS Finance portal', async ({ page }) => {

    await test.step("--------------Start the Financial Organization Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })
});

test('NXGF-TC-1648: TC_001_Login_Access_Verify that the user is able to enter the username and password ', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })
});

test('NXGF-TC-1650: TC_002_Login_Access_Verify that user is able to click on sign in button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })
});

test('NXGF-TC-1652: TC_003_Verify that the user is able to click on the Remember me checkbox', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.enterLoginDetails(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })
});

test('NXGF-TC-1658: TC_010_Verify that the user is able to see login UI', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("Verified that the user is able to see login UI", async () => {
        await loginPage.verifyLoginUI();
    })

    await test.step("Verified that the user is able to see login Page title", async () => {
        await loginPage.verifyPageTitle(FinancialOrganizationsData['TC_010'].pagetitle);
    })
});

test('NXGF-TC-1660: TC_011_Verify that the main menu option is clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

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
});

test('NXGF-TC-1662: TC_012_Verify that the user is able to land on the dashboard after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Set the organization to Allianz partners 2024", async () => {
        await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await financialOrganizationsPage.verifyDashboardText(FinancialOrganizationsData['TC_012'].dashboardText);
    })
});

test('NXGF-TC-1664: TC_013_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);


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

    await test.step("Verified that the User is able to See Organization Shortcut Button", async () => {
        await financialOrganizationsPage.verifyFinancialOrganizationShrtcutButton();
    })
});

test('NXGF-TC-1666: TC_014_Verify that all the shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);


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

    await test.step("Verified that the user is able to see shortcut menu buttons in the main menu page", async () => {
        await financialOrganizationsPage.verifyAllShrtcutButtonIsClickable();
    })
});

test('NXGF-TC-1668: TC_028_Verify that the user is able to view the Organization shortcut icon in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);


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

    await test.step("Verified that the user is able to view the Organization shortcut icon in the main menu page", async () => {
        await financialOrganizationsPage.verifyFinancialOrganizationShrtcutButton();
    })
});

test('NXGF-TC-1670: TC_029_Verify that the user is able to click on the Organization icon', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Verified that the user is able to click on the Organization icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })
});

test('NXGF-TC-1672: TC_030_Verift that the user is redirected to the Organizations page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to navigate to the Organization screen", async () => {
        await financialOrganizationsPage.verifyOrganizationText(FinancialOrganizationsData['TC_030'].organizationText)
    })
});

test('NXGF-TC-1674: TC_031_Verify that the user is able to view the "Organizations" title in bold', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to view the 'Organizations' title in bold", async () => {
        await financialOrganizationsPage.verifyTitleinBold();
    })
});


test('NXGF-TC-1676: TC_032_Verify the that user is able to see two search fields Search by Organization "Name" and Search by Organization "Code"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verify the that user is able to see two search fields Search by Organization 'Name' and Search by Organization 'Code'", async () => {
        await financialOrganizationsPage.verifyOrgNameAndOrgCodeField();
    })
});

test('NXGF-TC-1678: TC_033_Verify that the search icon is present beside both the search fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the search icon is present beside both the search fields", async () => {
        await financialOrganizationsPage.verifySearchField();
    })
});

test('NXGF-TC-1680: TC_034_Verify that the user is able to enter the organization code in the Search by Organization "Code" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_034'].organizationCode)
    })
});

test('NXGF-TC-1682: TC_035_Verify that the user is able to enter the organization code (alphanumeric) in the "Search by Organization code" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_035'].organizationCode)
    })
});

test('NXGF-TC-1684: TC_036_Verify that the user is able to enter the organization code in the "Search by Organization code" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_036'].organizationCode)
    })
});

test('NXGF-TC-1687: TC_037_Verify that the user is able to click on search icon after entering the organization code in Search by Organization "Code" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_037'].organizationCode)
    })

    await test.step("Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verified Searched Organization Code from Grid", async () => {
        await financialOrganizationsPage.verifyOrganizationCodeFromGrid();
    })
});

test('NXGF-TC-1689: TC_038_Verify that the user is able to view the results after the search with Organization code', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_038'].organizationCode)
    })

    await test.step("Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verified Searched Organization Code from Grid", async () => {
        await financialOrganizationsPage.verifyOrganizationCodeFromGrid();
    })
});

test('NXGF-TC-1691: TC_039_Verify that the user is able to view the mentioned values in the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_039'].organizationCode)
    })

    await test.step("Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verified Searched Organization Code from Grid", async () => {
        await financialOrganizationsPage.verifyOrganizationCodeFromGrid();
    })
});

test('NXGF-TC-1692: TC_040_Verify that the user is able to see the coloring indexes below the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to see the coloring indexes below the grid", async () => {
        await financialOrganizationsPage.verifyIndexStatus();
    })
});

test('NXGF-TC-1694: TC_041_Verify that the user is able to view all the organizations listed irrespective of the status', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization code in the Search by Organization 'Code' field", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_041'].organizationCode)
    })

    await test.step("Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verified that the user is able to view all the organizations listed irrespective of the status", async () => {
        await financialOrganizationsPage.verifyActiveIndexFromGrid();
    })
});

test('NXGF-TC-1696,NXGF-TC-1698: TC_042_Verify that the user is able to enter the organization name in the Search by Organization "Name" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to view all the organizations listed irrespective of the status", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_042'].organizationName);
    })
});

test('NXGF-TC-1700: TC_045_Verify that the user is able to view the Records per page for the search results and select the number of rows from the dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that Records per page: is displayed", async () => {
        await financialOrganizationsPage.verifyRecordsPerPageText(FinancialOrganizationsData['TC_045'].expectedText);
    })

    await test.step("Click On Records per page dropdown", async () => {
        await financialOrganizationsPage.clickOnRecordsPerPageDropdown();
    })
});

test('NXGF-TC-1702: TC_046_Verify that the user is able to view the same search results for both the search criteria', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_046'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_046'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verify that the user is able to view the same search results for both the search criteria", async () => {
        await financialOrganizationsPage.verifyOrgNameAndCodeFromGrid();
    })
});

test('NXGF-TC-1704: TC_047_Verify that the user is able to see the stop date column for active and inactive organizations', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Active index", async () => {
        await financialOrganizationsPage.clickOnActiveIndex();
    })

    await test.step("Verify that the user is able to view the same search results for both the search criteria", async () => {
        await financialOrganizationsPage.verifyStopDateColumnNotDisplayed(FinancialOrganizationsData['TC_047'].columnName);
    })
});

test('NXGF-TC-1706: TC_048_Verify that the user is able to view the start date for all the search results irrespective of their status', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_048'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_048'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verified that the user is able to view the start date for all the search results irrespective of their statusa", async () => {
        await financialOrganizationsPage.verifyStartDateFromGrid();
    })
});

test('NXGF-TC-1708: TC_049_Verify that the user is able to view the "Edit Organization" button after the search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_049'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_049'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verify that the user is able to view the 'Edit Organization' button after the search", async () => {
        await financialOrganizationsPage.VerifyEditOrganizationButton();
    })
});

test('NXGF-TC-1710,NXGF-TC-1712: TC_050_Verify that the user is able to click on "edit organization" button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_050'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_050'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verify that the user is able to view the 'Edit Organization' button after the search", async () => {
        await financialOrganizationsPage.VerifyEditOrganizationButton();
    })
});

test('NXGF-TC-1714: TC_052_Verify that the user is able to edit any active organization', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_050'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_050'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Click on Edit Organization", async () => {
        await financialOrganizationsPage.clickOnEditOrganizationButton();
    })
});

test('NXGF-TC-1716: TC_053_Verify that the user is able to click on Stop Organization button to inactivate the selected Organization', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await financialOrganizationsPage.enterOrganizationName(FinancialOrganizationsData['TC_050'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await financialOrganizationsPage.enterOrganizationCode(FinancialOrganizationsData['TC_050'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await financialOrganizationsPage.clickOnSearch();
    })

    await test.step("Verified Stop Organization button is clickable", async () => {
        await financialOrganizationsPage.VerifyStopOrganizationButtonIsClickable();
    })
});

test('NXGF-TC-1718: TC_056_Verify that the user is able click on the filter by icon and select any of the two status active or inactive', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able click on the filter by icon and select any of the two status active or inactive'", async () => {
        await financialOrganizationsPage.clickOnActiveFilter();
    })

    await test.step("Verified that the user is able click on the filter by icon and select any of the two status active or inactive'", async () => {
        await financialOrganizationsPage.clickOnStoppedFilter();
    })
});

test('NXGF-TC-1720: TC_057_Verify that the user is able to view the corresponding results on the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the filter by Active icon", async () => {
        await financialOrganizationsPage.clickOnActiveFilter();
    })

    await test.step("Verified that the user is able to view the corresponding results on the grid", async () => {
        await financialOrganizationsPage.verifyActiveAccountsFromGrid();
    })

    await test.step("Click on the filter by Active icon", async () => {
        await financialOrganizationsPage.clickOnStoppedFilter();
    })

    await test.step("Verified that the user is able to view the corresponding results on the grid", async () => {
        await financialOrganizationsPage.verifyStoppedAccountsFromGrid();
    })
});

test('NXGF-TC-1722: TC_058_Verify that the user is able to view all the results when no fitler is applied', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to view all the results when no fitler is applied", async () => {
        await financialOrganizationsPage.verifyAccountsFromGrid();
    })
});

test('NXGF-TC-1724: TC_059_Verify that the user is able to view the Add Organization button (+) in the organization page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to view the Add Organization button (+) in the organization page", async () => {
        await financialOrganizationsPage.VerifyADDOrganizationButton();
    })
});

test('NXGF-TC-1726: TC_060_Verify that the user is able to click on the Add Organization button (+)', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the Add Organization button (+)", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })
});

test('NXGF-TC-1728: TC_061_Verify that the user is redirected to a new popup window once clicked on add button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the Add Organization button (+)", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to click on the Add Organization button (+)", async () => {
        await financialOrganizationsPage.verifyAddOrgPopUpWindow(FinancialOrganizationsData['TC_061'].text);
    })
});

test('NXGF-TC-1730: TC_062_Verify that the user is able to view the mentioned details in the new window for creating a new organization', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the Add Organization button (+)", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to click on the Add Organization button (+)", async () => {
        await financialOrganizationsPage.verifyAddOrgPopUpWindowFields();
    })
});


test('NXGF-TC-1732: TC_063_Verify that the user is able to view the asterisk (*) for all the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the Add Organization button (+)", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to view the all the mandatory fields", async () => {
        await financialOrganizationsPage.verifyAddOrgPopUpWindowManadatoryFields();
    })
});


test('NXGF-TC-1734: TC_064_Verify that the user is able to enter the Organization name in the Organization name field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the Organization Name in the Organization Name field", async () => {
        await financialOrganizationsPage.enterAddOrgName(FinancialOrganizationsData['TC_064'].name);
    })
});


test('NXGF-TC-1736: TC_065_Verify that the user is able to enter the Organization Code in the Organization Code field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the Organization Code in the Organization Code field", async () => {
        await financialOrganizationsPage.enterAddOrgCode(FinancialOrganizationsData['TC_065'].orgCode);
    })
});

test('NXGF-TC-1738: TC_066_Verify that the user is able to enter the CV Currency1 in the CV Currency1 field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the CV Currency1 in the CV Currency1 field", async () => {
        await financialOrganizationsPage.selectCV1(FinancialOrganizationsData['TC_066'].cv1);
    })
});

test('NXGF-TC-1740: TC_067_Verify that the user is able to enter the CV Currency2 in CV Currency2 field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the CV Currency2 in CV Currency2 field", async () => {
        await financialOrganizationsPage.selectCV2(FinancialOrganizationsData['TC_067'].cv2);
    })
});

test('NXGF-TC-1742: TC_068_Verify that the user is able to enter the Start date in the Start date field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the Start date in the Start date field", async () => {
        await financialOrganizationsPage.enterStartDate();
    })
});

test('NXGF-TC-1744: TC_069_Verify that the user is able to click on Create after entering the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Enter Name ", async () => {
        await financialOrganizationsPage.enterName(FinancialOrganizationsData['TC_069'].name);
    })

    await test.step("Enter Code", async () => {
        await financialOrganizationsPage.enterCode(FinancialOrganizationsData['TC_069'].code);
    })

    await test.step("Select Start Date", async () => {
        await financialOrganizationsPage.enterStartDate();
    })

    await test.step("Select CV1", async () => {
        await financialOrganizationsPage.selectCV1(FinancialOrganizationsData['TC_069'].cv1);
    })

    await test.step("Select CV2", async () => {
        await financialOrganizationsPage.selectCV2(FinancialOrganizationsData['TC_069'].cv2);
    })

    await test.step("Verified that the user is able to click on Create after entering the mandatory fields", async () => {
        await financialOrganizationsPage.VerifyCreateButtonIsClickable();
    })
});

test('NXGF-TC-1746: TC_070_Verify that the user is able to click on create without entering the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the create button is disable", async () => {
        await financialOrganizationsPage.VerifyCreateButtonIsdisable();
    })
});

test('NXGF-TC-1748,NXGF-TC-1750: TC_071_Verify that the user is able to click on close option to exit the form creation', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to click on close option to exit the form creation", async () => {
        await financialOrganizationsPage.clickOnCloseButton();
    })
});

test('NXGF-TC-1752: TC_074_Verify that the start date selector displays current month with system date selected', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the start date selector displays current month with system date selected", async () => {
        await financialOrganizationsPage.verifyCurrentDateFromCalender();
    })
});

test('NXGF-TC-1754: TC_076_Verify that in the start date selector Weeks start with Monday and ends on Sunday', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the start date selector displays current month with system date selected", async () => {
        await financialOrganizationsPage.verifyDaysFromCalender();
    })
});

test('NXGF-TC-1756: TC_077_Verify that the start date selector has Arrows on top (< , >) to navigate from one month to the other', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the start date selector has Arrows on top (< , >) to navigate from one month to the other", async () => {
        await financialOrganizationsPage.verifyArrowsFromCalender();
    })
});

test('NXGF-TC-1758: TC_078_Verify that the user is able to enter future date in start date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verify that the user is able to enter future date in start date", async () => {
        await financialOrganizationsPage.selectFutureDate();
    })
});

test('NXGF-TC-1760: TC_079_Verify that the user is able to enter the old date from start date field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the old date from start date field", async () => {
        await financialOrganizationsPage.selectOldDate();
    })
});

test('NXGF-TC-1762: TC_080_Verify that the user is able to enter the ACTS code', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter the old date from start date field", async () => {
        await financialOrganizationsPage.enterACTSCode(FinancialOrganizationsData['TC_080'].ACTScode);
    })
});

test('NXGF-TC-1764: TC_081_Verify that the user is able to enter Localization in Localization field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on the Add Organization Button", async () => {
        await financialOrganizationsPage.clickOnADDOrganizationButton();
    })

    await test.step("Verified that the user is able to enter Localization in Localization field", async () => {
        await financialOrganizationsPage.enterLocalization(FinancialOrganizationsData['TC_081'].localization);
    })
});

test('NXGF-TC-1766: TC_082_Verify that the Edit Organization Button is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the Edit Organization Button is displayed", async () => {
        await financialOrganizationsPage.VerifyEditOrganizationsButtons();
    })
});

test('NXGF-TC-1768: TC_083_Verify that the after click on details button Financials information and Organization card type is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on Edit Organization button", async () => {
        await financialOrganizationsPage.clickonEditOrganizationButton();
    })

    await test.step("Verified that the after click on details button Financials information and Organization card type is displayed", async () => {
        await financialOrganizationsPage.verifyFinancialInfo(FinancialOrganizationsData['TC_083'].text);
    })

    await test.step("Verified that the after click on details button Financials information and Organization card type is displayed", async () => {
        await financialOrganizationsPage.verifyOrgCardType(FinancialOrganizationsData['TC_083'].cardTypes);
    })
});

test('NXGF-TC-1770: TC_084_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Verified that the Search bar displayed in main menu screen", async () => {
        await financialOrganizationsPage.verifySearchBar();
    })
});

test('NXGF-TC-1772: TC_085_Verify that the User is able to Search the shortcut menu from search bar ', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Verified that the User is able to enter and Search the shortcut menu from search bar", async () => {
        await financialOrganizationsPage.enterinSearchbar(FinancialOrganizationsData['TC_085'].value);
    })
});

test('NXGF-TC-8016: TC_086_Financial_Organization_ Implement automation to validate the sorting behavior of the relevant button/component.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Click on the Organization shortcut icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Validate sorting functionality of 'Account Name' column", async () => {
        await financialOrganizationsPage.validateSortingForColumn('Name');
    })
});


