import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class CardTypesPage {

    readonly page: Page;
    readonly financialOrganizationShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly organization: Locator;
    readonly organizationName: Locator;
    readonly organizationCode: Locator;
    readonly search: Locator;
    readonly financialsInformation: Locator;
    readonly orgCardType: Locator;
    readonly breadcrumbsCardType: Locator;
    readonly addOrgCardType: Locator;



    constructor(page: Page) {
        this.page = page;
        this.financialOrganizationShortcut = page.locator('//div//span[@title="Organizations"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.organization = page.locator('//h1[@title="Organizations"]');
        this.organizationName = page.locator('//div//input[@title="Name"]');
        this.organizationCode = page.locator('//div//input[@title="Code"]');
        this.search = page.locator('//div//button[@title="Search"]');
        this.financialsInformation = page.locator('//iris-navigation-hyperlink//a[@title="Financial Information"]');
        this.orgCardType = page.locator('//iris-navigation-hyperlink//a[@title="Card Types"]');
        this.breadcrumbsCardType = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink//a[@href="/organization/details/card-types"]');
        this.addOrgCardType = page.locator('//button[@title="Add Organization Card Type"]');
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

    async verifyActiveAccountsFromGrid() {
        const activeaccounts = this.page.locator('//mat-cell//mat-chip-listbox//mat-chip-option[@chip-color="green"]');
        for (let index = 0; index < await activeaccounts.count(); index++) {
            expect(await activeaccounts.nth(index).innerText()).toBeTruthy();

        }
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

    async clickonCardType() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.orgCardType.click();
    }

    async verifyBreadcrumbsCardType(data: string) {
        const actual = await this.breadcrumbsCardType.textContent();
        expect(actual).toBe(data);
    }

    async clickonAddCardType() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.addOrgCardType.click();
    }


}



