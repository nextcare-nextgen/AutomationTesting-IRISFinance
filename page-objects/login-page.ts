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

    // async loginToApplication(superUser: string, password: string) {
    //     await this.userNameOrEmailInputField.fill(superUser);
    //     await this.passwordInputField.fill(password);
    //     await new Promise(resolve => setTimeout(resolve, 5000));
    //     await this.signinButton.click();
    // }

    async loginToApplication(superUser: string, password: string): Promise<void> {
    // ✅ Step 1: Check and close CAPTCHA error if it exists BEFORE login
    try {
        if (await this.captchaError.isVisible({ timeout: 3000 })) {
            console.warn("CAPTCHA error dialog detected on page load. Closing it before login.");
            await this.captchaError.click();
            await this.page.waitForTimeout(2000); // wait for UI to reset
        }
    } catch (e) {
        // No CAPTCHA error, continue
    }

    // ✅ Step 2: Enter credentials and attempt login
    await this.userNameOrEmailInputField.fill(superUser);
    await this.passwordInputField.fill(password);
    await this.signinButton.click();

    // ✅ Step 3: Check again if CAPTCHA appears after login attempt
    try {
        if (await this.captchaError.isVisible({ timeout: 5000 })) {
            console.warn("CAPTCHA error appeared after login attempt. Closing it.");
            await this.captchaError.click();
            await this.page.waitForTimeout(2000); // Let UI recover
            
            // Optional: Retry login once
            console.log("Retrying login after closing CAPTCHA error...");
            await this.userNameOrEmailInputField.fill(superUser);
            await this.passwordInputField.fill(password);
            await this.signinButton.click();
        }
    } catch (e) {
        // No CAPTCHA error, proceed
    }

    // ✅ Step 4: Wait for successful login or dashboard load
    await this.page.waitForLoadState('networkidle');
    // Optionally: Wait for a post-login element
    // await this.page.locator('selector-for-dashboard-element').waitFor();
}

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