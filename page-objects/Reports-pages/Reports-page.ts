import { Download, Keyboard, Locator, LocatorScreenshotOptions, Page, expect } from "@playwright/test";
import path from "path";

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
    readonly taxablebtn: Locator;
    readonly taxfreebtn: Locator;
    readonly itemDropDownSelector: Locator;
    readonly selectedCount: Locator;
    readonly clickExportToExcelbtn: Locator;
    readonly grandTotalSelector: Locator;
    readonly grandTotalCellSelector: Locator;
    readonly searchBarSelector: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reportsMenuIcon = page.locator("//mat-icon[@data-mat-icon-name = 'icon-report-menu']");
        this.IPTLink = page.locator("//iris-navigation-hyperlink//a[@title = 'Insurance Premium Tax']");
        this.fromDate = page.locator("//span[@title='From Date'][contains(.,'From Date')]");
       // this.fromDate = page.locator("//input[@id='mat-input-45']");
        this.toDate = page.locator("//input[contains(@title,'To Date')]");
        this.advanceSearchFilter= page.locator("//span[@title='Filter'][contains(.,'Filter')]");
        this.clickProductLine= page.locator("//mat-label//span[@title= 'Product Line']");
        this.selectValueForProductLine= page.locator("//div[@class='d-flex align-items-center'][contains(.,'Health')]");
        this.clickOnFOB= page.locator("//mat-label//span[@title= 'FOB']");
        this.clickOnApplyBtn= page.locator("//span[@title='Apply'][contains(.,'Apply')]");
        this.clickOnClearAllBtn= page.locator("//span[@title='Clear All'][contains(.,'Clear All')]");
        this.taxablebtn= page.locator("(//span[@title='Taxable'][normalize-space()='Taxable'])[1]");
        this.taxfreebtn= page.locator("(//span[@title='Tax Free'][normalize-space()='Tax Free'])[1]");
        this.itemDropDownSelector= page.locator("(//div[text()=' Records per page: ']/following::mat-select[@role= 'combobox'][2])[5]");
        this.selectedCount= page.locator("//mat-option[@role='option'][contains(.,'100')]");
        this.clickExportToExcelbtn= page.locator("//span[@title='Export to excel'][contains(.,'Export to excel')]");
        this.grandTotalSelector= page.locator("//small[@title='Grand Total'][contains(.,'Grand Total')]");
        this.grandTotalCellSelector =page.locator("//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-rowType mat-column-rowType ng-star-inserted'][contains(.,'Grand Total')]");
        this.searchBarSelector= page.locator("//input[contains(@placeholder,'Search')]");
    }
    
        async clickOnReportsMenuIcon() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.reportsMenuIcon.click();
    }
    async clickOnIPToption() {
        await new Promise(resolve => setTimeout(resolve, 2000));
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
    //     await this.fromDate.fill(formattedPastDate);
    //     await this.fromDate.clear();
    //     await this.page.locator("//div//input[@title='From Date' and @id='mat-input-7']").fill(formattedPastDate);
    //     await new Promise(resolve => setTimeout(resolve, 9000));
    // }
    
    async fillfromDate_PastDate_UsingCurrentDate(PastDate_Duration: number) {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - PastDate_Duration);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
        const fromDateInput = this.page.locator("//span[@title='From Date'][contains(.,'From Date')]");
        await fromDateInput.waitFor({ state: 'visible' });
        await fromDateInput.click();  
        await fromDateInput.fill(formattedPastDate);
        await fromDateInput.waitFor({ state: 'attached' });  
    }

    async fillfromDate_PastDate() {
        const today = new Date();
        const pastDate = new Date(today.getFullYear(), 1, 9); 
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedPastDate = pastDate.getDate().toString().padStart(2, '0') + "-" + monthNumber[pastDate.getMonth()] + "-" + pastDate.getFullYear();
        const fromDateInput = this.page.locator("//span[@title='From Date'][contains(.,'From Date')]");
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

    async fillToDate_currentdate() {
        const today = new Date();
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedDate = today.getDate().toString().padStart(2, '0') + "-" + monthNumber[today.getMonth()] + "-" + today.getFullYear();
        await this.toDate.clear();
        await this.toDate.fill(formattedDate);
        await new Promise(resolve => setTimeout(resolve, 9000));
    }

    async fillToDate() {
        const fixedDay = 14;
        const today = new Date();
        today.setDate(fixedDay);
        const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const formattedDate = fixedDay.toString().padStart(2, '0') + "-" + monthNumber[today.getMonth()] + "-" + today.getFullYear();
        await this.toDate.clear();
        await this.toDate.fill(formattedDate);
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    async ClickonSearchBtn() {
        const searchBtn = this.page.locator("//iris-base-label//span[@title='Search']");
        searchBtn.nth(0).click();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async clickOnFilterBtn()
    {
        await this. page.reload();
        await expect(this.advanceSearchFilter).toBeVisible();
        await this.advanceSearchFilter.click();
    }

    async selectProductLine()
    {
        await expect(this.clickProductLine).toBeVisible();
        await this.clickProductLine.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await expect(this.page.locator("//div//span//iris-base-label//mat-label[@title= 'Health']")).toBeVisible();
        await this.page.locator("//div//span//iris-base-label//mat-label[@title= 'Health']").click();
    }

    //async selectFOB(FOB_Value:string)
    async selectFOB()
    {
        await expect(this.clickOnFOB).toBeVisible();
        await this.clickOnFOB.click();
       // await this.clickOnFOB.fill(FOB_Value);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await expect(this.page.locator("//mat-option//span//div/span//iris-base-label//mat-label[@title= 'In-Patient']")).toBeVisible();
        this.page.locator("//mat-option//span//div/span//iris-base-label//mat-label[@title= 'In-Patient']").click();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async selectFOBTravelInsurance()
    {
        await expect(this.clickOnFOB).toBeVisible();
        await this.clickOnFOB.click();
       // await this.clickOnFOB.fill(FOB_Value);
        await new Promise(resolve => setTimeout(resolve, 5000));
        await expect(this.page.locator("//mat-option//span//div/span//iris-base-label//mat-label[@title= 'Travel Insurance']")).toBeVisible();
        this.page.locator("//mat-option//span//div/span//iris-base-label//mat-label[@title= 'Travel Insurance']").click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async addValueAndClickOnApplyBtn()
    {
        await this.clickOnApplyBtn.click();
        await this.page.mouse.click(0,0);
        await new Promise(resolve => setTimeout(resolve, 2000));
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
        const netPremiumLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-gwp')])[1]");
        const netPremiumValue = await netPremiumLocator.textContent();  
        const netPremium = parseFloat(netPremiumValue?.replace(/[^\d.-]/g, '') || '0'); 
        
        const iptAmountLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-ipt')])[1]");
        const iptAmountValue = await iptAmountLocator.textContent();  
        const iptAmount = parseFloat(iptAmountValue?.replace(/[^\d.-]/g, '') || '0');  
        
        const turnover = netPremium + iptAmount;
        
        console.log(`Net Premium: ${netPremium}, IPT Amount: ${iptAmount}, Calculated Turnover: ${turnover}`);
        
        const turnoverLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-turnover')])[1]");
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
          
            const netPremiumLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-gwp')])[1]");
            const netPremiumValue = await netPremiumLocator.textContent(); 
            const netPremium = parseValue(netPremiumValue);
    
            const iptAmountLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-ipt')])[1]");
            const iptAmountValue = await iptAmountLocator.textContent(); 
            const iptAmount = parseValue(iptAmountValue);  
    
            const turnover = netPremium + iptAmount;
    
            console.log(`Net Premium: ${netPremium}`);
            console.log(`IPT Amount: ${iptAmount}`);
            console.log(`Calculated Turnover: ${turnover}`);
    
            const displayedNetPremiumLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-gwp')])[1]");
            const displayedNetPremiumValue = await displayedNetPremiumLocator.textContent();
            const displayedNetPremium = parseValue(displayedNetPremiumValue);
    
            if (netPremium !== displayedNetPremium) {
                console.error(`Mismatch: Expected Net Premium (${netPremium}) does not match displayed value (${displayedNetPremium})`);
            } else {
                console.log('Net Premium matches the displayed value.');
            }
    
            const displayedIptAmountLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-ipt')])[1]");
            const displayedIptAmountValue = await displayedIptAmountLocator.textContent();
            const displayedIptAmount = parseValue(displayedIptAmountValue);
    
            if (iptAmount !== displayedIptAmount) {
                console.error(`Mismatch: Expected IPT Amount (${iptAmount}) does not match displayed value (${displayedIptAmount})`);
            } else {
                console.log('IPT Amount matches the displayed value.');
            }
    
            const displayedTurnoverLocator = this.page.locator("(//mat-cell[contains(@class, 'mat-column-turnover')])[1]");
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

    async verifyTaxRateForTaxableFOB() {
        const productLineSection = this.page.locator("(//small[@class='color-dark-text ng-star-inserted'][contains(.,'Product Line')])[1]"); 
        const taxableProductLine = productLineSection.locator("(//small[@class='color-dark-text ng-star-inserted'][contains(.,'FOB')])[1]").first(); 
        const isTaxable = await taxableProductLine.locator("(//span[@title='Taxable'][contains(.,'Taxable')])[2]").isVisible();
    
        if (!isTaxable) {
          throw new Error('FOB product line is not taxable');
        }
        const taxRateElement = taxableProductLine.locator("(//small[@class='color-dark-text ng-star-inserted'][contains(.,'Tax Rate')])[1]"); 
        const taxRate = await taxRateElement.innerText();   
    }

    async verifyTaxableFilter() {
        await this.taxablebtn.click();  
        const taxableItems = this.page.locator("//span[contains(text(),'Taxable')]");
        expect(await taxableItems.count()).toBeGreaterThan(0); 
    }

    async verifyTaxFreeFilter() {
        await this.taxfreebtn.click();  
        const taxFreeItems = this.page.locator("//span[contains(text(),'Tax Free')]");
        expect(await taxFreeItems.count()).toBeGreaterThan(0); 
    }

    async verifyTotalNetPremium() {
        await new Promise(resolve => setTimeout(resolve, 9000));
        const selectedProductLine = await this.page.locator("//small[@title='Health'][contains(.,'Health')]").first().innerText();
        const individualNetPremiums = this.page.locator("//div[@class='mat-row detail-row ng-star-inserted']//mat-cell[5]");
    
        let totalNetPremium = 0;
        const netPremiumCount = await individualNetPremiums.count();
    
        for (let i = 0; i < netPremiumCount; i++) {
            const netPremiumValue = await individualNetPremiums.nth(i).innerText();
            totalNetPremium += parseFloat(netPremiumValue.replace(/[^0-9.-]+/g, "")); 
        }
        const displayedTotalNetPremium = await this.page.locator("(//mat-cell[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-gwp mat-column-gwp ng-star-inserted'])[3]").innerText();
        const displayedTotal = parseFloat(displayedTotalNetPremium.replace(/[^0-9.-]+/g, ""));  
        expect(totalNetPremium).toBeCloseTo(displayedTotal, 2);  
    }

    async verifyTotalIPTAmount() {
        const selectedProductLine = await this.page.locator("//small[@title='Health'][contains(.,'Health')]").first().innerText();
        const individualIPTAmounts = this.page.locator("(//mat-cell[contains(@class,'cell cdk-cell cdk-column-ipt mat-column-ipt ng-star-inserted')])[2]");
        
        let totalIPTAmount = 0;
        const iptAmountCount = await individualIPTAmounts.count();
    
        for (let i = 0; i < iptAmountCount; i++) {
            const iptAmountValue = await individualIPTAmounts.nth(i).innerText();
            totalIPTAmount += parseFloat(iptAmountValue.replace(/[^0-9.-]+/g, "")); 
        }
        const displayedTotalIPTAmount = await this.page.locator("(//iris-custom-row-cell[@class='ng-star-inserted'][contains(.,'0')])[4]").innerText();
        const displayedTotal = parseFloat(displayedTotalIPTAmount.replace(/[^0-9.-]+/g, ""));  
    
        if (isNaN(displayedTotal)) {
            console.log("Error: Displayed total IPT amount is not a valid number:", displayedTotalIPTAmount);
            throw new Error("Displayed total IPT amount is not a valid number.");
        }
        expect(totalIPTAmount).toBeCloseTo(displayedTotal, 2);  
    }
    
    async selectItemCountFromDropdown(selectedCount: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this. page.reload();
        await this.itemDropDownSelector.click();
        await this.page.waitForSelector("mat-option");

        const options = await this.page.$$eval("mat-option",(optionElements) => optionElements.map((option) => option.textContent?.trim()));
        console.log('Available item counts in the dropdown:', options);
        if (options.includes(selectedCount)) {
        console.log(`Selected Count: ${selectedCount}`);
        const optionLocator = this.page.locator(`//mat-option[@role='option'][contains(.,'${selectedCount}')]`);

        await optionLocator.waitFor({ state: 'visible' });  
        await optionLocator.click();

        console.log(`Selected ${selectedCount} from the dropdown.`);
        } 
        else 
        {
        console.log(`Option ${selectedCount} not found in the dropdown.`);
        }
    }

    async clickOnExportToExcelButton()
    {
        await new Promise(resolve => setTimeout(resolve, 9000));
        await expect(this.clickExportToExcelbtn).toBeVisible();
        await this.clickExportToExcelbtn.click();
    }

    async verifyFileDownloaded(downloadDir: string): Promise<void> {
        const download: Download = await this.page.waitForEvent('download');

        const downloadedFilePath = await download.path();
        expect(downloadedFilePath).toBeTruthy();

        const suggestedFilename = download.suggestedFilename();
        const finalFilePath = path.join(downloadDir, suggestedFilename);
        await download.saveAs(finalFilePath);
    }

    async verifyFileDownloadedSuccessfully(): Promise<void> {
        await this.page.waitForLoadState('networkidle');

        const [download] = await Promise.all([this.page.waitForEvent('download'), this.clickExportToExcelbtn.click({ force: true })]);
        const filePath = path.join(__dirname, '../../page-objects/downloadDocuments-pages/DownloadedFileName.xlsx');
        await download.saveAs(filePath);

        const fileExtension = path.extname(filePath).toLowerCase();
        if (fileExtension !== '.xlsx') {throw new Error(`Invalid file extension: ${fileExtension}. Expected '.xlsx'`);}

        const xlsx = require('xlsx');
        const workbook = xlsx.readFile(filePath);
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        console.log('Extracted Excel Data:', jsonData);
    }
    
    async verifyGrandTotalAtTheEndOfProductLines(){
        await expect(this.grandTotalSelector).toBeVisible();
        const rows = this.page.locator('table#product-table tr');  
        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const totalCell = row.locator(this.grandTotalCellSelector); 
        await expect(totalCell).toBeVisible();
        }}

    async verifySearchBarDisplayed() {
        await expect(this.searchBarSelector).toBeVisible();
        }
    
}



