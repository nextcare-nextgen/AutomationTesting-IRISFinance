import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { executionAsyncResource } from "async_hooks";
import { SlowBuffer } from "buffer";
import exp from "constants";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export class FxRatesPage {
  readonly page: Page;

  readonly fxRatesShortcut: Locator;
  readonly breadCrumbs: Locator;
  readonly dashboard: Locator;
  readonly addfxRates: Locator;
  readonly fromCurrency: Locator;
  readonly selectvalue: Locator;
  readonly fromCurrencyenter: Locator;
  readonly rate: Locator;
  readonly closebtn: Locator;
  readonly recordPerPage: Locator;
  readonly recordPerPageDropdown: Locator;
  readonly searchBar: Locator;
  readonly label: Locator;
  readonly fxRatestext: Locator;
  readonly fromDate: Locator;
  readonly toDate: Locator;
  readonly fromDateCalenderIcon: Locator;
  readonly toDateCalenderIcon: Locator;
  readonly fromCurrencyfield: Locator;
  readonly toCurrencyfield: Locator;
  readonly searchbtn: Locator;
  readonly resetbtn: Locator;
  readonly fromcurrencyFromGrid: Locator;
  readonly tocurrencyFromGrid: Locator;
  readonly fromDateFromGrid: Locator;
  readonly toDateFromGrid: Locator;
  readonly rateFromGrid: Locator;
  readonly validatedFromGrid: Locator;
  readonly addFxRatebtn: Locator;
  readonly addfxRatestext: Locator;
  readonly addFxRateCurrency: Locator;
  readonly addFxRateToCurrency: Locator;
  readonly addFxRateStartDate: Locator;
  readonly addFxRateEndDate: Locator;
  readonly addFxRateRate: Locator;
  readonly addFxRateValidatedCheckbox: Locator;
  readonly addFxRateStartDateCalender: Locator;
  readonly addFxRateEndDateCalender: Locator;
  readonly createbtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fxRatesShortcut = page.locator('//div//span[@title="FX Rates"]');
    this.breadCrumbs = page.locator('//iris-breadcrumb//li//iris-navigation-hyperlink');
    this.dashboard = page.locator('//div//h1[@title="Dashboard"]');
    this.addfxRates = page.locator('//mat-icon[@title="Add Fx Rate"]');
    this.fromCurrency = page.locator('//iris-composed-dialog//iris-select-formfield//div//span[@title="From Currency"]');
    this.fromCurrencyenter = page.locator('//iris-select-formfield//div[contains(@class,"mat-form-field-infix")]//input[@aria-expanded="true"][1]');
    this.selectvalue = page.locator('(//mat-label[@class="ng-star-inserted"])[1]');
    this.rate = page.locator('//div//input[@title="Rate"]');
    this.closebtn = page.locator("//mat-icon[@title='Cancel']//*[name()='svg']");
    this.recordPerPage = page.locator('//div[text()=" Records per page: "]');
    this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
    this.searchBar = page.locator('//input[@placeholder="Search"]');
    this.label = page.locator('//iris-menu-card//iris-base-label//span');
    this.fxRatestext = page.locator('//h1[@title="FX Rates"]');
    this.fromDate = page.locator('//div//input[@title="From Date"]');
    this.toDate = page.locator('//div//input[@title="To Date"]');
    this.fromDateCalenderIcon = page.locator('//div//input[@title="From Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
    this.toDateCalenderIcon = page.locator('//div//input[@title="To Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
    this.fromCurrencyfield = page.locator('//div//mat-label//span[@title="From Currency"]');
    this.toCurrencyfield = page.locator('//div//mat-label//span[@title="To Currency"]');
    this.searchbtn = page.locator('//button[@title="Search"]');
    this.resetbtn = page.locator('//button[@title="Reset"]');
    this.fromcurrencyFromGrid = page.locator('//iris-base-label//small[@title="From Currency"]');
    this.tocurrencyFromGrid = page.locator('//iris-base-label//small[@title="To Currency"]');
    this.fromDateFromGrid = page.locator('//iris-base-label//small[@title="From Date"]');
    this.toDateFromGrid = page.locator('//iris-base-label//small[@title="To Date"]');
    this.rateFromGrid = page.locator('//iris-base-label//small[@title="Rate"]');
    this.validatedFromGrid = page.locator('//iris-base-label//small[@title="Validated"]');
    this.addFxRatebtn = page.locator('//button[@title="Add Fx Rate"]');
    this.addfxRatestext = page.locator('//h2[@title="Add New Fx Rate"]');
    this.addFxRateCurrency = page.locator('//iris-fx-rate-manage-dialog//span[@title="From Currency"]');
    this.addFxRateToCurrency = page.locator('//div//iris-fx-rate-manage-dialog//iris-standard-card//span[@title="To Currency"]');
    this.addFxRateStartDate = page.locator('//iris-fx-rate-manage-dialog//input[@title="Start Date"]');
    this.addFxRateEndDate = page.locator('//iris-fx-rate-manage-dialog//input[@title="End Date"]');
    this.addFxRateRate = page.locator('//iris-fx-rate-manage-dialog//input[@title="Rate"]');
    this.addFxRateValidatedCheckbox = page.locator('//iris-fx-rate-manage-dialog//div[@isdisabled="true"]');
    this.addFxRateStartDateCalender = page.locator('//div//input[@title="Start Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
    this.addFxRateEndDateCalender = page.locator('//div//input[@title="End Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
    this.createbtn = page.locator('//button[@title="Create"]');

  }

  /**
   * This function is used to verify the current page title
   * @param expectedPageTitle - the title youwant to verify
   */

  /**
    * This function is used to click on Appointments Buttom
    */
  async clickOnFxRatesShrtcutsButton() {
    await this.fxRatesShortcut.first().click();
    await new Promise(resolve => setTimeout(resolve, 9000));
  }

  async verifyBreadCrumbsText(data: string) {
    const actual = await this.breadCrumbs.textContent();
    expect(actual).toBe(data);
  }


  async verifyDashboardText(data: string) {
    const actual = await this.dashboard.textContent();
    expect(actual).toBe(data);
  }


  async verifyFXRateShortcutButton() {
    expect(this.fxRatesShortcut).toBeVisible();
  }

  async clickOnAddFxRatesButton() {
    await this.addfxRates.click();
  }

  async getRate(rate: string) {
    await this.rate.fill(rate);

  }

  async clickOnCloseButton() {
    await this.closebtn.click();
  }

  async verifyRecordsPerPageTitle(data: string) {
    const actual = await this.recordPerPage.textContent();
    expect(actual).toBe(data);
  }


  async clickOnRecordsPerPageDropdown() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await this.recordPerPageDropdown.click();
    expect(this.page.locator('//mat-option//span')).toHaveText([' 50 ', ' 100 ', ' 150 ', ' 200 ', ' 250 ']);
  }


  async clickOnRecordsPerPageDropdownOption() {
    await this.recordPerPageDropdown.click();
    let dropdownOptions = await this.page.locator('//mat-option//span').all();

    for (let i = 0; i < dropdownOptions.length; i++) {
      // Check if current value is Item 1
      if (await dropdownOptions[i].textContent() === " 30 ") {
        // Click if element with text found
        await dropdownOptions[i].click();
        break;
      }
    }
  }

  async verifySearchBar() {
    expect(this.searchBar).toBeVisible();
  }

  async enterinSearchbar(data: string) {
    await this.searchBar.fill(data);
    await new Promise(resolve => setTimeout(resolve, 3000));
    const actual = await this.label.textContent();
    expect(actual).toBe(data);
  }

  async verifyFXRatesText(data: string) {
    const actual = await this.fxRatestext.textContent();
    expect(actual).toBe(data);
  }

  async verifyFromDate() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(this.fromDate).toBeVisible();
  }

  async verifyToDate() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(this.toDate).toBeVisible();
  }

  async enterFromAndToDate() {
    await this.fromDateCalenderIcon.click();
    await this.page.locator("//span[text()=' 1 ']").click();
    await this.page.waitForTimeout(2000);

    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // let fullDate = day + "." + month + "." + year + ".";
    let fullDate = `${day}`;
    var todayDate = Number(fullDate);

    await this.toDateCalenderIcon.click();
    await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
    await this.page.waitForTimeout(2000);
  }

  async verifyFromCurrencyField() {
    await new Promise(resolve => setTimeout(resolve, 9000));
    expect(this.fromCurrencyfield).toBeVisible();
  }

  async verifyToCurrencyField() {
    await new Promise(resolve => setTimeout(resolve, 9000));
    expect(this.toCurrencyfield).toBeVisible();
  }

  async selectFromCurrency(data: string) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await this.fromCurrencyfield.click();
    await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]').click();
  }


  async selectToCurrency(data: string) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await this.toCurrencyfield.click();
    await this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]//ancestor::div[1]').click();
  }


  async verifySearchbtnField() {
    await new Promise(resolve => setTimeout(resolve, 9000));
    expect(this.searchbtn).toBeVisible();
  }

  async verifyResetbuttonField() {
    await new Promise(resolve => setTimeout(resolve, 9000));
    expect(this.resetbtn).toBeVisible();
  }

  async clickOnSearchButton() {
    await this.searchbtn.click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    
  }

  async clickOnResetButton() {
    await this.resetbtn.click();
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  async verifyToDateFromGrid() {
    const toDate = this.page.locator('//mat-cell[contains(@class,"toRateDate")]');
    for (let i = 0; i < await toDate.count(); i++) {
      expect(toDate.nth(i).innerText()).toBeTruthy();

    }
  }

  async verifyFromDateFromGrid() {
    const fromDate = this.page.locator('//mat-cell[contains(@class,"fromRateDate")]');
    for (let i = 0; i < await fromDate.count(); i++) {
      expect(fromDate.nth(i).innerText()).toBeTruthy();
    }
  }

  async verifyFromCurrencyFromGrid() {
    const fromCurrency = this.page.locator('//mat-cell[contains(@class,"fromCurrLongDesc")]');
    for (let i = 0; i < await fromCurrency.count(); i++) {
      expect(fromCurrency.nth(i).innerText()).toBeTruthy();
    } 
  }


  async verifyToCurrencyFromGrid() {
    const toCurrency = this.page.locator('//mat-cell[contains(@class,"toCurrLongDesc")]');
    for (let i = 0; i < await toCurrency.count(); i++) {
      expect(toCurrency.nth(i).innerText()).toBeTruthy();
    }
  }

  async verifyafterResetCurrencyFieldReset() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const toCurrencyinput = this.page.locator('//form//div[contains(@class,"w-md-auto")][3]//iris-autocomplete-select//div//input[contains(@class,"input-element")]');
    expect(toCurrencyinput).toBeEmpty();

  }

  async verifyAllColumnField() {
    await new Promise(resolve => setTimeout(resolve, 8000));
    expect(this.fromcurrencyFromGrid).toBeVisible();
    expect(this.tocurrencyFromGrid).toBeVisible();
    expect(this.fromDateFromGrid).toBeVisible();
    expect(this.toDateFromGrid).toBeVisible();
    expect(this.rateFromGrid).toBeVisible();
    expect(this.validatedFromGrid).toBeVisible();
  }


  async verifyAddFxRateButton() {
    await new Promise(resolve => setTimeout(resolve, 9000));
    expect(this.addFxRatebtn).toBeVisible();
  }

  async clickOnAddFxRateButton() {
    await new Promise(resolve => setTimeout(resolve, 9000));
    await this.addFxRatebtn.click();
  }

  async verifyAddFXRatesScreenText(data: string) {
    const actual = await this.addfxRatestext.textContent();
    expect(actual).toBe(data);
  }

  async verifyAddFxRateCurrencyField() {
    expect(this.addFxRateCurrency).toBeVisible();
  }


  async verifyAddFxRateToCurrencyField() {
    expect(this.addFxRateToCurrency).toBeVisible();
  }


  async verifyAddFxRateStartDateEndDateField() {
    expect(this.addFxRateStartDate).toBeVisible();
    expect(this.addFxRateEndDate).toBeVisible();
  }

  async verifyAddFxRateRateField() {
    expect(this.addFxRateRate).toBeVisible();
  }

  async verifyAddFxRateValidatedisDisabled() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const value = await this.addFxRateValidatedCheckbox.getAttribute('isdisabled');
    expect(value).toBe("true");
  }

  async selectAddFXRateFromCurrency(fromCurrencyData: string) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await this.addFxRateCurrency.click();
    await this.page.locator('//mat-option//span//mat-label[text()="' + fromCurrencyData + '"]//ancestor::div[1]').click();

  }

  async selectAddFXRateToCurrency(toCurrencyData: string) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await this.addFxRateToCurrency.click();
    await this.page.locator('//mat-option//span//mat-label[text()="' + toCurrencyData + '"]//ancestor::div[1]').click();

  }

  async enterStartAndEndDate() {
    await this.addFxRateStartDateCalender.click();
    await this.page.locator("//span[text()=' 1 ']").click();
    await this.page.waitForTimeout(5000);

    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // let fullDate = day + "." + month + "." + year + ".";
    let fullDate = `${day}`;
    var todayDate = Number(fullDate);

    await this.addFxRateEndDateCalender.click();
    await this.page.locator('//span[text()=" ' + todayDate + ' "]').click();
    await this.page.waitForTimeout(2000);
  }

  async verifyCreateButton() {
    expect(this.createbtn).toBeEnabled();
  }

  async verifyTitleinBold() {
    const boldElement = await this.page.locator('//h1[@title="FX Rates"]');

    // Check if the font-weight is bold
    const fontWeight = await boldElement.evaluate(element => {
      return window.getComputedStyle(element).fontWeight;
    });

    // Assert that the font-weight is either 'bold' or a numeric value equal or greater than 700
    expect(['bold', '700', '800', '900'].includes(fontWeight)).toBe(true);
  }


}