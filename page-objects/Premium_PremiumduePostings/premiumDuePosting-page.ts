//Author: Chaitra Nanjundaswamy
import { Keyboard, Locator, LocatorScreenshotOptions, Page, expect } from "@playwright/test";

export class premiumDuePosting {
    readonly page: Page;
    readonly policyMenuIcon: Locator;
    readonly fromDate: Locator;
    readonly filterButton: Locator;
    readonly policyRef: Locator;
    readonly applyButton: Locator;
    readonly searchButton: Locator;
    readonly viewPolicyJournalVoucher: Locator;
    readonly reversePremiumPosting: Locator;
    readonly account: Locator;
    readonly amount: Locator;
    readonly amountCV1: Locator;
    readonly amountCV2: Locator;
    readonly AccountName: Locator;
    readonly reverseTaxPosting: Locator;

    constructor(page: Page) {
        this.page = page;
        this.policyMenuIcon = page.locator("//mat-icon[@data-mat-icon-name = 'icon-policy-jv']");
        this.fromDate = page.locator("//div//input[@title='From Date']");
        this.filterButton = page.locator("//span//iris-icon-action//iris-action-base//mat-icon[@data-mat-icon-name='icon-filter-horizontal']")
        this.policyRef = page.locator("//div//input[@title = 'Policy Reference']");
        this.applyButton = page.locator("//div//iris-button-action//iris-action-base//button[@title = 'Apply']");
        this.searchButton = page.locator("//span[@title = 'Search']");
        this.viewPolicyJournalVoucher = page.locator("//button[@title= 'View Policy Journal Voucher']");
        this.reversePremiumPosting = page.locator("//iris-base-label//small[@title = 'Reverse Premium Posting']");
        this.account = page.locator("//mat-header-cell[contains(@class, 'accountName')]");
        this.amount = page.locator("//mat-header-cell[@id = 'amount-Amount']");
        this.reverseTaxPosting = page.locator("//iris-base-label//small[@title = 'Reverse TAX Posting']");
        
    }

        async clickOnPolicyMenuIcon() {
            await new Promise(resolve => setTimeout(resolve, 9000));
            await this.policyMenuIcon.click();
            await new Promise(resolve => setTimeout(resolve, 10000));
        }
        async ProvideFromDate(fromDate: string) {
            await this.fromDate.clear();
            await this.fromDate.fill(fromDate); 
            await new Promise(resolve => setTimeout(resolve, 9000));          
        }
        async clickOnFilterButton(policyRef: string){
            await new Promise(resolve => setTimeout(resolve, 9000));
            await this.filterButton.click();
            await this.policyRef.fill(policyRef);
            await this.applyButton.click();
            //await new Promise(resolve => setTimeout(resolve, 5000));
        }

        async clickOnSearchButton() {
            await new Promise(resolve => setTimeout(resolve, 10000));
            await this.searchButton.click();
          //  await new Promise(resolve => setTimeout(resolve, 10000));

    }
        async clickOnViewPolicyJournalvoucher() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.viewPolicyJournalVoucher.click();
        //await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async clickOnReversePremiumPostings() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.reversePremiumPosting.click();
        //await new Promise(resolve => setTimeout(resolve, 5000));
       /* const policyReference = this.page.locator('//mat-header-cell[contains(@id, "policyReference-Reference")]');
        await new Promise(resolve => setTimeout(resolve, 5000));
        for (let index = 0; index < await policyReference.count(); index++) {
            if(reversePremiumPosting is visible
        }*/
       }

       async verifyReversePremiumPostingGrid() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        //expect(this.account).toBeVisible();
       // expect(this.amount).toBeVisible();

        const amountCV1 = this.page.locator("//mat-cell[contains(@class, 'amountCV1')]");
        const amountCV2 = this.page.locator("//mat-cell[contains(@class, 'amountCV2')]");

            for (let index = 0; index < await amountCV1.count(); index++) {
            expect(amountCV1.nth(index)).toBeVisible();
           // await new Promise(resolve => setTimeout(resolve, 2000));
        
       }
       await new Promise(resolve => setTimeout(resolve, 3000));
            for (let index = 0; index < await amountCV2.count(); index++) {
            expect(amountCV2.nth(index)).toBeVisible();
          //  await new Promise(resolve => setTimeout(resolve, 2000));
    
        }
    }     

     async verifyAccountName(data: string) {
        let flag = 0;
        await new Promise(resolve => setTimeout(resolve, 2000));
       const AccountName = this.page.locator("//mat-cell[contains(@class,'accountName')]//small");
        //const AccountNameValue = await this.AccountName.textContent();
       for (let index = 0; index < await AccountName.count(); index++) {
            const AccountNameValue = await AccountName.nth(index).textContent(); 
            if (AccountNameValue == data){
                flag = 1;
                break;
            }
        }
        expect(flag).toStrictEqual(1);
    }

    async clickOnReverseTaxPosting() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.reverseTaxPosting.click();
    }

    async verifyReverseTaxPostingGrid() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const reverseTaxPostingAccountName = this.page.locator("//mat-cell[contains(@class, 'accountName')]");
        const reverseTaxPostingAmountCV1 = this.page.locator("//mat-cell[contains(@class, 'amountCV1')]");
        const reverseTaxPostingAmountCV2 = this.page.locator("//mat-cell[contains(@class, 'amountCV2')]");

        for (let index = 0; index < await reverseTaxPostingAccountName.count(); index++) {
            expect(reverseTaxPostingAccountName.nth(index)).toBeVisible();
        }

        await new Promise(resolve => setTimeout(resolve, 3000));  
        for (let index = 0; index < await reverseTaxPostingAmountCV1.count(); index++) {
            expect(reverseTaxPostingAmountCV1.nth(index)).toBeVisible();
        }

       await new Promise(resolve => setTimeout(resolve, 3000));
            for (let index = 0; index < await reverseTaxPostingAmountCV2.count(); index++) {
            expect(reverseTaxPostingAmountCV2.nth(index)).toBeVisible();
        }
    }

    async verifyReversePostingAccountName(data: string, data1: string) {
        let flag = 0;
        await new Promise(resolve => setTimeout(resolve, 2000));
       const AccountName = this.page.locator("//mat-cell[contains(@class,'accountName')]//small");
       const accountType = this.page.locator("//mat-cell[contains(@class, 'debitdescription')]//small")
        
        for(let j = 0; j < await accountType.count(); j++) {
            const accountTypeValue = await accountType.nth(j).textContent();
            if(accountTypeValue == data1) {
                 for(let i = j; i < await AccountName.count(); i++) {
            
                    const AccountNameValue = await AccountName.nth(i).textContent(); 
                    const accountTypeValue = await accountType.nth(i).textContent();
                    if(accountTypeValue == data1) {
                        flag = 0;
                        if (AccountNameValue == data)
                        flag = 1;
                    }
            else
                break;         
            }}
        }
         expect(flag).toStrictEqual(1);
    }
        
 }

