import { Keyboard, Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  
    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly menuIcon: Locator;
    readonly organization: Locator;
    readonly pageNum: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardTitle = page.locator('h1[title="Dashboard"]');
        this.organization = page.locator('//iris-organization-financial-year-dropdown//mat-select[@role="combobox"]');
        this.menuIcon = page.locator('//iris-top-bar//iris-action-base//mat-icon[@data-mat-icon-name="icon-menu-grid"]');
        
    }


    /**
     * 
     * @param expectedPageTitle This function is used to very current page title
     */
    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    /**
      * This function is used to click on Pending Claims Buttom
      */
    //async clickOnPendingClaimsButton() {
      //  await this.pendingClaimsButton.click();
   // }

    /**
     * This function is used to search existing data to get search result
     * @param data - claims details
     */


    /**
     * This function is used to verify the search result
     * @param expectedData - claims details used for search
     */
   

    /**
      * This function is used to click on Menu Icon Buttom
      */
    async clickOnMenuIconButton() {
        await this.menuIcon.click();
    }

    async selectOrganization(org: string) {
      await this.organization.click();
      //mat-optgroup[2]//mat-option//mat-label[text()='2024']
      await this.page.locator('//mat-optgroup//mat-option//mat-label[text()="' + org + '"]').click();
  }

}