import { Keyboard, Locator, LocatorScreenshotOptions, Page, expect } from "@playwright/test";

export class Reports {
    readonly page: Page;
    readonly reportsMenuIcon: Locator;
    readonly IPTLink: Locator;
    readonly fromDate: Locator;
    readonly toDate: Locator;
    readonly advanceSearchFilter: Locator;
    readonly clickProductLine: Locator;
    readonly clickOnFOB: Locator;
    readonly selectValueForProductLine: Locator;
    readonly clickOnApplyBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.reportsMenuIcon = page.locator("//mat-icon[@data-mat-icon-name = 'icon-report-menu']");
        this.IPTLink = page.locator("//iris-navigation-hyperlink//a[@title = 'Insurance Premium Tax']");
        this.fromDate = page.locator("//div//input[@title='From Date' and @id='mat-input-45']");
       // this.fromDate = page.locator("//input[@id='mat-input-45']");
        this.toDate = page.locator("//input[@id='mat-input-46']");
        this.advanceSearchFilter= page.locator("//span[@title='Filter'][contains(.,'Filter')]");
        this.clickProductLine= page.locator("//mat-label//span[@title= 'Product Line']");
        this.selectValueForProductLine= page.locator("//div[@class='d-flex align-items-center'][contains(.,'Health')]");
        this.clickOnFOB= page.locator("//mat-label//span[@title= 'FOB']");
        this.clickOnApplyBtn= page.locator("//span[@title='Apply'][contains(.,'Apply')]");
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
        const formattedDate = today.getDate().toString().padStart(2, '0') + "-" + monthNumber[today.getMonth()] + "-" + today.getFullYear();
        await this.fromDate.fill(formattedDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
    }
    async fillfromDate_PastDate(PastDate_Duration: number) {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - PastDate_Duration);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
        //await this.fromDate.fill(formattedPastDate);
        //await this.fromDate.clear();
        await this.page.locator("//div//input[@title='From Date' and @id='mat-input-45']").fill(formattedPastDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
    }
    
    async ensureFromDateIsNotInFuture() {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate()); 
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
        await this.fromDate.fill(formattedPastDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
        const filledDate = await this.fromDate.inputValue();  
        const filledDateObj = new Date(filledDate.split("-").reverse().join("-")); 
        expect(filledDateObj.getTime()).toBeLessThanOrEqual(today.getTime());
    }

    async fillfromDate_FutureDate(futureDate_Duration: number) {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + futureDate_Duration);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedFutureDate = futureDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[futureDate.getMonth()] + "-" + futureDate.getFullYear();
        await this.fromDate.clear();
        await this.fromDate.fill(formattedFutureDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async fillToDate() {
        const today = new Date();
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedDate = today.getDate().toString().padStart(2, '0') + "-" + monthNumber[today.getMonth()] + "-" + today.getFullYear();
        await this.toDate.clear();
        await this.toDate.fill(formattedDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async ClickonSearchBtn() {
        const searchBtn = this.page.locator("//iris-base-label//span[@title='Search']");
        searchBtn.nth(0).click();
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async clickOnFilterBtn()
    {
        await expect(this.advanceSearchFilter).toBeVisible();
        await this.advanceSearchFilter.click();
    }

    async selectProductLine()
    {
        await expect(this.clickProductLine).toBeVisible();
        await this.clickProductLine.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await expect(this.page.locator("//div//span//iris-base-label//mat-label[@title= 'Health']")).toBeVisible();
        await this.page.locator("//div//span//iris-base-label//mat-label[@title= 'Health']").click();
    }

    async selectFOB()
    {
        await expect(this.clickOnFOB).toBeVisible();
        await this.clickOnFOB.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await expect(this.page.locator("//div//span//iris-base-label//mat-label[@title= 'Life']")).toBeVisible();
        this.page.locator("//div//span//iris-base-label//mat-label[@title= 'Cobra']").click;
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async addValueAndClickOnApplyBtn()
    {
        
        await this.clickOnApplyBtn.click();
        await this.page.locator("//div[@class='cdk-overlay-container']").click();
    }
}

