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

test('NXGF-TC-3871: TC_032_Journal Voucher lookup_Verify that once clicked on + icon page is redirect to "Add Voucher Transaction" popu screen', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that once clicked on + icon page is redirect to 'Add Voucher Transaction' popu screen", async () => {
        await journalVoucherCreationPage.verifyAddVoucherTrancastionTitle(JournalVoucherCreationPageData['TC_032_Journal_Voucher_Creation'].title);
    })

});


test('NXGF-TC-3872: TC_033_Journal Voucher lookup_Verify that the Account name, description, Amount, Currency, Amount CV1, Amount CV 2, Valid date, Debit and save button', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verifed that the Account name, description, Amount, Currency, Amount CV1, Amount CV 2, Valid date, Debit and save button", async () => {
        await journalVoucherCreationPage.verifyAddVoucherTransactionFields();
    })

});

test('NXGF-TC-3873: TC_034_Journal Voucher lookup_Verify that the Amount, Currency, Amount CV1,  Amount CV2, Value date and Description are mandatory fields', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Amount, Currency, Amount CV1,  Amount CV2, Value date and Description are mandatory fields", async () => {
        await journalVoucherCreationPage.verifyMandatoryAddVoucherTransactionFields();
    })

});

test('NXGF-TC-3874: TC_035_Journal Voucher creation_Verify that the Account name is a auto complete smart search field', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_035_Journal_Voucher_Creation'].value);
    })

});

test('NXGF-TC-3875,NXGF-TC-3876,NXGF-TC-3877: TC_036_Journal Voucher creation_Verify that the user is able to select the required Account name', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_036_Journal_Voucher_Creation'].value);
    })

});

test('NXGF-TC-3878,NXGF-TC-3879: TC_040_Journal Voucher creation_Verify that the CV1 and CV2 (Counter Value) is dependent on the Amount currency', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_040_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_040_Journal_Voucher_Creation'].currency);
    })

    await test.step("Verified that the CV1 and CV2 (Counter Value) is dependent on the Amount currency", async () => {
        await journalVoucherCreationPage.verifyCV1Amount();
        await journalVoucherCreationPage.verifyCV2Amount();
    })
});

test('NXGF-TC-3880: TC_044_Journal Voucher creation_Verify that the Value date is set to system date as default value', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Value date is set to system date as default value", async () => {
        await journalVoucherCreationPage.verifyCurrentDateFromCalender();
    })

});

test('NXGF-TC-3881: TC_050_Journal Voucher creation_Verify that the user is able to click on Edit', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_050_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_050_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_050_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_050_Journal_Voucher_Creation'].description);
    })

    await test.step("Click On Save Transaction", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("Click On Edit Transaction", async () => {
        await journalVoucherCreationPage.clickOnEditTransaction();
    })

});

test('NXGF-TC-3882: TC_051_Journal Voucher creation_Verify that the user is able to edit the previously entered information', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].description);
    })

    await test.step("Click On Save Transaction", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("Click On Edit Transaction", async () => {
        await journalVoucherCreationPage.clickOnEditTransaction();
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].amount1);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].currency1);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_051_Journal_Voucher_Creation'].description1);
    })

    await test.step("Click On Save Transaction", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

});

test('NXGF-TC-3883: TC_052_Journal Voucher creation_Verify that the user is able to view the Save link if the voucher is not validated', async ({ page }) => {

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

    await test.step("User Click on Edit Journal Voucher Button", async () => {
        await journalVoucherCreationPage.clickOnEditJournalVoucher();
    })

});

test('NXGF-TC-3884: TC_053_Journal Voucher creation_Verify that the user is able to click on Save', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_053_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_053_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_053_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_053_Journal_Voucher_Creation'].description);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

});

test('NXGF-TC-3885,NXGF-TC-3889: TC_055_Journal Voucher creation_Verify that the user is able to view the Validate checkbox as disabled', async ({ page }) => {

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

    await test.step("User Click on Edit Journal Voucher Button", async () => {
        await journalVoucherCreationPage.clickOnEditJournalVoucher();
    })

    await test.step("Verified that the user is able to view the Validate checkbox as disabled", async () => {
        await journalVoucherCreationPage.verifyValidatedCheckboxDisabled();
    })

});


test('NXGF-TC-3887: TC_057_Journal Voucher creation_Verify that the user gets a pop up message to fill the missing cells if any', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_057_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_057_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_057_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("Verified that the user gets a pop up message to fill the missing cells if any", async () => {
        await journalVoucherCreationPage.verifyErrorPopupAlert(JournalVoucherCreationPageData['TC_057_Journal_Voucher_Creation'].errorpopup);
    })

});

test('NXGF-TC-3890,NXGF-TC-3891: TC_060_Journal Voucher creation_Verify that the user is unable to validate a voucher is the total Total debit counter value is not equal to total credit counter value', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].description);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].value1);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].amount1);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].currency1);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].description1);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("Verified that the user is unable to validate a voucher is the total Total debit counter value is not equal to total credit counter value", async () => {
        await journalVoucherCreationPage.verifyDebitCreditErrorPopupAlert(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].errorpopup);
    })

});

test('NXGF-TC-3892: TC_062_Journal Voucher creation_Verify that the user is able to view a section indicating the totals', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].description);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].value1);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].amount1);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].currency1);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].description1);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("Verify that the user is able to view a section indicating the totals", async () => {
        await journalVoucherCreationPage.verifySectionIndicatingTotals();
    })

});

test('NXGF-TC-3893: TC_063_Journal Voucher creation_Verify that the grid shows the Total Debit CV,Total Credit CV,Difference,Local Currency,Foreign Currency', async ({ page }) => {

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

    await test.step("Verify that the user is able to view a section indicating the totals", async () => {
        await journalVoucherCreationPage.verifyGridSection();
    })

});

test('NXGF-TC-3894: TC_064_Journal Voucher creation_Verify that the differences are indicated as per the amount and the currency', async ({ page }) => {

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

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].value);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].amount);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].currency);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].description);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("User Click on Add Voucher transaction Button", async () => {
        await journalVoucherCreationPage.clickOnAddVoucherTrancastionButton();
    })

    await test.step("Verified that the Account name is a auto complete smart search field", async () => {
        await journalVoucherCreationPage.selectAccountName(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].value1);
    })

    await test.step("User Enter Amount", async () => {
        await journalVoucherCreationPage.enterAmount(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].amount1);
    })

    await test.step("User Select Currency", async () => {
        await journalVoucherCreationPage.selectCurrency(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].currency1);
    })

    await test.step("Select Value Date", async () => {
        await journalVoucherCreationPage.selectCurrentDateCalender();
    })

    await test.step("User Enter Description", async () => {
        await journalVoucherCreationPage.enterDescription(JournalVoucherCreationPageData['TC_060_Journal_Voucher_Creation'].description1);
    })

    await test.step("Verified that the user is able to click on Save", async () => {
        await journalVoucherCreationPage.clickOnSave();
    })

    await test.step("Verify that the user is able to view a section indicating the totals", async () => {
        await journalVoucherCreationPage.verifyCurrencyDebitCredit();
    })

});

test('NXGF-TC-3895: TC_065_Journal Voucher creation_Verify that the Search bar displayed in main menu screen', async ({ page }) => {

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

    await test.step("Verified that the Search bar displayed in main menu screen", async () => {
        await journalVoucherCreationPage.verifySearchBar();
    })

});

test('NXGF-TC-3896: TC_066_Journal Voucher creation_Verify that the User is able to enter and Search the shortcut menu from search bar', async ({ page }) => {

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

    await test.step("Verified that the User is able to enter and Search the shortcut menu from search bar", async () => {
        await journalVoucherCreationPage.enterinSearchbar(JournalVoucherCreationPageData['TC_066_Journal_Voucher_Creation'].value);
    })


});







