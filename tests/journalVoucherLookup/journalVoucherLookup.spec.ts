import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { JournalVoucherLookupPage } from '../../page-objects/journalVoucherLookup-page/journalVoucherLookup-pages';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const JournalVoucherLookupPageData = require(`../../testdata/${process.env.ENV || 'eu'}/journalVoucherLookup.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-2006: TC_000_Journal Voucher Lookup_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Journal Voucher Lookup Testclass----------------------", async () => {
        console.log("--------------Start the Journal Voucher Lookup Testclass----------------------")
    })
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

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
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();

    })
    await test.step("Verify Breadcrumbs Text", async () => {
        await journalVoucherLookupPage.verifyBreadCrumbsText(JournalVoucherLookupPageData['TC_000_Journal_Voucher_Lookup'].breadcrumbsText);

    })

});

test('NXGF-TC-2007: TC_001_Journal Voucher Lookup_Verify that the main menu option is clickable', async ({ page }) => {

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

test('NXGF-TC-2008: TC_002_Journal Voucher Lookup_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await journalVoucherLookupPage.verifyDashboardText(JournalVoucherLookupPageData['TC_002_Journal_Voucher_Lookup'].dashboardText);
    })

});

test('NXGF-TC-2009: TC_003_Journal Voucher Lookup_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

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

        await journalVoucherLookupPage.verifyJournalVoucherShortcutButton();

    })

});

test('NXGF-TC-2010: TC_004_Journal Voucher Lookup_Verify that the user is able to navigate to the Journal Voucher Lookup screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

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

        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher Lookup screen", async () => {
        await journalVoucherLookupPage.verifyJournalVoucherLookupText(JournalVoucherLookupPageData['TC_004_Journal_Voucher_Lookup'].journalVocherText)

    })

});

test('NXGF-TC-2011: TC_005_Journal Voucher Lookup_Verify that the screen is divided into two sections - search and results grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

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

        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("Verified that the user is able to see journal Voucher Lookup search Section", async () => {
        await journalVoucherLookupPage.verifyjournalVoucherLookupsearchSection();
    })

    await test.step("Verified that the user is able to see journal Voucher Lookup Grid Section", async () => {
        await journalVoucherLookupPage.verifyjournalVoucherLookupGridSection();
    })

});

test('NXGF-TC-2012: TC_006_Journal Voucher Lookup_Verify that the screen is titled as "Journal Voucher " and the Journal Voucher lookup tab selected ', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

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
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher Lookup screen", async () => {
        await journalVoucherLookupPage.verifyJournalVoucherLookupText(JournalVoucherLookupPageData['TC_004_Journal_Voucher_Lookup'].journalVocherText);

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
    })

});

test('NXGF-TC-2013: TC_008_Journal Voucher Lookup_Verify that the Organization is already selected on the top of the page (header)', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })


    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await journalVoucherLookupPage.verifyOrganizationName(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].orgName);

    })

});

test('NXGF-TC-2014: TC_009_Journal Voucher Lookup_Verify that the Organization name is beside the financial year on the top of the page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })


    await test.step("Uer Verified the organization name selected on the top of the page", async () => {
        await journalVoucherLookupPage.verifyOrganizationName(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].orgName);

    })

});

test('NXGF-TC-2016: TC_013_Journal Voucher Lookup_Verify that the Account number is a non mandatory field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Verified that the Account number is displayed ", async () => {
        await journalVoucherLookupPage.verifyAccountNumberField();

    })

});

test('NXGF-TC-2017: TC_014_Journal Voucher Lookup_Verify that the user is able to manually enter the Account number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter Account Number", async () => {
        await journalVoucherLookupPage.enterAccountNumber(JournalVoucherLookupPageData['TC_014_Journal_Voucher_Lookup'].accountNumber);

    })

});

test('NXGF-TC-2018: TC_015_Journal Voucher Lookup_Verify that the Account name is a non mandatory field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_008_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Verified that the Account name is displayed ", async () => {
        await journalVoucherLookupPage.verifyAccountNameField();

    })

});


test('NXGF-TC-2019: TC_016_Journal Voucher Lookup_Verify that the user is able to search the details only with account name', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_016_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter Account Name ", async () => {
        await journalVoucherLookupPage.enterAccountName(JournalVoucherLookupPageData['TC_016_Journal_Voucher_Lookup'].accountName);

    })

    await test.step("User Click on Apply Button", async () => {
        await journalVoucherLookupPage.clickonApplyButton();
    })

    await test.step("User Click on Search Button", async () => {
        await journalVoucherLookupPage.clickonSearchButton();
    })


});

test('NXGF-TC-2020: TC_017_Journal Voucher Lookup_Verify that the Voucher type is dropdown list with predefined values', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_016_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Click on Voucher type", async () => {
        await journalVoucherLookupPage.clickonVoucherType();
    })

    await test.step("User Verified the vocher type dropdown list", async () => {
        await journalVoucherLookupPage.verifyVoucherTypeDropdownList();
    })

});

test('NXGF-TC-2021: TC_018_Journal Voucher Lookup_Verify that the user is able to enter the a number in the "From Voucher Number" field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_018_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Voucher Number", async () => {
        await journalVoucherLookupPage.enterFromVoucherNumber(JournalVoucherLookupPageData['TC_018_Journal_Voucher_Lookup'].fromVoucherNumber);
    })

});

test('NXGF-TC-2022: TC_019_Journal Voucher Lookup_Verify that the from Voucher number is smaller than the To Voucher number', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_019_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Voucher Number", async () => {
        await journalVoucherLookupPage.enterFromVoucherNumber(JournalVoucherLookupPageData['TC_019_Journal_Voucher_Lookup'].fromVoucherNumber);
    })

    await test.step("User Enter To Voucher Number", async () => {
        await journalVoucherLookupPage.enterToVoucherNumber(JournalVoucherLookupPageData['TC_019_Journal_Voucher_Lookup'].toVoucherNumber);
    })

    await test.step("User Verified that the from Voucher number is smaller than the To Voucher number", async () => {
        await journalVoucherLookupPage.verifyErrorForVoucherNumber(JournalVoucherLookupPageData['TC_019_Journal_Voucher_Lookup'].errorMessage);
    })

});

test('NXGF-TC-2023: TC_021_Journal Voucher Lookup_Verify that the To Voucher number should be greater than the From Voucher number" error message is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_021_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Voucher Number", async () => {
        await journalVoucherLookupPage.enterFromVoucherNumber(JournalVoucherLookupPageData['TC_021_Journal_Voucher_Lookup'].fromVoucherNumber);
    })

    await test.step("User Enter To Voucher Number", async () => {
        await journalVoucherLookupPage.enterToVoucherNumber(JournalVoucherLookupPageData['TC_021_Journal_Voucher_Lookup'].toVoucherNumber);
    })

    await test.step("User Verified that the from Voucher number is smaller than the To Voucher number", async () => {
        await journalVoucherLookupPage.verifyErrorForVoucherNumber(JournalVoucherLookupPageData['TC_021_Journal_Voucher_Lookup'].errorMessage);
    })

});

test('NXGF-TC-2024: TC_022_Journal Voucher Lookup_Verify that the user is able to enter the amount in the amount field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_022_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Amount", async () => {
        await journalVoucherLookupPage.enterAmount(JournalVoucherLookupPageData['TC_022_Journal_Voucher_Lookup'].amount);
    })

});

test('NXGF-TC-2025: TC_023_Journal Voucher Lookup_Verify that the user is able to search only with the amount entered', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_023_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Amount", async () => {
        await journalVoucherLookupPage.enterAmount(JournalVoucherLookupPageData['TC_023_Journal_Voucher_Lookup'].amount);
    })

    await test.step("User Click on Apply Button", async () => {
        await journalVoucherLookupPage.clickonApplyButton();
    })

    await test.step("User Click on Search Button", async () => {
        await journalVoucherLookupPage.clickonSearchButton();
    })

    await test.step("User verified amount from grid", async () => {
        await journalVoucherLookupPage.verifyAmountFromGrid();
    })

});

test('NXGF-TC-2026: TC_031_Journal Voucher Lookup_Verify that the user is able to view the search button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_031_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Verified Search Button displayed", async () => {
        await journalVoucherLookupPage.verifySearchButton();
    })

});

test('NXGF-TC-2027: TC_045_Journal Voucher Lookup_Verify that after the search the result grid has all the details with the valid headers', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_031_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Verified Grid Header column name", async () => {
        await journalVoucherLookupPage.verifyGridHeaderCloumnName();
    })

});

test('NXGF-TC-2028: TC_046_Journal Voucher Lookup_Verify that the user is abel to click on Details hyperlink (edit icon)', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {

        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_031_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

});

test('NXGF-TC-2029: TC_047_Journal Voucher Lookup_Verify that the user is redirected to Journal Voucher information', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.verifyVoucherInformationTexr(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].voucherInfo);
    })

});

test('NXGF-TC-2030: TC_048_Journal Voucher Lookup_Verify that the user is able to view all the transactions related to the selected voucher', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified the transaction from voucher information screen", async () => {
        await journalVoucherLookupPage.verifyTransactionFromGrid();
    })

});

test('NXGF-TC-2031: TC_049_Journal Voucher Lookup_Verify that the voucher details screen is divided into three sections', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified the Sections from voucher information screen", async () => {
        await journalVoucherLookupPage.verifySectionsFromVoucherInfo();
    })

});

test('NXGF-TC-2032: TC_050_Journal Voucher Lookup_Verify that under the voucher details first section is with Voucher Type, Voucher Date, Voucher reference, voucher number, validation date and Validate Checkbox', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that under the voucher details first  section all fields", async () => {
        await journalVoucherLookupPage.verifyVoucherDetailsFirstSection();
    })

});

test('NXGF-TC-2033: TC_051_Journal Voucher Lookup_Verify that the user is able to click on Validate check box to validate the voucher', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that if the voucher is validated user should not bel able to edit the validated checkbox", async () => {
        await journalVoucherLookupPage.verifyValidatedCheckboxDisabled();
    })

});

test('NXGF-TC-2034: TC_052_Journal Voucher Lookup_Verify that the Validate checkbox is disabled', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that the Validate checkbox is disabled", async () => {
        await journalVoucherLookupPage.verifyValidatedCheckboxDisabled();
    })

});

test('NXGF-TC-2036: TC_054_Journal Voucher Lookup_Verify that the second section of a voucher details has a grid in it with all the details of the transaction under a voucher', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_047_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that under the voucher details first  section all fields", async () => {
        await journalVoucherLookupPage.verifyVoucherDetailsFirstSection();
    })

});

test('NXGF-TC-2038: TC_057_Journal Voucher Lookup_Verify the the user is able to view below the grid, Records per page:', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Verified that Records per page: is displayed", async () => {
        await journalVoucherLookupPage.verifyRecordsPerPageText(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].expectedText);
    })

});

test('NXGF-TC-2039: TC_058_Journal Voucher Lookup_Verify that the user is able to view the item counts in the drop down', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);
    const countValues = [' 50 ', ' 100 ', ' 150 ' , ' 200 ' , ' 250 '];

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Click On Records per page dropdown", async () => {
        await sleep(2000);
        await journalVoucherLookupPage.clickOnRecordsPerPageDropdown(countValues);
    })

})

test('NXGF-TC-2040: TC_059_Journal Voucher Lookup_Verify that the user is able to choose from the dropdown the item counts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("Click On Records per page dropdown option", async () => {
        await sleep(2000);
        await journalVoucherLookupPage.clickOnRecordsPerPageDropdownOption();
    })

})

test('NXGF-TC-2041: TC_062_Journal Voucher Lookup_Verify that the third section grid shows the Currency, Total Debit, Total Credit, Balance', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("User Vrified that the third section grid", async () => {
        await journalVoucherLookupPage.verifyVoucherDetailsThirdSection();
    })

})


test('NXGF-TC-2042: TC_063_Journal Voucher Lookup_Verify that the differences are indicated as per the amount and the currency', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click On Edit voucher button", async () => {
        await journalVoucherLookupPage.clickOnEditJournalVoucherButton();
    })

    await test.step("User Verified Currency and amount", async () => {
        await journalVoucherLookupPage.verifyCurrencyAndAmountFromGrid();
    })

})


test('NXGF-TC-2044: TC_065_Journal Voucher Lookup_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_057_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Verified that the Search bar displayed in main menu screen", async () => {
        await journalVoucherLookupPage.verifySearchBarisDisplay();
    })

})

test('NXGF-TC-2046: TC_066_Journal Voucher Lookup_Verify that the User is able to clear all the fields after entering details', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_066_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherShrtcutsButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherLookupPage.clickOnJournalVoucherLookupButton();
        await sleep(5000);
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Enter From Voucher Number", async () => {
        await journalVoucherLookupPage.enterFromVoucherNumber(JournalVoucherLookupPageData['TC_066_Journal_Voucher_Lookup'].fromVoucherNumber);
    })

    await test.step("User Enter To Voucher Number", async () => {
        await journalVoucherLookupPage.enterToVoucherNumber(JournalVoucherLookupPageData['TC_066_Journal_Voucher_Lookup'].tovoucherNumber);
    })

    await test.step("User Select Voucher type", async () => {
        await journalVoucherLookupPage.selectVoucherType();
    })

    await test.step("User Enter Account Name", async () => {
        await journalVoucherLookupPage.enterAccountName(JournalVoucherLookupPageData['TC_066_Journal_Voucher_Lookup'].accountName);
    })

    await test.step("User Enter Account Number", async () => {
        await journalVoucherLookupPage.enterAccountNumber(JournalVoucherLookupPageData['TC_066_Journal_Voucher_Lookup'].accountNumber);
    })

    await test.step("User Click on ClearAll Button", async () => {
        await journalVoucherLookupPage.clickonClearAllButton();
    })

    await test.step("User Click on Advanced Search Button", async () => {
        await journalVoucherLookupPage.clickOnAdvancedSearchButton();
    })

    await test.step("User Verified all filed empty are not", async () => {
        await journalVoucherLookupPage.verifyAdvancedSearchfieldisEmpty();
    })

})

test('NXGF-TC-2045: TC_067_Journal Voucher Lookup_Verify that the User is able to enter and Search the shortcut menu from search bar ', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherLookupPage: JournalVoucherLookupPage = new JournalVoucherLookupPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Select Organization", async () => {
        await dashboardPage.selectOrganization(JournalVoucherLookupPageData['TC_067_Journal_Voucher_Lookup'].organization);
        await sleep(2000);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
        await sleep(2000);
    })

    await test.step("User Enter in Search bar", async () => {
        await journalVoucherLookupPage.enterinSearchbar(JournalVoucherLookupPageData['TC_067_Journal_Voucher_Lookup'].value);
    })

    await test.step("--------------End the Journal Voucher Lookup Testclass----------------------", async () => {
        console.log("--------------End the Journal Voucher Lookup Testclass----------------------")
    })

})

