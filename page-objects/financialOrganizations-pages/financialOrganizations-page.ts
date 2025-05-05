import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class FinancialOrganizationsPage {

    readonly page: Page;
    readonly financialOrganizationShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly journalVoucherText: Locator
    readonly dashboardShortcut: Locator;
    readonly cashAllocationShortcut: Locator;
    readonly chartOfAccountsShortcut: Locator;
    readonly FXratesShortcut: Locator;
    readonly policiesShortcut: Locator;
    readonly reportsShortcut: Locator;
    readonly FTMShortcut: Locator;
    readonly organization: Locator;
    readonly organizationName: Locator;
    readonly organizationCode: Locator;
    readonly search: Locator;
    readonly activeIndex: Locator;
    readonly stoppedIndex: Locator;
    readonly recordsPerPage: Locator;
    readonly recordPerPageDropdown: Locator;
    readonly stopOrg: Locator;
    readonly activeFilter: Locator;
    readonly stoppedFilter: Locator;
    readonly addOrganizationbtn: Locator;
    readonly cv1: Locator;
    readonly cv2: Locator;
    readonly startDateCalendarIcon: Locator;
    readonly name: Locator;
    readonly code: Locator;
    readonly createbtn: Locator;
    readonly closebtn: Locator;
    readonly currentDateFromCalender: Locator;
    readonly ACTSCode: Locator;
    readonly orgCode: Locator;
    readonly localization: Locator;
    readonly financialsInformation: Locator;
    readonly orgCardType: Locator;
    readonly searchBar: Locator;
    readonly label: Locator;
    readonly addOrgpopupWindowLabel: Locator;
    readonly startDate: Locator;
    readonly costCenter1: Locator;
    readonly costCenter2: Locator;
    readonly costCenter3: Locator;
    readonly mandateCode: Locator;
    readonly mandateName: Locator;
    readonly mandateStartDate: Locator;





    constructor(page: Page) {
        this.page = page;
        this.financialOrganizationShortcut = page.locator('//div//span[@title="Organizations"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.journalVoucherText = page.locator('//div//span[@title="Journal Vouchers"]');
        this.dashboardShortcut = page.locator('//div//span[@title="Dashboard"]');
        this.cashAllocationShortcut = page.locator('//div//span[@title="Cash Allocation"]');
        this.chartOfAccountsShortcut = page.locator('//div//span[@title="Charts of Accounts"]');
        this.FXratesShortcut = page.locator('//div//span[@title="FX Rates"]');
        this.policiesShortcut = page.locator('//div//span[@title="Policies"]');
        this.reportsShortcut = page.locator('//div//span[@title="Reports"]');
        this.FTMShortcut = page.locator('//div//span[@title="Financial Transactions Monitoring"]');
        this.organization = page.locator('//h1[@title="Organizations"]');
        this.organizationName = page.locator('//div//input[@title="Name"]');
        this.organizationCode = page.locator('//div//input[@title="Code"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.activeIndex = page.locator('//iris-table-filter-tags//mat-chip-listbox//div//span[@title="Active"]');
        this.stoppedIndex = page.locator('//iris-table-filter-tags//mat-chip-listbox//div//span[@title="Stopped"]');
        this.recordsPerPage = page.locator(' //mat-paginator//div[text()=" Records per page: "]');
        this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        this.stopOrg = page.locator('//span[@title="Stopped"]');
        this.activeFilter = page.locator('//iris-table-filter-tags//mat-chip-listbox//mat-chip-option[@chip-color="green"]');
        this.stoppedFilter = page.locator('//iris-table-filter-tags//mat-chip-listbox//mat-chip-option[@chip-color="red"]');
        this.addOrganizationbtn = page.locator('//button[@title="Add Organization"]');
        this.cv1 = page.locator('//mat-label//span[@title="CV1"]');
        this.cv2 = page.locator('//mat-label//span[@title="CV2"]');
        this.startDateCalendarIcon = page.locator('//div//input[@title="Start Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
        this.name = page.locator('//iris-standard-card//div//input[@title="Name"]');
        this.code = page.locator('//iris-standard-card//div//input[@title="Code"]');
        this.createbtn = page.locator('//button[@title="Create"]');
        this.closebtn = page.locator('//button//mat-icon[@data-mat-icon-name="icon-cancel-in-cercle"]');
        this.currentDateFromCalender = page.locator('//mat-month-view//td//button[contains(@class,"active")]');
        this.ACTSCode = page.locator('//input[@title="ACTS Code"]');
        this.orgCode = page.locator('//iris-composed-dialog//input[@title="Code"]');
        this.localization = page.locator('//iris-composed-dialog//input[@title="Localization"]');
        this.financialsInformation = page.locator('//iris-navigation-hyperlink//a[@title="Financial Information"]');
        this.orgCardType = page.locator('//iris-navigation-hyperlink//a[@title="Card Types"]');
        this.searchBar = page.locator('//input[@placeholder="Search"]');
        this.label = page.locator('//iris-menu-card//iris-base-label//span');
        this.addOrgpopupWindowLabel = page.locator('//iris-composed-dialog//h2[@title="Add a new organization"]');
        this.startDate = page.locator('//input[@title="Start Date"]');
        this.costCenter1 = page.locator('//input[@title="Cost Center 1"]');
        this.costCenter2 = page.locator('//input[@title="Cost Center 2"]');
        this.costCenter3 = page.locator('//input[@title="Cost Center 2"]');
        this.mandateName = page.locator('//span[contains(@class,"required-marker")]//following::input[@title="Name"]');
        this.mandateCode = page.locator('//span[contains(@class,"required-marker")]//following::input[@title="Code"]');
        this.mandateStartDate = page.locator('//span[contains(@class,"required-marker")]//following::input[@title="Start Date"]');


    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnFinancialOrganizationShrtcutsButton() {
        await this.financialOrganizationShortcut.click();
    }


    async verifyFinancialOrganizationShrtcutButton() {
        expect(this.financialOrganizationShortcut).toBeVisible();

    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationText(data: string) {
        const actual = await this.organization.textContent();
        expect(actual).toBe(data);
    }

    async verifyAllShrtcutButtonIsClickable() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.financialOrganizationShortcut).toBeEnabled();
        expect(this.cashAllocationShortcut).toBeEnabled();
        expect(this.chartOfAccountsShortcut).toBeEnabled();
        expect(this.FXratesShortcut).toBeEnabled();
        expect(this.journalVoucherText).toBeEnabled();
        expect(this.reportsShortcut).toBeEnabled();
        expect(this.FTMShortcut).toBeEnabled();

    }

    async verifyOrgNameAndOrgCodeField() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.organizationName).toBeVisible();
        expect(this.organizationCode).toBeVisible();
    }

    async verifySearchField() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.search).toBeVisible();
    }

    async enterOrganizationCode(data: string) {
        await this.organizationCode.fill(data);
    }

    async enterOrganizationName(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.organizationName.fill(data);
    }

    async clickOnSearch() {
        await this.search.click();
        await this.page.waitForSelector('.loader', { state: 'hidden' });
    }

    async verifyOrganizationCodeFromGrid() {
        const code = this.page.locator('//mat-cell[contains(@class,"code")]');
        for (let index = 0; index < await code.count(); index++) {
            expect(await code.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyIndexStatus() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.activeIndex).toBeVisible();
        expect(this.stoppedIndex).toBeVisible();
    }

    async clickOnActiveIndex() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.activeIndex.click();
    }

    async verifyActiveIndexFromGrid() {
        const status = this.page.locator('//mat-cell[contains(@class,"status")]');
        for (let index = 0; index < await status.count(); index++) {
            expect(await status.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyRecordsPerPageText(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const actual = await this.recordsPerPage.textContent();
        expect(actual).toBe(data);
    }

    async clickOnRecordsPerPageDropdown() {
        const recordsPerPagedropdown = this.page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        recordsPerPagedropdown.first().click();
        
        const options = this.page.locator('//mat-option//span');
        await options.first().waitFor({ state: 'visible', timeout: 5000 });
        await expect(options).toHaveText([' 50 ', ' 100 ', ' 150 ', ' 200 ', ' 250 ']);
    }

    async verifyOrgNameAndCodeFromGrid() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const Name = this.page.locator('//mat-cell[contains(@class,"name")]');
        for (let index = 0; index < await Name.count(); index++) {
            expect(await Name.nth(index).innerText()).toBeTruthy();

        }
        const code = this.page.locator('//mat-cell[contains(@class,"code")]');
        for (let index = 0; index < await code.count(); index++) {
            expect(await code.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyStopDateColumnNotDisplayed(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        let columnValue = this.page.locator('//mat-header-cell[contains(@class,"header-cell")]//small[text()="Stop Date"]');
        expect(columnValue).not.toBeVisible();
    }

    async verifyStartDateFromGrid() {
        const date = this.page.locator('//mat-cell[contains(@class,"startDate")]');
        for (let index = 0; index < await date.count(); index++) {
            expect(await date.nth(index).innerText()).toBeTruthy();

        }
    }

    async clickOnThreeDotsIcon() {
        let columnValue = this.page.locator('//mat-cell[contains(@class,"button-cell")]//button');
        columnValue.first().click();
    }

    async VerifyEditOrganizationButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const editOrgIcon = this.page.locator('//button[@title="Edit Organization"]');
        expect(editOrgIcon).toBeVisible();
    }

    async clickOnEditOrganizationButton() {
        sleep(7000);
        const editOrgIcon = this.page.locator('//button[@title="Edit Organization"]');
        await editOrgIcon.first().click();
    }

    async VerifyStopOrganizationButtonIsClickable() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.stopOrg).toBeEnabled();
    }

    async clickOnActiveFilter() {
        await this.activeFilter.click();
    }

    async clickOnStoppedFilter() {
        await this.stoppedFilter.click();
    }


    async verifyActiveAccountsFromGrid() {
        const activeaccounts = this.page.locator('//mat-cell//mat-chip-listbox//mat-chip-option[@chip-color="green"]');
        for (let index = 0; index < await activeaccounts.count(); index++) {
            expect(await activeaccounts.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyStoppedAccountsFromGrid() {
        const stoppedaccounts = this.page.locator('//mat-cell//mat-chip-listbox//mat-chip-option[@chip-color="red"]');
        for (let index = 0; index < await stoppedaccounts.count(); index++) {
            expect(await stoppedaccounts.nth(index).innerText()).toBeTruthy();

        }
    }


    async verifyAccountsFromGrid() {
        const accounts = this.page.locator('//mat-cell[contains(@class,"status")]');
        for (let index = 0; index < await accounts.count(); index++) {
            expect(await accounts.nth(index).innerText()).toBeTruthy();

        }
    }

    async VerifyADDOrganizationButton() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.addOrganizationbtn).toBeVisible();
    }


    async clickOnADDOrganizationButton() {
        await this.addOrganizationbtn.click();
    }

    async selectCV1(cv1: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.cv1.click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + cv1 + '"]//ancestor::div[1]').click();

    }

    async selectCV2(cv2: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.cv2.click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + cv2 + '"]//ancestor::div[1]').click();

    }

    async enterStartDate() {
        await this.startDateCalendarIcon.click();
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

    async enterName(name: string) {
        await this.name.fill(name);

    }

    async enterCode(code: string) {
        await this.code.fill(code);

    }

    async VerifyCreateButtonIsClickable() {
        expect(this.createbtn).toBeEnabled();
    }

    async VerifyCreateButtonIsdisable() {
        expect(this.createbtn).toBeDisabled();
    }

    async clickOnCloseButton() {
        await this.closebtn.click();
    }

    async verifyCurrentDateFromCalender() {
        await this.startDateCalendarIcon.click();
        expect(this.currentDateFromCalender).toBeVisible();
    }

    async verifyDaysFromCalender() {
        await this.startDateCalendarIcon.click();
        expect(this.page.locator('//thead//th//span[2]')).toHaveText(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
    }

    async verifyArrowsFromCalender() {
        await this.startDateCalendarIcon.click();
        const arrows = this.page.locator('//iris-date-keyin-header//button//span[@class="mat-mdc-focus-indicator"]');
        for (let index = 0; index < await arrows.count(); index++) {
            expect(arrows.nth(index)).toBeVisible();

        }
    }

    async selectFutureDate() {

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 5;
        let year = date.getFullYear();

        // let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${month}`;
        var todayDate = Number(fullDate);

        await this.startDateCalendarIcon.click();
        await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
        await this.page.waitForTimeout(2000);
    }


    async selectOldDate() {

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() - 1;
        let year = date.getFullYear();

        //let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${month}`;
        var todayDate = Number(fullDate);

        await this.startDateCalendarIcon.click();
        await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
        await this.page.waitForTimeout(2000);
    }

    async enterACTSCode(name: string) {
        await this.ACTSCode.fill(name);

    }

    async enterAddOrgCode(code: string) {
        await this.orgCode.fill(code);

    }

    async enterLocalization(name: string) {
        await this.localization.fill(name);

    }


    async VerifyEditOrganizationsButtons() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const editOrgIcon = this.page.locator('//button[@title="Edit Organization"]');
        for (let index = 0; index < await editOrgIcon.count(); index++) {
            expect(editOrgIcon.nth(index)).toBeVisible();
        }
    }

    async clickonEditOrganizationButton() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const editOrgIcon = this.page.locator('//button[@title="Edit Organization"]');
        await editOrgIcon.first().click();
    }

    async verifyFinancialInfo(data: string) {
        expect(this.financialsInformation).toBeVisible();
    }

    async verifyOrgCardType(data: string) {
        expect(this.orgCardType).toBeVisible();
    }

    async verifySearchBar() {
        expect(this.searchBar).toBeVisible();
    }

    async enterinSearchbar(data: string) {
        await this.searchBar.fill(data);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const actual = await this.label.textContent();
        expect(actual).toBe(data);
    }

    async verifyAddOrgPopUpWindow(data: string) {
        const actual = await this.addOrgpopupWindowLabel.textContent();
        expect(actual).toBe(data);
    }

    async verifyAddOrgPopUpWindowFields() {
        expect(this.orgCode).toBeVisible();
        expect(this.name).toBeVisible();
        expect(this.cv1).toBeVisible();
        expect(this.cv2).toBeVisible();
        expect(this.startDate).toBeVisible();
        expect(this.ACTSCode).toBeVisible();
        expect(this.costCenter1).toBeVisible();
        expect(this.costCenter2).toBeVisible();
        expect(this.costCenter3).toBeVisible();
        expect(this.localization).toBeVisible();
    }


    async verifyAddOrgPopUpWindowManadatoryFields() {
        expect(this.mandateName).toBeVisible();
        expect(this.mandateStartDate).toBeVisible();
    }

    async verifyTitleinBold() {
        const boldElement = await this.page.locator('//h1[@title="Organizations"]');

        // Check if the font-weight is bold
        const fontWeight = await boldElement.evaluate(element => {
            return window.getComputedStyle(element).fontWeight;
        });

        // Assert that the font-weight is either 'bold' or a numeric value equal or greater than 700
        expect(['bold', '700', '800', '900'].includes(fontWeight)).toBe(true);
    }


    async enterAddOrgName(code: string) {
        await this.name.fill(code);
    }

}

