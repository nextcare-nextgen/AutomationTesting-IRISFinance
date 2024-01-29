import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-pages/dashboard-page";
const data = require(`../testdata/${process.env.ENV || "uat"}/login.json`) as Record<string, any>;

test("TC_001 Verify that the user is able to Login with Valid Credentials", async ({ page, }) => {

  const loginPage: LoginPage = new LoginPage(page);

  const dashboardPage: DashboardPage = new DashboardPage(page);

  await loginPage.gotoLoginPage(data["TC-Login-2"].url);

  await loginPage.verifyPageTitle(data["TC-Login-2"].expectedPageTitle);

  await loginPage.loginToApplication(data["TC-Login-2"].userNameInput, data["TC-Login-2"].passwordInput);

  //await dashboardPage.clickOnPendingClaimsButton();

  await loginPage.verifyPageTitle(data["TC-Login-2"].claimsDashboardTitle);
});
