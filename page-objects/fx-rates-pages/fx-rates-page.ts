import { Keyboard, Locator, Page, expect } from "@playwright/test";
import { executionAsyncResource } from "async_hooks";
import exp from "constants";

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
  readonly closebutton: Locator;
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
  readonly searchButton: Locator;
  readonly resetButton: Locator;


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
    this.closebutton = page.locator('//iris-icon-action[@class="close-icon"]');
    this.recordPerPage = page.locator('//div[text()=" Records per page: "]');
    this.recordPerPageDropdown = page.locator('(//mat-select[contains(@aria-label,"")])[last()]');
    this.searchBar = page.locator('//iris-text-input[contains(@class,"search-menu-input")]');
    this.label = page.locator('//iris-menu-card//iris-base-label//span');
    this.fxRatestext = page.locator('//h1[@title="FX Rates"]');
    this.fromDate = page.locator('//div//input[@title="From Date"]');
    this.toDate = page.locator('//div//input[@title="To Date"]');
    this.fromDateCalenderIcon = page.locator('//div//input[@title="From Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
    this.toDateCalenderIcon = page.locator('//div//input[@title="To Date"]/following::mat-icon[@data-mat-icon-name="icon-calendar"][1]');
    this.fromCurrencyfield = page.locator('//div//mat-label//span[@title="From Currency"]');
    this.toCurrencyfield = page.locator('//div//mat-label//span[@title="To Currency"]');
    this.searchButton = page.locator('//button[@title="Search"]');
    this.resetButton = page.locator('//button[@title="Reset"]')
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
    await expect(this.fxRatesShortcut).toBeVisible;
  }

  async clickOnAddFxRatesButton() {
    await this.addfxRates.click();
  }

  async selectAddFromCurrency(fromCurrencyData: string) {
    let dropdownOptions = await this.page.locator('//mat-dialog-container//div[1]//input[@aria-haspopup="listbox"]');
    await dropdownOptions.first().click();
    await this.fromCurrencyenter.fill(fromCurrencyData);
    await this.selectvalue.click();

  }

  async getRate(rate: string) {
    await this.rate.fill(rate);

  }

  async clickOnCloseButton() {
    await this.closebutton.click();
  }

  async verifyRecordsPerPageTitle(data: string) {
    const actual = await this.recordPerPage.textContent();
    expect(actual).toBe(data);
  }


  async clickOnRecordsPerPageDropdown(data: string[]) {
    await this.recordPerPageDropdown.click();
    await expect(this.page.locator('//mat-option//span')).toHaveText([' 10 ', ' 15 ', ' 20 ', ' 30 ', ' 50 ', ' 100 ', ' 250 ']);
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
    await expect(this.searchBar).toBeVisible;
  }

  async enterinSearchbar(data: string) {
    await this.searchBar.fill(data);
    const actual = await this.label.textContent();
    expect(actual).toBe(data);
  }

  async verifyFXRatesText(data: string) {
    const actual = await this.fxRatestext.textContent();
    expect(actual).toBe(data);
  }

  async verifyFromDate() {
    await expect(this.fromDate).toBeVisible;
  }

  async verifyToDate() {
    await expect(this.toDate).toBeVisible;
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
    await expect(this.fromCurrencyfield).toBeVisible;
  }

  async verifyToCurrencyField() {
    await expect(this.toCurrencyfield).toBeVisible;
  }



  async selectFromCurrency(data: string) {
    await this.page.waitForLoadState('networkidle');
    await this.fromCurrencyfield.click();
    const fromCurrencyinput = this.page.locator('//form//div[contains(@class,"w-md-auto")][2]//iris-autocomplete-select//div//input[contains(@class,"input-element")]');
    fromCurrencyinput.fill(data);
    const selectfromCurrencyinput = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
    selectfromCurrencyinput.click();
  }


  async selectToCurrency(data: string) {
    await this.page.waitForLoadState('networkidle');
    await this.toCurrencyfield.click();
    const toCurrencyinput = this.page.locator('//form//div[contains(@class,"w-md-auto")][3]//iris-autocomplete-select//div//input[contains(@class,"input-element")]');
    toCurrencyinput.fill(data);
    const selecttoCurrencyinput = this.page.locator('//mat-option//span//mat-label[text()="' + data + '"]');
    selecttoCurrencyinput.click();
  }


  async verifySearchbuttonField() {
    await expect(this.searchButton).toBeVisible;
  }

  async verifyResetbuttonField() {
    await expect(this.resetButton).toBeVisible;
  }

  async clickOnSearchButton() {
    await this.searchButton.click();
  }

  async clickOnResetButton() {
    await this.resetButton.click();
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
    } fromCurrency
  }


  async verifyToCurrencyFromGrid() {
    const toCurrency = this.page.locator('//mat-cell[contains(@class,"toCurrLongDesc")]');
    for (let i = 0; i < await toCurrency.count(); i++) {
      expect(toCurrency.nth(i).innerText()).toBeTruthy();
    }
  }

  async verifyafterResetCurrencyFieldReset() {
    const fromCurrencyinput = this.page.locator('//form//div[contains(@class,"w-md-auto")][2]//iris-autocomplete-select//div//input[contains(@class,"input-element")]');
    const toCurrencyinput = this.page.locator('//form//div[contains(@class,"w-md-auto")][3]//iris-autocomplete-select//div//input[contains(@class,"input-element")]');
    expect(fromCurrencyinput).toBeEmpty();
    expect(toCurrencyinput).toBeEmpty();

  }
}