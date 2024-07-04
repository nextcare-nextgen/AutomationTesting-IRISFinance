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




    constructor(page: Page) {
        this.page = page;
        this.financialOrganizationShortcut = page.locator('//div//span[@title="Organizations"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.organization = page.locator('//h1[@title="Organizations"]');
        this.organizationName = page.locator('//div//input[@title="Name"]');
        this.organizationCode = page.locator('//div//input[@title="Code"]');



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



}

