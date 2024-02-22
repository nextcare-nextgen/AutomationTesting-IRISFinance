import { Keyboard, Locator, Page, expect } from "@playwright/test";

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

  }

  /**
   * This function is used to verify the current page title
   * @param expectedPageTitle - the title youwant to verify
   */

  /**
    * This function is used to click on Appointments Buttom
    */
  async clickOnFxRatesShrtcutsButton() {
    await this.fxRatesShortcut.click();
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

  async selectFromCurrency(fromCurrencyData: string) {
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





  /**
    * This function is used to verify whether confirm button is enabled or not
    */
  // async verifyConfirmButtonIsEnabled() {
  //     await this.confirmButton.waitFor();
  //     expect(this.confirmButton).toBeEnabled();
  // }

  // /**
  //   * This function is used to verify confirm button is disabled
  //   */
  // async verifyConfirmButtonIsDisabled() {
  //   await expect(this.confirmButton).toBeDisabled()	
  // }

  /**
   *  This function is used to verify appointment status text
   * @param data 
   */

}