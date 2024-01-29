import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { FxRatesPage } from '../../page-objects/fx-rates-pages/fx-rates-page';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const fxRatesData = require(`../../testdata/${process.env.ENV || 'eu'}/fxrates.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test.only('TC_001_Login_Access_VerifyUserIsAbleToAccessIRIS MAWISTA Portal', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    await dashboardPage.clickOnMenuIconButton();

    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    // await page.pause();

});

test.only('TC_000_FX_Rates_Verify that Valid breadcrumbs are displayed', async ({ page }) => {
  
    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await fxRatesPage.verifyBreadCrumbsText(fxRatesData['TC_000_FX_Rates'].breadcrumbsText)

});

test.only('TC_001_FX_Rates_Verify that the user is able to navigate to main menu', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    await dashboardPage.clickOnMenuIconButton();
    // await page.pause();

});

test.only('TC_002_FX_Rates_Verify that the user is able to land on the dashboard page after successful login', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await fxRatesPage.verifyDashboardText(fxRatesData['TC_000_FX_Rates'].dashboardText)
    // await page.pause();

});


test.only('TC_003_FX_Rates_Verify that FX Rates shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    // await page.pause();

});


test.only('TC_004_FX_Rates_Verify that the user is able to see FX Rates shortcut menu button in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await page.pause();
    await fxRatesPage.verifyFXRateShortcutButton();
   

});



test.only('TC_028_FX_Rates_Add new FX Rates_Verify that user should be able to select From Currency from dropdown', async ({ page }) => {
  
    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await fxRatesPage.clickOnAddFxRatesButton();
await page.pause();
    await fxRatesPage.selectFromCurrency(fxRatesData['TC_028_FX_Rates'].fromCurrency)
  

});

test.only('TC_031_FX_Rates_Add new FX Rates_Verify that user should be able to Enter Rate', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await fxRatesPage.clickOnAddFxRatesButton();
    await fxRatesPage.getRate(fxRatesData['TC_031_FX_Rates'].rate);
    await page.pause();

});

test.only('TC_033_FX_Rates_Add new FX Rates_Verify that user should able to click on Close button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await fxRatesPage.clickOnAddFxRatesButton();
    await fxRatesPage.clickOnCloseButton();
    await page.pause();
});

test.only('TC_034_FX_Rates_Add new FX Rates_Verify that the Records per page title should displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await fxRatesPage.verifyRecordsPerPageTitle(fxRatesData['TC_034_FX_Rates'].title);
    await page.pause();
});

test.only('TC_035_FX_Rates_Add new FX Rates_Verify that the user is able to view the item counts (5,10,25) in the drop down', async ({ page }) => {

    const countValues = [ " 10 ", " 15 ", " 20 ", " 30 ", " 50 ", " 100 ", " 250 " ];
    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await page.pause();
    await fxRatesPage.clickOnRecordsPerPageDropdown(countValues);
    await page.pause();
});

test.only('TC_036_FX_Rates_Add new FX Rates_Verify that the user is able to choose from the dropdown the item counts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.clickOnFxRatesShrtcutsButton();
    await page.pause();
    await fxRatesPage.clickOnRecordsPerPageDropdownOption();
    await page.pause();
});

test.only('TC_037_FX_Rates_Add new FX Rates_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await loginPage.gotoLoginPage(data['Login-Access'].url);

    await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    await dashboardPage.clickOnMenuIconButton();
    await sleep(2000);
    await fxRatesPage.verifySearchBar();

});