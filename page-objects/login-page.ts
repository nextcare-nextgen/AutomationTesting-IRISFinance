import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class LoginPage {
    readonly page: Page;
    readonly userNameOrEmailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signinButton: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly checkBoxSelector: Locator;
    readonly captchaError: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userNameOrEmailInputField = page.locator('input[title="Email or Username"]');
        this.passwordInputField = page.locator('input[title="Password"]');
        //this.signinButton = page.locator('span[title="Sign in"]');
       // code updated 19-12-2024
       this.signinButton = page.locator("//button[@title='Sign in']");
        this.rememberMeCheckbox = page.locator('//mat-checkbox');
        this.checkBoxSelector= page.locator("//input[contains(@type,'checkbox')]");
        this.captchaError= page.locator("//mat-icon[@title='Cancel']//*[name()='svg']");
    }

    async gotoLoginPage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
    }

    async loginToApplication(superUser: string, password: string) {
        await this.userNameOrEmailInputField.fill(superUser);
        await this.passwordInputField.fill(password);
        await new Promise(resolve => setTimeout(resolve, 10000));
        await this.signinButton.click();
    }

    // async loginToApplication(superUser: string, password: string): Promise<void> {
    // // Attempt to close CAPTCHA if present before login
    // if (await this.captchaError.isVisible({ timeout: 3000 }).catch(() => false)) {
    //     console.warn("CAPTCHA detected. Closing it...");
    //     await this.captchaError.click();
    //     await this.page.waitForTimeout(1000);
    // }

    // // Fill in login credentials
    // await this.userNameOrEmailInputField.fill(superUser);
    // await this.passwordInputField.fill(password);
    // await this.signinButton.click();

    // // Wait for possible CAPTCHA again
    // if (await this.captchaError.isVisible({ timeout: 5000 }).catch(() => false)) {
    //     console.warn("CAPTCHA reappeared after login. Closing and retrying...");
    //     await this.captchaError.click();
    //     await this.page.waitForTimeout(1000);

    //     // Retry login once
    //     await this.userNameOrEmailInputField.fill(superUser);
    //     await this.passwordInputField.fill(password);
    //     await this.signinButton.click();
    //     }

    //     await this.page.waitForLoadState('networkidle');
    //     console.log("Login process completed.");
    // }

    async loginToApplicationAndClickOnCheckbox(superUser: string, password: string) {
        await this.userNameOrEmailInputField.fill(superUser);
        await this.passwordInputField.fill(password);
        await this.checkBoxSelector.click(); 
        await new Promise(resolve => setTimeout(resolve, 5000));
        await this.signinButton.click();
    }

    async enterLoginDetails(superUser: string, password: string) {
        await this.userNameOrEmailInputField.fill(superUser);
        await this.passwordInputField.fill(password);
        await this.rememberMeCheckbox.click();
    }
    async enterEmailId(emailID: string) {
        await this.userNameOrEmailInputField.fill(emailID);
    }

    async clickOnSigninButton() {
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * This function is used to verify the current page title
     * @param expectedPageTitle - the title youwant to verify
     */
    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        const actualPageTitle = await this.page.title();
        console.log(actualPageTitle);
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    async verifyLoginUI() {
        expect(this.userNameOrEmailInputField).toBeVisible();
        expect(this.passwordInputField).toBeVisible();
        expect(this.rememberMeCheckbox).toBeVisible();
        expect(this.signinButton).toBeVisible();

    }
}