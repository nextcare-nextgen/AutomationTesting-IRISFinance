import { Keyboard, Locator, Page, expect } from "@playwright/test";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class FinancialTransactionsMonitoringPage {

    readonly page: Page;
    readonly financialTransactionsMonitoringShortcut: Locator;
    readonly breadCrumbs: Locator;
    readonly dashboard: Locator;
    readonly financialTransactionsMonitoringLabel: Locator;
    readonly organizationName: Locator;
    readonly searchFilters: Locator;
    readonly currentDateFromCalender: Locator;
    readonly fromDateCalenderIcon: Locator;
    readonly fromdateinput: Locator;
    readonly todateinput: Locator;
    readonly fromPaymentAmount: Locator;
    readonly toPaymentAmount: Locator;
    readonly policyRef: Locator;
    readonly customerRef: Locator;
    readonly transactionId : Locator;
    readonly searchButton : Locator;
    readonly applyButton : Locator;


    constructor(page: Page) {
        this.page = page;
        this.financialTransactionsMonitoringShortcut = page.locator('//div//span[@title="Financial Transactions Monitoring"]');
        this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
        this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
        this.financialTransactionsMonitoringLabel = page.locator('//a[@title="Financial Transactions Monitoring"]');
        this.organizationName = page.locator('//mat-select//div[text()="Allianz Partners - 2024"]');
        this.searchFilters = page.locator('//button[@title="Filter"]');
        this.currentDateFromCalender = page.locator('//mat-month-view//td//button[contains(@class,"active")]');
        this.fromDateCalenderIcon = page.locator('//div//input[@title="From Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
        this.fromdateinput = page.locator('//input[@title="From Date"]');
        this.todateinput = page.locator('//input[@title="To Date"]');
        this.fromPaymentAmount = page.locator('//div//input[@title="From Payment Amount"]');
        this.toPaymentAmount = page.locator('//div//input[@title="To Payment Amount"]');
        this.policyRef = page.locator('//div//input[@title="Policy Ref"]');
        this.customerRef = page.locator('//div//input[@title="Document Reference"]');
        this.transactionId = page.locator('//div//input[@title="Transaction Id"]');
        this.searchButton = page.locator('//div//button[@title="Search"]');
        this.applyButton = page.locator('//div//button[@title="Apply"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnFinancialTransactionsMonitoringShortcutButton() {
        await this.financialTransactionsMonitoringShortcut.click();
    }


    async verifyFinancialTransactionsMonitoringShrtcutButton() {
        await expect(this.financialTransactionsMonitoringShortcut).toBeVisible();

    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyJournalVoucherListText(data: string) {
        const actual = await this.financialTransactionsMonitoringLabel.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }

    async verifySearchfiltersButton() {
        await expect(this.searchFilters).toBeVisible();
    }

    async selectCurrentDateFromDateCalender() {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'short' });
        const year = today.getFullYear();

        // Format the date in "06 May 2024" format
        const formattedDate = `${day.toString().padStart(2, '0')} ${month} ${year}`;
        await this.fromdateinput.fill(formattedDate);
        // Example: Logging the formatted date
        console.log(formattedDate);

    }

    async selectCurrentDateToDateCalender() {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'short' });
        const year = today.getFullYear();

        // Format the date in "06 May 2024" format
        const formattedDate = `${day.toString().padStart(2, '0')} ${month} ${year}`;
        await this.todateinput.fill(formattedDate);
        // Example: Logging the formatted date
        console.log(formattedDate);

    }

    async selectFutureDateInFromDateCalender() {
        const inputField = await this.page.locator('//input[@title="From Date"]');

        if (inputField) {
            // Generate a future date
            const futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 7); // Add 7 days for example
            const formattedDate = futureDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            // Fill the input field with the formatted date
            await inputField.fill(formattedDate);
        } else {
            console.error('Input field not found');
        }

    }

    async selectOldDate() {

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() - 1;
        let year = date.getFullYear();

        //let fullDate = day + "." + month + "." + year + ".";
        let fullDate = `${month}`;
        var todayDate = Number(fullDate);
        await this.fromDateCalenderIcon.click();
        await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
        await this.page.waitForTimeout(2000);
    }

    async selectPaymentStatus(data: string) {
        sleep(5000);
        await this.page.locator('//mat-label//span[@title="Payment Status"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnSearchFilterButton() {
        await this.searchFilters.click();
    }

    async verifyListOfPaymentStatus() {
        sleep(5000);
        await this.page.locator('//mat-label//span[@title="Payment Status"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');

        const expectedValues = ['Cleared', 'Cleared-allocated', 'Cleared-unallocated', 'Failed', 'Not Yet Processed', 'Partially Allocated', 'Pending',
            'Re-processing', 'Requires Intervention', 'Returned', 'Unidentified', 'Unpaid'
        ];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async selectTransactiontype(data: string) {
        sleep(5000);
        await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async verifyListOfTransactionType() {
        sleep(5000);
        await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');

        const expectedValues = ['Bank Charges', 'Blank', 'Cash Payment', 'Claim Adjustment', 'Claim Payment', 'Commission Payment', 'EC Premium Collection',
            'EC Premium Refund', 'Failed Claim Payment Reversal', 'Premium Payment', 'Refund Payment'
        ];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async selectPaymentMethod(data: string) {
        sleep(5000);
        await this.page.locator('//mat-label//span[@title="Payment Method"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async enterFromPaymentAmount(data: string) {
        await this.fromPaymentAmount.fill(data);
    }

    async enterToPaymentAmount(data: string) {
        await this.toPaymentAmount.fill(data);
    }

    async enterPolicyRef(data: string) {
        await this.policyRef.fill(data);
    }

    async enterCustomerRef(data: string) {
        await this.policyRef.fill(data);
    }

    async enterTransactionId(data: string) {
        await this.transactionId.fill(data);
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
    }

    async verifyPaymentStatusFromGrid(data:string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const paymentsstatus = this.page.locator('//mat-cell[contains(@class,"paymentStatus")]//small');
        for (let index = 0; index < await paymentsstatus.count(); index++) {
            const paymentStatus = await paymentsstatus.nth(index).textContent();
            expect(paymentStatus).toBe(data);
        }
    }


    async verifyPaymentMethodFromGrid(data:string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const paymentsmethod = this.page.locator('//mat-cell[contains(@class,"paymentMethod")]//small');
        for (let index = 0; index < await paymentsmethod.count(); index++) {
            const paymentMethod = await paymentsmethod.nth(index).textContent();
            expect(paymentMethod).toBe(data);
        }
    }


    async clickOnApplyButton() {
        await this.applyButton.click();
    }


    async selectPaymentType(data: string) {
        sleep(5000);
        await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    
    async verifyPaymentTypeFromGrid(data:string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const paymenttype = this.page.locator('//mat-cell[contains(@class,"paymentType")]//small');
        for (let index = 0; index < await paymenttype.count(); index++) {
            const paymentType = await paymenttype.nth(index).textContent();
            expect(paymentType).toBe(data);
        }
    }



}









