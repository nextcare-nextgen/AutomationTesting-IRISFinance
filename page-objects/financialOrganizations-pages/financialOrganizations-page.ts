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
    readonly addOrganizationButton: Locator;
    readonly cv1: Locator;
    readonly cv2: Locator;
    readonly startDateCalendarIcon: Locator;
    readonly name: Locator;
    readonly code: Locator;
    readonly createButton: Locator;
    readonly closeButton: Locator;
    readonly currentDateFromCalender: Locator;
    readonly ACTSCode: Locator;



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
        this.stopOrg = page.locator('//button[@title="Stop"]');
        this.activeFilter = page.locator('//iris-table-filter-tags//mat-chip-listbox//mat-chip-option[@chip-color="green"]');
        this.stoppedFilter = page.locator('//iris-table-filter-tags//mat-chip-listbox//mat-chip-option[@chip-color="red"]');
        this.addOrganizationButton = page.locator('//button[@title="Add Organization"]');
        this.cv1 = page.locator('//mat-label//span[@title="CV1"]');
        this.cv2 = page.locator('//mat-label//span[@title="CV2"]');
        this.startDateCalendarIcon = page.locator('//div//input[@title="Start Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
        this.name = page.locator('//iris-standard-card//div//input[@title="Name"]');
        this.code = page.locator('//iris-standard-card//div//input[@title="Code"]');
        this.createButton = page.locator('//button[@title="Create"]');
        this.closeButton = page.locator('//button//mat-icon[@data-mat-icon-name="icon-cancel-in-cercle"]');
        this.currentDateFromCalender = page.locator('//mat-month-view//td//button[contains(@class,"active")]');
        this.ACTSCode = page.locator('//input[@title="ACTS Code"]');
    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnFinancialOrganizationShrtcutsButton() {
        await this.financialOrganizationShortcut.click();
    }


    async verifyFinancialOrganizationShrtcutButton() {
        await expect(this.financialOrganizationShortcut).toBeVisible();

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
        await expect(this.financialOrganizationShortcut).toBeEnabled();
        await expect(this.dashboardShortcut).toBeEnabled();
        await expect(this.cashAllocationShortcut).toBeEnabled();
        await expect(this.chartOfAccountsShortcut).toBeEnabled();
        await expect(this.FXratesShortcut).toBeEnabled();
        await expect(this.journalVoucherText).toBeEnabled();
        await expect(this.reportsShortcut).toBeEnabled();
        await expect(this.FTMShortcut).toBeEnabled();

    }

    async verifyOrgNameAndOrgCodeField() {
        await expect(this.organizationName).toBeVisible();
        await expect(this.organizationCode).toBeVisible();
    }

    async verifySearchField() {
        await expect(this.search).toBeVisible();
    }

    async enterOrganizationCode(data: string) {
        await this.organizationCode.fill(data);
    }

    async enterOrganizationName(data: string) {
        await this.organizationName.fill(data);
    }

    async clickOnSearch() {
        await this.search.click();
    }

    async verifyOrganizationCodeFromGrid() {
        const code = this.page.locator('//mat-cell[contains(@class,"code")]');
        for (let index = 0; index < await code.count(); index++) {
            expect(await code.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyIndexStatus() {
        await expect(this.activeIndex).toBeVisible();
        await expect(this.stoppedIndex).toBeVisible();
    }

    async clickOnActiveIndex() {
        await this.activeIndex.click();
    }

    async verifyActiveIndexFromGrid() {
        const status = this.page.locator('//mat-cell[contains(@class,"status")]');
        for (let index = 0; index < await status.count(); index++) {
            expect(await status.nth(index).innerText()).toBeTruthy();

        }
    }

    async verifyRecordsPerPageText(data: string) {
        const actual = await this.recordsPerPage.textContent();
        expect(actual).toBe(data);
    }

    async clickOnRecordsPerPageDropdown(data: string[]) {
        const recordsPerPagedropdown = this.page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
        recordsPerPagedropdown.first().click();
        await expect(this.page.locator('//mat-option//span')).toHaveText([' 10 ', ' 15 ', ' 20 ', ' 30 ', ' 50 ', ' 100 ', ' 250 ']);
    }

    async verifyOrgNameAndCodeFromGrid() {
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
        let columnValue = await this.page.locator('//mat-header-cell[contains(@class,"header-cell")]//small[text()="Stop Date"]');
        await expect(columnValue).not.toBeVisible();
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
        const editOrgIcon = this.page.locator('//button[@title="Edit Organization"]');
        await expect(editOrgIcon).toBeVisible();
    }

    async clickOnEditOrganizationButton() {
        sleep(7000);
        const editOrgIcon = this.page.locator('//button[@title="Edit Organization"]');
        await editOrgIcon.first().click();
    }

    async VerifyStopOrganizationButtonIsClickable() {
        await expect(this.stopOrg).toBeEnabled();
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
        await expect(this.addOrganizationButton).toBeVisible();
    }


    async clickOnADDOrganizationButton() {
        await this.addOrganizationButton.click();
    }

    async selectCV1(cv1: string) {
        await this.cv1.click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + cv1 + '"]//ancestor::div[1]').click();

    }

    async selectCV2(cv2: string) {
        sleep(5000);
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
        await expect(this.createButton).toBeEnabled();
    }

    async VerifyCreateButtonIsdisable() {
        await expect(this.createButton).toBeDisabled();
    }

    async clickOnCloseButton() {
        await this.closeButton.click();
    }

    async verifyCurrentDateFromCalender() {
        await this.startDateCalendarIcon.click();
        await expect(this.currentDateFromCalender).toBeVisible();
    }

    async verifyDaysFromCalender() {
        await this.startDateCalendarIcon.click();
        await expect(this.page.locator('//thead//th//span[2]')).toHaveText(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
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
        let month = date.getMonth();
        let year = date.getFullYear() - 1;

        //let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${year}`;
        var todayDate = Number(fullDate);

        await this.startDateCalendarIcon.click();
        await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
        await this.page.waitForTimeout(2000);
    }

    async enterACTSCode(name: string) {
        await this.ACTSCode.fill(name);

    }


}





