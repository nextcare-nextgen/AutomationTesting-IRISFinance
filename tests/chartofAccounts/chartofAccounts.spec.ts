import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { ChartOfAccountsPage } from '../../page-objects/chartofAccounts-pages/chartofAccounts-page';
import '../../page-objects/utilities-pages/global-setup.ts';
const ChartOfAccountsPageData = require(`../../testdata/${process.env.ENV || 'eu'}/chartofAccounts.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;


test('NXGF-TC-2097: TC_000_Chart of Accounts_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Charts of Accounts Testclass----------------------", async () => {
        console.log("--------------Start the Charts of Accounts Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut Button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify Breadcrumbs Text", async () => {
        await chartOfAccountsPage.verifyBreadCrumbsText(ChartOfAccountsPageData['TC_000_Chart_of_Accounts'].breadcrumbsText);
    })
});

test('NXGF-TC-2098: TC_001_Chart of Accounts_Verify that the user is able to navigate to main menu', async ({ page }) => {

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

test('NXGF-TC-2099: TC_002_Chart of Accounts_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await chartOfAccountsPage.verifyDashboardText(ChartOfAccountsPageData['TC_002_Chart_of_Accounts'].dashboardText);
    })
});

test('NXGF-TC-2100: TC_003_Chart of Accounts_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("Verified that the User is able to See Charts of Accounts Shortcut Button", async () => {
        await chartOfAccountsPage.verifyChartsOfAccountsrShortcutButton();
    })
});

test('NXGF-TC-2101: TC_004_Chart of Accounts_Verify that all the shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("Verified that the shortcut buttons are clickable", async () => {
        await chartOfAccountsPage.verifyChartsOfAccountsShrtcutsButtonisClickable();
    })
});

test('NXGF-TC-2102: TC_005_Chart of Accounts_Verify that the user is able to view the Chart of Accounts shortcut icon in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("Verified that the user is able to view the Chart of Accounts  shortcut icon in the main menu page", async () => {
        await chartOfAccountsPage.verifyChartsOfAccountsrShortcutButton();
    })
});

test('NXGF-TC-2103: TC_006_Chart of Accounts_Verify that the user is able to click on the Chart of Accounts icon', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("Verified that the user is able to click on the Chart of Accounts icon", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })
});

test('NXGF-TC-2104: TC_007_Chart of Accounts_Verify that the user is redirected to the Chart of Accounts page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is redirected to the Chart of Accounts page", async () => {
        await chartOfAccountsPage.verifychartOfAccountText(ChartOfAccountsPageData['TC_007_Chart_of_Accounts'].chartOfAccountsText)
    })
});

test('NXGF-TC-2105: TC_008_Chart of Accounts_Verify that the user is able to view the "Chart of Accounts " title in bold', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to view the 'Chart of Accounts' title in bold", async () => {
        await chartOfAccountsPage.verifyTitleinBold();
    })
});

test('NXGF-TC-2106: TC_009_Chart of Accounts_Verify the that user is able to see two search fields "Account name" and " Account number"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify the that user is able to see two search fields 'Account name' and 'Account number'", async () => {
        await chartOfAccountsPage.verifyAccountNameAccountNumberField();
    })
});

test('NXGF-TC-2107: TC_010_Chart of Accounts_Verify that the search icon is present beside both the search fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the search icon is present beside both the search fields", async () => {
        await chartOfAccountsPage.verifySearchField();
    })
});

test('NXGF-TC-2108: TC_011_Chart of Accounts_Verify that the user is able to enter the Account number in the "Search by Account number" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_011_Chart_of_Accounts'].accountNumber);
    })
});

test('NXGF-TC-2109: TC_014_Chart of Accounts_Verify that the user is able to click on search icon after entering the Account number in "Account number" search field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_014_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })
});

test('NXGF-TC-2110: TC_015_Chart of Accounts_Verify that the user is able to veiw the results after the search with Account number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_015_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that the user is able to veiw the results after the search with Account number", async () => {
        await chartOfAccountsPage.verifyAccountNumberFromGrid();
    })
});

test('NXGF-TC-2111: TC_016_Chart of Accounts_Verify that the user is able to view the column names from the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_015_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that the user is able to veiw the results after the search with Account number", async () => {
        await chartOfAccountsPage.verifyAccountNumberFromGrid();
    })
});

test('NXGF-TC-2112: TC_017_Chart of Accounts_Verify that the user is able to see the coloring Active an Stoped indexes below the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to see the coloring Active an Stoped indexes below the grid", async () => {
        await chartOfAccountsPage.verifyActiveandStoppedIndex();
    })
});

test('NXGF-TC-2113: TC_018_Chart of Accounts_Verify that the user is able to view all the accounts listed irrespective of the status', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to view all the accounts listed irrespective of the status", async () => {
        await chartOfAccountsPage.verifyStatusInTheGrid();
    })
});

test('NXGF-TC-2114,NXGF-TC-2115: TC_019_Chart of Accounts_Verify that the user is able to enter the organization name in the "Account name" search field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization name in the 'Account name' search field", async () => {
        await chartOfAccountsPage.enterAccountName(ChartOfAccountsPageData['TC_019_Chart_of_Accounts'].accountName);
    })
});

test('NXGF-TC-2116: TC_025_Chart of Accounts_Verify that the user is able to view "stop" (sign) option for Active Accounts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Click on Active Index", async () => {
        await chartOfAccountsPage.clickOnActiveIndex();
    })

    await test.step("Verify that the user is able to view 'stop' (sign) option for Active Accounts", async () => {
        await chartOfAccountsPage.verifyActiveAccounts();
    })
});

test('NXGF-TC-2117: TC_027_Chart of Accounts_Verify that the user is able to click on the " stopped" filter below the grid to view the stopped accounts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Click on Stop Index", async () => {
        await chartOfAccountsPage.clickOnStopIndex();
    })

    await test.step("Verified that the user is able to click on the 'stopped' filter below the grid to view the stopped accounts", async () => {
        await chartOfAccountsPage.verifyStatusInTheGrid();
    })
});

test('NXGF-TC-2118: TC_028_Chart of Accounts_Verify that the user is able to view the confirmation message before stopping the account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Click on Stop Account", async () => {
        await chartOfAccountsPage.clickOnStopAccounts();
    })

    await test.step("Verified that the user is able to click on the 'stopped' filter below the grid to view the stopped accounts", async () => {
        await chartOfAccountsPage.verifyConfirmationMessage(ChartOfAccountsPageData['TC_028_Chart_of_Accounts'].confirmationMessage);
    })
});

test('NXGF-TC-2119: TC_029_Chart of Accounts_Verify that the is user is also able to view the active Chart of Accounts in the same result grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Click on Active Index", async () => {
        await chartOfAccountsPage.clickOnActiveIndex();
    })

    await test.step("Verify that the is user is also able to view the active Chart of Accounts in the same result grid", async () => {
        await chartOfAccountsPage.verifyStatusInTheGrid();
    })
});

test('NXGF-TC-2120: TC_030_Chart of Accounts_ Verify that the user is able to view Records per page title', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to view Records per page title", async () => {
        await chartOfAccountsPage.verifyRecordsPerPageText(ChartOfAccountsPageData['TC_030_Chart_of_Accounts'].expectedText);
    })
});

test('NXGF-TC-2121: TC_031_ Chart of Accounts_Verify that the user is able to view the item counts ((10,15,20,30,50,100,250) in the drop down', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified the the user is able to view below the grid, Records per page dropdown", async () => {
        await chartOfAccountsPage.clickOnRecordsPerPageDropdown();
    })
});

test('NXGF-TC-2122: TC_032_ Chart of Accounts_Verify that the user is able to choose from the dropdown the item counts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to choose from the dropdown the item counts", async () => {
        await chartOfAccountsPage.clickOnRecordsPerPageDropdownOption();
    })
});

test('NXGF-TC-2123: TC_033_ Chart of Accounts_Verify that the user is able to view the ADD (+) button in the Chart of Accounts page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to view the ADD (+) button in the Chart of Accounts page", async () => {
        await chartOfAccountsPage.verifyAddAccountButton();
    })
});

test('NXGF-TC-2124: TC_034_ Chart of Accounts_Verify that the user is able to click on the add(+) button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })
});

test("NXGF-TC-2125: TC_035_ Chart of Accounts_Verify that the user is able to navigate to 'Add a new account' once clicked on add (+) button", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the user is able to navigate to 'Add a new account' once clicked on add (+) button", async () => {
        await chartOfAccountsPage.verifyAddAccountpopupScreenText(ChartOfAccountsPageData['TC_035_Chart_of_Accounts'].expectedText);
    })
});

test('NXGF-TC-2126: TC_036_ Chart of Accounts_Verify that the user is able to view the all fields in the Add a new account popup screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the user is able to view the all fields in the Add a new account popup screen", async () => {
        await chartOfAccountsPage.verifyAddAccountAllFields();
    })
});

test('NXGF-TC-2127: TC_037_ Chart of Accounts_Verify that the user is able to view the asterisk mark (*) beside the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verify that the user is able to view the asterisk mark (*) beside the mandatory fields", async () => {
        await chartOfAccountsPage.verifyasteriskmarkFormandatoryFields();
    })
});

test('NXGF-TC-2128: TC_038_ Chart of Accounts_Verify that the user is able to select the Organization name and year', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await chartOfAccountsPage.verifyOrganizationName(ChartOfAccountsPageData['TC_038_Chart_of_Accounts'].orgName);
    })
});

test('NXGF-TC-2129: TC_039_ Chart of Accounts_Verify that the user is able to enter the Account Number in the Account Number field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await chartOfAccountsPage.enterAddAccountNumber(ChartOfAccountsPageData['TC_039_Chart_of_Accounts'].accountNum);
    })
});

test('NXGF-TC-2130: TC_040_Chart of Accounts_Verify that the user is able to enter the Account Name in the Account Name field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_040_Chart_of_Accounts'].accountName);
    })
});

test('NXGF-TC-2131: TC_041_ Chart of Accounts_Verify that the user is able to select the Account Type in Account Type field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await chartOfAccountsPage.selectAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_041_Chart_of_Accounts'].value);
    })
});

test('NXGF-TC-2132: TC_042_ Chart of Accounts_Verify that the user is able to enter the Start date in the Start date field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })
    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await chartOfAccountsPage.enterSelectStartDate(ChartOfAccountsPageData['TC_042_Chart_of_Accounts'].value);
    })
});

test('NXGF-TC-2133: TC_043_ Chart of Accounts_Verify that the user is able to view the Save button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.enterAddAccountNumber(ChartOfAccountsPageData['TC_043_Chart_of_Accounts'].accountNum);
    })

    await test.step("User Enter Account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_043_Chart_of_Accounts'].accountName);
    })

    await test.step("User Select Date", async () => {
        await chartOfAccountsPage.enterSelectStartDate(ChartOfAccountsPageData['TC_043_Chart_of_Accounts'].value);
    })

    await test.step("User Select Add Account type", async () => {
        await chartOfAccountsPage.selectAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_043_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_043_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Verified that the user is able to view the Save button", async () => {
        await chartOfAccountsPage.verifySaveButton();
    })
});

test('NXGF-TC-2134: TC_044_ Chart of Accounts_Verify that the user is able to click on Save after entering the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.enterAddAccountNumber(ChartOfAccountsPageData['TC_044_Chart_of_Accounts'].accountNum);
    })

    await test.step("User Enter Account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_044_Chart_of_Accounts'].accountName);
    })

    await test.step("User Select Date", async () => {
        await chartOfAccountsPage.enterSelectStartDate(ChartOfAccountsPageData['TC_044_Chart_of_Accounts'].value);
    })

    await test.step("User Select Add Account type", async () => {
        await chartOfAccountsPage.selectAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_044_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_044_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })
});

test('NXGF-TC-2135,NXGF-TC-2136,NXGF-TC-2144: TC_045_ Chart of Accounts_Verify that the user is able to save after entering the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Search with Created Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_045_Chart_of_Accounts'].accountNum);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that the user is able to save after entering the mandatory fields", async () => {
        await chartOfAccountsPage.verifyAccountsinGrid(ChartOfAccountsPageData['TC_045_Chart_of_Accounts'].accountNum);
    })
});

test('NXGF-TC-2137: TC_047_ Chart of Accounts_Verify that the user is able to click on cancel to exit the form creation', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the user is able to click on cancel to exit the form creation", async () => {
        await chartOfAccountsPage.clickOnCloseButton();
    })
});

test('NXGF-TC-2138: TC_049_ Chart of Accounts_Verify that the user is unable to save the new creation form without entering the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the user is unable to save the new creation form without entering the mandatory fields", async () => {
        await chartOfAccountsPage.verifySaveButtonDisbled();
    })
});

test('NXGF-TC-2139: TC_050_ Chart of Accounts_Verify that the start date selector displays current month with current date selected', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the start date selector displays current month with current date selected", async () => {
        await chartOfAccountsPage.selectCurrentDateStartDateCalender();
    })
});

test('NXGF-TC-2141: TC_052_ Chart of Accounts_Verify that the user is able to select the GL Account Type', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the user is able to select the GL Account Type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_052_Chart_of_Accounts'].GLdropdownvalue);
    })
});

test('NXGF-TC-2142: TC_053_ Chart of Accounts_Verify that the start date selector has Arrows on top (< , >) to navigate from one month to the other', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the user is able to select the GL Account Type", async () => {
        await chartOfAccountsPage.verifyCalenderArrow();
    })
});

test('NXGF-TC-2143: TC_054_ Chart of Accounts_Verify that the start date selector has default select the current date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("Verified that the start date selector has default select the current date", async () => {
        await chartOfAccountsPage.verifyCurrentDateFromCalender();
    })
});

test('NXGF-TC-2145: TC_057_ Chart of Accounts_Verify that the user is able to view only the Active accounts unless show stopped is selected', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountName(ChartOfAccountsPageData['TC_057_Chart_of_Accounts'].accountName);
    })

    await test.step("User Click on Active Index", async () => {
        await chartOfAccountsPage.clickOnActiveIndex();
    })

    await test.step("Verified that the user is able to view only the Active accounts", async () => {
        await chartOfAccountsPage.verifyActiveAccounts();
    })
});

test('NXGF-TC-2146: TC_059_ Chart of Accounts_Verify that the user is able to click on Add (+) to create a new sub account for the selected parent account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_059_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that the user is able to click on Add (+) to create a new sub account for the selected parent account", async () => {
        await chartOfAccountsPage.clickAddChildAccountButton();
    })
});

test('NXGF-TC-2147,NXGF-TC-2148: TC_060_ Chart of Accounts_Verify that the user is redirected to a Add Child Account screen to  create the sub account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_060_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("User Click on Add Child Account button", async () => {
        await chartOfAccountsPage.clickAddChildAccountButton();
    })

    await test.step("Verified that the user is redirected to a Add Child Account screen to  create the sub account", async () => {
        await chartOfAccountsPage.verifyAddChildAccountTitle(ChartOfAccountsPageData['TC_060_Chart_of_Accounts'].title);
    })
});

test('NXGF-TC-2149: TC_062_ Chart of Accounts_Verify that the user is able to see Account name, Account number,  Start date, Account Type, Product Line, GL Account Type', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_062_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("User Click on Add Child Account button", async () => {
        await chartOfAccountsPage.clickAddChildAccountButton();
    })

    await test.step("Verified that the user is able to see Account name, Account number,  Start date, Account Type, Product Line, GL Account Type", async () => {
        await chartOfAccountsPage.verifyAddAccountAllFields();
    })
});

test('NXGF-TC-2150: TC_063_ Chart of Accounts_Verify that the Account name, Account number, start date , Account Type, Product Line, GL Account Type are mandatory fields for the sub account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_062_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("User Click on Add Child Account button", async () => {
        await chartOfAccountsPage.clickAddChildAccountButton();
    })

    await test.step("Verified that the user is able to see Account name, Account number,  Start date, Account Type, Product Line, GL Account Type", async () => {
        await chartOfAccountsPage.verifyAddAccountMandatoryFields();
    })
});

test('NXGF-TC-2151,NXGF-TC-2152: TC_064_ Chart of Accounts_Verify that the user is unable to create a new sub account if there exist any journals under the parent account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_062_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("User Click on Add Child Account button", async () => {
        await chartOfAccountsPage.clickAddChildAccountButton();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.enterAddAccountNumber(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].accountNum);
    })

    await test.step("User Enter Account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].accountName);
    })

    await test.step("User Select Date", async () => {
        await chartOfAccountsPage.enterSelectStartDate(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].date);
    })

    await test.step("User Select Add Account type", async () => {
        await chartOfAccountsPage.selectAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })

    await test.step("Verify that the user is unable to create a new sub account if there exist any journals under the parent account", async () => {
        await chartOfAccountsPage.verifyPopupForUniqueAccountNum(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].popup);
    })
});

test('NXGF-TC-2153: TC_066_ Chart of Accounts_Verify that the user is able to click on save after entering the mandatory fields  for sub account creation', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User Enter Account number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_062_Chart_of_Accounts'].accountNumber);
    })

    await test.step("User Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("User Click on Add Child Account button", async () => {
        await chartOfAccountsPage.clickAddChildAccountButton();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.enterAddAccountNumber(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].accountNum);
    })

    await test.step("User Enter Account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].accountName);
    })

    await test.step("User Select Date", async () => {
        await chartOfAccountsPage.enterSelectStartDate(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].date);
    })

    await test.step("User Select Add Account type", async () => {
        await chartOfAccountsPage.selectAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_064_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })
});

test('NXGF-TC-2154: TC_067_ Chart of Accounts_Verify that the Edit option is displayed in grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Verified that the Edit option is displayed in grid", async () => {
        await chartOfAccountsPage.verifyEditIconInGrid();
    })
});

test('NXGF-TC-2155: TC_068_ Chart of Accounts_Verify that the user is able to click on "Edit" to edit the sub account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })
});

test('NXGF-TC-2156: TC_070_ Chart of Accounts_Verify that the Account Name and Account Number are mandatory fields for Search', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })

    await test.step("Verified that the Account Name and Account Number are mandatory fields for Search", async () => {
        await chartOfAccountsPage.verifymandatoryFieldsfromChildAccount();
    })
});

test('NXGF-TC-2157: TC_071_ Chart of Accounts_Verify that the user is able to edit Account number and start date for the subaccount', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.enterEditAddAccountNumber(ChartOfAccountsPageData['TC_071_Chart_of_Accounts'].accountNum);
    })

    await test.step("User Select Date", async () => {
        await chartOfAccountsPage.enterEditSelectStartDate(ChartOfAccountsPageData['TC_071_Chart_of_Accounts'].date);
    })
});

test('NXGF-TC-2158: TC_072_ Chart of Accounts_Verify that the user is able to edit the account name and account type for sub account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })

    await test.step("User Enter Account Name", async () => {
        await chartOfAccountsPage.enterEditchildAddAccountName(ChartOfAccountsPageData['TC_072_Chart_of_Accounts'].accountName);
    })

    await test.step("User Select account type", async () => {
        await chartOfAccountsPage.selectEditChildAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_072_Chart_of_Accounts'].dropdownvalue);
    })
});

test('NXGF-TC-2159: TC_073_ Chart of Accounts_Verify that the user is able to click on save after editing the details', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.enterEditAddAccountNumber(ChartOfAccountsPageData['TC_073_Chart_of_Accounts'].accountNum);
    })

    await test.step("User Select account type", async () => {
        await chartOfAccountsPage.selectEditChildAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_073_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_073_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })
});

test('NXGF-TC-2160: TC_074_ Chart of Accounts_Verify that the updated details are saved for subaccount', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Add Account Number", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_074_Chart_of_Accounts'].accountNum);
    })

    await test.step("Add Account Name", async () => {
        await chartOfAccountsPage.enterAccountName(ChartOfAccountsPageData['TC_074_Chart_of_Accounts'].accountName);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Click on Add child Account Icon", async () => {
        await chartOfAccountsPage.clickOnAddChildAccountIcon();
    })

    await test.step("User Enter Child Account Number", async () => {
        await chartOfAccountsPage.enterRandomChildAccountNumber();
    })

    await test.step("User Select account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_074_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User enter Start Date", async () => {
        await chartOfAccountsPage.enterStartDate();
    })

    await test.step("User Select account type", async () => {
        await chartOfAccountsPage.selectEditChildAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_074_Chart_of_Accounts'].accountType);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_074_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Click on Edit icon for the created subaccount", async () => {
    await chartOfAccountsPage.clickOnEditChildAccountIcon();  
    });

    await test.step("Edit subaccount details", async () => {
    await chartOfAccountsPage.editSubAccountDetails(ChartOfAccountsPageData['TC_074_Chart_of_Accounts'].accountName1); 
    });

    await test.step("Click on Save after editing", async () => {
    await chartOfAccountsPage.clickOnSaveButton();
    });

    await test.step("Verify edited subaccount details are shown in the grid", async () => {
    await chartOfAccountsPage.verifyEditedDetailsInGrid("Edited Account Name", "Account Receivable");
    }); 
});

test('NXGF-TC-2161: TC_075_ Chart of Accounts_Verify that the Stop option to stop the active account is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.verifyStopAccountsInGrid();
    })
});

test('NXGF-TC-2162,NXGF-TC-2163: TC_077_ Chart of Accounts_Verify that the message shows " Are you sure you want to Stop this Account"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Stpped account button", async () => {
        await chartOfAccountsPage.clickOnStoppedAccount();
    })

    await test.step("Click on Stpped account button", async () => {
        await chartOfAccountsPage.verifyStopAccountPopup(ChartOfAccountsPageData['TC_077_Chart_of_Accounts'].popup);
    })
});

test('NXGF-TC-2164: TC_078_ Chart of Accounts_Verify that the user is able to view the stop date after stopping the Chart of account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Add child Account Icon", async () => {
        await chartOfAccountsPage.clickOnAddChildAccountIcon();
    })

    await test.step("User Enter Child Account Number", async () => {
        await chartOfAccountsPage.enterRandomChildAccountNumber();
    })

    await test.step("User Select account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_078_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User enter Start Date", async () => {
        await chartOfAccountsPage.enterStartDate();
    })

    await test.step("User Select account type", async () => {
        await chartOfAccountsPage.selectEditChildAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_078_Chart_of_Accounts'].accountType);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_078_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.stopedAccounts();
    })
});

test('NXGF-TC-2165: TC_079_ Chart of Accounts_Verify that the user is able to edit the Product Line for Sub Account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })

    await test.step("User Select Product Line", async () => {
        await chartOfAccountsPage.selectProductlineFromDropdown(ChartOfAccountsPageData['TC_079_Chart_of_Accounts'].productLine);
    })
});

test('NXGF-TC-2166: TC_080_ Chart of Accounts_Verify that the user is able to edit the GL Account Type for sub account', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Extended Arrow", async () => {
        await chartOfAccountsPage.clickOnExpandArrow();
    })

    await test.step("Click on Edit Icon", async () => {
        await chartOfAccountsPage.clickOnEditIcon();
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_080_Chart_of_Accounts'].GLdropdownvalue);
    })
});

test('NXGF-TC-2167: TC_081_ Chart of Accounts_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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
        await chartOfAccountsPage.verifySearchBar();
    })
});

test('NXGF-TC-2168: TC_082_ Chart of Accounts_Verify that the User is able to enter and Search the shortcut menu from search bar', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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
        await chartOfAccountsPage.enterinSearchbar(ChartOfAccountsPageData['TC_082_Chart_of_Accounts'].value);
    })
});

test('NXGF-TC-6706: TC_83_ Chart of Accounts_Verify that when searching for a record, the account details or record should be displayed correctly', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_083_Chart_of_Accounts'].accountNumber);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.verifyAccountNumberFromGrid();
    })
});

test('NXGF-TC-6707: TC_84_ Chart of Accounts_Verify that after searching for an account number, the reset button should become active to allow users to clear or reset the search results.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_084_Chart_of_Accounts'].accountNumber);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.verifyResetButtonEnabled();
    })
});

test("NXGF-TC-6708: TC_85_ Chart of Accounts_Verify that when the user selects 'Active' status, the resulting search should only display accounts with 'Active' status. If the user searches for additional data, matching accounts with active status should be displayed", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Active account button", async () => {
        await chartOfAccountsPage.clickOnActiveIndex();
    })

    await test.step("User enter the Account number  in the 'Search by Account name' field", async () => {
        await chartOfAccountsPage.enterAccountName(ChartOfAccountsPageData['TC_085_Chart_of_Accounts'].accountName);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that when the user selects 'Active' status, the resulting search should only display accounts with 'Active' status", async () => {
        await chartOfAccountsPage.verifyActiveAccountsNameinGrid(ChartOfAccountsPageData['TC_085_Chart_of_Accounts'].accountName);
    })
});

test('NXGF-TC-6709: TC_86_ Chart of Accounts_Verify that when an account is displayed in the default list, it should remain visible even after selecting a status from the bottom of the page, provided the status is relevant to the account.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Stopped account button", async () => {
        await chartOfAccountsPage.clickOnStopIndex();
    })

    await test.step("Verify that the user is able to enter the Account number  in the 'Search by Account number' field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_086_Chart_of_Accounts'].accountNumber);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that when an account is displayed in the default list, it should remain visible even after selecting a status from the bottom of the page, provided the status is relevant to the account.", async () => {
        await chartOfAccountsPage.verifyStoppedAccountsNumberinGrid(ChartOfAccountsPageData['TC_086_Chart_of_Accounts'].accountNumber);
    })
});

test('NXGF-TC-6710: TC_87_ Chart of Accounts_Verify that a newly created account is visible and selectable in the journal voucher. This ensures that accounts are correctly updated and integrated with the journal voucher system.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("User click on the add(+) button", async () => {
        await chartOfAccountsPage.clickOnAddAccountButton();
    })

    await test.step("User Enter Account Number", async () => {
        await chartOfAccountsPage.getAddaccountNumber();
    })

    await test.step("User Enter Account Name", async () => {
        await chartOfAccountsPage.enterAddAccountName(ChartOfAccountsPageData['TC_087_Chart_of_Accounts'].accountName);
    })

    await test.step("User Select Date", async () => {
        await chartOfAccountsPage.enterSelectStartDate(ChartOfAccountsPageData['TC_087_Chart_of_Accounts'].value);
    })

    await test.step("User Select Add Account type", async () => {
        await chartOfAccountsPage.selectAddAccountTypeFromDropdown(ChartOfAccountsPageData['TC_087_Chart_of_Accounts'].dropdownvalue);
    })

    await test.step("User Select GL Account type", async () => {
        await chartOfAccountsPage.selectglAccountTypeFromDropdown(ChartOfAccountsPageData['TC_087_Chart_of_Accounts'].GLdropdownvalue);
    })

    await test.step("Click on Save button", async () => {
        await chartOfAccountsPage.clickOnSaveButton();
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut button", async () => {
        await chartOfAccountsPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await chartOfAccountsPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await chartOfAccountsPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await chartOfAccountsPage.getAddaccountNumberAndVerifyFromJV();
    })
});

test("NXGF-TC-6711: TC_88_ Chart of Accounts_Verify that the count of total records displayed in the chart of accounts is consistent and does not vary unexpectedly after performing certain activities or operations.", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Click on Active account button", async () => {
        await chartOfAccountsPage.clickOnActiveIndex();
    })

    await test.step("User enter the Account number  in the 'Search by Account name' field", async () => {
        await chartOfAccountsPage.enterAccountName(ChartOfAccountsPageData['TC_085_Chart_of_Accounts'].accountName);
    })

    await test.step("Click on Search button", async () => {
        await chartOfAccountsPage.clickonSearchButton();
    })

    await test.step("Verified that when the user selects 'Active' status, the resulting search should only display accounts with 'Active' status", async () => {
        await chartOfAccountsPage.verifyActiveAccountsNameinGrid(ChartOfAccountsPageData['TC_085_Chart_of_Accounts'].accountName);
    })

    await test.step("Click on Reset button", async () => {
        await chartOfAccountsPage.clickonResetButton();
    })
});


