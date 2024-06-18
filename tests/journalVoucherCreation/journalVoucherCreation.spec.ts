import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { JournalVoucherCreationPage } from '../../page-objects/journalVoucherCreation-pages/journalVoucherCreation-page';
import '../../page-objects/utilities-pages/global-setup.ts';
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const JournalVoucherCreationPageData = require(`../../testdata/${process.env.ENV || 'eu'}/journalVoucherCreation.json`) as Record<string, any>;


test('NXGF-TC-3852: TC_000_Journal Voucher creation_Verify that Valid breadcrumbs are displayed', async ({ page }) => {

    await test.step("--------------Start the Journal Voucher Creation Testclass----------------------", async () => {
        console.log("--------------Start the Journal Voucher Creation Testclass----------------------")
    })
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })
    await test.step("Verify Breadcrumbs Text", async () => {
        await journalVoucherCreationPage.verifyBreadCrumbsText(JournalVoucherCreationPageData['TC_000_Journal_Voucher_Creation'].breadcrumbsText);

    })

});

test('NXGF-TC-3853: TC_001_Journal Voucher creation_Verify that the main menu option is clickable', async ({ page }) => {

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
    })

});

test('NXGF-TC-3854: TC_002_Journal Voucher creation_Verify that the user is able to land on the dashboard page after successful login.', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("Verify Dashborad Text and land on dashboard page", async () => {
        await journalVoucherCreationPage.verifyDashboardText(JournalVoucherCreationPageData['TC_002_Journal_Voucher_Creation'].dashboardText);
    })

});

test('NXGF-TC-3855: TC_003_Journal Voucher creation_Verify that the user is able to see shortcut menu buttons in the main menu page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Verified that the User is able to See Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.verifyJournalVoucherShortcutButton();
    })

});

test('NXGF-TC-3856: TC_004_Journal Voucher creation_Verify that all the shortcut buttons are clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("Verified that all the shortcut buttons are clickable", async () => {
        await journalVoucherCreationPage.verifyJShortcutButtonAreClickable();
    })

});

test('NXGF-TC-3857: TC_005_Journal Voucher creation_Verify that the user is able to navigate to the Journal Voucher creation from Journal Voucher lookup screen', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher creation from Journal Voucher lookup screen", async () => {
        await journalVoucherCreationPage.verifyAddJournalVoucherLookupTitle(JournalVoucherCreationPageData['TC_005_Journal_Voucher_Creation'].title);
    })

});

test('NXGF-TC-3858: TC_006_Journal Voucher creation_Verify that the user is able to click on the Journal Voucher creation  icon', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("Verified that the user is able to click on the Journal Voucher creation  icon", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

});

test('NXGF-TC-3859: TC_007_Journal Voucher creation_Verift that the user is redirected to the Journal Voucher creation page', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("Verified that the user is able to navigate to the Journal Voucher creation from Journal Voucher lookup screen", async () => {
        await journalVoucherCreationPage.verifyAddJournalVoucherLookupTitle(JournalVoucherCreationPageData['TC_007_Journal_Voucher_Creation'].title);
    })

});

test('NXGF-TC-3860: TC_008_Journal Voucher creation_Verify that the user is able to view the "Manage Journal Voucher" in bold', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("Verified that the user is able to view the 'Manage Journal Voucher' in bold", async () => {
        await journalVoucherCreationPage.verifyTitleinBold();
    })

});

test('NXGF-TC-3861: TC_009_Journal Voucher creation_Verify that the screen is divided into three sections', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("Verified that the screen is divided into three sections", async () => {
        await journalVoucherCreationPage.verifyAddJournalVoucherLookupScections();
    })

});

test('NXGF-TC-3866: TC_019_Journal Voucher creation_Verify that the Voucher type has predefinded dropdown values', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("User Click on Journal Voucher Type", async () => {
        await journalVoucherCreationPage.clickonVoucherType();
    })

    await test.step("Verified that the Voucher type has predefinded dropdown values", async () => {
        await journalVoucherCreationPage.verifyVoucherTypeDropdownList();
    })

});

test('NXGF-TC-3867: TC_020_Journal Voucher creation_Verify that the user is able to enter the Voucher type manually', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("User Click on Journal Voucher Type", async () => {
        await journalVoucherCreationPage.clickonVoucherType();
    })

    await test.step("Verified that the Voucher type has predefinded dropdown values", async () => {
        await journalVoucherCreationPage.selectVoucherType(JournalVoucherCreationPageData['TC_020_Journal_Voucher_Creation'].voucherType);
    })

});

test('NXGF-TC-3868: TC_022_Journal Voucher creation_Verify that the Description field is a text box', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("User Click on Voucher Transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("User Click on Voucher Transaction Button", async () => {
        await journalVoucherCreationPage.verifyDescriptionInputBox();
    })

});

test('NXGF-TC-3869: TC_023_Journal Voucher creation_Verify that the user is able to enter text in the description text field', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("User Click on Voucher Transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the user is able to enter text in the description text field", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_023_Journal_Voucher_Creation'].description);
    })

});

test('NXGF-TC-3870: TC_031_Journal Voucher creation_Verify that the + icon is clickable', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const journalVoucherCreationPage: JournalVoucherCreationPage = new JournalVoucherCreationPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access'].userNameInput, data['Login-Access'].passwordInput);

    })

    await test.step("User Click on Menu Icon", async () => {
        await dashboardPage.clickOnMenuIconButton();
    })

    await test.step("User Click on Journal Voucher Shortcut Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherShrtcutsButton();

    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnJournalVoucherLookupButton();
    })

    await test.step("User Click on Journal Voucher Lookup Button", async () => {
        await journalVoucherCreationPage.clickOnAddLookupVoucherCreationButton();
    })

    await test.step("Verifyied that the + icon is clickable", async () => {
        await journalVoucherCreationPage.VerifyAddVoucherTrancastionButtonEnable();
    })

});

