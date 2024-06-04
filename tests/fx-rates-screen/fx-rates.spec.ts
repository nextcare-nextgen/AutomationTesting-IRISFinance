import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
import { FxRatesPage } from '../../page-objects/fx-rates-pages/fx-rates-page';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const fxRatesData = require(`../../testdata/${process.env.ENV || 'eu'}/fxrates.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test('NXGF-TC-1871: TC_000_FX_Rates_Verify that Valid breadcrumbs are displayed', async ({ page }) => {
    
    await test.step("--------------Start the FX Rates Testclass----------------------", async () => {
        console.log("--------------Start the FX Rates Testclass----------------------")
    })

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Verified Breadcrumbs Text", async () => {
        await fxRatesPage.verifyBreadCrumbsText(fxRatesData['TC_000_FX_Rates'].breadcrumbsText)
    })

});

test('NXGF-TC-1872: TC_001_FX_Rates_Verify that the user is able to navigate to main menu', async ({ page }) => {

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

test('NXGF-TC-1873: TC_002_FX_Rates_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })

    await test.step("Verified that the user is able to land on the dashboard page after successful login.", async () => {
        await fxRatesPage.verifyDashboardText(fxRatesData['TC_002_FX_Rates'].dashboardText)
    })

});

test('NXGF-TC-1875: TC_003_FX_Rates_Verify that FX Rates shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

});

test('NXGF-TC-1874: TC_004_FX_Rates_Verify that the user is able to see FX Rates shortcut menu button in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("Verified that the user is able to see FX Rates shortcut menu button in the main menu page", async () => {
        await fxRatesPage.verifyFXRateShortcutButton();
    })

});

test('NXGF-TC-1876: TC_005_FX_Rates_Verify that the user is redirected to the FX Rates page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);


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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the user is able to navigate to the FX Rates screen", async () => {
        await fxRatesPage.verifyFXRatesText(fxRatesData['TC_005_FX_Rates'].fxRatesText)

    })

});

test('NXGF-TC-1878: TC_007_FX_Rates_Verify that the From date and To date is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the From date", async () => {
        await fxRatesPage.verifyFromDate();

    })

    await test.step("Verified that the To date", async () => {
        await fxRatesPage.verifyToDate();

    })

});

test('NXGF-TC-1879: TC_008_FX_Rates_Verify that the user is able to select From date and To date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User From Date and To Date", async () => {
        await fxRatesPage.enterFromAndToDate();

    })


});

test('NXGF-TC-1880: TC_009_FX_Rates_Verify that the From Currency field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the From Currency", async () => {
        await fxRatesPage.verifyFromCurrencyField();

    })

});

test('NXGF-TC-1881: TC_010_FX_Rates_Verify that the user should able to select From Currency', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the From Currency", async () => {
        await fxRatesPage.selectFromCurrency(fxRatesData['TC_010_FX_Rates'].fromCurrency);

    })

});

test('NXGF-TC-1882: TC_011_FX_Rates_Verify that the To Currency field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the To Currency", async () => {
        await fxRatesPage.verifyToCurrencyField();

    })

});

test('NXGF-TC-1883: TC_012_FX_Rates_Verify that the user should able to select To Currency', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the From Currency", async () => {
        await fxRatesPage.selectToCurrency(fxRatesData['TC_012_FX_Rates'].toCurrency);

    })

});

test('NXGF-TC-1884: TC_014_FX_Rates_Verify that the search icon and field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the search icon and field is displayed", async () => {
        await fxRatesPage.verifySearchbuttonField();

    })

});

test('NXGF-TC-1885: TC_013_FX_Rates_Verify that the Reset field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the Reset icon and field is displayed", async () => {
        await fxRatesPage.verifyResetbuttonField();

    })

});

test('NXGF-TC-1886: TC_015_FX_Rates_Verify that the user is able to search with From date to To date and get record from the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User From Date and To Date", async () => {
        await fxRatesPage.enterFromAndToDate();

    })

    await test.step("User Click on Search button", async () => {
        await fxRatesPage.clickOnSearchButton();
        await sleep(2000);
    })

    await test.step("Verified that the From Date and To date from Grid", async () => {
        await fxRatesPage.verifyFromDateFromGrid();
        await fxRatesPage.verifyToDateFromGrid();
    })

});

test('NXGF-TC-1887: TC_016_FX_Rates_Verify that the user is able to search with From Currency to To currency and get record from the grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Select the From Currency", async () => {
        await fxRatesPage.selectFromCurrency(fxRatesData['TC_016_FX_Rates'].fromCurrency);

    })

    await test.step("Select that the To Currency", async () => {
        await fxRatesPage.selectToCurrency(fxRatesData['TC_016_FX_Rates'].toCurrency);

    })

    await test.step("User Click on Search button", async () => {
        await fxRatesPage.clickOnSearchButton();
        await sleep(2000);
    })

    await test.step("Verified that the From Currency and To Currency from Grid", async () => {
        await fxRatesPage.verifyFromCurrencyFromGrid();
        await fxRatesPage.verifyToCurrencyFromGrid();
    })

});

test('NXGF-TC-1888: TC_017_FX_Rates_Verify that the after click on Reset To currency and From currency should reset', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Select the From Currency", async () => {
        await fxRatesPage.selectFromCurrency(fxRatesData['TC_016_FX_Rates'].fromCurrency);

    })

    await test.step("Select that the To Currency", async () => {
        await fxRatesPage.selectToCurrency(fxRatesData['TC_016_FX_Rates'].toCurrency);

    })

    await test.step("User Click on Reset button", async () => {
        await fxRatesPage.clickOnResetButton();
    })

    await test.step("Verified that the after click on Reset To currency and From currency should reset", async () => {
        await fxRatesPage.verifyafterResetCurrencyFieldReset();
    })

});

test('NXGF-TC-1889: TC_018_FX_Rates_Verify that the all column field should displayed from grid', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the all column field should displayed from grid", async () => {
        await fxRatesPage.verifyAllColumnField();
    })

});

test('NXGF-TC-1890: TC_019_FX_Rates_Verify that the Add FX rates (+) button should displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the Add FX rates (+) button should displayed", async () => {
        await fxRatesPage.verifyAddFxRateButton();
    })

});

test('NXGF-TC-1891: TC_020_FX_Rates_Add new FX Rates_Verify that the user is able to click on Add new FX rate (+) button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the user is able to click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

});

test('NXGF-TC-1892,NXGF-TC-1893: TC_021_FX_Rates_Add new FX Rates_Verify that the user is able to redirect to Add new FX rate screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

    await test.step("Verified that the user is able to redirect to Add new FX rate screen", async () => {
        await fxRatesPage.verifyAddFXRatesScreenText(fxRatesData['TC_021_FX_Rates'].addFxRateText);
    })

});

test('NXGF-TC-1894: TC_023_FX_Rates_Add new FX Rates_Verify that the From currency field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

    await test.step("Verified that the From currency field is displayed", async () => {
        await fxRatesPage.verifyAddFxRateCurrencyField();
    })

});

test('NXGF-TC-1895: TC_024_FX_Rates_Add new FX Rates_Verify that the To currency field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

    await test.step("Verified that the To currency field is displayed", async () => {
        await fxRatesPage.verifyAddFxRateToCurrencyField();
    })

});

test('NXGF-TC-1896: TC_025_FX_Rates_Add new FX Rates_Verify that the Start date and End Date field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

    await test.step("Verified that the Start date and End Date field is displayed", async () => {
        await fxRatesPage.verifyAddFxRateStartDateEndDateField();
    })

});

test('NXGF-TC-1897: TC_026_FX_Rates_Add new FX Rates_Verify that the Rate field is displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

    await test.step("Verified that the Rate field is displayed", async () => {
        await fxRatesPage.verifyAddFxRateRateField();
    })

});

test('NXGF-TC-1898: TC_027_FX_Rates_Add new FX Rates_Verify that the Validated checkbox should disabled', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Click on Add new FX rate (+) button", async () => {
        await fxRatesPage.clickOnAddFxRateButton();
    })

    await test.step("Verified that the Validated checkbox should disabled", async () => {
        await fxRatesPage.verifyAddFxRateValidatedisDisabled();
    })

});

test('NXGF-TC-1899: TC_028_FX_Rates_Add new FX Rates_Verify that user should be able to select From Currency from dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on ADD FX Rates Button", async () => {
        await fxRatesPage.clickOnAddFxRatesButton();
    })

    await test.step("User Select From Currency", async () => {
        await fxRatesPage.selectAddFXRateFromCurrency(fxRatesData['TC_028_FX_Rates'].fromCurrency)
    })

});

test('NXGF-TC-1900: TC_029_FX_Rates_Add new FX Rates_Verify that user should be able to select To Currency from dropdown', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on ADD FX Rates Button", async () => {
        await fxRatesPage.clickOnAddFxRatesButton();
    })

    await test.step("User Select To Currency", async () => {
        await fxRatesPage.selectAddFXRateToCurrency(fxRatesData['TC_029_FX_Rates'].toCurrency)
    })

});

test('NXGF-TC-1901: TC_030_FX_Rates_Add new FX Rates_Verify that user should be able to select start date and End Date', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on ADD FX Rates Button", async () => {
        await fxRatesPage.clickOnAddFxRatesButton();
    })

    await test.step("User start Date and End Date", async () => {
        await fxRatesPage.enterStartAndEndDate();

    })

});

test('NXGF-TC-1902: TC_031_FX_Rates_Add new FX Rates_Verify that user should be able to Enter Rate', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on ADD FX Rates Button", async () => {
        await fxRatesPage.clickOnAddFxRatesButton();
    })

    await test.step("User get the Rate data", async () => {
        await fxRatesPage.getRate(fxRatesData['TC_031_FX_Rates'].rate);
    })

});

test('NXGF-TC-1903: TC_032_FX_Rates_Add new FX Rates_Verify that Create Button should be enable after filling mandatory fields', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on ADD FX Rates Button", async () => {
        await fxRatesPage.clickOnAddFxRatesButton();
    })

    await test.step("User Select From Currency", async () => {
        await fxRatesPage.selectAddFXRateFromCurrency(fxRatesData['TC_032_FX_Rates'].fromCurrency)
    })

    await test.step("User Select To Currency", async () => {
        await fxRatesPage.selectAddFXRateToCurrency(fxRatesData['TC_032_FX_Rates'].toCurrency)
    })

    await test.step("User start Date and End Date", async () => {
        await fxRatesPage.enterStartAndEndDate();

    })

    await test.step("User get the Rate data", async () => {
        await fxRatesPage.getRate(fxRatesData['TC_032_FX_Rates'].rate);
    })

    await test.step("Verified that Create Button should be enable after filling mandatory fields", async () => {
        await fxRatesPage.verifyCreateButton();
    })
});

test('NXGF-TC-1904: TC_033_FX_Rates_Add new FX Rates_Verify that user should able to click on Close button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on ADD FX Rates Button", async () => {
        await fxRatesPage.clickOnAddFxRatesButton();
    })

    await test.step("User Click on Close Button", async () => {
        await fxRatesPage.clickOnCloseButton();
    })

});

test('NXGF-TC-1905: TC_034_FX_Rates_Add new FX Rates_Verify that the Records per page title should displayed', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("Verified that the Records per page title should displayed", async () => {
        await fxRatesPage.verifyRecordsPerPageTitle(fxRatesData['TC_034_FX_Rates'].title);
    })

});

test('NXGF-TC-1906: TC_035_FX_Rates_Add new FX Rates_Verify that the user is able to view the item counts (5,10,25) in the drop down', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on Records per page dropdown", async () => {
        await fxRatesPage.clickOnRecordsPerPageDropdown();
    })

});

test('NXGF-TC-1907: TC_036_FX_Rates_Add new FX Rates_Verify that the user is able to choose from the dropdown the item counts', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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

    await test.step("User Click on FX Rates Shortcut Button", async () => {
        await fxRatesPage.clickOnFxRatesShrtcutsButton();
    })

    await test.step("User Click on Records per page dropdown options", async () => {
        await fxRatesPage.clickOnRecordsPerPageDropdownOption();
    })
});

test('NXGF-TC-1908: TC_037_FX_Rates_Add new FX Rates_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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
        await fxRatesPage.verifySearchBar();
    })

})

test('NXGF-TC-1909: TC_038_FX_Rates_Add new FX Rates_Verify that the User is able to enter and Search the shortcut menu from search bar', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const fxRatesPage: FxRatesPage = new FxRatesPage(page);

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
        await fxRatesPage.enterinSearchbar(fxRatesData['TC_038_FX_Rates'].value);
    })

    await test.step("--------------End the FX rates Testclass----------------------", async () => {
        console.log("--------------End the FX rates Testclass----------------------")
    })

});