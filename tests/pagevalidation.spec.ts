import{test, expect} from '@playwright/test';

/*test('Verify hyperlink open in a new tan', async ({ page }) => {
    //open the page containg the hyperlink
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //wait for the hyperlink to be visible
    const nePagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Free Access to InterviewQues/ResumeAssistance/Material' }).click();

    //get the newly opened tab

    const newPage = await nePagePromise;

    //wait until the new tab is loaded

    await newPage.waitForLoadState('domcontentloaded');

    //validate the url of the new tab
    await expect(newPage).toHaveURL('https://rahulshettyacademy.com/documents-request');

    //validate the title of the new tab
    await expect(newPage).toHaveTitle('RS Academy');

    //close the new tab
    await newPage.close();

}); */


test('Verify name entered in prompt is displayyed', async ({ page }) => { 
    await page.goto('https://demoqa.com/alerts');
     const name = 'Aslitha';

     page.once('dialog', async dialog => {
        await dialog.accept(name);
     });
     await page.getByRole('button', { name: 'Click me' }).nth(3).click();

     await expect(page.locator('//*[@id="promptResult"]')).toHaveText(`You entered Aslitha`);

});

