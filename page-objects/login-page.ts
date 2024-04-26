import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class LoginPage {
    readonly page: Page;
    readonly userNameOrEmailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signinButton: Locator;
    readonly rememberMeCheckbox: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userNameOrEmailInputField = page.locator('input[title="Email or Username"]');
        this.passwordInputField = page.locator('input[title="Password"]');
        this.signinButton = page.locator('span[title="Sign in"]');
        this.rememberMeCheckbox = page.locator('//mat-checkbox');
    }

    async gotoLoginPage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
    }

    async loginToApplication(superUser: string, password: string) {
        await this.userNameOrEmailInputField.fill(superUser);
        await this.passwordInputField.fill(password);
        //  await this.rememberMeCheckbox.click();
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