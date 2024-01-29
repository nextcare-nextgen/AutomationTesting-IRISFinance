import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;

test('TC_002 Verify the Search Box With Valid Data on Pending Claims section', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-2'].url);

    await loginPage.verifyPageTitle(data['TC-Login-2'].expectedPageTitle);

    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await loginPage.verifyPageTitle(data["TC-Login-2"].claimsDashboardTitle);
    
    //await dashboardPage.clickOnPendingClaimsButton();

    //await dashboardPage.enterSearchData(dashboardData['TC-Pending-Claims-1'].searchDataCard);

});