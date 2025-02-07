import { expect, test } from '@playwright/test';
import { LoginPage } from "../../page-objects/login-page.ts";
import { DashboardPage } from '../../page-objects/dashboard-pages/dashboard-page.ts';
import { Reports } from '../../page-objects/Reports-pages/Reports-page.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
const reportsData = require(`../../testdata/${process.env.ENV || 'eu'}/Reports.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'eu'}/login.json`) as Record<string, any>;
const dashboardData = require(`../../testdata/${process.env.ENV || 'eu'}/dashboard.json`) as Record<string, any>;

test('NXGF-TC-3820: TC_001_IPT_Verify that the user is able to login to the IRIS-Finance portal', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await test.step("User navigates to Mawista application", async () => {
        await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
        await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);

    })
});

// test('NXGF-TC-3821: TC_002_IPT_Verify that user is able to view all the shortcut icons and navigate to the Insurance premium tax icon', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access1'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);

//     })

//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();

//     })

//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();

//     })
//     await test.step("User Click on Reports Menu Icon", async () => {
//         await reportsPage.clickOnIPToption();
//     })
    
// })

// test('NXGF-TC-3823: TC_004_IPT_Verify that the user is able to select todays date in the "from date" calendar selection', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);
    
//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access1'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);

//     })

//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();

//     })

//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();

//     })
//     await test.step("User Selects Insurance Premim Tax option", async () => {
//         await reportsPage.clickOnIPToption();
//     })
//     await test.step("User selects the today's date as the from date value", async () => {
//         await reportsPage.fillFromDate();
//     })
    
// })

// test('NXGF-TC-3824: TC_005_IPT_Verify that the user should not be able to select future date in the "from date" calendar selection', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access1'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);

//     })

//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })

//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//      })
    
//      await test.step("User Selects Insurance Premim Tax option", async () => {
//         await reportsPage.clickOnIPToption();
//     })

//     await test.step("User selects the future date as the from date value", async () => {
//         await reportsPage.ensureFromDateIsNotInFuture();
//     })
    
// })

// test('NXGF-TC-3825: TC_006_IPT_Verify that the user should is be able to select past date in the "from date" calendar selection', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);

//     })

//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })

//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//      })
    
//      await test.step("User Selects Insurance Premim Tax option", async () => {
//         await reportsPage.clickOnIPToption();
//     })
    
//     await test.step("User selects the past date as the from date value", async () => {
//         await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
//         //await reportsPage.fillFromDate();
//     })

//     await test.step("click on search button", async () => {
//         await reportsPage.ClickonSearchBtn();
//     })
    
// })

// test('NXGF-TC-3826: TC_007_IPT_Verify that the user is able to select from date and to date, clcik on the search icon and the results shows the records between the specified dates', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//         await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);

//     })

//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })

//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//      })
    
//      await test.step("User Selects Insurance Premim Tax option", async () => {
//         await reportsPage.clickOnIPToption();
//     })
    
//     await test.step("User provides the from date value", async () => {
//         await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
        
//     })

//     await test.step("User provides the To date value", async () => {
//         await reportsPage.fillToDate();
//     })

//     await test.step("click on search button", async () => {
//         await reportsPage.ClickonSearchBtn();
//     })
// })

// test('NXGF-TC-3826: TC_008_IPT_Verify that the user is able to click on the advanced search filter', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//     await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })
    
//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })
    
//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//     })
        
//     await test.step("User Selects Insurance Premim Tax option", async () => {
//     await reportsPage.clickOnIPToption();
//     })

//     // await test.step("User selects the today's date as the from date value", async () => {
//     // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
//     // })
      
//     // await test.step("User provides the To date value", async () => {
//     // await reportsPage.fillToDate();
//     // })

//     await test.step("User needs to click on advance search option", async () => {
//     await reportsPage.clickOnFilterBtn();
//     })
// })

// test('NXGF-TC-3826: TC_009_IPT_Verify that the user is able to select the Product line and the FOB values from the dropdown', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//     await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })
    
//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })
    
//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//     })
        
//     await test.step("User Selects Insurance Premim Tax option", async () => {
//     await reportsPage.clickOnIPToption();
//     })

//     // await test.step("User selects the today's date as the from date value", async () => {
//     // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
//     // })
      
//     // await test.step("User provides the To date value", async () => {
//     // await reportsPage.fillToDate();
//     // })

//     await test.step("User needs to click on advance search option", async () => {
//     await reportsPage.clickOnFilterBtn();
//     })

//     await test.step("Click on the Product line and select a value from the dropdown", async () => {
//     await reportsPage.selectProductLine();
//     })

//     await test.step("Click on the FOB and select a value from the drop down", async () => {
//     await reportsPage.selectFOB();
//     })

// })

// test('NXGF-TC-3826: TC_010_IPT_Verify that the user is able to click on search based on the product line only', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//     await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })
    
//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })
    
//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//     })
        
//     await test.step("User Selects Insurance Premim Tax option", async () => {
//     await reportsPage.clickOnIPToption();
//     })

//     // await test.step("User selects the today's date as the from date value", async () => {
//     // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
//     // })
      
//     // await test.step("User provides the To date value", async () => {
//     // await reportsPage.fillToDate();
//     // })

//     await test.step("User needs to click on advance search option", async () => {
//     await reportsPage.clickOnFilterBtn();
//     })

//     await test.step("Click on the Product line and select a value from the dropdown", async () => {
//     await reportsPage.selectProductLine();
//     })

//     await test.step("click on search in the advanced fields only", async () => {
//     await reportsPage.addValueAndClickOnApplyBtn();
//     await reportsPage.ClickonSearchBtn();
//     })

// })

// test('NXGF-TC-3826: TC_011_IPT_Verify that the user is able to search based on the FOB only', async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);
//     const dashboardPage: DashboardPage = new DashboardPage(page);
//     const reportsPage: Reports = new Reports(page);

//     await test.step("User navigates to Mawista application", async () => {
//     await loginPage.gotoLoginPage(data['Login-Access'].url);
//     })

//     await test.step("User Enter Username and Password", async () => {
//     await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
//     })
    
//     await test.step("Set the organization to Allianz partners 2024", async () => {
//     await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
//     })

//     await test.step("User Click on Menu Icon", async () => {
//     await dashboardPage.clickOnMenuIconButton();
//     })
    
//     await test.step("User Click on Reports Menu Icon", async () => {
//     await reportsPage.clickOnReportsMenuIcon();
//     })
        
//     await test.step("User Selects Insurance Premim Tax option", async () => {
//     await reportsPage.clickOnIPToption();
//     })

//     // await test.step("User selects the today's date as the from date value", async () => {
//     // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
//     // })
      
//     // await test.step("User provides the To date value", async () => {
//     // await reportsPage.fillToDate();
//     // })

//     await test.step("User needs to click on advance search option", async () => {
//     await reportsPage.clickOnFilterBtn();
//     })

//     await test.step("Click on the FoB and select a value from the dropdown", async () => {
//     await reportsPage.selectFOB();
//     })
    
//     await test.step("click on search in the advanced fields only", async () => {
//     await reportsPage.addValueAndClickOnApplyBtn();
//     await reportsPage.ClickonSearchBtn();
//     })
// })

test('NXGF-TC-3826: TC_012_IPT_Verify that click on Clear all clears the advance search fields', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const reportsPage: Reports = new Reports(page);

    await test.step("User navigates to Mawista application", async () => {
    await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
    await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })
    
    await test.step("Set the organization to Allianz partners 2024", async () => {
    await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
    await dashboardPage.clickOnMenuIconButton();
    })
    
    await test.step("User Click on Reports Menu Icon", async () => {
    await reportsPage.clickOnReportsMenuIcon();
    })
        
    await test.step("User Selects Insurance Premim Tax option", async () => {
    await reportsPage.clickOnIPToption();
    })

    // await test.step("User selects the today's date as the from date value", async () => {
    // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
    // })
      
    // await test.step("User provides the To date value", async () => {
    // await reportsPage.fillToDate();
    // })

    await test.step("User needs to click on advance search option", async () => {
    await reportsPage.clickOnFilterBtn();
    })

    await test.step("Click on the Product line and select a value from the dropdown", async () => {
    await reportsPage.selectProductLine();
    })
    
    await test.step("Click on the FoB and select a value from the dropdown", async () => {
    await reportsPage.selectFOB();
    })
    
    await test.step("click on search in the advanced fields only", async () => {
    await reportsPage.addValueAndClickOnApplyBtn();
    await reportsPage.ClickonSearchBtn();
    })

    await test.step("after the sear result click on Clear all", async () => {
    await reportsPage.clickOnFilterBtn();
    await reportsPage.clearAllbtn();
    })
})

test('NXGF-TC-3826: TC_013_IPT_Verify that the turn over is the sum of net premium amount and the IPT amount', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const reportsPage: Reports = new Reports(page);

    await test.step("User navigates to Mawista application", async () => {
    await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
    await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })
    
    await test.step("Set the organization to Allianz partners 2024", async () => {
    await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
    await dashboardPage.clickOnMenuIconButton();
    })
    
    await test.step("User Click on Reports Menu Icon", async () => {
    await reportsPage.clickOnReportsMenuIcon();
    })
        
    await test.step("User Selects Insurance Premim Tax option", async () => {
    await reportsPage.clickOnIPToption();
    })

    // await test.step("User selects the today's date as the from date value", async () => {
    // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
    // })
      
    // await test.step("User provides the To date value", async () => {
    // await reportsPage.fillToDate();
    // })

    await test.step("User needs to click on advance search option", async () => {
    await reportsPage.clickOnFilterBtn();
    })

    await test.step("Click on the Product line and select a value from the dropdown", async () => {
    await reportsPage.selectProductLine();
    })
    
    await test.step("Click on the FoB and select a value from the dropdown", async () => {
    await reportsPage.selectFOB();
    })
    
    await test.step("click on search in the advanced search field", async () => {
    await reportsPage.addValueAndClickOnApplyBtn();
    await reportsPage.ClickonSearchBtn();
    await reportsPage.calculateAndVerifyTurnover();
    })
})

test('NXGF-TC-3826: TC_015_IPT_Verify that the product lines total row should reflect the totals for Net premium, IPT amount and turnover', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const reportsPage: Reports = new Reports(page);

    await test.step("User navigates to Mawista application", async () => {
    await loginPage.gotoLoginPage(data['Login-Access'].url);
    })

    await test.step("User Enter Username and Password", async () => {
    await loginPage.loginToApplication(data['Login-Access1'].userNameInput, data['Login-Access1'].passwordInput);
    })
    
    await test.step("Set the organization to Allianz partners 2024", async () => {
    await dashboardPage.selectOrganizationAndYear(dashboardData['TC_001_Policies'].org, dashboardData['TC_001_Policies'].year);
    })

    await test.step("User Click on Menu Icon", async () => {
    await dashboardPage.clickOnMenuIconButton();
    })
    
    await test.step("User Click on Reports Menu Icon", async () => {
    await reportsPage.clickOnReportsMenuIcon();
    })
        
    await test.step("User Selects Insurance Premim Tax option", async () => {
    await reportsPage.clickOnIPToption();
    })

    // await test.step("User selects the today's date as the from date value", async () => {
    // await reportsPage.fillfromDate_PastDate(reportsData["TC_Reports_001"].PastDate_Duration);
    // })
      
    // await test.step("User provides the To date value", async () => {
    // await reportsPage.fillToDate();
    // })

    await test.step("User needs to click on advance search option", async () => {
    await reportsPage.clickOnFilterBtn();
    })

    await test.step("Click on the Product line and select a value from the dropdown", async () => {
    await reportsPage.selectProductLine();
    })
    
    await test.step("Click on the FoB and select a value from the dropdown", async () => {
    await reportsPage.selectFOB();
    })
    
    await test.step("click on search in the advanced search field", async () => {
    await reportsPage.addValueAndClickOnApplyBtn();
    await reportsPage.ClickonSearchBtn();
    await reportsPage.verifyTotals();
    })
})