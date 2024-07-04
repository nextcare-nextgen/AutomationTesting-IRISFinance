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


