import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { FinancialOrganizationsPage } from '../../page-objects/financialOrganizations-pages/financialOrganizations-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const FinancialOrganizationsData = require(`../../testdata/${process.env.ENV || 'eu'}/financialOrganizations.json`) as Record<string, any>;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


test.only('NXGF-TC-1647: TC_000_Login_Access_Verify that the user is able to access the IRIS Finance portal', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

});

test.only('NXGF-TC-1648: TC_001_Login_Access_Verify that the user is able to enter the username and password ', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })
});

test.only('NXGF-TC-1650: TC_002_Login_Access_Verify that user is able to click on sign in button', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })
});

test.only('NXGF-TC-1652: TC_003_Verify that the user is able to click on the Remember me checkbox', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await page.pause();
        await loginPage.enterLoginDetails(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);
    })
});

test.only('NXGF-TC-1658: TC_010_Verify that the user is able to see login UI', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("Verified that the user is able to see login UI", async () => {
        await loginPage.verifyLoginUI();
    })

    await test.step("Verified that the user is able to see login Page title", async () => {
        await loginPage.verifyPageTitle(FinancialOrganizationsData['TC_010'].pagetitle);
    })

});

test('NXGF-TC-1660: TC_011_Verify that the main menu option is clickable', async ({ page }) => {

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

test('NXGF-TC-1662: TC_012_Verify that the user is able to land on the dashboard after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await financialOrganizationsPage.verifyDashboardText(FinancialOrganizationsData['TC_012'].dashboardText);
    })

});

test('NXGF-TC-1664: TC_013_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);


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
        await financialOrganizationsPage.verifyFinancialOrganizationShrtcutButton();

    })

});

test('NXGF-TC-1666: TC_014_Verify that all the shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);


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

    await test.step("Verified that the user is able to see shortcut menu buttons in the main menu page", async () => {
        await financialOrganizationsPage.verifyAllShrtcutButtonIsClickable();

    })

});

test('NXGF-TC-1668: TC_028_Verify that the user is able to view the Organization shortcut icon in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);


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
        await financialOrganizationsPage.verifyFinancialOrganizationShrtcutButton();

    })

});

test('NXGF-TC-1670: TC_029_Verify that the user is able to click on the Organization icon', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);

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

    await test.step("Verified that the user is able to click on the Organization icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();

    }) 

});

test('NXGF-TC-1672: TC_030_Verift that the user is redirected to the Organizations page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);
    
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

    await test.step("Verified that the user is able to click on the Organization icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();

    }) 

    await test.step("Verified that the user is able to navigate to the Journal Voucher Lookup screen", async () => {
        await financialOrganizationsPage.verifyOrganizationText(FinancialOrganizationsData['TC_030'].organizationText)
    })

});

test('NXGF-TC-1674: TC_031_Verify that the user is able to view the "Organizations" title in bold', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const financialOrganizationsPage: FinancialOrganizationsPage = new FinancialOrganizationsPage(page);
    
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

    await test.step("Verified that the user is able to click on the Organization icon", async () => {
        await financialOrganizationsPage.clickOnFinancialOrganizationShrtcutsButton();

    }) 

    await test.step("Verified that the user is able to view the 'Organizations' title in bold", async () => {
        await page.pause();
        const element = await page.waitForSelector(
            "//h1[@title='Organizations']"
          )
          const fontWeight = await element.evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('font-weight')
            
          })
          console.log(fontWeight);
          await page.pause();
       // await financialOrganizationsPage.verifyTextisinBold();
    })


});
