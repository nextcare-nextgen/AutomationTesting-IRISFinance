import { Keyboard, Locator, LocatorScreenshotOptions, Page, expect } from "@playwright/test";

export class Reports {
    readonly page: Page;
    readonly reportsMenuIcon: Locator;
    readonly IPTLink: Locator;
    readonly fromDate: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.reportsMenuIcon = page.locator("//mat-icon[@data-mat-icon-name = 'icon-report-menu']");
        this.IPTLink = page.locator("//iris-navigation-hyperlink//a[@title = 'Insurance Premium Tax']");
        this.fromDate = page.locator("//div//input[@id='mat-input-8']");
    }
    
        async clickOnReportsMenuIcon() {
        await new Promise(resolve => setTimeout(resolve, 9000));
        await this.reportsMenuIcon.click();
    }
    async clickOnIPToption() {
        await new Promise(resolve => setTimeout(resolve, 9000));
        await this.IPTLink.click();
    }
    async fillFromDate() {
        await this.fromDate.clear();
        const today = new Date();
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedDate = today.getDate().toString().padStart(2, '0') + "/" + monthNumber[today.getMonth()] + "/" + today.getFullYear();
        await this.fromDate.fill(formattedDate);
    }
    async fillfromDate_PastDate(PastDate_Duration: number) {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - PastDate_Duration);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "/" + monthNumber[pastDate.getMonth()] + "/" + pastDate.getFullYear();
        await this.fromDate.fill(formattedPastDate);
    }

    async fillfromDate_FutureDate(futureDate_Duration: number) {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + futureDate_Duration);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = futureDate.getDate().toString().padStart(2, '0') + "/" + monthNumber[futureDate.getMonth()] + "/" + futureDate.getFullYear();
        await this.fromDate.fill(formattedPastDate);
    }

    async ClickonSearchBtn() {
        const searchBtn = this.page.locator("//iris-base-label//span[@title='Search']");
        searchBtn.nth(0).click();
        await new Promise(resolve => setTimeout(resolve, 9000));
    }
    
}

