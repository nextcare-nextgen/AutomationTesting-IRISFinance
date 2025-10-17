import { Keyboard, Locator, Page, expect } from "@playwright/test";

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
    readonly transactionId: Locator;
    readonly searchbtn: Locator;
    readonly applybtn: Locator;
    readonly resetbtn: Locator;
    readonly searchBar: Locator;
    readonly label: Locator;
    readonly exportToExcel: Locator;
    readonly paymentDetailsTitle: Locator;
    readonly nameOnCardField: Locator;
    readonly ccNumber: Locator;
    readonly expiryDate: Locator;
    readonly token: Locator;
    readonly transactionRef: Locator;
    readonly remmitanceInfo: Locator;
    readonly orgName: Locator;
    readonly orgBankAC: Locator;
    readonly orgSwiftCode: Locator;
    readonly transactionReff: Locator;
    readonly transactionFlow: Locator;
    readonly benficiaryAccountName: Locator;
    readonly benficiaryAccount: Locator;
    readonly benficiaryAccountSwift: Locator;
    readonly IBAN: Locator;
    readonly remmitanceInfoDD: Locator;
    readonly benficiaryBankName: Locator;
    readonly DDMandateRef: Locator;
    readonly DDsignDate: Locator;
    readonly DDcollectionDate: Locator;
    readonly clearAll: Locator;
    readonly exportTOCurrentPage: Locator;
    readonly errorMessage: Locator;


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
        this.searchbtn = page.locator('//div//button[@title="Search"]');
        this.applybtn = page.locator('//div//button[@title="Apply"]');
        this.resetbtn = page.locator('//div//button[@title="Reset"]');
        this.searchBar = page.locator('//input[@placeholder="Search"]');
        this.label = page.locator('//iris-menu-card//iris-base-label//span');
        this.exportToExcel = page.locator('//button[@title="Export To Excel"]');
        this.paymentDetailsTitle = page.locator('//h2[@title="Payment Details"]');
        this.nameOnCardField = page.locator('//mat-label//span[@title="Name On Card"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.ccNumber = page.locator('//mat-label//span[@title="CC Number"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.expiryDate = page.locator('//mat-label//span[@title="Expiry Date"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.token = page.locator('//mat-label//span[@title="Token"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.transactionRef = page.locator('//mat-label//span[@title="Transaction Reference"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.remmitanceInfo = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.orgName = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.orgBankAC = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.orgSwiftCode = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.transactionReff = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.transactionFlow = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.benficiaryAccountName = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.benficiaryAccount = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.benficiaryAccountSwift = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.IBAN = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.remmitanceInfoDD = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.benficiaryBankName = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.DDMandateRef = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.DDcollectionDate = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.DDsignDate = page.locator('//mat-label//span[@title="Remittance Info"]//following::div[contains(@class,mdc-notched-outline)][2]');
        this.clearAll = page.locator('//div//button[@title="Clear All"]');
        this.exportTOCurrentPage = page.locator('//button[@title="Export Current Page"]');
        this.errorMessage = page.locator('//mat-label[@title="No results found"]');

    }

    async verifyBreadCrumbsText(data: string) {
        const actual = await this.breadCrumbs.textContent();
        expect(actual).toBe(data);
    }


    async clickOnFinancialTransactionsMonitoringShortcutButton() {
        await this.financialTransactionsMonitoringShortcut.click();
        await new Promise(resolve => setTimeout(resolve, 9000));
    }


    async verifyFinancialTransactionsMonitoringShrtcutButton() {
        expect(this.financialTransactionsMonitoringShortcut).toBeVisible();

    }

    async verifyDashboardText(data: string) {
        const actual = await this.dashboard.textContent();
        expect(actual).toBe(data);
    }

    async verifyfinancialTransactionsMonitoringText(data: string) {
        const actual = await this.financialTransactionsMonitoringLabel.textContent();
        expect(actual).toBe(data);
    }

    async verifyOrganizationName(data: string) {
        const actual = await this.organizationName.textContent();
        expect(actual).toBe(data);
    }

    async verifySearchfiltersButton() {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(this.searchFilters).toBeEnabled();
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
        await new Promise(resolve => setTimeout(resolve, 9000));
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
        await this.page.locator('//mat-label//span[@title="Payment Status"]').click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').waitFor({ state: 'visible', timeout: 20000 });
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]//mat-checkbox//input').click();
    }

    async clickOnSearchFilterButton() {
        await this.searchFilters.click();
        await new Promise(resolve => setTimeout(resolve, 7000));
    }

    async verifyListOfPaymentStatus() {
        //await this.page.waitForSelector('.loader', { state: 'hidden' });
        await new Promise(resolve => setTimeout(resolve, 7000));
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
        await new Promise(resolve => setTimeout(resolve, 3000));
        const value = await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]').click();
        //ancestor::div[1]//mat-checkbox//input
    }

    async verifyListOfTransactionType() {
        // await this.page.waitForSelector('.loader', { state: 'hidden' });
        await new Promise(resolve => setTimeout(resolve, 7000));
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
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator('//mat-label//span[@title="Payment Method"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]').click();
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
        await this.customerRef.fill(data);
    }

    async enterTransactionId(data: string) {
        await this.transactionId.fill(data);
    }

    async clickOnSearchButton() {
        await this.searchbtn.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async verifyPaymentStatusFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 8000));
        // await this.page.waitForSelector('.loader', { state: 'hidden' });
        const paymentsstatus = this.page.locator('//mat-cell[contains(@class,"paymentStatus")]//small');
        for (let index = 0; index < await paymentsstatus.count(); index++) {
            const paymentStatus = await paymentsstatus.nth(index).textContent();
            expect(paymentStatus).toBe(data);
        }
    }


    async verifyPaymentMethodFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const paymentsmethod = this.page.locator('//mat-cell[contains(@class,"paymentMethod")]//small');
        for (let index = 0; index < await paymentsmethod.count(); index++) {
            const paymentMethod = await paymentsmethod.nth(index).textContent();
            expect(paymentMethod).toBe(data);
        }
    }


    async clickOnApplyButton() {
        await this.applybtn.click();
        await new Promise(resolve => setTimeout(resolve, 8000));
    }


    async selectPaymentType(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]').click();
    }


    async verifyPaymentTypeFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const paymenttype = this.page.locator('//mat-cell[contains(@class,"paymentType")]//small');
        for (let index = 0; index < await paymenttype.count(); index++) {
            const paymentType = await paymenttype.nth(index).textContent();
            expect(paymentType).toBe(data);
        }
    }

    async verifyPaymentAmountFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const paymentsamount = this.page.locator('//mat-cell[contains(@class,"paymentAmount")]//small');
        for (let index = 0; index < await paymentsamount.count(); index++) {
            const paymentAmount = await paymentsamount.nth(index).textContent();
            expect(paymentAmount).toBe(data);
        }
    }

    async verifyPolicyRefFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const policyref = this.page.locator('//mat-cell[contains(@class,"policyRef")]//small');
        for (let index = 0; index < await policyref.count(); index++) {
            const policyRef = await policyref.nth(index).textContent();
            expect(policyRef).toBe(data);
        }
    }

    async verifyCustomerRefFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const customerref = this.page.locator('//mat-cell[contains(@class,"documentReference")]//small');
        for (let index = 0; index < await customerref.count(); index++) {
            const customerRef = await customerref.nth(index).textContent();
            expect(customerRef).toContain(data);
        }
    }

    async verifyTransactionIdFromGrid(data: string) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const transactdionId = this.page.locator('//mat-cell[contains(@class,"transactionId")]//small');
        for (let index = 0; index < await transactdionId.count(); index++) {
            const transactionID = await transactdionId.nth(index).textContent();
            expect(transactionID).toBe(data);
        }
    }

    async clickOnResetButton() {
        await this.resetbtn.click();
    }

    async clickOnExportToExcelButton() {
        await this.exportToExcel.click();
    }

    async enterinSearchbar(data: string) {
        await this.searchBar.fill(data);
        await new Promise(resolve => setTimeout(resolve, 3000));
        const actual = await this.label.textContent();
        expect(actual).toBe(data);
    }

    async verifySearchResultFromGrid() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.page.locator('//mat-header-cell[contains(@class,"transactionDate")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentDate")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentType")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentMethod")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentAmount")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentCurrency")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentStatus")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentRef")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"policyReference")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"paymentFileRef")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"transactionId")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"documentReference")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"remittanceInfo")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"beneficiaryAccountName")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"beneficiaryAccountNumber")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"origin")]')).toBeVisible();
        expect(this.page.locator('//mat-header-cell[contains(@class,"rejectReasonCode")]')).toBeVisible();

    }

    async verifyDetailsButton() {
        const detailsButton = this.page.locator('//button[@title="View More Details"]');
        for (let index = 0; index < await detailsButton.count(); index++) {
            expect(detailsButton.nth(index)).toBeVisible();

        }
    }

    async clickOnViewDeatilsButton() {
        const detailsbtn = this.page.locator('//button[@title="View More Details"]');
        await detailsbtn.first().click();
    }

    async verifyPaymentsDetailsTitle(data: string) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const actual = await this.paymentDetailsTitle.textContent();
        expect(actual).toBe(data);
    }

    async verifyCCPaymentDetails() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.nameOnCardField).toBeVisible();
        expect(this.ccNumber).toBeVisible();
        expect(this.expiryDate).toBeVisible();
        expect(this.token).toBeVisible();
        expect(this.transactionRef).toBeVisible();
        expect(this.remmitanceInfo).toBeVisible();
    }

    async verifyDDPaymentDetails() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.orgName).toBeVisible();
        expect(this.orgBankAC).toBeVisible();
        expect(this.orgSwiftCode).toBeVisible();
        expect(this.transactionReff).toBeVisible();
        expect(this.transactionFlow).toBeVisible();
        expect(this.benficiaryAccountName).toBeVisible();
        expect(this.benficiaryAccount).toBeVisible();
        expect(this.benficiaryAccountSwift).toBeVisible();
        expect(this.IBAN).toBeVisible();
        expect(this.remmitanceInfo).toBeVisible();
        expect(this.benficiaryAccountName).toBeVisible();
        expect(this.DDMandateRef).toBeVisible();
        expect(this.DDsignDate).toBeVisible();
        expect(this.DDcollectionDate).toBeVisible();
    }

    async verifyListOfPaymentsMethods() {
        await this.page.locator('//mat-label//span[@title="Payment Method"]').click();
        const elements = await this.page.$$('//div[@role="listbox"]//mat-label');

        const expectedValues = ['Bank Transfer', 'Credit Card', 'Direct Debit', 'Direct Payment', 'Entrusted Collection', 'Standing Order'];

        for (let i = 0; i < elements.length; i++) {
            const text = await elements[i].textContent();
            expect(text).toEqual(expectedValues[i]);
        }
    }

    async verifySearchBar() {
        expect(this.searchBar).toBeVisible();
    }

    async verifySearchFiltersAreEmptyAfterReset() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(this.page.locator('//mat-label//span[@title="Payment Status"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="Payment Method"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="Transaction Type"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="Document Reference"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="From Payment Amount"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="To Payment Amount"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="Policy Ref"]//following::input[1]')).toBeEmpty();
        expect(this.page.locator('//mat-label//span[@title="Transaction Id"]//following::input[1]')).toBeEmpty();
    }

    async clickOnClearAllButton() {
        await this.clearAll.click();
    }

    async enterFromDate(data: string) {
        await this.fromdateinput.fill(data);
    }

    async clickExportTOcurrentPage() {
        await this.exportTOCurrentPage.click();
    }

    async verifyErrorMessage(data: string, data1: string) {
        await this.page.locator('//mat-label//span[@title="Transaction Type"]').click();
        const input = this.page.locator('//iris-transaction-type-autocomplete//input');

        await input.click(); 
        await input.fill(''); 
        await input.type(data1, { delay: 100 }); 

        await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
        const actual = await this.errorMessage.getAttribute('title');
        expect(actual?.trim()).toBe(data);
    }

    async verifyexistingRecordBeforeSearch() {
        const before = await this.page.locator('//div[contains(@class,"paginator-range")]//div[text()]').allTextContents();
        await this.searchbtn.click();
        await new Promise(resolve => setTimeout(resolve, 9000));
        const after = await this.page.locator('//div[contains(@class,"paginator-range")]//div[text()]').allTextContents();
        expect(before).toStrictEqual(after);
    }

    ////added 
    async clickColumnHeader(columnName: string) {
        const header = this.page.locator(`.mat-sort-header:has-text("${columnName}")`);
        await header.waitFor({ state: 'visible' });
        await header.click();
    }

    async getColumnValues(columnName: string): Promise<string[]> {
    const allSmalls = this.page.locator('small');

    const smallCount = await allSmalls.count();
    const headerLabels: string[] = [];

    for (let i = 0; i < smallCount; i++) {
        const text = await allSmalls.nth(i).innerText();
        const trimmedText = text.trim();

        if (/^\d+$/.test(trimmedText) || trimmedText === '-') {
            break;
        }

        headerLabels.push(trimmedText);
    }

    console.log('✅ Column headers extracted:', headerLabels);

    const columnIndex = headerLabels.findIndex(header =>
        header.toLowerCase().includes(columnName.trim().toLowerCase())
    );

    if (columnIndex === -1) {
        throw new Error(`❌ Column "${columnName}" not found. Headers: ${headerLabels.join(', ')}`);
    }

  
    return await this.page.locator('tbody tr').evaluateAll((rows, index) =>
        rows.map(row => {
            const cell = row.querySelectorAll('td')[index];
            return cell?.textContent?.trim() || '';
        }),
        columnIndex
    );
}

    async validateSortingForColumn(columnName: string) {
     
        const originalValues = await this.getColumnValues(columnName);

        await this.clickColumnHeader(columnName);
        const ascSortedValues = await this.getColumnValues(columnName);
        const expectedAsc = [...originalValues].sort((a, b) => a.localeCompare(b));

        expect(ascSortedValues).toEqual(expectedAsc);
        console.log(`✅ Ascending sort validated for column: ${columnName}`);

        await this.clickColumnHeader(columnName);
        const descSortedValues = await this.getColumnValues(columnName);
        const expectedDesc = [...originalValues].sort((a, b) => b.localeCompare(a));

        expect(descSortedValues).toEqual(expectedDesc);
        console.log(`✅ Descending sort validated for column: ${columnName}`);
    }
 }












