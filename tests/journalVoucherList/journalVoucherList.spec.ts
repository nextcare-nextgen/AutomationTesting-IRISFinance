import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { JournalVoucherListPage } from '../../page-objects/journalVoucherList-page/journalVoucherList-pages';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const JournalVoucherListPageData = require(`../../testdata/${process.env.ENV || 'eu'}/journalVoucherList.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-2060: TC_000_Journal Voucher List_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

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

test('NXGF-TC-2065: TC_005_Journal Voucher List_Verify that the screen is divided into two  sections with search fields and results grid', async ({ page }) => {

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

test('NXGF-TC-2072: TC_014_Journal Voucher List_Search_Verify that the  From Voucher  number is smaller to "To Voucher number" field', async ({ page }) => {

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