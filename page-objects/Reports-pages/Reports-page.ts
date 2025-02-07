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
    readonly clickOnClearAllBtn:Locator;


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
        this.clickOnClearAllBtn= page.locator("//span[@title='Clear All'][contains(.,'Clear All')]");
        
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
    // async fillfromDate_PastDate(PastDate_Duration: number) {
    //     const today = new Date();
    //     const pastDate = new Date(today);
    //     pastDate.setDate(today.getDate() - PastDate_Duration);
    //     const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    //     const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
    //     //await this.fromDate.fill(formattedPastDate);
    //     //await this.fromDate.clear();
    //     await this.page.locator("//div//input[@title='From Date' and @id='mat-input-45']").fill(formattedPastDate);
    //     await new Promise(resolve => setTimeout(resolve, 9000));
    // }
    
    async fillfromDate_PastDate(PastDate_Duration: number) {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - PastDate_Duration);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
        const fromDateInput = this.page.locator("//div//input[@title='From Date' and @id='mat-input-45']");
        await fromDateInput.waitFor({ state: 'visible' });
        await fromDateInput.click();  
        await fromDateInput.fill(formattedPastDate);
        await fromDateInput.waitFor({ state: 'attached' });  
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

    //async selectFOB(FOB_Value:string)
    async selectFOB()
    {
        await expect(this.clickOnFOB).toBeVisible();
        await this.clickOnFOB.click();
       // await this.clickOnFOB.fill(FOB_Value);
        await new Promise(resolve => setTimeout(resolve, 5000));
        await expect(this.page.locator("//mat-option//span//div/span//iris-base-label//mat-label[@title= 'Easy Living']")).toBeVisible();
        this.page.locator("//mat-option//span//div/span//iris-base-label//mat-label[@title= 'Easy Living']").click();
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async addValueAndClickOnApplyBtn()
    {
        await this.clickOnApplyBtn.click();
        await this.page.locator("//div[@class='cdk-overlay-container']").click();
    }

    async clearAllbtn()
    {
        await this.clickOnClearAllBtn.click();
    }

    // async calculateAndVerifyTurnover() {
    //     const netPremiumLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'][contains(.,'2.11')])[1]"); // Update the selector to your case
    //     const netPremiumValue = await netPremiumLocator.inputValue();  
    //     const netPremium = parseFloat(netPremiumValue.replace(/[^\d.-]/g, ''));  
        
    //     const iptAmountLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted'][contains(.,'0')])[1]"); // Update the selector to your case
    //     const iptAmountValue = await iptAmountLocator.inputValue(); 
    //     const iptAmount = parseFloat(iptAmountValue.replace(/[^\d.-]/g, ''));  
         
    //     const turnover = netPremium + iptAmount;
        
    //     console.log(`Net Premium: ${netPremium}, IPT Amount: ${iptAmount}, Calculated Turnover: ${turnover}`);
        
           
    //     const turnoverLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-turnover mat-column-turnover ng-star-inserted'][contains(.,'2.11')])[1]");  // Update the selector to where Turnover is displayed
    //     const turnoverValue = await turnoverLocator.inputValue();  
    //     const expectedTurnover = parseFloat(turnoverValue.replace(/[^\d.-]/g, ''));
        
    //     if (turnover !== expectedTurnover) {
    //     console.error(`Mismatch: Calculated Turnover (${turnover}) does not match expected Turnover (${expectedTurnover})`);
    //     } 
    //     else {
    //         console.log('Turnover matches the expected value.');
    //     }
    // }

    async calculateAndVerifyTurnover() {
        const netPremiumLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'][contains(.,'2.11')])[1]");
        const netPremiumValue = await netPremiumLocator.textContent();  
        const netPremium = parseFloat(netPremiumValue?.replace(/[^\d.-]/g, '') || '0'); 
        
        const iptAmountLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted'][contains(.,'0')])[1]");
        const iptAmountValue = await iptAmountLocator.textContent();  
        const iptAmount = parseFloat(iptAmountValue?.replace(/[^\d.-]/g, '') || '0');  
        
        const turnover = netPremium + iptAmount;
        
        console.log(`Net Premium: ${netPremium}, IPT Amount: ${iptAmount}, Calculated Turnover: ${turnover}`);
        
        const turnoverLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-turnover mat-column-turnover ng-star-inserted'][contains(.,'2.11')])[1]");
        const turnoverValue = await turnoverLocator.textContent(); 
        const expectedTurnover = parseFloat(turnoverValue?.replace(/[^\d.-]/g, '') || '0'); 
        
        if (turnover !== expectedTurnover) {
            console.error(`Mismatch: Calculated Turnover (${turnover}) does not match expected Turnover (${expectedTurnover})`);
        } else {
            console.log('Turnover matches the expected value.');
        }
    }

    // async calculateAndDisplayTotals() {
    //     const netPremiumLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'][contains(.,'2.11')])[1]");
    //     const netPremiumValue = await netPremiumLocator.textContent(); 
    //     const netPremium = parseFloat(netPremiumValue?.replace(/[^\d.-]/g, '') || '0'); 
        
    //     const iptAmountLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted'][contains(.,'0')])[1]");
    //     const iptAmountValue = await iptAmountLocator.textContent(); 
    //     const iptAmount = parseFloat(iptAmountValue?.replace(/[^\d.-]/g, '') || '0');  
        
    //     const turnover = netPremium + iptAmount;
        
    //     console.log(`Net Premium: ${netPremium}`);
    //     console.log(`IPT Amount: ${iptAmount}`);
    //     console.log(`Calculated Turnover: ${turnover}`);
        
    //     await this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'][contains(.,'2.11')])[1]").fill(netPremium.toString());  
    //     await this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted'][contains(.,'0')])[1]").fill(iptAmount.toString());  
    //     await this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-turnover mat-column-turnover ng-star-inserted'][contains(.,'2.11')])[1]").fill(turnover.toString());  
    
    //     const turnoverLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-turnover mat-column-turnover ng-star-inserted'][contains(.,'2.11')])[1]");
    //     const turnoverValue = await turnoverLocator.textContent();  
    //     const expectedTurnover = parseFloat(turnoverValue?.replace(/[^\d.-]/g, '') || '0'); 
        
    //     if (turnover !== expectedTurnover) {
    //         console.error(`Mismatch: Calculated Turnover (${turnover}) does not match expected Turnover (${expectedTurnover})`);
    //     } else {
    //         console.log('Turnover matches the expected value.');
    //     }
    // }

    async verifyTotals() {
   
        const parseValue = (value) => parseFloat(value?.replace(/[^\d.-]/g, '') || '0');
    
        try {
          
            const netPremiumLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'][contains(.,'2.11')])[1]");
            const netPremiumValue = await netPremiumLocator.textContent(); 
            const netPremium = parseValue(netPremiumValue);
    
            const iptAmountLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted'][contains(.,'0')])[1]");
            const iptAmountValue = await iptAmountLocator.textContent(); 
            const iptAmount = parseValue(iptAmountValue);  
    
            const turnover = netPremium + iptAmount;
    
            console.log(`Net Premium: ${netPremium}`);
            console.log(`IPT Amount: ${iptAmount}`);
            console.log(`Calculated Turnover: ${turnover}`);
    
            const displayedNetPremiumLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'][contains(.,'2.11')])[1]");
            const displayedNetPremiumValue = await displayedNetPremiumLocator.textContent();
            const displayedNetPremium = parseValue(displayedNetPremiumValue);
    
            if (netPremium !== displayedNetPremium) {
                console.error(`Mismatch: Expected Net Premium (${netPremium}) does not match displayed value (${displayedNetPremium})`);
            } else {
                console.log('Net Premium matches the displayed value.');
            }
    
            const displayedIptAmountLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted'][contains(.,'0')])[1]");
            const displayedIptAmountValue = await displayedIptAmountLocator.textContent();
            const displayedIptAmount = parseValue(displayedIptAmountValue);
    
            if (iptAmount !== displayedIptAmount) {
                console.error(`Mismatch: Expected IPT Amount (${iptAmount}) does not match displayed value (${displayedIptAmount})`);
            } else {
                console.log('IPT Amount matches the displayed value.');
            }
    
            const displayedTurnoverLocator = this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-turnover mat-column-turnover ng-star-inserted'][contains(.,'2.11')])[1]");
            const displayedTurnoverValue = await displayedTurnoverLocator.textContent();
            const displayedTurnover = parseValue(displayedTurnoverValue);
    
            if (turnover !== displayedTurnover) {
                console.error(`Mismatch: Expected Turnover (${turnover}) does not match displayed value (${displayedTurnover})`);
            } else {
                console.log('Turnover matches the displayed value.');
            }
    
        } catch (error) {
            console.error('Error verifying totals:', error);
        }
    }

}

