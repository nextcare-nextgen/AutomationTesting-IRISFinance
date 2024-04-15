import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { JournalVoucherListPage } from '../../page-objects/journalVoucherList-page/journalVoucherList-pages';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const JournalVoucherListPageData = require(`../../testdata/${process.env.ENV || 'eu'}/journalVoucherList.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-2060: TC_000_Journal Voucher List_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Journal Voucher List Testclass----------------------", async () => {
        console.log("--------------Start the Journal Voucher List Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();

    })
    await test.step("Verify Breadcrumbs Text", async () => {
        await journalVoucherListPage.verifyBreadCrumbsText(JournalVoucherListPageData['TC_000_Journal_Voucher_List'].breadcrumbsText);

    })

});

test('NXGF-TC-2061: TC_001_Journal Voucher List_Verify that the main menu option is clickable', async ({ page }) => {

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

test('NXGF-TC-2062: TC_002_Journal Voucher List_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await journalVoucherListPage.verifyDashboardText(JournalVoucherListPageData['TC_002_Journal_Voucher_List'].dashboardText);
    })

});

test('NXGF-TC-2063: TC_003_Journal Voucher List_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("Verified that the User is able to See Journal Voucher Shortcut Button", async () => {

        await journalVoucherListPage.verifyJournalVoucherShortcutButton();

    })

});

test('NXGF-TC-2064: TC_004_Journal Voucher List_Verify that the user is able to navigate to the Journal Voucher list', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher Lookup screen", async () => {
        await journalVoucherListPage.verifyJournalVoucherListText(JournalVoucherListPageData['TC_004_Journal_Voucher_List'].journalVocherText)

    })

});

test('NXGF-TC-2065: TC_005_Journal Voucher List_Verify that the screen is divided into two sections with search fields and results grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
    })

    await test.step("Verified that the user is able to see journal Voucher List search Section", async () => {
        await journalVoucherListPage.verifyjournalVoucherListsearchSection();
    })

    await test.step("Verified that the user is able to see journal Voucher List Grid Section", async () => {
        await journalVoucherListPage.verifyjournalVoucherListGridSection();
    })

});

test('NXGF-TC-2066: TC_006_Journal Voucher List_Verify that the screen is titled as " JOURNAL VOUCHERS "', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher Lookup screen", async () => {
        await journalVoucherListPage.verifyJournalVoucherText(JournalVoucherListPageData['TC_006_Journal_Voucher_List'].journalVocherText);

    })

});

test('NXGF-TC-2067: TC_007_Journal Voucher List_Verify that all field is display', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
    })

    await test.step("Verified that all field is display", async () => {
        await journalVoucherListPage.verifyjournalVoucherListAllFields();

    })

});

test('NXGF-TC-2068: TC_008_Journal Voucher List_Search_Verify that the Voucher type has predefined values', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_008_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("User Click on Filter Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Click on Voucher type", async () => {
        await journalVoucherListPage.clickonVoucherType();
    })

    await test.step("User Verified the vocher type dropdown list", async () => {
        await journalVoucherListPage.verifyVoucherTypeDropdownList();
    })

});

test('NXGF-TC-2069: TC_009_Journal Voucher List_Search_Verify that the user is able to enter the Voucher type manually', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_009_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("User Click on Filter Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Click on Voucher type", async () => {
        await journalVoucherListPage.clickonVoucherType();
    })

    await test.step("User Enter and select vocher type from dropdown list", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_009_Journal_Voucher_List'].voucherType);
    })

});

test('NXGF-TC-2070: TC_011_Journal Voucher List_Search_Verify that the user should first select the organization and then add the rest of the fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_011_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("User Click on Filter Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Click on Voucher type", async () => {
        await journalVoucherListPage.clickonVoucherType();
    })

    await test.step("User Enter and select vocher type from dropdown list", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_011_Journal_Voucher_List'].voucherType);
    })

});

test('NXGF-TC-2071: TC_013_Journal Voucher List_Search_Verify that the from voucher number is a advance search field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_011_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("User Click on Filter Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Verified that the from voucher number is a advance search field", async () => {
        await journalVoucherListPage.verifyFromVoucherNumber();
    })


});

test('NXGF-TC-2072: TC_014_Journal Voucher List_Search_Verify that the From Voucher number is smaller to "To Voucher number" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("User Click on Filter Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enetr From Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enetr To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].toVoucherNumber);
    })

    await test.step("User Verified that the from Voucher number is smaller than the To Voucher number", async () => {
        await journalVoucherListPage.verifyErrorForVoucherNumber(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].errorMessage);
    })

});

test('NXGF-TC-2073: TC_015_Journal Voucher List_Search_Verify that user is able to view From Date as a search field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that user is able to view From Date as a search field", async () => {
        await journalVoucherListPage.verifyFromDate();
    })

});

test('NXGF-TC-2074: TC_016_Journal Voucher List_Search_Verify that the user is able to select a date from the calendar for "From Date"', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_016_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that the user is able to Enter a date for 'From Date'", async () => {
        await journalVoucherListPage.enterfromDate(JournalVoucherListPageData['TC_016_Journal_Voucher_List'].fromDate);
    })

});

test('NXGF-TC-2076: TC_018_Journal Voucher List_Search_Verify that user is able to view To Date as a search field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that user is able to view To Date as a search field", async () => {
        await journalVoucherListPage.verifyToDate();
    })

});

test('NXGF-TC-2076: TC_019_Journal Voucher List_Search_Verify that the user is able to select a date from the calendar form for To Date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_013_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that user is able to view To Date as a search field", async () => {
        await journalVoucherListPage.verifyToDate();
    })

});

test('NXGF-TC-2078: TC_020_Journal Voucher List_Search_Verify that the To Date is a date after the From date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_020_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that the user is able to Enter a date for 'From Date'", async () => {
        await journalVoucherListPage.enterfromDate(JournalVoucherListPageData['TC_020_Journal_Voucher_List'].fromDate);
    })

    await test.step("Verified that the user is able to Enter a date for 'To Date'", async () => {
        await journalVoucherListPage.enterToDate(JournalVoucherListPageData['TC_020_Journal_Voucher_List'].toDate);
    })
});

test('NXGF-TC-2079: TC_021_Journal Voucher List_Search_Verify that the user is able to view the search option', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_020_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that the user is able to view the search option", async () => {
        await journalVoucherListPage.verifySearchButton();
    })

});

test('NXGF-TC-2080: TC_022_Journal Voucher List_Search_Verify that the user is able to search for the existing Journal vouchers with predefined from and to dates', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_022_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Verified that the user is able to Enter a date for 'From Date'", async () => {
        await journalVoucherListPage.enterfromDate(JournalVoucherListPageData['TC_022_Journal_Voucher_List'].fromDate);
    })

    await test.step("Verified that the user is able to Enter a date for 'To Date'", async () => {
        await journalVoucherListPage.enterToDate(JournalVoucherListPageData['TC_022_Journal_Voucher_List'].toDate);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Verified Voucher Number present from Entered Date", async () => {
        await journalVoucherListPage.verifyVoucherNumFromGrid();
    })
});

test('NXGF-TC-2081: TC_024_Journal Voucher List_Search_Verify that the user is able to search the existing Journal Vouchers all the search options', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_024_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_024_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_024_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_024_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Verified Voucher Number present from Entered Date", async () => {
        await journalVoucherListPage.verifyVoucherNumFromGrid();
    })
});

test('NXGF-TC-2082: TC_037_Journal Voucher List_Search result_Verify that the user is redirected to another screen Journal Voucher details', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the user is redirected to another screen Journal Voucher details", async () => {
        await journalVoucherListPage.verifyJournalVoucherDeatilsText(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].textContent);
    })

});

test('NXGF-TC-2083: TC_038_Journal Voucher List_Search result_Verify that the user is able to view all the transactions related to the chosen Voucher reference number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_038_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_038_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_038_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_038_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the user is able to view all the transactions related to the chosen Voucher reference number", async () => {
        await journalVoucherListPage.verifyAccountsFromGrid();
    })

});

test('NXGF-TC-2084: TC_040_Journal Voucher List_Search result_Verify that the details of the selected voucher reflects in the specified fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_037_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the user is able to view all the transactions related to the chosen Voucher reference number", async () => {
        await journalVoucherListPage.verifyVoucherDetailsFirstSection();
    })

});

test('NXGF-TC-2085: TC_041_Journal Voucher List_Modify_Verify that the user is unable to click on Validate check box to validate the voucher', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_041_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_041_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_041_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_041_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that if the voucher is validated user should not bel able to edit the validated checkbox", async () => {
        await journalVoucherListPage.verifyValidatedCheckboxDisabled();
    })

});

test('NXGF-TC-2086: TC_043_Journal Voucher List_Modify_Verfiy that the Voucher is Validated and Total Debit CV is equal to Total Credit CV', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_043_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_043_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_043_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_043_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that if the voucher is validated user should not bel able to edit the validated checkbox", async () => {
        await journalVoucherListPage.verifyTotalDebitCVisequaltoTotalCreditCV();
    })

});

test('NXGF-TC-2087: TC_044_Journal Voucher List_Modify_Verify that the second section has a grid with balance and differences', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_044_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_044_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_044_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_044_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that if the voucher is validated user should not bel able to edit the validated checkbox", async () => {
        await journalVoucherListPage.verifyEditTransactionScreen();
    })

});

test('NXGF-TC-2088: TC_045_Journal Voucher List_Modify_Verify that the transaction fields under the voucher reference are available on the details page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_045_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_045_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the transaction fields under the voucher reference are available on the details page", async () => {
        await journalVoucherListPage.verifyEditTransactionScreen();
    })

});

test('NXGF-TC-2089: TC_047_Journal Voucher List_Modify_Verify the the user is able to view below the grid, Records per page dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_047_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(8000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_047_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified the the user is able to view below the grid, Records per page dropdown", async () => {
        await journalVoucherListPage.verifyRecordsPerPageTitle(JournalVoucherListPageData['TC_047_Journal_Voucher_List'].title);
    })

});


test('NXGF-TC-2090: TC_048_Journal Voucher List_Modify_Verify that the user is able to view the item counts in the drop down', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);
    const countValues = [" 50 ", " 100 "," 150 "," 200 ", " 250 "];

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_048_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_048_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified the the user is able to view below the grid, Records per page dropdown", async () => {
        await journalVoucherListPage.clickOnRecordsPerPageDropdown(countValues);
    })

});

test('NXGF-TC-2091: TC_049_Journal Voucher List_Modify_Verify that the user is able to choose from the dropdown the item counts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_048_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_048_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the user is able to choose from the dropdown the item counts", async () => {
        await journalVoucherListPage.clickOnRecordsPerPageDropdownOption();
    })

});

test('NXGF-TC-2092: TC_053_Journal Voucher List_Verify that the differences are indicated as per the amount and the currency', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_048_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Select Voucher Type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_048_Journal_Voucher_List'].voucherType);
    })

    await test.step("Click on Apply button", async () => {
        await journalVoucherListPage.clickOnApplyButton();
        await sleep(5000);
    })

    await test.step("Click on Search", async () => {
        await journalVoucherListPage.clickOnSearchButton();
        await sleep(5000);
    })

    await test.step("Click on Edit Vocher Details button", async () => {
        await journalVoucherListPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the differences are indicated as per the amount and the currency", async () => {
        await journalVoucherListPage.verifyCurrencyAndAmountFromGrid();
    })

});

test('NXGF-TC-2093: TC_055_Journal Voucher List_Search_Verify that the To Voucher number is greater than "from Voucher number" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_055_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("Click on Advanced Serch button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_055_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("Enter From Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_055_Journal_Voucher_List'].fromVoucherNumber);
    })

});


test('NXGF-TC-2094: TC_056_Journal Voucher List_Search_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("Verified that the Search bar displayed in main menu screen", async () => {
        await journalVoucherListPage.verifySearchBar();
    })

});

test('NXGF-TC-2095: TC_057_Journal Voucher List_Verify that the User is able to enter and Search the shortcut menu from search bar', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

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

    await test.step("Verified that the User is able to enter and Search the shortcut menu from search bar", async () => {
        await journalVoucherListPage.enterinSearchbar(JournalVoucherListPageData['TC_057_Journal_Voucher_List'].value);
    })

});

test('NXGF-TC-2096: TC_058_Journal Voucher List_Verify that the User is able to clear all the fields after entering details', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherListPage: JournalVoucherListPage = new JournalVoucherListPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherListPageData['TC_058_Journal_Voucher_List'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher List Button", async () => {
        await journalVoucherListPage.clickOnJournalVoucherListButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Voucher Number", async () => {
        await journalVoucherListPage.enterFromVoucherNumber(JournalVoucherListPageData['TC_058_Journal_Voucher_List'].fromVoucherNumber);
    })

    await test.step("User Enter To Voucher Number", async () => {
        await journalVoucherListPage.enterToVoucherNumber(JournalVoucherListPageData['TC_058_Journal_Voucher_List'].tovoucherNumber);
    })

    await test.step("User Select Voucher type", async () => {
        await journalVoucherListPage.selectVoucherType(JournalVoucherListPageData['TC_058_Journal_Voucher_List'].voucherType);
    })

    await test.step("User Click on ClearAll Button", async () => {
        await journalVoucherListPage.clickonClearAllButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherListPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Verified all filed empty are not", async () => {
        await journalVoucherListPage.verifyAdvancedSearchfieldisEmpty();
    })

    await test.step("--------------End the Journal Voucher List Testclass----------------------", async () => {
        console.log("--------------End the Journal Voucher List Testclass----------------------")
    })
})