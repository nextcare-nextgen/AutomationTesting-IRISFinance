import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { count } from "console";
import exp from "constants";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class ChartOfAccountsPage {

    readonly page: Page;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly chartOfAccountText: Locator;
    readonly accountName: Locator;
    readonly accountNumber: Locator;
    readonly search: Locator;
    readonly parentAccountNumber: Locator;
    readonly accountNumberfromGrid: Locator;
    readonly accountNamefromGrid: Locator;
    readonly accountType: Locator;
    readonly productLine: Locator;
    readonly costCenter2: Locator;
    readonly costCenter3: Locator;
    readonly GLAccounttype: Locator;
    readonly startDate: Locator;
    readonly stopDate: Locator;
    readonly activeIndex: Locator;
    readonly stopIndex: Locator;
    readonly confirmationMessage: Locator;
    readonly recordsPerPage: Locator;
    readonly recordPerPageDropdown: Locator;
    readonly addAccount: Locator;
    readonly addAccountScreenText: Locator;
    readonly addAccountNumber: Locator;
    readonly addAccountName: Locator;
    readonly addAccountSelectDate: Locator;
    readonly addAccountType: Locator;
    readonly addAccountProductLine: Locator;
    readonly addAccountCostCenter2: Locator;
    readonly addAccountCostCenter3: Locator;
    readonly addAccountGLAcoountType: Locator;
    readonly addAccountNameMandatory: Locator;
    readonly addAccountNumberMandatory: Locator;
    readonly addAccountTypeMandatory: Locator;
    readonly addAccountGLAcoountTypeMandatory: Locator;
    readonly organization: Locator;
    readonly organizationName: Locator;
    readonly selectAddAccountType: Locator;
    readonly selectstartDate: Locator;
    readonly selectglAccountTypee: Locator;
    readonly saveButton: Locator;
    readonly accountnumFromGrid: Locator;
    readonly closeButton: Locator;
    readonly rightarrow: Locator;
    readonly leftarrow: Locator;
    readonly selectStartDatecalenderIcon: Locator;
    readonly currentDateFromCalender: Locator;
    readonly addchildAccount: Locator;
    readonly addchildAccountTitle: Locator;
    readonly warningPopup: Locator;
    readonly expandArrow: Locator;
    readonly searchBar: Locator;
    readonly label: Locator;
    readonly childstartDateCalendarIcon: Locator;
    readonly randomString: string;
    readonly stoppedAccountpopup: Locator;
    readonly addAccountCostCenter1: Locator;


    constructor(page: Page) {
        this.page = page;
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.chartOfAccountText = page.locator('//div//h1[@title="Charts of Accounts"]');
        this.accountName = page.locator('//div//input[@title="Account Name"]');
        this.accountNumber = page.locator('//div//input[@title="Account Number"]');
        this.search = page.locator('//div//button//span[@title="Search"]');
        this.parentAccountNumber = page.locator('id=parentaccountnumber-Parent Account Number');
        this.accountNumberfromGrid = page.locator('//div//small[@title="Account Number"]');
        this.accountNamefromGrid = page.locator('//div//small[@title="Account Name"]');
        this.accountType = page.locator('//div//small[@title="Account Type"]');
        this.productLine = page.locator('//div//small[@title="Product Line"]');
        this.costCenter2 = page.locator('//div//small[@title="Cost Center 2"]');
        this.costCenter3 = page.locator('//div//small[@title="Cost Center 3"]');
        this.GLAccounttype = page.locator('//div//small[@title="GL Account Type"]');
        this.startDate = page.locator('//div//small[@title="Start Date"]');
        this.stopDate = page.locator('//div//small[@title="Stop Date"]');
        this.activeIndex = page.locator('//iris-table-filter-tags//mat-chip-option[@chip-color="green"]');
        this.stopIndex = page.locator('//iris-table-filter-tags//mat-chip-option[@chip-color="red"]');
        this.confirmationMessage = page.locator('//p[text()="Are you sure you want to stop this account ?"]');
        this.recordsPerPage = page.locator(' //mat-paginator//div[text()=" Records per page: "]');
        this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        this.addAccount = page.locator('//div//button[@title="Add Account"]');
        this.addAccountNumber = page.locator('//iris-composed-dialog//iris-chart-of-accounts-manage-dialog//div//input[@title="Account Number"]');
        this.addAccountName = page.locator('//iris-chart-of-accounts-manage-dialog//div//input[@title="Account Name"]');
        this.addAccountSelectDate = page.locator('//iris-chart-of-accounts-manage-dialog//div//input[@title="Start Date"]');
        this.addAccountType = page.locator('//div//span[@title="Account Type"]');
        this.addAccountProductLine = page.locator('//div//span[@title="Product Line"]');
        this.addAccountCostCenter1 = page.locator('//div//span[@title="Cost Center 1"]');
        this.addAccountCostCenter2 = page.locator('//div//span[@title="Cost Center 2"]');
        this.addAccountCostCenter3 = page.locator('//div//span[@title="Cost Center 3"]');
        this.addAccountGLAcoountType = page.locator('//div//span[@title="GL Account Type"]');
        this.addAccountNameMandatory = page.locator('//div//input[@title="Account Name"]//following::span[contains(@class,"required-marker")][1]');
        this.addAccountNumberMandatory = page.locator('//div//input[@title="Account Number"]//following::span[contains(@class,"required-marker")][2]');
        this.addAccountTypeMandatory = page.locator('//div//span[@title="Account Type"]//following::span[1]');
        this.addAccountGLAcoountTypeMandatory = page.locator('//div//span[@title="GL Account Type"]//following::span[1]');
        this.organization = page.locator('//iris-organization-financial-year-dropdown//mat-select[@role="combobox"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.selectAddAccountType = page.locator('//iris-account-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.selectstartDate = page.locator('//div//input[contains(@class,"datepicker")]');
        this.selectglAccountTypee = page.locator('//iris-gl-account-type-autocomplete//div//span[text()="GL Account Type"]');
        //('//iris-gl-account-type-autocomplete//div//input[contains(@class,"input-element")]');
        this.saveButton = page.locator('//button[@title="Save"]');
        this.accountnumFromGrid = page.locator('//mat-table[@id="AccountsList"]//mat-cell[contains(@class,"accountnumber")][2]');
        this.closeButton = page.locator('//button//mat-icon[@data-mat-icon-name="icon-cancel-in-cercle"]');
        this.rightarrow = page.locator('//button//mat-icon[text()="keyboard_arrow_right"]');
        this.leftarrow = page.locator('//button//mat-icon[text()="keyboard_arrow_left"]');
        this.selectStartDatecalenderIcon = page.locator('//div//input[contains(@class,"datepicker")]//following::button//mat-icon[@data-mat-icon-name="icon-calendar"]');
        this.currentDateFromCalender = page.locator('//mat-month-view//td//button[contains(@class,"active")]');
        this.addchildAccount = page.locator('//mat-icon[@title="Add Child Account"]');
        this.addchildAccountTitle = page.locator('//h2[@title="Add  Child Account For Gross Writen Premium"]');
        this.warningPopup = page.locator('//mat-list-item//span//span[text()="Account number must be unique per organization."]');
        this.expandArrow = page.locator('//mat-cell[@id="1-parentaccountnumber"]//button//mat-icon[@data-mat-icon-name="icon-angle-down"]');
        this.addAccountScreenText = page.locator("//iris-base-label//h2[@title='Add a new account']");
        this.searchBar = page.locator('//iris-text-input[contains(@class,"search-menu-input")]');
        this.label = page.locator('//iris-menu-card//iris-base-label//span');
        this.childstartDateCalendarIcon = page.locator('//div//input[@title="Start Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
        this.randomString = `${Math.random().toString().slice(2, 8)}`;
        this.stoppedAccountpopup = page.locator('//p[text()="Are you sure you want to stop this account ?"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }

    async clickOnChartsOfAccountsShrtcutsButton() {
        await this.chartOfAccountsShortcut.click();
    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyChartsOfAccountsrShortcutButton() {
        expect(this.chartOfAccountsShortcut).toBeVisible();
    }

    async verifyChartsOfAccountsShrtcutsButtonisClickable() {
        await expect(this.chartOfAccountsShortcut).toBeEnabled;
    }

    async verifychartOfAccountText(data: string) {
        const actual = await this.chartOfAccountText.textContent();
        expect(actual).toBe(data);
    }

    async verifyAccountNameAccountNumberField() {
        await expect(this.accountName).toBeVisible();
        await expect(this.accountNumber).toBeVisible();
    }

    async verifySearchField() {
        await expect(this.search).toBeVisible();
    }

    async enterAccountNumber(data: string) {
        await this.accountNumber.fill(data);
    }

    async enterAccountName(data: string) {
        await this.accountName.fill(data);
    }

    async clickonSearchButton() {
        await this.search.click();
    }

    async verifyAccountNumberFromGrid() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const accountNum = this.page.locator('//mat-cell[contains(@class,"accountnumber")][2]');
        for (let index = 0; index < await accountNum.count(); index++) {
            expect(await accountNum.nth(index).innerText()).toBeTruthy();
        }
    }

    async verifyColumnNameFromGrid() {
        await expect(this.parentAccountNumber).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
    }

    async verifyActiveandStoppedIndex() {
        await expect(this.parentAccountNumber).toBeVisible();
        await expect(this.accountNumberfromGrid).toBeVisible();
    }

    async verifyStatusInTheGrid() {
        await new Promise(resolve => setTimeout(resolve, 4000));
        const status = this.page.locator('//mat-cell[contains(@class,"status")]');
        for (let index = 0; index < await status.count(); index++) {
            expect(await status.nth(index).innerText()).toBeTruthy();
        }
    }

    async clickOnActiveIndex() {
        await this.activeIndex.click();
    }

    async verifyActiveAccounts() {
        const stopAccount = this.page.locator('//mat-cell//button[contains(@title,"Stop Account")]');
        for (let index = 0; index < await stopAccount.count(); index++) {
            expect(await stopAccount.nth(index)).toBeVisible();
        }
    }
    async clickOnStopIndex() {
        await this.stopIndex.click();
    }


    async clickOnStopAccounts() {
        let stopAccount = this.page.locator('//mat-cell//button[contains(@title,"Stop Account")]');
        await stopAccount.first().click();
    }

    async verifyConfirmationMessage(data: string) {
        const actual = await this.confirmationMessage.textContent();
        expect(actual).toBe(data);
    }

    async verifyRecordsPerPageText(data: string) {
        const actualBatchSearch = await this.recordsPerPage.textContent();
        expect(actualBatchSearch).toBe(data);
    }


    async clickOnRecordsPerPageDropdown(data: string[]) {
        await sleep(2000);
        await this.recordPerPageDropdown.click();
        await expect(this.page.locator('//mat-option//span')).toHaveText([' 50 ', ' 100 ', ' 150 ', ' 200 ', ' 250 ']);

    }

    async clickOnRecordsPerPageDropdownOption() {
        await this.recordPerPageDropdown.click();
        let dropdownOptions = await this.page.locator('//mat-option//span').all();

        for (let i = 0; i < dropdownOptions.length; i++) {
            // Check if current value is Item 1
            if (await dropdownOptions[i].textContent() === " 30 ") {
                // Click if element with text found
                await dropdownOptions[i].click();
                break;
            }
        }
    }

    async verifyAddAccountButton() {
        await expect(this.addAccount).toBeVisible();
    }

    async clickOnAddAccountButton() {
        await this.addAccount.click();
    }

    async verifyAddAccountpopupScreenText(data: string) {
        const actual = await this.addAccountScreenText.textContent();
        expect(actual).toBe(data);
    }

    async verifyAddAccountAllFields() {
        await expect(this.addAccountNumber).toBeVisible();
        await expect(this.addAccountName).toBeVisible();
        await expect(this.addAccountSelectDate).toBeVisible();
        await expect(this.addAccountType).toBeVisible();
        await expect(this.addAccountCostCenter1).toBeVisible();
        await expect(this.addAccountCostCenter2).toBeVisible();
        await expect(this.addAccountCostCenter3).toBeVisible();
        await expect(this.addAccountGLAcoountType).toBeVisible();

    }

    async verifyAddAccountMandatoryFields() {
        await expect(this.addAccountNumber).toBeVisible();
        await expect(this.addAccountName).toBeVisible();
        await expect(this.addAccountType).toBeVisible();
        await expect(this.GLAccounttype).toBeVisible();

    }

    async verifyasteriskmarkFormandatoryFields() {
        await expect(this.addAccountNumberMandatory).toBeVisible();
        await expect(this.addAccountNameMandatory).toBeVisible();
        await expect(this.addAccountTypeMandatory).toBeVisible();
        await expect(this.addAccountGLAcoountTypeMandatory).toBeVisible();
    }

    async selectOrganization(org: string) {
        await this.organization.click();
        await this.page.locator('//mat-optgroup//mat-option//mat-label[text()="' + org + '"]').click();
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }

    async enterAddAccountNumber(data: string) {
        await this.addAccountNumber.fill(data);
    }

    async enterAddAccountName(data: string) {
        await this.addAccountName.fill(data);
    }

    async selectAddAccountTypeFromDropdown(data: string) {
        await this.selectAddAccountType.click();
        const AccountTypeinput = this.page.locator('//iris-account-type-autocomplete//iris-select-formfield//mat-form-field[contains(@class,"type")]//input[1]');
        AccountTypeinput.fill(data);
        const selectAccounttype = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
        selectAccounttype.click();
    }

    async enterSelectStartDate(data: string) {
        await this.selectstartDate.fill(data);
    }

    async selectglAccountTypeFromDropdown(data: string) {
        await this.selectglAccountTypee.click();
        const glAccountTypeinput = this.page.locator('//mat-dialog-container//iris-gl-account-type-autocomplete//iris-select-formfield//mat-form-field[contains(@class,"type")]//input[1]');
        glAccountTypeinput.fill(data);
        const selectGLAccounttype = this.page.locator('//div//mat-option//span//mat-label[text()="' + data + '"]');
        selectGLAccounttype.click();
    }

    async verifySaveButton() {
        await expect(this.saveButton).toBeVisible();
    }

    async clickOnSaveButton() {
        await this.saveButton.click();
    }

    async verifyAccountsinGrid(data: string) {
        await this.page.waitForLoadState('networkidle');
        await new Promise(resolve => setTimeout(resolve, 5000));
        const actual = await this.accountnumFromGrid.textContent();
        expect(actual).toBe(data);
    }

    async clickOnCloseButton() {
        await this.closeButton.click();
    }

    async verifySaveButtonDisbled() {
        await expect(this.saveButton).toBeDisabled()
    }

    async selectProductLineFromDropdown(data: string) {
        await this.addAccountProductLine.click();
        let checkboxOptions = await this.page.locator('//mat-option//div//span').all();
        let chekboxes = await this.page.locator('//mat-option//div//mat-checkbox').all();
        for (let i = 0; i < checkboxOptions.length && chekboxes.length; i++) {
            if (await checkboxOptions[i].textContent() === data) {
                await chekboxes[i].click();
                await this.addAccountCostCenter2.press('Tab');
                break;
            }
        }
    }


    async verifyCalenderArrow() {
        await this.selectStartDatecalenderIcon.click();
        await expect(this.rightarrow).toBeVisible();
        await expect(this.leftarrow).toBeVisible();
    }

    async verifyCurrentDateFromCalender() {
        await this.selectStartDatecalenderIcon.click();
        await expect(this.currentDateFromCalender).toBeVisible();
    }

    async clickAddChildAccountButton() {
        sleep(3000);
        await this.addchildAccount.first().click();
    }

    async verifyAddChildAccountTitle(data: string) {
        const actual = await this.addchildAccountTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyPopupForUniqueAccountNum(data: string) {
        const actual = await this.warningPopup.textContent();
        expect(actual).toBe(data);
    }

    async clickOnExpandArrow() {
        await this.expandArrow.click();
    }

    async verifyEditIconInGrid() {
        const editIcon = this.page.locator('//button[@title="Edit Account"]');
        for (let index = 0; index < await editIcon.count(); index++) {
            expect(await editIcon.nth(index)).toBeVisible();
        }
    }

    async clickOnEditIcon() {
        let editicon = this.page.locator('//button[@title="Edit Account"]');
        await editicon.first().click();
    }

    async clickOnAddChildAccountIcon() {
        let editicon = this.page.locator('//button[@title="Add Child Account"]');
        await editicon.first().click();
    }

    async verifymandatoryFieldsfromChildAccount() {
        await expect(this.addAccountNumberMandatory).toBeVisible();
        await expect(this.addAccountNameMandatory).toBeVisible();
    }

    async enterEditAddAccountNumber(data: string) {
        await this.addAccountNumber.clear();
        await this.addAccountNumber.fill(data);
    }

    async enterEditSelectStartDate(data: string) {
        await this.selectstartDate.clear();
        await this.selectstartDate.fill(data);
    }

    async enterEditchildAddAccountName(data: string) {
        await this.addAccountName.clear();
        await this.addAccountName.fill(data);
    }

    async selectEditChildAddAccountTypeFromDropdown(data: string) {
        await this.selectAddAccountType.click();
        const AccountTypeinput = this.page.locator('//iris-account-type-autocomplete//iris-select-formfield//mat-form-field[contains(@class,"type")]//input[1]');
        AccountTypeinput.fill(data);
        const selectAccounttype = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
        selectAccounttype.click();
    }

    async verifySearchBar() {
        await expect(this.searchBar).toBeVisible();
    }

    async enterinSearchbar(data: string) {
        await this.searchBar.fill(data);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const actual = await this.label.textContent();
        expect(actual).toBe(data);
    }


    async enterRandomChildAccountNumber() {
        await this.page.waitForLoadState('networkidle');
        await this.addAccountNumber.fill(this.randomString);

    };

    async getaccountNumber() {
        await this.page.waitForLoadState('networkidle');
        //await this.accountNumber.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.accountNumber.fill(this.randomString);
        await this.search.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        const getnumberfromgrid = await this.page.locator('//mat-cell[contains(@class,"accountnumber" )][2]').textContent();
        console.log(getnumberfromgrid);
        expect(this.randomString).toBe(getnumberfromgrid);

    }


    async enterStartDate() {
        await this.childstartDateCalendarIcon.click();
        await this.page.locator("//span[text()=' 1 ']").click();
        await this.page.waitForTimeout(2000);

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${day}`;
        var todayDate = Number(fullDate);
    }

    async verifyStopAccountsInGrid() {
        const stopButton = this.page.locator('//button[@title="Stop Account"]');
        for (let index = 0; index < await stopButton.count(); index++) {
            expect(await stopButton.nth(index)).toBeVisible();
        }
    }

    async clickOnStoppedAccount() {
        const stopButton = this.page.locator('//button[@title="Stop Account"]');
        await stopButton.first().click();
    }

    async verifyStopAccountPopup(data: string) {
        const actual = await this.stoppedAccountpopup.textContent();
        expect(actual).toBe(data);
    }


    async stopedAccounts() {
        await this.page.waitForLoadState('networkidle');
        //await this.accountNumber.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.accountNumber.fill(this.randomString);
        await this.search.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        const getnumberfromgrid = await this.page.locator('//button[@title="Stop Account"]');
        await getnumberfromgrid.first().click();
        const okbutton = this.page.locator('//iris-composed-dialog//button[@title="Ok"]');
        okbutton.click();

    }

}

