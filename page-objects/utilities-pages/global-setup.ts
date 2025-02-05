import { DynamicName } from "./dynamicNaming";
import { expect, test } from "@playwright/test";
import path from "path";
import fs from 'fs';
import { LoginPage } from "../../page-objects/login-page";
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;

test.afterEach(async ({ page, request, baseURL }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        let scPath: string = `test-results/screenshots/sc.png`;
        await page.screenshot({ path: scPath });
        testInfo.annotations.push({ type: 'Screen shot on Failure', description: scPath });
        const file = path.resolve(scPath);
        const image = fs.readFileSync(file);
        const testCaseID: string = testInfo.title.split(':')[0];
        const projectID: string = testCaseID.split(':')[0];
        const response = await request.post(`${baseURL}/api/v1/project/${projectID}/testcase/${testCaseID}/attachment`, {
            headers: {
                Accept: "*/*",
                ContentType: "multipart/form-data",
            },
            multipart: {
                file: {
                    name: `${process.env.TEST_CYCLE_ID || "NXGF-CY-12"}_${DynamicName.fileName()}`,
                    mimeType: "image/png",
                    buffer: image,
                },
            },
        });
    }
});


// test.afterEach(async ({ page, request, baseURL }, testInfo) => {
//     if (testInfo.status !== 'passed') {
//         let scPath: string = `test-results/screenshots/sc.png`;
//         await page.screenshot({ path: scPath });
//         testInfo.annotations.push({ type: 'Screenshot on Failure', description: scPath });
//         const file = path.resolve(scPath);
//         const image = fs.readFileSync(file);
//         const testCaseID: string = testInfo.title.split(':')[0];
//         const projectID: string = testCaseID.split(':')[0];

//         const response = await request.post(`${baseURL}/api/v1/project/${projectID}/testcase/${testCaseID}/attachment`, {
//             multipart: {
//                 file: {
//                     name: `${process.env.TEST_CYCLE_ID || "NXGF-CY-12"}_${DynamicName.fileName()}`,
//                     mimeType: "image/png",
//                     buffer: image,
//                 },
//             },
//         });
//         if (!response.ok()) {
//             console.error('Failed to upload screenshot:', await response.text());
//         }
//     }
// });

/*test.beforeEach(async ({ page }, testInfo) => {
    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await page.goto('https://test-finance-eu.tatsh.cloud/');
     })
 
     await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data["Login-Access"].userNameInput, data["Login-Access"].passwordInput);
     })
    
  });*/