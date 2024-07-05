import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { CardTypesPage } from '../../page-objects/cardTypes-pages/cardTypes-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const CardTypesData = require(`../../testdata/${process.env.ENV || 'eu'}/cardTypes.json`) as Record<string, any>;


test('NXGF-TC-1856: TC_000_card types_Verify that the user is able to navigate to the Organization screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("--------------Start the Financial Organization - Card Types Testclass----------------------", async () => {
        console.log("--------------Start the Financial Organization - Card Types Testclass----------------------")
    })

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to navigate to the Organization screen", async () => {
        await cardTypesPage.verifyOrganizationText(CardTypesData['TC_000_card types'].organizationText)
    })

});

test('NXGF-TC-1857: TC_001_card types_Verify that the user is able to view the active organizations', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the user is able to view the active organizations", async () => {
        await cardTypesPage.verifyActiveAccountsFromGrid()
    })

});


test('NXGF-TC-1858: TC_002_card types_Verify that the user is able to search for any organization with organization name or code', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("User Enter Organization Name", async () => {
        await cardTypesPage.enterOrganizationName(CardTypesData['TC_002_card types'].organizationName);
    })

    await test.step("User Enter Organization Code", async () => {
        await cardTypesPage.enterOrganizationCode(CardTypesData['TC_002_card types'].organizationCode);
    })

    await test.step("User Click on Search", async () => {
        await cardTypesPage.clickOnSearch();
    })

    await test.step("Verified that the user is able to search for any organization with organization name or code", async () => {
        await cardTypesPage.verifyOrgNameAndCodeFromGrid();
    })

});

test('NXGF-TC-1859: TC_003_card types_Verify that the user is able to view the details option in the search result grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Verified that the Edit Organization Button is displayed", async () => {
        await cardTypesPage.VerifyEditOrganizationsButtons();
    })

});

test('NXGF-TC-1860: TC_004_card types_Verify that the user is able to view two options Financial information and Organization card types', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on Edit Organization button", async () => {
        await cardTypesPage.clickonEditOrganizationButton();
    })

    await test.step("Verified that the after click on details button Financials information and Organization card type is displayed", async () => {
        await cardTypesPage.verifyFinancialInfo(CardTypesData['TC_004_card types'].financialInfo);
    })

    await test.step("Verified that the after click on details button Financials information and Organization card type is displayed", async () => {
        await cardTypesPage.verifyOrgCardType(CardTypesData['TC_004_card types'].cardTypes);
    })

});

test('NXGF-TC-1861: TC_005_card types_Verify that the user is able to click on the Organization Card types and is redirected to Organization Card Types screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on Edit Organization button", async () => {
        await cardTypesPage.clickonEditOrganizationButton();
    })

    await test.step("Click on Card Types", async () => {
        await cardTypesPage.clickonCardType();
    })

    await test.step("Verified that the user is able to click on the Organization Card types and is redirected to Organization Card Types screen", async () => {
        await cardTypesPage.verifyBreadcrumbsCardType(CardTypesData['TC_005_card types'].breadcrumbsCardType);
    })

});

test('NXGF-TC-1862: TC_006_card types_Verify that the user is able to add a new card with add(+) option', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const cardTypesPage: CardTypesPage = new CardTypesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Click on the Organization shortcut icon", async () => {
        await cardTypesPage.clickOnFinancialOrganizationShrtcutsButton();
    })

    await test.step("Click on Edit Organization button", async () => {
        await cardTypesPage.clickonEditOrganizationButton();
    })

    await test.step("Click on Card Types", async () => {
        await cardTypesPage.clickonCardType();
    })

    await test.step("Verified that the user is able to add a new card with add(+) option", async () => {
        await cardTypesPage.clickonAddCardType();
    })

});



