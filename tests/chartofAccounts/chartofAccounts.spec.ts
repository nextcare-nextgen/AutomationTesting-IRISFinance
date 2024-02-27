import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { ChartOfAccountsPage } from '../../page-objects/chartofAccounts-pages/chartofAccounts-page';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const ChartOfAccountsPageData = require(`../../testdata/${process.env.ENV || 'eu'}/chartOfAccounts.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


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

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is redirected to the Chart of Accounts page", async () => {
        await chartOfAccountsPage.verifychartOfAccountText(ChartOfAccountsPageData['TC_007_Chart_of_Accounts'].chartOfAccountsText)

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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified that the user is able to enter the organization name in the 'Account name' search field", async () => {
        await chartOfAccountsPage.enterAccountNumber(ChartOfAccountsPageData['TC_019_Chart_of_Accounts'].accountName);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    const countValues = [" 10 ", " 15 ", " 20 ", " 30 ", " 50 ", " 100 ", " 250 "];

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

    await test.step("User Click on Charts of Accounts Shortcut button", async () => {
        await chartOfAccountsPage.clickOnChartsOfAccountsShrtcutsButton();
    })

    await test.step("Verified the the user is able to view below the grid, Records per page dropdown", async () => {
        await chartOfAccountsPage.clickOnRecordsPerPageDropdown(countValues);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(ChartOfAccountsPageData['TC_038_Chart_of_Accounts'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
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
    
    await test.step("--------------End the Charts of Accounts Testclass----------------------", async () => {
        console.log("--------------End the Charts of Accounts Testclass----------------------")
    })

});

test('NXGF-TC-2135,NXGF-TC-2136: TC_045_ Chart of Accounts_Verify that the user is able to save after entering the mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const chartOfAccountsPage: ChartOfAccountsPage = new ChartOfAccountsPage(page);

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
        await chartOfAccountsPage.verifyAccountsinGrid(ChartOfAccountsPageData['TC_045_Chart_of_Accounts'].dropdownvalue);
    })
    
});