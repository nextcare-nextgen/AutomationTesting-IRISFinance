import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { JournalVoucherLookupPage } from '../../page-objects/journalVoucherLookup-page/journalVoucherLookup-pages';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const JournalVoucherLookupPageData = require(`../../testdata/${process.env.ENV || 'eu'}/journalVoucherLookup.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test('NXGF-TC-2006: TC_000_Journal Voucher Lookup_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

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

});

test('NXGF-TC-2008: TC_002_Journal Voucher Lookup_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
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